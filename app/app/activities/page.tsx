import React from 'react';

import { I18nText } from '@/components/common';
import { Typography } from '@/components/ui';
import { getActivityPublic, getCategory } from '@/utils/api';

import { ActivitiesCategories, ActivityList, ActivitySearchInput } from './(components)';
import { DEFAULT_ACTIVITIES_LIMIT, DEFAULT_ACTIVITIES_PAGE } from './(constants)';
import { Providers } from './providers';

interface ActivitiesPageProps {
  searchParams: SearchParams;
}

const ActivitiesPage = async ({ searchParams }: ActivitiesPageProps) => {
  const [getCategoryResponse, getActivityPublicResponse] = await Promise.all([
    getCategory({ config: { cache: 'no-store' } }),
    getActivityPublic({
      params: {
        limit: DEFAULT_ACTIVITIES_LIMIT,
        current: DEFAULT_ACTIVITIES_PAGE,
        ...searchParams
      },
      config: { cache: 'no-store' }
    })
  ]);

  return (
    <section className='container py-[108px]'>
      <Providers
        activitiesPage={{
          defaultActivitiesPage: {
            categories: getCategoryResponse,
            activities: getActivityPublicResponse.rows,
            pagination: getActivityPublicResponse.pagination
          }
        }}
      >
        <div className='flex-start flex'>
          <ActivitySearchInput />
        </div>
        <div className='mt-10 flex flex-col gap-5'>
          <div className='flex gap-2'>
            <Typography tag='h3' variant='h3' className='xsx:text-[25px]'>
              <I18nText path='landing.activities.title' />
            </Typography>
            {!!getActivityPublicResponse.rows.length && (
              <Typography tag='h3' variant='h3' className='text-muted-foreground'>
                {getActivityPublicResponse.pagination.count}
              </Typography>
            )}
          </div>

          <ActivitiesCategories />
          <ActivityList />
        </div>
      </Providers>
    </section>
  );
};

export default ActivitiesPage;
