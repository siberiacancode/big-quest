import { getActivityPublic } from '@/utils/api';
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
  const getActivityPublicResponse = await getActivityPublic({
    params: {
      city: cityId,
      limit: DEFAULT_ACTIVITIES_LIMIT,
      current: DEFAULT_ACTIVITIES_PAGE
    },
    config: {
      next: { revalidate: ACTIVITIES_REVALIDATION_TIME }
    }
  });

  if (!getActivityPublicResponse.rows.length) return null;

  return (
    <section className='container my-[72px] min-h-[650px] px-0 xxsx:my-12 xxsx:min-h-[300px]'>
      <ActivitiesMap cityId={cityId} activities={getActivityPublicResponse.rows} />
    </section>
  );
};
