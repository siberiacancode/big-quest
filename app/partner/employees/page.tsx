import { I18nText } from '@/components/common';
import { Typography } from '@/components/ui';
import { getOrganizationCurrent, getOrganizationEmployees } from '@/utils/api/requests';

import { AddEmployeeDialog } from './(components)/AddEmployeeDialog/AddEmployeeDialog';
import { EmployeeCard } from './(components)/EmployeeCard/EmployeeCard';

const PartnerEmployeesPage = async () => {
  const getOrganizationCurrentResponse = await getOrganizationCurrent({
    config: { cache: 'no-store' }
  });

  const getOrganizationEmployeesResponse = await getOrganizationEmployees({
    params: { id: getOrganizationCurrentResponse.id },
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
        <AddEmployeeDialog />
      </div>
      <div className='grid grid-cols-1 gap-3 lg:grid-cols-2 2lg:grid-cols-3'>
        {getOrganizationEmployeesResponse.map((employee) => (
          <EmployeeCard key={employee.id} employee={employee} />
        ))}
      </div>
    </div>
  );
};

export default PartnerEmployeesPage;
