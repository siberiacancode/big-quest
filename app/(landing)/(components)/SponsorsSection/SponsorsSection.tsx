import Image from 'next/image';

import { I18nText } from '@/components/common';
import { RegisterOrganizationDialog } from '@/components/dialogs';
import { Typography } from '@/components/ui';

import { sponsors } from './constants/sponsors';

export const SponsorsSection = () => (
  <section id='sponsors' className='relative w-full bg-muted pt-16 lg:pb-24'>
    <div className='container relative'>
      <div className='z-3 absolute -left-8 top-10 h-full w-full rounded-3xl border-2 border-dashed border-taiga-light xlx:-left-1 xlx:w-[94%] 2mdx:w-[93%] mdx:left-3 mdx:top-6 mdx:w-[88%] xxsx:top-4 xxsx:w-[85%]' />
      <div className='relative z-10 flex w-full flex-col rounded-3xl bg-white px-[111px] py-[72px] 2mdx:px-[80px] mdx:mx-2 mdx:rounded-[16px] 2smx:px-[24px] xsx:py-16 xxsx:py-12'>
        <div className='flex flex-col items-center gap-4'>
          <Typography variant='h1' tag='h2' className='text-[21px] lg:text-3xl'>
            <I18nText path='landing.sponsors.title' />
          </Typography>
          <div className='flex'>
            <Typography variant='body1' tag='p' className='text-center text-base md:text-[21px]'>
              <I18nText path='landing.sponsors.description' />{' '}
              <RegisterOrganizationDialog
                trigger={
                  <span className='text-center text-base font-medium lowercase underline md:text-[21px] lg:block'>
                    <I18nText path='landing.leaveRequest.subtitle' />
                  </span>
                }
              />
            </Typography>
          </div>
        </div>
        <div className='mx-auto mt-[72px] grid w-fit grid-cols-6 gap-5 xlx:mt-10 2mdx:grid-cols-3 xl:grid-cols-6 xl:gap-12'>
          {sponsors.map((sponsor) => (
            <div key={sponsor.alt}>
              <Image src={sponsor.image} alt={sponsor.alt} className='size-20 lg:size-32' />
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
