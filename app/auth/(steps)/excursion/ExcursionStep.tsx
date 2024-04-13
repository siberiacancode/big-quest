'use client';

import Image from 'next/image';

import { I18nText } from '@/components/common';
import { Button, Typography } from '@/components/ui';
import { cn } from '@/lib/utils';

import { EXCURSION_IMAGES } from './constants/excursionImages';
import { useExcursionStep } from './hooks/useExcursionStep';

export const ExcursionStep = () => {
  const { state, functions } = useExcursionStep();

  return (
    <div className='flex h-screen flex-col overflow-y-auto overflow-x-hidden pb-16'>
      <Image
        className='xxs:mx-auto xxs:w-[400px] w-full'
        src={EXCURSION_IMAGES[state.screen]}
        alt=''
      />

      <div className='flex flex-grow flex-col px-4'>
        <div className='mt-[40px] flex-grow px-[42px]'>
          <Typography variant='h4' className='text-center'>
            <I18nText path={`auth.excursion.${state.screen}.title`} />
          </Typography>
          <Typography variant='sub3' className='mt-4 text-center text-muted-foreground'>
            <I18nText path={`auth.excursion.${state.screen}.description`} />
          </Typography>
        </div>
        <div className='flex-shrink'>
          <div className='flex justify-center gap-2'>
            {Array.from({ length: 4 }, (_, index) => (
              <div
                key={index}
                className={cn('size-[7px] rounded-full bg-[#E0E0E0]', {
                  'bg-[#828282]': state.screen === index
                })}
              />
            ))}
          </div>
          {state.screen === 3 && (
            <Button
              size='lg'
              variant='ghost'
              onClick={functions.goToRegister}
              className='mt-12 w-full bg-taiga text-white hover:bg-taiga-foreground hover:text-white'
            >
              <I18nText path='button.continue' />
            </Button>
          )}
          {state.screen !== 3 && (
            <div className='mt-12 flex gap-[21px]'>
              <Button
                size='lg'
                variant='outline'
                onClick={functions.goToRegister}
                className='basis-1/2 border-taiga text-taiga hover:bg-taiga hover:text-white'
              >
                <I18nText path='button.skip' />
              </Button>
              <Button
                size='lg'
                variant='ghost'
                onClick={functions.onNext}
                className='basis-1/2 bg-taiga text-white hover:bg-taiga-foreground hover:text-white'
              >
                <I18nText path='button.next' />
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
