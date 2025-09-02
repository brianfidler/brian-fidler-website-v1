# Custom Agents Guide: Creating Agents with Unique Capabilities

This guide shows you how to create custom agents with specific capabilities tailored to your Fractional CMO business needs.

## Overview

Your agent system now includes these custom agents:

1. **Lead Qualification Agent** - Automatically scores and routes leads
2. **Content Management Agent** - Manages Sanity CMS and content workflows
3. **Analytics & Reporting Agent** - Analyzes performance and generates insights

## Creating Custom Agents: Step-by-Step Process

### Step 1: Define Your Agent's Purpose

First, clearly define what your custom agent should do:

```javascript
// Example: A Client Onboarding Agent
const agentPurpose = {
  name: "ClientOnboardingAgent",
  description: "Manages the client onboarding process and initial setup",
  capabilities: [
    "client_profile_creation",
    "service_agreement_generation",
    "initial_assessment",
    "resource_allocation",
    "timeline_planning"
  ]
};
```

### Step 2: Create the Agent Directory Structure

```bash
# Create the agent directory
mkdir -p agents/subagents/your-custom-agent

# Copy the base agent template
cp agents/subagents/data-processing/base-agent.js agents/subagents/your-custom-agent/

# Create the main agent file
touch agents/subagents/your-custom-agent/index.js
```

### Step 3: Implement Your Custom Agent

Create your agent by extending the `BaseAgent` class:

```javascript
const { BaseAgent } = require('./base-agent');

class YourCustomAgent extends BaseAgent {
  constructor(config) {
    super(config);
    // Initialize your agent-specific properties
    this.customData = new Map();
    this.workflows = new Map();
  }

  async onInitialize() {
    // Set up your agent's initialization logic
    await this.setupWorkflows();
    await this.loadConfiguration();
    this.logger.info('YourCustomAgent initialized successfully');
  }

  async onExecuteTask(task, data) {
    // Define your agent's task handling logic
    switch (task) {
      case 'your_custom_task':
        return await this.performCustomTask(data);
      case 'another_task':
        return await this.performAnotherTask(data);
      default:
        throw new Error(`Unknown task: ${task}`);
    }
  }

  async onShutdown() {
    // Clean up resources when shutting down
    await this.saveState();
    await this.cleanup();
  }

  // Your custom methods
  async performCustomTask(data) {
    // Implement your custom logic here
    return { result: 'success', data: data };
  }

  async performAnotherTask(data) {
    // Implement another custom task
    return { result: 'completed', processed: true };
  }

  // Helper methods
  async setupWorkflows() {
    // Set up your agent's workflows
  }

  async loadConfiguration() {
    // Load agent-specific configuration
  }

  async saveState() {
    // Save agent state before shutdown
  }

  async cleanup() {
    // Clean up resources
  }

  getCapabilities() {
    return {
      name: this.config.name,
      version: this.config.version,
      capabilities: this.config.capabilities,
      customFeatures: ['feature1', 'feature2']
    };
  }
}

module.exports = { YourCustomAgent };
```

### Step 4: Add Configuration

Update `config/agent-config.json` to include your new agent:

```json
{
  "subagents": {
    "yourCustomAgent": {
      "name": "YourCustomAgent",
      "version": "1.0.0",
      "description": "Description of what your agent does",
      "capabilities": [
        "your_custom_task",
        "another_task"
      ],
      "config": {
        "yourSetting": "value",
        "timeout": 30000,
        "customOptions": {
          "option1": "value1",
          "option2": "value2"
        }
      }
    }
  }
}
```

### Step 5: Register Your Agent

Update `agents/main-agent/agent-manager.js`:

```javascript
// Add import
const { YourCustomAgent } = require('../subagents/your-custom-agent');

// Add to the switch statement in initializeSubagent method
case 'yourCustomAgent':
  agent = new YourCustomAgent(agentConfig);
  break;
```

### Step 6: Add Task Routing

Update `agents/main-agent/task-orchestrator.js`:

```javascript
// Add task routing in setupTaskHandlers method
this.taskHandlers.set('your_custom_task', 'yourCustomAgent');
this.taskHandlers.set('another_task', 'yourCustomAgent');
```

## Example: Client Onboarding Agent

Here's a complete example of a custom agent for client onboarding:

