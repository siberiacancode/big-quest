import React from 'react';
import type { Metadata } from 'next';

import { I18nText } from '@/components/common';
import { Typography } from '@/components/ui';
import { getActivity, getCategories } from '@/utils/api';

import { ActivitiesCategories, ActivityList, ActivitySearchInput } from './(components)';
import {
  DEFAULT_ACTIVITIES_LIMIT,
  DEFAULT_ACTIVITIES_PAGE,
  DEFAULT_CATEGORIES_LIMIT,
  DEFAULT_CATEGORIES_PAGE
} from './(constants)';
import { Providers } from './providers';

export const metadata: Metadata = {
  title: 'Большой Квест | Активности',
  description: 'Большой квест | Активности'
};

interface ActivitiesPageProps {
  searchParams: SearchParams;
}

const ActivitiesPage = async ({ searchParams }: ActivitiesPageProps) => {
  const [getCategoriesResponse, getActivityResponse] = await Promise.all([
    getCategories({
      params: { limit: DEFAULT_CATEGORIES_LIMIT, current: DEFAULT_CATEGORIES_PAGE },
      config: { cache: 'no-store' }
    }),
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
    <section className='container bg-background xs:p-6 2sm:rounded-[8px]'>
      <Providers
        activitiesPage={{
          defaultActivitiesPage: {
            categories: getCategoriesResponse.rows,
            activities: getActivityResponse.rows,
            pagination: getActivityResponse.pagination
          }
        }}
      >
        <div className='flex flex-col gap-5'>
          <div className='flex items-center gap-2'>
            <Typography tag='h3' variant='h7' className='xsx:text-[25px]'>
              <I18nText path='page.landing.activities.title' />
            </Typography>
            {!!getActivityResponse.rows.length && (
              <Typography tag='h3' variant='body3'>
                {getActivityResponse.pagination.count}
              </Typography>
            )}
          </div>
          <div className='flex flex-wrap items-center justify-between gap-4'>
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
