import Image from 'next/image';
import Link from 'next/link';

import leaveRequestImage from '@/assets/images/landing/leaveRequest.webp';
import { I18nText } from '@/components/common';
import { buttonVariants, Typography } from '@/components/ui';

const PARTNER_LANDING_LINK = 'http://bigquest.ru/landingforpartners';

export const LeaveRequestSection = () => (
  <section className='container relative my-10 flex justify-center text-center lg:text-start'>
    <div className='flex w-full max-w-96 flex-col items-center justify-center gap-3 md:max-w-none md:flex-row-reverse md:py-10 lg:justify-between'>
      <Image src={leaveRequestImage} alt='leaveRequest' className='md:w-[440px]' />
      <div className='flex flex-col gap-2 text-center md:gap-3 md:text-start'>
        <div className='flex flex-col gap-2'>
          <Typography
            variant='h1'
            tag='h2'
            className='text-[21px] text-gray-one md:text-3xl md:leading-10'
          >
            <I18nText path='landing.leaveRequest.title' values={{ br: <br /> }} />
          </Typography>
          <Typography tag='h2' variant='h1' className='text-[21px] text-taiga md:text-3xl'>
            <I18nText path='landing.leaveRequest.subtitle' />!
          </Typography>
        </div>

        <Link
          href={PARTNER_LANDING_LINK}
          className={buttonVariants({
            variant: 'primary',
            size: 'lg',
            className: 'mt-4 w-full px-[74px] py-7 text-[18px] md:w-fit'
          })}
        >
          <I18nText path='button.goToPartnerLanding' />
        </Link>
      </div>
    </div>
  </section>
);
