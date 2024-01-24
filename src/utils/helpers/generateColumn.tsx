import * as React from 'react';
import { CaretSortIcon } from '@radix-ui/react-icons';
import type { ColumnDef } from '@tanstack/react-table';

import { Button } from '@/components/ui';

import type { Application } from '../../../app/org/organizations/components/Table/types';

interface ColumnConfig {
  accessorKey: keyof Application;
  headerLabel: string;
  sortable?: boolean;
}

export const generateColumn = ({
  accessorKey,
  headerLabel,
  sortable = false
}: ColumnConfig): ColumnDef<Application> => {
  return {
    accessorKey,
    header: ({ column }) => (
      <div className='text-left'>
        {sortable ? (
          <Button
            variant='ghost'
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            {headerLabel}
            <CaretSortIcon className='ml-2 h-4 w-4' />
          </Button>
        ) : (
          <div>{headerLabel}</div>
        )}
      </div>
    ),
    cell: ({ row }) => {
      const value: string | number = row.getValue(accessorKey);
      return <div className='px-4 text-left font-medium'>{value}</div>;
    },
    enableSorting: sortable,
    enableHiding: true
  };
};
