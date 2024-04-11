import { ActivityCard } from 'app/(landing)/components/ActivitiesSection/components/ActivityCard/ActivityCard';
import Link from 'next/link';

import { ROUTES } from '@/utils/constants';

import { getActivities } from '../../constants/actions';

interface ActivitiesListProps {
  category: string;
  search: string;
}

export const ActivitiesList = async ({ category, search }: ActivitiesListProps) => {
  const activities = await getActivities({ search, category });

  return (
    <div className='grid grid-cols-4 gap-x-5 gap-y-12 xlx:grid-cols-3 lgx:grid-cols-2 smx:flex smx:flex-col smx:items-center smx:gap-y-8'>
      {activities &&
        activities.map((activity) => (
          <Link key={activity.id} href={ROUTES.LANDING.ACTIVITIES(activity.id)}>
            <ActivityCard key={activity.id} {...activity} />
          </Link>
        ))}
    </div>
  );
};
