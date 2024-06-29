import Image from 'next/image';

import { I18nText } from '@/components/common';
import { RegisterOrganizationDialog } from '@/components/dialogs';
import { Typography } from '@/components/ui';

import { sponsors } from './constants/sponsors';

export const SponsorsSection = () => (
  <section id='sponsors' className='relative w-full bg-muted pt-16 lg:pb-24'>
    <div className='container relative'>
      <div className='z-3 absolute left-3 top-4 h-full w-[95%] rounded-3xl border-2 border-dashed border-taiga-light md:left-3 md:top-6 xl:-left-1' />
      <div className='relative z-10 mx-2 w-full rounded-2xl bg-white px-6 py-12 md:rounded-3xl lg:py-[72px]'>
        <div className='flex flex-col items-center gap-8'>
          <Typography variant='h1' tag='h2' className='text-[21px] lg:text-4xl'>
            <I18nText path='page.landing.sponsors.title' />
          </Typography>
          <div className='flex max-w-[656px]'>
            <Typography variant='body1' tag='p' className='text-center text-base md:text-[21px]'>
              <I18nText path='page.landing.sponsors.description' />{' '}
              <RegisterOrganizationDialog
                trigger={
                  <span className='text-center text-base font-medium lowercase underline md:text-[21px]'>
                    <I18nText path='page.landing.leaveRequest.subtitle' />
                  </span>
                }
              />
            </Typography>
          </div>
        </div>
        <div className='mx-auto mt-10 grid w-fit grid-cols-3 gap-5 2md:grid-cols-6 xl:mt-[72px] xl:grid-cols-6 xl:gap-12'>
          {sponsors.map((sponsor) => (
            <Image
              key={sponsor.alt}
              src={sponsor.image}
              alt={sponsor.alt}
              className='size-20 lg:size-36'
            />
          ))}
        </div>
      </div>
    </div>
  </section>
);
