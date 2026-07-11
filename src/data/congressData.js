// ============================================================================
// Congress Intelligence Data — BeiGene / BeOne
// Keys off CONGRESS_OPTIONS from config
// ============================================================================

import { PRODUCT_OPTIONS } from '../config';

const productNames = PRODUCT_OPTIONS.map(p => p.name);

export const MOCK_TREND_SENTIMENT = {
  timeline: ['Post-iwCLL 2025', 'Q4 2025', 'Q1 2026', 'Q2 2026', 'EHA 2026'],
  scientific: [
    { period: 'Post-iwCLL 2025', [productNames[0]]: 61, [productNames[1]]: 54, 'Ibrutinib': 68, Other: 49 },
    { period: 'Q4 2025',         [productNames[0]]: 64, [productNames[1]]: 56, 'Ibrutinib': 66, Other: 51 },
    { period: 'Q1 2026',         [productNames[0]]: 67, [productNames[1]]: 58, 'Ibrutinib': 64, Other: 52 },
    { period: 'Q2 2026',         [productNames[0]]: 71, [productNames[1]]: 61, 'Ibrutinib': 62, Other: 54 },
    { period: 'EHA 2026',        [productNames[0]]: 68, [productNames[1]]: 61, 'Ibrutinib': 59, Other: 55 },
  ],
  social: [
    { period: 'Post-iwCLL 2025', [productNames[0]]: 57, [productNames[1]]: 48, 'Ibrutinib': 64, Other: 46 },
    { period: 'Q4 2025',         [productNames[0]]: 59, [productNames[1]]: 51, 'Ibrutinib': 62, Other: 48 },
    { period: 'Q1 2026',         [productNames[0]]: 62, [productNames[1]]: 53, 'Ibrutinib': 60, Other: 49 },
    { period: 'Q2 2026',         [productNames[0]]: 64, [productNames[1]]: 55, 'Ibrutinib': 58, Other: 51 },
    { period: 'EHA 2026',        [productNames[0]]: 62, [productNames[1]]: 55, 'Ibrutinib': 56, Other: 52 },
  ],
};

export const MOCK_SCIENTIFIC_ARTICLES = [
  { title: 'Zanubrutinib vs ibrutinib ALPINE final OS analysis: superior PFS and CV safety', journalOrCongress: 'EHA 2026', date: '2026-06', product: productNames[0], sentiment: 'positive' },
  { title: 'Fixed-duration ibrutinib+venetoclax: GLOW 4-year follow-up data', journalOrCongress: 'EHA 2026', date: '2026-06', product: 'Ibrutinib+Venetoclax', sentiment: 'positive' },
  { title: 'Tislelizumab (RATIONALE-302) in esophageal SCC: OS and PD-L1 subgroup update', journalOrCongress: 'J Clin Oncol', date: '2026-05', product: productNames[1], sentiment: 'positive' },
  { title: 'BTK inhibitor cardiovascular toxicity in real-world CLL: AF and hypertension rates', journalOrCongress: 'Blood', date: '2026-04', product: productNames[0], sentiment: 'positive' },
  { title: 'Zanubrutinib+venetoclax MANIFEST-2: interim combination efficacy data', journalOrCongress: 'EHA 2026 Abstract', date: '2026-06', product: productNames[0], sentiment: 'positive' },
];

export const MOCK_SOCIAL_TREND_SOURCES = [
  { platform: 'LinkedIn', author: 'Dr. Paolo Ghia', topic: 'Fixed-duration BTK+ven vs continuous zanubrutinib — GLOW 4yr data', date: '2026-06', product: 'Ibrutinib+Venetoclax', sentiment: 'positive' },
  { platform: 'Twitter/X', author: 'Dr. Jennifer Brown', topic: 'ALPINE OS data at EHA 2026 — zanubrutinib superior survival vs ibrutinib', date: '2026-06', product: productNames[0], sentiment: 'positive' },
  { platform: 'LinkedIn', author: 'Dr. Paolo Ghia', topic: 'QoL with finite-duration regimens — response to continuous BTK proponents', date: '2026-06', product: 'Ibrutinib+Venetoclax', sentiment: 'positive' },
  { platform: 'Twitter/X', author: 'Dr. Ian Chau', topic: 'RATIONALE-302 OS data: where does tislelizumab fit in esophageal SCC?', date: '2026-06', product: productNames[1], sentiment: 'positive' },
  { platform: 'Conference backchannel', author: 'Multiple EHA attendees', topic: 'BTK cardiovascular safety debate — zanubrutinib CV profile vs ibrutinib', date: '2026-06', product: productNames[0], sentiment: 'positive' },
];

