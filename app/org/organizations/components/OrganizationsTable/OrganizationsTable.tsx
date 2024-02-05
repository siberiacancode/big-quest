'use client';

import { PlusCircledIcon } from '@radix-ui/react-icons';

import { DataTable, I18nText } from '@/components/common';
import { Button, Input } from '@/components/ui';
import { useI18n } from '@/utils/contexts';

import { columns } from './constants/columns';
import type { Application } from './types';

interface DataTableProps {
  data: Application[];
  pagination: Pagination;
}

export const OrganizationsTable = ({ data, pagination }: DataTableProps) => {
  const intl = useI18n();

  return (
    <DataTable
      data={data}
      columns={columns}
      pagination={pagination}
      toolbar={(table) => [
        <Input
          placeholder={intl.formatMessage({ id: 'field.filter.placeholder' })}
          value={(table.getColumn('organization')?.getFilterValue() as string) ?? ''}
          onChange={(event) => table.getColumn('organization')?.setFilterValue(event.target.value)}
          wrapperClassName='max-w-sm'
        />,
        <Button variant='outline' size='sm' className='m-2 h-9'>
          <PlusCircledIcon className='mr-2 h-4 w-4' />
          <I18nText path='table.column.status' />
        </Button>,
        <Button variant='outline' size='sm' className='m-2 h-9'>
          <PlusCircledIcon className='mr-2 h-4 w-4' />
          <I18nText path='table.column.location' />
        </Button>,
        <Button variant='outline' size='sm' className='mx-2 bg-secondary md:ml-auto'>
          <PlusCircledIcon className='mr-2 h-4 w-4' />
          <I18nText path='button.add' />
        </Button>
      ]}
    />
  );
};
