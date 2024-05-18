import type { ColumnDef } from '@tanstack/react-table';
import { CheckIcon } from 'lucide-react';

import { I18nText } from '@/components/common';
import { Checkbox, generateDataTableColumn } from '@/components/ui';

import type { SchedulesTableRow } from '../helpers/convertSchedulesToTableRows';

export const columns: ColumnDef<SchedulesTableRow>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <div className='flex h-full items-center justify-center'>
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && 'indeterminate')
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label='Select all'
        />
      </div>
    ),
    cell: ({ row }) => (
      <div className='flex h-full items-center justify-center'>
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label='Select row'
        />
      </div>
    ),
    enableSorting: false,
    enableHiding: false
  },
  generateDataTableColumn({
    accessorKey: 'activity',
    headerLabel: 'table.column.schedule.activity',
    sortable: true
  }),
  generateDataTableColumn({
    accessorKey: 'address',
    headerLabel: 'table.column.schedule.address',
    sortable: true
  }),
  generateDataTableColumn({
    accessorKey: 'leading',
    headerLabel: 'table.column.schedule.leading',
    sortable: true
  }),
  generateDataTableColumn({
    accessorKey: 'date',
    headerLabel: 'table.column.schedule.date'
  }),
  generateDataTableColumn({
    accessorKey: 'time',
    headerLabel: 'table.column.schedule.time'
  }),
  generateDataTableColumn({
    accessorKey: 'numberOfSeats',
    headerLabel: 'table.column.schedule.numberOfSeats'
  }),
  {
    id: 'actions',
    header: () => (
      <p className='text-center'>
        <I18nText path='table.column.schedule.passed' />
      </p>
    ),
    enableHiding: false,
    cell: ({ row }) => (
      <div className='flex justify-center'>
        {row.original.passed && <CheckIcon className='size-4' />}
      </div>
    )
  }
];
