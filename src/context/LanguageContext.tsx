import React, { createContext, useContext, useState, useEffect } from 'react';
import { TRANSLATIONS, type Language, type TranslationData } from '../data/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationData;
  dir: 'ltr' | 'rtl';
  isRtl: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Default language is English ('en') as requested by user
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('portfolio_lang');
    if (saved === 'fr' || saved === 'ar' || saved === 'en') {
      return saved;
    }
    return 'en';
  });

  const setLanguage = (newLang: Language) => {
    setLanguageState(newLang);
    localStorage.setItem('portfolio_lang', newLang);
  };

  const t = TRANSLATIONS[language] || TRANSLATIONS.en;
  const dir = language === 'ar' ? 'rtl' : 'ltr';
  const isRtl = dir === 'rtl';

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = dir;
    if (isRtl) {
      document.documentElement.classList.add('rtl');
    } else {
      document.documentElement.classList.remove('rtl');
    }
  }, [language, dir, isRtl]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir, isRtl }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
