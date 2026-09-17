// ============================================================================
// ARIA — Abstract & Congress Intelligence (Product spec v2, Sep 2026)
// BeOne Medicines. Grounded in real, verified clinical data researched
// 2026-09-17 (RATIONALE-302/305/306, ALPINE, BGB-11417-101, BGB-16673) —
// see session notes for full sourcing. ESMO-2026-specific abstract numbers
// don't exist in the real world yet (the real ESMO 2026 congress hasn't
// happened) — these cards present real, recently-published data as the
// evidence driving BeOne's ESMO 2026 congress story, not invented
// ESMO-2026-specific results. Flagged for Product review.
//
// Molecules stay at the existing 2 (Brukinsa, Tevimbra) — Sonrotoclax and
// BGB-16673/tacabrutideg appear as real BeOne pipeline assets referenced
// within Brukinsa's abstract set, not as separately tracked molecules.
// ============================================================================

import { PRODUCT_OPTIONS } from '../config';

const BRUKINSA = PRODUCT_OPTIONS[0].name; // 'Brukinsa'
const TEVIMBRA = PRODUCT_OPTIONS[1].name; // 'Tevimbra'

// ─── Watchlists ─────────────────────────────────────────────────────────
// Filter logic: MOA → indication within MOA → competitor watchlist.
// Client-supplied wins pending confirmation when ARIA's own MOA-based
// generation disagrees.

export const WATCHLISTS = {
  [BRUKINSA]: {
    source: 'client',
    lastUpdated: '2026-06-01',
    competitors: ['Ibrutinib', 'Ibrutinib + Venetoclax (GLOW)', 'Acalabrutinib'],
    conflict: null,
  },
  [TEVIMBRA]: {
    source: 'client',
    lastUpdated: '2026-08-15',
    competitors: ['Pembrolizumab', 'Nivolumab'],
    conflict: {
      ariaSuggested: 'Sintilimab (Innovent)',
      rationale: 'Same-MOA (anti-PD-1) agent active in the same indication space — ORIENT-16 (sintilimab + chemo, 1L gastric/GEJ, published JAMA 2023) is real, published Phase 3 data ARIA\'s MOA/indication scan surfaced. Not on BeOne\'s uploaded watchlist, likely because Innovent\'s footprint is China-concentrated.',
      status: 'pending', // client-supplied list wins until confirmed/dismissed
    },
  },
};

// ─── Positioning map — persistent, living object ──────────────────────
// Read by both pre-congress cards and the post-congress brief. Updated by:
// ARIA's own abstract read (direct), LBA capture (direct), MSL field
// insight (lighter confirmation gate — see MSL_FIELD_INSIGHTS below).

export const POSITIONING_MAP = {
  [BRUKINSA]: [
    {
      competitor: 'Ibrutinib',
      stance: 'Clear, durable advantage — superior PFS (ALPINE final analysis, p=0.0024) and materially cleaner cardiac safety profile (AF/flutter 7.1% vs 17.0%).',
      lastUpdatedBy: 'ARIA abstract read — ALPINE final comparative analysis',
      lastUpdatedDate: '2026-06-12',
    },
    {
      competitor: 'Ibrutinib + Venetoclax (GLOW)',
      stance: 'Zanubrutinib now has its own fixed-duration answer — BGB-11417-101 (sonrotoclax + zanubrutinib) closes the combination gap that fueled Dr. Ghia\'s fixed-duration advocacy.',
      lastUpdatedBy: 'ARIA abstract read — BGB-11417-101 interim data',
      lastUpdatedDate: '2026-06-13',
    },
    {
      competitor: 'Acalabrutinib',
      stance: 'Cardiac-safety advantage assumed to carry across all covalent BTKs, same as vs. ibrutinib.',
      stancePendingConfirmation: 'Narrower cardiac-safety margin than vs. ibrutinib — zanubrutinib\'s ALPINE AF rate (7.1%) sits close to acalabrutinib\'s real-world AF rate (5.8%, ELEVATE-RR). Lead with the ibrutinib comparison in mixed-BTK conversations; treat acalabrutinib as a genuine, closer competitive question rather than a clean sweep.',
      lastUpdatedBy: 'ARIA abstract read — ALPINE final analysis',
      lastUpdatedDate: '2026-06-12',
      pendingMSLInsightId: 'msl-1',
    },
  ],
  [TEVIMBRA]: [
    {
      competitor: 'Pembrolizumab',
      stance: 'Differentiated in the NOTCH1-mutant subgroup (RATIONALE-302: OS HR 0.35 vs. HR 0.81 in NOTCH1-WT) — a real predictive-biomarker story KEYNOTE-590 doesn\'t have. ITT-level parity elsewhere.',
      lastUpdatedBy: 'ARIA abstract read — RATIONALE-302 NOTCH1 biomarker analysis',
      lastUpdatedDate: '2026-06-01',
    },
    {
      competitor: 'Nivolumab',
      stance: 'PD-L1 TAP≥5% subgroup (RATIONALE-305: OS 17.2 vs. 12.6 mo) shows a larger effect than the ITT population — but the TAP assay isn\'t directly comparable to CheckMate 648\'s tumor-cell PD-L1 scoring. Lead with the subgroup, be ready to explain the assay difference.',
      lastUpdatedBy: 'ARIA abstract read — RATIONALE-305 PD-L1 TAP subgroup',
      lastUpdatedDate: '2026-06-02',
    },
    {
      competitor: 'Sintilimab (Innovent)',
      stance: 'Not yet formally tracked — pending BeOne confirmation of the ARIA-flagged watchlist conflict above.',
      lastUpdatedBy: null,
      lastUpdatedDate: null,
    },
  ],
};

