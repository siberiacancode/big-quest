import { PlusCircledIcon } from '@radix-ui/react-icons';

import { I18nText } from '@/components/common';
import { Button, Typography } from '@/components/ui';
import { getOrganizationEmployees } from '@/utils/api/requests/organization/getEmployees';

import { AddEmploeeDialog } from './components/AddEmploeeDialog/AddEmploeeDialog';

interface OrganizationEmployeesPageProps {
  params: { organizationId: string };
}

const OrganizationEmployeesPage = async ({ params }: OrganizationEmployeesPageProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const organizationEmployees = await getOrganizationEmployees({
    params: { id: params.organizationId }
  });
  console.log(organizationEmployees);
  return (
    <div className='flex justify-between'>
      <Typography variant='h5' tag='h5'>
        <I18nText path='partners.employees.title' />
      </Typography>
      <AddEmploeeDialog
        trigger={
          <Button variant='light' className='mx-2 p-5' size='sm'>
            <PlusCircledIcon className='mr-2 h-4 w-4' />
            <I18nText path='button.addEmployee' />
          </Button>
        }
      />
    </div>
  );
};

export default OrganizationEmployeesPage;