```javascript
const { BaseAgent } = require('./base-agent');

class ClientOnboardingAgent extends BaseAgent {
  constructor(config) {
    super(config);
    this.onboardingSteps = new Map();
    this.clientProfiles = new Map();
    this.templates = new Map();
  }

  async onInitialize() {
    this.setupOnboardingWorkflow();
    this.loadTemplates();
    this.logger.info('ClientOnboardingAgent initialized');
  }

  setupOnboardingWorkflow() {
    this.onboardingSteps.set('initial_contact', {
      name: 'Initial Contact',
      duration: '1 day',
      tasks: ['send_welcome_email', 'schedule_kickoff_call']
    });

    this.onboardingSteps.set('assessment', {
      name: 'Client Assessment',
      duration: '3-5 days',
      tasks: ['conduct_needs_analysis', 'review_current_marketing']
    });

    this.onboardingSteps.set('planning', {
      name: 'Strategy Planning',
      duration: '1 week',
      tasks: ['create_marketing_plan', 'define_kpis', 'set_timeline']
    });

    this.onboardingSteps.set('implementation', {
      name: 'Implementation',
      duration: '2-4 weeks',
      tasks: ['setup_tools', 'begin_execution', 'monitor_progress']
    });
  }

  async onExecuteTask(task, data) {
    switch (task) {
      case 'start_onboarding':
        return await this.startOnboarding(data);
      case 'create_client_profile':
        return await this.createClientProfile(data);
      case 'generate_service_agreement':
        return await this.generateServiceAgreement(data);
      case 'conduct_assessment':
        return await this.conductAssessment(data);
      case 'create_marketing_plan':
        return await this.createMarketingPlan(data);
      case 'track_onboarding_progress':
        return await this.trackOnboardingProgress(data);
      default:
        throw new Error(`Unknown task: ${task}`);
    }
  }

  async startOnboarding(data) {
    const { clientId, clientInfo, serviceType } = data;
    
    const onboarding = {
      clientId: clientId,
      status: 'started',
      startDate: new Date().toISOString(),
      currentStep: 'initial_contact',
      timeline: this.generateTimeline(serviceType),
      tasks: []
    };

    // Create initial tasks
    onboarding.tasks = await this.generateInitialTasks(clientInfo, serviceType);
    
    // Store onboarding data
    this.clientProfiles.set(clientId, onboarding);

    return {
      success: true,
      onboarding: onboarding,
      nextActions: onboarding.tasks
    };
  }

  async createClientProfile(data) {
    const { clientId, companyInfo, contactInfo, goals } = data;
    
    const profile = {
      clientId: clientId,
      company: companyInfo,
      contact: contactInfo,
      goals: goals,
      marketingMaturity: this.assessMarketingMaturity(companyInfo),
      recommendedServices: this.recommendServices(goals, companyInfo),
      riskFactors: this.identifyRiskFactors(companyInfo),
      createdAt: new Date().toISOString()
    };

    return {
      success: true,
      profile: profile,
      recommendations: profile.recommendedServices
    };
  }

  async generateServiceAgreement(data) {
    const { clientId, serviceType, terms } = data;
    
    const agreement = {
      agreementId: this.generateAgreementId(),
      clientId: clientId,
      serviceType: serviceType,
      terms: terms,
      startDate: new Date().toISOString(),
      duration: this.calculateDuration(serviceType),
      deliverables: this.defineDeliverables(serviceType),
      milestones: this.defineMilestones(serviceType),
      generatedAt: new Date().toISOString()
    };

    return {
      success: true,
      agreement: agreement,
      nextSteps: ['review_agreement', 'client_signature', 'begin_work']
    };
  }

  async conductAssessment(data) {
    const { clientId, assessmentData } = data;
    
    const assessment = {
      clientId: clientId,
      currentState: this.analyzeCurrentState(assessmentData),
      gaps: this.identifyGaps(assessmentData),
      opportunities: this.identifyOpportunities(assessmentData),
      recommendations: this.generateRecommendations(assessmentData),
      priority: this.prioritizeRecommendations(assessmentData),
      conductedAt: new Date().toISOString()
    };

    return {
      success: true,
      assessment: assessment,
      actionItems: assessment.recommendations
    };
  }

  async createMarketingPlan(data) {
    const { clientId, goals, budget, timeline } = data;
    
    const plan = {
      planId: this.generatePlanId(),
      clientId: clientId,
      goals: goals,
      budget: budget,
      timeline: timeline,
      strategies: this.defineStrategies(goals, budget),
      tactics: this.defineTactics(goals, budget),
      kpis: this.defineKPIs(goals),
      budgetAllocation: this.allocateBudget(budget, strategies),
      timeline: this.createTimeline(timeline, tactics),
      createdAt: new Date().toISOString()
    };

    return {
      success: true,
      plan: plan,
      nextSteps: ['review_plan', 'client_approval', 'begin_execution']
    };
  }

  async trackOnboardingProgress(data) {
    const { clientId } = data;
    
    const onboarding = this.clientProfiles.get(clientId);
    if (!onboarding) {
      throw new Error(`No onboarding found for client ${clientId}`);
    }

    const progress = {
      clientId: clientId,
      currentStep: onboarding.currentStep,
      completedSteps: this.getCompletedSteps(onboarding),
      remainingSteps: this.getRemainingSteps(onboarding),
      progress: this.calculateProgress(onboarding),
      estimatedCompletion: this.estimateCompletion(onboarding),
      blockers: this.identifyBlockers(onboarding),
      nextActions: this.getNextActions(onboarding)
    };

    return {
      success: true,
      progress: progress,
      recommendations: this.getProgressRecommendations(progress)
    };
  }

  // Helper methods
  generateTimeline(serviceType) {
    const timelines = {
      'fractional_cmo': '30 days',
      'project_based': '60-90 days',
      'consulting': '15 days'
    };
    return timelines[serviceType] || '30 days';
  }

  async generateInitialTasks(clientInfo, serviceType) {
    return [
      'Send welcome email with onboarding checklist',
      'Schedule kickoff call',
      'Request company information',
      'Set up initial tools and access'
    ];
  }

  assessMarketingMaturity(companyInfo) {
    // Mock assessment logic
    const factors = ['team_size', 'budget', 'existing_tools', 'experience'];
    const scores = factors.map(() => Math.floor(Math.random() * 5) + 1);
    const average = scores.reduce((sum, score) => sum + score, 0) / scores.length;
    
    if (average >= 4) return 'advanced';
    if (average >= 2.5) return 'intermediate';
    return 'beginner';
  }

  recommendServices(goals, companyInfo) {
    const recommendations = [];
    
    if (goals.includes('lead_generation')) {
      recommendations.push('Content marketing strategy');
      recommendations.push('SEO optimization');
    }
    
    if (goals.includes('brand_awareness')) {
      recommendations.push('Social media strategy');
      recommendations.push('PR and media relations');
    }
    
    return recommendations;
  }

  identifyRiskFactors(companyInfo) {
    const risks = [];
    
    if (companyInfo.teamSize < 5) {
      risks.push('Limited internal resources');
    }
    
    if (companyInfo.budget < 10000) {
      risks.push('Budget constraints');
    }
    
    return risks;
  }

  generateAgreementId() {
    return 'agreement_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  }

  calculateDuration(serviceType) {
    const durations = {
      'fractional_cmo': '6 months',
      'project_based': '3 months',
      'consulting': '1 month'
    };
    return durations[serviceType] || '3 months';
  }

  defineDeliverables(serviceType) {
    const deliverables = {
      'fractional_cmo': [
        'Marketing strategy document',
        'Monthly performance reports',
        'Team training and guidance',
        'Process optimization'
      ],
      'project_based': [
        'Project plan and timeline',
        'Regular progress updates',
        'Final deliverables',
        'Implementation guide'
      ]
    };
    return deliverables[serviceType] || [];
  }

  defineMilestones(serviceType) {
    return [
      'Project kickoff',
      'Strategy development',
      'Implementation start',
      'First results review',
      'Project completion'
    ];
  }

  analyzeCurrentState(assessmentData) {
    return {
      marketingTeam: assessmentData.teamSize || 0,
      currentBudget: assessmentData.budget || 0,
      existingTools: assessmentData.tools || [],
      currentPerformance: assessmentData.performance || 'unknown'
    };
  }

  identifyGaps(assessmentData) {
    const gaps = [];
    
    if (!assessmentData.marketingStrategy) {
      gaps.push('No documented marketing strategy');
    }
    
    if (!assessmentData.analytics) {
      gaps.push('No analytics tracking in place');
    }
    
    return gaps;
  }

  identifyOpportunities(assessmentData) {
    return [
      'Implement data-driven decision making',
      'Optimize marketing spend allocation',
      'Improve customer acquisition efficiency'
    ];
  }

  generateRecommendations(assessmentData) {
    return [
      'Develop comprehensive marketing strategy',
      'Implement analytics and tracking',
      'Optimize marketing budget allocation',
      'Improve team processes and workflows'
    ];
  }

  prioritizeRecommendations(assessmentData) {
    return [
      { priority: 'high', recommendation: 'Implement analytics tracking' },
      { priority: 'medium', recommendation: 'Develop marketing strategy' },
      { priority: 'low', recommendation: 'Optimize budget allocation' }
    ];
  }

  generatePlanId() {
    return 'plan_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  }

  defineStrategies(goals, budget) {
    const strategies = [];
    
    if (goals.includes('lead_generation')) {
      strategies.push('Content marketing');
      strategies.push('SEO optimization');
    }
    
    if (goals.includes('brand_awareness')) {
      strategies.push('Social media marketing');
      strategies.push('Public relations');
    }
    
    return strategies;
  }

  defineTactics(goals, budget) {
    return [
      'Blog content creation',
      'Social media posting',
      'Email marketing campaigns',
      'SEO optimization',
      'Paid advertising'
    ];
  }

  defineKPIs(goals) {
    const kpis = [];
    
    if (goals.includes('lead_generation')) {
      kpis.push('Number of qualified leads');
      kpis.push('Lead conversion rate');
    }
    
    if (goals.includes('brand_awareness')) {
      kpis.push('Brand mentions');
      kpis.push('Social media engagement');
    }
    
    return kpis;
  }

  allocateBudget(budget, strategies) {
    const allocation = {};
    const strategyCount = strategies.length;
    
    strategies.forEach(strategy => {
      allocation[strategy] = Math.floor(budget / strategyCount);
    });
    
    return allocation;
  }

  createTimeline(timeline, tactics) {
    const timelineData = [];
    const daysPerTactic = Math.floor(timeline / tactics.length);
    
    tactics.forEach((tactic, index) => {
      timelineData.push({
        tactic: tactic,
        startDay: index * daysPerTactic,
        endDay: (index + 1) * daysPerTactic,
        status: 'planned'
      });
    });
    
    return timelineData;
  }

  getCompletedSteps(onboarding) {
    const steps = ['initial_contact', 'assessment', 'planning', 'implementation'];
    const currentIndex = steps.indexOf(onboarding.currentStep);
    return steps.slice(0, currentIndex);
  }

  getRemainingSteps(onboarding) {
    const steps = ['initial_contact', 'assessment', 'planning', 'implementation'];
    const currentIndex = steps.indexOf(onboarding.currentStep);
    return steps.slice(currentIndex + 1);
  }

  calculateProgress(onboarding) {
    const totalSteps = 4;
    const completedSteps = this.getCompletedSteps(onboarding).length;
    return Math.round((completedSteps / totalSteps) * 100);
  }

  estimateCompletion(onboarding) {
    const remainingDays = this.getRemainingSteps(onboarding).length * 7;
    const completionDate = new Date();
    completionDate.setDate(completionDate.getDate() + remainingDays);
    return completionDate.toISOString();
  }

  identifyBlockers(onboarding) {
    const blockers = [];
    
    if (onboarding.currentStep === 'assessment' && !onboarding.assessmentComplete) {
      blockers.push('Client assessment not completed');
    }
    
    return blockers;
  }

  getNextActions(onboarding) {
    const actions = {
      'initial_contact': ['Send welcome materials', 'Schedule kickoff call'],
      'assessment': ['Conduct needs analysis', 'Review current marketing'],
      'planning': ['Create marketing plan', 'Define KPIs'],
      'implementation': ['Begin execution', 'Monitor progress']
    };
    
    return actions[onboarding.currentStep] || [];
  }

  getProgressRecommendations(progress) {
    const recommendations = [];
    
    if (progress.progress < 25) {
      recommendations.push('Accelerate initial contact phase');
    }
    
    if (progress.blockers.length > 0) {
      recommendations.push('Address blockers to maintain momentum');
    }
    
    return recommendations;
  }

  async loadTemplates() {
    // Load email templates, agreement templates, etc.
  }

  async saveState() {
    // Save client profiles and onboarding data
  }

  async cleanup() {
    // Clean up resources
  }

  getCapabilities() {
    return {
      name: this.config.name,
      version: this.config.version,
      capabilities: [
        'client_onboarding',
        'profile_creation',
        'agreement_generation',
        'assessment_conducting',
        'plan_creation',
        'progress_tracking'
      ],
      onboardingSteps: Array.from(this.onboardingSteps.keys())
    };
  }
}

module.exports = { ClientOnboardingAgent };
```

