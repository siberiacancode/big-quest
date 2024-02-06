import { CaretSortIcon } from '@radix-ui/react-icons';
import type { ColumnDef } from '@tanstack/react-table';

import { I18nText } from '@/components/common';
import { Button } from '@/components/ui';

interface ColumnConfig<TData> {
  accessorKey: keyof TData;
  sortable?: boolean;
  headerLabel: LocaleMessageId;
}

export const generateDataTableColumn = <TData,>({
  accessorKey,
  headerLabel,
  sortable = false
}: ColumnConfig<TData>): ColumnDef<TData> => ({
  accessorKey,
  header: ({ column }) => (
    <div className='text-left'>
      {sortable ? (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          <I18nText path={headerLabel} />
          <CaretSortIcon className='ml-2 h-4 w-4' />
        </Button>
      ) : (
        <div>
          <I18nText path={headerLabel} />
        </div>
      )}
    </div>
  ),
  cell: ({ row }) => {
    const value: string | number = row.getValue(String(accessorKey));
    return <div className='px-4 text-left font-medium'>{value}</div>;
  },
  enableSorting: sortable,
  enableHiding: true
});
