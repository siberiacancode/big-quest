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

  console.log('activities on ActivityList', activities);

  return (
    <>
      <div className='mt-4 flex flex-col items-center justify-center gap-8 lgx:mt-1 md:grid md:grid-cols-2 md:justify-between lg:grid-cols-3'>
        {activities.map((activity) => (
          <React.Fragment key={activity.id}>
            <ActivityCard {...activity} />
          </React.Fragment>
        ))}
      </div>
      <div ref={ref} />
    </>
  );
};
