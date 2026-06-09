import type { FrameworkData, FunctionProfile, Intersection, StageProfile } from './types';

export const structureLayers = [
  {
    id: 'operating',
    title: 'Operating layer',
    sub: 'Visibility, monitoring, optimization',
    body: 'How the org sees work in motion — not where work lives, but how it is governed in real time.',
  },
  {
    id: 'processes',
    title: 'Business processes',
    sub: 'How work moves through the org',
    body: 'The handoffs, queues, and flows that connect functions. Processes persist; what performs them changes.',
  },
  {
    id: 'capability',
    title: 'Skills, memory & security',
    sub: 'Where capability actually lives',
    body: 'The layer that shifts most as you move right — from heads, to docs, to systems, to agents.',
  },
  {
    id: 'workers',
    title: 'Agents + Humans',
    split: true as const,
    left: { label: 'Agents', sub: 'Digital workers' },
    right: { label: 'Humans', sub: 'Judgment & exceptions' },
    body: 'Who performs the work at this layer — and what role each plays as capability digitizes.',
  },
];

export const functions: FunctionProfile[] = [
  {
    id: 'marketing',
    label: 'Marketing',
    purpose: 'Generate and convert demand',
    activities: [
      'Content creation',
      'SEO',
      'Social media',
      'Paid advertising',
      'Email campaigns',
      'Lead nurturing',
      'Analytics',
    ],
    metrics: [
      'Cost per lead',
      'Marketing qualified leads',
      'Website conversion rate',
      'Content engagement',
      'Pipeline contribution',
    ],
  },
  {
    id: 'sales',
    label: 'Sales',
    purpose: 'Convert demand into revenue',
    activities: [
      'Lead qualification',
      'Outreach',
      'Discovery',
      'Proposal creation',
      'Negotiation',
      'Pipeline management',
      'Forecasting',
    ],
    metrics: [
      'Win rate',
      'Pipeline coverage',
      'Average deal size',
      'Sales cycle length',
      'Forecast accuracy',
    ],
  },
  {
    id: 'service',
    label: 'Service',
    purpose: 'Deliver value and retain customers',
    activities: [
      'Customer onboarding',
      'Support',
      'Issue resolution',
      'Knowledge management',
      'Renewals',
      'Upsells',
    ],
    metrics: [
      'CSAT',
      'First response time',
      'Resolution time',
      'Retention',
      'Expansion revenue',
    ],
  },
  {
    id: 'finance',
    label: 'Finance',
    purpose: 'Manage cash and financial performance',
    activities: [
      'Billing',
      'Collections',
      'Accounts payable',
      'Financial reporting',
      'Forecasting',
      'Budgeting',
    ],
    metrics: ['Cash flow', 'DSO', 'Days to close', 'Budget variance', 'Gross margin'],
  },
  {
    id: 'hr',
    label: 'HR',
    purpose: 'Build organizational capability',
    activities: [
      'Recruiting',
      'Onboarding',
      'Payroll',
      'Performance',
      'Learning',
      'Compliance',
    ],
    metrics: [
      'Time to hire',
      'Retention',
      'Employee engagement',
      'Time to productivity',
    ],
  },
  {
    id: 'operations',
    label: 'Operations',
    purpose: 'Deliver products and services efficiently',
    activities: [
      'Capacity planning',
      'Procurement',
      'Inventory',
      'Fulfillment',
      'Quality',
      'Process improvement',
    ],
    metrics: ['Cycle time', 'Throughput', 'Cost per unit', 'Quality score'],
  },
];

export const evolutionStages: StageProfile[] = [
  {
    id: 'human',
    num: 1,
    title: 'Human driven',
    sub: 'Tribal knowledge',
    capability: 'People',
    capabilityLocation: 'Capability lives in people — judgment, memory, relationships.',
    howWorkPerformed: 'Work depends on who is available and what they remember.',
    operationalChange: 'Consistency varies by person. Scaling means hiring.',
  },
  {
    id: 'process',
    num: 2,
    title: 'Process driven',
    sub: 'SOPs, repeatable',
    capability: 'Documents',
    capabilityLocation: 'Capability moves into playbooks, checklists, and handoffs.',
    howWorkPerformed: 'People follow documented steps. Repeatability emerges.',
    operationalChange: 'Training shifts from apprenticeship to documentation.',
  },
  {
    id: 'system',
    num: 3,
    title: 'System driven',
    sub: 'CRM, ERP, data',
    capability: 'Software',
    capabilityLocation: 'Work is tracked, measured, and visible in systems.',
    howWorkPerformed: 'People still perform most work — systems record it.',
    operationalChange: 'Information digitizes. Reporting becomes possible.',
  },
  {
    id: 'automation',
    num: 4,
    title: 'Automation driven',
    sub: 'Workflows, rules',
    capability: 'Pipelines',
    capabilityLocation: 'Repeatable work hands off to scripts and integrations.',
    howWorkPerformed: 'Humans handle exceptions; pipelines handle the rest.',
    operationalChange: 'Throughput rises. Edge cases become the bottleneck.',
  },
  {
    id: 'agent',
    num: 5,
    title: 'Agent driven',
    sub: 'Digital workers',
    capability: 'Agents',
    capabilityLocation: 'Agents perform within defined boundaries.',
    howWorkPerformed: 'Digital workers execute; humans govern the system.',
    operationalChange: 'Capability digitizes. The human role shifts to oversight.',
  },
];

