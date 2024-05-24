'use client';

import React from 'react';
import { Clock4Icon, UserRoundIcon } from 'lucide-react';
import Link from 'next/link';
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
  ActivityCardName,
  Typography
} from '@/components/ui';
import { ROUTES } from '@/utils/constants';

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
      <div className='grid grid-cols-2 gap-x-2 gap-y-5 lgx:w-full md:grid-cols-3  md:gap-x-3 md:gap-y-8'>
        {activities.map((activity) => (
          <Link href={`${ROUTES.APP.ACTIVITIES}/${activity.id}`}>
            <ActivityCard key={activity.id}>
              {/* Временное решение до мержа релиза */}
              <ActivityCardImage
                src={activity.media[0].url}
                alt={activity.name}
                className='2md:rounded-[8px]'
              />
              <ActivityCardHeader>
                <ActivityCardCategory>{activity.category}</ActivityCardCategory>
                <ActivityCardName>{activity.name}</ActivityCardName>
              </ActivityCardHeader>
              <ActivityCardDivider />
              <ActivityCardContent>
                <ActivityCardContentItem>
                  <UserRoundIcon className='size-3 stroke-muted-foreground 2xs:size-5' />
                  <Typography
                    tag='p'
                    variant='body4'
                    className='text-muted-foreground 2xs:text-base'
                  >
                    <I18nText
                      path='landing.activities.card.minimumAge'
                      values={{ age: activity.ageLimit[0] }}
                    />
                  </Typography>
                </ActivityCardContentItem>
                <ActivityCardContentItem>
                  <Clock4Icon className='size-3 stroke-muted-foreground 2xs:size-5' />
                  <Typography
                    tag='p'
                    variant='body4'
                    className='text-muted-foreground 2xs:text-base'
                  >
                    <I18nText
                      path='landing.activities.card.duration'
                      values={{ duration: activity.duration }}
                    />
                  </Typography>
                </ActivityCardContentItem>
              </ActivityCardContent>
            </ActivityCard>
          </Link>
        ))}
      </div>
      <div ref={ref} />
    </>
  );
};
