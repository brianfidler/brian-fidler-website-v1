const { Logger } = require('../../shared/utils/logger');

class BaseAgent {
  constructor(config) {
    this.config = config;
    this.logger = new Logger(this.constructor.name);
    this.isInitialized = false;
    this.isShutdown = false;
    this.startTime = null;
    this.taskCount = 0;
    this.errorCount = 0;
  }

  async initialize() {
    if (this.isInitialized) {
      this.logger.warn('Agent already initialized');
      return;
    }

    try {
      this.startTime = new Date();
      this.logger.info('Initializing agent', {
        name: this.config.name,
        version: this.config.version,
        capabilities: this.config.capabilities
      });

      await this.onInitialize();
      this.isInitialized = true;
      
      this.logger.info('Agent initialized successfully');
    } catch (error) {
      this.logger.error('Failed to initialize agent', error);
      throw error;
    }
  }

  async executeTask(task, data) {
    if (!this.isInitialized) {
      throw new Error('Agent not initialized');
    }

    if (this.isShutdown) {
      throw new Error('Agent is shutdown');
    }

    this.taskCount++;
    const startTime = Date.now();

    try {
      this.logger.logTaskStart(task, { taskId: this.taskCount, dataSize: data ? JSON.stringify(data).length : 0 });
      
      const result = await this.onExecuteTask(task, data);
      
      const duration = Date.now() - startTime;
      this.logger.logPerformance(task, duration, { taskId: this.taskCount });
      this.logger.logTaskComplete(task, { taskId: this.taskCount, resultSize: result ? JSON.stringify(result).length : 0 });
      
      return result;
    } catch (error) {
      this.errorCount++;
      const duration = Date.now() - startTime;
      this.logger.logTaskError(task, error);
      this.logger.logPerformance(task, duration, { taskId: this.taskCount, error: true });
      throw error;
    }
  }

  async shutdown() {
    if (this.isShutdown) {
      this.logger.warn('Agent already shutdown');
      return;
    }

    try {
      this.logger.info('Shutting down agent');
      await this.onShutdown();
      this.isShutdown = true;
      
      this.logger.info('Agent shutdown successfully', {
        totalTasks: this.taskCount,
        totalErrors: this.errorCount,
        uptime: this.startTime ? Date.now() - this.startTime.getTime() : 0
      });
    } catch (error) {
      this.logger.error('Failed to shutdown agent', error);
      throw error;
    }
  }

  getStatus() {
    return {
      name: this.config.name,
      version: this.config.version,
      isInitialized: this.isInitialized,
      isShutdown: this.isShutdown,
      startTime: this.startTime,
      taskCount: this.taskCount,
      errorCount: this.errorCount,
      capabilities: this.config.capabilities
    };
  }

  getCapabilities() {
    return {
      name: this.config.name,
      version: this.config.version,
      capabilities: this.config.capabilities,
      config: this.config.config
    };
  }

  // Methods to be overridden by subclasses
  async onInitialize() {
    // Override in subclasses for custom initialization logic
  }

  async onExecuteTask(task, data) {
    // Override in subclasses for custom task execution logic
    throw new Error('onExecuteTask must be implemented by subclass');
  }

  async onShutdown() {
    // Override in subclasses for custom shutdown logic
  }

  // Utility methods
  validateConfig(requiredFields = []) {
    for (const field of requiredFields) {
      if (!this.config[field]) {
        throw new Error(`Missing required config field: ${field}`);
      }
    }
  }

  getConfigValue(key, defaultValue = null) {
    return this.config[key] !== undefined ? this.config[key] : defaultValue;
  }

  isCapable(capability) {
    return this.config.capabilities && this.config.capabilities.includes(capability);
  }

  requireCapability(capability) {
    if (!this.isCapable(capability)) {
      throw new Error(`Agent does not have capability: ${capability}`);
    }
  }
}

module.exports = { BaseAgent };

