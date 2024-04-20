'use client';

import React from 'react';
import { Search, X } from 'lucide-react';

import { I18nText } from '@/components/common';
import {
  Button,
  Input,
  ScrollArea,
  ScrollBar,
  Tabs,
  TabsList,
  TabsTrigger,
  Typography
} from '@/components/ui';
import { useGetCategoryQuery } from '@/utils/api/hooks/useGetCategoryQuery';
import { useI18n } from '@/utils/contexts';

import { ActivityCard } from '../(components)/ActivitiesSection/components/ActivityCard/ActivityCard';

import { useActivityCatalogPage } from './hooks/useActivityCatalogPage';

const ActivityCatalogPage = () => {
  const i18n = useI18n();
  const { functions, state } = useActivityCatalogPage();
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
          {/* <ActivitySearchInput /> */}
          <div className='relative h-10 w-[293px] smx:mb-6'>
            <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
              <Search className='h-5 w-5 text-gray-400' aria-hidden='true' />
            </div>
            <Input
              placeholder={i18n.formatMessage({ id: 'field.activitySearch.placeholder' })}
              defaultValue={state.name ?? ''}
              onChange={(event) => functions.onActivitySearchChange(event.target.value)}
              className='block h-10 rounded-lg border px-3 py-2 pl-10 text-sm leading-6 outline-none focus-visible:ring-0'
            />
            {state.name && (
              <Button
                variant='outline'
                size='icon'
                className='absolute inset-y-[11px] right-0 mr-3 size-[18px] rounded-full border-none bg-taiga hover:bg-taiga'
                onClick={() => functions.onActivitySearchClear()}
              >
                <X strokeWidth={2} absoluteStrokeWidth size={8} className=' text-white' />
              </Button>
            )}
          </div>
        </div>
      </div>

      <div className='mt-5'>
        <Tabs defaultValue='' value={state.category ?? ''}>
          <ScrollArea className='w-full whitespace-nowrap'>
            {/* <ActivityCategoryTabsList /> */}
            <TabsList className='flex w-full justify-start gap-1 bg-transparent p-0'>
              <TabsTrigger
                value=''
                className='gap-10 rounded-full data-[state=active]:bg-taiga data-[state=active]:text-white'
                onClick={() => functions.onActivityCategorySelect('')}
              >
                <I18nText path='organization.activities.category.all' />
              </TabsTrigger>
              {getCategoryQuery.data &&
                getCategoryQuery.data.map((category, index: number) => (
                  <TabsTrigger
                    key={index}
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
            {state.activities.map((activity) => (
              <React.Fragment key={activity.id}>
                <ActivityCard {...activity} />
              </React.Fragment>
            ))}
            <div ref={state.intresectionRef} />
          </div>
        </Tabs>
      </div>
    </section>
  );
};
export default ActivityCatalogPage;
