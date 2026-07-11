// Insight Source Value Matrix — NOVA's "Insight Sources & Impact" tab.
// Quantifies the value of each insight-source channel.

export const INSIGHT_SOURCES = [
  { id: 'is-1', source: 'MSL Field Reports',              volume: 1184, qualityScore: 84, leadsToActionPct: 71, costPerInsight: 193,  roiScore: 8.1 },
  { id: 'is-2', source: 'Congress Intelligence EHA/ESMO', volume: 312,  qualityScore: 81, leadsToActionPct: 48, costPerInsight: 1240, roiScore: 7.4 },
  { id: 'is-3', source: 'Advisory Board Readouts',        volume: 44,   qualityScore: 93, leadsToActionPct: 41, costPerInsight: 3980, roiScore: 8.8 },
  { id: 'is-4', source: 'Medical Information Queries',    volume: 627,  qualityScore: 66, leadsToActionPct: 22, costPerInsight: 48,   roiScore: 6.9 },
  { id: 'is-5', source: 'Social & Digital KOL Monitoring', volume: 3841, qualityScore: 43, leadsToActionPct: 17, costPerInsight: 14,   roiScore: 5.2 },
];

// KIT Relevance Trend — 6-month relevance score per KIT.
export const KIT_RELEVANCE_TREND = [
  { month: 'Jan 2026', 'Brukinsa CV Safety': 71, 'Time-Limited vs Continuous BTK': 52, 'Brukinsa CLL 1L': 61, 'Tevimbra Esophageal SCC': 54, 'BTK+Venetoclax Combo': 58 },
  { month: 'Feb 2026', 'Brukinsa CV Safety': 74, 'Time-Limited vs Continuous BTK': 56, 'Brukinsa CLL 1L': 63, 'Tevimbra Esophageal SCC': 57, 'BTK+Venetoclax Combo': 60 },
  { month: 'Mar 2026', 'Brukinsa CV Safety': 78, 'Time-Limited vs Continuous BTK': 61, 'Brukinsa CLL 1L': 64, 'Tevimbra Esophageal SCC': 61, 'BTK+Venetoclax Combo': 63 },
  { month: 'Apr 2026', 'Brukinsa CV Safety': 82, 'Time-Limited vs Continuous BTK': 68, 'Brukinsa CLL 1L': 66, 'Tevimbra Esophageal SCC': 65, 'BTK+Venetoclax Combo': 66 },
  { month: 'May 2026', 'Brukinsa CV Safety': 88, 'Time-Limited vs Continuous BTK': 77, 'Brukinsa CLL 1L': 71, 'Tevimbra Esophageal SCC': 71, 'BTK+Venetoclax Combo': 68 },
  { month: 'Jun 2026', 'Brukinsa CV Safety': 94, 'Time-Limited vs Continuous BTK': 91, 'Brukinsa CLL 1L': 78, 'Tevimbra Esophageal SCC': 82, 'BTK+Venetoclax Combo': 74 },
];
