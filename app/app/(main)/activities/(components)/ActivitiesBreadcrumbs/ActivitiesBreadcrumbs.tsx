'use client';

import { ChevronLeftIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Breadcrumbs } from '@/components/breadcrumbs';
import { buttonVariants } from '@/components/ui';
import { cn } from '@/lib/utils';
import { ROUTES } from '@/utils/constants';
import { useI18n } from '@/utils/contexts';

interface ActivitiesBreadcrumbsProps {
  activityId: string;
  isMobile: boolean;
}

export const ActivitiesBreadcrumbs = ({ isMobile, activityId }: ActivitiesBreadcrumbsProps) => {
  const i18n = useI18n();
  const paths = usePathname();
  const pathNames = paths.split('/').filter((path) => path);

  return (
    <>
      {!isMobile && (
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
      )}
      {isMobile && (
        <Link
          href={
            pathNames.length > 4
              ? ROUTES.APP.ACTIVITIES.ITEM(activityId)
              : ROUTES.APP.ACTIVITIES.ROOT
          }
          className={cn(
            'absolute left-4 top-8 z-10 !size-8 bg-white lg:hidden',
            buttonVariants({ variant: 'outline', size: 'icon' })
          )}
        >
          <ChevronLeftIcon />
        </Link>
      )}
    </>
  );
};
