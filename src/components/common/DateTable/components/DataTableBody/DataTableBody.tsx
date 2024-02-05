import type { ColumnDef, Table } from '@tanstack/react-table';
import { flexRender } from '@tanstack/react-table';

import { I18nText } from '@/components/common';
import { TableBody, TableCell, TableRow } from '@/components/ui';

interface DataTableBodyProps<TData> {
  table: Table<TData>;
  columns: ColumnDef<TData>[];
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
          <I18nText path='field.results.noResults' />
        </TableCell>
      </TableRow>
    )}
  </TableBody>
);
