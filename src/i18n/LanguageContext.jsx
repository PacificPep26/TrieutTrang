'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { vi } from './locales/vi';
import { en } from './locales/en';
import { ko } from './locales/ko';
import { zh } from './locales/zh';

const dictionaries = { vi, en, ko, zh };

export const languages = [
  { code: 'vi', label: 'Tiếng Việt', flag: 'vn', short: 'VI' },
  { code: 'en', label: 'English', flag: 'gb', short: 'EN' },
  { code: 'ko', label: '한국어', flag: 'kr', short: 'KO' },
  { code: 'zh', label: '中文', flag: 'cn', short: 'ZH' },
];

const LanguageContext = createContext({
  lang: 'vi',
  setLang: () => {},
  t: (key) => key,
  dictionary: vi,
});

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState('vi');

  useEffect(() => {
    // Restore user preference if available
    const saved = localStorage.getItem('site_lang');
    if (saved && dictionaries[saved]) {
      setLangState(saved);
    }
  }, []);

  const setLang = (newLang) => {
    if (dictionaries[newLang]) {
      setLangState(newLang);
      localStorage.setItem('site_lang', newLang);
    }
  };

  const dictionary = dictionaries[lang] || vi;

  // Helper t('nav.home')
  const t = (path) => {
    const keys = path.split('.');
    let current = dictionary;
    for (const key of keys) {
      if (current && current[key] !== undefined) {
        current = current[key];
      } else {
        // Fallback to Vietnamese if translation key missing
        let fallback = vi;
        for (const fbKey of keys) {
          if (fallback && fallback[fbKey] !== undefined) {
            fallback = fallback[fbKey];
          } else {
            return path;
          }
        }
        return fallback;
      }
    }
    return current;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, dictionary }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  return useContext(LanguageContext);
}
