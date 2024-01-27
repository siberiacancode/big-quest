'use client';

import React from 'react';
import type { PrimitiveType } from 'react-intl';
import { FormattedMessage } from 'react-intl';

interface I18nTextProps {
  path: LocaleMessageId;
  values?: Record<string, PrimitiveType>;
}

export const I18nText: React.FC<I18nTextProps> = React.memo(({ path, values }) => (
  <FormattedMessage id={path} values={values} />
));

I18nText.displayName = 'I18nText';
