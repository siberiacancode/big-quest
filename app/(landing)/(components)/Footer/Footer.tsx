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
  <footer className='bg-taiga text-white '>
    <div className='container flex flex-wrap gap-28 py-20 lgx:justify-around'>
      <div className='mr-[83px] flex flex-shrink-0 flex-col'>
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
      <div>
        <Typography tag='p' className='text-xl font-medium text-white'>
          <I18nText path='landing.footer.navigation.title' />
        </Typography>
        <nav className='mt-4'>
          <ul className='flex flex-col gap-3'>
            <li>
              <Link
                className='hover:underline'
                href={{ pathname: ROUTES.LANDING.ROOT, hash: 'banner' }}
              >
                <I18nText path='landing.navigation.banner' />
              </Link>
            </li>
            <li>
              <Link
                className='hover:underline'
                href={{ pathname: ROUTES.LANDING.ROOT, hash: 'news' }}
              >
                <I18nText path='landing.navigation.news' />
              </Link>
            </li>
            <li>
              <Link
                className='hover:underline'
                href={{ pathname: ROUTES.LANDING.ROOT, hash: 'activities' }}
              >
                <I18nText path='landing.navigation.activities' />
              </Link>
            </li>
            <li>
              <Link
                className='hover:underline'
                href={{ pathname: ROUTES.LANDING.ROOT, hash: 'feedback' }}
              >
                <I18nText path='landing.navigation.feedback' />
              </Link>
            </li>
            <li>
              <Link
                className='hover:underline'
                href={{ pathname: ROUTES.LANDING.ROOT, hash: 'questions' }}
              >
                <I18nText path='landing.navigation.questions' />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className='lg:max-w-[337px]'>
        <Typography tag='p' className='text-xl font-medium text-white'>
          <I18nText path='landing.footer.addresses' />
        </Typography>
        <nav className='mt-4'>
          <ul className='flex flex-col gap-3'>
            адреса уточнить г. Междуреченск, ул. Пушкина, д. 28 (СК Звёздный)
          </ul>
        </nav>
      </div>
      <div className='flex-grow text-end'>
        <Link href={ROUTES.ORG.AUTH} className='text-white hover:underline'>
          <I18nText path='button.organizationsEntrance' />
        </Link>
      </div>
    </div>
    <div className='container border-t border-solid border-white py-[25px] lgx:mt-20 mdx:mt-10'>
      <Typography variant='body4' className='text-center text-white'>
        <FooterCopyrightText />
      </Typography>
    </div>
  </footer>
);
