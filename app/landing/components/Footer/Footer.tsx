import Image from 'next/image';
import Link from 'next/link';

import telegramIcon from '@/assets/icons/social/telegramBlack.svg';
import vkIcon from '@/assets/icons/social/vkBlack.svg';
import whatsappIcon from '@/assets/icons/social/whatsappBlack.svg';
import { I18nText, Logo } from '@/components/common';
import { Typography } from '@/components/ui';
import { ROUTES } from '@/utils/constants';

import { FooterCopyrightText } from './components/FooterCopyrightText/FooterCopyrightText';

export const Footer = () => (
  <footer className='bg-taiga-foreground px-16 pt-[90px] text-white mdx:px-11 mdx:pt-16 xsx:px-5 xsx:pt-10'>
    <div className='flex flex-wrap gap-7 lgx:justify-around'>
      <div className='flex flex-shrink-0 flex-col lg:basis-1/4'>
        <Logo fill='white' />
        <div className='mt-[57px] flex gap-3'>
          <Link href='https://vk.com/'>
            <Image src={vkIcon} alt='vk' />
          </Link>
          <Link href='https://web.telegram.org/'>
            <Image src={telegramIcon} alt='telegram' />
          </Link>
          <Link href='https://web.whatsapp.com/'>
            <Image src={whatsappIcon} alt='whatsapp' />
          </Link>
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
        <Link href={ROUTES.AUTH} className='text-white hover:underline'>
          <I18nText path='button.organizationsEntrance' />
        </Link>
      </div>
    </div>
    <div className='mt-[160px] border-t border-solid border-white py-[25px] lgx:mt-20 mdx:mt-10'>
      <Typography variant='body3' className='text-center'>
        <FooterCopyrightText />
      </Typography>
    </div>
  </footer>
);
