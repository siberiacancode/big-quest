'use client';

import type { I18nProviderProps, ThemeProviderProps } from '@/utils/contexts';
import { I18nProvider, ThemeProvider } from '@/utils/contexts';

interface ProvidersProps {
  children: React.ReactNode;
  i18n: Omit<I18nProviderProps, 'children'>;
  theme: Omit<ThemeProviderProps, 'children'>;
}

const Providers: React.FC<ProvidersProps> = ({ children, i18n, theme }) => (
  <I18nProvider {...i18n}>
    <ThemeProvider {...theme}>{children}</ThemeProvider>
  </I18nProvider>
);

export default Providers;
