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
    requiredAction: 'Schedule scientific exchange with Ghia (A2) this week. Prepare ALPINE OS counter-narrative and BGB-11417-101 (zanubrutinib+sonrotoclax) combination positioning for European MSL team.',
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
    requiredAction: 'Monitor GLOW abstract submissions. Prepare Brukinsa response messaging for GLOW OS data scenario. Accelerate BGB-11417-101 (zanubrutinib+sonrotoclax) positioning so BeOne\'s own fixed-duration data can be positioned as the definitive answer.',
    suggestedAction: { label: 'Open in ARIA', path: '/congress' },
  },
  {
    id: 'ps-3',
    agent: 'NOVA',
    signal: 'RATIONALE-305 gastric/GEJ HER2-negative data has landed — PD-L1 TAP≥5% subgroup is the actionable story',
    currentState: 'RATIONALE-305 primary OS data is in: 15.0 vs 12.9 months (HR 0.80, p=.0011), with a stronger effect in the PD-L1 TAP≥5% subgroup (17.2 vs 12.6 months). This creates an urgent need for GI oncology MSL team readiness and KOL advisory infrastructure that does not currently exist (MO5 is at Gap, 18% coverage).',
    trajectory: 'rising',
    timeToImpact: '0–3 months',
    confidence: 'high',
    requiredAction: 'Establish Tevimbra gastric HER2-neg KOL advisory panel (A9) now that RATIONALE-305 data is available. Identify a champion KOL to lead the PD-L1 TAP≥5% subgroup narrative for 1L positioning.',
    suggestedAction: { label: 'Review in NOVA', path: '/insights' },
  },
  {
    id: 'ps-4',
    agent: 'NOVA',
    signal: 'BGB-11417-101 (zanubrutinib+sonrotoclax) interim data — CLL first-line combination positioning',
    currentState: 'BGB-11417-101 (Phase 1/1b, zanubrutinib+sonrotoclax in TN CLL) interim data is in: ORR 100%, CR 56.3% overall, uMRD4 up to 78% at the RP2D dose, estimated 30-month PFS 100%. This data has potential to resolve the fixed-duration vs continuous BTK debate in Brukinsa\'s favour by offering a BeiGene-owned combination option — though it\'s still early-phase (135 patients), not yet the maturity of GLOW\'s 4-year follow-up.',
    trajectory: 'rising',
    timeToImpact: '3–9 months',
    confidence: 'medium',
    requiredAction: 'Engage BTK+BCL-2 combination KOLs now (A7) to build the scientific exchange infrastructure around the interim data. Frame BGB-11417-101 as BeOne\'s own answer to the Ghia GLOW/CAPTIVATE comparison, while being honest about its earlier-phase maturity.',
    suggestedAction: { label: 'Review in NOVA', path: '/insights' },
  },
];
