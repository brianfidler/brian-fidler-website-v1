# Setup Guide: Adding PRD and Agents to Your Project

This guide will help you add a Product Requirements Document (PRD) and various agents/subagents to your MCP project.

## 1. Project Structure Overview

Your project now includes:

```
/Users/brianfidler/Documents/wip/brian-fidler-website/
├── docs/
│   └── prd/
│       ├── product-requirements.md    # Main PRD template
│       ├── user-stories.md            # User story templates
│       ├── technical-specifications.md # Technical specs
│       ├── wireframes/                # UI wireframes
│       └── setup-guide.md            # This file
├── agents/
│   ├── main-agent/                   # Main orchestrator agent
│   ├── subagents/                    # Specialized subagents
│   └── shared/                       # Shared utilities
├── config/
│   ├── agent-config.json            # Agent configuration
│   └── mcp-config.json              # MCP server configuration
└── tests/
    ├── agents/                       # Agent tests
    └── integration/                  # Integration tests
```

## 2. Adding Your PRD

### Step 1: Customize the PRD Template

1. Open `docs/prd/product-requirements.md`
2. Replace all placeholder text (marked with `[brackets]`) with your specific requirements
3. Add your product vision, problem statement, and success metrics
4. Define your target users and user journeys
5. List your core features and functional requirements

### Step 2: Create Additional PRD Documents

Create these additional documents as needed:

```bash
# User Stories
touch docs/prd/user-stories.md

# Technical Specifications
touch docs/prd/technical-specifications.md

# API Documentation
touch docs/prd/api-documentation.md

# Database Schema
touch docs/prd/database-schema.md
```

### Step 3: Add Wireframes and Mockups

Place your UI wireframes and mockups in the `docs/prd/wireframes/` directory:

```bash
mkdir -p docs/prd/wireframes/{mobile,desktop,tablet}
```

## 3. Configuring Your Agents

### Step 1: Update Agent Configuration

Edit `config/agent-config.json` to match your requirements:

```json
{
  "mainAgent": {
    "name": "YourMainAgent",
    "description": "Your main agent description",
    "capabilities": [
      "your_custom_capability_1",
      "your_custom_capability_2"
    ]
  },
  "subagents": {
    "yourCustomAgent": {
      "name": "YourCustomAgent",
      "capabilities": ["custom_capability"],
      "config": {
        "yourSetting": "value"
      }
    }
  }
}
```

### Step 2: Add Custom Subagents

1. Create a new directory in `agents/subagents/`:
   ```bash
   mkdir agents/subagents/your-custom-agent
   ```

2. Create the agent files:
   ```bash
   touch agents/subagents/your-custom-agent/index.js
   cp agents/subagents/data-processing/base-agent.js agents/subagents/your-custom-agent/
   ```

3. Implement your custom agent by extending `BaseAgent`:
   ```javascript
   const { BaseAgent } = require('./base-agent');

   class YourCustomAgent extends BaseAgent {
     async onExecuteTask(task, data) {
       switch (task) {
         case 'your_custom_task':
           return await this.performCustomTask(data);
         default:
           throw new Error(`Unknown task: ${task}`);
       }
     }

     async performCustomTask(data) {
       // Your custom logic here
       return { result: 'success' };
     }
   }
   ```

4. Register your agent in `agents/main-agent/agent-manager.js`

## 4. Running Your Agents

### Start the Main Agent

```bash
# Production mode
npm run agent

# Development mode with auto-restart
npm run agent:dev
```

### Check Agent Status

```bash
# Check main agent health
npm run agents:status

# Check subagent status
npm run agents:subagents
```

### Test Agent Functionality

```bash
# Test data processing
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

## 5. Integrating with MCP Servers

Your project already includes MCP server configuration. To integrate agents with MCP servers:

### Step 1: Update MCP Configuration

Edit `mcp-config.json` to add any additional MCP servers you need.

### Step 2: Create MCP Integration Agents

Create agents that can communicate with MCP servers:

```javascript
// Example: Filesystem integration agent
class FilesystemAgent extends BaseAgent {
  async onExecuteTask(task, data) {
    switch (task) {
      case 'read_file':
        return await this.readFile(data.path);
      case 'write_file':
        return await this.writeFile(data.path, data.content);
      default:
        throw new Error(`Unknown task: ${task}`);
    }
  }
}
```

## 6. Testing Your Setup

### Step 1: Create Test Files

```bash
# Create test directory structure
mkdir -p tests/agents/{unit,integration}
mkdir -p tests/integration/{api,agents}
```

### Step 2: Write Agent Tests

Create test files for your agents:

```javascript
// tests/agents/unit/your-custom-agent.test.js
const { YourCustomAgent } = require('../../../agents/subagents/your-custom-agent');

describe('YourCustomAgent', () => {
  let agent;

  beforeEach(async () => {
    agent = new YourCustomAgent({
      name: 'TestAgent',
      version: '1.0.0',
      capabilities: ['test_capability']
    });
    await agent.initialize();
  });

  afterEach(async () => {
    await agent.shutdown();
  });

  test('should perform custom task', async () => {
    const result = await agent.executeTask('your_custom_task', { test: 'data' });
    expect(result.result).toBe('success');
  });
});
```

### Step 3: Run Tests

```bash
# Run all tests
npm test

# Run agent tests only
npm test -- tests/agents/

# Run integration tests
npm test -- tests/integration/
```

## 7. Deployment Considerations

### Environment Variables

Create a `.env` file for your agent configuration:

```bash
# Agent Configuration
AGENT_PORT=3001
AGENT_LOG_LEVEL=info
AGENT_LOG_FILE=./logs/agents.log

# MCP Server Configuration
MCP_FILESYSTEM_ROOT=.
GITHUB_TOKEN=your_github_token
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_key
```

### Production Deployment

1. **Docker Configuration**: Create a `Dockerfile` for containerized deployment
2. **Process Management**: Use PM2 or similar for process management
3. **Monitoring**: Set up monitoring and alerting for your agents
4. **Logging**: Configure centralized logging for production

## 8. Next Steps

1. **Customize the PRD**: Fill in your specific product requirements
2. **Implement Custom Agents**: Create agents for your specific use cases
3. **Add MCP Integrations**: Connect your agents to MCP servers
4. **Write Tests**: Create comprehensive test coverage
5. **Deploy**: Set up production deployment

## 9. Troubleshooting

### Common Issues

1. **Agent won't start**: Check port availability and configuration
2. **Subagents not initializing**: Verify agent configuration in `agent-config.json`
3. **MCP server connection issues**: Check API keys and network connectivity
4. **Performance issues**: Monitor agent logs and adjust configuration

### Getting Help

- Check the agent logs in `./logs/agents.log`
- Use the health check endpoints to diagnose issues
- Review the agent configuration for errors
- Check MCP server connectivity

## 10. Best Practices

1. **Agent Design**: Keep agents focused on specific responsibilities
2. **Error Handling**: Implement comprehensive error handling and recovery
3. **Monitoring**: Set up monitoring for agent performance and health
4. **Documentation**: Keep your PRD and agent documentation up to date
5. **Testing**: Write tests for all agent functionality
6. **Security**: Implement proper authentication and authorization
7. **Scalability**: Design agents to handle increased load

