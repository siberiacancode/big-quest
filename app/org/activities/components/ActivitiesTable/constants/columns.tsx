import type { ColumnDef } from '@tanstack/react-table';
import { Edit3Icon } from 'lucide-react';
import Link from 'next/link';

import { buttonVariants, Checkbox, generateDataTableColumn } from '@/components/ui';
import { cn } from '@/lib/utils';
import { ROUTES } from '@/utils/constants';

import type { ActivitiesTableRow } from '../helpers/convertActivitiesToTableRows';

export const columns: ColumnDef<ActivitiesTableRow>[] = [
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
    accessorKey: 'organization',
    headerLabel: 'table.column.activities.organization',
    sortable: true
  }),
  generateDataTableColumn({
    accessorKey: 'activity',
    headerLabel: 'table.column.activities.activity',
    sortable: true
  }),
  generateDataTableColumn({
    accessorKey: 'location',
    headerLabel: 'table.column.activities.location',
    sortable: true
  }),
  generateDataTableColumn({
    accessorKey: 'status',
    headerLabel: 'table.column.activities.status',
    sortable: true,
    translateValue: true
  }),
  generateDataTableColumn({
    accessorKey: 'category',
    headerLabel: 'table.column.activities.category',
    sortable: true
  }),
  generateDataTableColumn({
    accessorKey: 'type',
    headerLabel: 'table.column.activities.type'
  }),
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => (
      <Link
        href={`${ROUTES.ORG.ORGANIZATIONS.ROOT}/${row.original.id}/profile`}
        className={cn('h-8 w-8 p-0', buttonVariants({ variant: 'ghost' }))}
      >
        <div>
          <Edit3Icon className='size-4' />
        </div>
      </Link>
    )
  }
];
