'use client';

import { PlusCircledIcon } from '@radix-ui/react-icons';

import { DataTable, DataTableFacetedFilter, I18nText } from '@/components/common';
import { Button, Input } from '@/components/ui';
import { useI18n } from '@/utils/contexts';

import { columns } from './constants/columns';
import { convertOrganizationsResponseToTableRows } from './helpers/convertOrganizationResponseToTableRow';

interface OrganizationsTableProps {
  organizations: OrganizationResponse[];
  pagination: PaginationResponse;
}

export const OrganizationsTable = ({ organizations, pagination }: OrganizationsTableProps) => {
  const intl = useI18n();

  return (
    <DataTable
      data={convertOrganizationsResponseToTableRows(organizations)}
      columns={columns}
      pagination={pagination}
      toolbar={(table) => [
        <Input
          placeholder={intl.formatMessage({ id: 'field.filter.placeholder' })}
          value={(table.getColumn('organization')?.getFilterValue() as string) ?? ''}
          onChange={(event) => table.getColumn('organization')?.setFilterValue(event.target.value)}
          wrapperClassName='max-w-sm'
        />,
        <DataTableFacetedFilter
          columnName='stage'
          items={[
            { value: 'REQUEST', label: intl.formatMessage({ id: 'stage.request' }) },
            { value: 'NEGOTIATION', label: intl.formatMessage({ id: 'stage.negotiation' }) },
            { value: 'CONCLUSION', label: intl.formatMessage({ id: 'stage.conclusion' }) }
          ]}
          title={intl.formatMessage({ id: 'table.column.organization.stage' })}
        />,
        <Button variant='outline' size='sm' className='m-2 h-9'>
          <PlusCircledIcon className='mr-2 h-4 w-4' />
          <I18nText path='table.column.organization.location' />
        </Button>,
        <Button variant='outline' size='sm' className='mx-2 bg-secondary md:ml-auto'>
          <PlusCircledIcon className='mr-2 h-4 w-4' />
          <I18nText path='button.add' />
        </Button>
      ]}
    />
  );
};
