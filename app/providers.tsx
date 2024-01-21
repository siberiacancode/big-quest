'use client';

import type { I18nProviderProps } from '@/utils/contexts';
import { I18nProvider } from '@/utils/contexts';

interface ProvidersProps {
  children: React.ReactNode;
  i18n: Omit<I18nProviderProps, 'children'>;
}

const Providers: React.FC<ProvidersProps> = ({ children, i18n }) => (
  <I18nProvider {...i18n}>{children}</I18nProvider>
);

export default Providers;
