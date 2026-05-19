import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { resources } from "./resources";

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    compatibilityJSON: "v4",
    resources,
    lng: "uz",
    fallbackLng: "en",
    defaultNS: "translation",
    ns: ["translation"],
    interpolation: {
      escapeValue: false,
    },
    returnEmptyString: false,
  });
}

export default i18n;
