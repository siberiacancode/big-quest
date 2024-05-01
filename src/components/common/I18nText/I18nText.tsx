'use client';

import React from 'react';
import { FormattedMessage } from 'react-intl';

interface I18nTextProps {
  path: LocaleMessageId;
  values?: Record<string, any>;
}

export const I18nText: React.FC<I18nTextProps> = React.memo(({ path, values }) => (
  <FormattedMessage id={path} values={values} />
));

I18nText.displayName = 'I18nText';
