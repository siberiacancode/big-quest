'use client';

import { useIntl } from 'react-intl';
import { InfoIcon, TrendingUpIcon } from 'lucide-react';

import { I18nText } from '@/components/common';

import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs';

import { data } from './components/DataTable/constants/data';
import { DataTable } from './components/DataTable/DataTable';
import { InfoCard } from './components/InfoCard/InfoCard';
import { breadcrumbs } from './constants/breadcrumbs';
import { contents } from './constants/contents';

const OrganizationsPage = () => {
  const intl = useIntl();

  // Пока не знаю как сделать иначе этот момент
  const formattedContents = contents.map((item) => ({
    ...item,
    description: intl.formatMessage({ id: `infoCard.description.${item.description}` })
  }));

  return (
    <div className='bg-secondary px-4'>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <div className='flex flex-wrap gap-2'>
        <InfoCard
          title={intl.formatMessage({ id: 'infoCard.title.partners' })}
          info='560'
          description={
            <>
              <TrendingUpIcon size={14} className='mr-2' /> +24{' '}
              <I18nText path='infoCard.title.partners' />
            </>
          }
        />
        <InfoCard
          title={intl.formatMessage({ id: 'infoCard.title.sponsors' })}
          info='56'
          description={
            <>
              <TrendingUpIcon size={14} className='mr-2' /> +24{' '}
              <I18nText path='infoCard.description.perMonth' />
            </>
          }
        />
        <InfoCard
          title={intl.formatMessage({ id: 'infoCard.title.needsAttention' })}
          contents={formattedContents}
          titleIcon={<InfoIcon size={20} strokeWidth={1.5} />}
        />
      </div>
      <DataTable data={data} />
    </div>
  );
};

export default OrganizationsPage;
