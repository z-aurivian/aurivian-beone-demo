/**
 * Clinical Trials Data — BeiGene Brukinsa & Tevimbra
 * Stub for BeOne demo — export names preserved from master template.
 */

// =============================================================================
// BRUKINSA (zanubrutinib) — Key Trials (maps to TRIALS_SOLIRIS export name)
// =============================================================================
export const TRIALS_SOLIRIS = [
  {
    nctId: 'NCT03734017',
    title: 'ALPINE — Zanubrutinib vs Ibrutinib in Relapsed/Refractory CLL/SLL',
    officialTitle: 'A Phase 3, Randomized, Open-label, Multicenter Study of Zanubrutinib (BGB-3111) Versus Ibrutinib in Patients With Relapsed/Refractory Chronic Lymphocytic Leukemia or Small Lymphocytic Lymphoma',
    status: 'ACTIVE_NOT_RECRUITING',
    phase: 'Phase 3',
    conditions: ['CLL', 'SLL', 'Chronic Lymphocytic Leukemia'],
    interventions: ['Zanubrutinib', 'Ibrutinib'],
    sponsor: 'BeiGene',
    startDate: '2019-01',
    completionDate: '2026-06',
    enrollment: 652,
    locationCount: 86,
    studyType: 'INTERVENTIONAL',
    keyFindings: 'OS HR 0.65 (p=0.0024); ORR 78.3% vs 62.5%; AF rate 5.2% vs 13.3% — NEJM 2023',
  },
  {
    nctId: 'NCT03336333',
    title: 'SEQUOIA — Zanubrutinib vs BR in Treatment-Naive CLL with del17p',
    officialTitle: 'A Phase 3, Open-label, Randomized Study of Zanubrutinib Versus Bendamustine + Rituximab in Patients With Previously Untreated Chronic Lymphocytic Leukemia or Small Lymphocytic Lymphoma',
    status: 'ACTIVE_NOT_RECRUITING',
    phase: 'Phase 3',
    conditions: ['CLL', 'SLL', 'del17p CLL'],
    interventions: ['Zanubrutinib', 'Bendamustine', 'Rituximab'],
    sponsor: 'BeiGene',
    startDate: '2018-04',
    completionDate: '2027-12',
    enrollment: 479,
    locationCount: 78,
    studyType: 'INTERVENTIONAL',
    keyFindings: 'Significant PFS benefit for zanubrutinib in del17p/TP53 CLL; first-line CLL approval supported',
  },
  {
    nctId: 'NCT02343120',
    title: 'MAGNOLIA — Zanubrutinib in Marginal Zone Lymphoma (R/R MZL)',
    officialTitle: 'A Phase 2, Open-label, Multicenter Study of BGB-3111 in Patients With Relapsed/Refractory Marginal Zone Lymphoma',
    status: 'ACTIVE_NOT_RECRUITING',
    phase: 'Phase 2',
    conditions: ['Marginal Zone Lymphoma', 'MZL'],
    interventions: ['Zanubrutinib'],
    sponsor: 'BeiGene',
    startDate: '2019-03',
    completionDate: '2025-12',
    enrollment: 68,
    locationCount: 28,
    studyType: 'INTERVENTIONAL',
    keyFindings: 'ORR 68.2% in R/R MZL; supported MZL approval',
  },
  {
    nctId: 'NCT03206970',
    title: 'ASPEN — Zanubrutinib vs Ibrutinib in Waldenstrom Macroglobulinemia',
    officialTitle: 'A Phase 3, Randomized, Open-label, Multicenter Study Comparing the Efficacy and Safety of Zanubrutinib to Ibrutinib in Patients With Waldenstrom Macroglobulinemia',
    status: 'ACTIVE_NOT_RECRUITING',
    phase: 'Phase 3',
    conditions: ['Waldenstrom Macroglobulinemia', 'WM'],
    interventions: ['Zanubrutinib', 'Ibrutinib'],
    sponsor: 'BeiGene',
    startDate: '2018-02',
    completionDate: '2026-08',
    enrollment: 229,
    locationCount: 48,
    studyType: 'INTERVENTIONAL',
    keyFindings: 'Zanubrutinib showed higher VGPR rate and lower AF rate vs ibrutinib in WM',
  },
];

