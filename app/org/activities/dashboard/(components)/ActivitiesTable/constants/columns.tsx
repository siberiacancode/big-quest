import type { ColumnDef } from '@tanstack/react-table';
import { Edit3Icon } from 'lucide-react';
import Link from 'next/link';

import { I18nText } from '@/components/common';
import { Button, buttonVariants, Checkbox, generateDataTableColumn } from '@/components/ui';
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
  {
    id: 'status',
    enableHiding: false,
    header: () => <I18nText path='table.column.activities.status' />,
    cell: ({ row }) => (
      <Button variant='secondary'>
        <I18nText
          path={
            `organization.activities.status.${row.original.status.toLowerCase()}` as LocaleMessageId
          }
        />
      </Button>
    )
  },
  generateDataTableColumn({
    accessorKey: 'category',
    headerLabel: 'table.column.activities.category',
    sortable: true,
    translateValue: true
  }),
  {
    id: 'view',
    enableHiding: false,
    header: () => <I18nText path='table.column.activities.view' />,
    cell: ({ row }) => (
      <Button variant='secondary'>
        <I18nText
          path={
            `organization.activities.view.${row.original.view.toLowerCase()}` as LocaleMessageId
          }
        />
      </Button>
    )
  },
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
