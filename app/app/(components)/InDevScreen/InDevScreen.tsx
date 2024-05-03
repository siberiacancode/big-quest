import Image from 'next/image';

import sleepImage from '@/assets/images/sleep.webp';
import { I18nText } from '@/components/common';
import { Typography } from '@/components/ui';

interface UnavailableScreenProps {
  screen: 'rating' | 'support' | 'taiga';
}

export const InDevScreen = ({ screen }: UnavailableScreenProps) => (
  <div className='relative flex min-h-full flex-col items-center justify-center'>
    <Typography variant='h5' className='absolute left-0 top-0 self-start font-semibold'>
      <I18nText path={`app.${screen}.title`} />
    </Typography>
    <div className='flex h-full flex-col items-center justify-center'>
      <Image src={sleepImage} alt='' />
      <Typography variant='h5' className='mt-8'>
        <I18nText path='app.inDev.title' />
      </Typography>
      <Typography variant='sub3' className='mt-4 text-muted-foreground'>
        <I18nText path='app.inDev.description' values={{ br: <br /> }} />
      </Typography>
    </div>
  </div>
);
