import type { ColumnDef } from '@tanstack/react-table';
import { Edit3Icon } from 'lucide-react';

import { Button, Checkbox } from '@/components/ui';
import { generateDataTableColumn } from '@/utils/helpers';

export const columns: ColumnDef<OrganizationsTableRow>[] = [
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
  generateDataTableColumn({
    accessorKey: 'name',
    headerLabel: 'table.column.organization.name'
  }),
  generateDataTableColumn({
    accessorKey: 'location',
    headerLabel: 'table.column.organization.location',
    sortable: true
  }),
  generateDataTableColumn({
    accessorKey: 'type',
    headerLabel: 'table.column.organization.type',
    sortable: true
  }),
  generateDataTableColumn({
    accessorKey: 'rate',
    headerLabel: 'table.column.organization.rate',
    sortable: true
  }),
  generateDataTableColumn({
    accessorKey: 'daysAmount',
    headerLabel: 'table.column.organization.daysAmount',
    sortable: true
  }),
  generateDataTableColumn({
    accessorKey: 'stage',
    headerLabel: 'table.column.organization.stage',
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
