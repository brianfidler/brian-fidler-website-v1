# Agent Architecture

This directory contains the multi-agent system architecture for the project. The system consists of a main agent that orchestrates various subagents, each responsible for specific functionality.

## Architecture Overview

```
MainAgent (Orchestrator)
├── DataProcessingAgent
├── UserInteractionAgent
├── AnalyticsAgent
└── IntegrationAgent
```

## Directory Structure

```
agents/
├── main-agent/
│   ├── index.js              # Main agent entry point
│   ├── agent-manager.js      # Subagent lifecycle management
│   └── task-orchestrator.js  # Task routing and coordination
├── subagents/
│   ├── data-processing/      # Data validation, transformation, cleaning
│   ├── user-interaction/     # UI management, user input processing
│   ├── analytics/           # Data analysis, reporting, insights
│   └── integration/         # External API integrations
├── shared/
│   ├── utils/               # Shared utilities (logger, etc.)
│   ├── types/               # Type definitions
│   └── constants/           # Shared constants
└── README.md               # This file
```

## Getting Started

### 1. Start the Main Agent

```bash
cd agents/main-agent
node index.js
```

The main agent will start on port 3001 by default.

### 2. Check Agent Status

```bash
curl http://localhost:3001/api/health
curl http://localhost:3001/api/subagents
```

### 3. Execute Tasks

```bash
# Execute a task on the main agent
curl -X POST http://localhost:3001/api/main-agent/task \
  -H "Content-Type: application/json" \
  -d '{
    "task": "process_data",
    "data": { "content": "test data" },
    "priority": "high"
  }'

# Execute a task on a specific subagent
curl -X POST http://localhost:3001/api/subagents/dataProcessing/task \
  -H "Content-Type: application/json" \
  -d '{
    "task": "validate_data",
    "data": {
      "content": "test@example.com",
      "type": "email"
    }
  }'
```

## Agent Capabilities

### Main Agent
- Task orchestration and routing
- Subagent lifecycle management
- Error handling and recovery
- Performance monitoring

### Data Processing Agent
- Data validation (JSON, CSV, XML, email, phone)
- Data transformation (normalize, clean, format, aggregate, filter)
- Batch processing
- Data cleaning and deduplication

### User Interaction Agent
- UI management
- User input processing
- Response generation
- Session management

### Analytics Agent
- Data analysis
- Report generation
- Trend analysis
- Performance monitoring

### Integration Agent
- External API integration
- Webhook management
- Data synchronization
- Service discovery

## Configuration

Agent configuration is managed in `config/agent-config.json`. Each agent can be configured with:

- Capabilities
- Performance settings
- Timeout values
- Memory limits
- Custom parameters

## Adding New Subagents

1. Create a new directory in `agents/subagents/`
2. Extend the `BaseAgent` class
3. Implement required methods:
   - `onInitialize()`
   - `onExecuteTask(task, data)`
   - `onShutdown()`
4. Add configuration to `config/agent-config.json`
5. Register in `agents/main-agent/agent-manager.js`

## Example: Creating a Custom Agent

```javascript
const { BaseAgent } = require('./base-agent');

class CustomAgent extends BaseAgent {
  async onInitialize() {
    // Custom initialization logic
  }

  async onExecuteTask(task, data) {
    switch (task) {
      case 'custom_task':
        return await this.performCustomTask(data);
      default:
        throw new Error(`Unknown task: ${task}`);
    }
  }

  async onShutdown() {
    // Custom shutdown logic
  }

  async performCustomTask(data) {
    // Custom task implementation
    return { result: 'success' };
  }
}

module.exports = { CustomAgent };
```

## Monitoring and Logging

All agents use the shared `Logger` utility for consistent logging:

- Log levels: error, warn, info, debug
- JSON format for structured logging
- File and console output options
- Performance tracking
- Task execution logging

## Error Handling

The agent system includes comprehensive error handling:

- Task-level error recovery
- Agent-level error isolation
- Automatic retry mechanisms
- Error reporting and logging
- Graceful degradation

## Performance Considerations

- Batch processing for large datasets
- Memory usage monitoring
- Timeout management
- Concurrent task limits
- Performance metrics collection

