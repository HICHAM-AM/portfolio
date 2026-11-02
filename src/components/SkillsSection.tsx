import React, { useState } from 'react';
import { 
  Code2, 
  Smartphone, 
  Tv, 
  ShieldCheck, 
  Search, 
  Cpu
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getPortfolioData } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const { language, t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const { techMatrix } = getPortfolioData(language);

  const categories = [
    { id: 'all', label: t.skills.allTech },
    ...techMatrix.map(cat => ({ id: cat.category, label: cat.category }))
  ];

  const filteredCategories = techMatrix.map(cat => {
    const matchesCategory = selectedCategory === 'all' || cat.category === selectedCategory;
    const filteredSkills = cat.skills.filter(s => 
      s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.level.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return { ...cat, matchesCategory, filteredSkills };
  }).filter(cat => cat.matchesCategory && (cat.filteredSkills.length > 0 || searchTerm === ''));

  const getCategoryIcon = (icon: string) => {
    switch (icon) {
      case 'Smartphone': return <Smartphone className="w-5 h-5 text-sky-400" />;
      case 'Code2': return <Code2 className="w-5 h-5 text-cyan-400" />;
      case 'Tv': return <Tv className="w-5 h-5 text-purple-400" />;
      case 'Shield': return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      default: return <Cpu className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="competences" className="py-24 relative bg-[#080b12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-mono text-cyan-400 mb-3">
              <Cpu className="w-3.5 h-3.5" />
              <span>{t.skills.pill}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
              {t.skills.title}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl font-light">
              {t.skills.subtitle}
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 rtl:left-auto rtl:right-3" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={t.skills.searchPlaceholder}
              className="w-full pl-9 pr-4 rtl:pl-4 rtl:pr-9 py-2 rounded-xl bg-slate-900/90 border border-slate-700/80 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/80 transition-colors"
            />
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border border-cyan-500/40 font-semibold shadow-sm'
                  : 'bg-slate-900/50 text-slate-400 border border-slate-800 hover:text-white hover:border-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCategories.map((cat, idx) => (
            <div
              key={idx}
              className="glass-panel rounded-2xl p-6 sm:p-7 border border-slate-800/80 hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 pb-4 mb-4 border-b border-slate-800">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center">
                    {getCategoryIcon(cat.icon)}
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-bold text-white">
                      {cat.category}
                    </h3>
                    <p className="text-xs text-slate-400 font-light mt-0.5">
                      {cat.details}
                    </p>
                  </div>
                </div>

                {/* Skills badges grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {cat.filteredSkills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className={`p-2.5 rounded-xl border flex items-center justify-between text-xs transition-colors ${
                        skill.highlight
                          ? 'bg-slate-800/70 border-cyan-500/30 text-white'
                          : 'bg-slate-900/40 border-slate-800/80 text-slate-300'
                      }`}
                    >
                      <span className="font-medium font-mono text-[12px]">{skill.name}</span>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-mono ${
                        skill.level.includes('Expert') || skill.level.includes('خبير')
                          ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/20'
                          : skill.level.includes('Senior')
                          ? 'bg-purple-500/15 text-purple-300 border border-purple-500/20'
                          : 'bg-slate-800 text-slate-400'
                      }`}>
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom footer note */}
              <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span>{t.skills.cleanArchNote}</span>
                <span className="text-cyan-400">{cat.filteredSkills.length} {t.skills.skillsListed}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
