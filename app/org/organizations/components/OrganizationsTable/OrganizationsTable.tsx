'use client';

import { PlusCircledIcon } from '@radix-ui/react-icons';

import { DataTable, DataTableFacetedFilter, I18nText } from '@/components/common';
import { RegisterOrganizationDialog } from '@/components/dialogs';
import { Button, Input } from '@/components/ui';
import { useI18n } from '@/utils/contexts';

import { columns } from './constants/columns';
import { convertOrganizationsResponseToTableRows } from './helpers/convertOrganizationResponseToTableRow';
import { useOrganizationsTable } from './hooks/useOrganizationsTable';

interface OrganizationsTableProps {
  organizations: OrganizationResponse[];
  pagination: PaginationResponse;
}

export const OrganizationsTable = ({ organizations, pagination }: OrganizationsTableProps) => {
  const intl = useI18n();
  const { functions, state } = useOrganizationsTable();

  return (
    <DataTable
      data={convertOrganizationsResponseToTableRows(organizations)}
      columns={columns}
      pagination={pagination}
      toolbar={() => [
        <Input
          placeholder={intl.formatMessage({ id: 'field.filter.placeholder' })}
          defaultValue={state.organizationFilter ?? ''}
          onChange={(event) => functions.onFilterInputChange(event.target.value)}
          wrapperClassName='max-w-sm'
        />,
        <DataTableFacetedFilter
          columnName='stage'
          items={[
            { value: 'REQUEST', label: intl.formatMessage({ id: 'organization.stage.request' }) },
            {
              value: 'NEGOTIATION',
              label: intl.formatMessage({ id: 'organization.stage.negotiation' })
            },
            {
              value: 'CONCLUSION',
              label: intl.formatMessage({ id: 'organization.stage.conclusion' })
            }
            // {
            //   value: 'CONCLUSION',
            //   label: 'ddddddddddddddddddddddddddddddddddddddddddddddddddddddd'
            // }
          ]}
          title={intl.formatMessage({ id: 'table.column.organization.stage' })}
        />,
        <Button variant='outline' size='sm' className='m-2 h-9'>
          <PlusCircledIcon className='mr-2 h-4 w-4' />
          <I18nText path='table.column.organization.location' />
        </Button>,
        <RegisterOrganizationDialog
          trigger={
            <Button variant='secondary' size='sm' className='mx-2 md:ml-auto'>
              <PlusCircledIcon className='mr-2 size-4' />
              <I18nText path='button.add' />
            </Button>
          }
        />
      ]}
    />
  );
};
