import { PlusCircledIcon } from '@radix-ui/react-icons';

import { I18nText } from '@/components/common';
import type { MultiComboboxProps } from '@/components/ui';
import { Badge, Button, MultiCombobox, Separator } from '@/components/ui';

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
