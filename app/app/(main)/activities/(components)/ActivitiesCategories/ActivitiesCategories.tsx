'use client';

import React from 'react';

import { I18nText } from '@/components/common';
import { ScrollArea, ScrollBar, Tabs, TabsList, TabsTrigger } from '@/components/ui';
import { useSearchParams } from '@/utils/hooks';

import { useActivitiesPage } from '../../(contexts)/activitiesPage';

export const ActivitiesCategories = () => {
  const { searchParams } = useSearchParams();
  const { categories, onCategoryClick } = useActivitiesPage();

  return (
    <ScrollArea className='w-full space-y-3 whitespace-nowrap'>
      <Tabs defaultValue={searchParams.get('category') ?? ''}>
        <TabsList className='flex w-full justify-start gap-1 bg-transparent p-0'>
          <TabsTrigger
            value=''
            className='gap-10 rounded-full data-[state=active]:bg-taiga data-[state=active]:text-white'
            onClick={() => onCategoryClick('')}
          >
            <I18nText path='organization.activities.category.all' />
          </TabsTrigger>

          {categories.map((category) => (
            <TabsTrigger
              key={category.name}
              value={category.name}
              className='gap-10 rounded-full data-[state=active]:bg-taiga data-[state=active]:text-white'
              onClick={() => onCategoryClick(category.name)}
            >
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
      <ScrollBar orientation='horizontal' />
    </ScrollArea>
  );
};
