import { getOrganizationSchedule } from '@/utils/api/requests/organization/id/schedule';

import { OrganizationScheduleTable } from './components/OrganizationScheduleTable/OrganizationScheduleTable';

export interface OrganizationsPageProps {
  searchParams: SearchParams;
  params: { organizationId: string };
}

const DEFAULT_ORGANIZATIONS_LIMIT = '10';
const DEFAULT_ORGANIZATIONS_PAGE = '1';

const OrganizationSchedulePage = async ({ searchParams, params }: OrganizationsPageProps) => {
  const organizationScheduleResponse = await getOrganizationSchedule({
    params: { id: params.organizationId },
    config: {
      params: {
        limit: DEFAULT_ORGANIZATIONS_LIMIT,
        current: DEFAULT_ORGANIZATIONS_PAGE,
        ...searchParams
      },
      cache: 'no-store'
    }
  });

  return (
    <div className='bg-secondary px-4'>
      <OrganizationScheduleTable
        schedules={organizationScheduleResponse.rows}
        pagination={organizationScheduleResponse.pagination}
      />
    </div>
  );
};

export default OrganizationSchedulePage;
