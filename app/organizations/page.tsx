import { DataTable } from '@/features/organizations/components/Table/DataTable';
import { SummaryCard } from '@/shared/components/SummaryCard';

const OrganizationsPage = () => {
  return (
    <>
      <span>Organizations Page</span>
      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
        <SummaryCard
          title='Партенры'
          info='560'
          description='+24 за месяц'
          className='col-span-1'
        />
        <SummaryCard title='Спонсоры' info='56' description='+24 за месяц' className='col-span-1' />
        <SummaryCard title='Требуют внимания' info='6' description='Лиды' className='col-span-2' />
      </div>
      <DataTable />
    </>
  );
};

export default OrganizationsPage;
