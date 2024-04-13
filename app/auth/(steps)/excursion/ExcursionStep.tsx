'use client';

import Image from 'next/image';

import firstScreenImage from '@/assets/images/excursion/first.webp';
import fourthScreenImage from '@/assets/images/excursion/fourth.webp';
import secondScreenImage from '@/assets/images/excursion/second.webp';
import thirdScreenImage from '@/assets/images/excursion/third.webp';
import { I18nText } from '@/components/common';
import { Button, Typography } from '@/components/ui';
import { cn } from '@/lib/utils';

import { useExcursionStep } from './hooks/useExcursionStep';

export const ExcursionStep = () => {
  const { state, functions } = useExcursionStep();

  return (
    <div className='flex h-screen flex-col overflow-y-auto overflow-x-hidden pb-16'>
      {state.screen === 'first' && (
        <Image className='w-full xxs:mx-auto xxs:w-[400px]' src={firstScreenImage} alt='' />
      )}
      {state.screen === 'second' && (
        <Image className='w-full xxs:mx-auto xxs:w-[400px]' src={secondScreenImage} alt='' />
      )}
      {state.screen === 'third' && (
        <Image className='w-full xxs:mx-auto xxs:w-[400px]' src={thirdScreenImage} alt='' />
      )}
      {state.screen === 'fourth' && (
        <Image className='w-full xxs:mx-auto xxs:w-[400px]' src={fourthScreenImage} alt='' />
      )}

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
            <div
              className={cn('size-[7px] rounded-full bg-[#E0E0E0]', {
                'bg-[#828282]': state.screen === 'first'
              })}
            />
            <div
              className={cn('size-[7px] rounded-full bg-[#E0E0E0]', {
                'bg-[#828282]': state.screen === 'second'
              })}
            />
            <div
              className={cn('size-[7px] rounded-full bg-[#E0E0E0]', {
                'bg-[#828282]': state.screen === 'third'
              })}
            />
            <div
              className={cn('size-[7px] rounded-full bg-[#E0E0E0]', {
                'bg-[#828282]': state.screen === 'fourth'
              })}
            />
          </div>
          {state.screen === 'fourth' && (
            <Button
              size='lg'
              variant='ghost'
              onClick={functions.goToRegister}
              className='mt-12 w-full bg-taiga text-white hover:bg-taiga-foreground'
            >
              <I18nText path='button.continue' />
            </Button>
          )}
          {state.screen !== 'fourth' && (
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
                onClick={functions.setNextScreen}
                className='basis-1/2 bg-taiga text-white hover:bg-taiga-foreground'
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
