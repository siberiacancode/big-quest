import type { ColumnDef } from '@tanstack/react-table';

import { I18nText } from '../../I18nText/I18nText';
import { DataTableColumnHeader } from '../components/DataTableColumnHeader/DataTableColumnHeader';

export interface ColumnConfig<TData> {
  accessorKey: keyof TData;
  sortable?: boolean;
  headerLabel: LocaleMessageId;
  translateValue?: boolean;
}

export const generateDataTableColumn = <TData,>({
  accessorKey,
  headerLabel,
  sortable = false,
  translateValue = false
}: ColumnConfig<TData>): ColumnDef<TData> => ({
  accessorKey,
  header: () => (
    <DataTableColumnHeader
      columnName={String(accessorKey)}
      headerLabel={headerLabel}
      sortable={sortable}
    />
  ),
  cell: ({ row }) => (
    <div className='px-4 text-left font-medium'>
      {translateValue && <I18nText path={row.getValue(String(accessorKey)) as LocaleMessageId} />}
      {!translateValue && row.getValue(String(accessorKey))}
    </div>
  ),
  enableSorting: sortable,
  enableHiding: true
});
