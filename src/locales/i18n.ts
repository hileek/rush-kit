import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translation from './translation';

const translationZH: Record<string, string> = {};

for (const key in translation) {
  translationZH[key] = key;
}

const resources = {
  en: {
    translation,
  },
  zh: {
    translation: translationZH,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'zh', // zh/en
  keySeparator: false, // 使用点语法 ("common.home" 代替 "common: { home: ... }")
  interpolation: {
    escapeValue: false, // 不对字符串进行 HTML 转义
  },
});

export default i18n;
