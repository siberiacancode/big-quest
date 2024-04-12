import Image from 'next/image';

import thirdScreenImage from '@/assets/images/excursion/third.webp';
import { I18nText } from '@/components/common';
import { Button, Typography } from '@/components/ui';

interface ThirdScreenProps {
  onNextClick: () => void;
  onSkipClick: () => void;
}

export const ThirdScreen = ({ onNextClick, onSkipClick }: ThirdScreenProps) => (
  <div className='flex h-screen flex-col overflow-y-auto overflow-x-hidden pb-16'>
    <Image className='w-full xxs:mx-auto xxs:w-[400px]' src={thirdScreenImage} alt='' />
    <div className='flex flex-grow flex-col px-4'>
      <div className='mt-[40px] flex-grow px-[42px]'>
        <Typography variant='h4' className='text-center'>
          <I18nText path='auth.excursion.third.title' />
        </Typography>
        <Typography variant='sub3' className='mt-4 text-center text-muted-foreground'>
          <I18nText path='auth.excursion.third.description' />
        </Typography>
      </div>
      <div className='flex-shrink'>
        <div className='flex justify-center gap-2'>
          <div className='size-[7px] rounded-full bg-[#828282]' />
          <div className='size-[7px] rounded-full bg-[#E0E0E0]' />
          <div className='size-[7px] rounded-full bg-[#E0E0E0]' />
          <div className='size-[7px] rounded-full bg-[#E0E0E0]' />
        </div>
        <div className='mt-12 flex gap-[21px]'>
          <Button
            size='lg'
            variant='outline'
            onClick={onSkipClick}
            className='basis-1/2 border-taiga text-taiga hover:bg-taiga hover:text-white'
          >
            <I18nText path='button.skip' />
          </Button>
          <Button
            size='lg'
            variant='ghost'
            onClick={onNextClick}
            className='basis-1/2 bg-taiga text-white hover:bg-taiga-foreground'
          >
            <I18nText path='button.next' />
          </Button>
        </div>
      </div>
    </div>
  </div>
);
