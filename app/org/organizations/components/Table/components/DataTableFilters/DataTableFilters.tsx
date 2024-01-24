import React from 'react';
import { PlusCircledIcon } from '@radix-ui/react-icons';
import type { Table } from '@tanstack/react-table';

import {
  Button,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
  Input
} from '@/components/ui';

export interface DataTableFiltersProps<TData> {
  table: Table<TData>;
}

export const DataTableFilters = <TData,>({ table }: DataTableFiltersProps<TData>) => (
  <div className='flex flex-wrap items-center py-4'>
    <Input
      placeholder='Фильтровать...'
      value={(table.getColumn('organization')?.getFilterValue() as string) ?? ''}
      onChange={(event) => table.getColumn('organization')?.setFilterValue(event.target.value)}
      className='max-w-sm'
    />
    <Button variant='outline' size='sm' className='m-2 h-9'>
      <PlusCircledIcon className='mr-2 h-4 w-4' />
      Статус
    </Button>
    <Button variant='outline' size='sm' className='m-2 h-9'>
      <PlusCircledIcon className='mr-2 h-4 w-4' />
      Населенный пункт
    </Button>

    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline' size='sm' className='m-2 bg-breadboard md:ml-auto'>
          <PlusCircledIcon className='mr-2 h-4 w-4' />
          Добавить
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        {table
          .getAllColumns()
          .filter((column) => column.getCanHide())
          .map((column) => {
            return (
              <DropdownMenuCheckboxItem
                key={column.id}
                className='capitalize'
                checked={column.getIsVisible()}
                onCheckedChange={(value) => column.toggleVisibility(!!value)}
              >
                {column.id}
              </DropdownMenuCheckboxItem>
            );
          })}
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
);
