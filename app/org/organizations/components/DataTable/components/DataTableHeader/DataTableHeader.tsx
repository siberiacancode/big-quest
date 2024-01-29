import type { Table } from '@tanstack/react-table';
import { flexRender } from '@tanstack/react-table';

import { TableHead, TableHeader, TableRow } from '@/components/ui';

export interface TableHeaderProps<TData> {
  table: Table<TData>;
}

export const DataTableHeader = <TData,>({ table }: TableHeaderProps<TData>) => (
  <TableHeader className='bg-secondary'>
    {table.getHeaderGroups().map((headerGroup) => (
      <TableRow key={headerGroup.id}>
        {headerGroup.headers.map((header) => (
          <TableHead key={header.id}>
            {!header.isPlaceholder &&
              flexRender(header.column.columnDef.header, header.getContext())}
          </TableHead>
        ))}
      </TableRow>
    ))}
  </TableHeader>
);
