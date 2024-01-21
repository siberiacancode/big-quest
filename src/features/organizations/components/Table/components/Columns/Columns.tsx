import * as React from 'react';
import { CaretSortIcon } from '@radix-ui/react-icons';
import type { ColumnDef } from '@tanstack/react-table';
import { Edit3Icon } from 'lucide-react';

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

import type { Application } from '../../types';

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
    header: () => {
      return <div>Организация</div>;
    },
    cell: ({ row }) => <div>{row.getValue('organization')}</div>
  },
  {
    accessorKey: 'location',
    header: ({ column }) => {
      return (
        <div className='text-left'>
          <Button
            variant='ghost'
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            Населенный пункт
            <CaretSortIcon className='ml-2 h-4 w-4' />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      return <div className='px-4 text-left font-medium'>{row.getValue('location')}</div>;
    }
  },
  {
    accessorKey: 'type',
    header: ({ column }) => {
      return (
        <div className='text-left'>
          <Button
            variant='ghost'
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            Тип
            <CaretSortIcon className='ml-2 h-4 w-4' />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      return <div className='px-4 text-left font-medium'>{row.getValue('type')}</div>;
    }
  },
  {
    accessorKey: 'rate',
    header: ({ column }) => {
      return (
        <div className='text-left'>
          <Button
            variant='ghost'
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            Тариф
            <CaretSortIcon className='ml-2 h-4 w-4' />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('rate'));
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(amount);

      return <div className='px-4 text-left font-medium'>{formatted}</div>;
    }
  },
  {
    accessorKey: 'days_amount',
    header: ({ column }) => {
      return (
        <div className='text-left'>
          <Button
            variant='ghost'
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            Кол-во дней
            <CaretSortIcon className='ml-2 h-4 w-4' />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      return <div className='px-4 text-left font-medium'>{row.getValue('days_amount')}</div>;
    }
  },
  {
    accessorKey: 'status',
    header: ({ column }) => {
      return (
        <div className='text-left'>
          <Button
            variant='ghost'
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            Статус
            <CaretSortIcon className='ml-2 h-4 w-4' />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => <div className='px-4 capitalize'>{row.getValue('status')}</div>
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
              <Edit3Icon className='h-4 w-4' />
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
