import React from 'react';
import { 
  ArrowUp, 
  ExternalLink, 
  Mail, 
  MapPin,
  MessageCircle
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getPortfolioData, PROFILE_CONSTANTS } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const { language, t } = useLanguage();
  const { profile, projects, services } = getPortfolioData(language);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05070a] border-t border-slate-800/80 pt-16 pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Col 1 & 2: Brand & Philosophy */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#accueil" className="flex items-center gap-3 group inline-block">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 p-[1.5px] shadow-lg shadow-cyan-500/20">
                <div className="w-full h-full bg-[#0b0e17] rounded-[10px] flex items-center justify-center font-display font-bold text-white text-xs">
                  HAM
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-base text-white tracking-tight group-hover:text-cyan-400 transition-colors">
                  {PROFILE_CONSTANTS.name}
                </span>
                <span className="text-[11px] text-slate-500 font-mono">
                  {t.footer.role}
                </span>
              </div>
            </a>

            <p className="text-slate-300 font-light leading-relaxed max-w-sm text-xs">
              {t.footer.bio}
            </p>

            <div className="pt-2 flex flex-col gap-2">
              <div className="flex items-center gap-2 text-slate-400 text-xs">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>{profile.location}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400 text-xs font-mono" dir="ltr">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <a href={`mailto:${PROFILE_CONSTANTS.email}`} className="hover:text-cyan-300 transition-colors">
                  {PROFILE_CONSTANTS.email}
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-400 text-xs font-mono" dir="ltr">
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                <a 
                  href={PROFILE_CONSTANTS.whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-emerald-300 transition-colors"
                >
                  {PROFILE_CONSTANTS.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={PROFILE_CONSTANTS.fiverrUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#1dbf73]/15 text-[#1dbf73] border border-[#1dbf73]/30 hover:bg-[#1dbf73]/25 transition-colors"
              >
                <span className="font-bold">fi</span>
                <span>{t.nav.orderFiverr} ({PROFILE_CONSTANTS.username})</span>
                <ExternalLink className="w-3 h-3 mx-0.5" />
              </a>
            </div>
          </div>

          {/* Col 3: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              {t.footer.navTitle}
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#accueil" className="hover:text-cyan-400 transition-colors">{t.nav.home}</a>
              </li>
              <li>
                <a href="#projets" className="hover:text-cyan-400 transition-colors">{t.nav.projects}</a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-400 transition-colors">{t.nav.services}</a>
              </li>
              <li>
                <a href="#competences" className="hover:text-cyan-400 transition-colors">{t.nav.skills}</a>
              </li>
              <li>
                <a href="#securite" className="hover:text-cyan-400 transition-colors">{t.nav.security}</a>
              </li>
              <li>
                <a href="#parcours" className="hover:text-cyan-400 transition-colors">{t.nav.career}</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-400 transition-colors">{t.nav.contact}</a>
              </li>
            </ul>
          </div>

          {/* Col 4: Projets Réalisés */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              {t.footer.projectsTitle}
            </h4>
            <ul className="space-y-2">
              {projects.map((p) => (
                <li key={p.id}>
                  <a href="#projets" className="hover:text-cyan-400 transition-colors truncate block">
                    {p.title.split('—')[0]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Services & Standards */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              {t.footer.servicesTitle}
            </h4>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.id}>
                  <a href="#services" className="hover:text-cyan-400 transition-colors truncate block">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center gap-2 text-slate-500">
            <span>© {new Date().getFullYear()} {PROFILE_CONSTANTS.name}</span>
            <span>•</span>
            <span className="text-emerald-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              {t.footer.operational}
            </span>
            <span>•</span>
            <span>{t.footer.productionGrade}</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/50 text-slate-300 hover:text-white transition-all shadow-sm"
            >
              <span>{t.footer.backToTop}</span>
              <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
