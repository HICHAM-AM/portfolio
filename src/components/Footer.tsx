import React from 'react';
import { 
  ArrowUp, 
  ExternalLink, 
  Mail, 
  MapPin
} from 'lucide-react';
import { PROFILE_DATA, PROJECTS } from '../data/portfolioData';

export const Footer: React.FC = () => {
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
                <div className="w-full h-full bg-[#0b0e17] rounded-[10px] flex items-center justify-center font-display font-bold text-white text-sm">
                  HA
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-base text-white tracking-tight group-hover:text-cyan-400 transition-colors">
                  {PROFILE_DATA.name}
                </span>
                <span className="text-[11px] text-slate-500 font-mono">
                  {PROFILE_DATA.role}
                </span>
              </div>
            </a>

            <p className="text-slate-300 font-light leading-relaxed max-w-sm text-xs">
              Concepteur et bâtisseur de solutions logicielles prêtes pour la production, alliant performance chirurgicale 60 FPS, sécurité de bout en bout et expérience utilisateur d'élite.
            </p>

            <div className="pt-2 flex flex-col gap-2">
              <div className="flex items-center gap-2 text-slate-400 text-xs">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>{PROFILE_DATA.location}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400 text-xs font-mono">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <a href={`mailto:${PROFILE_DATA.email}`} className="hover:text-cyan-300 transition-colors">
                  {PROFILE_DATA.email}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={PROFILE_DATA.fiverrUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#1dbf73]/15 text-[#1dbf73] border border-[#1dbf73]/30 hover:bg-[#1dbf73]/25 transition-colors"
              >
                <span className="font-bold">fi</span>
                <span>Commander sur Fiverr ({PROFILE_DATA.username})</span>
                <ExternalLink className="w-3 h-3 ml-0.5" />
              </a>
            </div>
          </div>

          {/* Col 3: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#accueil" className="hover:text-cyan-400 transition-colors">Accueil</a>
              </li>
              <li>
                <a href="#projets" className="hover:text-cyan-400 transition-colors">Projets Phares</a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-400 transition-colors">Services & Offres</a>
              </li>
              <li>
                <a href="#competences" className="hover:text-cyan-400 transition-colors">Matrice des Compétences</a>
              </li>
              <li>
                <a href="#securite" className="hover:text-cyan-400 transition-colors">Sécurité & Cloudflare</a>
              </li>
              <li>
                <a href="#parcours" className="hover:text-cyan-400 transition-colors">Parcours & Expérience</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact & Devis</a>
              </li>
            </ul>
          </div>

          {/* Col 4: Projets Réalisés */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              Projets Phares
            </h4>
            <ul className="space-y-2">
              {PROJECTS.map((p) => (
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
              Prestations & Offres
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="hover:text-cyan-400 transition-colors">Mobile & IA Embarquée</a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-400 transition-colors">Web Next.js 16 SaaS</a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-400 transition-colors">Smart TV (Tizen / webOS)</a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-400 transition-colors">Audit Cloudflare & WAF</a>
              </li>
              <li>
                <a href="#securite" className="hover:text-cyan-400 transition-colors">Anti-Spoofing SPF/DKIM</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center gap-2 text-slate-500">
            <span>© {new Date().getFullYear()} {PROFILE_DATA.name}</span>
            <span>•</span>
            <span className="text-emerald-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              All Systems Operational
            </span>
            <span>•</span>
            <span>Production Grade</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/50 text-slate-300 hover:text-white transition-all shadow-sm"
            >
              <span>Haut de page</span>
              <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
