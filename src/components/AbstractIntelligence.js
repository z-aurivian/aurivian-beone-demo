import React, { useState } from 'react';
import {
  Target, ChevronRight, CheckCircle2, AlertTriangle, Users2,
} from 'lucide-react';
import { PRODUCT_OPTIONS } from '../config';
import {
  WATCHLISTS, POSITIONING_MAP, MSL_FIELD_INSIGHTS, PRIORITY_ABSTRACTS,
  STEADY_STATE, CONGRESS_OVERVIEW,
} from '../data/ariaAbstractIntel';

const TAG_STYLE = {
  'Positioning shift': 'bg-violet-50 text-violet-700 border-violet-200',
  'New signal': 'bg-emerald-50 text-emerald-700 border-emerald-200',
  'Steady state': 'bg-auri-offset text-auri-muted border-auri-border',
};

function moleculeTag(congressId, moleculeName) {
  const overview = CONGRESS_OVERVIEW[congressId];
  if (overview?.primaryMolecule === moleculeName) return 'Positioning shift';
  return 'Steady state';
}

function MoleculeCard({ moleculeName, congressId, active, onClick }) {
  const isPrimary = CONGRESS_OVERVIEW[congressId]?.primaryMolecule === moleculeName;
  const priority = PRIORITY_ABSTRACTS[moleculeName];
  const steady = STEADY_STATE[congressId]?.molecule === moleculeName ? STEADY_STATE[congressId] : null;
  const tag = moleculeTag(congressId, moleculeName);
  const count = isPrimary && priority ? priority.totalCount : 0;

  return (
    <button
      onClick={onClick}
      className={`text-left rounded-xl border p-4 transition-all ${active ? 'border-auri-text bg-auri-card' : 'border-auri-border bg-auri-card/60 hover:border-auri-text/40'}`}
    >
      <div className="font-semibold text-auri-text">{moleculeName}</div>
      <div className="text-xs text-auri-muted mt-0.5">
        {isPrimary ? `${priority?.indication} · ${count} priority abstracts` : 'No priority abstracts this cycle'}
      </div>
      <p className="text-xs text-auri-muted leading-relaxed mt-2 line-clamp-3">
        {isPrimary ? priority.summary.whatsNew : steady?.summary}
      </p>
      <span className={`inline-block mt-3 px-2 py-0.5 rounded text-[11px] font-medium border ${TAG_STYLE[tag]}`}>{tag}</span>
    </button>
  );
}

