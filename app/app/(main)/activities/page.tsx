import React from 'react';
import type { Metadata } from 'next';

import { I18nText } from '@/components/common';
import { Typography } from '@/components/ui';
import { getActivity, getCategory } from '@/utils/api';
import { getI18n } from '@/utils/contexts/i18n/getI18n';

import { ActivitiesCategories, ActivityList, ActivitySearchInput } from './(components)';
import { DEFAULT_ACTIVITIES_LIMIT, DEFAULT_ACTIVITIES_PAGE } from './(constants)';
import { Providers } from './providers';

interface ActivitiesPageProps {
  searchParams: SearchParams;
}

export const generateMetadata = async (): Promise<Metadata> => {
  const i18n = await getI18n('ru');

  return {
    title: `${i18n.formatMessage({ id: 'metadata.page.default' })} | ${i18n.formatMessage({ id: 'metadata.page.app.activiites' })}`,
    description: `${i18n.formatMessage({ id: 'metadata.page.default' })} | ${i18n.formatMessage({ id: 'metadata.page.app.activiites' })}`
  };
};

const ActivitiesPage = async ({ searchParams }: ActivitiesPageProps) => {
  const [getCategoryResponse, getActivityResponse] = await Promise.all([
    getCategory({ config: { cache: 'no-store' } }),
    getActivity({
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
            categories: getCategoryResponse.rows,
            activities: getActivityResponse.rows,
            pagination: getActivityResponse.pagination
          }
        }}
      >
        <div className='mt-10 flex flex-col gap-5'>
          <div className='flex gap-2'>
            <Typography variant='h3' tag='h3'>
              <I18nText path='landing.activities.title' />
            </Typography>
            {!!getActivityResponse.rows.length && (
              <Typography variant='h3' tag='h3' className='text-muted-foreground'>
                {getActivityResponse.pagination.count}
              </Typography>
            )}
          </div>
          <div className='flex items-baseline justify-between space-y-3 lgx:flex-col'>
            <ActivitiesCategories />
            <ActivitySearchInput />
          </div>
          <ActivityList />
        </div>
      </Providers>
    </section>
  );
};

export default ActivitiesPage;
