'use client';

import Link from 'next/link';

import { I18nText } from '@/components/common';

export const USE_TERMS_LINK = '';
export const PRIVACY_POLICY_LINK = '';

const UseTermsLink = (children: React.ReactNode) => (
  <Link href={USE_TERMS_LINK} className='whitespace-nowrap underline'>
    {children}
  </Link>
);

const PrivacyPolicyLink = (children: React.ReactNode) => (
  <Link href={PRIVACY_POLICY_LINK} className='whitespace-nowrap underline'>
    {children}
  </Link>
);

export const FooterCopyrightText = () => (
  <I18nText
    path='page.landing.footer.copyright'
    values={{ useTerms: UseTermsLink, privacyPolicy: PrivacyPolicyLink }}
  />
);
