'use client';

import React from 'react';

import { I18nText } from '@/components/common';
import { ScrollArea, ScrollBar, Tabs, TabsList, TabsTrigger, Typography } from '@/components/ui';
import { useGetCategoryQuery } from '@/utils/api/hooks/useGetCategoryQuery';

import { ActivityCard } from '../(components)/ActivitiesSection/components/ActivityCard/ActivityCard';

import ActivitySearchInput from './components/ActivitySearchInput/ActivitySearchInput';
import { useActivtyCatalogPage } from './hooks/useActivtyCatalogPage';

const ActivityCatalogPage = () => {
  const { state, functions } = useActivtyCatalogPage();
  const getCategoryQuery = useGetCategoryQuery();

  return (
    <section className='container py-[108px]'>
      <div className='flex flex-col justify-between sm:flex-row'>
        <div className='order-2 flex gap-2 sm:order-1'>
          <Typography tag='h3' variant='h3' className='xsx:text-[25px]'>
            <I18nText path='landing.activities.title' />
          </Typography>
          <Typography tag='h3' variant='h3' className='text-muted-foreground'>
            781
          </Typography>
        </div>
        <div className='order-1 sm:order-2'>
          <ActivitySearchInput />
        </div>
      </div>

      <div className='mt-5'>
        <Tabs defaultValue='' value={state.category?.toString()}>
          <ScrollArea className='w-full whitespace-nowrap'>
            {/* <ActivityCategoryTabsList /> */}
            <TabsList className='flex w-full justify-start gap-1 bg-transparent p-0'>
              <TabsTrigger
                value=''
                className='gap-10 rounded-full data-[state=active]:bg-taiga data-[state=active]:text-white'
                onClick={() => functions.onActivityCategorySelect('')}
              >
                Все
              </TabsTrigger>
              {getCategoryQuery.data &&
                getCategoryQuery.data.map((category, idx: number) => (
                  <TabsTrigger
                    key={idx}
                    value={category.name}
                    className='gap-10 rounded-full data-[state=active]:bg-taiga data-[state=active]:text-white'
                    onClick={() => functions.onActivityCategorySelect(category.name)}
                  >
                    {category.name}
                  </TabsTrigger>
                ))}
            </TabsList>
            <ScrollBar orientation='horizontal' className='hidden' />
          </ScrollArea>

          <div className='mt-8 grid grid-cols-4 gap-x-5 gap-y-12 xlx:grid-cols-3 lgx:grid-cols-2 mdx:mt-11 smx:mt-8 smx:flex smx:flex-col smx:items-center smx:gap-y-8'>
            {state.query.data?.pages.map((page) =>
              page.rows.map((activity) => (
                <React.Fragment key={activity.id}>
                  <ActivityCard {...activity} />
                </React.Fragment>
              ))
            )}
          </div>
        </Tabs>
      </div>
      {getCategoryQuery.data && (
        <div ref={state.intresectionRef} className='h-8 w-full bg-slate-900' />
      )}
    </section>
  );
};
export default ActivityCatalogPage;
