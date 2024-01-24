import { InfoIcon, TrendingUpIcon } from 'lucide-react';

import { Breadcrumbs } from './components/Breadcrumbs/Breadcrumbs';
import { SummaryCard } from './components/SummaryCard/SummaryCard';
import { data } from './components/Table/constants/data';
import { DataTable } from './components/Table/DataTable';

const contents = [
  { info: '6', description: 'Лиды' },
  { info: '10', description: 'Переговоры' },
  { info: '13', description: 'Смена тарифа' }
];

const breadcrumbs = [
  { label: 'Главная', link: '/' },
  { label: 'Организации', link: '/org/organizations' }
];

const OrganizationsPage = () => {
  return (
    <div className='bg-breadboard px-4'>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
        <SummaryCard
          title='Партнеры'
          info='560'
          description='+24 за месяц'
          className='col-span-1'
          descriptionIcon={<TrendingUpIcon size={14} />}
        />
        <SummaryCard
          title='Спонсоры'
          info='56'
          description='+24 за месяц'
          className='col-span-1'
          descriptionIcon={<TrendingUpIcon size={14} />}
        />
        <SummaryCard
          title='Требует внимания'
          contents={contents}
          className='col-span-2'
          titleIcon={<InfoIcon size={20} strokeWidth={1.5} />}
        />
      </div>
      <DataTable data={data} />
    </div>
  );
};

export default OrganizationsPage;
