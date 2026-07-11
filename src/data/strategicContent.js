// Strategic content for BeiGene Medical Affairs Demo
// Last updated: 2026-07-11

export const STRATEGIC_IMPERATIVES = [
  {
    id: 'si-001',
    name: 'BTK Inhibitor Leadership — Cardiovascular Safety & Efficacy Differentiation',
    category: 'Differentiation',
    description:
      'Establish Brukinsa (zanubrutinib) as the superior BTK inhibitor through its next-generation selectivity profile that eliminates off-target kinase inhibition (HER4, EGFR, ITK, TXK), translating to dramatically improved cardiovascular safety (ALPINE: AF 5.2% vs 13.3% ibrutinib) alongside superior PFS (HR 0.65, p=0.0024). Drive switch conversations in ibrutinib-treated patients with cardiovascular risk or events, and build community hematology-oncology awareness of Brukinsa as the approved first-line CLL option.',
    successMetrics: [
      'Ibrutinib-to-Brukinsa switch rate in community accounts (target: +15% YoY)',
      'Community hem-onc awareness of Brukinsa CLL first-line approval (target: 50% within 6 months)',
      'ALPINE OS data citation rate in community MSL field interactions',
      'AF/cardiac event-triggered switch conversations per MSL per quarter'
    ],
    keyActions: [
      'Deploy ALPINE cardiovascular safety comparative guide to all hematology MSLs (A1)',
      'Commission ALPINE NEJM one-pager for community oncologist distribution (A4)',
      'Build Brukinsa CLL first-line conversation guide for community hem-onc MSLs (A3)',
      'Engage cardiologist-hematologist co-management channel — ibrutinib AF events as switch trigger'
    ]
  },
  {
    id: 'si-002',
    name: 'Expanding Brukinsa Utility Across B-Cell Malignancy Spectrum',
    category: 'Growth',
    description:
      'Move Brukinsa from R/R specialist adoption (WM, MCL) into community hematology-oncology first-line CLL practice, and position BeiGene at the centre of the BTK+venetoclax combination era through MANIFEST-2 data anticipation. Counter the Ghia fixed-duration narrative (GLOW/CAPTIVATE) with ALPINE OS data and MANIFEST-2 combination pipeline — making Brukinsa the next-gen BTK at the heart of both continuous and combination CLL strategies.',
    successMetrics: [
      'Brukinsa CLL first-line adoption rate in community hem-onc practices (target: 25% in 12 months)',
      'Paolo Ghia alignment score recovery (target: 60 within 3 months)',
      'European CLL KOL engagement cadence post-EHA 2026',
      'MANIFEST-2 combination positioning conversation rate at KOL scientific exchanges'
    ],
    keyActions: [
      'Schedule scientific exchange with Dr. Paolo Ghia — ALPINE OS vs GLOW/CAPTIVATE debate (A2)',
      'Commission EHA 2026 post-congress BTK landscape synthesis (A8)',
      'Engage BTK+venetoclax combination KOLs to build MANIFEST-2 positioning (A7)',
      'Targeted community hem-onc education on Brukinsa CLL first-line approval and ALPINE data'
    ]
  },
  {
    id: 'si-003',
    name: 'Tevimbra Esophageal/GI Oncology Presence & Community Penetration',
    category: 'Growth',
    description:
      'Build Tevimbra (tislelizumab) awareness in community GI oncology where pembrolizumab reflex is the dominant barrier. RATIONALE-302 OS benefit (HR 0.70 vs chemotherapy) provides a differentiated 2L esophageal SCC story, but community GI oncologists are not reading the data. Deploy targeted tumour board engagement strategy and differentiation toolkit (RATIONALE-302 vs KEYNOTE-590) to break the pembrolizumab default.',
    successMetrics: [
      'Community GI tumour board awareness of Tevimbra esophageal SCC data (target: 30% in 6 months)',
      'RATIONALE-302 citation rate by community GI oncologists in MSL field interactions',
      'Tevimbra 2L esophageal SCC consideration rate in targeted tumour boards',
      'MO3 coverage score improvement (current 27%, target 45% in 12 months)'
    ],
    keyActions: [
      'Identify community GI oncology tumour boards with highest esophageal SCC volume (A5)',
      'Develop Tevimbra vs pembrolizumab differentiation toolkit — RATIONALE-302 vs KEYNOTE-590 (A6)',
      'Establish Tevimbra gastric HER2-neg KOL advisory panel ahead of Phase III data readout (A9)',
      'Commission RATIONALE-302 one-pager for community GI oncologist distribution'
    ]
  },
  {
    id: 'si-004',
    name: 'BeiGene Medical Affairs Scientific Excellence & KOL Network',
    category: 'Enablement',
    description:
      'Build BeiGene Medical Affairs credibility as a global hematology-oncology scientific partner through structured KOL engagement, publication planning, and congress presence. Strengthen the EU/APAC hematology network where EHA is the primary congress, expand the GI oncology KOL network ahead of ESMO 2026, and ensure field team quality exceeds the BTK and GI oncology category benchmarks.',
    successMetrics: [
      'EHA share of voice growth: Brukinsa from 22% toward 28% vs ibrutinib 31%',
      'Tier 1 KOL engagement cadence: 100% contacted within 4 weeks',
      'Field interaction quality score: target 8.0 average (current 7.8)',
      'Advisory board publication rate: 3 joint publications with KOLs by year end'
    ],
    keyActions: [
      'Resolve 9-week Ghia gap immediately (A2) — divergence KOL management is a team credibility signal',
      'Brief EU hematology MSL team on ALPINE OS counter-narrative before Ghia LinkedIn response amplifies',
      'Engage Dr. Jennifer Brown (aligned, 87) for ALPINE OS co-authorship conversation',
      'James Park (US West MSL) — targeted KIQ retraining and joint field visit to improve insight rate (39%)'
    ]
  }
];

