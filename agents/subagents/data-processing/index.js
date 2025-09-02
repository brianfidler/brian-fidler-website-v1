const { Logger } = require('../../shared/utils/logger');
const { BaseAgent } = require('./base-agent');

class DataProcessingAgent extends BaseAgent {
  constructor(config) {
    super(config);
    this.logger = new Logger('DataProcessingAgent');
    this.dataValidators = new Map();
    this.transformers = new Map();
    this.batchProcessor = null;
  }

  async initialize() {
    await super.initialize();
    this.setupValidators();
    this.setupTransformers();
    this.setupBatchProcessor();
    this.logger.info('DataProcessingAgent initialized');
  }

  setupValidators() {
    // Register data validators
    this.dataValidators.set('json', this.validateJSON.bind(this));
    this.dataValidators.set('csv', this.validateCSV.bind(this));
    this.dataValidators.set('xml', this.validateXML.bind(this));
    this.dataValidators.set('email', this.validateEmail.bind(this));
    this.dataValidators.set('phone', this.validatePhone.bind(this));
  }

  setupTransformers() {
    // Register data transformers
    this.transformers.set('normalize', this.normalizeData.bind(this));
    this.transformers.set('clean', this.cleanData.bind(this));
    this.transformers.set('format', this.formatData.bind(this));
    this.transformers.set('aggregate', this.aggregateData.bind(this));
    this.transformers.set('filter', this.filterData.bind(this));
  }

  setupBatchProcessor() {
    this.batchProcessor = {
      batchSize: this.config.batchSize || 1000,
      timeout: this.config.timeout || 60000,
      maxMemoryUsage: this.config.maxMemoryUsage || '512MB'
    };
  }

  async executeTask(task, data) {
    this.logger.logTaskStart(task, { dataSize: data ? data.length : 0 });

    try {
      let result;

      switch (task) {
        case 'validate_data':
          result = await this.validateData(data);
          break;
        case 'transform_data':
          result = await this.transformData(data);
          break;
        case 'clean_data':
          result = await this.cleanData(data);
          break;
        case 'batch_process':
          result = await this.batchProcess(data);
          break;
        case 'aggregate_data':
          result = await this.aggregateData(data);
          break;
        case 'filter_data':
          result = await this.filterData(data);
          break;
        default:
          throw new Error(`Unknown task: ${task}`);
      }

      this.logger.logTaskComplete(task, { resultSize: result ? result.length : 0 });
      return result;
    } catch (error) {
      this.logger.logTaskError(task, error);
      throw error;
    }
  }

  async validateData(data) {
    const { content, type, rules } = data;
    const validator = this.dataValidators.get(type);
    
    if (!validator) {
      throw new Error(`No validator found for type: ${type}`);
    }

    return await validator(content, rules);
  }

  async transformData(data) {
    const { content, transformations } = data;
    let result = content;

    for (const transformation of transformations) {
      const { type, config } = transformation;
      const transformer = this.transformers.get(type);
      
      if (!transformer) {
        throw new Error(`No transformer found for type: ${type}`);
      }

      result = await transformer(result, config);
    }

    return result;
  }

  async cleanData(data) {
    const { content, cleaningRules } = data;
    let cleanedData = content;

    // Remove duplicates
    if (cleaningRules.removeDuplicates) {
      cleanedData = this.removeDuplicates(cleanedData);
    }

    // Remove null/undefined values
    if (cleaningRules.removeNulls) {
      cleanedData = this.removeNullValues(cleanedData);
    }

    // Normalize data
    if (cleaningRules.normalize) {
      cleanedData = this.normalizeData(cleanedData);
    }

    return cleanedData;
  }

  async batchProcess(data) {
    const { items, batchSize = this.batchProcessor.batchSize } = data;
    const batches = this.createBatches(items, batchSize);
    const results = [];

    for (let i = 0; i < batches.length; i++) {
      const batch = batches[i];
      this.logger.info(`Processing batch ${i + 1}/${batches.length}`, { batchSize: batch.length });
      
      const batchResult = await this.processBatch(batch);
      results.push(...batchResult);
    }

    return results;
  }

  // Validator implementations
  async validateJSON(content, rules) {
    try {
      const parsed = JSON.parse(content);
      return { valid: true, data: parsed };
    } catch (error) {
      return { valid: false, error: error.message };
    }
  }

  async validateCSV(content, rules) {
    // Basic CSV validation
    const lines = content.split('\n');
    if (lines.length < 2) {
      return { valid: false, error: 'CSV must have at least header and one data row' };
    }
    return { valid: true, data: content };
  }

  async validateXML(content, rules) {
    // Basic XML validation
    if (!content.includes('<') || !content.includes('>')) {
      return { valid: false, error: 'Invalid XML format' };
    }
    return { valid: true, data: content };
  }

