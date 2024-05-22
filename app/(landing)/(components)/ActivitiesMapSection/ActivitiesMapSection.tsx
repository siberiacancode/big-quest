import { I18nText } from '@/components/common';
import { Typography } from '@/components/ui';
import { getActivity } from '@/utils/api';
import type { CITIES } from '@/utils/constants';

import {
  ACTIVITIES_REVALIDATION_TIME,
  DEFAULT_ACTIVITIES_LIMIT,
  DEFAULT_ACTIVITIES_PAGE
} from '../../(constants)';

import { ActivitiesMap } from './components/ActivitiesMap/ActivitiesMap';

interface ActivitiesMapSectionProps {
  cityId: (typeof CITIES)[keyof typeof CITIES]['id'];
}

export const ActivitiesMapSection = async ({ cityId }: ActivitiesMapSectionProps) => {
  const getActivityResponse = await getActivity({
    params: {
      city: cityId,
      limit: DEFAULT_ACTIVITIES_LIMIT,
      current: DEFAULT_ACTIVITIES_PAGE
    },
    config: {
      next: { revalidate: ACTIVITIES_REVALIDATION_TIME }
    }
  });

  if (!getActivityResponse.rows.length) return null;

  return (
    <section className='container px-0 py-12 smx:pt-0'>
      <Typography tag='h2' variant='h6' className='text-center lg:text-4xl'>
        <I18nText path='landing.activitiesMap.title' />
      </Typography>

      <ActivitiesMap cityId={cityId} activities={getActivityResponse.rows} />
    </section>
  );
};