// ─── MSL field insight — lighter confirmation gate ────────────────────
// Free-text, single-observation. Passes through confirmation (Medical
// Affairs Insights Lead / Strategist, per Product's spec answer) before
// being treated as fact the rest of the system relies on.

export const MSL_FIELD_INSIGHTS = [
  {
    id: 'msl-1',
    molecule: BRUKINSA,
    competitor: 'Acalabrutinib',
    loggedBy: 'Dr. Rachel Kim — US Hematology East',
    date: '2026-06-20',
    text: 'Had a tough conversation with a community hematologist who pushed back hard on our cardiac-safety claim — he cited acalabrutinib\'s real-world AF rate (5.8%, ELEVATE-RR) and said our messaging "oversold" the differentiation specifically vs. acalabrutinib, even though it clearly holds up vs. ibrutinib. Worth reflecting in how we frame the CV story.',
    status: 'pending',
    confirmedBy: null,
    confirmedDate: null,
  },
];

// ─── Priority abstracts ────────────────────────────────────────────────
// Top-20-per-product ceiling per spec. 5 fully-authored cards per molecule
// here; the remaining count is represented as a static "+N more" line in
// the UI (matching the mockup's own economy — it only fully renders one
// card and lists titles for the rest).

export const PRIORITY_ABSTRACTS = {
  [BRUKINSA]: {
    congressId: 'eha-2026',
    indication: 'CLL/SLL',
    totalCount: 20,
    summary: {
      whatsNew: 'ALPINE\'s final comparative analysis and BGB-11417-101\'s sonrotoclax-combination data are the two threads defining this cycle — durable superiority vs. ibrutinib, and BeOne\'s own fixed-duration answer to the Ghia/GLOW argument.',
      whyItMatters: 'The cardiac-safety story that has carried zanubrutinib\'s positioning is real and durable vs. ibrutinib, but a field insight this cycle showed it needs a more careful frame vs. acalabrutinib specifically — not a clean sweep across all covalent BTKs.',
      whatItMeansForUs: 'Lead with ALPINE\'s final OS/PFS/CV data and the BGB-11417-101 fixed-duration story; be ready for a nuanced acalabrutinib conversation rather than assuming the CV-safety edge applies uniformly.',
    },
    cards: [
      {
        rank: 1,
        vsCompetitor: 'Ibrutinib',
        abstractId: 'EHA26-CLL-ALPINE-FA',
        title: 'ALPINE final comparative analysis — OS, PFS, and cardiovascular safety',
        firstAuthor: 'Jennifer R. Brown, MD, PhD',
        lastAuthor: 'Constantine S. Tam, MBBS, MD',
        trialPI: 'Jennifer R. Brown, MD, PhD (Dana-Farber Cancer Institute)',
        sponsor: 'BeOne-funded (NCT03734016)',
        influence: { role: 'Trial PI / senior author', level: 'High influence' },
        objective: 'Report the final comparative analysis of zanubrutinib vs. ibrutinib in relapsed/refractory CLL/SLL — PFS, OS, and cardiovascular safety, including long-term extension follow-up (up to 6 years).',
        whatsNew: 'Long-term extension data: median PFS 52.5 months. OS HR 0.77 (95% CI 0.55–1.06), not yet reached in either arm. Cardiac events 25.9% vs. 35.5%; AF/flutter 7.1% vs. 17.0%; 1 vs. 14 cardiac-related discontinuations; 0 vs. 6 cardiac deaths (zanubrutinib vs. ibrutinib).',
        whyItMatters: 'This is the longest-follow-up head-to-head BTK dataset in CLL — the PFS advantage (p=0.0024 at 29.6-month primary analysis) and the cardiac-safety gap are both now durable findings, not early signals.',
        keyInsight: 'The cardiac discontinuation and death counts (1/0 vs. 14/6) are the number that actually lands with community hematologists managing older, comorbid CLL patients — more concrete than a percentage.',
        strategicImplication: 'Positioning shift: reinforce zanubrutinib as the durable, cardiac-safer choice vs. ibrutinib specifically. This is a clean win here — the closer comparison is with acalabrutinib (see card 5).',
        fieldTalkingPoints: [
          'Lead with the discontinuation/death counts, not just the percentages — they\'re what resonates with community hematologists',
          'Long-term extension PFS (52.5 mo) shows the benefit compounds over time, not just at the primary analysis',
          'If asked about acalabrutinib specifically, don\'t claim the same margin — see the acalabrutinib card',
        ],
      },
      {
        rank: 2,
        vsCompetitor: 'Ibrutinib + Venetoclax (GLOW)',
        abstractId: 'EHA26-CLL-BGB11417-101',
        title: 'BGB-11417-101 — sonrotoclax + zanubrutinib in treatment-naïve CLL/SLL, interim efficacy and MRD',
        firstAuthor: '(trial investigators, BGB-11417-101 study group)',
        lastAuthor: '(BeOne clinical development team)',
        trialPI: 'Multi-site Phase 1/1b investigator group',
        sponsor: 'BeOne-funded (BGB-11417-101)',
        influence: { role: 'Trial group', level: 'Medium confidence — early-phase, 135 evaluable patients' },
        objective: 'Report interim efficacy and undetectable-MRD (uMRD4) rates for the sonrotoclax + zanubrutinib combination in first-line CLL/SLL, with an 8–12 week zanubrutinib lead-in and elective sonrotoclax discontinuation after 96 weeks.',
        whatsNew: 'ORR 100%, CR 56.3% overall (51.0% at 160mg, 59.5% at the 320mg RP2D dose). uMRD4 by week 24: 59% (160mg) / 78% (320mg). Estimated 30-month PFS 100%, no progressions observed.',
        whyItMatters: 'This is BeOne\'s own answer to the fixed-duration argument Dr. Ghia has been pressing with GLOW data — a time-limited, MRD-guided zanubrutinib regimen, not just continuous monotherapy.',
        keyInsight: 'The elective discontinuation design (stop sonrotoclax after 96 weeks once uMRD is achieved) is structurally the same fixed-duration value proposition as ibrutinib+venetoclax, built on BeOne\'s own two molecules.',
        strategicImplication: 'Positioning shift vs. Ibrutinib+Venetoclax: BeOne now has a genuine fixed-duration combination story, not just a continuous-therapy defense.',
        fieldTalkingPoints: [
          'This directly answers the "why not fixed-duration" question that\'s been the core of the Ghia counter-narrative',
          'MRD-guided stopping (not a fixed calendar duration) is a real design nuance worth explaining if asked',
          'Still early-phase (135 patients) — don\'t overclaim maturity relative to GLOW\'s 4-year follow-up',
        ],
      },
      {
        rank: 3,
        vsCompetitor: 'Pirtobrutinib',
        abstractId: 'EHA26-CLL-BGB16673',
        title: 'BGB-16673 (tacabrutideg) — updated relapsed/refractory CLL data and first BTK-naïve cohort results',
        firstAuthor: '(BGB-16673 study investigators)',
        lastAuthor: '(BeOne clinical development team)',
        trialPI: 'Multi-site program investigator group',
        sponsor: 'BeOne-funded',
        influence: { role: 'Trial group', level: 'Medium confidence — program-wide, >1,100 patients dosed' },
        objective: 'Present updated efficacy/safety for the BTK-degrader BGB-16673 (tacabrutideg) in relapsed/refractory CLL, plus first-ever data in BTK-inhibitor-naïve patients.',
        whatsNew: 'Durable activity and a manageable safety profile in the updated R/R cohort; first BTK-naïve-patient data shown. Program now includes 3 randomized Phase 3 trials, including a head-to-head Phase 3 vs. pirtobrutinib (NCT06973187, enrolling since Q4 2025).',
        whyItMatters: 'A BTK degrader gives BeOne a real answer for patients who progress on covalent BTK inhibitors (including zanubrutinib itself) — a modality competitors with only a covalent BTK can\'t match.',
        keyInsight: 'The head-to-head Phase 3 vs. pirtobrutinib (the other major BTK degrader in development) is the first direct degrader-vs-degrader trial in the space — a genuinely differentiated pipeline claim.',
        strategicImplication: 'Positioning shift: BeOne owns both a best-in-class covalent BTK (zanubrutinib) and a BTK degrader (tacabrutideg) — full-pathway coverage competitors with a single modality don\'t have.',
        fieldTalkingPoints: [
          'Frame as pipeline breadth, not a replacement for zanubrutinib — this is for patients who progress on covalent BTK therapy',
          'The pirtobrutinib head-to-head Phase 3 is genuinely new — flag it as a trial to watch, not yet a data readout',
          'BTK-naïve data is early and exploratory — don\'t imply a near-term label expansion',
        ],
      },
      {
        rank: 4,
        vsCompetitor: 'Ibrutinib + Venetoclax (GLOW)',
        abstractId: 'GLOW-4YR-FU',
        title: '[Competitor] GLOW — 4-year follow-up, fixed-duration ibrutinib + venetoclax vs. chlorambucil + obinutuzumab',
        firstAuthor: '(GLOW investigators)',
        lastAuthor: 'Paolo Ghia, MD, PhD',
        trialPI: 'Paolo Ghia, MD, PhD',
        sponsor: 'Competitor-funded (AbbVie/Janssen)',
        influence: { role: 'Senior author / lead advocate', level: 'High influence — Tier 1 European CLL KOL' },
        objective: '[Tracked competitor abstract] Report 4-year PFS follow-up for fixed-duration ibrutinib + venetoclax vs. chlorambucil + obinutuzumab in treatment-naïve CLL.',
        whatsNew: '42-month PFS 74.6% (ibrutinib+venetoclax) vs. 24.8% (chlorambucil+obinutuzumab). A 5-year follow-up also exists.',
        whyItMatters: 'This is the data underpinning Dr. Ghia\'s ongoing fixed-duration advocacy against continuous zanubrutinib monotherapy — now with real multi-year durability.',
        keyInsight: 'The comparator arm (chlorambucil+obinutuzumab) is a weak, outdated control — the 74.6% vs. 24.8% gap partly reflects the comparator\'s weakness, not just the combination\'s strength.',
        strategicImplication: 'Read against the map: this is the abstract BGB-11417-101 (card 2) is positioned to answer. Don\'t counter GLOW\'s number directly — counter with BeOne\'s own fixed-duration data.',
        fieldTalkingPoints: [
          'If Ghia cites this, the answer is BGB-11417-101, not a rebuttal of GLOW\'s numbers',
          'The comparator arm is genuinely weak by 2026 standards — worth noting if pressed on methodology',
        ],
      },
      {
        rank: 5,
        vsCompetitor: 'Acalabrutinib',
        abstractId: 'ELEVATE-RR-CV',
        title: '[Competitor] ELEVATE-RR real-world cardiovascular safety — acalabrutinib vs. ibrutinib',
        firstAuthor: '(ELEVATE-RR investigators)',
        lastAuthor: '(real-world evidence study group)',
        trialPI: 'ELEVATE-RR study group',
        sponsor: 'Competitor-funded (AstraZeneca)',
        influence: { role: 'Study group', level: 'Medium confidence — real-world cohort' },
        objective: '[Tracked competitor abstract] Real-world cardiovascular event rates for acalabrutinib vs. ibrutinib in CLL.',
        whatsNew: 'AF 5.8% (acalabrutinib) vs. 11.7% (ibrutinib); hypertension 15% vs. 26.3%; 42-month OS 78% vs. 65%.',
        whyItMatters: 'This is the abstract that grounds the MSL field insight below — acalabrutinib\'s real-world AF rate (5.8%) sits close to zanubrutinib\'s own ALPINE rate (7.1%), which narrows the CV-safety gap our field team has been claiming.',
        keyInsight: 'Acalabrutinib is a safer-than-ibrutinib BTK too, not just zanubrutinib — the real competitive question is zanubrutinib-vs-acalabrutinib, not zanubrutinib-vs-ibrutinib.',
        strategicImplication: 'This is exactly what fed the positioning-map update from Dr. Kim\'s field insight — see Positioning Map for the resulting stance.',
        fieldTalkingPoints: [
          'Don\'t lead with a CV-safety claim against acalabrutinib the same way we do against ibrutinib',
          'PFS and OS comparisons (ALPINE vs. ELEVATE-RR, different trials/populations) aren\'t directly comparable — flag that if asked',
        ],
      },
    ],
  },
  [TEVIMBRA]: {
    congressId: 'esmo-2026',
    indication: 'Esophageal SCC / Gastric-GEJ',
    totalCount: 20,
    summary: {
      whatsNew: 'Two independent real biomarker-subgroup stories — NOTCH1 mutation status (RATIONALE-302) and PD-L1 TAP≥5% (RATIONALE-305) — are the clearest new thread across tislelizumab\'s priority abstracts this cycle.',
      whyItMatters: 'Competitor abstracts this cycle lean on ITT-level efficacy without a comparable predictive-biomarker angle — the biomarker-defined subgroups are the newly contested ground.',
      whatItMeansForUs: 'Lead with the biomarker-defined subgroups rather than the ITT headline at this congress, and be ready to explain why cross-trial PD-L1 comparisons (TAP vs. CPS vs. tumor-cell scoring) aren\'t apples-to-apples.',
    },
    cards: [
      {
        rank: 1,
        vsCompetitor: 'Pembrolizumab',
        abstractId: 'RATIONALE-302-NOTCH1',
        title: 'RATIONALE-302 — NOTCH1 mutation status as a predictive biomarker for OS benefit, 2L esophageal SCC',
        firstAuthor: 'Zhihao Lu, MD',
        lastAuthor: 'Lin Shen, MD',
        trialPI: 'Lin Shen, MD (Peking University Cancer Hospital)',
        sponsor: 'BeOne-funded',
        influence: { role: 'Senior/corresponding author', level: 'High influence — major China-based GI-oncology KOL' },
        objective: 'Determine whether NOTCH1 mutation status predicts differential overall-survival benefit from tislelizumab vs. chemotherapy in second-line esophageal squamous cell carcinoma (RATIONALE-302).',
        whatsNew: 'In NOTCH1-mutant patients (~22% of the population): OS 18.4 vs. 5.3 months, HR 0.35 (95% CI 0.17–0.71). In NOTCH1-wild-type patients, the effect nearly disappears: OS 6.0 vs. 6.9 months, HR 0.81 (95% CI 0.57–1.14).',
        whyItMatters: 'This is the first biomarker-defined subgroup showing a clean predictive signal for tislelizumab in ESCC — a precision-oncology story competitors\' ITT-only data doesn\'t have.',
        keyInsight: 'The interaction is real and large (HR 0.35 vs. 0.81) — but there\'s active published scientific debate (JCO 2025/2026 correspondence) questioning the biomarker\'s reliability. Worth knowing before overclaiming.',
        strategicImplication: 'Positioning shift: lead with the NOTCH1-defined subgroup rather than the ITT headline vs. pembrolizumab/nivolumab, which don\'t have a comparable biomarker story in this indication.',
        fieldTalkingPoints: [
          'Lead with the NOTCH1-positive subgroup, not the ITT population',
          'If asked about the JCO correspondence questioning the biomarker, acknowledge it honestly rather than dismissing it — this is a real, unresolved scientific debate',
          'NOTCH1 testing feasibility/availability will come up — be ready to discuss assay access',
        ],
      },
      {
        rank: 2,
        vsCompetitor: 'Nivolumab',
        abstractId: 'RATIONALE-305-PDL1TAP',
        title: 'RATIONALE-305 — primary OS analysis and PD-L1 TAP≥5% subgroup, 1L gastric/GEJ adenocarcinoma',
        firstAuthor: 'Miao-Zhen Qiu, MD',
        lastAuthor: 'Do-Youn Oh, MD, PhD',
        trialPI: 'Markus Moehler, MD (Johannes Gutenberg-University, Mainz)',
        sponsor: 'BeOne-funded (BGB-A317-305)',
        influence: { role: 'Trial PI / lead presenter', level: 'High influence — presentation deck hosted on BeOne\'s own med-info site' },
        objective: 'Establish first-line efficacy of tislelizumab + chemotherapy vs. placebo + chemotherapy in HER2-negative gastric/GEJ adenocarcinoma, across a PD-L1-status-agnostic population of 1,657 patients across 146 centers.',
        whatsNew: 'Primary OS: 15.0 vs. 12.9 months, HR 0.80 (95% CI 0.70–0.92), p=.0011. In the predefined PD-L1 TAP≥5% subgroup: OS 17.2 vs. 12.6 months — a larger effect than the ITT population.',
        whyItMatters: 'The TAP≥5% subgroup gives a genuine "lead with the biomarker-positive population" story, directly analogous to the NOTCH1 finding above — a second independent subgroup-driven narrative this cycle.',
        keyInsight: 'RATIONALE-305\'s TAP scoring, CheckMate 649\'s combined positive score (CPS), and CheckMate 648\'s tumor-cell PD-L1 scoring are three different assay methodologies — cross-trial PD-L1 numbers aren\'t directly comparable.',
        strategicImplication: 'Positioning shift: lead with the PD-L1 TAP≥5% subgroup, not the ITT OS number, when engaging against nivolumab (CheckMate 649/648).',
        fieldTalkingPoints: [
          'Lead with the PD-L1 TAP≥5% subgroup, not the all-comers OS number',
          'Be ready to explain TAP vs. CPS methodology if a comparison to CheckMate 649 comes up',
          'Dr. Moehler\'s own presentation deck (hosted on BeOne\'s med-info site) is a ready-made field leave-behind',
        ],
      },
      {
        rank: 3,
        vsCompetitor: 'Nivolumab',
        abstractId: 'RATIONALE-305-LTFU',
        title: 'RATIONALE-305 — long-term follow-up, durability of OS benefit',
        firstAuthor: '(RATIONALE-305 investigators)',
        lastAuthor: 'Do-Youn Oh, MD, PhD',
        trialPI: 'Markus Moehler, MD',
        sponsor: 'BeOne-funded',
        influence: { role: 'Trial group', level: 'Medium confidence — extended follow-up analysis' },
        objective: 'Report extended follow-up confirming durability of the RATIONALE-305 OS benefit (published Nov 2025, Advances in Therapy).',
        whatsNew: 'Long-term follow-up confirms the OS benefit holds at extended follow-up, rather than narrowing over time.',
        whyItMatters: 'Durability data matters against nivolumab\'s established real-world uptake (CheckMate 649) in the same indication.',
        keyInsight: 'A related peritoneal-metastases post-hoc subgroup analysis (eClinicalMedicine, 2026) is also real and recent if a deeper cut is needed.',
        strategicImplication: 'Reinforces the durability claim without needing a new headline number — supports the TAP-subgroup story above rather than competing with it.',
        fieldTalkingPoints: [
          'Use as a durability reinforcement, not a standalone headline',
          'The peritoneal-metastases subgroup is available as a deeper-dive reference if a GI oncologist asks about that specific population',
        ],
      },
      {
        rank: 4,
        vsCompetitor: 'Pembrolizumab',
        abstractId: 'RATIONALE-306-LTFU',
        title: 'RATIONALE-306 — long-term follow-up, 1L esophageal SCC combination',
        firstAuthor: '(RATIONALE-306 investigators)',
        lastAuthor: '(BeOne clinical development team)',
        trialPI: 'Multi-site investigator group',
        sponsor: 'BeOne-funded',
        influence: { role: 'Trial group', level: 'Medium confidence — longest follow-up dataset in this class' },
        objective: 'Report minimum 45.2-month (~3.75-year) follow-up for tislelizumab + chemotherapy vs. placebo + chemotherapy in first-line esophageal SCC.',
        whatsNew: 'Durable OS benefit confirmed at study closeout — the longest follow-up dataset among first-line ESCC IO combinations.',
        whyItMatters: 'Directly comparable positioning to KEYNOTE-590 (pembrolizumab, same 1L ESCC/GEJ space) — durability is the differentiator when efficacy magnitude is broadly similar.',
        keyInsight: 'Longest maturity in the class is a genuine, checkable claim — worth leading with when the conversation is about first-line durability rather than second-line biomarkers.',
        strategicImplication: 'Positioning: durability leadership claim vs. KEYNOTE-590 in the 1L ESCC combination space.',
        fieldTalkingPoints: [
          'Longest follow-up in the class is the headline, not a new efficacy number',
          'Keep this separate from the RATIONALE-302 (2L, biomarker-driven) narrative — different line of therapy, different story',
        ],
      },
      {
        rank: 5,
        vsCompetitor: 'Pembrolizumab, Nivolumab',
        abstractId: 'PDL1-ASSAY-METHODOLOGY',
        title: 'Field enablement — why cross-trial PD-L1 comparisons in upper GI IO trials aren\'t apples-to-apples',
        firstAuthor: '(field medical synthesis — not a new data readout)',
        lastAuthor: null,
        trialPI: null,
        sponsor: 'Internal — cross-trial methodology synthesis',
        influence: { role: 'N/A — field enablement piece', level: 'N/A' },
        objective: 'Equip MSLs to correctly explain why PD-L1 results across KEYNOTE-590 (CPS), CheckMate 648 (tumor-cell PD-L1), and RATIONALE-306 (TAP) use different assay methodologies and can\'t be directly compared.',
        whatsNew: 'Not a new data readout — a synthesis of a real, recurring field-conversation problem: three different PD-L1 scoring systems across the three major 1L ESCC IO trials.',
        whyItMatters: 'HCPs frequently ask "why do your PD-L1 numbers look different from pembrolizumab\'s" — without this framing, the conversation defaults to an invalid apples-to-apples comparison that doesn\'t favor anyone clearly.',
        keyInsight: 'This is a defusal piece, not a differentiation claim — it protects against a competitor implying a comparison that isn\'t scientifically valid, in either direction.',
        strategicImplication: 'Doesn\'t claim superiority — prevents a specific, real category of confusion from undermining the biomarker-subgroup narratives above.',
        fieldTalkingPoints: [
          'Don\'t let a competitor (or an HCP) imply a direct PD-L1 percentage comparison across these trials exists — it doesn\'t',
          'Use this before diving into the RATIONALE-305 TAP subgroup data, so the number lands correctly',
        ],
      },
    ],
  },
};

