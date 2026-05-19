import { enUS, ru, uz, uzCyrl } from "date-fns/locale";

export const DATE_PICKER_LOCALES = {
  uz: "uz",
  ru: "ru",
  cyrl: "uz-cyrl",
  eng: "en",
} as const;

export const DATE_PICKER_FNS_LOCALES = {
  uz: uz,
  ru: ru,
  cyrl: uzCyrl,
  eng: enUS,
} as const;
