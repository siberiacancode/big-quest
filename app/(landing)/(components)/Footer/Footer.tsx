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
    <div className='container flex justify-between gap-28 py-20 xlx:gap-12 mdx:gap-8 2smx:flex-wrap 2smx:justify-around'>
      <div className='flex flex-col xsx:w-full xsx:items-center md:mr-[83px]'>
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
      <div className='xsx:flex xsx:w-full xsx:flex-col xsx:items-center'>
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
      <div className='2smx: 2lgx:max-w-[250px] xsx:w-full xsx:items-center 2lg:max-w-[337px]'>
        <Typography tag='p' className='text-xl font-medium text-white xsx:text-center'>
          <I18nText path='landing.footer.addresses' />
        </Typography>
        <nav className='mt-4'>
          <ul className='flex flex-col gap-3'>
            адреса уточнить г. Междуреченск, ул. Пушкина, д. 28 (СК Звёздный)
          </ul>
        </nav>
      </div>
      <div className='text-end xsx:h-fit xsx:text-center 2sm:flex-grow'>
        <Link href={ROUTES.ORG.AUTH} className='text-white hover:underline'>
          <I18nText path='button.organizationsEntrance' />
        </Link>
      </div>
    </div>
    <div className='container border-t border-solid border-white py-[25px]'>
      <Typography variant='body4' className='text-center text-white'>
        <FooterCopyrightText />
      </Typography>
    </div>
  </footer>
);
