import type { Metadata } from 'next';
import { Rubik as FontSans } from 'next/font/google';

import { Toaster } from '@/components/ui/sonner';
import { getMessagesByLocale } from '@/utils/helpers';
import { getDefaultTheme, getUserSession } from '@/utils/helpers/server';

import { Providers } from './providers';

import '@/assets/styles/globals.css';

const fontSans = FontSans({
  weight: ['300', '400', '500', '600', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-sans'
});

export const metadata: Metadata = {
  title: 'Большой Квест',
  description: 'Большой Квест'
};

const TOASTER_DURATION = 5000;

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  const locale = 'ru';
  const messages = getMessagesByLocale(locale);
  const defaultTheme = getDefaultTheme();

  const userSession = getUserSession();

  return (
    <html className={defaultTheme} lang='en'>
      <body className={`min-h-screen bg-background font-sans antialiased ${fontSans.variable}`}>
        <Providers
          user={{
            defaultUser: userSession
          }}
          i18n={{ locale, messages }}
          session={{ defaultSession: { isAuthenticated: !!userSession } }}
          theme={{ defaultTheme }}
        >
          {children}
        </Providers>
        <Toaster duration={TOASTER_DURATION} />
      </body>
    </html>
  );
};

export default RootLayout;
