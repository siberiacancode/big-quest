import type { ColumnDef } from '@tanstack/react-table';
import { CheckIcon } from 'lucide-react';

import { I18nText } from '@/components/common';
import { Checkbox, generateDataTableColumn } from '@/components/ui';

export const columns: ColumnDef<$TSFIXME>[] = [
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
    accessorKey: 'activityName',
    headerLabel: 'table.column.schedule.activityName'
  }),
  generateDataTableColumn({
    accessorKey: 'locality',
    headerLabel: 'table.column.schedule.locality'
  }),
  generateDataTableColumn({
    accessorKey: 'employee',
    headerLabel: 'table.column.schedule.employee'
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
    accessorKey: 'maxNumberOfParticipants',
    headerLabel: 'table.column.schedule.maxNumberOfParticipants'
  }),
  {
    id: 'actions',
    header: () => <I18nText path='table.column.schedule.passed' />,
    enableHiding: false,
    cell: ({ row }) => <div>{row.original.passed && <CheckIcon className='size-4' />}</div>
  }
];
