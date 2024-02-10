import React from 'react';
import type { Table } from '@tanstack/react-table';

export interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  toolbar: (table: Table<TData>) => React.ReactNode[];
}

export const DataTableToolbar = <TData,>({ table, toolbar }: DataTableToolbarProps<TData>) => {
  const toolbarItems = toolbar(table);

  return (
    <div className='mb-[23px] mt-[11px] flex flex-wrap items-center gap-3 md:flex-nowrap'>
      {toolbarItems.map((toolbarItem, index) => (
        <React.Fragment key={index}>{toolbarItem}</React.Fragment>
      ))}
    </div>
  );
};
