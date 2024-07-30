import React from 'react';
import { getDictionary } from 'app/dictionaries';
import type { Metadata } from 'next';

import { I18nText } from '@/components/common';
import { Typography } from '@/components/ui';
import { getActivity, getCategories } from '@/utils/api';
import { CITIES } from '@/utils/constants';

import { ActivitiesCategories, ActivityList, ActivitySearchInput } from './(components)';
import {
  DEFAULT_ACTIVITIES_LIMIT,
  DEFAULT_ACTIVITIES_PAGE,
  DEFAULT_CATEGORIES_LIMIT,
  DEFAULT_CATEGORIES_PAGE
} from './(constants)';
import { Providers } from './providers';

export const generateMetadata = async (): Promise<Metadata> => {
  const dictionary = await getDictionary('ru');

  return {
    title: dictionary['metadata.page.landing.activiites'],
    description: dictionary['metadata.page.landing.activiites']
  };
};

interface ActivitiesPageProps {
  params: SearchParams;
}

const ActivitiesPage = async ({ params }: ActivitiesPageProps) => {
  const [getCategoriesResponse, getActivityResponse] = await Promise.all([
    getCategories({
      params: {
        limit: DEFAULT_CATEGORIES_LIMIT,
        current: DEFAULT_CATEGORIES_PAGE
      },
      config: { cache: 'no-store' }
    }),
    getActivity({
      params: {
        limit: DEFAULT_ACTIVITIES_LIMIT,
        current: DEFAULT_ACTIVITIES_PAGE,
        ...params,
        city: params?.city && CITIES[(params?.city as string).toUpperCase()]?.name
      },
      config: { cache: 'no-store' }
    })
  ]);

  return (
    <section className='container mt-4 bg-background px-2 2sm:rounded-[8px]'>
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
          <div className='flex flex-wrap items-center justify-between gap-5'>
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
            <ActivitySearchInput />
          </div>
          <div className='flex flex-wrap items-center justify-between gap-4'>
            <ActivitiesCategories />
          </div>
          <ActivityList />
        </div>
      </Providers>
    </section>
  );
};

export default ActivitiesPage;
