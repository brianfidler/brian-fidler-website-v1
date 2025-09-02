const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const { AgentManager } = require('./agent-manager');
const { TaskOrchestrator } = require('./task-orchestrator');
const { Logger } = require('../shared/utils/logger');
const config = require('../../config/agent-config.json');

class MainAgent {
  constructor() {
    this.app = express();
    this.agentManager = new AgentManager();
    this.taskOrchestrator = new TaskOrchestrator();
    this.logger = new Logger('MainAgent');
    
    this.setupMiddleware();
    this.setupRoutes();
    this.initializeSubagents();
  }

  setupMiddleware() {
    this.app.use(helmet());
    this.app.use(cors());
    this.app.use(morgan('combined'));
    this.app.use(express.json({ limit: '10mb' }));
    this.app.use(express.urlencoded({ extended: true }));
  }

  setupRoutes() {
    // Health check endpoint
    this.app.get('/api/health', (req, res) => {
      res.json({
        status: 'healthy',
        timestamp: new Date().toISOString(),
        agent: config.mainAgent.name,
        version: config.mainAgent.version
      });
    });

    // Main agent endpoints
    this.app.post('/api/main-agent/task', async (req, res) => {
      try {
        const { task, data, priority } = req.body;
        const result = await this.taskOrchestrator.executeTask(task, data, priority);
        res.json({ success: true, result });
      } catch (error) {
        this.logger.error('Task execution failed', error);
        res.status(500).json({ success: false, error: error.message });
      }
    });

    // Subagent management endpoints
    this.app.get('/api/subagents', (req, res) => {
      const subagents = this.agentManager.getSubagentStatus();
      res.json(subagents);
    });

    this.app.post('/api/subagents/:agentId/task', async (req, res) => {
      try {
        const { agentId } = req.params;
        const { task, data } = req.body;
        const result = await this.agentManager.executeSubagentTask(agentId, task, data);
        res.json({ success: true, result });
      } catch (error) {
        this.logger.error('Subagent task execution failed', error);
        res.status(500).json({ success: false, error: error.message });
      }
    });

    // Error handling middleware
    this.app.use((error, req, res, next) => {
      this.logger.error('Unhandled error', error);
      res.status(500).json({ success: false, error: 'Internal server error' });
    });
  }

  async initializeSubagents() {
    try {
      await this.agentManager.initializeSubagents();
      this.logger.info('All subagents initialized successfully');
    } catch (error) {
      this.logger.error('Failed to initialize subagents', error);
    }
  }

  start() {
    const port = config.communication.port || 3001;
    this.app.listen(port, () => {
      this.logger.info(`Main Agent started on port ${port}`);
      this.logger.info(`Agent: ${config.mainAgent.name} v${config.mainAgent.version}`);
    });
  }
}

// Export for use in other modules
module.exports = { MainAgent };

// Start the agent if this file is run directly
if (require.main === module) {
  const mainAgent = new MainAgent();
  mainAgent.start();
}

