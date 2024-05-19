import type { ColumnDef } from '@tanstack/react-table';

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
    headerLabel: 'table.column.schedule.date',
    centered: true
  }),
  generateDataTableColumn({
    accessorKey: 'time',
    headerLabel: 'table.column.schedule.time',
    centered: true
  }),
  generateDataTableColumn({
    accessorKey: 'numberOfSeats',
    headerLabel: 'table.column.schedule.numberOfSeats',
    centered: true
  }),
  generateDataTableColumn({
    accessorKey: 'isDone',
    headerLabel: 'table.column.schedule.isDone',
    centered: true
  })
];
