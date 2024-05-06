'use client';

import React from 'react';
import { Clock4Icon, UserRoundIcon } from 'lucide-react';
import { useIntersectionObserver } from 'usehooks-ts';

import { I18nText } from '@/components/common';
import {
  ActivityCard,
  ActivityCardCategory,
  ActivityCardContent,
  ActivityCardContentItem,
  ActivityCardDivider,
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
    <>
      <div className='mt-6 flex flex-col items-center justify-center gap-8 md:grid md:grid-cols-2 md:justify-between lg:grid-cols-3'>
        {activities.map((activity) => {
          const activityMedia = activity.media?.find((media) => media.flag === 'COVER');

          return (
            <ActivityCard key={activity.id}>
              {activityMedia && <ActivityCardImage src={activityMedia.url} alt={activity.name} />}
              {!activityMedia && (
                <div className='w-full rounded-[16px] bg-muted p-1/2 md:rounded-[30px]' />
              )}
              <ActivityCardHeader>
                <ActivityCardCategory>{activity.category}</ActivityCardCategory>
                <ActivityCardName>{activity.name}</ActivityCardName>
              </ActivityCardHeader>
              <ActivityCardDivider />
              <ActivityCardContent>
                <ActivityCardContentItem>
                  <UserRoundIcon className='size-6 stroke-muted-foreground' />
                  <I18nText
                    path='landing.activities.card.minimumAge'
                    values={{ age: activity.ageLimit[0] }}
                  />
                </ActivityCardContentItem>
                <ActivityCardContentItem>
                  <Clock4Icon className='size-6 stroke-muted-foreground' />
                  <I18nText
                    path='landing.activities.card.duration'
                    values={{ duration: activity.duration }}
                  />
                </ActivityCardContentItem>
              </ActivityCardContent>
            </ActivityCard>
          );
        })}
      </div>
      <div ref={ref} />
    </>
  );
};
