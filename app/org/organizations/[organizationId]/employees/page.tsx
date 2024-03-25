import { PlusCircledIcon } from '@radix-ui/react-icons';

import { I18nText } from '@/components/common';
import { Button, Typography } from '@/components/ui';
import { getOrganizationEmployees } from '@/utils/api/requests';

import { ActionEmployeeDialog } from './components/EmployeeDialog/ActionEmployeeDialog';
import { EmployeeList } from './components/EmployeeList/EmployeeList';

interface OrganizationEmployeesPageProps {
  params: { organizationId: string };
}

const OrganizationEmployeesPage = async ({ params }: OrganizationEmployeesPageProps) => {
  const organizationEmployeesResponse = await getOrganizationEmployees({
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
      <EmployeeList employees={organizationEmployeesResponse} />
    </div>
  );
};

export default OrganizationEmployeesPage;
