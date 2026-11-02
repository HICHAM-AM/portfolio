import React from 'react';
import { 
  X, 
  CheckCircle2, 
  Cpu, 
  Layers, 
  Sparkles, 
  ArrowRight, 
  ExternalLink, 
  Tv, 
  Globe, 
  Music, 
  Camera 
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { PROFILE_CONSTANTS, type Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectProjectForQuote: (projectName: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ 
  project, 
  onClose,
  onSelectProjectForQuote 
}) => {
  const { t, isRtl } = useLanguage();
  if (!project) return null;

  const getIcon = (name: string) => {
    switch (name) {
      case 'Camera': return <Camera className="w-5 h-5 text-sky-400" />;
      case 'Music': return <Music className="w-5 h-5 text-amber-400" />;
      case 'Tv': return <Tv className="w-5 h-5 text-purple-400" />;
      case 'SunMedium': return <Globe className="w-5 h-5 text-emerald-400" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-fuchsia-400" />;
      default: return <Cpu className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl bg-[#0b0e17] border border-slate-700/80 rounded-2xl shadow-2xl shadow-cyan-500/10 z-10 overflow-hidden my-8 max-h-[90vh] flex flex-col">
        
        {/* Top Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-800 bg-[#0d121f]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center">
              {getIcon(project.icon)}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-mono font-medium border ${project.badgeColor}`}>
                  {project.categoryLabel}
                </span>
                <span className="text-xs text-emerald-400 font-mono font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  {t.projects.productionDelivered}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white mt-1">
                {project.title}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body - Scrollable */}
        <div className="p-6 sm:p-8 space-y-8 overflow-y-auto">
          
          {/* Tagline & Main Pitch */}
          <div>
            <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-2">
              {t.projects.modal.conceptTitle}
            </h4>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
              {project.description}
            </p>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#080b12] p-4 rounded-xl border border-slate-800/80">
            {project.metrics.map((metric, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-xs text-slate-400 font-mono">{metric.label}</span>
                <span className="text-lg sm:text-xl font-display font-bold text-white mt-0.5">
                  {metric.value}
                </span>
              </div>
            ))}
          </div>

          {/* Stack Pills */}
          <div>
            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
              {t.projects.modal.techTitle}
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((item, idx) => (
                <span 
                  key={idx}
                  className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-slate-800/80 border border-slate-700/80 text-cyan-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Features Breakdown */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">
              {t.projects.modal.featuresTitle}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.features.map((feature, idx) => (
                <div 
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/70 flex items-start gap-3"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-300 leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture Highlights & Engineering Decisions */}
          <div className="p-5 rounded-xl bg-gradient-to-r from-blue-950/20 via-slate-900/60 to-purple-950/20 border border-slate-800/80 space-y-3">
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono font-semibold">
              <Layers className="w-4 h-4" />
              <span>{t.projects.modal.architectureTitle}</span>
            </div>
            <div className="space-y-2">
              {project.architectureHighlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                  <span className="text-cyan-400 font-mono">0{idx + 1}.</span>
                  <span className="leading-relaxed">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer / CTAs */}
        <div className="p-6 bg-[#0d121f] border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs text-slate-400 font-mono">
            {t.projects.modal.footerNote}
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => {
                onClose();
                onSelectProjectForQuote(project.title);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/20 transition-all"
            >
              <span>{t.projects.modal.ctaSimilar}</span>
              <ArrowRight className={`w-3.5 h-3.5 ${isRtl ? 'rotate-180' : ''}`} />
            </button>

            <a
              href={PROFILE_CONSTANTS.fiverrUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold bg-[#1dbf73]/20 hover:bg-[#1dbf73]/30 text-[#1dbf73] border border-[#1dbf73]/40 transition-colors"
            >
              <span>{t.projects.modal.ctaFiverr}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
