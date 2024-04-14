import React from 'react';

import { I18nText } from '@/components/common';
import { ScrollArea, ScrollBar, Tabs, Typography } from '@/components/ui';
import { getActivityPublic } from '@/utils/api';

import { ActivityCard } from '../components/ActivitiesSection/components/ActivityCard/ActivityCard';

import ActivityCategoryTabsList from './components/ActivityCategoryTabsList/ActivityCategoryTabsList';
import ActivitySearchInput from './components/ActivitySearchInput/ActivitySearchInput';

interface ActivityCatalogPageProps {
  searchParams: SearchParams;
}

// export const generateMetadata = async ({
//   searchParams
// }: ActivityCatalogPageProps): Promise<Metadata> => {
//   const categories = await getCategories();

//   const searchParam = typeof searchParams.search === 'string' ? searchParams.search : '';
//   const categoryParam = typeof searchParams.category === 'string' ? searchParams.category : '';

//   const сategoryName = categories.find((category) => category.value === categoryParam)?.name;

//   return {
//     title: `Каталог активностей: ${сategoryName} ${searchParam ? `| ${searchParam}` : ''}`
//   };
// };

// const DEFAULT_ACTIVITIES_LIMIT = 2;
// const DEFAULT_ACTIVITIES_PAGE = 1;

const DEFAULT_ACTIVITIES_LIMIT = '10';
const DEFAULT_ACTIVITIES_PAGE = '1';

const ActivityCatalogPage = async ({ searchParams }: ActivityCatalogPageProps) => {
  // const searchParam = typeof searchParams.search === 'string' ? searchParams.search : '';
  const categoryParam = typeof searchParams.category === 'string' ? searchParams.category : '';
  // const { searchParams, setSearchParams, setSearchParam } = useSearchParams();

  const getActivityPublicResponse = await getActivityPublic({
    config: {
      params: {
        limit: DEFAULT_ACTIVITIES_LIMIT,
        current: DEFAULT_ACTIVITIES_PAGE,
        ...searchParams
      },
      cache: 'no-store'
    }
  });

  console.log('@getActivityPublicResponse', getActivityPublicResponse);

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
        <Tabs defaultValue='Образование' value={categoryParam}>
          <ScrollArea className='w-full whitespace-nowrap'>
            <ActivityCategoryTabsList />
            <ScrollBar orientation='horizontal' className='hidden' />
          </ScrollArea>

          <div className='mt-8 grid grid-cols-4 gap-x-5 gap-y-12 xlx:grid-cols-3 lgx:grid-cols-2 mdx:mt-11 smx:mt-8 smx:flex smx:flex-col smx:items-center smx:gap-y-8'>
            {getActivityPublicResponse.rows.map((activity) => (
              <React.Fragment key={activity.id}>
                <ActivityCard {...activity} />
              </React.Fragment>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
};
export default ActivityCatalogPage;
