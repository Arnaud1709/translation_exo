import i18n from 'i18next';
import { initReactI18next} from 'react-i18next';

import locales from './translations';
  
  i18n
    .use(initReactI18next)
    .init({
      resources: locales, 
      lng: "question",
      interpolation: { escapeValue: false },
    });

    export default i18n;