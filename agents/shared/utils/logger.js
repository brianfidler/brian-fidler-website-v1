const fs = require('fs');
const path = require('path');
const config = require('../../../config/agent-config.json');

class Logger {
  constructor(component) {
    this.component = component;
    this.logLevel = config.logging.level || 'info';
    this.logFormat = config.logging.format || 'json';
    this.logOutput = config.logging.output || 'console';
    this.logFilePath = config.logging.filePath || './logs/agents.log';
    
    this.levels = {
      error: 0,
      warn: 1,
      info: 2,
      debug: 3
    };

    this.ensureLogDirectory();
  }

  ensureLogDirectory() {
    if (this.logOutput === 'file') {
      const logDir = path.dirname(this.logFilePath);
      if (!fs.existsSync(logDir)) {
        fs.mkdirSync(logDir, { recursive: true });
      }
    }
  }

  shouldLog(level) {
    return this.levels[level] <= this.levels[this.logLevel];
  }

  formatMessage(level, message, data = null) {
    const logEntry = {
      timestamp: new Date().toISOString(),
      level: level.toUpperCase(),
      component: this.component,
      message: message
    };

    if (data) {
      if (data instanceof Error) {
        logEntry.error = {
          name: data.name,
          message: data.message,
          stack: data.stack
        };
      } else {
        logEntry.data = data;
      }
    }

    if (this.logFormat === 'json') {
      return JSON.stringify(logEntry);
    } else {
      return `[${logEntry.timestamp}] ${logEntry.level} [${logEntry.component}] ${logEntry.message}`;
    }
  }

  writeLog(level, message, data = null) {
    if (!this.shouldLog(level)) {
      return;
    }

    const formattedMessage = this.formatMessage(level, message, data);

    if (this.logOutput === 'file') {
      fs.appendFileSync(this.logFilePath, formattedMessage + '\n');
    } else {
      console.log(formattedMessage);
    }
  }

  error(message, data = null) {
    this.writeLog('error', message, data);
  }

  warn(message, data = null) {
    this.writeLog('warn', message, data);
  }

  info(message, data = null) {
    this.writeLog('info', message, data);
  }

  debug(message, data = null) {
    this.writeLog('debug', message, data);
  }

  // Specialized logging methods
  logTaskStart(taskName, taskData = null) {
    this.info(`Task started: ${taskName}`, taskData);
  }

  logTaskComplete(taskName, result = null) {
    this.info(`Task completed: ${taskName}`, result);
  }

  logTaskError(taskName, error) {
    this.error(`Task failed: ${taskName}`, error);
  }

  logAgentEvent(event, agentId, data = null) {
    this.info(`Agent event: ${event}`, { agentId, ...data });
  }

  logPerformance(operation, duration, data = null) {
    this.info(`Performance: ${operation} took ${duration}ms`, data);
  }
}

module.exports = { Logger };

