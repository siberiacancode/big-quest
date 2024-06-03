'use client';

import React from 'react';

import type { Activity } from '@/api-types';
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

  if (state.query.isFetching && !state.query.data?.pages) {
    return <SelectScheduleSectionLoading />;
  }

  return (
    <section className='flex h-full flex-col'>
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
            value={state.selectedActivityId}
            onValueChange={functions.setSelectedActivityId}
            className='mt-6 flex grow flex-col gap-2 '
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
                    activity={schedule.activity as Activity}
                  />
                </Label>
              </div>
            ))}
          </RadioGroup>
          <div ref={state.intersectionRef} />
          <Button
            variant='primary'
            onClick={functions.onConfirmParticipationClick}
            disabled={!state.selectedActivityId}
            loading={state.query.isFetchingNextPage}
            className='mt-6 w-full'
          >
            <I18nText path='button.mark' />
          </Button>
        </>
      )}
    </section>
  );
};
