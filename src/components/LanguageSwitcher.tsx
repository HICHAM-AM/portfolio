import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Globe } from 'lucide-react';
import type { Language } from '../data/translations';

interface LanguageSwitcherProps {
  compact?: boolean;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ compact = false }) => {
  const { language, setLanguage } = useLanguage();

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'en', label: 'EN', flag: '🇬🇧' },
    { code: 'fr', label: 'FR', flag: '🇫🇷' },
    { code: 'ar', label: 'العربية', flag: '🇲🇦' },
  ];

  return (
    <div className="inline-flex items-center p-1 rounded-full bg-slate-900/90 border border-slate-800 backdrop-blur-md shadow-inner">
      {!compact && (
        <span className="pl-2 pr-1 text-slate-500">
          <Globe className="w-3.5 h-3.5" />
        </span>
      )}
      {languages.map((lang) => {
        const isActive = language === lang.code;
        return (
          <button
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold transition-all duration-200 ${
              isActive
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-sm shadow-cyan-500/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
            title={`Switch to ${lang.label}`}
          >
            <span className="text-[11px]">{lang.flag}</span>
            <span className="font-mono tracking-tight">{lang.label}</span>
          </button>
        );
      })}
    </div>
  );
};

