'use client';

import React from 'react';
import { useIntersectionObserver } from '@siberiacancode/reactuse';
import { Clock4Icon, UserRoundIcon } from 'lucide-react';

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

  const { ref } = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.5,
    onChange: ({ isIntersecting }) => {
      if (isIntersecting) loadActivitiesMore();
    }
  });

  return (
    <>
      <div className='mt-6 flex flex-col items-center justify-center gap-8 md:grid md:grid-cols-2 md:justify-between lg:grid-cols-3'>
        {activities.map((activity) => {
          const activityAvatar = activity.media.find((item) => item.flag === 'AVATAR')!;

          return (
            <ActivityCard key={activity.id}>
              <ActivityCardImage src={activityAvatar.url} alt={activity.name} />
              <ActivityCardHeader>
                <ActivityCardCategory>{activity.category.RU}</ActivityCardCategory>
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
