import Image from 'next/image';

import { I18nText } from '@/components/common';
import { RegisterOrganizationDialog } from '@/components/dialogs';
import { Typography } from '@/components/ui';

import { sponsors } from './constants/sponsors';

export const SponsorsSection = () => (
  <section id='sponsors' className='relative w-full bg-muted pb-[104px] pt-[72px]'>
    <div className='z-4 container mx-4 flex w-fit flex-col items-center rounded-[30px] bg-white px-[111px] py-[72px] 2mdx:px-[80px] 2smx:px-[24px]'>
      <div className='flex flex-col items-center'>
        <Typography variant='h1' tag='h2' className='mb-8 mdx:text-3xl xsx:text-[21px]'>
          <I18nText path='landing.sponsors.title' />
        </Typography>
        <Typography variant='body1' tag='p' className='text-center xsx:text-[21px]'>
          <I18nText path='landing.sponsors.description' />{' '}
        </Typography>
        <RegisterOrganizationDialog
          trigger={
            <Typography
              variant='body1'
              tag='p'
              className='text-center font-medium lowercase underline xsx:text-[21px]'
            >
              <I18nText path='landing.leaveRequest.subtitle' />
            </Typography>
          }
        />
      </div>

      <div className='mt-[72px] grid grid-cols-3 gap-12 2xl:grid-cols-6'>
        {sponsors.map((sponsor) => (
          <div key={sponsor.alt}>
            <Image
              src={sponsor.image}
              alt={sponsor.alt}
              className='size-[143px] 2mdx:size-[124px] 2smx:size-[80px]'
            />
          </div>
        ))}
      </div>
    </div>

    <div className='z-1 container absolute -left-4 top-5 rounded-[30px] border border-dashed border-taiga px-[111px]  py-[72px] 2mdx:px-[80px] 2smx:px-[24px]' />
  </section>
);
