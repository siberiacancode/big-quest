import React from 'react';
import { PlusCircledIcon } from '@radix-ui/react-icons';

import { I18nText } from '@/components/common';
import { Button, Typography } from '@/components/ui';
import { getOrganizationActivitiesByOrganizationId } from '@/utils/api';

import { ActivityCard } from './components/ActivityCard/ActivityCard';
import { ActivityDialog } from './components/ActivityDialog/ActivityDialog';

interface OrganizationActivitiesPageProps {
  params: { organizationId: string };
}

const DEFAULT_ACTIVITIES_LIMIT = '10';
const DEFAULT_ACTIVITIES_PAGE = '1';

const OrganizationActivitiesPage = async ({ params }: OrganizationActivitiesPageProps) => {
  const organizationActivities = await getOrganizationActivitiesByOrganizationId({
    config: {
      params: {
        limit: DEFAULT_ACTIVITIES_LIMIT,
        current: DEFAULT_ACTIVITIES_PAGE,
        ...params
      }
    }
  });
  return (
    <>
      <div className='flex flex-wrap justify-between'>
        <Typography variant='h5' tag='h5'>
          <I18nText path='partners.activities.title' />
        </Typography>
        <ActivityDialog
          trigger={
            <Button variant='light' className='mx-2 p-5' size='sm'>
              <PlusCircledIcon className='mr-2 h-4 w-4' />
              <I18nText path='button.addActivities' />
            </Button>
          }
        />
      </div>
      <div className='mb-6 grid w-full grid-cols-5 gap-7 3xlx:grid-cols-4 xlx:grid-cols-3 mdx:grid-cols-2 2xsx:grid-cols-1'>
        {organizationActivities.rows.map((activity, index) => (
          <React.Fragment key={index}>
            <ActivityCard activity={activity} />
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default OrganizationActivitiesPage;
