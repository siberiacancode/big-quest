'use client';

import React from 'react';
import { ActivityCard } from 'app/(landing)/(components)/ActivitiesSection/components/ActivityCard/ActivityCard';
import { useIntersectionObserver } from 'usehooks-ts';

import { useSearchParams } from '@/utils/hooks';

import { getActivityPublicServerAction } from '../../actions/getPublicActivityServerAction';

interface ActivityListProps {
  initialActivities: ActivityResponse[];
}

const DEFAULT_ACTIVITIES_PAGE = 1;

export const ActivityList = ({ initialActivities }: ActivityListProps) => {
  const [activities, setActivities] = React.useState(initialActivities);
  const [page, setPage] = React.useState(DEFAULT_ACTIVITIES_PAGE);
  const { searchParams } = useSearchParams();

  const category = searchParams.get('category') ?? '';
  const name = searchParams.get('name') ?? '';

  console.log(initialActivities);

  const loadMoreActivities = async () => {
    const publicActivityResponse = await getActivityPublicServerAction({
      params: {
        limit: 10,
        current: page,
        category,
        name
      }
    });
    setActivities([...activities, ...publicActivityResponse.rows]);
    setPage(page + 1);
  };

  const { isIntersecting, ref } = useIntersectionObserver({
    threshold: 0.5
  });

  React.useEffect(() => {
    if (isIntersecting) {
      loadMoreActivities();
    }
  }, [isIntersecting]);

  React.useEffect(() => {
    setActivities(initialActivities);
    // setPage(DEFAULT_ACTIVITIES_PAGE);
  }, [initialActivities]);

  return (
    <>
      {activities.map((activity) => (
        <React.Fragment key={activity.id}>
          <ActivityCard {...activity} />
        </React.Fragment>
      ))}
      <div ref={ref} />
    </>
  );
};
