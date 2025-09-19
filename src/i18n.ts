import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import vi from './locales/vi.json';

const resources = {
  en: { translation: en },
  vi: { translation: vi }
};

// Lấy ngôn ngữ từ localStorage hoặc mặc định là 'vi'
const getInitialLanguage = () => {
  const savedLang = localStorage.getItem('lang');
  return savedLang && (savedLang === 'en' || savedLang === 'vi') ? savedLang : 'vi';
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: getInitialLanguage(),
    fallbackLng: 'vi',
    debug: process.env.NODE_ENV === 'development',
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: false
    }
  });

export default i18n; 