export const MOCK_INGESTION = {
  agendas: 16,
  abstracts: 2140,
  posters: 731,
  speakers: 512,
  publicationsLinked: 2847,
  sessions: [
    { title: 'Brukinsa ALPINE Long-Term OS and Cardiovascular Safety Update', track: 'CLL/Lymphoma', products: [productNames[0], 'Ibrutinib'] },
    { title: 'Fixed-Duration vs Continuous BTK Inhibition in CLL — KOL Debate', track: 'CLL/Lymphoma', products: [productNames[0], 'Ibrutinib+Venetoclax'] },
    { title: 'Tevimbra B-cell Lymphoma Signals — Emerging IO Data', track: 'Lymphoma/IO', products: [productNames[1]] },
    { title: 'BTK + Venetoclax Combinations in CLL — MANIFEST-2 and Beyond', track: 'CLL', products: [productNames[0], 'Venetoclax'] },
  ],
};

export const INGESTION_BY_CONGRESS = {
  'eha-2026': {
    agendas: 16,
    abstracts: 2140,
    posters: 731,
    speakers: 512,
    publicationsLinked: 2847,
    sessions: [
      { title: 'Brukinsa ALPINE Long-Term OS and Cardiovascular Safety Update', track: 'CLL/Lymphoma', products: [productNames[0], 'Ibrutinib'] },
      { title: 'Fixed-Duration vs Continuous BTK Inhibition in CLL — Expert Debate (Ghia vs Brown)', track: 'CLL/Lymphoma', products: [productNames[0], 'Ibrutinib+Venetoclax'] },
      { title: 'Tevimbra B-cell Lymphoma and IO Data at EHA 2026', track: 'Lymphoma/IO', products: [productNames[1]] },
      { title: 'BTK + Venetoclax Combinations — MANIFEST-2 Interim and Sonrotoclax Data', track: 'CLL', products: [productNames[0], 'Venetoclax'] },
    ],
  },
  'esmo-2026': {
    agendas: 20,
    abstracts: 3124,
    posters: 1041,
    speakers: 812,
    publicationsLinked: 4218,
    sessions: [
      { title: 'Tevimbra Esophageal SCC — RATIONALE-302 Long-Term Data and Real-World Experience', track: 'GI Oncology', products: [productNames[1], 'Pembrolizumab'] },
      { title: 'HER2-Negative Gastric/GEJ Adenocarcinoma — Unmet Need and IO Landscape', track: 'GI Oncology', products: [productNames[1]] },
      { title: 'PD-1 Inhibitor Differentiation in Upper GI Cancers — Mechanism and Clinical Signals', track: 'IO/Immunotherapy', products: [productNames[1], 'Pembrolizumab', 'Nivolumab'] },
      { title: 'Brukinsa Solid Tumour IO Signals — Beyond Hematology', track: 'IO Combinations', products: [productNames[0]] },
    ],
  },
  'trend-eha': {
    agendas: 0,
    abstracts: 0,
    posters: 0,
    speakers: 0,
    publicationsLinked: 0,
    sessions: [],
  },
};

export function getIngestionForCongress(congressId) {
  return INGESTION_BY_CONGRESS[congressId] || MOCK_INGESTION;
}

export const MOCK_THEMES = [
  {
    theme: 'Next-gen BTK cardiovascular advantage momentum — ALPINE OS data landing',
    momentum: 91,
    mentions: 62,
    summary: 'Zanubrutinib cardiovascular safety data (AF 5.2% vs 13.3% ibrutinib, ALPINE) is generating growing momentum among academic and increasingly community hematologists. EHA 2026 ALPINE OS presentation by Dr. Brown (Dana-Farber) was the most cited session in post-congress MSL debrief.',
    action: 'Accelerate ALPINE one-pager deployment to community oncologist accounts. Cardiologist-hematologist co-management channel is emerging as a new Brukinsa entry point.',
  },
  {
    theme: 'Time-limited vs continuous BTK debate — Ghia divergence seeding European CLL network',
    momentum: 84,
    mentions: 51,
    summary: 'Fixed-duration ibrutinib+venetoclax advocacy (GLOW/CAPTIVATE data) is becoming a structured counter-narrative to continuous zanubrutinib monotherapy, led by Dr. Paolo Ghia at EHA 2026. His argument — QoL and cost advantages of finite-duration therapy — is resonating with 3 other European CLL Tier 1 KOLs.',
    action: 'Scientific exchange with Ghia is urgent (A2). Counter with ALPINE OS survival data and MANIFEST-2 combination pipeline. Frame BeiGene as the company building the fixed-duration zanubrutinib+BCL-2 answer.',
  },
  {
    theme: 'Tevimbra esophageal SCC OS signal — community GI oncology awareness gap',
    momentum: 76,
    mentions: 39,
    summary: 'RATIONALE-302 OS data (HR 0.70) is generating academic GI oncologist interest but community GI tumour boards remain pembrolizumab-defaulting. The awareness gap between academic and community GI oncology is the primary MO3 challenge.',
    action: 'Tumour board mapping strategy (A5) and differentiation toolkit (A6) are the priority actions. Community GI oncologists need a Tevimbra-specific leave-behind that makes RATIONALE-302 accessible alongside KEYNOTE-590 comparison.',
  },
  {
    theme: 'BTK + venetoclax combinations — Phase III data anticipation building',
    momentum: 68,
    mentions: 34,
    summary: 'Growing KOL and community interest in zanubrutinib+venetoclax combinations ahead of MANIFEST-2 Phase III data. This theme is both an opportunity (BeiGene owns both sides of the BTK+BCL-2 combination space) and a risk (validates the fixed-duration combination argument).',
    action: 'Engage BTK+venetoclax combination KOLs now (A7) to build scientific exchange readiness ahead of data readout. Frame MANIFEST-2 as the data that will resolve the Ghia fixed-duration debate in zanubrutinib\'s favour.',
  },
];

