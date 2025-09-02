const { BaseAgent } = require('./base-agent');
const fs = require('fs').promises;
const path = require('path');

class CreativeDirectorAgent extends BaseAgent {
  constructor(config) {
    super(config);
    this.creativeProjects = new Map();
    this.brandGuidelines = new Map();
    this.creativeBriefs = new Map();
    this.feedbackCycles = new Map();
    this.templates = new Map();
  }

  async onInitialize() {
    await this.loadTemplates();
    await this.setupBrandGuidelines();
    this.setupCreativeWorkflows();
    this.logger.info('CreativeDirectorAgent initialized with creative workflows');
  }

  async loadTemplates() {
    // Load markdown templates for creative briefs, feedback, etc.
    const templateDir = path.join(__dirname, 'templates');
    
    try {
      const files = await fs.readdir(templateDir);
      for (const file of files) {
        if (file.endsWith('.md')) {
          const templateName = file.replace('.md', '');
          const templateContent = await fs.readFile(path.join(templateDir, file), 'utf8');
          this.templates.set(templateName, templateContent);
        }
      }
    } catch (error) {
      this.logger.warn('Could not load templates directory, using defaults');
      this.setupDefaultTemplates();
    }
  }

  setupDefaultTemplates() {
    this.templates.set('creative_brief', this.getDefaultCreativeBriefTemplate());
    this.templates.set('brand_guidelines', this.getDefaultBrandGuidelinesTemplate());
    this.templates.set('feedback_template', this.getDefaultFeedbackTemplate());
    this.templates.set('project_timeline', this.getDefaultProjectTimelineTemplate());
  }

  setupBrandGuidelines() {
    // Set up brand guidelines for Fractional CMO business
    this.brandGuidelines.set('color_palette', {
      primary: '#00a6e3',
      secondary: '#002848',
      accent: '#ec008b',
      neutral: '#abd6f2',
      success: '#28a745',
      warning: '#ffc107',
      error: '#dc3545'
    });

    this.brandGuidelines.set('typography', {
      heading: 'Inter, sans-serif',
      body: 'Inter, sans-serif',
      accent: 'Inter, sans-serif',
      sizes: {
        h1: '2.5rem',
        h2: '2rem',
        h3: '1.5rem',
        body: '1rem',
        small: '0.875rem'
      }
    });

    this.brandGuidelines.set('tone_of_voice', {
      primary: 'Professional but approachable',
      secondary: 'Expert and confident',
      tertiary: 'Quirky and memorable',
      examples: [
        'Unleash your marketing superpowers (cape optional)',
        'Strategic clarity without the corporate stiffness',
        'Results that speak louder than buzzwords'
      ]
    });

    this.brandGuidelines.set('visual_style', {
      style: 'Modern and clean',
      mood: 'Professional yet approachable',
      elements: ['Clean lines', 'Bold colors', 'Subtle animations', 'Professional photography'],
      avoid: ['Overly corporate', 'Generic stock photos', 'Complex layouts']
    });
  }

  setupCreativeWorkflows() {
    this.workflows = {
      'website_design': {
        phases: ['discovery', 'concept', 'design', 'review', 'approval', 'handoff'],
        deliverables: ['wireframes', 'mockups', 'prototypes', 'final_designs'],
        timeline: '2-3 weeks'
      },
      'brand_identity': {
        phases: ['research', 'concept', 'design', 'refinement', 'finalization'],
        deliverables: ['logo_options', 'color_palette', 'typography', 'style_guide'],
        timeline: '3-4 weeks'
      },
      'marketing_campaign': {
        phases: ['strategy', 'concept', 'design', 'production', 'launch'],
        deliverables: ['campaign_concept', 'visual_assets', 'copy', 'launch_materials'],
        timeline: '4-6 weeks'
      }
    };
  }

  async onExecuteTask(task, data) {
    switch (task) {
      case 'create_creative_brief':
        return await this.createCreativeBrief(data);
      case 'review_design':
        return await this.reviewDesign(data);
      case 'generate_concept':
        return await this.generateConcept(data);
      case 'manage_feedback':
        return await this.manageFeedback(data);
      case 'approve_deliverable':
        return await this.approveDeliverable(data);
      case 'generate_brand_guidelines':
        return await this.generateBrandGuidelines(data);
      case 'track_project_progress':
        return await this.trackProjectProgress(data);
      case 'create_project_timeline':
        return await this.createProjectTimeline(data);
      default:
        throw new Error(`Unknown task: ${task}`);
    }
  }

