const { Logger } = require('../shared/utils/logger');

class TaskOrchestrator {
  constructor() {
    this.logger = new Logger('TaskOrchestrator');
    this.taskQueue = [];
    this.executingTasks = new Map();
    this.taskHandlers = new Map();
    this.performanceMetrics = new Map();
    
    this.setupTaskHandlers();
  }

  setupTaskHandlers() {
    // Define task routing rules
    this.taskHandlers.set('validate_data', 'dataProcessing');
    this.taskHandlers.set('transform_data', 'dataProcessing');
    this.taskHandlers.set('clean_data', 'dataProcessing');
    this.taskHandlers.set('batch_process', 'dataProcessing');
    this.taskHandlers.set('aggregate_data', 'dataProcessing');
    this.taskHandlers.set('filter_data', 'dataProcessing');
    
    this.taskHandlers.set('process_user_input', 'userInteraction');
    this.taskHandlers.set('generate_response', 'userInteraction');
    this.taskHandlers.set('manage_session', 'userInteraction');
    this.taskHandlers.set('update_ui', 'userInteraction');
    
    this.taskHandlers.set('analyze_data', 'analytics');
    this.taskHandlers.set('generate_report', 'analytics');
    this.taskHandlers.set('trend_analysis', 'analytics');
    this.taskHandlers.set('performance_monitoring', 'analytics');
    
    this.taskHandlers.set('api_integration', 'integration');
    this.taskHandlers.set('webhook_management', 'integration');
    this.taskHandlers.set('data_sync', 'integration');
    this.taskHandlers.set('service_discovery', 'integration');
    
    // Lead Qualification Agent tasks
    this.taskHandlers.set('qualify_lead', 'leadQualification');
    this.taskHandlers.set('score_lead', 'leadQualification');
    this.taskHandlers.set('route_lead', 'leadQualification');
    this.taskHandlers.set('analyze_lead_source', 'leadQualification');
    this.taskHandlers.set('update_lead_status', 'leadQualification');
    
    // Content Management Agent tasks
    this.taskHandlers.set('create_content', 'contentManagement');
    this.taskHandlers.set('update_content', 'contentManagement');
    this.taskHandlers.set('publish_content', 'contentManagement');
    this.taskHandlers.set('analyze_content', 'contentManagement');
    this.taskHandlers.set('generate_seo_meta', 'contentManagement');
    this.taskHandlers.set('schedule_content', 'contentManagement');
    this.taskHandlers.set('optimize_content', 'contentManagement');
    
    // Analytics & Reporting Agent tasks
    this.taskHandlers.set('generate_report', 'analyticsReporting');
    this.taskHandlers.set('analyze_performance', 'analyticsReporting');
    this.taskHandlers.set('track_kpis', 'analyticsReporting');
    this.taskHandlers.set('identify_trends', 'analyticsReporting');
    this.taskHandlers.set('generate_insights', 'analyticsReporting');
    this.taskHandlers.set('forecast_metrics', 'analyticsReporting');
    this.taskHandlers.set('compare_periods', 'analyticsReporting');
    
    // Creative Director Agent tasks
    this.taskHandlers.set('create_creative_brief', 'creativeDirector');
    this.taskHandlers.set('review_design', 'creativeDirector');
    this.taskHandlers.set('generate_concept', 'creativeDirector');
    this.taskHandlers.set('manage_feedback', 'creativeDirector');
    this.taskHandlers.set('approve_deliverable', 'creativeDirector');
    this.taskHandlers.set('generate_brand_guidelines', 'creativeDirector');
    this.taskHandlers.set('track_project_progress', 'creativeDirector');
    this.taskHandlers.set('create_project_timeline', 'creativeDirector');
    
    // Whimsical Designer Agent tasks
    this.taskHandlers.set('generate_whimsical_concept', 'whimsicalDesigner');
    this.taskHandlers.set('design_playful_interface', 'whimsicalDesigner');
    this.taskHandlers.set('create_micro_interactions', 'whimsicalDesigner');
    this.taskHandlers.set('design_quirky_components', 'whimsicalDesigner');
    this.taskHandlers.set('generate_playful_copy', 'whimsicalDesigner');
    this.taskHandlers.set('create_hidden_delights', 'whimsicalDesigner');
    this.taskHandlers.set('design_conversational_flow', 'whimsicalDesigner');
    this.taskHandlers.set('generate_whimsical_illustrations', 'whimsicalDesigner');
  }

