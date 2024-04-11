'use client';

import { useCallback, useEffect, useState } from 'react';
import { ActivityCard } from 'app/(landing)/components/ActivitiesSection/components/ActivityCard/ActivityCard';
import Link from 'next/link';
import { useIntersectionObserver } from 'usehooks-ts';

import { ActivityCardSkeleton } from '@/components/ui';
import { ROUTES } from '@/utils/constants';

import { getActivities } from '../../constants/actions';
import type { Activity } from '../../constants/activities';

interface ActivitiesListProps {
  category: string;
  search: string;
  initialActivities: Activity[];
  count: number;
}

const DEFAULT_ACTIVITIES_LIMIT = 2;
const DEFAULT_ACTIVITIES_PAGE = 1;

export const ActivitiesList = ({
  category,
  search,
  initialActivities,
  count
}: ActivitiesListProps) => {
  const [activities, setActivities] = useState(initialActivities);
  const [page, setPage] = useState(DEFAULT_ACTIVITIES_PAGE);
  const [countParam, setCountParam] = useState(count);

  const { isIntersecting, ref } = useIntersectionObserver({
    threshold: 0.5
  });

  const loadMoreMovies = useCallback(async () => {
    const next = page + 1;
    const { activities, count } = await getActivities({
      search,
      category,
      page: next,
      limit: DEFAULT_ACTIVITIES_LIMIT
    });
    if (activities?.length) {
      setCountParam(count);
      setPage(next);
      setActivities((prev) => [...prev, ...activities]);
    }
  }, [category, page, setActivities, search]);

  useEffect(() => {
    if (isIntersecting) {
      loadMoreMovies();
    }
  }, [isIntersecting, loadMoreMovies, count, activities, search]);

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
