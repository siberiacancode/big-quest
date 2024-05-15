'use client';

import React from 'react';

import { I18nText } from '@/components/common';
import { Button, RadioGroup, RadioGroupItem, Typography } from '@/components/ui';

import { ActivityCard } from '../ActivityCard/ActivityCard';

import { useSelectActivitySection } from './hooks/useSelectActivitySection';

interface SelectActivitySectionProps {
  userId: string;
  activities: OrganizationActivityFixMe[];
}

export const SelectActivitySection = ({ userId, activities }: SelectActivitySectionProps) => {
  const { state, functions } = useSelectActivitySection({ userId });

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
        {activities.map((activity) => (
          <div key={activity.id}>
            <RadioGroupItem value={activity.id} id={activity.id} className='peer sr-only' />
            <ActivityCard key={activity.id} {...activity} />
          </div>
        ))}
      </RadioGroup>
      <Button
        variant='primary'
        onClick={functions.onConfirmParticipationClick}
        disabled={!state.selectedActivityId}
        className='mt-6 w-full'
      >
        <I18nText path='button.mark' />
      </Button>
    </section>
  );
};