  async createCreativeBrief(data) {
    const { projectType, clientInfo, objectives, requirements, timeline } = data;
    
    // Generate brief using markdown template
    const template = this.templates.get('creative_brief');
    const briefContent = await this.processTemplate(template, {
      projectType,
      clientInfo,
      objectives,
      requirements,
      timeline,
      brandGuidelines: this.brandGuidelines
    });

    const brief = {
      briefId: this.generateBriefId(),
      projectType: projectType,
      clientInfo: clientInfo,
      objectives: objectives,
      requirements: requirements,
      timeline: timeline,
      content: briefContent,
      status: 'draft',
      createdAt: new Date().toISOString(),
      stakeholders: this.identifyStakeholders(clientInfo),
      deliverables: this.defineDeliverables(projectType),
      successMetrics: this.defineSuccessMetrics(objectives)
    };

    this.creativeBriefs.set(brief.briefId, brief);

    return {
      success: true,
      brief: brief,
      nextSteps: this.getNextStepsForBrief(brief)
    };
  }

  async reviewDesign(data) {
    const { designId, designUrl, briefId, reviewer, feedback } = data;
    
    const review = {
      reviewId: this.generateReviewId(),
      designId: designId,
      briefId: briefId,
      reviewer: reviewer,
      feedback: feedback,
      status: this.evaluateDesign(briefId, feedback),
      recommendations: this.generateRecommendations(feedback),
      approved: this.isDesignApproved(feedback),
      reviewedAt: new Date().toISOString()
    };

    // Update feedback cycle
    const feedbackCycle = this.feedbackCycles.get(designId) || [];
    feedbackCycle.push(review);
    this.feedbackCycles.set(designId, feedbackCycle);

    return {
      success: true,
      review: review,
      nextActions: this.getNextActionsForReview(review)
    };
  }

  async generateConcept(data) {
    const { briefId, conceptType, constraints } = data;
    
    const brief = this.creativeBriefs.get(briefId);
    if (!brief) {
      throw new Error(`Creative brief ${briefId} not found`);
    }

    const concept = {
      conceptId: this.generateConceptId(),
      briefId: briefId,
      conceptType: conceptType,
      name: this.generateConceptName(brief.projectType),
      description: await this.generateConceptDescription(brief, conceptType),
      visualDirection: this.generateVisualDirection(brief, constraints),
      copyDirection: this.generateCopyDirection(brief),
      technicalSpecs: this.generateTechnicalSpecs(brief, conceptType),
      timeline: this.estimateConceptTimeline(conceptType),
      resources: this.identifyRequiredResources(conceptType),
      createdAt: new Date().toISOString()
    };

    return {
      success: true,
      concept: concept,
      approvalRequired: true,
      nextSteps: ['present_concept', 'gather_feedback', 'refine_concept']
    };
  }

  async manageFeedback(data) {
    const { designId, feedback, action } = data;
    
    const feedbackCycle = this.feedbackCycles.get(designId) || [];
    
    switch (action) {
      case 'add_feedback':
        const newFeedback = {
          id: this.generateFeedbackId(),
          feedback: feedback,
          timestamp: new Date().toISOString(),
          status: 'pending'
        };
        feedbackCycle.push(newFeedback);
        break;
        
      case 'resolve_feedback':
        const feedbackToResolve = feedbackCycle.find(f => f.id === feedback.id);
        if (feedbackToResolve) {
          feedbackToResolve.status = 'resolved';
          feedbackToResolve.resolvedAt = new Date().toISOString();
        }
        break;
        
      case 'escalate_feedback':
        const feedbackToEscalate = feedbackCycle.find(f => f.id === feedback.id);
        if (feedbackToEscalate) {
          feedbackToEscalate.status = 'escalated';
          feedbackToEscalate.escalatedAt = new Date().toISOString();
        }
        break;
    }

    this.feedbackCycles.set(designId, feedbackCycle);

    return {
      success: true,
      feedbackCycle: feedbackCycle,
      summary: this.generateFeedbackSummary(feedbackCycle)
    };
  }

