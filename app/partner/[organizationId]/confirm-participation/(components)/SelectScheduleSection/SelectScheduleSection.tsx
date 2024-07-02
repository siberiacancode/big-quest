'use client';

import React from 'react';

import { I18nText } from '@/components/common';
import { Button, Label, RadioGroup, RadioGroupItem, Typography } from '@/components/ui';

import { ScheduleCard } from '../ScheduleCard/ScheduleCard';

import { useSelectScheduleSection } from './hooks/useSelectScheduleSection';
import { SelectScheduleSectionLoading } from './SelectScheduleSectionLoading';

interface SelectScheduleSectionProps {
  userId: string;
}

export const SelectScheduleSection = ({ userId }: SelectScheduleSectionProps) => {
  const { state, functions } = useSelectScheduleSection({ userId });

  if (state.isLoading && !state.activities.length) {
    return <SelectScheduleSectionLoading />;
  }

  return (
    <section className='flex flex-col'>
      {!state.activities.length && (
        <Typography variant='h7' className='text-gray-two'>
          <I18nText path='partner.confirmParticipation.noActivities' />
        </Typography>
      )}
      {!!state.activities.length && (
        <>
          <Typography variant='h7' className='text-gray-two'>
            <I18nText path='partner.confirmParticipation.activities' />
          </Typography>

          <RadioGroup
            value={state.selectedScheduleId}
            onValueChange={functions.setSelectedScheduleId}
            className='mt-6 flex max-h-[300px] grow flex-col gap-2 overflow-y-auto'
          >
            {state.activities.map((schedule) => (
              <div key={schedule.id}>
                <RadioGroupItem value={schedule.id} id={schedule.id} className='peer sr-only' />
                <Label
                  htmlFor={schedule.id}
                  className='block rounded-md border-2 border-inherit peer-data-[state=checked]:border-[#ABCF38] [&:has([data-state=checked])]:border-[#ABCF38]'
                >
                  <ScheduleCard
                    key={schedule.id}
                    weekAndTime={schedule.weekAndTime}
                    activity={schedule.activity!}
                  />
                </Label>
              </div>
            ))}
            <div ref={state.intersectionRef} />
          </RadioGroup>
          <Button
            variant='primary'
            onClick={functions.onConfirmParticipationClick}
            disabled={!state.selectedScheduleId}
            loading={state.isLoading || state.isLoadingMore}
            className='mt-6 w-full'
          >
            <I18nText path='button.mark' />
          </Button>
        </>
      )}
    </section>
  );
};
