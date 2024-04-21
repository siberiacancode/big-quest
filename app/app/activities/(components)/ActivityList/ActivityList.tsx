'use client';

import React from 'react';
import { useIntersectionObserver } from 'usehooks-ts';

import {
  ActivityCard,
  ActivityCardHeader,
  ActivityCardImage,
  ActivityCardName
} from '@/components/ui';

import { useActivitiesPage } from '../../(contexts)/activitiesPage';

export const ActivityList = () => {
  const { activities, loadActivitiesMore } = useActivitiesPage();

  const { isIntersecting, ref } = useIntersectionObserver({
    threshold: 0.5
  });

  React.useEffect(() => {
    if (isIntersecting) loadActivitiesMore();
  }, [isIntersecting]);

  return (
    <ul className='mt-16 flex flex-col items-center justify-center gap-8 md:grid md:grid-cols-2 md:justify-between lg:grid-cols-3'>
      {activities.map((activity) => (
        <li key={activity.id}>
          <ActivityCard>
            <ActivityCardImage src={activity.cover} alt={activity.name} />
            <ActivityCardHeader>
              <ActivityCardName>{activity.name}</ActivityCardName>
            </ActivityCardHeader>
          </ActivityCard>
        </li>
      ))}
      <div ref={ref} />
    </ul>
  );
};
