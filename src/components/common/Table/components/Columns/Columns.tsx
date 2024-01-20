import * as React from 'react';
import { CaretSortIcon, DotsHorizontalIcon } from '@radix-ui/react-icons';
import type { ColumnDef } from '@tanstack/react-table';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';

import type { Application } from '../../data/types';

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

  {
    accessorKey: 'organization',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Организация
          <CaretSortIcon className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    cell: ({ row }) => <div>{row.getValue('organization')}</div>
  },
  {
    accessorKey: 'location',
    header: () => <div className='text-right'>Населенный пункт</div>,
    cell: ({ row }) => {
      return <div className='text-right font-medium'>{row.getValue('location')}</div>;
    }
  },
  {
    accessorKey: 'type',
    header: () => <div className='text-right'>Тип</div>,
    cell: ({ row }) => {
      return <div className='text-right font-medium'>{row.getValue('type')}</div>;
    }
  },
  {
    accessorKey: 'rate',
    header: () => <div className='text-right'>Тариф</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('rate'));

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(amount);

      return <div className='text-right font-medium'>{formatted}</div>;
    }
  },
  {
    accessorKey: 'days_amount',
    header: () => <div className='text-right'>Кол-во дней</div>,
    cell: ({ row }) => {
      return <div className='text-right font-medium'>{row.getValue('days_amount')}</div>;
    }
  },
  {
    accessorKey: 'status',
    header: 'Статус',
    cell: ({ row }) => <div className='capitalize'>{row.getValue('status')}</div>
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: () => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='ghost' className='h-8 w-8 p-0'>
              <span className='sr-only'>Open menu</span>
              <DotsHorizontalIcon className='h-4 w-4' />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem>Copy payment ID</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }
  }
];
