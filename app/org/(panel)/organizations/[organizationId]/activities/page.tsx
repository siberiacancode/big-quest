import React from 'react';

import { I18nText } from '@/components/common';
import { Typography } from '@/components/ui';
import { getActivity } from '@/utils/api';

import { ActivityCard } from './(components)/ActivityCard/ActivityCard';
import { AddActivityDialog } from './(components)/AddActivityDialog/AddAddressDialog';

interface OrganizationActivitiesPageProps {
  params: { organizationId: string };
}

const DEFAULT_ACTIVITIES_LIMIT = '10';
const DEFAULT_ACTIVITIES_PAGE = '1';

const OrganizationActivitiesPage = async ({ params }: OrganizationActivitiesPageProps) => {
  const getActivityResponse = await getActivity({
    config: {
      params: {
        limit: DEFAULT_ACTIVITIES_LIMIT,
        current: DEFAULT_ACTIVITIES_PAGE,
        ...params
      },
      cache: 'no-store'
    }
  });

  return (
    <>
      <div className='flex flex-wrap justify-between gap-3'>
        <Typography variant='h5' tag='h5'>
          <I18nText path='partners.activities.title' />
        </Typography>
        <AddActivityDialog />
      </div>
      <div className='mb-6 grid w-full grid-cols-5 gap-7 3xlx:grid-cols-4 xlx:grid-cols-3 mdx:grid-cols-2 2xsx:grid-cols-1'>
        {getActivityResponse.rows.map((activity) => (
          <React.Fragment key={activity.id}>
            <ActivityCard activity={activity} />
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default OrganizationActivitiesPage;
