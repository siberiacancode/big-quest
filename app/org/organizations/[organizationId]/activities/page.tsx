import { PlusCircledIcon } from '@radix-ui/react-icons';

import { I18nText } from '@/components/common';
import { Button, Typography } from '@/components/ui';

import { ActivityCard } from './components/ActivityCard/ActivityCard';

const OrganizationActivitiesPage = () => (
  <div>
    <div className='flex justify-between'>
      <Typography variant='h5' tag='h5'>
        <I18nText path='partners.activities.title' />
      </Typography>

      <Button variant='light' className='mx-2 p-5' size='sm'>
        <PlusCircledIcon className='mr-2 h-4 w-4' />
        <I18nText path='button.addActivities' />
      </Button>
    </div>
    <div className='flex w-full justify-center'>
      <div className='mt-4 flex flex-wrap gap-7 xsx:flex xsx:grid-cols-none xsx:flex-col xsx:items-center'>
        {Array(5)
          .fill({})
          .map((_, index) => (
            <span key={index}>
              <ActivityCard />
            </span>
          ))}
      </div>
    </div>
  </div>
);

export default OrganizationActivitiesPage;
