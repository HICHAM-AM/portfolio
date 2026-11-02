import React, { useState } from 'react';
import { 
  FolderGit2, 
  Sparkles, 
  Smartphone, 
  Tv, 
  Globe, 
  Music, 
  Camera, 
  Layers, 
  ChevronRight
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getPortfolioData, PROFILE_CONSTANTS, type Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

interface ProjectsSectionProps {
  onSelectProjectForQuote: (projectName: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProjectForQuote }) => {
  const { language, t, isRtl } = useLanguage();
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'mobile' | 'smart-tv' | 'web'>('all');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const { projects } = getPortfolioData(language);

  const filterTabs = [
    { id: 'all' as const, label: t.projects.filters.all, count: projects.length },
    { id: 'mobile' as const, label: t.projects.filters.mobile, count: projects.filter(p => p.category === 'mobile-ai' || p.category === 'media').length },
    { id: 'smart-tv' as const, label: t.projects.filters.smartTv, count: projects.filter(p => p.category === 'smart-tv').length },
    { id: 'web' as const, label: t.projects.filters.web, count: projects.filter(p => p.category === 'web-saas').length },
  ];

  const filteredProjects = projects.filter((p) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'mobile') return p.category === 'mobile-ai' || p.category === 'media';
    if (selectedFilter === 'smart-tv') return p.category === 'smart-tv';
    if (selectedFilter === 'web') return p.category === 'web-saas';
    return true;
  });

  const getIcon = (name: string) => {
    switch (name) {
      case 'Camera': return <Camera className="w-5 h-5 text-sky-400" />;
      case 'Music': return <Music className="w-5 h-5 text-amber-400" />;
      case 'Tv': return <Tv className="w-5 h-5 text-purple-400" />;
      case 'SunMedium': return <Globe className="w-5 h-5 text-emerald-400" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-fuchsia-400" />;
      default: return <Smartphone className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="projets" className="py-24 relative bg-[#080a0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400 mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>{t.projects.pill}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
              {t.projects.title}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl font-light">
              {t.projects.subtitle}
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 bg-slate-900/80 p-1.5 rounded-xl border border-slate-800">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id as any)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
                  selectedFilter === tab.id
                    ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border border-cyan-500/30 font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                <span>{tab.label}</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-slate-800 text-slate-400 border border-slate-700">
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group glass-panel rounded-2xl overflow-hidden border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 shadow-xl hover:shadow-cyan-500/10"
            >
              {/* Card Top Banner / Category */}
              <div className="p-6 pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-center group-hover:scale-105 transition-transform shadow-md">
                    {getIcon(project.icon)}
                  </div>
                  <span className={`px-2.5 py-1 rounded-full text-xs font-mono font-medium border ${project.badgeColor}`}>
                    {project.categoryLabel}
                  </span>
                </div>

                <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors line-clamp-1">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-cyan-400/90 mb-3">
                  {project.tagline}
                </p>
                <p className="text-slate-300 text-sm leading-relaxed line-clamp-3 font-light mb-4">
                  {project.description}
                </p>

                {/* Key Metrics row */}
                <div className="grid grid-cols-2 gap-2 bg-[#0a0d16] p-2.5 rounded-xl border border-slate-800/80 mb-4">
                  {project.metrics.slice(0, 2).map((m, mIdx) => (
                    <div key={mIdx} className="flex flex-col">
                      <span className="text-[10px] text-slate-400 font-mono">{m.label}</span>
                      <span className="text-xs font-bold font-display text-white">{m.value}</span>
                    </div>
                  ))}
                </div>

                {/* Stack Tags */}
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {project.stack.slice(0, 4).map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-800/60 text-slate-300 border border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 4 && (
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-slate-800/40 text-slate-400">
                      +{project.stack.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer with Details Action */}
              <div className="p-4 bg-[#0a0e19] border-t border-slate-800/80 flex items-center justify-between">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="w-full inline-flex items-center justify-between text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors py-1 group/btn"
                >
                  <span className="flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5" />
                    {t.projects.architectureAction}
                  </span>
                  <ChevronRight className={`w-4 h-4 group-hover/btn:translate-x-1 transition-transform ${isRtl ? 'rotate-180 group-hover/btn:-translate-x-1' : ''}`} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Global Bottom Banner for Custom Requirement */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-blue-950/40 via-slate-900 to-indigo-950/40 border border-cyan-500/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <h4 className="text-lg font-display font-bold text-white">
                {t.projects.customBanner.title}
              </h4>
              <p className="text-sm text-slate-300 mt-1 font-light">
                {t.projects.customBanner.desc}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all hover:scale-[1.02]"
            >
              {t.projects.customBanner.ctaDiscuss}
            </a>
            <a
              href={PROFILE_CONSTANTS.fiverrUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl text-xs font-semibold bg-[#1dbf73]/15 text-[#1dbf73] border border-[#1dbf73]/30 hover:bg-[#1dbf73]/25 transition-colors"
            >
              {t.projects.customBanner.ctaFiverr}
            </a>
          </div>
        </div>

      </div>

      {/* Deep-Dive Project Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
        onSelectProjectForQuote={onSelectProjectForQuote}
      />
    </section>
  );
};