  async executeTask(task, data, priority = 'normal') {
    const taskId = this.generateTaskId();
    const startTime = Date.now();

    this.logger.info('Executing task', {
      taskId,
      task,
      priority,
      dataSize: data ? JSON.stringify(data).length : 0
    });

    try {
      // Add task to queue
      const taskInfo = {
        id: taskId,
        task,
        data,
        priority,
        startTime,
        status: 'queued'
      };

      this.taskQueue.push(taskInfo);
      this.executingTasks.set(taskId, taskInfo);

      // Determine which agent should handle this task
      const targetAgent = this.routeTask(task);
      if (!targetAgent) {
        throw new Error(`No handler found for task: ${task}`);
      }

      // Execute the task
      const result = await this.executeTaskOnAgent(taskId, task, data, targetAgent);

      // Update task status
      taskInfo.status = 'completed';
      taskInfo.endTime = Date.now();
      taskInfo.duration = taskInfo.endTime - taskInfo.startTime;

      // Record performance metrics
      this.recordPerformanceMetrics(task, taskInfo.duration);

      this.logger.logTaskComplete(task, {
        taskId,
        duration: taskInfo.duration,
        resultSize: result ? JSON.stringify(result).length : 0
      });

      return result;

    } catch (error) {
      // Update task status
      const taskInfo = this.executingTasks.get(taskId);
      if (taskInfo) {
        taskInfo.status = 'failed';
        taskInfo.error = error.message;
        taskInfo.endTime = Date.now();
        taskInfo.duration = taskInfo.endTime - taskInfo.startTime;
      }

      this.logger.logTaskError(task, error);
      throw error;

    } finally {
      // Clean up
      this.executingTasks.delete(taskId);
      this.removeFromQueue(taskId);
    }
  }

  routeTask(task) {
    return this.taskHandlers.get(task);
  }

  async executeTaskOnAgent(taskId, task, data, agentId) {
    // This method would typically communicate with the agent manager
    // For now, we'll simulate the execution
    this.logger.info(`Routing task ${task} to agent ${agentId}`, { taskId });

    // Simulate task execution time
    await this.simulateTaskExecution(task, data);

    // Return mock result based on task type
    return this.generateMockResult(task, data);
  }

  async simulateTaskExecution(task, data) {
    // Simulate different execution times based on task complexity
    const executionTimes = {
      'validate_data': 100,
      'transform_data': 200,
      'clean_data': 150,
      'batch_process': 500,
      'analyze_data': 300,
      'generate_report': 400,
      'api_integration': 250
    };

    const executionTime = executionTimes[task] || 100;
    await new Promise(resolve => setTimeout(resolve, executionTime));
  }

  generateMockResult(task, data) {
    switch (task) {
      case 'validate_data':
        return {
          valid: true,
          data: data.content,
          validationTime: new Date().toISOString()
        };
      
      case 'transform_data':
        return {
          originalData: data.content,
          transformedData: data.content + '_transformed',
          transformationType: 'mock'
        };
      
      case 'clean_data':
        return {
          originalCount: data.content ? data.content.length : 0,
          cleanedCount: data.content ? data.content.length : 0,
          removedItems: 0
        };
      
      case 'analyze_data':
        return {
          analysisType: 'mock',
          insights: ['Mock insight 1', 'Mock insight 2'],
          confidence: 0.95
        };
      
      case 'generate_report':
        return {
          reportId: 'mock-report-' + Date.now(),
          reportType: 'mock',
          content: 'Mock report content',
          generatedAt: new Date().toISOString()
        };
      
      default:
        return {
          task: task,
          status: 'completed',
          result: 'mock_result'
        };
    }
  }

  generateTaskId() {
    return 'task_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  }

  removeFromQueue(taskId) {
    const index = this.taskQueue.findIndex(task => task.id === taskId);
    if (index > -1) {
      this.taskQueue.splice(index, 1);
    }
  }

  recordPerformanceMetrics(task, duration) {
    if (!this.performanceMetrics.has(task)) {
      this.performanceMetrics.set(task, {
        count: 0,
        totalDuration: 0,
        averageDuration: 0,
        minDuration: Infinity,
        maxDuration: 0
      });
    }

    const metrics = this.performanceMetrics.get(task);
    metrics.count++;
    metrics.totalDuration += duration;
    metrics.averageDuration = metrics.totalDuration / metrics.count;
    metrics.minDuration = Math.min(metrics.minDuration, duration);
    metrics.maxDuration = Math.max(metrics.maxDuration, duration);
  }

  getTaskStatus(taskId) {
    return this.executingTasks.get(taskId) || null;
  }

  getQueueStatus() {
    return {
      queueLength: this.taskQueue.length,
      executingCount: this.executingTasks.size,
      tasks: Array.from(this.executingTasks.values())
    };
  }

  getPerformanceMetrics() {
    const metrics = {};
    for (const [task, taskMetrics] of this.performanceMetrics) {
      metrics[task] = { ...taskMetrics };
    }
    return metrics;
  }

  // Task prioritization methods
  prioritizeTasks() {
    const priorityOrder = ['high', 'normal', 'low'];
    
    this.taskQueue.sort((a, b) => {
      const aPriority = priorityOrder.indexOf(a.priority);
      const bPriority = priorityOrder.indexOf(b.priority);
      return aPriority - bPriority;
    });
  }

  // Batch processing methods
  async executeBatch(tasks) {
    const results = [];
    
    for (const task of tasks) {
      try {
        const result = await this.executeTask(task.task, task.data, task.priority);
        results.push({ taskId: task.id, success: true, result });
      } catch (error) {
        results.push({ taskId: task.id, success: false, error: error.message });
      }
    }
    
    return results;
  }

  // Task scheduling methods
  scheduleTask(task, data, priority, delay) {
    setTimeout(async () => {
      try {
        await this.executeTask(task, data, priority);
      } catch (error) {
        this.logger.error('Scheduled task failed', error);
      }
    }, delay);
  }

  // Cleanup methods
  cleanup() {
    this.taskQueue = [];
    this.executingTasks.clear();
    this.performanceMetrics.clear();
  }
}

module.exports = { TaskOrchestrator };
