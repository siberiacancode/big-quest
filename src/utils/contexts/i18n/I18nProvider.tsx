import React from 'react';
import { IntlProvider } from 'react-intl';

import type { Messages } from '../../helpers/getMessagesByLocale';

export interface I18nProviderProps {
  locale: string;
  messages: Messages;
  children: React.ReactNode;
}

export const I18nProvider: React.FC<I18nProviderProps> = (props) => <IntlProvider {...props} />;
