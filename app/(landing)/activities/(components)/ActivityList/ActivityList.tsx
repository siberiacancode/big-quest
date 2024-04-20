'use client';

import React from 'react';
import { ActivityCard } from 'app/(landing)/(components)/ActivitiesSection/components/ActivityCard/ActivityCard';
import { useIntersectionObserver } from 'usehooks-ts';

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
    <ul>
      {activities.map((activity) => (
        <li key={activity.id}>
          <ActivityCard {...activity} />
        </li>
      ))}
      <div ref={ref} />
    </ul>
  );
};
