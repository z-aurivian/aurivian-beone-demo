# Session Notes — 2026-07-12

## What happened, in order

1. **Product feedback on Nova**: Field Strategy MSL view was missing HCP Scientific Impact / KIT Intelligence / KOL Engagement sections vs National/Territory, and Listening Priorities rows only showed an insight count on the gap row. Fixed on master per the real Nova v3.0 engineering brief PDF, propagated here.
2. **Tab3 Actionable Insights had no "Proposed action" box.** Added. Then found the id-matching logic silently failed for AI1 specifically, because its action (`A1`) uses a compound `fromInsightRef: 'AI1+AI5'` and the matcher only did exact string equality. Fixed with a normalizing helper.
3. **Scientific Alignment Shift showed one hardcoded fictional KOL per MSL** ("Dr. Hayes", "Dr. Osei", etc. — leftover template mock, not real BeOne KOLs). Replaced with rows generated from the real 18-KOL roster via `config/messaging-alignment.js`, scoped per MSL/territory.
4. **User asked for each demo to have its own distinct MSL roster** instead of sharing master's generic 5 names (J. Morgan, S. Chen, A. Patel, L. Torres, R. Kim) — which surfaced a real audit before landing on names: BeOne's Nova Tab2, Tab1/Tab3, and `config/vega.js` all used *different* MSL identities for what should be one field team. VEGA + the capture app + Pulse Brief already agreed with each other (6-person roster, "Dr. Full Name" + real US/EU region format) — that became the source of truth.
5. **Full MSL roster alignment**: Nova Tab1/Tab2/Tab3 rewritten to the real 6-person roster — Dr. Rachel Kim (US Hematology East), Dr. James Park (US Hematology West), Dr. Sophie Laurent (EU Hematology), Dr. Marcus Chen (US Oncology West), Dr. Aisha Okonkwo (US Hematology South), Dr. Thomas Weber (EU Oncology). Rachel Kim had originally been excluded from Tab2 specifically to dodge a name collision with master's default roster — that was the wrong call; included her properly this time.
6. **Nova Tab1/Tab3 signal-quote content rewrite** (same-day follow-up, requested explicitly): the actual quote text (NMOSD, gMG, Soliris/Ultomiris — Alexion-era template leftovers) had nothing to do with Brukinsa/Tevimbra. Rewrote `INSIGHT_LOOPS`/`AUDIT_TRAILS` (Tab1) and `KIQ_PERIOD_DATA` (Tab3), plus the adjacent `TACTIC_POA`/`MAO_TABLE`/strategic-brief prose that referenced the same fake narrative, using real content already in `config/insights.js`/`actions.js`/`strategy.js` — real AI1-AI7 insights, real MSL quotes, correct MO/LP mapping. Dropped the fabricated `LP6_MOCK` ("complement biology" — no such LP exists in real config; MO5 already has genuine LP5 coverage via AI6).
7. Also fixed along the way: MAO dashboard table had 2 of 4 rows pointing at wrong coverage status / wrong insight ids (pre-dated this session); a stray "BeiGene" branding leftover inside `config/insights.js` (AI6's quote text).

Full technical detail: see memory [[project_nova_v3]] "Post-build fixes" section, [[project_aurivian_followups]] items 7-8.

## Verification
- Clean builds after every change (`CI=false npx react-scripts build`).
- Exhaustive grep sweep for leftover Alexion terms after the roster fix and again after the content rewrite — zero hits in Tab1/Tab2/Tab3 by the end (only the two ~structural~ mock topic names `Ultomiris switch benefit` / `NMOSD long-term RWE` remain in Tab2's `HCP_TOPICS`, explicitly out of scope for this pass — see checklist item 11).
- Headless-browser spot check (Playwright, logged in via the demo-only "any credentials work" login) of National/Territory/MSL views and the Insight Loop/KIQ matrix — confirmed correct rendering, zero console errors.

## Outstanding
- `src/components/NovaTab2FieldStrategy.js` `HCP_TOPICS`/`TERRITORY_HCP_TOPICS` topic names (`Ultomiris switch benefit`, `NMOSD long-term RWE`, `C5 inhibition in gMG`) are still Alexion-era — explicitly out of scope for today's Tab1/Tab3-focused pass, not yet fixed anywhere.
