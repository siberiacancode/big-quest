import React from 'react';
import type { ColumnDef, Table } from '@tanstack/react-table';
import { flexRender } from '@tanstack/react-table';

import { TableBody, TableCell, TableRow } from '@/components/ui/table';

import type { Application } from '../../types';

interface DataTableBodyProps<TData> {
  table: Table<TData>;
  columns: ColumnDef<Application>[];
}

export const DataTableBody = <TData,>({ table, columns }: DataTableBodyProps<TData>) => (
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
);
