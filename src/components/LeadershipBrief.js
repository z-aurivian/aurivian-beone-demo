import React from 'react';
import { Users, TrendingUp, Radio, Target } from 'lucide-react';
import { LEADERSHIP_BRIEF } from '../data/ariaAbstractIntel';

function Section({ icon: Icon, label, children }) {
  return (
    <div className="bg-auri-card rounded-xl border border-auri-border p-5">
      <div className="flex items-center gap-2 mb-3">
        <Icon size={15} className="text-auri-muted" />
        <h4 className="text-sm font-semibold text-auri-text">{label}</h4>
      </div>
      {children}
    </div>
  );
}

export default function LeadershipBrief({ selectedCongress }) {
  const congressId = selectedCongress?.isTrend ? 'esmo-2026' : (selectedCongress?.id || 'esmo-2026');
  const brief = LEADERSHIP_BRIEF[congressId];

  if (!brief) {
    return (
      <div className="bg-auri-card rounded-xl p-6 border border-auri-border text-sm text-auri-muted">
        No post-congress leadership brief for this congress yet.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="bg-auri-text/5 border border-auri-text/20 rounded-xl p-5">
        <div className="text-[11px] font-mono uppercase tracking-wider text-auri-muted mb-1">
          {selectedCongress.fullName || selectedCongress.name} · same-day leadership brief
        </div>
        <div className="text-sm text-auri-text">Audience: {brief.audience}</div>
        <p className="text-xs text-auri-muted mt-2 leading-relaxed">
          The leadership version of ARIA's Role-Based Auto-Socialization feature — key findings, competitor analysis, late-breaking abstracts, and the resulting positioning shift, read directly off the same positioning map the pre-congress cards updated.
        </p>
      </div>

      <Section icon={Users} label="Key findings">
        <ul className="space-y-2">
          {brief.keyFindings.map((f, i) => (
            <li key={i} className="text-sm text-auri-text leading-relaxed flex gap-2">
              <span className="text-auri-muted">•</span><span>{f}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section icon={TrendingUp} label="Competitor analysis">
        <ul className="space-y-2">
          {brief.competitorAnalysis.map((f, i) => (
            <li key={i} className="text-sm text-auri-text leading-relaxed flex gap-2">
              <span className="text-auri-muted">•</span><span>{f}</span>
            </li>
          ))}
        </ul>
      </Section>

      {brief.lateBreaking.length > 0 && (
        <Section icon={Radio} label="Late-breaking abstracts">
          <ul className="space-y-2">
            {brief.lateBreaking.map((f, i) => (
              <li key={i} className="text-sm text-auri-text leading-relaxed flex gap-2">
                <span className="text-auri-muted">•</span><span>{f}</span>
              </li>
            ))}
          </ul>
        </Section>
      )}

      <Section icon={Target} label="Resulting positioning shift">
        <p className="text-sm text-auri-text leading-relaxed">{brief.positioningShift}</p>
      </Section>
    </div>
  );
}