export const COMPETITIVE_LANDSCAPE = [
  {
    id: 'comp-001',
    name: 'Imbruvica',
    genericName: 'ibrutinib',
    company: 'J&J / AbbVie',
    mechanism: 'First-generation BTK inhibitor (irreversible covalent bond); off-target inhibition of HER4, EGFR, ITK, TXK drives cardiovascular toxicity',
    approvedIndications: ['CLL/SLL', 'MCL (R/R)', 'WM', 'MZL', 'CLL/SLL (first-line)'],
    strategicThreatLevel: 'High',
    marketStatus: 'Mature product, established market leader in BTK; biosimilar-equivalent pressure building',
    summary: 'Ibrutinib remains the dominant BTK inhibitor by installed base and physician familiarity. Its cardiovascular toxicity profile (AF 13.3%, hypertension 10.4% in ALPINE) is the primary differentiation point for Brukinsa. Community hem-onc default to ibrutinib first-line is the key barrier to Brukinsa adoption.'
  },
  {
    id: 'comp-002',
    name: 'Calquence',
    genericName: 'acalabrutinib',
    company: 'AstraZeneca',
    mechanism: 'Second-generation covalent BTK inhibitor; more selective than ibrutinib but still has off-target effects; headache side effect profile',
    approvedIndications: ['CLL/SLL', 'R/R MCL'],
    strategicThreatLevel: 'Medium',
    marketStatus: 'Growing competitor in CLL/SLL, positioned as "better ibrutinib" but now competing against zanubrutinib on same axis',
    summary: 'Acalabrutinib competes on the same cardiovascular safety axis as Brukinsa, reducing differentiation on the CV narrative alone. ALPINE showed zanubrutinib superiority on PFS and lower AF vs ibrutinib; head-to-head zanubrutinib vs acalabrutinib data is more limited. Community awareness of the zanubrutinib vs acalabrutinib distinction is low.'
  },
  {
    id: 'comp-003',
    name: 'Jaypirca',
    genericName: 'pirtobrutinib',
    company: 'Eli Lilly',
    mechanism: 'Non-covalent reversible BTK inhibitor — designed for use after covalent BTK inhibitor failure; BRUIN trial data in BTK-pretreated CLL/MCL',
    approvedIndications: ['R/R MCL (after 2+ prior lines including BTK)', 'R/R CLL/SLL (after 2+ prior lines)'],
    strategicThreatLevel: 'Medium',
    marketStatus: 'Niche positioning in BTK-pretreated patients; emerging data in earlier-line settings',
    summary: 'Pirtobrutinib occupies the post-BTK-failure space where Brukinsa is not typically used. Its emergence creates a sequencing question: should Brukinsa be first-line (to preserve pirtobrutinib as second-line BTK), or are patients better served by moving to venetoclax-based combinations? This sequencing narrative is aligned with the Ghia fixed-duration argument.'
  },
  {
    id: 'comp-004',
    name: 'Keytruda',
    genericName: 'pembrolizumab',
    company: 'Merck (MSD)',
    mechanism: 'Anti-PD-1 monoclonal antibody; KEYNOTE-590 established as first-line esophageal SCC standard; dominant in community oncology via brand recognition',
    approvedIndications: ['Esophageal SCC (1L + 2L)', 'Gastric/GEJ adenocarcinoma', 'Multiple solid tumors'],
    strategicThreatLevel: 'High',
    marketStatus: 'Dominant market position in esophageal SCC and gastric IO; community default choice',
    summary: 'Pembrolizumab is the primary Tevimbra competitor in both esophageal SCC and gastric/GEJ. Community GI oncologist pembrolizumab reflex (documented in AI3) is the single biggest barrier to Tevimbra adoption. Differentiation requires communicating RATIONALE-302 OS benefit and Fc engineering advantages in a community-friendly format.'
  },
  {
    id: 'comp-005',
    name: 'Opdivo',
    genericName: 'nivolumab',
    company: 'Bristol Myers Squibb',
    mechanism: 'Anti-PD-1 monoclonal antibody; CheckMate trials in gastric/esophageal oncology',
    approvedIndications: ['Gastric/GEJ adenocarcinoma', 'Esophageal SCC', 'Multiple solid tumors'],
    strategicThreatLevel: 'Medium',
    marketStatus: 'Established GI oncology presence, particularly in gastric adenocarcinoma; less dominant than pembrolizumab in esophageal SCC',
    summary: 'Nivolumab is a secondary IO competitor to Tevimbra in GI oncology. Its CheckMate data in gastric/GEJ is strong but the pembrolizumab default remains more entrenched in esophageal SCC specifically. Tevimbra needs to differentiate from both agents through RATIONALE-302 direct data comparison and Fc engineering mechanism.'
  }
];

