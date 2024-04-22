import Image from 'next/image';

import { I18nText } from '@/components/common';
import { RegisterOrganizationDialog } from '@/components/dialogs';
import { Typography } from '@/components/ui';

import { sponsors } from './constants/sponsors';

export const SponsorsSection = () => (
  <section
    id='sponsors'
    className='relative w-full bg-muted pb-10 pt-[72px] xlx:pb-5 xl:pb-[104px]'
  >
    <div className='container relative z-10 flex w-fit flex-col rounded-[30px] bg-white px-[111px] py-[72px] 2mdx:px-[80px] mdx:mx-4 2smx:px-[24px]'>
      <div className='flex flex-col items-center'>
        <Typography variant='h1' tag='h2' className='mb-8 mdx:text-3xl xsx:text-[21px]'>
          <I18nText path='landing.sponsors.title' />
        </Typography>
        <Typography variant='body1' tag='p' className='text-center xsx:text-[21px]'>
          <I18nText path='landing.sponsors.description' />
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
      <div className='mx-auto mt-[72px] grid w-fit grid-cols-6 gap-5 xlx:mt-10 2mdx:grid-cols-3 xl:grid-cols-6 xl:gap-12'>
        {sponsors.map((sponsor) => (
          <div key={sponsor.alt}>
            <Image
              src={sponsor.image}
              alt={sponsor.alt}
              className='size-[143px] 2xlx:size-[120px] 2lgx:size-[100px] 2mdx:size-[124px] 2smx:size-[100px] xsx:size-[80px]'
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);
