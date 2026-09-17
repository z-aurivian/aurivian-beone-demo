# Session Notes — 2026-07-11

## What was built this session

### BeOne demo (`z-aurivian/aurivian-beone-demo`)
- Full master template build: BeOne Medicines, Brukinsa (zanubrutinib) + Tevimbra (tislelizumab)
- 18 KOLs: 9 hematology/CLL (kol-1 through kol-9), 9 GI oncology (kol-10 through kol-18)
- Divergence KOL: Dr. Paolo Ghia (San Raffaele Milan, CLL, 71→47 in 60 days, GLOW/CAPTIVATE fixed-duration advocacy at EHA 2026, last contact 9 weeks)
- 3 ISP pillars, 5 MOs (MO5 Gap: Tevimbra gastric/GEJ HER2-neg, 18%), 7 insights, 9 actions
- Congresses: EHA 2026 + ESMO 2026 (both available)
- Hero narratives: ALPINE CV safety (AF 5.2% vs ibrutinib 13.3%), CLL first-line community awareness gap (MO2 Low 31%), MANIFEST Phase II zanubrutinib+ven (87% uMRD at 12M) as counter to Ghia
- Pulse Brief live: `public/pulse_beone_brief.html` + `pulse_beone_brief_audio.mp3` (ElevenLabs Dyego)
- Nova v3: 3 tabs (Medical Strategy / Field Strategy / Insight Intelligence)

### BeOne capture app (`z-aurivian/aurivian-beone-capture-app`)
- EHA 2026, Stockholm Waterfront Congress Centre, Jun 11–14, Day 3/4
- 5 KITs: ALPI (CV safety), FIXD (fixed-duration debate), CLL1 (first-line), RATS (Tevimbra esophageal), BTKV (BTK+ven)
- 6 BeOne MSL members (Dr. Rachel Kim as current user/lead)
- 8 mock insights: 3 hot (Ghia oral session, EU RWE registry poster, advisory board cardiac-risk segmentation answer)

### GSK demo + capture app (built earlier this session, QA fixes applied)
- GSK capture app congress changed from ERS 2026 (future) → **ERS 2025** (Vienna, Sep 6–9, 2025)
- CongressHeader.js client chip fixed: "Roche" → "GSK", division → "Immunology · Oncology"
- BSV capture app CongressHeader also fixed: "Roche" → "BSV Group", division → "Women's Health · Fertility"

## QA bugs fixed this session

### Recurring bugs (now in memory checklist)
1. **KOL Engagement Gap Tracker blank** — `NovaTab2FieldStrategy.js` filters on `k.tier` (numeric) but demo KOL data uses `k.engagementTier` (string). Fix both National (~363) and Territory (~625) filter sites + cell renders. Hit on BSV, GSK, BeOne.
2. **CongressHeader.js hardcoded "Roche" chip** — survives rsync; must update client name, division label, and hardcoded date string. Hit on BSV, GSK, BeOne capture apps.
3. **MSL status badge wrapping** — "Needs support" wrapped to 2 lines. Fix: add `whitespace-nowrap` to both status badge spans (lines ~204 and ~467). Fixed in master + BeOne.
4. **congressData.js missing DATA_MODULES + getDemoContext()** — CongressIngestion.js imports these; agent-written files omit them. Caused BeOne Vercel build failure.
5. **BeOne/BeiGene branding** — BeiGene rebranded to BeOne Medicines. Agents default to "BeiGene". Must update: `customer.js`, `public/index.html`, Pulse Brief HTML (use `sed -i '' 's/BeiGene/BeOne/g'`).
6. **EHA 2026 wrong location** — built as "Fiera Milano, Milan" but actual venue was Stockholm Waterfront Congress Centre, Jun 11–14.
7. **Future congress in capture app** — GSK capture app initially used ERS 2026 (Sep 2026, 2 months out). Switched to ERS 2025 — demo data should reflect a completed congress.

## Landing page
- 6 new entries added to `z-aurivian/demo-landing`: BSV demo, GSK demo, BeOne demo (top of MA Platform section), BSV capture, GSK capture, BeOne capture (top of Congress Capture section)

## Outstanding
- GSK Pulse Brief audio: `pulse_gsk_brief_audio.mp3` still needed (file not yet added)