// Keep the COMPLEMENT_BIOLOGY export name for template compatibility
export const COMPLEMENT_BIOLOGY = {
  overview:
    'The BTK (Bruton\'s tyrosine kinase) pathway is a key B-cell receptor (BCR) signalling pathway essential for B-cell development, survival, and proliferation. BTK is aberrantly activated in B-cell malignancies including CLL, MCL, WM, MZL, and FL, making it a validated therapeutic target. Zanubrutinib (Brukinsa) is a next-generation covalent BTK inhibitor engineered for higher BTK selectivity than first-generation ibrutinib, eliminating off-target inhibition of related kinases (HER4, EGFR, ITK, TXK) that drive ibrutinib\'s cardiovascular toxicity profile.',
  btkInhibition:
    'Zanubrutinib forms an irreversible covalent bond with BTK at the C481 residue, blocking BCR-mediated signalling cascades including PI3K/AKT and NF-kB pathways that drive B-cell malignancy proliferation and survival. Unlike ibrutinib, zanubrutinib\'s selectivity profile avoids ITK inhibition (linked to ibrutinib-associated AF through platelet aggregation disruption) and EGFR inhibition (linked to rash and diarrhea). The ALPINE trial (NEJM 2023) demonstrated this selectivity advantage translates to clinical benefit: superior overall response rate (78.3% vs 62.5%), superior PFS (HR 0.65, p=0.0024), and dramatically lower AF/flutter rate (5.2% vs 13.3%) vs ibrutinib in R/R CLL/SLL.',
  pdL1Checkpoint:
    'Tislelizumab (Tevimbra) is a humanised anti-PD-1 monoclonal antibody engineered with a unique Fc region modification that abrogates antibody-dependent cellular phagocytosis (ADCP) by macrophages. Unlike pembrolizumab and nivolumab, tislelizumab\'s Fc engineering may reduce FcgR-mediated macrophage activation that can limit T-cell expansion. In esophageal SCC, the RATIONALE-302 trial demonstrated tislelizumab vs chemotherapy achieved OS HR 0.70 (median OS 8.6 vs 6.3 months) in patients with progressive or recurrent unresectable esophageal SCC. PD-L1 subgroup analysis showed OS benefit across expression levels, including PD-L1 low tumours.',
  diseaseConnections: {
    CLL:
      'Chronic lymphocytic leukaemia (CLL) is the most common adult leukaemia in Western countries, characterised by clonal expansion of mature CD5+CD19+ B cells with aberrant BTK pathway activation. Treatment paradigms have been transformed by BTK inhibitors, with continuous BTK monotherapy and fixed-duration venetoclax-based combinations now the primary first-line approaches. The Ghia divergence debate centres on whether continuous next-gen BTK (zanubrutinib) or finite-duration ibrutinib+venetoclax (GLOW/CAPTIVATE) offers superior long-term outcomes including QoL and cardiovascular safety.',
    EsophagealSCC:
      'Esophageal squamous cell carcinoma (SCC) is a prevalent malignancy in East Asia and Sub-Saharan Africa, with poor prognosis in advanced settings. Second-line treatment after platinum-based chemotherapy has been transformed by PD-1 inhibitors, but pembrolizumab dominates community practice through early market presence (KEYNOTE-590) and brand recognition. Tislelizumab\'s RATIONALE-302 data demonstrates OS benefit vs chemotherapy in 2L SCC but community GI oncologist awareness remains critically low.'
  }
};

