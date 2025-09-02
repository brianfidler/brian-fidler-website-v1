const { Logger } = require('../shared/utils/logger');
const { DataProcessingAgent } = require('../subagents/data-processing');
const { UserInteractionAgent } = require('../subagents/user-interaction');
const { AnalyticsAgent } = require('../subagents/analytics');
const { IntegrationAgent } = require('../subagents/integration');
const { LeadQualificationAgent } = require('../subagents/lead-qualification');
const { ContentManagementAgent } = require('../subagents/content-management');
const { AnalyticsReportingAgent } = require('../subagents/analytics-reporting');
const { CreativeDirectorAgent } = require('../subagents/creative-director');
const { WhimsicalDesignerAgent } = require('../subagents/whimsical-designer');
const config = require('../../config/agent-config.json');

class AgentManager {
  constructor() {
    this.logger = new Logger('AgentManager');
    this.subagents = new Map();
    this.subagentStatus = new Map();
  }

  async initializeSubagents() {
    try {
      // Initialize each subagent based on configuration
      const subagentConfigs = config.subagents;
      
      for (const [agentType, agentConfig] of Object.entries(subagentConfigs)) {
        await this.initializeSubagent(agentType, agentConfig);
      }

      this.logger.info(`Initialized ${this.subagents.size} subagents`);
    } catch (error) {
      this.logger.error('Failed to initialize subagents', error);
      throw error;
    }
  }

  async initializeSubagent(agentType, agentConfig) {
    try {
      let agent;
      
      switch (agentType) {
        case 'dataProcessing':
          agent = new DataProcessingAgent(agentConfig);
          break;
        case 'userInteraction':
          agent = new UserInteractionAgent(agentConfig);
          break;
        case 'analytics':
          agent = new AnalyticsAgent(agentConfig);
          break;
        case 'integration':
          agent = new IntegrationAgent(agentConfig);
          break;
        case 'leadQualification':
          agent = new LeadQualificationAgent(agentConfig);
          break;
        case 'contentManagement':
          agent = new ContentManagementAgent(agentConfig);
          break;
        case 'analyticsReporting':
          agent = new AnalyticsReportingAgent(agentConfig);
          break;
        case 'creativeDirector':
          agent = new CreativeDirectorAgent(agentConfig);
          break;
        case 'whimsicalDesigner':
          agent = new WhimsicalDesignerAgent(agentConfig);
          break;
        default:
          throw new Error(`Unknown agent type: ${agentType}`);
      }

      await agent.initialize();
      this.subagents.set(agentType, agent);
      this.subagentStatus.set(agentType, {
        status: 'active',
        lastHeartbeat: new Date().toISOString(),
        capabilities: agentConfig.capabilities,
        config: agentConfig.config
      });

      this.logger.info(`Initialized ${agentType} agent`);
    } catch (error) {
      this.logger.error(`Failed to initialize ${agentType} agent`, error);
      this.subagentStatus.set(agentType, {
        status: 'error',
        error: error.message,
        lastHeartbeat: new Date().toISOString()
      });
      throw error;
    }
  }

  async executeSubagentTask(agentId, task, data) {
    const agent = this.subagents.get(agentId);
    if (!agent) {
      throw new Error(`Agent ${agentId} not found`);
    }

    try {
      this.logger.info(`Executing task ${task} on agent ${agentId}`);
      const result = await agent.executeTask(task, data);
      
      // Update status
      this.subagentStatus.set(agentId, {
        ...this.subagentStatus.get(agentId),
        lastHeartbeat: new Date().toISOString(),
        lastTask: task
      });

      return result;
    } catch (error) {
      this.logger.error(`Task execution failed on agent ${agentId}`, error);
      this.subagentStatus.set(agentId, {
        ...this.subagentStatus.get(agentId),
        status: 'error',
        lastError: error.message,
        lastHeartbeat: new Date().toISOString()
      });
      throw error;
    }
  }

  getSubagentStatus() {
    const status = {};
    for (const [agentId, agentStatus] of this.subagentStatus) {
      status[agentId] = agentStatus;
    }
    return status;
  }

  async getSubagentCapabilities(agentId) {
    const agent = this.subagents.get(agentId);
    if (!agent) {
      throw new Error(`Agent ${agentId} not found`);
    }
    return agent.getCapabilities();
  }

  async restartSubagent(agentId) {
    try {
      const agent = this.subagents.get(agentId);
      if (!agent) {
        throw new Error(`Agent ${agentId} not found`);
      }

      this.logger.info(`Restarting agent ${agentId}`);
      await agent.shutdown();
      await agent.initialize();
      
      this.subagentStatus.set(agentId, {
        ...this.subagentStatus.get(agentId),
        status: 'active',
        lastHeartbeat: new Date().toISOString()
      });

      this.logger.info(`Agent ${agentId} restarted successfully`);
    } catch (error) {
      this.logger.error(`Failed to restart agent ${agentId}`, error);
      throw error;
    }
  }

  async shutdown() {
    this.logger.info('Shutting down all subagents');
    
    for (const [agentId, agent] of this.subagents) {
      try {
        await agent.shutdown();
        this.subagentStatus.set(agentId, {
          ...this.subagentStatus.get(agentId),
          status: 'shutdown',
          lastHeartbeat: new Date().toISOString()
        });
      } catch (error) {
        this.logger.error(`Failed to shutdown agent ${agentId}`, error);
      }
    }
  }
}

module.exports = { AgentManager };
