import React from 'react';
import { Zap, ShieldCheck, Rocket, CheckCircle2, Cpu } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Pillars: React.FC = () => {
  const { t } = useLanguage();

  const iconComponents = [
    <Zap className="w-6 h-6 text-cyan-400" />,
    <ShieldCheck className="w-6 h-6 text-emerald-400" />,
    <Rocket className="w-6 h-6 text-purple-400" />
  ];

  const borderGlows = [
    "group-hover:border-cyan-500/40",
    "group-hover:border-emerald-500/40",
    "group-hover:border-purple-500/40"
  ];

  const accentBgs = [
    "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    "bg-purple-500/10 text-purple-400 border-purple-500/20"
  ];

  return (
    <section className="py-20 relative bg-[#090b12] border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-xs font-mono text-cyan-400 mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>{t.pillars.pill}</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight mb-4">
            {t.pillars.title}
          </h2>
          
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base leading-relaxed">
            {t.pillars.subtitle}
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.pillars.items.map((pillar, idx) => (
            <div 
              key={idx}
              className={`group glass-panel rounded-2xl p-7 flex flex-col justify-between border border-slate-800/80 transition-all duration-300 hover:-translate-y-1.5 shadow-xl shadow-black/20 ${borderGlows[idx]}`}
            >
              <div>
                {/* Header with icon & badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-center shadow-inner">
                    {iconComponents[idx]}
                  </div>
                  <span className={`px-2.5 py-1 rounded-full text-xs font-mono font-medium border ${accentBgs[idx]}`}>
                    {pillar.tag}
                  </span>
                </div>

                {/* Title & Desc */}
                <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6 font-light">
                  {pillar.desc}
                </p>

                {/* Checkpoints */}
                <div className="space-y-3 pt-4 border-t border-slate-800/80">
                  {pillar.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-5">{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom pill */}
              <div className="mt-8 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>{t.pillars.standardPrefix}{idx + 1}</span>
                <span className="text-cyan-400 font-semibold">{t.pillars.guaranteedBadge}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
