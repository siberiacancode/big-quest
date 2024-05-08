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
    <>
      <Typography variant='h7' className='text-gray-two'>
        <I18nText path='partner.confirmParticipation.activities' />
      </Typography>
      <RadioGroup
        defaultValue='card'
        value={state.selectedActivityId}
        onValueChange={functions.setSelectedActivityId}
        className='mt-6 grow'
      >
        {activities.map((activity) => (
          <ActivityCard key={activity.id} {...activity} />
        ))}
      </RadioGroup>
      <Button
        size='lg'
        variant='primary'
        onClick={functions.onConfirmParticipationClick}
        className='mt-6 w-full'
      >
        <I18nText path='button.mark' />
      </Button>
    </>
  );
};