  async validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return { valid: emailRegex.test(email), data: email };
  }

  async validatePhone(phone) {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return { valid: phoneRegex.test(phone.replace(/\s/g, '')), data: phone };
  }

  // Transformer implementations
  async normalizeData(data, config) {
    if (Array.isArray(data)) {
      return data.map(item => this.normalizeItem(item, config));
    }
    return this.normalizeItem(data, config);
  }

  normalizeItem(item, config) {
    if (typeof item === 'object' && item !== null) {
      const normalized = {};
      for (const [key, value] of Object.entries(item)) {
        const normalizedKey = config?.lowercaseKeys ? key.toLowerCase() : key;
        normalized[normalizedKey] = this.normalizeValue(value, config);
      }
      return normalized;
    }
    return this.normalizeValue(item, config);
  }

  normalizeValue(value, config) {
    if (typeof value === 'string') {
      if (config?.trim) value = value.trim();
      if (config?.lowercase) value = value.toLowerCase();
      if (config?.uppercase) value = value.toUpperCase();
    }
    return value;
  }

  async cleanData(data, config) {
    if (Array.isArray(data)) {
      return data.filter(item => this.isValidItem(item, config));
    }
    return this.isValidItem(data, config) ? data : null;
  }

  isValidItem(item, config) {
    if (item === null || item === undefined) return false;
    if (typeof item === 'string' && item.trim() === '') return false;
    return true;
  }

  async formatData(data, config) {
    const { format, template } = config;
    
    switch (format) {
      case 'json':
        return JSON.stringify(data, null, 2);
      case 'csv':
        return this.toCSV(data);
      case 'xml':
        return this.toXML(data);
      case 'template':
        return this.applyTemplate(data, template);
      default:
        return data;
    }
  }

  async aggregateData(data, config) {
    const { groupBy, operations } = config;
    const groups = {};

    for (const item of data) {
      const groupKey = this.getGroupKey(item, groupBy);
      if (!groups[groupKey]) {
        groups[groupKey] = [];
      }
      groups[groupKey].push(item);
    }

    const results = [];
    for (const [groupKey, groupItems] of Object.entries(groups)) {
      const aggregated = this.performAggregation(groupItems, operations);
      results.push({ group: groupKey, ...aggregated });
    }

    return results;
  }

  async filterData(data, config) {
    const { conditions } = config;
    return data.filter(item => this.evaluateConditions(item, conditions));
  }

  // Helper methods
  createBatches(items, batchSize) {
    const batches = [];
    for (let i = 0; i < items.length; i += batchSize) {
      batches.push(items.slice(i, i + batchSize));
    }
    return batches;
  }

  async processBatch(batch) {
    // Process each item in the batch
    return batch.map(item => this.processItem(item));
  }

  processItem(item) {
    // Basic item processing - can be extended
    return item;
  }

  removeDuplicates(data) {
    if (Array.isArray(data)) {
      return [...new Set(data)];
    }
    return data;
  }

  removeNullValues(data) {
    if (Array.isArray(data)) {
      return data.filter(item => item !== null && item !== undefined);
    }
    return data;
  }

  getGroupKey(item, groupBy) {
    if (typeof groupBy === 'string') {
      return item[groupBy];
    }
    if (typeof groupBy === 'function') {
      return groupBy(item);
    }
    return 'default';
  }

  performAggregation(items, operations) {
    const result = {};
    
    for (const [field, operation] of Object.entries(operations)) {
      const values = items.map(item => item[field]).filter(v => v !== null && v !== undefined);
      
      switch (operation) {
        case 'sum':
          result[field] = values.reduce((sum, val) => sum + val, 0);
          break;
        case 'avg':
          result[field] = values.reduce((sum, val) => sum + val, 0) / values.length;
          break;
        case 'count':
          result[field] = values.length;
          break;
        case 'min':
          result[field] = Math.min(...values);
          break;
        case 'max':
          result[field] = Math.max(...values);
          break;
      }
    }
    
    return result;
  }

  evaluateConditions(item, conditions) {
    return conditions.every(condition => {
      const { field, operator, value } = condition;
      const itemValue = item[field];
      
      switch (operator) {
        case 'equals':
          return itemValue === value;
        case 'not_equals':
          return itemValue !== value;
        case 'greater_than':
          return itemValue > value;
        case 'less_than':
          return itemValue < value;
        case 'contains':
          return String(itemValue).includes(value);
        case 'regex':
          return new RegExp(value).test(String(itemValue));
        default:
          return true;
      }
    });
  }

  toCSV(data) {
    if (!Array.isArray(data) || data.length === 0) return '';
    
    const headers = Object.keys(data[0]);
    const csvRows = [headers.join(',')];
    
    for (const row of data) {
      const values = headers.map(header => `"${row[header] || ''}"`);
      csvRows.push(values.join(','));
    }
    
    return csvRows.join('\n');
  }

  toXML(data) {
    // Basic XML conversion
    if (typeof data === 'object') {
      return `<root>${JSON.stringify(data)}</root>`;
    }
    return `<root>${data}</root>`;
  }

  applyTemplate(data, template) {
    // Simple template application
    return template.replace(/\{(\w+)\}/g, (match, key) => data[key] || '');
  }

  getCapabilities() {
    return {
      name: this.config.name,
      version: this.config.version,
      capabilities: this.config.capabilities,
      validators: Array.from(this.dataValidators.keys()),
      transformers: Array.from(this.transformers.keys())
    };
  }
}

module.exports = { DataProcessingAgent };

