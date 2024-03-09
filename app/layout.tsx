import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { cookies } from 'next/headers';

import { Toaster } from '@/components/ui/sonner';
import { generateServerHeadersInterceptor } from '@/utils/api/interceptors/generateServerHeadersInterceptor';
import { COOKIES } from '@/utils/constants';
import { getMessagesByLocale } from '@/utils/helpers';
import { getDefaultTheme } from '@/utils/helpers/getDefaultTheme';

import Providers from './providers';

import '@/assets/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
};

const TOASTER_DURATION = 5000;

generateServerHeadersInterceptor();

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  const locale = 'ru';
  const messages = getMessagesByLocale(locale);
  const defaultTheme = getDefaultTheme();

  const userSessionCookie = cookies().get(COOKIES.USER_SESSION);

  return (
    <html className={defaultTheme} lang='en'>
      <body className={`min-h-screen bg-background font-sans antialiased ${inter.className}`}>
        <Providers
          user={{
            defaultUser: userSessionCookie?.value ? JSON.parse(userSessionCookie.value) : null
          }}
          i18n={{ locale, messages }}
          session={{ defaultSession: { isAuthenticated: !!userSessionCookie?.value } }}
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
