'use client';

import { useCallback, useEffect, useState } from 'react';
import { ActivityCard } from 'app/(landing)/components/ActivitiesSection/components/ActivityCard/ActivityCard';
import Link from 'next/link';
import { useIntersectionObserver } from 'usehooks-ts';

import { ActivityCardSkeleton } from '@/components/ui';
import { getActivityPublic } from '@/utils/api';
import { ROUTES } from '@/utils/constants';
import { useSearchParams } from '@/utils/hooks';

interface ActivitiesListProps {
  initialActivities: ActivityResponse[];
  count: number;
}

const DEFAULT_ACTIVITIES_LIMIT = '2';
const DEFAULT_ACTIVITIES_PAGE = 1;

export const ActivitiesList = ({ initialActivities, count }: ActivitiesListProps) => {
  const { searchParams } = useSearchParams();
  const [activities, setActivities] = useState(initialActivities);
  const [page, setPage] = useState(DEFAULT_ACTIVITIES_PAGE);
  const [countParam, setCountParam] = useState(count);

  const { isIntersecting, ref } = useIntersectionObserver({
    threshold: 0.5
  });

  const loadMoreActivities = useCallback(async () => {
    const next = page + 1;
    const paramsObj = Object.fromEntries(searchParams);
    const { rows, pagination } = await getActivityPublic({
      config: {
        params: {
          limit: DEFAULT_ACTIVITIES_LIMIT,
          current: next.toString(),
          ...paramsObj
        },
        cache: 'force-cache'
      }
    });
    if (rows?.length) {
      setCountParam(pagination.count);
      setPage(next);
      setActivities((prev) => [...prev, ...rows]);
    }
    console.log('@loadMoreActivities next', next);
  }, [page, setActivities, searchParams]);

  useEffect(() => {
    if (isIntersecting) {
      loadMoreActivities();
    }
  }, [isIntersecting, loadMoreActivities]);

  return (
    <div className='grid grid-cols-4 gap-x-5 gap-y-12 xlx:grid-cols-3 lgx:grid-cols-2 smx:flex smx:flex-col smx:items-center smx:gap-y-8'>
      {activities &&
        activities.map((activity) => (
          <Link key={activity.id} href={ROUTES.LANDING.CATALOG(activity.id)}>
            <ActivityCard key={activity.id} {...activity} />
          </Link>
        ))}
      {countParam > activities.length &&
        activities.length > 0 &&
        Array(2)
          .fill({})
          .map((_, index) => <ActivityCardSkeleton key={index} ref={ref} />)}
    </div>
  );
};
