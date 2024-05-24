'use client';

import React from 'react';

import type { ScheduleResponse } from '@/api-types';
import { I18nText } from '@/components/common';
import { Button, RadioGroup, RadioGroupItem, Typography } from '@/components/ui';

import { ScheduleCard } from '../ScheduleCard/ScheduleCard';

import { useSelectScheduleSection } from './hooks/useSelectScheduleSection';

interface SelectScheduleSectionProps {
  userId: string;
}

export const SelectScheduleSection = ({ userId }: SelectScheduleSectionProps) => {
  const { state, functions } = useSelectScheduleSection({ userId });

  return (
    <section className='flex h-full flex-col'>
      <Typography variant='h7' className='text-gray-two'>
        <I18nText path='partner.confirmParticipation.activities' />
      </Typography>
      <RadioGroup
        value={state.selectedActivityId}
        onValueChange={functions.setSelectedActivityId}
        className='mt-6 flex grow flex-col gap-2 '
      >
        {(
          state.query?.data?.pages
            .flatMap((page) => page.rows)
            .filter((schedule) => schedule.activity) as RequiredFields<
            ScheduleResponse,
            'activity'
          >[]
        ).map((schedule) => (
          <div key={schedule.id}>
            <RadioGroupItem value={schedule.id} id={schedule.id} className='peer sr-only' />
            <ScheduleCard
              key={schedule.id}
              id={schedule.id}
              weekAndTime={schedule.weekAndTime}
              activity={schedule.activity}
            />
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
    </section>
  );
};
