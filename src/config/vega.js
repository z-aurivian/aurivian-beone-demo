// VEGA — Strategic Analytics agent.
// BeOne / BeiGene fill. All currency in $ (no £ or ₹).

// 1.1 HCP Awareness Progression
export const VEGA_AWARENESS_PROGRESSION = {
  benchmark: '38% of CLL/lymphoma specialists achieving sustained practice change with Brukinsa vs 22% BTK category average — +73% outperformance. Slowest conversion: Knowledgeable → Intent (64%, avg 52 days). Primary blocker: ibrutinib inertia in community hem-onc. Recommended action: accelerate community CLL first-line conversation guide (A3) deployment.',
  stages: [
    { stage: 'Sustained practice change', hcps: 412,  pctTotal: 38, vsQ4: '+9%'  },
    { stage: 'Actively changing practice', hcps: 487,  pctTotal: 45, vsQ4: '+6%'  },
    { stage: 'Intent to change',           hcps: 701,  pctTotal: 65, vsQ4: '+4%'  },
    { stage: 'Knowledgeable',              hcps: 1084, pctTotal: 84, vsQ4: '+3%'  },
    { stage: 'Aware only',                 hcps: 318,  pctTotal: 29, vsQ4: '-11%' },
  ],
};

// 1.2 Interaction Quality vs Quantity — by MSL/Region
export const VEGA_INTERACTION_QUALITY = {
  insight: 'James Park shows high interaction volume but low insight rate — conversations are generating low-quality field intelligence. Likely cause: off-KIQ conversations in the community oncology setting. Recommended: targeted KIQ briefing on ALPINE CV safety and CLL first-line data. Aisha Okonkwo shows volume gap — regional manager review recommended.',
  rows: [
    { msl: 'Dr. Rachel Kim',    region: 'US Hematology East',  interactions: 49, vsTarget: '+6%',  quality: 8.9, insightRate: 83, overall: 'Excellent' },
    { msl: 'Dr. James Park',    region: 'US Hematology West',  interactions: 54, vsTarget: '+18%', quality: 5.8, insightRate: 39, overall: 'Quality gap - low insight rate' },
    { msl: 'Dr. Sophie Laurent', region: 'EU Hematology',      interactions: 41, vsTarget: '+3%',  quality: 9.2, insightRate: 91, overall: 'Excellent' },
    { msl: 'Dr. Marcus Chen',   region: 'US Oncology West',    interactions: 43, vsTarget: '+7%',  quality: 8.6, insightRate: 79, overall: 'Excellent' },
    { msl: 'Dr. Aisha Okonkwo', region: 'US Hematology South', interactions: 27, vsTarget: '-33%', quality: 7.1, insightRate: 61, overall: 'Volume gap' },
    { msl: 'Dr. Thomas Weber',  region: 'EU Oncology',         interactions: 38, vsTarget: '+2%',  quality: 8.4, insightRate: 76, overall: 'Excellent' },
  ],
};

// 1.3 Engagement Gap Tracker
export const VEGA_ENGAGEMENT_GAPS = [
  { kol: 'Dr. Paolo Ghia',         tier: 'Tier 1', lastContact: '2026-05-06', gap: '9 weeks', action: 'Re-engage urgently — divergence KOL, alignment 47' },
  { kol: 'Dr. Markus Mohler',      tier: 'Tier 2', lastContact: '2026-05-23', gap: '7 weeks', action: 'Schedule scientific exchange on Tevimbra gastric data' },
  { kol: 'Dr. Mads Roennov-Jessen', tier: 'Tier 2', lastContact: '2026-06-02', gap: '6 weeks', action: 'Plan interaction — EHA 2026 follow-up on BTK landscape' },
  { kol: 'Dr. Inhye Ahn',          tier: 'Tier 2', lastContact: '2026-06-14', gap: '4 weeks', action: 'Schedule soon — CLL NCI platform is valuable' },
  { kol: 'Dr. Yung-Jue Bang',      tier: 'Tier 2', lastContact: '2026-06-21', gap: '3 weeks', action: 'Plan interaction — ESMO 2026 preparation' },
];

// 2.1 Share of Scientific Voice
export const VEGA_SHARE_OF_VOICE = {
  watchArea: 'Brukinsa share of voice at EHA 2026 (22%) trails ibrutinib (31%). Tevimbra SOV at ESMO GI 2026 is 11% — pembrolizumab at 38%. Recommend reviewing BTK competitive communication strategy and increasing Tevimbra congress presence at GI oncology meetings.',
  rows: [
    { source: 'EHA 2026 oral sessions', us: 'Brukinsa 22%', compA: 'Ibrutinib 31%', compB: 'Acalabrutinib 19%', compC: 'Pirtobrutinib 14%', trend: 'up' },
    { source: 'ESMO GI 2026 (Tevimbra)', us: 'Tevimbra 11%', compA: 'Pembrolizumab 38%', compB: 'Nivolumab 24%', compC: 'Other IO 27%', trend: 'flat' },
    { source: 'Peer-reviewed publications (12m)', us: 'Brukinsa 31%', compA: 'Ibrutinib 37%', compB: 'Acalabrutinib 22%', compC: 'Other BTK 10%', trend: 'up' },
    { source: 'KOL active endorsements (hematology)', us: '38%', compA: '32%', compB: '19%', compC: '11%', trend: 'up' },
    { source: 'Social / digital mentions', us: 'Brukinsa 18%', compA: 'Ibrutinib 29%', compB: 'Acalabrutinib 26%', compC: 'Other 27%', trend: 'flat' },
  ],
};

