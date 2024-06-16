'use client';

import { Breadcrumbs } from '@/components/breadcrumbs/Breadcrumbs';
import { useI18n } from '@/utils/contexts';

export const ActivitiesBreadcrumbs = () => {
  const i18n = useI18n();

  return (
    <Breadcrumbs
      ids={{
        app: { hidden: true },
        activities: {
          value: i18n.formatMessage({ id: 'navigation.link.app.activities' }),
          clickable: true
        },
        id: { value: i18n.formatMessage({ id: 'navigation.link.app.activities.card' }) },
        schedule: { hidden: true },
        addressId: {
          value: i18n.formatMessage({ id: 'navigation.link.app.activities.schedule' }),
          clickable: false
        }
      }}
    />
  );
};
