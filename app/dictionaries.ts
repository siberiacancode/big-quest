import 'server-only';

const dictionaries = {
  ru: () => import('../static/locales/ru.json').then((module) => module.default)
};

export const getDictionary = (locale) => dictionaries[locale]();
