import React from 'react';

import { I18nText } from '@/components/common';
import { Typography } from '@/components/ui';
import { getActivity } from '@/utils/api';

import { OrganizationActivityCard } from './(components)/ActivityCard/OrganizationActivityCard';
import { AddActivityDialog } from './(components)/AddActivityDialog/AddAddressDialog';

const DEFAULT_ACTIVITIES_LIMIT = 10;
const DEFAULT_ACTIVITIES_PAGE = 1;

interface OrganizationActivitiesPageProps {
  params: { organizationId: string };
}

const OrganizationActivitiesPage = async ({ params }: OrganizationActivitiesPageProps) => {
  const getActivityResponse = await getActivity({
    params: {
      limit: DEFAULT_ACTIVITIES_LIMIT,
      current: DEFAULT_ACTIVITIES_PAGE,
      ...params
    },
    config: {
      cache: 'no-store'
    }
  });

  console.log('@', getActivityResponse);

  return (
    <>
      <div className='flex flex-wrap justify-between gap-3 lgx:p-4'>
        <Typography variant='h5' tag='h5'>
          <I18nText path='partners.activities.title' />
        </Typography>
        <AddActivityDialog />
      </div>
      <div className='grid w-full grid-cols-5 gap-7 3xlx:grid-cols-4 xlx:grid-cols-3 lgx:p-4 mdx:grid-cols-2 2xsx:grid-cols-1'>
        {getActivityResponse.rows.map((activity) => (
          <OrganizationActivityCard activity={activity} />
        ))}
      </div>
    </>
  );
};

export default OrganizationActivitiesPage;
