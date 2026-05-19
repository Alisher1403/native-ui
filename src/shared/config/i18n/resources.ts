export const resources = {
  en: {
    translation: {
      search: 'Search',
      list_empty_title: 'Nothing here yet',
    },
  },
} as const;

export type AppLocale = keyof typeof resources;
