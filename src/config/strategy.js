// Strategic framework — Demo Brief §4.
// This is NOVA's spine: ISP → POA (Medical Objectives) → Listening
// Priorities → KIQs / KITs. Drives the Strategy-to-Action surface and the
// coverage scoring displayed on the Command Center.

export const ISP_PILLARS = [
  { id: 'p1', title: 'BTK Inhibitor Evolution — Safety & Efficacy Differentiation',               description: 'Zanubrutinib\'s next-gen selectivity (no off-target kinase inhibition) translating to cardiovascular safety advantage and superior PFS vs first-gen BTK.' },
  { id: 'p2', title: 'Expanding Brukinsa Utility Across B-Cell Malignancy Spectrum',              description: 'Moving from R/R into first-line CLL; from WM/MCL specialist awareness into community hematology-oncology.' },
  { id: 'p3', title: 'Tevimbra Esophageal/GI Oncology Presence & Pan-Tumor IO Expansion',        description: 'Establish tislelizumab in esophageal SCC second-line and expand GI oncology presence; build awareness outside academic centres.' },
];

export const MEDICAL_OBJECTIVES = [
  { id: 'MO1', name: 'Brukinsa cardiovascular safety differentiation from ibrutinib in CLL practice', description: 'MSL field engagement driving switch conversations based on ALPINE AF/bleeding data (5.2% vs 13.3%).', ispPillarRef: 'p1', coverageStatus: 'Sufficient', coverage: 61 },
  { id: 'MO2', name: 'Brukinsa CLL first-line uptake beyond WM/MCL specialist community',             description: 'Community hematology-oncology awareness and adoption of zanubrutinib as a first-line CLL option.',          ispPillarRef: 'p2', coverageStatus: 'Low',       coverage: 31 },
  { id: 'MO3', name: 'Tevimbra esophageal SCC awareness in community GI oncology',                    description: 'Reaching GI oncologists at community tumour boards who default to pembrolizumab in esophageal SCC 2L.',    ispPillarRef: 'p3', coverageStatus: 'Low',       coverage: 27 },
  { id: 'MO4', name: 'Brukinsa + venetoclax combination positioning in CLL',                          description: 'Building MSL conversations on BTK + venetoclax combination data and sequencing strategy.',               ispPillarRef: 'p2', coverageStatus: 'Sufficient', coverage: 55 },
  { id: 'MO5', name: 'Tevimbra gastric/GEJ expansion and earlier-line narrative',                     description: 'Establishing tislelizumab in HER2-negative gastric cancer and building the 1L expansion evidence story.',  ispPillarRef: 'p3', coverageStatus: 'Gap',        coverage: 18 },
];

export const LISTENING_PRIORITIES = [
  { id: 'LP1', name: 'Real-world cardiovascular burden of ibrutinib in CLL',              moRef: 'MO1', kiq: 'How frequently are community hematologists encountering AF, bleeding, and hypertension events in ibrutinib-treated CLL patients?',               kits: ['ALPINE CV safety data', 'Ibrutinib switch guide'] },
  { id: 'LP2', name: 'Time-limited vs continuous BTK — KOL preference post-GLOW/CAPTIVATE', moRef: 'MO2', kiq: 'Do CLL KOLs believe fixed-duration ibrutinib+venetoclax regimens are preferable to continuous next-gen BTK monotherapy?',                kits: ['ALPINE OS data', 'Continuous vs finite BTK summary'] },
  { id: 'LP3', name: 'Tislelizumab differentiation from pembrolizumab in esophageal SCC', moRef: 'MO3', kiq: 'Are GI oncologists aware of RATIONALE-302 OS benefit and how do they compare it to KEYNOTE-590 in esophageal SCC second-line?',               kits: ['RATIONALE-302 summary', 'Pembrolizumab vs tislelizumab comparison'] },
  { id: 'LP4', name: 'BTK + venetoclax sequencing and combination strategy in R/R CLL',   moRef: 'MO4', kiq: 'How are CLL physicians approaching BTK + venetoclax combinations and what data are they waiting for?',                                         kits: ['BTK+ven combination data', 'MANIFEST-2 overview'] },
  { id: 'LP5', name: 'Tevimbra gastric/GEJ HER2-negative patient population',             moRef: 'MO5', kiq: 'What unmet need do GI oncologists identify in HER2-negative gastric 1L and is an additional PD-1 option perceived as differentiated?',        kits: ['Gastric HER2-neg landscape', 'Tevimbra GEJ data'] },
];

// Coverage score per MO at the moment of the demo.
export const COVERAGE_TARGETS = {
  MO1: 'Sufficient',
  MO2: 'Low',
  MO3: 'Low',
  MO4: 'Sufficient',
  MO5: 'Gap',
};