  async approveDeliverable(data) {
    const { deliverableId, approver, comments } = data;
    
    const approval = {
      approvalId: this.generateApprovalId(),
      deliverableId: deliverableId,
      approver: approver,
      comments: comments,
      status: 'approved',
      approvedAt: new Date().toISOString(),
      nextPhase: this.determineNextPhase(deliverableId)
    };

    return {
      success: true,
      approval: approval,
      nextSteps: this.getNextStepsAfterApproval(approval)
    };
  }

  async generateBrandGuidelines(data) {
    const { clientInfo, industry, targetAudience } = data;
    
    const template = this.templates.get('brand_guidelines');
    const guidelinesContent = await this.processTemplate(template, {
      clientInfo,
      industry,
      targetAudience,
      existingGuidelines: this.brandGuidelines
    });

    const guidelines = {
      guidelinesId: this.generateGuidelinesId(),
      clientInfo: clientInfo,
      industry: industry,
      targetAudience: targetAudience,
      content: guidelinesContent,
      colorPalette: this.generateColorPalette(industry, targetAudience),
      typography: this.generateTypography(industry, targetAudience),
      toneOfVoice: this.generateToneOfVoice(industry, targetAudience),
      visualStyle: this.generateVisualStyle(industry, targetAudience),
      createdAt: new Date().toISOString()
    };

    return {
      success: true,
      guidelines: guidelines,
      recommendations: this.generateGuidelinesRecommendations(guidelines)
    };
  }

  async trackProjectProgress(data) {
    const { projectId } = data;
    
    const project = this.creativeProjects.get(projectId);
    if (!project) {
      throw new Error(`Project ${projectId} not found`);
    }

    const progress = {
      projectId: projectId,
      currentPhase: project.currentPhase,
      completedPhases: this.getCompletedPhases(project),
      remainingPhases: this.getRemainingPhases(project),
      progress: this.calculateProjectProgress(project),
      deliverables: this.trackDeliverables(project),
      timeline: this.assessTimeline(project),
      blockers: this.identifyBlockers(project),
      nextActions: this.getNextActions(project)
    };

    return {
      success: true,
      progress: progress,
      recommendations: this.generateProgressRecommendations(progress)
    };
  }

  async createProjectTimeline(data) {
    const { projectType, startDate, constraints } = data;
    
    const workflow = this.workflows[projectType];
    if (!workflow) {
      throw new Error(`Unknown project type: ${projectType}`);
    }

    const template = this.templates.get('project_timeline');
    const timelineContent = await this.processTemplate(template, {
      projectType,
      workflow,
      startDate,
      constraints
    });

    const timeline = {
      timelineId: this.generateTimelineId(),
      projectType: projectType,
      startDate: startDate,
      phases: this.generatePhases(workflow, startDate),
      milestones: this.generateMilestones(workflow, startDate),
      deliverables: this.generateDeliverables(workflow),
      timeline: timelineContent,
      createdAt: new Date().toISOString()
    };

    return {
      success: true,
      timeline: timeline,
      nextSteps: ['review_timeline', 'approve_timeline', 'begin_project']
    };
  }

  // Helper methods
  async processTemplate(template, data) {
    // Process markdown template with data
    let processed = template;
    
    // Replace placeholders with actual data
    for (const [key, value] of Object.entries(data)) {
      const placeholder = `[${key.toUpperCase()}]`;
      if (typeof value === 'object') {
        processed = processed.replace(placeholder, JSON.stringify(value, null, 2));
      } else {
        processed = processed.replace(placeholder, value);
      }
    }
    
    return processed;
  }

