'use client';

import Link from 'next/link';

import { I18nText } from '@/components/common';

export const USE_TERMS_LINK = 'https://bigquest.ru/regulations';

const UseTermsLink = (children: React.ReactNode) => (
  <Link href={USE_TERMS_LINK} className='whitespace-nowrap underline'>
    {children}
  </Link>
);

export const FooterCopyrightText = () => (
  <I18nText path='landing.footer.copyright' values={{ useTerms: UseTermsLink }} />
);
