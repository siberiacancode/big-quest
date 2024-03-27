import { PlusCircledIcon } from '@radix-ui/react-icons';

import { I18nText } from '@/components/common';
import { Button, Typography } from '@/components/ui';
import { getOrganizationEmployees } from '@/utils/api/requests';

import { ActionEmployeeDialog } from './(components)/ActionEmployeeDialog/ActionEmployeeDialog';
import { EmployeeCard } from './(components)/EmployeeCard/EmployeeCard';

interface OrganizationEmployeesPageProps {
  params: { organizationId: string };
}

const OrganizationEmployeesPage = async ({ params }: OrganizationEmployeesPageProps) => {
  const getOrganizationEmployeesResponse = await getOrganizationEmployees({
    params: { id: params.organizationId },
    config: {
      cache: 'no-store'
    }
  });

  return (
    <div className='space-y-4'>
      <div className='flex justify-between'>
        <Typography variant='h5' tag='h5'>
          <I18nText path='partners.employees.title' />
        </Typography>
        <ActionEmployeeDialog
          trigger={
            <Button variant='light' className='mx-2 p-5' size='sm'>
              <PlusCircledIcon className='mr-2 h-4 w-4' />
              <I18nText path='button.addEmployee' />
            </Button>
          }
          actionType='add'
        />
      </div>
      <div className='grid gap-3 4xlx:grid-cols-4 3xlx:grid-cols-3 2xlx:grid-cols-2 mdx:grid-cols-1'>
        {getOrganizationEmployeesResponse.map((employee) => (
          <EmployeeCard key={employee.id} employee={employee} />
        ))}
      </div>
    </div>
  );
};

export default OrganizationEmployeesPage;
