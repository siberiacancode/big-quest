import { I18nText } from '@/components/common';

export const AuthFooter = () => (
  <footer className='m-3 flex flex-wrap justify-center divide-x divide-solid divide-gray-700 text-xs *:px-1 mdx:divide-x-0'>
    <span>
      Copyright © {new Date().getFullYear()} <I18nText path='app.title' />
    </span>
    <span className='text-muted-foreground underline'>
      <I18nText path='org.auth.footer.siteRules' />
    </span>
    <span className='text-muted-foreground underline'>
      <I18nText path='org.auth.footer.privacyPolicy' />
    </span>
  </footer>
);
