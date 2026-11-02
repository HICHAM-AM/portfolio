import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ExternalLink, 
  MessageSquareCode,
  Sparkles
} from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#accueil', label: 'Accueil' },
    { href: '#projets', label: 'Projets Phares' },
    { href: '#services', label: 'Services & Offres' },
    { href: '#competences', label: 'Compétences' },
    { href: '#securite', label: 'Sécurité & Infra' },
    { href: '#parcours', label: 'Parcours' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#080a0f]/90 backdrop-blur-xl border-b border-slate-800/80 shadow-lg shadow-black/40 py-3.5' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Status Badge */}
          <a href="#accueil" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 p-[1.5px] shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-shadow">
                <div className="w-full h-full bg-[#0b0e17] rounded-[10px] flex items-center justify-center font-display font-bold text-white tracking-wider text-base">
                  HA
                </div>
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border-2 border-[#080a0f]"></span>
              </span>
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-lg text-white tracking-tight group-hover:text-cyan-400 transition-colors">
                  {PROFILE_DATA.name}
                </span>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Disponible
                </span>
              </div>
              <span className="text-xs text-slate-400 font-mono tracking-tight hidden md:block">
                Senior Mobile & Web Dev
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border border-cyan-500/30 shadow-sm shadow-cyan-500/20 font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={PROFILE_DATA.fiverrUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-[#1dbf73]/15 text-[#1dbf73] hover:bg-[#1dbf73]/25 border border-[#1dbf73]/30 transition-all shadow-sm"
              title="Profil certifié Fiverr"
            >
              <span className="font-extrabold text-[13px]">fi</span>
              <span>Fiverr</span>
              <ExternalLink className="w-3 h-3 ml-0.5 opacity-80" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageSquareCode className="w-3.5 h-3.5" />
              <span>Démarrer un projet</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href={PROFILE_DATA.fiverrUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden px-2.5 py-1.5 rounded-lg text-xs font-bold bg-[#1dbf73]/15 text-[#1dbf73] border border-[#1dbf73]/30"
            >
              fi
            </a>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-slate-800/80 border border-slate-700/80 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Menu"
            >
              {isOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-[#0b0e17]/95 backdrop-blur-2xl border-b border-slate-800 shadow-2xl p-6 transition-all duration-300">
          <div className="flex flex-col space-y-3">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <span className="text-xs font-mono text-cyan-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Senior Mobile & Web Developer
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                100% Production Ready
              </span>
            </div>

            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-cyan-500/15 text-cyan-300 font-semibold border border-cyan-500/30'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-sm shadow-cyan-400"></span>}
                </a>
              );
            })}

            <div className="pt-4 border-t border-slate-800 flex flex-col gap-2.5">
              <a
                href={PROFILE_DATA.fiverrUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-bold bg-[#1dbf73]/20 text-[#1dbf73] border border-[#1dbf73]/40"
              >
                <span>Commander sur Fiverr</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20"
              >
                <MessageSquareCode className="w-4 h-4" />
                <span>Me Contacter Directement</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
