import React from 'react';
import type { Metadata } from 'next';

import { I18nText } from '@/components/common';
import { ScrollArea, ScrollBar, Tabs, TabsContent, Typography } from '@/components/ui';
import { getActivityPublic, getCategory } from '@/utils/api';

import { ActivitiesList } from './components/ActivitiesList/ActivitiesList';
import ActivityCategoryTabsList from './components/ActivityCategoryTabsList/ActivityCategoryTabsList';
import ActivitySearchInput from './components/ActivitySearchInput/ActivitySearchInput';

interface ActivityCatalogPageProps {
  searchParams: SearchParams;
}

export const generateMetadata = ({ searchParams }: ActivityCatalogPageProps): Metadata => {
  const searchParam = typeof searchParams.search === 'string' ? searchParams.search : '';
  const categoryParam = typeof searchParams.category === 'string' ? searchParams.category : 'Все';

  return {
    title: `Каталог активностей: ${categoryParam} ${searchParam ? `| ${searchParam}` : ''}`
  };
};

const DEFAULT_ACTIVITIES_LIMIT = '2';
const DEFAULT_ACTIVITIES_PAGE = '1';

const ActivityCatalogPage = async ({ searchParams }: ActivityCatalogPageProps) => {
  const categoryParam = typeof searchParams.category === 'string' ? searchParams.category : '';

  console.log('@ActivityCatalogPage render');

  const getCategories = await getCategory();
  const getActivityPublicResponse = await getActivityPublic({
    config: {
      params: {
        limit: DEFAULT_ACTIVITIES_LIMIT,
        current: DEFAULT_ACTIVITIES_PAGE,
        ...searchParams
      },
      cache: 'force-cache'
    }
  });

  return (
    <section className='container py-[108px]'>
      <div className='flex flex-col justify-between sm:flex-row'>
        <div className='order-2 flex gap-2 sm:order-1'>
          <Typography tag='h3' variant='h3' className='xsx:text-[25px]'>
            <I18nText path='landing.activities.title' />
          </Typography>
          <Typography tag='h3' variant='h3' className='text-muted-foreground'>
            {getActivityPublicResponse.pagination?.count}
          </Typography>
        </div>
        <div className='order-1 sm:order-2'>
          <ActivitySearchInput />
        </div>
      </div>

      <div className='mt-5'>
        <Tabs defaultValue='Все' value={categoryParam || 'Все'}>
          <ScrollArea className='w-full whitespace-nowrap'>
            <ActivityCategoryTabsList />
            <ScrollBar orientation='horizontal' className='hidden' />
          </ScrollArea>

          <div className='mt-8 mdx:mt-11 smx:mt-8'>
            <TabsContent value='Все'>
              <ActivitiesList
                initialActivities={getActivityPublicResponse.rows}
                count={getActivityPublicResponse.pagination?.count}
              />
            </TabsContent>
            {getCategories.map((category) => (
              <TabsContent key={Math.random()} value={category.name}>
                <ActivitiesList
                  initialActivities={getActivityPublicResponse.rows}
                  count={getActivityPublicResponse.pagination?.count}
                />
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
};
export default ActivityCatalogPage;
