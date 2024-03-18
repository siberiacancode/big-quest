'use client';

import Link from 'next/link';

import { I18nText } from '@/components/common';

import { PRIVACY_POLICY_LINK, USE_TERMS_LINK } from './constants/copyrightLinks';

const getUseTermsLink = (children: React.ReactNode) => (
  <Link href={USE_TERMS_LINK} className='whitespace-nowrap underline'>
    {children}
  </Link>
);

const getPrivacyPolicyLink = (children: React.ReactNode) => (
  <Link href={PRIVACY_POLICY_LINK} className='whitespace-nowrap underline'>
    {children}
  </Link>
);

export const FooterCopyrightText = () => (
  <I18nText
    path='landing.footer.copyright'
    values={{ useTerms: getUseTermsLink, privacyPolicy: getPrivacyPolicyLink }}
  />
);
