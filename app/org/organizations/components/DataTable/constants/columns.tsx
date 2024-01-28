import type { ColumnDef } from '@tanstack/react-table';
import { Edit3Icon } from 'lucide-react';

import { Button, Checkbox } from '@/components/ui';

import type { Application } from '../types';
import { generateColumn } from '../utils/helpers/generateColumn';

export const columns: ColumnDef<Application>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label='Select all'
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label='Select row'
      />
    ),
    enableSorting: false,
    enableHiding: false
  },
  generateColumn({
    accessorKey: 'organization',
    headerLabel: 'organiations.text.organization'
  }),
  generateColumn({
    accessorKey: 'location',
    headerLabel: 'organiations.text.location',
    sortable: true
  }),
  generateColumn({ accessorKey: 'type', headerLabel: 'organiations.text.type', sortable: true }),
  generateColumn({ accessorKey: 'rate', headerLabel: 'organiations.text.rate', sortable: true }),
  generateColumn({
    accessorKey: 'days_amount',
    headerLabel: 'organiations.text.daysCount',
    sortable: true
  }),
  generateColumn({
    accessorKey: 'status',
    headerLabel: 'organiations.text.status',
    sortable: true
  }),
  {
    id: 'actions',
    enableHiding: false,
    cell: () => (
      <Button variant='ghost' className='h-8 w-8 p-0'>
        <Edit3Icon className='h-4 w-4' />
      </Button>
    )
  }
];
