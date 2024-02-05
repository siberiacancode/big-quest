import React from 'react';
import type { Table } from '@tanstack/react-table';

export interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  toolbar: (table: Table<TData>) => React.ReactNode[];
}

export const DataTableToolbar = <TData,>({ table, toolbar }: DataTableToolbarProps<TData>) => {
  const toolbarItems = toolbar(table);

  return (
    <div className='flex flex-wrap items-center py-4 md:flex-nowrap'>
      {toolbarItems.map((toolbarItem, index) => (
        <React.Fragment key={index}>
          {index === toolbarItems.length - 1 && (
            <div className='flex flex-1 justify-items-end'>{toolbarItem}</div>
          )}
          {index !== toolbarItems.length - 1 && toolbarItem}
        </React.Fragment>
      ))}
    </div>
  );
};
