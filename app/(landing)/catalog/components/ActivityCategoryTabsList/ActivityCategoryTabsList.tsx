'use client';

import React from 'react';

import { TabsList, TabsTrigger } from '@/components/ui';
import { useGetCategoryQuery } from '@/utils/api/hooks/useGetCategoryQuery';
import { useSearchParams } from '@/utils/hooks';

const ActivityCategoryTabsList = () => {
  const { setSearchParam } = useSearchParams();
  const getCategoryQuery = useGetCategoryQuery();

  const onActivityCategorySelect = (category: string) => {
    setSearchParam('category', category);
  };

  return (
    <TabsList className='flex w-full justify-start gap-1 bg-transparent p-0'>
      {getCategoryQuery.data &&
        getCategoryQuery.data.map((category, idx: number) => (
          <TabsTrigger
            key={idx}
            value={category.name}
            className='gap-10 rounded-full data-[state=active]:bg-taiga data-[state=active]:text-white'
            onClick={() => onActivityCategorySelect(category.name)}
          >
            {category.name}
          </TabsTrigger>
        ))}
    </TabsList>
  );
};

export default ActivityCategoryTabsList;
