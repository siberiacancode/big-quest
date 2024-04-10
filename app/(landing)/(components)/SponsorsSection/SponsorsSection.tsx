import Image from 'next/image';

import portrait1 from '@/assets/images/landing/sponsors/portrait1.png';
import { I18nText } from '@/components/common';
import { Typography } from '@/components/ui';

export const SponsorsSection = () => (
  <section id='sponsors' className='container mt-28 flex flex-col items-center'>
    <Typography variant='h1' tag='h2' className='mdx:text-3xl xsx:text-[21px]'>
      <I18nText path='landing.sponsors.title' />
    </Typography>

    <div className='mt-16 grid grid-cols-2 gap-6 md:grid-cols-4'>
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
  </section>
);
