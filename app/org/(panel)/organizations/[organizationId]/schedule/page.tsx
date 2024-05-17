import { PlusCircledIcon } from '@radix-ui/react-icons';

import { I18nText } from '@/components/common';
import { Button, Typography } from '@/components/ui';
import { getSchedulesByOrganizationId } from '@/utils/api/requests';

import { AddScheduleDialog } from './(components)/AddScheduleDialog/AddScheduleDialog';
import { OrganizationSchedulesTable } from './(components)/OrganizationSchedulesTable/OrganizationSchedulesTable';

export interface OrganizationsPageProps {
  searchParams: SearchParams;
  params: { organizationId: string };
}

const DEFAULT_SCHEDULES_LIMIT = 10;
const DEFAULT_SCHEDULES_PAGE = 1;

const OrganizationSchedulePage = async ({ searchParams, params }: OrganizationsPageProps) => {
  const getSchedulesByOrganizationIdResponse = await getSchedulesByOrganizationId({
    params: { organizationId: params.organizationId },
    config: {
      params: {
        limit: DEFAULT_SCHEDULES_LIMIT,
        current: DEFAULT_SCHEDULES_PAGE,
        ...searchParams
      },
      cache: 'no-store'
    }
  });

  return (
    <div>
      <div className='flex justify-between'>
        <Typography variant='h5' tag='h5'>
          <I18nText path='partners.schedule.title' />
        </Typography>
        <AddScheduleDialog
          trigger={
            <Button variant='light' className='mx-2 p-5' size='sm'>
              <PlusCircledIcon className='mr-2 h-4 w-4' />
              <I18nText path='button.addSchedule' />
            </Button>
          }
        />
      </div>
      <OrganizationSchedulesTable
        schedules={getSchedulesByOrganizationIdResponse.rows}
        pagination={getSchedulesByOrganizationIdResponse.pagination}
      />
    </div>
  );
};

export default OrganizationSchedulePage;
