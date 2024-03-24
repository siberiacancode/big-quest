import { PlusCircledIcon } from '@radix-ui/react-icons';

import { I18nText } from '@/components/common';
import { Button, Typography } from '@/components/ui';
import { getOrganizationEmployees } from '@/utils/api/requests';

import { EmployeeCard } from './components/EmployeeCard/EmployeeCard';
import { ActionEmployeeDialog } from './components/EmployeeDialog/ActionEmployeeDialog';

interface OrganizationEmployeesPageProps {
  params: { organizationId: string };
}

const OrganizationEmployeesPage = async ({ params }: OrganizationEmployeesPageProps) => {
  const organizationEmployees = await getOrganizationEmployees({
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
      <div className='gap-5 2xlx:grid-cols-2 xlx:flex xlx:flex-wrap 2xl:grid-cols-3 xl:grid'>
        {organizationEmployees.map((employee, index) => (
          <EmployeeCard key={index} employee={employee} />
        ))}
      </div>
    </div>
  );
};

export default OrganizationEmployeesPage;
