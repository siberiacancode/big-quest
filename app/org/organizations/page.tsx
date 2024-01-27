import { InfoIcon, TrendingUpIcon } from 'lucide-react';

import { Breadcrumbs } from './components/Breadcrumbs/Breadcrumbs';
import { data } from './components/DataTable/constants/data';
import { DataTable } from './components/DataTable/DataTable';
import { InfoCard } from './components/InfoCard/InfoCard';
import { breadcrumbs } from './constants/breadcrunbs';
import { contents } from './constants/contents';

const OrganizationsPage = () => (
  <div className='bg-breadboard px-4'>
    <Breadcrumbs breadcrumbs={breadcrumbs} />
    <div className='grid gap-4 lg:grid-cols-4 md:grid-cols-2'>
      <InfoCard
        title='Партнеры'
        info='560'
        description='+24 за месяц'
        className='col-span-1'
        descriptionIcon={<TrendingUpIcon size={14} />}
      />
      <InfoCard
        title='Спонсоры'
        info='56'
        description='+24 за месяц'
        className='col-span-1'
        descriptionIcon={<TrendingUpIcon size={14} />}
      />
      <InfoCard
        title='Требует внимания'
        contents={contents}
        className='col-span-2'
        titleIcon={<InfoIcon size={20} strokeWidth={1.5} />}
      />
    </div>
    <DataTable data={data} />
  </div>
);

export default OrganizationsPage;
