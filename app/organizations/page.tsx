import { InfoIcon, TrendingUpIcon } from 'lucide-react';

import { DataTable } from '@/features/organizations/components/Table/DataTable';
import { SummaryCard } from '@/shared/components/SummaryCard';

const OrganizationsPage = () => {
  const contents = [
    { info: '6', description: 'Лиды' },
    { info: '10', description: 'Переговоры' },
    { info: '13', description: 'Смена тарифа' }
  ];
  return (
    <div className=' bg-breadboard'>
      <span>Organizations Page</span>
      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
        <SummaryCard
          title='Партнеры'
          info='560'
          description='+24 за месяц'
          className='col-span-1'
        />
        <SummaryCard title='Спонсоры' info='56' description='+24 за месяц' className='col-span-1' />
        <SummaryCard
          title='Требует внимания'
          contents={contents}
          className='col-span-2'
          titleIcon={<InfoIcon />}
          descriptionIcon={<TrendingUpIcon />}
        />
      </div>
      <DataTable />
    </div>
  );
};

export default OrganizationsPage;
