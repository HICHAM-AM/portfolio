import React from 'react';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="parcours" className="py-24 relative bg-[#080a0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-mono text-cyan-400 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Historique Professionnel & Réalisations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Parcours & Expériences Clés
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl font-light">
            Une trajectoire axée sur les projets à haute exigence technique et les standards industriels.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="max-w-4xl mx-auto space-y-8 relative before:absolute before:inset-0 before:left-5 md:before:left-1/2 md:before:-translate-x-1/2 before:w-0.5 before:bg-gradient-to-b before:from-cyan-500/50 before:via-blue-500/30 before:to-transparent">
          {EXPERIENCES.map((exp, idx) => (
            <div 
              key={idx}
              className={`relative flex flex-col md:flex-row gap-8 items-start ${
                idx % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Indicator Node */}
              <div className="absolute left-5 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#0b0e17] border-2 border-cyan-400 flex items-center justify-center shadow-lg shadow-cyan-500/30 z-10">
                <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse"></div>
              </div>

              {/* Card Container */}
              <div className="ml-12 md:ml-0 md:w-[calc(50%-2.5rem)] glass-panel rounded-2xl p-6 sm:p-7 border border-slate-800 hover:border-cyan-500/30 transition-all duration-300 shadow-xl">
                
                {/* Period Badge & Status */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-mono font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    <Calendar className="w-3 h-3" />
                    {exp.period}
                  </span>
                  <span className="text-[11px] font-mono text-emerald-400">
                    {exp.status}
                  </span>
                </div>

                {/* Role & Company */}
                <h3 className="text-xl font-display font-bold text-white mb-1">
                  {exp.role}
                </h3>
                <h4 className="text-xs font-mono text-slate-400 mb-4 flex items-center gap-1.5">
                  <span className="text-cyan-400 font-semibold">{exp.company}</span>
                </h4>

                {/* Responsibilities list */}
                <div className="space-y-2.5 mb-5">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="leading-5">{resp}</span>
                    </div>
                  ))}
                </div>

                {/* Tech chips */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800">
                  {exp.technologies.map((tech, tIdx) => (
                    <span 
                      key={tIdx}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-800/80 text-slate-300 border border-slate-700/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

              {/* Spacer for the other side on desktop */}
              <div className="hidden md:block md:w-[calc(50%-2.5rem)]"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
