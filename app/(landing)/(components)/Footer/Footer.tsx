import Link from 'next/link';

import { I18nText, Logo } from '@/components/common';
import { Typography } from '@/components/ui';
import type { CITIES } from '@/utils/constants';
import { ROUTES } from '@/utils/constants';

import { FooterCopyrightText } from './components/FooterCopyrightText/FooterCopyrightText';
import { SOCIAL_ICONS, SOCIAL_LINKS } from './constants';

interface FooterProps {
  cityId: (typeof CITIES)[keyof typeof CITIES]['id'];
}

export const Footer = ({ cityId }: FooterProps) => (
  <footer className='bg-taiga-foreground pt-12 text-white '>
    <div className='container flex flex-wrap gap-7 lgx:justify-around'>
      <div className='flex flex-shrink-0 flex-col lg:basis-1/4'>
        <Logo href={ROUTES.LANDING.CITY(cityId)} fill='white' />
        <div className='mt-14 flex gap-3'>
          {Object.entries(SOCIAL_LINKS[cityId.toUpperCase()]).map(
            ([socialLinkKey, socialLinkValue]) => {
              const Icon = SOCIAL_ICONS[socialLinkKey];

              return (
                <Link href={socialLinkValue}>
                  <Icon className='fill-black' width='32' height='32' />
                </Link>
              );
            }
          )}
        </div>
      </div>
      <div className='lg:flex-grow'>
        <Typography tag='p' className='text-xl font-medium text-white'>
          <I18nText path='landing.footer.navigation.title' />
        </Typography>
        <nav className='mt-4'>
          <ul className='flex flex-col gap-3'>
            <li>
              <Link
                className='hover:underline'
                href={{ pathname: ROUTES.LANDING.ROOT, hash: 'news' }}
              >
                <I18nText path='landing.footer.navigation.news' />
              </Link>
            </li>
            <li>
              <Link
                className='hover:underline'
                href={{ pathname: ROUTES.LANDING.ROOT, hash: 'activities' }}
              >
                <I18nText path='landing.footer.navigation.activities' />
              </Link>
            </li>
            <li>
              <Link
                className='hover:underline'
                href={{ pathname: ROUTES.LANDING.ROOT, hash: 'sponsors' }}
              >
                <I18nText path='landing.footer.navigation.sponsors' />
              </Link>
            </li>
            <li>
              <Link
                className='hover:underline'
                href={{ pathname: ROUTES.LANDING.ROOT, hash: 'feedback' }}
              >
                <I18nText path='landing.footer.navigation.feedback' />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className='flex-grow-0'>
        <Link href={ROUTES.ORG.AUTH} className='text-white hover:underline'>
          <I18nText path='button.organizationsEntrance' />
        </Link>
      </div>
    </div>
    <div className='mt-[160px] border-t border-solid border-white py-[25px] lgx:mt-20 mdx:mt-10'>
      <Typography variant='body3' className='text-center text-white'>
        <FooterCopyrightText />
      </Typography>
    </div>
  </footer>
);