const sales: Record<string, Intersection> = {
  human: {
    headline: 'Knowledge lives in the salesperson.',
    operations: [
      'Pipeline maintained manually',
      'Follow-ups depend on memory',
      'Forecasting depends on judgment',
    ],
    metrics: ['Win rate', 'Activity volume', 'Forecast variance'],
  },
  process: {
    headline: 'Knowledge lives in documented playbooks.',
    operations: [
      'Discovery framework',
      'Proposal process',
      'Qualification criteria',
    ],
    metrics: ['Proposal turnaround', 'Stage conversion rates', 'Rep consistency'],
  },
  system: {
    headline: 'Knowledge lives in CRM.',
    operations: [
      'Pipeline tracked',
      'Activities captured',
      'Reporting available',
    ],
    metrics: ['Pipeline coverage', 'Forecast accuracy', 'CRM adoption'],
  },
  automation: {
    headline: 'Workflows perform repetitive work.',
    operations: [
      'Follow-ups automated',
      'Lead routing automated',
      'Proposal generation automated',
    ],
    metrics: ['Response time', 'Lead conversion', 'Rep productivity'],
  },
  agent: {
    headline: 'Digital workers perform sales activities.',
    operations: ['SDR agents', 'Prospect research agents', 'Meeting scheduling agents'],
    metrics: ['Meetings booked', 'Cost per opportunity', 'Pipeline per employee'],
  },
};

const marketing: Record<string, Intersection> = {
  human: {
    headline: 'Campaign judgment lives in the marketer.',
    operations: ['Channel mix by intuition', 'Creative direction in meetings', 'Spend decisions ad hoc'],
    metrics: ['Brand awareness', 'Campaign reach', 'Lead volume'],
  },
  process: {
    headline: 'Playbooks define how campaigns run.',
    operations: ['Content calendar', 'Campaign brief template', 'Channel checklist'],
    metrics: ['Campaign consistency', 'Time to launch', 'Content output'],
  },
  system: {
    headline: 'Performance tracked in marketing systems.',
    operations: ['Attribution in platform', 'Lead scoring in CRM', 'Dashboard reporting'],
    metrics: ['Cost per lead', 'MQL volume', 'Channel ROI'],
  },
  automation: {
    headline: 'Workflows run recurring campaigns.',
    operations: ['Email sequences automated', 'Lead nurture flows', 'Ad budget rules'],
    metrics: ['Nurture conversion', 'Email engagement', 'Spend efficiency'],
  },
  agent: {
    headline: 'Agents draft and optimize campaigns.',
    operations: ['Content generation agents', 'SEO optimization agents', 'Ad copy testing agents'],
    metrics: ['Content velocity', 'Cost per asset', 'Pipeline contribution'],
  },
};

const service: Record<string, Intersection> = {
  human: {
    headline: 'Resolution knowledge lives with experienced reps.',
    operations: ['Triage by judgment', 'Escalation by memory', 'Answers vary by rep'],
    metrics: ['CSAT', 'First contact resolution', 'Handle time'],
  },
  process: {
    headline: 'Support playbooks standardize responses.',
    operations: ['Tier-one scripts', 'Escalation criteria', 'Onboarding checklist'],
    metrics: ['Resolution consistency', 'Time to onboard', 'Escalation rate'],
  },
  system: {
    headline: 'Tickets and history live in a helpdesk.',
    operations: ['Case tracking', 'Knowledge base linked', 'SLA monitoring'],
    metrics: ['First response time', 'Resolution time', 'Ticket backlog'],
  },
  automation: {
    headline: 'Workflows route and respond to common issues.',
    operations: ['Auto-triage rules', 'Status notifications', 'Renewal reminders'],
    metrics: ['Deflection rate', 'SLA compliance', 'Agent productivity'],
  },
  agent: {
    headline: 'Agents handle tier-one support and onboarding.',
    operations: ['FAQ agents', 'Onboarding agents', 'Renewal outreach agents'],
    metrics: ['Deflection rate', 'Retention', 'Cost per ticket'],
  },
};