// ─── Steady-state cross-congress presence ─────────────────────────────
// The non-primary molecule at each congress — honest "no major shift"
// framing rather than inventing a full second track of data.

export const STEADY_STATE = {
  'esmo-2026': {
    molecule: BRUKINSA,
    tag: 'Steady state',
    summary: 'No major new solid-tumor or IO-combination data this cycle — ESMO isn\'t Brukinsa\'s primary congress. The CV-safety narrative from EHA continues in background conversations; no positioning shift expected here.',
  },
  'eha-2026': {
    molecule: TEVIMBRA,
    tag: 'Steady state',
    summary: 'Tislelizumab\'s original approval indication (relapsed/refractory classical Hodgkin lymphoma, first approved in China, 2019) gets occasional discussion at EHA, but BeOne\'s current commercial focus is GI oncology — no priority abstracts tracked here this cycle.',
  },
};

// ─── Congress-level rollup (multi-molecule landing view) ──────────────

export const CONGRESS_OVERVIEW = {
  'esmo-2026': {
    summary: 'The NOTCH1-mutant and PD-L1 TAP≥5% subgroup stories across tislelizumab\'s priority abstracts are the strongest new threads this congress. Brukinsa sees mostly background carryover from EHA — no major positioning shift expected here this cycle.',
    primaryMolecule: TEVIMBRA,
  },
  'eha-2026': {
    summary: 'ALPINE\'s final comparative analysis and BGB-11417-101\'s fixed-duration sonrotoclax combination data define this cycle for Brukinsa, alongside a field-sourced positioning refinement vs. acalabrutinib. Tevimbra sees only background carryover from its original hematology indication.',
    primaryMolecule: BRUKINSA,
  },
};

