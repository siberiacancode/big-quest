'use client';

import { Breadcrumbs } from '@/components/breadcrumbs';
import { useI18n } from '@/utils/contexts';

export const ActivitiesBreadcrumbs = () => {
  const i18n = useI18n();

  return (
    <Breadcrumbs
      ids={{
        city: { hidden: true },
        activities: {
          value: i18n.formatMessage({ id: 'navigation.link.app.activities' }),
          clickable: true
        },
        activityId: { value: i18n.formatMessage({ id: 'navigation.link.app.activities.card' }) }
      }}
      className='p-3 pt-0 md:px-0'
    />
  );
};