  generateBriefId() {
    return 'brief_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  }

  generateReviewId() {
    return 'review_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  }

  generateConceptId() {
    return 'concept_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  }

  generateFeedbackId() {
    return 'feedback_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  }

  generateApprovalId() {
    return 'approval_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  }

  generateGuidelinesId() {
    return 'guidelines_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  }

  generateTimelineId() {
    return 'timeline_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  }

  identifyStakeholders(clientInfo) {
    return [
      'Project Manager',
      'Creative Director',
      'Designer',
      'Client Representative',
      'Technical Lead'
    ];
  }

  defineDeliverables(projectType) {
    const deliverables = {
      'website_design': ['Wireframes', 'Mockups', 'Prototypes', 'Final Designs'],
      'brand_identity': ['Logo Options', 'Color Palette', 'Typography', 'Style Guide'],
      'marketing_campaign': ['Campaign Concept', 'Visual Assets', 'Copy', 'Launch Materials']
    };
    return deliverables[projectType] || [];
  }

  defineSuccessMetrics(objectives) {
    return objectives.map(objective => ({
      metric: this.mapObjectiveToMetric(objective),
      target: this.setTargetForMetric(objective),
      measurement: this.defineMeasurement(objective)
    }));
  }

  mapObjectiveToMetric(objective) {
    const mappings = {
      'increase_brand_awareness': 'Brand Recognition',
      'generate_leads': 'Lead Generation',
      'improve_conversion': 'Conversion Rate',
      'enhance_user_experience': 'User Satisfaction'
    };
    return mappings[objective] || 'Custom Metric';
  }

  setTargetForMetric(objective) {
    const targets = {
      'increase_brand_awareness': '20% increase',
      'generate_leads': '25 qualified leads',
      'improve_conversion': '15% improvement',
      'enhance_user_experience': '4.5/5 rating'
    };
    return targets[objective] || 'TBD';
  }

  defineMeasurement(objective) {
    const measurements = {
      'increase_brand_awareness': 'Brand surveys, social mentions',
      'generate_leads': 'Lead tracking, CRM data',
      'improve_conversion': 'Analytics, A/B testing',
      'enhance_user_experience': 'User testing, feedback forms'
    };
    return measurements[objective] || 'Custom measurement';
  }

  getNextStepsForBrief(brief) {
    return [
      'Review and approve brief',
      'Assign creative team',
      'Schedule kickoff meeting',
      'Begin concept development'
    ];
  }

  evaluateDesign(briefId, feedback) {
    const positiveKeywords = ['great', 'excellent', 'perfect', 'love', 'amazing'];
    const negativeKeywords = ['terrible', 'awful', 'bad', 'hate', 'wrong'];
    
    const feedbackText = feedback.toLowerCase();
    const positiveCount = positiveKeywords.filter(word => feedbackText.includes(word)).length;
    const negativeCount = negativeKeywords.filter(word => feedbackText.includes(word)).length;
    
    if (positiveCount > negativeCount) return 'approved';
    if (negativeCount > positiveCount) return 'needs_revision';
    return 'under_review';
  }

  generateRecommendations(feedback) {
    // Mock recommendation generation based on feedback
    return [
      'Consider adjusting color palette for better contrast',
      'Review typography hierarchy for improved readability',
      'Evaluate layout spacing for better visual flow'
    ];
  }

  isDesignApproved(feedback) {
    return this.evaluateDesign(null, feedback) === 'approved';
  }

  getNextActionsForReview(review) {
    if (review.approved) {
      return ['Proceed to next phase', 'Update project status', 'Notify stakeholders'];
    } else {
      return ['Address feedback', 'Revise design', 'Schedule follow-up review'];
    }
  }

  generateConceptName(projectType) {
    const names = {
      'website_design': 'Modern Professional',
      'brand_identity': 'Bold & Approachable',
      'marketing_campaign': 'Results-Driven'
    };
    return names[projectType] || 'Concept A';
  }

  async generateConceptDescription(brief, conceptType) {
    // Mock concept description generation
    return `A ${conceptType} approach that emphasizes ${brief.objectives.join(', ')} while maintaining the brand's ${this.brandGuidelines.get('tone_of_voice').primary} voice.`;
  }

  generateVisualDirection(brief, constraints) {
    return {
      style: this.brandGuidelines.get('visual_style').style,
      mood: this.brandGuidelines.get('visual_style').mood,
      colors: this.brandGuidelines.get('color_palette'),
      typography: this.brandGuidelines.get('typography'),
      constraints: constraints
    };
  }

  generateCopyDirection(brief) {
    return {
      tone: this.brandGuidelines.get('tone_of_voice').primary,
      style: 'Clear and compelling',
      keyMessages: brief.objectives,
      examples: this.brandGuidelines.get('tone_of_voice').examples
    };
  }

  generateTechnicalSpecs(brief, conceptType) {
    return {
      platform: 'Web',
      responsive: true,
      accessibility: 'WCAG 2.1 AA',
      performance: 'Optimized for speed',
      browserSupport: 'Modern browsers'
    };
  }

  estimateConceptTimeline(conceptType) {
    const timelines = {
      'visual': '1 week',
      'copy': '3-5 days',
      'full': '2 weeks'
    };
    return timelines[conceptType] || '1 week';
  }

  identifyRequiredResources(conceptType) {
    return [
      'Designer',
      'Copywriter',
      'Project Manager',
      'Client Feedback'
    ];
  }

  generateFeedbackSummary(feedbackCycle) {
    const totalFeedback = feedbackCycle.length;
    const resolvedFeedback = feedbackCycle.filter(f => f.status === 'resolved').length;
    const pendingFeedback = feedbackCycle.filter(f => f.status === 'pending').length;
    
    return {
      total: totalFeedback,
      resolved: resolvedFeedback,
      pending: pendingFeedback,
      resolutionRate: totalFeedback > 0 ? (resolvedFeedback / totalFeedback) * 100 : 0
    };
  }

  determineNextPhase(deliverableId) {
    // Mock phase determination
    return 'production';
  }

  getNextStepsAfterApproval(approval) {
    return [
      'Begin next phase',
      'Update project timeline',
      'Notify team members',
      'Schedule next review'
    ];
  }

  generateColorPalette(industry, targetAudience) {
    // Mock color palette generation
    return {
      primary: '#00a6e3',
      secondary: '#002848',
      accent: '#ec008b',
      neutral: '#abd6f2'
    };
  }

  generateTypography(industry, targetAudience) {
    return {
      heading: 'Inter, sans-serif',
      body: 'Inter, sans-serif',
      sizes: {
        h1: '2.5rem',
        h2: '2rem',
        h3: '1.5rem',
        body: '1rem'
      }
    };
  }

  generateToneOfVoice(industry, targetAudience) {
    return {
      primary: 'Professional but approachable',
      secondary: 'Expert and confident',
      examples: [
        'Strategic clarity without the corporate stiffness',
        'Results that speak louder than buzzwords'
      ]
    };
  }

  generateVisualStyle(industry, targetAudience) {
    return {
      style: 'Modern and clean',
      mood: 'Professional yet approachable',
      elements: ['Clean lines', 'Bold colors', 'Subtle animations']
    };
  }

  generateGuidelinesRecommendations(guidelines) {
    return [
      'Review guidelines with team',
      'Create style guide document',
      'Set up design system',
      'Train team on new guidelines'
    ];
  }

  getCompletedPhases(project) {
    const phases = ['discovery', 'concept', 'design', 'review', 'approval', 'handoff'];
    const currentIndex = phases.indexOf(project.currentPhase);
    return phases.slice(0, currentIndex);
  }

  getRemainingPhases(project) {
    const phases = ['discovery', 'concept', 'design', 'review', 'approval', 'handoff'];
    const currentIndex = phases.indexOf(project.currentPhase);
    return phases.slice(currentIndex + 1);
  }

  calculateProjectProgress(project) {
    const totalPhases = 6;
    const completedPhases = this.getCompletedPhases(project).length;
    return Math.round((completedPhases / totalPhases) * 100);
  }

  trackDeliverables(project) {
    return project.deliverables.map(deliverable => ({
      name: deliverable,
      status: 'in_progress',
      dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString()
    }));
  }

  assessTimeline(project) {
    return {
      onTrack: true,
      estimatedCompletion: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString(),
      riskLevel: 'low'
    };
  }

  identifyBlockers(project) {
    return [];
  }

  getNextActions(project) {
    return [
      'Continue current phase',
      'Prepare for next phase',
      'Update stakeholders',
      'Review deliverables'
    ];
  }

  generateProgressRecommendations(progress) {
    return [
      'Maintain current momentum',
      'Ensure timely stakeholder communication',
      'Prepare for upcoming phase transition'
    ];
  }

  generatePhases(workflow, startDate) {
    return workflow.phases.map((phase, index) => ({
      name: phase,
      startDate: new Date(startDate.getTime() + index * 7 * 24 * 60 * 60 * 1000).toISOString(),
      duration: '1 week',
      status: index === 0 ? 'active' : 'pending'
    }));
  }

  generateMilestones(workflow, startDate) {
    return workflow.phases.map((phase, index) => ({
      name: `${phase.charAt(0).toUpperCase() + phase.slice(1)} Complete`,
      date: new Date(startDate.getTime() + (index + 1) * 7 * 24 * 60 * 60 * 1000).toISOString(),
      deliverables: workflow.deliverables[index] || []
    }));
  }

  generateDeliverables(workflow) {
    return workflow.deliverables.map(deliverable => ({
      name: deliverable,
      status: 'pending',
      dueDate: null
    }));
  }

  // Default template methods
  getDefaultCreativeBriefTemplate() {
    return `# Creative Brief

## Project Overview
**Project Type:** [PROJECTTYPE]
**Client:** [CLIENTINFO]
**Timeline:** [TIMELINE]

## Objectives
[OBJECTIVES]

## Requirements
[REQUIREMENTS]

## Brand Guidelines
**Tone of Voice:** [BRANDGUIDELINES.tone_of_voice.primary]
**Visual Style:** [BRANDGUIDELINES.visual_style.style]
**Color Palette:** [BRANDGUIDELINES.color_palette.primary]

## Success Metrics
- [Success metric 1]
- [Success metric 2]
- [Success metric 3]

## Deliverables
- [Deliverable 1]
- [Deliverable 2]
- [Deliverable 3]

## Stakeholders
- [Stakeholder 1]
- [Stakeholder 2]
- [Stakeholder 3]`;
  }

  getDefaultBrandGuidelinesTemplate() {
    return `# Brand Guidelines

## Brand Overview
**Client:** [CLIENTINFO]
**Industry:** [INDUSTRY]
**Target Audience:** [TARGETAUDIENCE]

## Color Palette
**Primary:** [COLORPALETTE.primary]
**Secondary:** [COLORPALETTE.secondary]
**Accent:** [COLORPALETTE.accent]
**Neutral:** [COLORPALETTE.neutral]

## Typography
**Heading Font:** [TYPOGRAPHY.heading]
**Body Font:** [TYPOGRAPHY.body]
**Sizes:** [TYPOGRAPHY.sizes]

## Tone of Voice
**Primary:** [TONEOFVOICE.primary]
**Secondary:** [TONEOFVOICE.secondary]
**Examples:** [TONEOFVOICE.examples]

## Visual Style
**Style:** [VISUALSTYLE.style]
**Mood:** [VISUALSTYLE.mood]
**Elements:** [VISUALSTYLE.elements]`;
  }

  getDefaultFeedbackTemplate() {
    return `# Design Feedback

## Design Review
**Design ID:** [DESIGNID]
**Reviewer:** [REVIEWER]
**Date:** [DATE]

## Feedback
[FEEDBACK]

## Recommendations
- [Recommendation 1]
- [Recommendation 2]
- [Recommendation 3]

## Status
**Approval Status:** [STATUS]
**Next Steps:** [NEXTSTEPS]`;
  }

  getDefaultProjectTimelineTemplate() {
    return `# Project Timeline

## Project Overview
**Project Type:** [PROJECTTYPE]
**Start Date:** [STARTDATE]
**Timeline:** [WORKFLOW.timeline]

## Phases
[PHASES]

## Milestones
[MILESTONES]

## Deliverables
[DELIVERABLES]

## Timeline
[TIMELINE]`;
  }

  getCapabilities() {
    return {
      name: this.config.name,
      version: this.config.version,
      capabilities: [
        'creative_brief_creation',
        'design_review',
        'concept_generation',
        'feedback_management',
        'deliverable_approval',
        'brand_guidelines_generation',
        'project_progress_tracking',
        'timeline_creation'
      ],
      workflows: Object.keys(this.workflows),
      templates: Array.from(this.templates.keys())
    };
  }
}

module.exports = { CreativeDirectorAgent };


