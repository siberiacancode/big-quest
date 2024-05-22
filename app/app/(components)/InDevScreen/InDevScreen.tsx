import Image from 'next/image';

import sleepImage from '@/assets/illustrations/sleep.webp';
import { I18nText } from '@/components/common';
import { Typography } from '@/components/ui';

interface InDevScreenProps {
  screen: 'rating' | 'support' | 'taiga';
}

export const InDevScreen = ({ screen }: InDevScreenProps) => (
  <div className='relative flex min-h-full flex-col items-center justify-center'>
    <Typography variant='h5' className='absolute left-0 top-0 self-start font-semibold'>
      <I18nText path={`app.${screen}.title`} />
    </Typography>
    <div className='flex h-full flex-col items-center justify-center'>
      <Image src={sleepImage} alt='' />
      <Typography variant='h5' className='mt-8'>
        <I18nText path='app.inDev.title' />
      </Typography>
      <Typography variant='sub6' className='mt-4'>
        <I18nText path='app.inDev.description' values={{ br: <br /> }} />
      </Typography>
    </div>
  </div>
);