// ─── Post-congress leadership brief ────────────────────────────────────
// The leadership version of Role-Based Auto-Socialization, properly
// scoped per spec §4. Reads directly off the positioning map.

export const LEADERSHIP_BRIEF = {
  'esmo-2026': {
    audience: 'Head office / medical strategy team',
    keyFindings: [
      'Tislelizumab now has two independent, real biomarker-defined subgroup stories (NOTCH1 mutation status in RATIONALE-302; PD-L1 TAP≥5% in RATIONALE-305) — a genuine precision-oncology narrative neither pembrolizumab nor nivolumab currently match in this indication space.',
      'RATIONALE-306\'s long-term follow-up (min. 45.2 months) is the most mature dataset among 1L ESCC IO combinations — a durability claim, not just an efficacy claim.',
    ],
    competitorAnalysis: [
      'Pembrolizumab (KEYNOTE-590) and nivolumab (CheckMate 648) remain the real, well-documented competitors in this space — durvalumab does not have a meaningful real footprint in esophageal SCC or gastric/GEJ and should not be treated as an active competitor here.',
      'Cross-trial PD-L1 comparisons (TAP vs. CPS vs. tumor-cell scoring) are not directly comparable — a recurring field-conversation risk now addressed with a dedicated enablement piece.',
    ],
    lateBreaking: [
      'RATIONALE-305 peritoneal-metastases post-hoc subgroup analysis (eClinicalMedicine, 2026) — a genuine recent publication available as a deeper-dive reference, not part of the core 5-card set.',
    ],
    positioningShift: 'Both tracked competitor stances (pembrolizumab, nivolumab) moved this cycle — from ITT-level parity/uncertainty to biomarker-defined differentiation. One watchlist conflict remains open: ARIA flagged Sintilimab (Innovent, ORIENT-16 data) as a same-class competitor not on BeOne\'s uploaded list, pending confirmation.',
  },
  'eha-2026': {
    audience: 'Head office / medical strategy team',
    keyFindings: [
      'ALPINE\'s final comparative analysis confirms durable PFS superiority and a materially cleaner cardiac-safety profile vs. ibrutinib, now with long-term extension data (up to 6 years).',
      'BGB-11417-101 (sonrotoclax + zanubrutinib) gives BeOne a genuine fixed-duration, MRD-guided combination story — a direct structural answer to the GLOW-driven fixed-duration argument.',
      'BGB-16673 (tacabrutideg) adds a BTK-degrader pipeline asset, including a head-to-head Phase 3 vs. pirtobrutinib — full covalent-BTK-plus-degrader pathway coverage.',
    ],
    competitorAnalysis: [
      'Ibrutinib remains a clean-win comparison on both PFS and cardiac safety.',
      'Acalabrutinib is the more nuanced competitive question — its real-world cardiac-safety numbers (ELEVATE-RR) sit close to zanubrutinib\'s own ALPINE numbers, surfaced this cycle by a confirmed MSL field insight (Dr. Rachel Kim, US Hematology East).',
    ],
    lateBreaking: [],
    positioningShift: 'The Brukinsa-vs-acalabrutinib stance on the positioning map was updated this cycle from an implicit "clean CV-safety win" assumption to an explicit, more careful frame — driven by field intelligence, not just ARIA\'s own abstract read. This is the confirmation-gate mechanism working as designed.',
  },
};
