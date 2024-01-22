'use client';

import * as React from 'react';
import { PlusCircledIcon } from '@radix-ui/react-icons';
import { flexRender } from '@tanstack/react-table';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { useDataTable } from '@/features/organizations/hooks/useDataTable';
import { TablePagination } from '@/shared/components';

import { columns } from './data/columns';
import { data } from './data/data';

export const DataTable = () => {
  const table = useDataTable(data, columns);

  return (
    <div className=' mt-10 w-full rounded-md bg-white p-4'>
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
            {/* <Button variant='outline' className='ml-auto'>
              Columns <ChevronDownIcon className='ml-2 h-4 w-4' />
            </Button> */}
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
      <div className='rounded-md border'>
        <Table>
          <TableHeader className=' bg-breadboard'>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className='h-24 text-center'>
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <TablePagination table={table} />
    </div>
  );
};