## Testing Your Custom Agent

### 1. Unit Testing

```javascript
// tests/agents/unit/your-custom-agent.test.js
const { YourCustomAgent } = require('../../../agents/subagents/your-custom-agent');

describe('YourCustomAgent', () => {
  let agent;

  beforeEach(async () => {
    agent = new YourCustomAgent({
      name: 'TestAgent',
      version: '1.0.0',
      capabilities: ['your_custom_task']
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

### 2. Integration Testing

```javascript
// tests/integration/agents/your-custom-agent.test.js
const request = require('supertest');
const { MainAgent } = require('../../../agents/main-agent');

describe('YourCustomAgent Integration', () => {
  let mainAgent;

  beforeAll(async () => {
    mainAgent = new MainAgent();
    await mainAgent.start();
  });

  afterAll(async () => {
    await mainAgent.shutdown();
  });

  test('should execute custom task via API', async () => {
    const response = await request(mainAgent.app)
      .post('/api/subagents/yourCustomAgent/task')
      .send({
        task: 'your_custom_task',
        data: { test: 'data' }
      });

    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
  });
});
```

## Best Practices for Custom Agents

### 1. **Single Responsibility**
Each agent should have one clear purpose and set of related capabilities.

### 2. **Error Handling**
Implement comprehensive error handling and recovery mechanisms.

### 3. **Configuration-Driven**
Make your agent configurable through the `agent-config.json` file.

### 4. **Logging**
Use the shared logger for consistent logging across all agents.

### 5. **Testing**
Write comprehensive tests for all agent functionality.

### 6. **Documentation**
Document your agent's capabilities, configuration options, and usage examples.

### 7. **Performance**
Monitor and optimize your agent's performance, especially for long-running tasks.

### 8. **Security**
Implement proper authentication and authorization for sensitive operations.

## Integration with MCP Servers

Your custom agents can integrate with MCP servers for enhanced capabilities:

```javascript
// Example: Integrating with Filesystem MCP server
async function integrateWithMCP() {
  // Use MCP server for file operations
  const fileContent = await mcpFilesystem.readFile('/path/to/file');
  
  // Process the content
  const processedContent = await this.processContent(fileContent);
  
  // Write back to MCP server
  await mcpFilesystem.writeFile('/path/to/output', processedContent);
}
```

## Deployment Considerations

### 1. **Environment Variables**
Store sensitive configuration in environment variables:

```bash
# .env
YOUR_AGENT_API_KEY=your_api_key
YOUR_AGENT_ENDPOINT=https://api.example.com
YOUR_AGENT_TIMEOUT=30000
```

### 2. **Docker Configuration**
Create a Dockerfile for containerized deployment:

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3001
CMD ["npm", "run", "agent"]
```

### 3. **Monitoring**
Set up monitoring for your custom agents:

```javascript
// Add monitoring to your agent
async onExecuteTask(task, data) {
  const startTime = Date.now();
  
  try {
    const result = await this.performTask(task, data);
    
    // Record metrics
    this.recordMetrics(task, Date.now() - startTime, 'success');
    
    return result;
  } catch (error) {
    this.recordMetrics(task, Date.now() - startTime, 'error');
    throw error;
  }
}
```

## Next Steps

1. **Identify Your Needs**: Determine what specific capabilities your business requires
2. **Design Your Agent**: Plan the agent's responsibilities and capabilities
3. **Implement**: Follow the step-by-step process to create your agent
4. **Test**: Write comprehensive tests for your agent
5. **Deploy**: Deploy and monitor your agent in production
6. **Iterate**: Continuously improve your agent based on usage and feedback

Your custom agents can significantly enhance your Fractional CMO business by automating complex tasks, providing insights, and improving operational efficiency.


