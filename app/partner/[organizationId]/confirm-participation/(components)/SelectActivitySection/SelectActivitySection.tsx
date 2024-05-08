'use client';

import { I18nText } from '@/components/common';
import { Button, RadioGroup, Typography } from '@/components/ui';

import { ActivityCard } from '../ActivityCard/ActivityCard';

import { useSelectActivitySection } from './hooks/useSelectActivitySection';

interface SelectActivitySectionProps {
  activities: OrganizationActivityFixMe[];
}

export const SelectActivitySection = ({ activities }: SelectActivitySectionProps) => {
  const { state, functions } = useSelectActivitySection();

  return (
    <div className='flex h-full flex-col'>
      <Typography variant='h7' className='text-gray-two'>
        <I18nText path='partner.confirmParticipation.activities' />
      </Typography>
      <RadioGroup
        value={state.selectedActivityId}
        onValueChange={functions.setSelectedActivityId}
        className='mt-6 flex grow flex-col gap-2 '
      >
        {activities.map((activity) => (
          <ActivityCard key={activity.id} {...activity} />
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
    </div>
  );
};
