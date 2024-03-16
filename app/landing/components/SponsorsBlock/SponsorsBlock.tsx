import Image from 'next/image';

import portrait1 from '@/assets/images/landing/sponsors/portrait1.png';
import { I18nText } from '@/components/common';
import { Typography } from '@/components/ui';

export const SponsorsBlock = () => {
  return (
    <div className='flex flex-col items-center px-10 pb-20 pt-14 mdx:pb-14 mdx:pt-8'>
      <Typography variant='h1' tag='h2' className='mdx:text-[25px]'>
        <I18nText path='landing.sponsors.title' />
      </Typography>
      <div className='mt-16 grid grid-cols-4 gap-12 mdx:mt-7 mdx:grid-cols-3 mdx:gap-7 xsx:grid-cols-2'>
        <div>
          <Image src={portrait1} alt='sponsor' />
        </div>
        <div>
          <Image src={portrait1} alt='sponsor' />
        </div>
        <div>
          <Image src={portrait1} alt='sponsor' />
        </div>
        <div>
          <Image src={portrait1} alt='sponsor' />
        </div>
        <div>
          <Image src={portrait1} alt='sponsor' />
        </div>
        <div>
          <Image src={portrait1} alt='sponsor' />
        </div>
        <div>
          <Image src={portrait1} alt='sponsor' />
        </div>
        <div>
          <Image src={portrait1} alt='sponsor' />
        </div>
      </div>
    </div>
  );
};