const finance: Record<string, Intersection> = {
  human: {
    headline: 'Close process lives in the controller\u2019s head.',
    operations: ['Spreadsheets for close', 'Approvals by email', 'Variance explained manually'],
    metrics: ['Days to close', 'Close accuracy', 'Audit findings'],
  },
  process: {
    headline: 'Close checklists define the month-end.',
    operations: ['Reconciliation steps', 'Approval matrix', 'Reporting calendar'],
    metrics: ['Close consistency', 'Reconciliation time', 'Variance tracking'],
  },
  system: {
    headline: 'Transactions and reports live in ERP.',
    operations: ['GL in system', 'AP/AR tracked', 'Standard reports generated'],
    metrics: ['DSO', 'Days to close', 'Budget variance'],
  },
  automation: {
    headline: 'Workflows automate reconciliations and approvals.',
    operations: ['Invoice matching rules', 'Approval routing', 'Report distribution'],
    metrics: ['Processing time', 'Exception rate', 'Cash application speed'],
  },
  agent: {
    headline: 'Agents assist close, collections, and forecasting.',
    operations: ['Reconciliation agents', 'Collections follow-up agents', 'Forecast draft agents'],
    metrics: ['Days to close', 'DSO', 'Forecast accuracy'],
  },
};

const hr: Record<string, Intersection> = {
  human: {
    headline: 'Policy answers live with HR generalists.',
    operations: ['Hiring by relationship', 'Onboarding informal', 'Compliance by memory'],
    metrics: ['Time to hire', 'New hire satisfaction', 'Compliance incidents'],
  },
  process: {
    headline: 'HR playbooks standardize people operations.',
    operations: ['Interview guides', 'Onboarding packet', 'Performance review cycle'],
    metrics: ['Time to hire', 'Onboarding completion', 'Review cycle adherence'],
  },
  system: {
    headline: 'Employee data lives in HRIS.',
    operations: ['Payroll in system', 'PTO tracked', 'Org chart maintained'],
    metrics: ['Time to hire', 'Retention', 'Payroll accuracy'],
  },
  automation: {
    headline: 'Workflows automate onboarding and approvals.',
    operations: ['Offer letter routing', 'Benefits enrollment flows', 'Offboarding checklist'],
    metrics: ['Time to productivity', 'Onboarding errors', 'Employee engagement'],
  },
  agent: {
    headline: 'Agents answer policy questions and support hiring.',
    operations: ['Policy Q&A agents', 'Screening agents', 'Onboarding guide agents'],
    metrics: ['Time to hire', 'Employee engagement', 'HR ticket volume'],
  },
};

const operations: Record<string, Intersection> = {
  human: {
    headline: 'Process knowledge lives with floor leads.',
    operations: ['Scheduling by experience', 'Quality by inspection', 'Vendor calls ad hoc'],
    metrics: ['Cycle time', 'Defect rate', 'On-time delivery'],
  },
  process: {
    headline: 'SOPs define how work flows.',
    operations: ['Standard work instructions', 'Inspection checklist', 'Shift handoff log'],
    metrics: ['Throughput', 'Defect rate', 'Process adherence'],
  },
  system: {
    headline: 'Inventory and orders tracked in systems.',
    operations: ['WMS/ERP tracking', 'Purchase orders digital', 'Quality data captured'],
    metrics: ['Inventory accuracy', 'Cycle time', 'Cost per unit'],
  },
  automation: {
    headline: 'Workflows trigger replenishment and routing.',
    operations: ['Reorder rules', 'Pick-path optimization', 'Quality alert routing'],
    metrics: ['Stockouts', 'Throughput', 'Labor per unit'],
  },
  agent: {
    headline: 'Agents monitor capacity and coordinate suppliers.',
    operations: ['Demand forecast agents', 'Supplier follow-up agents', 'Quality triage agents'],
    metrics: ['Cycle time', 'Cost per unit', 'Quality score'],
  },
};

export const intersections: Record<string, Record<string, Intersection>> = {
  marketing,
  sales,
  service,
  finance,
  hr,
  operations,
};

export const frameworkDataEn: FrameworkData = {
  structureLayers,
  functions,
  evolutionStages,
  intersections,
};
