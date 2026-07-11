// Auri canned Q&A — Demo Brief §12.
// Backs the chatbot's suggested prompts and the offline/fallback path.

export const AURI_PROMPTS = [
  {
    prompt: 'Where are the biggest MO coverage gaps and what is the recommended prioritisation?',
    response:
      'Three MO-level gaps stand out right now:\n\n• **MO5 (Tevimbra gastric/GEJ expansion)** — Coverage 18%, Gap status. No KOL champion identified for the HER2-negative 1L narrative. Action A9 (advisory panel) is Proposed with no owner.\n• **MO3 (Tevimbra esophageal community)** — Coverage 27%, Low status. Pembrolizumab reflex is entrenched at community GI tumour boards. AI3 is Validated. Actions A5 and A6 both Proposed, no owner assigned.\n• **MO2 (Brukinsa CLL first-line)** — Coverage 31%, Low status. Community hem-onc is unaware Brukinsa is approved first-line. Ghia divergence (AI4) is compounding the challenge.\n\nRecommended order: address MO2 first (Ghia response is time-sensitive, A2 is Started), then MO3 (assign A5 owner this week), then MO5.',
    cites: [
      { type: 'mo',      id: 'MO5' },
      { type: 'mo',      id: 'MO3' },
      { type: 'mo',      id: 'MO2' },
      { type: 'insight', id: 'AI4' },
      { type: 'action',  id: 'A2'  },
      { type: 'action',  id: 'A5'  },
    ],
  },
  {
    prompt: 'Summarise the Paolo Ghia divergence alert and the recommended MSL response.',
    response:
      'Dr. Paolo Ghia (Universita Vita-Salute San Raffaele, Milan, Tier 1, influence 87) has dropped from alignment 71 to 47 in the last 60 days. He is publicly advocating for fixed-duration ibrutinib+venetoclax as preferable to continuous zanubrutinib monotherapy, citing GLOW/CAPTIVATE 4-year QoL and cost data. His argument: if patients are not on BTK indefinitely, the cardiovascular safety advantage of Brukinsa becomes less clinically meaningful.\n\nHis LinkedIn posts are gaining engagement from at least 3 other European CLL Tier 1 KOLs. Last MSL contact was 9 weeks ago.\n\n**Recommended response:**\n1. Action A2 (scientific exchange re: ALPINE PFS data vs fixed-duration combos) is Started but needs scheduling urgency — this week if possible.\n2. The counter-argument is that ALPINE OS data (HR 0.65, p=0.0024) shows a survival advantage, not just PFS — and fixed-duration combinations do not yet have OS data that matches this.\n3. MANIFEST-2 (Brukinsa+venetoclax combination) data, when available, may directly neutralise the GLOW comparison.',
    cites: [
      { type: 'insight', id: 'AI4' },
      { type: 'action',  id: 'A2'  },
      { type: 'kol',     id: 'kol-9' },
    ],
  },
  {
    prompt: 'What is the ALPINE cardiovascular safety story and how should MSLs frame it vs ibrutinib?',
    response:
      'ALPINE (NEJM 2023, NCT03734017) was a head-to-head Phase III trial of zanubrutinib vs ibrutinib in R/R CLL/SLL.\n\n**Key findings:**\n• Overall response rate: 78.3% (zanubrutinib) vs 62.5% (ibrutinib), p<0.001\n• PFS: HR 0.65 (p=0.0024) — 35% reduction in progression or death risk\n• AF/flutter: 5.2% (zanubrutinib) vs 13.3% (ibrutinib)\n• Hypertension: 7.2% vs 10.4%\n• Any-grade cardiac events: 10.9% vs 18.6%\n\n**MSL framing:**\nThe ALPINE data gives you two simultaneous arguments — efficacy AND safety. Ibrutinib off-target inhibition (HER4, EGFR, ITK, TXK) drives the cardiac toxicity. Zanubrutinib\'s greater BTK selectivity means patients get better disease control without the cardiovascular burden. For patients with pre-existing cardiac risk factors — which is most elderly CLL patients — this is not a minor consideration.\n\n**Action A1** (ALPINE CV guide deployment) is Started. **Action A4** (NEJM one-pager for community oncologists) is Accepted and should be the primary leave-behind for community field interactions.',
    cites: [
      { type: 'insight', id: 'AI1' },
      { type: 'insight', id: 'AI5' },
      { type: 'action',  id: 'A1'  },
      { type: 'action',  id: 'A4'  },
    ],
  },
  {
    prompt: 'How should the field team position Brukinsa for CLL first-line versus venetoclax-based combinations?',
    response:
      'This is the strategic tension created by the Ghia divergence. The MSL positioning depends on the physician profile:\n\n**For ibrutinib-default community hem-onc (majority):**\nBrukinsa is a superior ibrutinib — same class, same oral convenience, better efficacy (ALPINE PFS HR 0.65) and dramatically better cardiovascular safety (AF 5.2% vs 13.3%). If they are already using ibrutinib first-line, the case for upgrading to zanubrutinib is straightforward.\n\n**For venetoclax+obinutuzumab advocates:**\nAcknowledge the finite-duration appeal but note: (1) ALPINE OS data shows survival advantage for continuous Brukinsa; (2) venetoclax-based combos have their own toxicity profile (tumour lysis syndrome, cytopenias); (3) MANIFEST-2 (Brukinsa+venetoclax) Phase III data is coming — watch this space.\n\n**For Ghia-style fixed-duration BTK+ven advocates:**\nThis is the hardest conversation. Action A2 (Ghia scientific exchange) is the template — engage on the ALPINE OS data first, then acknowledge the QoL argument, then position MANIFEST-2 as the combination data that will answer the question definitively.\n\nAI2 (community unawareness of first-line CLL approval) is the most actionable gap. A3 (first-line conversation guide for community MSLs) is Accepted and should be the near-term priority.',
    cites: [
      { type: 'insight', id: 'AI2' },
      { type: 'insight', id: 'AI4' },
      { type: 'action',  id: 'A2'  },
      { type: 'action',  id: 'A3'  },
      { type: 'mo',      id: 'MO2' },
    ],
  },
  {
    prompt: 'What is the Tevimbra differentiation from pembrolizumab in esophageal SCC second-line?',
    response:
      'The key trial is **RATIONALE-302** — tislelizumab vs chemotherapy in previously treated esophageal SCC. OS HR 0.70 (median OS 8.6 vs 6.3 months). This compares favourably to **KEYNOTE-590** (pembrolizumab + chemo first-line, OS HR 0.73) — noting the settings are different (1L vs 2L).\n\n**Differentiation points for MSLs:**\n1. RATIONALE-302 shows OS benefit in a 2L-only population vs chemo — the relevant comparison for community GI oncologists choosing second-line PD-1 therapy\n2. Tislelizumab has a distinct Fc engineering that reduces antibody-dependent cellular phagocytosis — a potential mechanism advantage in immunosuppressive tumour microenvironments\n3. PD-L1 expression: RATIONALE-302 showed OS benefit across PD-L1 subgroups, including PD-L1 low — pembrolizumab in esophageal SCC shows greater PD-L1 sensitivity\n\n**The access challenge:** AI3 confirms community GI oncologists have a pembrolizumab reflex and are not reading RATIONALE-302. Actions A5 (tumour board mapping) and A6 (differentiation toolkit) are both Proposed — assigning owners this quarter is the critical next step.',
    cites: [
      { type: 'insight', id: 'AI3' },
      { type: 'action',  id: 'A5'  },
      { type: 'action',  id: 'A6'  },
      { type: 'mo',      id: 'MO3' },
    ],
  },
  {
    prompt: 'Prepare me for a meeting with the BeOne Medical Affairs leadership team.',
    response:
      'Here is a 5-point briefing for a BeiGene Medical Affairs leadership conversation:\n\n**1. The CV safety story is working — but community reach is insufficient.** ALPINE data is landing with academic KOLs (AI1, recurrence 4, Prioritised). The gap is community hem-onc, who are not reading the NEJM paper. Action A4 (NEJM one-pager) is the priority deliverable.\n\n**2. The Ghia divergence needs an urgent response.** Alignment 71→47 in 60 days. His fixed-duration BTK+ven advocacy is the most sophisticated counter-narrative Brukinsa has faced. Last contact: 9 weeks. Action A2 must be scheduled this week.\n\n**3. CLL first-line is a significant untapped opportunity.** AI2 confirms community oncologists do not know zanubrutinib is approved first-line for CLL. MO2 is Low (31%). A3 (community conversation guide) is Accepted but needs acceleration.\n\n**4. Tevimbra has a community access problem, not a data problem.** RATIONALE-302 OS data is strong. The issue is pembrolizumab reflex at community tumour boards (AI3, Validated). MO3 (27%, Low) and MO5 (18%, Gap) are the two lowest-coverage objectives. Both Tevimbra actions (A5, A6) are Proposed with no owners.\n\n**5. BTK+venetoclax combination interest is building.** EHA 2026 generated 3 unprompted KOL questions about MANIFEST-2. This is both a risk (validates the fixed-duration narrative) and an opportunity (Brukinsa+ven combination positions zanubrutinib at the centre of the next CLL debate). A8 (EHA post-congress synthesis) is Started.',
    cites: [
      { type: 'insight', id: 'AI1' },
      { type: 'insight', id: 'AI2' },
      { type: 'insight', id: 'AI3' },
      { type: 'insight', id: 'AI4' },
      { type: 'insight', id: 'AI7' },
      { type: 'mo',      id: 'MO2' },
      { type: 'mo',      id: 'MO3' },
    ],
  },
];

export const SUGGESTED_PROMPTS = [
  'Where are the biggest MO coverage gaps and what is the recommended prioritisation?',
  'Summarise the Paolo Ghia divergence alert and the recommended MSL response.',
  'What is the ALPINE cardiovascular safety story and how should MSLs frame it vs ibrutinib?',
  'How should the field team position Brukinsa for CLL first-line versus venetoclax-based combinations?',
  'What is the Tevimbra differentiation from pembrolizumab in esophageal SCC second-line?',
  'Prepare me for a meeting with the BeOne Medical Affairs leadership team.',
];
