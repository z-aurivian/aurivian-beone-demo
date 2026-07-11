// Insight-to-Impact — Vision Doc Module 2 (Insights to Action) impact view.
// Surfaces the lineage from a captured insight → action taken → measurable outcome.

export const INSIGHT_TO_IMPACT = [
  {
    id: 'i2i-1',
    insight: 'MSL field reports identify ibrutinib-associated AF events triggering switch conversations — cardiologists alerting hematologists to Brukinsa.',
    action: 'ALPINE cardiovascular safety vs ibrutinib comparative guide deployed to all hematology MSLs across US and EU (Action A1).',
    outcome: '4 hematologists switched ibrutinib patients to Brukinsa post-AF event in the month following MSL guide deployment. Switch conversations up 28% in tracked community accounts.',
    timeframe: '6 weeks',
    impactScore: 9,
    relatedInsight: 'AI1',
    relatedMO: 'MO1',
  },
  {
    id: 'i2i-2',
    insight: 'Community hematology-oncology practices unaware zanubrutinib is approved first-line for CLL — defaulting to ibrutinib or BR.',
    action: 'Brukinsa CLL first-line conversation guide for community hem-onc MSLs commissioned (Action A3, Accepted).',
    outcome: '3 community hem-onc practices now discussing Brukinsa as a CLL first-line option following MSL guide distribution and targeted scientific exchange. MO2 Low but moving.',
    timeframe: '8 weeks',
    impactScore: 7,
    relatedInsight: 'AI2',
    relatedMO: 'MO2',
  },
  {
    id: 'i2i-3',
    insight: 'ALPINE NEJM publication underexposed in community hematology — OS data (HR 0.65) and CV safety not being cited by community oncologists.',
    action: 'ALPINE NEJM one-pager commissioned for community oncologist use — OS and cardiovascular safety summary in two pages (Action A4, Accepted).',
    outcome: '6 community oncologists reviewed NEJM ALPINE data for the first time following one-pager distribution. 2 initiated switch conversations with ibrutinib patients at cardiac risk. MO1 building toward target.',
    timeframe: '5 weeks',
    impactScore: 8,
    relatedInsight: 'AI5',
    relatedMO: 'MO1',
  },
];
