import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Toaster } from '@/components/ui/sonner';
import { getMessagesByLocale } from '@/utils/helpers';

import Providers from './providers';

import '@/assets/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
};

const TOASTER_DURATION = 5000;

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const locale = 'ru';
  const messages = getMessagesByLocale(locale);

  return (
    <html lang='en'>
      <body className={`min-h-screen bg-background font-sans antialiased ${inter.className}`}>
        <Providers
          i18n={{ locale, messages }}
          session={{ defaultSession: { isAuthenticated: true } }}
        >
          {children}
        </Providers>
        <Toaster duration={TOASTER_DURATION} />
      </body>
    </html>
  );
};

export default RootLayout;
