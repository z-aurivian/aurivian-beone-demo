// Predictive Signals — Command Center & NOVA.
// Each signal carries agent attribution plus trajectory / confidence /
// time-to-impact framing.

export const PREDICTIVE_SIGNALS = [
  {
    id: 'ps-1',
    agent: 'LUCA',
    signal: 'Paolo Ghia fixed-duration advocacy expanding to European CLL KOL network ahead of ASH 2026',
    currentState: 'Ghia alignment 71→47 in 60 days. Two LinkedIn posts and an EHA 2026 Q&A intervention have reached 3 additional Tier 1 European CLL KOLs. Network effect is building ahead of ASH 2026 abstract submissions.',
    trajectory: 'rising',
    timeToImpact: '0–3 months',
    confidence: 'high',
    requiredAction: 'Schedule scientific exchange with Ghia (A2) this week. Prepare ALPINE OS counter-narrative and MANIFEST-2 combination positioning for European MSL team.',
    suggestedAction: { label: 'Open in LUCA', path: '/kol' },
  },
  {
    id: 'ps-2',
    agent: 'ARIA',
    signal: 'GLOW trial 4-year follow-up data expected — will reinforce time-limited BTK+ven narrative',
    currentState: 'GLOW (ibrutinib+venetoclax fixed-duration in R/R CLL) 4-year OS data readout is anticipated at ASH 2026 or EHA 2027. If OS results are strong, this data will anchor the Ghia fixed-duration argument with survival evidence.',
    trajectory: 'rising',
    timeToImpact: '0–6 months',
    confidence: 'high',
    requiredAction: 'Monitor GLOW abstract submissions. Prepare Brukinsa response messaging for GLOW OS data scenario. Accelerate MANIFEST-2 positioning so Brukinsa+ven data can be positioned as the definitive fixed-duration+selectivity answer.',
    suggestedAction: { label: 'Open in ARIA', path: '/congress' },
  },
  {
    id: 'ps-3',
    agent: 'NOVA',
    signal: 'Tevimbra gastric/GEJ HER2-negative Phase III data — readout expected Q4 2026',
    currentState: 'BeiGene gastric/GEJ HER2-negative Phase III data readout is anticipated Q4 2026. If positive, this will create an urgent need for GI oncology MSL team readiness and KOL advisory infrastructure that does not currently exist (MO5 is at Gap, 18% coverage).',
    trajectory: 'rising',
    timeToImpact: '3–6 months',
    confidence: 'medium',
    requiredAction: 'Establish Tevimbra gastric HER2-neg KOL advisory panel (A9) now, ahead of data readout. Identify champion KOL for 1L expansion narrative before the data arrives.',
    suggestedAction: { label: 'Review in NOVA', path: '/insights' },
  },
  {
    id: 'ps-4',
    agent: 'NOVA',
    signal: 'Brukinsa+venetoclax MANIFEST-2 data — CLL first-line combination positioning',
    currentState: 'MANIFEST-2 Phase III (zanubrutinib+venetoclax vs chlorambucil+obinutuzumab in TN CLL) data readout expected. This data has potential to resolve the fixed-duration vs continuous BTK debate in Brukinsa\'s favour by offering a BeiGene-owned combination option.',
    trajectory: 'rising',
    timeToImpact: '3–9 months',
    confidence: 'medium',
    requiredAction: 'Engage BTK+venetoclax combination KOLs now (A7) to build the scientific exchange infrastructure ahead of data readout. Frame MANIFEST-2 as the answer to the Ghia GLOW/CAPTIVATE comparison.',
    suggestedAction: { label: 'Review in NOVA', path: '/insights' },
  },
];
