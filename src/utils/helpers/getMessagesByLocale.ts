import defaultMessages from '@/static/locales/ru.json' assert { type: 'json' };

export type Messages = Record<LocaleMessageId, string>;

export const getMessagesByLocale = (locale: string) => {
  try {
    // eslint-disable-next-line import/no-dynamic-require, global-require, @typescript-eslint/no-var-requires
    return require(`/static/locales/${locale}.json`) as Messages;
  } catch (error: unknown) {
    console.error('Error loading messages for locale', locale, error);

    return defaultMessages;
  }
};