// 2.2 KOL Sentiment Velocity
export const VEGA_SENTIMENT_VELOCITY = [
  { kol: 'Dr. Jennifer Brown',    score: 87, change30d: '+3.1', velocity: '+0.9 ↑↑', interpretation: 'Positive acceleration — co-authorship and advisory board candidate for ALPINE OS follow-up' },
  { kol: 'Dr. Paolo Ghia',        score: 47, change30d: '-8.4', velocity: '-2.1 ↓↓', interpretation: 'Worsening sharply — divergence KOL, GLOW advocacy spreading to network. Urgent re-engagement required' },
  { kol: 'Dr. David Ilson',       score: 86, change30d: '+2.2', velocity: '+0.7 ↑',  interpretation: 'Steady positive — MSK platform, Tevimbra esophageal SCC champion potential' },
  { kol: 'Dr. Ian Chau',          score: 77, change30d: '+1.4', velocity: '+0.4 ↑',  interpretation: 'Gradual positive — Royal Marsden, useful for UK/EU Tevimbra esophageal positioning' },
];

// 4.1 Care Gap Closure Tracking
export const VEGA_CARE_GAP_CLOSURE = [
  { gap: 'Ibrutinib AF switch rate',                  linkedMO: 'MO1',     baseline: '12%', current: '21% (+9pts)',  patientsImpacted: 'Est. 340 additional patients switched to safer BTK alternative' },
  { gap: 'Brukinsa CLL first-line awareness (community)', linkedMO: 'MO2', baseline: '8%',  current: '14% (+6pts)', patientsImpacted: 'Est. 180 additional community patients now being offered Brukinsa as 1L option' },
  { gap: 'Tevimbra esophageal SCC awareness (community)', linkedMO: 'MO3', baseline: '4%',  current: '8% (+4pts)',  patientsImpacted: 'Est. 90 additional community GI patients now with Tevimbra in tumour board discussion' },
];

// 4.2 ROMI — financial framing (all $ amounts)
export const VEGA_ROMI = {
  netValueCreated: '$2.8M',
  roiPct: '148%',
  returnPerPound: '$2.48 per $1 invested',
  rows: [
    { category: 'Prescription growth attributed to MA',        value: '$2.1M',  methodology: 'HCPs with high MA engagement show 1.9x higher Brukinsa prescribing — difference-in-difference analysis vs matched control group' },
    { category: 'Ibrutinib switch revenue (CV safety)',        value: '$1.4M',  methodology: 'Estimated revenue from confirmed ibrutinib-to-Brukinsa switches in AF/cardiac event patients identified via MSL field intelligence' },
    { category: 'Tevimbra community tumour board entry',       value: '$0.6M',  methodology: 'Estimated prescribing from first-time Tevimbra discussions at community GI tumour boards following field engagement' },
    { category: 'Total MA investment',                         value: '-$1.9M', methodology: 'Full BeiGene Medical Affairs budget — field team, advisory boards, congress, content, digital monitoring' },
  ],
};

// 4.3 Medical Affairs Impact Index
export const VEGA_IMPACT_INDEX = {
  overall: 72,
  vsQ4: '+5',
  target: 80,
  dimensions: [
    { dim: 'Execution excellence',      score: 79, commentary: 'Field interaction quality high (EU > US West); volume gaps in US South hematology territory. A1 and A8 both Started — strong execution pipeline' },
    { dim: 'External ecosystem impact', score: 74, commentary: '+18% KOL network expansion in hematology; Tevimbra GI oncology network at early stage. Ghia divergence is the primary ecosystem risk' },
    { dim: 'HCP practice change',       score: 71, commentary: '38% sustained practice change vs 22% BTK category average — strong outperformance in hematology, Tevimbra community penetration still nascent' },
    { dim: 'Patient care gap closure',  score: 68, commentary: 'Ibrutinib AF switch rate up 9pts; Brukinsa CLL 1L awareness +6pts in community. Tevimbra esophageal awareness +4pts — early movement' },
    { dim: 'Internal ecosystem impact', score: 69, commentary: 'Cross-functional collaboration with Commercial on Brukinsa CLL 1L is positive; Tevimbra GI medical-commercial alignment below potential — key improvement opportunity' },
  ],
};