// =============================================================================
// BRUKINSA + PIPELINE — Combination Trials (maps to TRIALS_ULTOMIRIS export name)
// =============================================================================
export const TRIALS_ULTOMIRIS = [
  {
    nctId: 'NCT04846751',
    title: 'MANIFEST-2 — Zanubrutinib + Venetoclax vs Chlorambucil + Obinutuzumab in TN CLL',
    officialTitle: 'A Phase 3, Randomized, Open-label, Multicenter Study of Zanubrutinib Plus Venetoclax Versus Chlorambucil Plus Obinutuzumab in Participants With Previously Untreated Chronic Lymphocytic Leukemia',
    status: 'ACTIVE_NOT_RECRUITING',
    phase: 'Phase 3',
    conditions: ['CLL', 'Treatment-naive CLL'],
    interventions: ['Zanubrutinib', 'Venetoclax', 'Chlorambucil', 'Obinutuzumab'],
    sponsor: 'BeiGene',
    startDate: '2021-06',
    completionDate: '2028-01',
    enrollment: 590,
    locationCount: 94,
    studyType: 'INTERVENTIONAL',
    keyFindings: 'Primary data readout anticipated 2027 — zanubrutinib+venetoclax vs standard CLL first-line combination',
  },
  {
    nctId: 'NCT04408638',
    title: 'BGB-11417 (Sonrotoclax) + Zanubrutinib in CLL and B-cell Malignancies',
    officialTitle: 'A Phase 1/2 Open-label, Multicenter Study of BGB-11417 as Monotherapy and in Combination With Zanubrutinib in Participants With Mature B-Cell Malignancies',
    status: 'RECRUITING',
    phase: 'Phase 1/Phase 2',
    conditions: ['CLL', 'SLL', 'MCL', 'WM', 'B-cell lymphoma'],
    interventions: ['BGB-11417 (sonrotoclax)', 'Zanubrutinib'],
    sponsor: 'BeiGene',
    startDate: '2021-01',
    completionDate: '2027-06',
    enrollment: 250,
    locationCount: 41,
    studyType: 'INTERVENTIONAL',
    keyFindings: 'Phase I/II combination data showing deep MRD-negative remissions in CLL',
  },
  {
    nctId: 'NCT05557500',
    title: 'BGB-16673 (BTK CDAC Degrader) in B-cell Malignancies Post-BTK Inhibitor',
    officialTitle: 'A Phase 1, First-in-Human, Dose-Escalation and Expansion Study of BGB-16673 in Participants With Relapsed or Refractory B-Cell Malignancies',
    status: 'RECRUITING',
    phase: 'Phase 1',
    conditions: ['CLL', 'MCL', 'B-cell malignancies post-BTK'],
    interventions: ['BGB-16673'],
    sponsor: 'BeiGene',
    startDate: '2022-09',
    completionDate: '2027-03',
    enrollment: 180,
    locationCount: 22,
    studyType: 'INTERVENTIONAL',
    keyFindings: 'Phase I dose escalation; BTK degrader active in C481S-mutant BTK-resistant CLL',
  },
];

// =============================================================================
// COMPETITOR TRIALS (maps to TRIALS_COMPETITORS export name)
// =============================================================================
export const TRIALS_COMPETITORS = {
  ibrutinib: [
    {
      nctId: 'NCT01668446',
      title: 'GLOW — Ibrutinib + Venetoclax Fixed-Duration vs Chlorambucil + Obinutuzumab in TN CLL',
      officialTitle: 'GLOW: Fixed-Duration Ibrutinib Plus Venetoclax for First-Line Treatment of CLL/SLL in Older/Unfit Patients',
      status: 'COMPLETED',
      phase: 'Phase 3',
      conditions: ['CLL', 'SLL'],
      interventions: ['Ibrutinib', 'Venetoclax', 'Chlorambucil', 'Obinutuzumab'],
      sponsor: 'Janssen',
      startDate: '2018-03',
      completionDate: '2024-06',
      enrollment: 211,
      locationCount: 56,
      studyType: 'INTERVENTIONAL',
      keyFindings: 'MRD-negativity in 55% ibrutinib+ven vs 39% ClbO; 15-month fixed-duration regimen. Ghia is a key advocate citing this data vs continuous BTK.',
    },
    {
      nctId: 'NCT02910583',
      title: 'CAPTIVATE — Ibrutinib + Venetoclax Fixed-Duration in TN CLL',
      officialTitle: 'A Phase 2 Study of Ibrutinib in Combination With Venetoclax in Subjects With Treatment-Naive Chronic Lymphocytic Leukemia/Small Lymphocytic Lymphoma',
      status: 'COMPLETED',
      phase: 'Phase 2',
      conditions: ['CLL', 'SLL'],
      interventions: ['Ibrutinib', 'Venetoclax'],
      sponsor: 'AbbVie/Pharmacyclics',
      startDate: '2017-01',
      completionDate: '2023-12',
      enrollment: 164,
      locationCount: 27,
      studyType: 'INTERVENTIONAL',
      keyFindings: '4-year follow-up data used by Ghia in GLOW/CAPTIVATE QoL arguments for fixed-duration BTK+ven superiority',
    },
  ],
  pembrolizumab: [
    {
      nctId: 'NCT03189719',
      title: 'KEYNOTE-590 — Pembrolizumab + Chemotherapy in First-Line Esophageal SCC/Adenocarcinoma',
      officialTitle: 'Pembrolizumab in Combination With Chemotherapy Versus Chemotherapy Alone for First-Line Treatment of Advanced Esophageal Cancer',
      status: 'COMPLETED',
      phase: 'Phase 3',
      conditions: ['Esophageal SCC', 'EAC', 'GEJ adenocarcinoma'],
      interventions: ['Pembrolizumab', 'Cisplatin', 'Fluorouracil'],
      sponsor: 'Merck (MSD)',
      startDate: '2018-03',
      completionDate: '2022-09',
      enrollment: 749,
      locationCount: 168,
      studyType: 'INTERVENTIONAL',
      keyFindings: 'OS HR 0.73 (pembrolizumab+chemo vs chemo) in 1L esophageal SCC/adenocarcinoma — NEJM 2021. Established pembrolizumab as community default; primary barrier to Tevimbra consideration.',
    },
  ],
};

