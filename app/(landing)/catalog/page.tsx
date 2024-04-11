import type { Metadata } from 'next';

import { I18nText } from '@/components/common';
import { ScrollArea, ScrollBar, Tabs, TabsContent, Typography } from '@/components/ui';

import { ActivitiesList } from './components/ActivitiesList/ActivitiesList';
import ActivityCategoryTabsList from './components/ActivityCategoryTabsList/ActivityCategoryTabsList';
import ActivitySearchInput from './components/ActivitySearchInput/ActivitySearchInput';
import { getCategories } from './constants/actions';

interface ActivityCatalogPageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export const generateMetadata = async ({
  searchParams
}: ActivityCatalogPageProps): Promise<Metadata> => {
  const categories = await getCategories();

  const searchParam = typeof searchParams.search === 'string' ? searchParams.search : '';
  const categoryParam = typeof searchParams.category === 'string' ? searchParams.category : '';

  const сategoryName = categories.find((category) => category.value === categoryParam)?.name;

  return {
    title: `Каталог активностей: ${сategoryName} ${searchParam ? `| ${searchParam}` : ''}`
  };
};

const ActivityCatalogPage = async ({ searchParams }: ActivityCatalogPageProps) => {
  const categories = await getCategories();

  const searchParam = typeof searchParams.search === 'string' ? searchParams.search : '';
  const categoryParam = typeof searchParams.category === 'string' ? searchParams.category : '';

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
        <Tabs defaultValue='ALL' value={categoryParam}>
          <ScrollArea className='w-full whitespace-nowrap'>
            <ActivityCategoryTabsList />
            <ScrollBar orientation='horizontal' className='hidden' />
          </ScrollArea>

          <div className='mt-8 mdx:mt-11 smx:mt-8'>
            {categories.map((category) => (
              <TabsContent key={category.value} value={category.value}>
                <ActivitiesList category={category.value} search={searchParam} />
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default ActivityCatalogPage;