export const MOCK_COMPETITOR_VISIBILITY = [
  { product: `${productNames[0]} (BeiGene)`,    share: 22, mentions: 71 },
  { product: 'Imbruvica (J&J/AbbVie)',           share: 31, mentions: 101 },
  { product: 'Calquence (AstraZeneca)',           share: 19, mentions: 61 },
  { product: 'Jaypirca (Lilly)',                 share: 14, mentions: 45 },
  { product: 'Other BTK/IO',                    share: 14, mentions: 44 },
];

export const MOCK_TRIALS = {
  total: 38,
  linkedToKOLs: 27,
  byIndication: { 'CLL/SLL': 16, 'MCL/WM': 9, 'Esophageal SCC': 8, 'Gastric/GEJ': 5 },
  sample: [
    { nctId: 'NCT03734017', title: 'ALPINE — Zanubrutinib vs Ibrutinib in R/R CLL (OS analysis)', phase: 'Phase III', sponsor: 'BeiGene', product: productNames[0], indication: 'CLL', status: 'Active', sites: 86 },
    { nctId: 'NCT04846751', title: 'MANIFEST-2 — Zanubrutinib+Venetoclax vs ClbO in TN CLL', phase: 'Phase III', sponsor: 'BeiGene', product: productNames[0], indication: 'CLL', status: 'Active', sites: 94 },
    { nctId: 'NCT02593188', title: 'RATIONALE-302 — Tislelizumab vs Chemo in 2L Esophageal SCC', phase: 'Phase III', sponsor: 'BeiGene', product: productNames[1], indication: 'Esophageal SCC', status: 'Completed', sites: 64 },
    { nctId: 'NCT04408638', title: 'Sonrotoclax (BGB-11417) + Zanubrutinib in CLL/B-cell malignancies', phase: 'Phase I/II', sponsor: 'BeiGene', product: productNames[0], indication: 'CLL', status: 'Recruiting', sites: 41 },
  ],
};

export const MOCK_SOCIAL = {
  totalSignals: 3841,
  platforms: [
    { platform: 'Twitter/X',    signals: 1847, sentiment: 0.62 },
    { platform: 'LinkedIn',     signals: 1124, sentiment: 0.67 },
    { platform: 'ResearchGate', signals: 512,  sentiment: 0.74 },
    { platform: 'Other',        signals: 358,  sentiment: 0.58 },
  ],
};

export const DATA_MODULES = [
  { id: 'congress', label: 'Congress & Publications', iconId: 'FileText', status: 'connected', description: 'Agendas, abstracts, posters, speakers, linked publications' },
  { id: 'trials', label: 'Clinical Trials', iconId: 'Activity', status: 'available', description: 'Trial sponsorship, sites, outcomes by product' },
  { id: 'social', label: 'Social & Digital', iconId: 'MessageCircle', status: 'available', description: 'Scientific and digital footprint signals' },
];

export function getDemoContext() {
  return {
    ingestion: MOCK_INGESTION,
    themes: MOCK_THEMES,
    competitorVisibility: MOCK_COMPETITOR_VISIBILITY,
    trials: MOCK_TRIALS,
    social: MOCK_SOCIAL,
    trendSentiment: MOCK_TREND_SENTIMENT,
    scientificArticles: MOCK_SCIENTIFIC_ARTICLES,
    socialTrendSources: MOCK_SOCIAL_TREND_SOURCES,
  };
}