function AbstractCard({ card }) {
  return (
    <div className="bg-auri-card rounded-xl border border-auri-border p-5 space-y-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-[11px] font-mono text-auri-muted uppercase tracking-wider">
            Abstract {card.abstractId} · #{card.rank} · vs {card.vsCompetitor}
          </div>
          <h4 className="text-base font-semibold text-auri-text mt-1 leading-snug">{card.title}</h4>
        </div>
        {card.influence?.level && card.influence.level !== 'N/A' && (
          <span className="shrink-0 text-[10px] font-medium px-2 py-1 rounded border bg-auri-text/5 text-auri-text border-auri-text/20 whitespace-nowrap">
            {card.influence.level}
          </span>
        )}
      </div>

      <div className="text-xs text-auri-muted">
        {card.firstAuthor && <span>{card.firstAuthor}</span>}
        {card.lastAuthor && card.lastAuthor !== card.firstAuthor && <span> (last author: {card.lastAuthor})</span>}
        {card.sponsor && <span> · {card.sponsor}</span>}
      </div>

      <Field label="Objective" text={card.objective} />
      <Field label="What's new" text={card.whatsNew} />
      <Field label="Why it matters" text={card.whyItMatters} />
      <Field label="Key insight" text={card.keyInsight} />
      <div className="bg-auri-offset rounded-lg p-3 border border-auri-border">
        <div className="text-[10px] font-semibold text-auri-muted uppercase tracking-wider mb-1">Strategic implication</div>
        <div className="text-sm text-auri-text leading-relaxed">{card.strategicImplication}</div>
      </div>
      {card.fieldTalkingPoints?.length > 0 && (
        <div>
          <div className="text-[10px] font-semibold text-auri-muted uppercase tracking-wider mb-1.5">Field talking points</div>
          <ul className="space-y-1">
            {card.fieldTalkingPoints.map((tp, i) => (
              <li key={i} className="text-sm text-auri-text leading-relaxed flex gap-2">
                <span className="text-auri-muted">•</span><span>{tp}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function Field({ label, text }) {
  if (!text) return null;
  return (
    <div>
      <div className="text-[10px] font-semibold text-auri-muted uppercase tracking-wider mb-1">{label}</div>
      <div className="text-sm text-auri-text leading-relaxed">{text}</div>
    </div>
  );
}

function WatchlistPanel({ moleculeName, conflictStatus, onResolve }) {
  const watchlist = WATCHLISTS[moleculeName];
  return (
    <div className="bg-auri-card rounded-xl border border-auri-border p-4">
      <div className="flex items-center gap-2 mb-2">
        <Users2 size={14} className="text-auri-muted" />
        <span className="text-sm font-semibold text-auri-text">Competitor watchlist</span>
        <span className="text-[10px] font-mono text-auri-muted uppercase tracking-wider ml-auto">
          {watchlist.source === 'client' ? 'Client-supplied' : 'ARIA-generated'} · updated {watchlist.lastUpdated}
        </span>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {watchlist.competitors.map((c) => (
          <span key={c} className="text-xs px-2 py-1 rounded bg-auri-offset text-auri-text border border-auri-border">{c}</span>
        ))}
      </div>
      {watchlist.conflict && conflictStatus === 'pending' && (
        <div className="mt-3 bg-amber-50 border border-amber-200 rounded-lg p-3 flex items-start gap-2.5">
          <AlertTriangle size={15} className="text-amber-600 shrink-0 mt-0.5" />
          <div className="flex-1">
            <div className="text-sm text-amber-900 font-medium">
              ARIA flagged <span className="font-semibold">{watchlist.conflict.ariaSuggested}</span> — not on your uploaded watchlist
            </div>
            <p className="text-xs text-amber-800 leading-relaxed mt-1">{watchlist.conflict.rationale}</p>
            <div className="flex items-center gap-2 mt-2.5">
              <button
                onClick={() => onResolve('confirmed')}
                className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-amber-600 text-white hover:bg-amber-700"
              >
                Confirm — add to watchlist
              </button>
              <button
                onClick={() => onResolve('dismissed')}
                className="text-xs font-medium px-3 py-1.5 rounded-lg border border-amber-300 text-amber-800"
              >
                Dismiss
              </button>
            </div>
          </div>
        </div>
      )}
      {watchlist.conflict && conflictStatus === 'confirmed' && (
        <div className="mt-3 flex items-center gap-2 text-xs text-emerald-700">
          <CheckCircle2 size={13} /> Sintilimab confirmed and added to the tracked watchlist
        </div>
      )}
      {watchlist.conflict && conflictStatus === 'dismissed' && (
        <div className="mt-3 flex items-center gap-2 text-xs text-auri-muted">
          <CheckCircle2 size={13} /> Dismissed — client-supplied watchlist kept as-is
        </div>
      )}
    </div>
  );
}

function PositioningMapPanel({ moleculeName, mslStatus, onConfirmMSL, conflictStatus }) {
  const entries = POSITIONING_MAP[moleculeName] || [];
  return (
    <div className="bg-auri-card rounded-xl border border-auri-border p-4">
      <div className="flex items-center gap-2 mb-3">
        <Target size={14} className="text-auri-muted" />
        <span className="text-sm font-semibold text-auri-text">Positioning map</span>
        <span className="text-[10px] font-mono text-auri-muted uppercase tracking-wider ml-auto">Persistent · read by pre- &amp; post-congress views</span>
      </div>
      <div className="space-y-3">
        {entries.map((e) => {
          const isPendingMSL = e.pendingMSLInsightId && mslStatus !== 'confirmed';
          const stance = isPendingMSL ? e.stance : (e.stancePendingConfirmation || e.stance);
          const isConflictEntry = e.competitor === 'Sintilimab (Innovent)';
          const conflictConfirmed = isConflictEntry && conflictStatus === 'confirmed';
          const displayStance = conflictConfirmed
            ? 'Now tracked — ORIENT-16 (sintilimab + chemo, 1L gastric/GEJ) added to the active competitive read following watchlist confirmation.'
            : stance;
          return (
            <div key={e.competitor} className="border-t border-auri-border pt-3 first:border-t-0 first:pt-0">
              <div className="text-sm font-medium text-auri-text">vs. {e.competitor}</div>
              <p className="text-xs text-auri-muted leading-relaxed mt-1">{displayStance}</p>
              <div className="text-[10px] text-auri-muted mt-1.5 font-mono">
                {conflictConfirmed ? (
                  <span className="text-emerald-700">Updated by watchlist confirmation · just now</span>
                ) : isPendingMSL ? (
                  <span className="text-amber-700">Field insight pending confirmation — see below</span>
                ) : e.lastUpdatedBy ? (
                  `Updated by ${e.lastUpdatedBy} · ${e.lastUpdatedDate}`
                ) : (
                  'Not yet tracked'
                )}
              </div>
            </div>
          );
        })}
      </div>
      {MSL_FIELD_INSIGHTS.filter((m) => m.molecule === moleculeName).map((m) => (
        <div key={m.id} className="mt-3 bg-sky-50 border border-sky-200 rounded-lg p-3">
          <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-sky-800">
            MSL field insight · {mslStatus === 'confirmed' ? 'confirmed' : 'pending confirmation'}
          </div>
          <div className="text-xs text-sky-900 mt-1">{m.loggedBy} · {m.date}</div>
          <p className="text-sm text-sky-950 leading-relaxed mt-1.5">{m.text}</p>
          {mslStatus === 'confirmed' ? (
            <div className="flex items-center gap-1.5 text-xs text-emerald-700 mt-2">
              <CheckCircle2 size={13} /> Confirmed by Medical Affairs Insights Lead — positioning map updated above
            </div>
          ) : (
            <button
              onClick={onConfirmMSL}
              className="mt-2 text-xs font-semibold px-3 py-1.5 rounded-lg bg-sky-700 text-white hover:bg-sky-800"
            >
              Confirm (Medical Affairs Insights Lead)
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

export default function AbstractIntelligence({ selectedCongress }) {
  const congressId = selectedCongress?.isTrend ? 'esmo-2026' : (selectedCongress?.id || 'esmo-2026');
  const overview = CONGRESS_OVERVIEW[congressId];
  const defaultMolecule = overview?.primaryMolecule || PRODUCT_OPTIONS[0].name;

  const [selectedMolecule, setSelectedMolecule] = useState(defaultMolecule);
  const [expandedRank, setExpandedRank] = useState(1);
  const [conflictStatus, setConflictStatus] = useState('pending');
  const [mslStatus, setMslStatus] = useState('pending');

  const priority = PRIORITY_ABSTRACTS[selectedMolecule];
  const isPrimary = overview?.primaryMolecule === selectedMolecule;

  if (!overview) {
    return (
      <div className="bg-auri-card rounded-xl p-6 border border-auri-border text-sm text-auri-muted">
        No abstract intelligence tracked for this congress yet.
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Congress overview rollup */}
      <div className="bg-auri-text/5 border border-auri-text/20 rounded-xl p-5">
        <div className="text-[11px] font-mono uppercase tracking-wider text-auri-muted mb-2">
          {selectedCongress.fullName || selectedCongress.name} · BeOne congress overview
        </div>
        <p className="text-sm text-auri-text leading-relaxed">{overview.summary}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {PRODUCT_OPTIONS.map((p) => (
          <MoleculeCard
            key={p.id}
            moleculeName={p.name}
            congressId={congressId}
            active={selectedMolecule === p.name}
            onClick={() => { setSelectedMolecule(p.name); setExpandedRank(1); }}
          />
        ))}
      </div>

      {!isPrimary && (
        <div className="bg-auri-card rounded-xl border border-auri-border p-5 text-sm text-auri-muted">
          {STEADY_STATE[congressId]?.summary}
        </div>
      )}

      {isPrimary && priority && (
        <>
          {/* Aggregated summary */}
          <div className="bg-auri-text/5 border border-auri-text/20 rounded-xl p-5 space-y-2.5">
            <div className="text-[11px] font-mono uppercase tracking-wider text-auri-muted">
              Aggregated summary — {selectedMolecule}, {priority.indication}
            </div>
            <Field label="What's new" text={priority.summary.whatsNew} />
            <Field label="Why it matters" text={priority.summary.whyItMatters} />
            <Field label="What it means for us" text={priority.summary.whatItMeansForUs} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-4">
            {/* Ranked list */}
            <div className="space-y-1.5">
              <div className="text-[11px] font-mono uppercase tracking-wider text-auri-muted mb-2 flex items-center justify-between">
                <span>Top {priority.totalCount} priority abstracts</span>
                <span>ranked</span>
              </div>
              {priority.cards.map((c) => (
                <button
                  key={c.rank}
                  onClick={() => setExpandedRank(c.rank)}
                  className={`w-full text-left rounded-lg border px-3 py-2.5 transition-all ${expandedRank === c.rank ? 'border-auri-text bg-auri-card' : 'border-auri-border bg-auri-card/60 hover:border-auri-text/40'}`}
                >
                  <div className="text-[10px] font-mono text-auri-muted uppercase tracking-wider">#{c.rank} · vs {c.vsCompetitor}</div>
                  <div className="text-xs font-medium text-auri-text mt-0.5 line-clamp-2">{c.title}</div>
                </button>
              ))}
              <div className="text-[11px] text-auri-muted px-3 py-2 flex items-center gap-1">
                <ChevronRight size={12} /> +{priority.totalCount - priority.cards.length} more, expandable
              </div>
            </div>

            {/* Detail card */}
            <div>
              {priority.cards.filter((c) => c.rank === expandedRank).map((c) => (
                <AbstractCard key={c.rank} card={c} />
              ))}
            </div>
          </div>
        </>
      )}

      {/* Watchlist + positioning map */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <WatchlistPanel
          moleculeName={selectedMolecule}
          conflictStatus={conflictStatus}
          onResolve={setConflictStatus}
        />
        <PositioningMapPanel
          moleculeName={selectedMolecule}
          mslStatus={mslStatus}
          onConfirmMSL={() => setMslStatus('confirmed')}
          conflictStatus={conflictStatus}
        />
      </div>
    </div>
  );
}
