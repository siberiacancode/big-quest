'use client';

import React from 'react';
import { CaretSortIcon, PlusCircledIcon } from '@radix-ui/react-icons';
import type {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  Table,
  VisibilityState
} from '@tanstack/react-table';
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable
} from '@tanstack/react-table';
import { CheckIcon } from 'lucide-react';

import {
  Badge,
  Button,
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
  Popover,
  PopoverContent,
  PopoverTrigger,
  ScrollArea,
  Separator,
  Table as TableComponent,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui';
import { cn } from '@/lib/utils';
import { useSearchParams } from '@/utils/hooks';

import { I18nText } from '../common';

interface DataTableContextValue<TData = any> {
  rows: TData;
  table: Table<TData>;
  loading?: boolean;
  columns: ColumnDef<TData>[];
  pagination: {
    count: number;
    current: number;
    limit: number;
  };
}

const DataTableContext = React.createContext<DataTableContextValue>({} as DataTableContextValue);

export const getPageCount = (limit: number, count: number) => Math.ceil(count / limit);
export const getPageIndex = (current: number) => (current < 10 ? `0${current}` : current);
export const getPaginationNumbers = ({
  current,
  count,
  limit
}: {
  count: number;
  current: number;
  limit: number;
}): (number | '...')[] => {
  const maxButtons = 5;
  const pageCount = getPageCount(limit, count);
  const numbers: (number | '...')[] = [];

  if (pageCount <= maxButtons) {
    // eslint-disable-next-line no-plusplus
    for (let i = 1; i <= pageCount; i++) {
      numbers.push(i);
    }
  } else {
    const leftOffset = Math.floor(maxButtons / 2);
    let start = current - leftOffset;
    let end = current + leftOffset;

    if (start < 1) {
      start = 1;
      end = maxButtons;
    } else if (end > pageCount) {
      end = pageCount;
      start = pageCount - maxButtons + 1;
    }

    if (start > 1) {
      numbers.push(1);
      if (start > 2) numbers.push('...');
    }

    // eslint-disable-next-line no-plusplus
    for (let i = start; i <= end; i++) {
      numbers.push(i);
    }

    if (end < pageCount) {
      if (end < pageCount - 1) numbers.push('...');
      numbers.push(pageCount);
    }
  }

  return numbers;
};

interface DataTableProps<TData> extends React.ComponentProps<'div'> {
  children: React.ReactNode;
  rows: TData;
  table: Table<TData>;
  columns: ColumnDef<TData>[];
  loading?: boolean;
  pagination: { count: number; current: number; limit: number };
}

export const DataTable = React.forwardRef<HTMLDivElement, DataTableProps<any>>(
  <TData,>(
    { children, columns, rows, table, loading, pagination, ...props }: DataTableProps<TData>,
    ref
  ) => {
    const value = React.useMemo(
      () => ({
        columns,
        rows,
        table,
        loading,
        pagination
      }),
      [pagination]
    );

    return (
      <div
        className={cn('mt-10 w-full rounded-md bg-background p-4', loading && 'opacity-60')}
        ref={ref}
        {...props}
      >
        <DataTableContext.Provider value={value}>{children}</DataTableContext.Provider>
      </div>
    );
  }
);
DataTable.displayName = 'DataTable';

export const DataTableContent = React.forwardRef<HTMLDivElement, React.ComponentProps<'div'>>(
  ({ children, ...props }, ref) => (
    <div className='rounded-md border' ref={ref} {...props}>
      {children}
    </div>
  )
);
DataTableContent.displayName = 'DataTableContent';

export const DataTableComponent = ({
  children,
  ...props
}: React.ComponentProps<typeof TableComponent>) => (
  <TableComponent className='rounded-md border' {...props}>
    {children}
  </TableComponent>
);
DataTableComponent.displayName = 'DataTableComponent';

export const DataTableBody = (props: React.ComponentProps<typeof TableBody>) => {
  const dataTableContext = React.useContext(DataTableContext);
  return (
    <TableBody {...props}>
      {dataTableContext.table.getRowModel().rows.map((row) => (
        <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
          {row.getVisibleCells().map((cell) => (
            <TableCell key={cell.id}>
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  );
};
DataTableBody.displayName = 'DataTableBody';

export const DataTableHeader = (props: React.ComponentProps<typeof TableHeader>) => {
  const dataTableContext = React.useContext(DataTableContext);
  return (
    <TableHeader className='bg-secondary' {...props}>
      {dataTableContext.table.getHeaderGroups().map((headerGroup) => (
        <TableRow key={headerGroup.id}>
          {headerGroup.headers.map((header) => (
            <TableHead key={header.id}>
              {!header.isPlaceholder &&
                flexRender(header.column.columnDef.header, header.getContext())}
            </TableHead>
          ))}
        </TableRow>
      ))}
    </TableHeader>
  );
};
DataTableBody.displayName = 'DataTableBody';

interface DataTableColumnHeaderProps extends React.ComponentProps<'div'> {
  columnName: string;
  headerLabel: string;
  sortable: boolean;
  children: React.ReactNode;
}

export const DataTableColumnHeader = React.forwardRef<HTMLDivElement, DataTableColumnHeaderProps>(
  ({ columnName, children, sortable = false }, ref) => {
    const { searchParams, setSearchParam } = useSearchParams();
    const sorting = searchParams.get('sort');

    return (
      <div ref={ref} className='text-left'>
        {sortable && (
          <Button
            variant='ghost'
            onClick={() => {
              if (!sorting) setSearchParam('sort', columnName);
              else if (sorting === columnName) setSearchParam('sort', `-${sorting}`);
              else setSearchParam('sort', columnName);
            }}
          >
            {children}
            <CaretSortIcon className='ml-2 h-4 w-4' />
          </Button>
        )}
        {!sortable && <div>{children}</div>}
      </div>
    );
  }
);
DataTableColumnHeader.displayName = 'DataTableColumnHeader';

interface DataTableColumnHeaderLabelProps extends React.ComponentProps<'div'> {
  children: React.ReactNode;
}

export const DataTableColumnHeaderLabel = React.forwardRef<
  HTMLDivElement,
  DataTableColumnHeaderLabelProps
>(({ children, ...props }, ref) => (
  <div ref={ref} {...props}>
    {children}
  </div>
));
DataTableColumnHeaderLabel.displayName = 'DataTableColumnHeaderLabel';

interface DataTableFacetedFilterItemType {
  value: string;
  label: string;
}
export interface DataTableFacetedFilterProps {
  values: string[];
  onSelect: (value: string[]) => void;
  items: DataTableFacetedFilterItemType[];
  searchPlaceholder?: string;
  noResultsMsg?: string;
  title: string;
  icon?: React.ReactNode;
  isMulti?: boolean;
}

const MAX_SHOWN_FILTER_ITEMS = 2;

export const DataTableFacetedFilter = ({
  title,
  icon,
  items,
  onSelect,
  values,
  noResultsMsg = 'Ничего не найдено',
  searchPlaceholder = 'Поиск...',
  isMulti = false
}: DataTableFacetedFilterProps) => {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen} modal>
      <PopoverTrigger asChild>
        <Button variant='outline' size='sm' className=''>
          {icon || <PlusCircledIcon className='mr-2 h-4 w-4' />}
          {title}
          {!!values.length && (
            <>
              <Separator orientation='vertical' className='mx-2 h-4' />
              <Badge variant='secondary' className='rounded-sm px-1 font-normal lg:hidden'>
                {values.length}
              </Badge>
              <div className='hidden space-x-1 lg:flex'>
                {values.length > MAX_SHOWN_FILTER_ITEMS && (
                  <Badge variant='secondary' className='rounded-sm px-1 font-normal'>
                    {values.length} <I18nText path='combobox.selected' />
                  </Badge>
                )}
                {values.length <= MAX_SHOWN_FILTER_ITEMS &&
                  items
                    .filter((item) => values.includes(item.value))
                    .map((item) => (
                      <Badge
                        variant='secondary'
                        key={item.value}
                        className='rounded-sm px-1 font-normal'
                      >
                        <span className='max-w-[90px] truncate'>{item.label}</span>
                      </Badge>
                    ))}
              </div>
            </>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-[200px] p-0' align='start'>
        <Command>
          <CommandInput placeholder={searchPlaceholder} />
          <CommandEmpty>{noResultsMsg}</CommandEmpty>
          <ScrollArea className={cn('max-h-[220px] overflow-auto', !items.length && 'hidden')}>
            <CommandGroup>
              {items.map((item) => (
                <CommandItem
                  key={item.value}
                  onSelect={() => {
                    if (values.includes(item.value)) {
                      onSelect(values.filter((value) => value !== item.value));
                    } else if (isMulti) {
                      onSelect([...values, item.value]);
                    } else {
                      onSelect([item.value]);
                    }
                  }}
                >
                  <CheckIcon
                    className={cn(
                      'mr-2 h-4 w-4',
                      values.includes(item.value) ? 'opacity-100' : 'opacity-0'
                    )}
                  />
                  <p className='max-w-[150px] break-words'>{item.label}</p>
                </CommandItem>
              ))}
            </CommandGroup>
          </ScrollArea>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export interface DataTableToolbarProps<TData> extends React.ComponentProps<'div'> {
  toolbar: (table: Table<TData>) => React.ReactNode[];
}

export const DataTableToolbar = React.forwardRef<HTMLDivElement, DataTableToolbarProps<any>>(
  <TData,>({ toolbar, ...props }: DataTableToolbarProps<TData>, ref) => {
    const dataTableContext = React.useContext(DataTableContext);
    const toolbarItems = toolbar(dataTableContext.table);

    return (
      <div
        ref={ref}
        className='mb-[23px] mt-[11px] flex flex-wrap items-center gap-3 md:flex-nowrap'
        {...props}
      >
        {toolbarItems.map((toolbarItem, index) => (
          <React.Fragment key={index}>{toolbarItem}</React.Fragment>
        ))}
      </div>
    );
  }
);
DataTableToolbar.displayName = 'DataTableToolbar';

export const DataTableBottomContent = React.forwardRef<HTMLDivElement, React.ComponentProps<'div'>>(
  ({ children, ...props }, ref) => (
    <div className='mt-8 flex items-center justify-between mdx:flex-col' ref={ref} {...props}>
      {children}
    </div>
  )
);
DataTableBottomContent.displayName = 'DataTablePaginationContent';

interface DataTablePaginationProps
  extends Omit<React.ComponentProps<typeof Pagination>, 'onClick'> {
  onClick: (page: number) => void;
}

export const DataTablePagination = ({ onClick, ...props }: DataTablePaginationProps) => {
  const dataTableContext = React.useContext(DataTableContext);

  return (
    getPageCount(dataTableContext.pagination.limit, dataTableContext.pagination.count) > 1 && (
      <div>
        <Pagination {...props}>
          <PaginationContent className='flex flex-wrap justify-center'>
            <PaginationPrevious
              variant='outline'
              size='icon'
              disabled={dataTableContext.pagination.current <= 1}
              onClick={() => onClick(dataTableContext.pagination.current - 1)}
              className='mr-3 size-8 border-none'
            />

            {getPaginationNumbers(dataTableContext.pagination).map((page) => (
              <PaginationItem key={page}>
                {page === '...' && <PaginationEllipsis />}
                {page !== '...' && (
                  <Button
                    key={page}
                    variant={dataTableContext.pagination.current === page ? 'secondary' : 'outline'}
                    size='sm'
                    className='h-8 w-8 rounded-lg border border-secondary font-normal'
                    onClick={() => onClick(page)}
                  >
                    {getPageIndex(page)}
                  </Button>
                )}
              </PaginationItem>
            ))}

            <PaginationNext
              variant='outline'
              size='icon'
              disabled={
                dataTableContext.pagination.current + 1 >=
                getPageCount(dataTableContext.pagination.limit, dataTableContext.pagination.count)
              }
              onClick={() => onClick(dataTableContext.pagination.current + 1)}
              className='ml-3 size-8 border-none'
            />
          </PaginationContent>
        </Pagination>
      </div>
    )
  );
};
interface DataTableSelectedLabelProps extends Omit<React.ComponentProps<'div'>, 'children'> {
  children: (count: number, selectedCount: number) => React.ReactNode;
}

export const DataTableSelectedLabel = React.forwardRef<HTMLDivElement, DataTableSelectedLabelProps>(
  ({ children, ...props }, ref) => {
    const dataTableContext = React.useContext(DataTableContext);
    const selectedCount = dataTableContext.table.getFilteredSelectedRowModel().rows.length;

    return (
      <div ref={ref} className='text-sm text-muted-foreground mdx:pt-2' {...props}>
        {children(dataTableContext.pagination.count, selectedCount)}
      </div>
    );
  }
);
DataTableSelectedLabel.displayName = 'DataTableSelectedLabel';

interface DataTableCurrentPageLabelProps extends Omit<React.ComponentProps<'div'>, 'children'> {
  children: (count: number, current: number, limit: number) => React.ReactNode;
}

export const DataTableCurrentPageLabel = React.forwardRef<
  HTMLDivElement,
  DataTableCurrentPageLabelProps
>(({ children, ...props }, ref) => {
  const dataTableContext = React.useContext(DataTableContext);

  return (
    !!getPageCount(dataTableContext.pagination.limit, dataTableContext.pagination.count) && (
      <div ref={ref} {...props}>
        {children(
          dataTableContext.pagination.count,
          dataTableContext.pagination.current,
          dataTableContext.pagination.limit
        )}
      </div>
    )
  );
});
DataTableSelectedLabel.displayName = 'DataTableSelectedLabel';

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
    >
      <I18nText path={headerLabel} />
    </DataTableColumnHeader>
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

export const useDataTable = <TData,>(initialData: TData[], columns: ColumnDef<TData>[]) => {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data: initialData,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection
    }
  });

  return table;
};
