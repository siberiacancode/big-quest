'use client';

import { TabsList, TabsTrigger } from '@/components/ui';
import { useSearchParams } from '@/utils/hooks';

import { categories } from '../../constants/categories';

const ActivityCategoryTabsList = () => {
  const { setSearchParam } = useSearchParams();

  const onActivityCategory = (category) => {
    setSearchParam('category', category);
  };

  return (
    <TabsList className='flex w-full justify-start gap-1 bg-transparent p-0'>
      {categories.map((category) => (
        <TabsTrigger
          value={category.value}
          className='gap-10 rounded-full data-[state=active]:bg-taiga data-[state=active]:text-white'
          onClick={() => onActivityCategory(category.value)}
        >
          {category.name}
        </TabsTrigger>
      ))}
    </TabsList>
  );
};

export default ActivityCategoryTabsList;
