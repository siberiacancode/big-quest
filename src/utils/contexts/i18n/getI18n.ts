import { createIntl } from 'react-intl';

import { getMessagesByLocale } from '@/utils/helpers';

export const getI18n = (locale: Locale) =>
  createIntl({
    locale,
    messages: getMessagesByLocale(locale)
  });
