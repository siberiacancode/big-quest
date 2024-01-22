import React from 'react';
import type { Table } from '@tanstack/react-table';
import { flexRender } from '@tanstack/react-table';

import { TableHead, TableHeader, TableRow } from '@/components/ui/table';

export interface TableHeaderProps<TData> {
  table: Table<TData>;
}

export const DataTableHeader = <TData,>({ table }: TableHeaderProps<TData>) => (
  <TableHeader className='bg-breadboard'>
    {table.getHeaderGroups().map((headerGroup) => (
      <TableRow key={headerGroup.id}>
        {headerGroup.headers.map((header) => (
          <TableHead key={header.id}>
            {header.isPlaceholder
              ? null
              : flexRender(header.column.columnDef.header, header.getContext())}
          </TableHead>
        ))}
      </TableRow>
    ))}
  </TableHeader>
);
