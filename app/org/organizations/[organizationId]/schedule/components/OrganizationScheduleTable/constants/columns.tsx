import type { ColumnDef } from '@tanstack/react-table';

import { Checkbox, generateDataTableColumn } from '@/components/ui';

import type { ScheduleTableRow } from '../helpers/convertSchedulesToTableRows';

export const columns: ColumnDef<ScheduleTableRow>[] = [
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
    headerLabel: 'table.column.organization.name'
  }),
  generateDataTableColumn({
    accessorKey: 'locality',
    headerLabel: 'table.column.organization.locality'
  }),
  generateDataTableColumn({
    accessorKey: 'date',
    headerLabel: 'table.column.organization.type'
  }),
  generateDataTableColumn({
    accessorKey: 'time',
    headerLabel: 'table.column.organization.tariff'
  }),
  generateDataTableColumn({
    accessorKey: 'registrationCount',
    headerLabel: 'table.column.organization.countDays'
  }),
  generateDataTableColumn({
    accessorKey: 'passed',
    headerLabel: 'table.column.organization.stage'
  })
];
