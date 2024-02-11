'use client';

import React from 'react';
import { CaretSortIcon, PlusCircledIcon } from '@radix-ui/react-icons';
import type { ColumnDef, Table } from '@tanstack/react-table';
import { flexRender } from '@tanstack/react-table';

import { I18nText } from '@/components/common';
import type { MultiComboboxProps } from '@/components/ui';
import {
  Badge,
  Button,
  MultiCombobox,
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
  Separator,
  Table as TableComponent,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui';
import { useSearchParams } from '@/utils/hooks';

import { getPageIndex } from '../common/DateTable/components/DataTablePagination/helpers/getPageIndex';
import { getPaginationNumbers } from '../common/DateTable/components/DataTablePagination/helpers/getPaginationNumbers';

type DataTableContextValue<TData = any> = {
  rows: TData;
  table: Table<TData>;

  columns: ColumnDef<TData>[];
};

const DataTableContext = React.createContext<DataTableContextValue>({} as DataTableContextValue);

interface DataTableProps<TData> extends React.ComponentProps<'div'> {
  children: React.ReactNode;
  rows: TData;
  table: Table<TData>;
  columns: ColumnDef<TData>[];
}

export const DataTable = React.forwardRef<HTMLDivElement, DataTableProps<any>>(
  <TData,>({ children, ...props }: DataTableProps<TData>, ref) => {
    const value = React.useMemo(
      () => ({
        columns: props.columns,
        rows: props.rows,
        table: props.table
      }),
      []
    );
    return (
      <div className='mt-10 w-full rounded-md bg-background p-4' ref={ref} {...props}>
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
      {dataTableContext.table.getRowModel().rows?.length ? (
        dataTableContext.table.getRowModel().rows.map((row) => (
          <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
            {row.getVisibleCells().map((cell) => (
              <TableCell key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            ))}
          </TableRow>
        ))
      ) : (
        <TableRow>
          <TableCell colSpan={dataTableContext.columns.length} className='h-24 text-center'>
            <I18nText path='field.results.noResults' />
          </TableCell>
        </TableRow>
      )}
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

export interface DataTableFacetedFilterProps extends MultiComboboxProps {
  title: string;
}

export const DataTableFacetedFilter = ({ title, ...props }: DataTableFacetedFilterProps) => (
  <MultiCombobox
    trigger={
      <Button variant='outline' size='sm' className=''>
        <PlusCircledIcon className='mr-2 h-4 w-4' />
        {title}
        {!!props.values.length && (
          <>
            <Separator orientation='vertical' className='mx-2 h-4' />
            <Badge variant='secondary' className='rounded-sm px-1 font-normal lg:hidden'>
              {props.values.length}
            </Badge>
            <div className='hidden space-x-1 lg:flex'>
              {props.values.length > 2 && (
                <Badge variant='secondary' className='rounded-sm px-1 font-normal'>
                  {props.values.length} <I18nText path='combobox.selected' />
                </Badge>
              )}
              {props.values.length <= 2 &&
                props.items
                  .filter((item) => props.values.includes(item.value))
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
    }
    {...props}
  />
);

export interface DataTableToolbarProps<TData> extends React.ComponentProps<'div'> {
  toolbar: (table: Table<TData>) => React.ReactNode[];
}

export const DataTableToolbar = React.forwardRef<HTMLDivElement, DataTableToolbarProps<any>>(
  <Data,>({ toolbar, ...props }: DataTableToolbarProps<Data>, ref) => {
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
  pagination: PaginationResponse;
  onClick: (page: number) => void;
}

export const DataTablePagination = ({
  pagination: { count, current, limit },
  onClick,
  ...props
}: DataTablePaginationProps) => (
  <div>
    <Pagination {...props}>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href='#' onClick={() => onClick(current - 1)} />
        </PaginationItem>
        {getPaginationNumbers({ current, count, limit }).map((page) => (
          <PaginationItem>
            {page === '...' && <PaginationEllipsis />}
            {page !== '...' && (
              <Button
                key={page}
                variant={current === page ? 'secondary' : 'outline'}
                size='sm'
                className='h-8 w-8 rounded-lg border border-secondary font-normal'
                onClick={() => onClick(page)}
              >
                {getPageIndex(page)}
              </Button>
            )}
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext href='#' onClick={() => onClick(current + 1)} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  </div>
);

interface DataTableSelectedLabelProps extends React.ComponentProps<'div'> {
  count: number;
}

export const DataTableSelectedLabel = React.forwardRef<HTMLDivElement, DataTableSelectedLabelProps>(
  ({ count, ...props }, ref) => {
    const dataTableContext = React.useContext(DataTableContext);

    return (
      <div ref={ref} className='text-sm text-muted-foreground mdx:pt-2' {...props}>
        {dataTableContext.table.getFilteredSelectedRowModel().rows.length}{' '}
        <I18nText path='pagination.from' /> {count} <I18nText path='pagination.selected' />
      </div>
    );
  }
);
DataTableSelectedLabel.displayName = 'DataTableSelectedLabel';