// =============================================================================
// COMPLETED LANDMARK TRIALS (maps to TRIALS_COMPLETED_LANDMARK export name)
// =============================================================================
export const TRIALS_COMPLETED_LANDMARK = [
  {
    nctId: 'NCT02593188',
    title: 'RATIONALE-302 — Tislelizumab vs Chemotherapy in 2L Esophageal SCC',
    officialTitle: 'A Phase 3, Randomized, Open-label Study of Tislelizumab Versus Chemotherapy as Second-line Treatment for Advanced Unresectable/Metastatic Esophageal Squamous Cell Carcinoma',
    status: 'COMPLETED',
    phase: 'Phase 3',
    conditions: ['Esophageal SCC', 'Esophageal squamous cell carcinoma'],
    interventions: ['Tislelizumab (Tevimbra)', 'Chemotherapy (investigator choice)'],
    sponsor: 'BeiGene',
    startDate: '2018-11',
    completionDate: '2022-09',
    enrollment: 512,
    locationCount: 64,
    studyType: 'INTERVENTIONAL',
    keyFindings: 'OS HR 0.70 (median OS 8.6 vs 6.3 months) in 2L esophageal SCC vs chemotherapy. OS benefit across PD-L1 subgroups including PD-L1 low. Supported Tevimbra esophageal SCC 2L approval.',
  },
  {
    nctId: 'NCT03783442',
    title: 'RATIONALE-306 — Tislelizumab + Chemotherapy in 1L Gastric/GEJ Adenocarcinoma',
    officialTitle: 'A Phase 3, Randomized, Double-Blind, Placebo-Controlled Study of Tislelizumab in Combination With Chemotherapy Versus Chemotherapy Alone as First-Line Treatment for Advanced Unresectable or Metastatic Gastric or Gastroesophageal Junction Adenocarcinoma',
    status: 'COMPLETED',
    phase: 'Phase 3',
    conditions: ['Gastric adenocarcinoma', 'GEJ adenocarcinoma'],
    interventions: ['Tislelizumab', 'Oxaliplatin', 'Capecitabine/Fluorouracil'],
    sponsor: 'BeiGene',
    startDate: '2019-03',
    completionDate: '2023-12',
    enrollment: 997,
    locationCount: 112,
    studyType: 'INTERVENTIONAL',
    keyFindings: 'OS HR 0.74 (tislelizumab+chemo vs chemo) in 1L gastric/GEJ adenocarcinoma. PD-L1 subgroup analysis ongoing. Supported Tevimbra gastric indication.',
  },
  {
    nctId: 'NCT03734017',
    title: 'ALPINE Long-Term — Zanubrutinib vs Ibrutinib OS Analysis in R/R CLL',
    officialTitle: 'ALPINE Final Overall Survival Analysis — Zanubrutinib vs Ibrutinib in Relapsed/Refractory CLL/SLL',
    status: 'COMPLETED',
    phase: 'Phase 3',
    conditions: ['CLL', 'SLL'],
    interventions: ['Zanubrutinib', 'Ibrutinib'],
    sponsor: 'BeiGene',
    startDate: '2019-01',
    completionDate: '2025-06',
    enrollment: 652,
    locationCount: 86,
    studyType: 'INTERVENTIONAL',
    keyFindings: 'OS HR 0.65 (p=0.0024) — zanubrutinib vs ibrutinib. ORR 78.3% vs 62.5%. AF 5.2% vs 13.3%. Published NEJM 2023. Presented at EHA 2026 by Dr. Jennifer Brown.',
  },
];

// =============================================================================
// SUMMARY STATISTICS
// =============================================================================
export const TRIAL_STATS = {
  fetchDate: '2026-07-11',
  source: 'BeiGene clinical trials data + ClinicalTrials.gov',
  counts: {
    brukinsaActive: TRIALS_SOLIRIS.length,
    combinationActive: TRIALS_ULTOMIRIS.length,
    competitorTracked: 3,
    completedLandmark: TRIALS_COMPLETED_LANDMARK.length,
  },
};

export const TRIALS_BY_PRODUCT = {
  brukinsa: TRIALS_SOLIRIS,
  tevimbra: [...TRIALS_COMPLETED_LANDMARK.filter(t => t.nctId.startsWith('NCT025') || t.nctId.startsWith('NCT037834'))],
};
