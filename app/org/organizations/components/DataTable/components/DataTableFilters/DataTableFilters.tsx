import { PlusCircledIcon } from '@radix-ui/react-icons';
import type { Table } from '@tanstack/react-table';

import { I18nText } from '@/components/common';
import { RegisterOrganizationDialog } from '@/components/dialogs';
import { Button, Input } from '@/components/ui';
import { useI18n } from '@/utils/contexts';

export interface DataTableFiltersProps<TData> {
  table: Table<TData>;
}

export const DataTableFilters = <TData,>({ table }: DataTableFiltersProps<TData>) => {
  const i18n = useI18n();
  return (
    <div className='flex flex-wrap py-4  md:flex-nowrap'>
      <div className='flex items-center mdx:flex-wrap'>
        <Input
          placeholder={i18n.formatMessage({ id: 'field.filter.placeholder' })}
          value={(table.getColumn('organization')?.getFilterValue() as string) ?? ''}
          onChange={(event) => table.getColumn('organization')?.setFilterValue(event.target.value)}
          className='max-w-sm'
        />
        <Button variant='outline' size='sm' className='m-2 h-9'>
          <PlusCircledIcon className='mr-2 h-4 w-4' />
          <I18nText path='table.column.status' />
        </Button>
        <Button variant='outline' size='sm' className='m-2 h-9'>
          <PlusCircledIcon className='mr-2 h-4 w-4' />
          <I18nText path='table.column.location' />
        </Button>
      </div>

      <RegisterOrganizationDialog
        trigger={
          <Button variant='outline' size='sm' className='mx-2 bg-secondary md:ml-auto'>
            <PlusCircledIcon className='mr-2 h-4 w-4' />
            <I18nText path='button.add' />
          </Button>
        }
      />
    </div>
  );
};
