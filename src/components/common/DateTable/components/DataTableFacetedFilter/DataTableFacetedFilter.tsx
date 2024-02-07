import { PlusCircledIcon } from '@radix-ui/react-icons';

import type { ComboBoxItemType } from '@/components/ui';
import { Badge, Button, MultiCombobox, Separator } from '@/components/ui';

import { useDataTableFacetedFilter } from './hooks/useDataTableFacetedFilter';

export interface DataTableFacetedFilterProps {
  columnName: string;
  items: ComboBoxItemType[];
  title?: string;
}

export const DataTableFacetedFilter = ({
  items,
  columnName,
  title
}: DataTableFacetedFilterProps) => {
  const { functions, state } = useDataTableFacetedFilter({ columnName });

  return (
    <MultiCombobox
      values={state.selectedValues}
      items={items}
      onSelect={functions.onFilterSelect}
      trigger={
        <Button variant='outline' size='sm' className='h-8 border-dashed'>
          <PlusCircledIcon className='mr-2 h-4 w-4' />
          {title || columnName}
          {!!state.selectedValues.length && (
            <>
              <Separator orientation='vertical' className='mx-2 h-4' />
              <Badge variant='secondary' className='rounded-sm px-1 font-normal lg:hidden'>
                {state.selectedValues.length}
              </Badge>
              <div className='hidden space-x-1 lg:flex'>
                {state.selectedValues.length > 2 && (
                  <Badge variant='secondary' className='rounded-sm px-1 font-normal'>
                    {state.selectedValues.length} selected
                  </Badge>
                )}
                {state.selectedValues.length <= 2 &&
                  items
                    .filter((item) => state.selectedValues.includes(item.value))
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
    />
  );
};
