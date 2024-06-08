import Link from 'next/link';

import { I18nText, Logo } from '@/components/common';
import { Typography } from '@/components/ui';
import { CITIES, ROUTES } from '@/utils/constants';

import { FooterCopyrightText } from './components/FooterCopyrightText/FooterCopyrightText';
import { SOCIAL_ICONS, SOCIAL_LINKS } from './constants';

interface FooterProps {
  cityId: (typeof CITIES)[keyof typeof CITIES]['id'];
}

export const Footer = ({ cityId }: FooterProps) => (
  <footer className='bg-taiga text-white'>
    <div className='container flex flex-wrap justify-between gap-6 py-10 2sm:flex-nowrap 2sm:py-20'>
      <div className='flex w-full flex-col'>
        <Logo href={ROUTES.LANDING.CITY(cityId)} fill='white' />
        <div className='mt-8 flex gap-3 lg:mt-14'>
          {Object.entries(SOCIAL_LINKS[cityId.toUpperCase()]).map(
            ([socialLinkKey, socialLinkValue]) => {
              const Icon = SOCIAL_ICONS[socialLinkKey];

              return (
                <Link href={socialLinkValue as URL}>
                  <Icon className='fill-black' width='32' height='32' />
                </Link>
              );
            }
          )}
        </div>
      </div>
      <div className='flex w-full flex-col'>
        <Typography tag='p' variant='h5' className='font-medium text-white'>
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
      <div className='w-full 2lg:max-w-[337px]'>
        <Typography tag='p' variant='h5' className='font-medium text-white'>
          <I18nText path='landing.footer.addresses' />
        </Typography>
        <nav className='mt-4'>
          <ul className='flex flex-col gap-3 lg:text-start'>
            {CITIES[cityId.toUpperCase()].headquarters}
          </ul>
        </nav>
      </div>
      <div className='w-full 2sm:text-end'>
        <Link href={ROUTES.ORG.AUTH} className='text-white hover:underline'>
          <I18nText path='button.organizationsEntrance' />
        </Link>
      </div>
    </div>
    <div className='container w-full border-t border-solid border-white py-[25px] text-center '>
      <Typography variant='body4' className='text-white'>
        <FooterCopyrightText />
      </Typography>
    </div>
  </footer>
);
