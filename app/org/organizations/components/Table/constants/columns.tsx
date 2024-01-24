import type { ColumnDef } from '@tanstack/react-table';
import { Edit3Icon } from 'lucide-react';

import { Button, Checkbox } from '@/components/ui';
import { generateColumn } from '@/utils/helpers/generateColumn';

import type { Application } from '../types';

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
  generateColumn({ accessorKey: 'organization', headerLabel: 'Организация' }),
  generateColumn({ accessorKey: 'location', headerLabel: 'Населенный пункт', sortable: true }),
  generateColumn({ accessorKey: 'type', headerLabel: 'Тип', sortable: true }),
  generateColumn({ accessorKey: 'rate', headerLabel: 'Тариф', sortable: true }),
  generateColumn({ accessorKey: 'days_amount', headerLabel: 'Кол-во дней', sortable: true }),
  generateColumn({ accessorKey: 'status', headerLabel: 'Статус', sortable: true }),
  {
    id: 'actions',
    enableHiding: false,
    cell: () => {
      return (
        <Button variant='ghost' className='h-8 w-8 p-0'>
          <Edit3Icon className='h-4 w-4' />
        </Button>
      );
    }
  }
];