export const PIPELINE_INTELLIGENCE = [
  {
    id: 'pipe-001',
    name: 'BGB-11417 (sonrotoclax)',
    mechanism: 'Next-generation BCL-2 inhibitor — designed to overcome venetoclax resistance and deliver deeper remissions in combination with BTK inhibitors in B-cell malignancies',
    stage: 'Phase I/II',
    indication: 'CLL (combination with zanubrutinib), MCL, AML',
    expectedTimeline: 'Phase I/II data readouts expected 2026-2027; potential Phase III CLL initiation in 2027',
    significance: 'Sonrotoclax+zanubrutinib combination would give BeiGene a proprietary Brukinsa+BCL-2 combination — directly competing with ibrutinib+venetoclax (GLOW/CAPTIVATE) but with BeiGene\'s own molecules, potentially superior selectivity profiles, and stronger CV safety pedigree.'
  },
  {
    id: 'pipe-002',
    name: 'BGB-16673 (BTK CDAC degrader)',
    mechanism: 'BTK CDAC (chimeric degrader activating compound) — targeted degradation of BTK protein, including C481S-mutant BTK that confers resistance to covalent BTK inhibitors including zanubrutinib',
    stage: 'Phase I',
    indication: 'CLL and B-cell malignancies post-BTK inhibitor failure',
    expectedTimeline: 'Phase I dose escalation data expected 2026; Phase II initiation anticipated 2027',
    significance: 'BGB-16673 addresses BTK inhibitor resistance — the key long-term limitation of zanubrutinib. If successful, it positions BeiGene to own the entire BTK-centric CLL treatment continuum: Brukinsa first-line, sonrotoclax combination, BGB-16673 after resistance. This would be a decisive franchise advantage over ibrutinib-only competitors.'
  },
  {
    id: 'pipe-003',
    name: 'Zanubrutinib + Sonrotoclax (Brukinsa+BCL-2 combination)',
    mechanism: 'Dual BTK and BCL-2 inhibition — zanubrutinib provides selective BTK blockade while sonrotoclax drives deep BCL-2-mediated apoptosis; combination expected to deliver MRD-negative remissions comparable or superior to venetoclax-based regimens',
    stage: 'Phase II (CLL)',
    indication: 'CLL/SLL — first-line and relapsed/refractory settings',
    expectedTimeline: 'Phase II efficacy data expected 2026-2027; potential pivotal trial design pending data',
    significance: 'This combination is BeiGene\'s strategic answer to the Ghia fixed-duration argument. If zanubrutinib+sonrotoclax can achieve finite-duration MRD-negative remissions with the CV safety advantage of zanubrutinib (vs ibrutinib-based combos), it resolves the continuous vs fixed-duration debate in Brukinsa\'s favour — patients get both safety and finite therapy.'
  }
];
