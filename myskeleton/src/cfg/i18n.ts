// https://github.com/i18next/react-i18next/blob/master/example/react/src/i18n.js
// https://github.com/dosandk/react-ssr-app/
  
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LngDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-xhr-backend';

import en from './locale/en.json';
import pl from './locale/pl.json';

i18n
  .use(Backend)
  .use(LngDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      pl, en,
    },
    fallbackLng: 'en', // use pl if detected lng is not available
    keySeparator: false, // we do not use keys in form messages.welcome
    nsSeparator: '|',
    saveMissing: true,
    defaultNS: 'translations', ///!!!!! zob. plik json
    debug: true,
    interpolation: {
      escapeValue: false // react already safes from xss
    },
/*    react: {
      bindI18n: false, //'languageChanged loaded',
      transEmptyNodeValue: '',
      useSuspense: false,
    }*/
  });

i18n.changeLanguage('pl')

export default i18n;
