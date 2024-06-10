'use client';

import React from 'react';
import { ReloadIcon } from '@radix-ui/react-icons';
import { Check, ChevronsUpDown } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem
} from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';

import { Input } from './input';
import { ScrollArea } from './scroll-area';

export interface ComboBoxItemType {
  value: string | object;
  label: string;
}

export type ComboboxProps = {
  value?: string | object;
  onSelect: (value: string | object) => void;
  items: ComboBoxItemType[];
  searchPlaceholder?: string;
  noResultsMsg?: string;
  selectItemMsg?: string;
  className?: string;
  unselect?: boolean;
  unselectMsg?: string;
  onSearchChange?: (e: string) => void;
  loading?: boolean;
};

const popOverStyles = {
  width: 'var(--radix-popover-trigger-width)'
};

export const Combobox = ({
  value,
  onSelect,
  items,
  searchPlaceholder = 'Поиск...',
  noResultsMsg = 'Ничего не найдено',
  selectItemMsg = 'Выберите из списка...',
  className,
  unselect = false,
  unselectMsg = 'Оставить пустым',
  onSearchChange,
  loading = false
}: ComboboxProps) => {
  const [open, setOpen] = React.useState(false);

  const getLabelForValue = (val?: string | object) => {
    const item = items.find((item) => JSON.stringify(item.value) === JSON.stringify(val));
    return item ? item.label : '';
  };

  return (
    <Popover open={open} onOpenChange={setOpen} modal>
      <PopoverTrigger asChild>
        <Button
          variant='secondary'
          role='combobox'
          aria-expanded={open}
          className={cn(
            'justify-between gap-1 border-2 border-secondary bg-input-foreground',
            className
          )}
        >
          <span className={cn('font-normal', !value && 'text-placeholder')}>
            {!!onSearchChange && (value ? getLabelForValue(value) : selectItemMsg)}
            {!onSearchChange && (value ? getLabelForValue(value) : selectItemMsg)}
          </span>
          <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        style={popOverStyles}
        className='popover-content-width-same-as-its-trigger p-0'
      >
        <Command>
          {!!onSearchChange && (
            <Input
              className='focus-visible:ring-0'
              placeholder={searchPlaceholder}
              onChange={(event) => onSearchChange(event.currentTarget.value)}
            />
          )}
          {!onSearchChange && (
            <CommandInput placeholder={searchPlaceholder} onValueChange={onSearchChange} />
          )}
          <CommandEmpty>
            {loading && <ReloadIcon className='mx-auto h-4 w-4 animate-spin' />}
            {!loading && noResultsMsg}
          </CommandEmpty>
          <ScrollArea
            className={cn('max-h-[220px] overflow-auto', !items.length && !unselect && 'hidden')}
          >
            <CommandGroup className='dark:bg-background'>
              {unselect && (
                <CommandItem
                  key='unselect'
                  value=''
                  onSelect={() => {
                    onSelect('');
                    setOpen(false);
                  }}
                >
                  <Check className={cn('mr-2 h-4 w-4', !value ? 'opacity-100' : 'opacity-0')} />
                  {unselectMsg}
                </CommandItem>
              )}
              {items.map((item) => (
                <CommandItem
                  key={JSON.stringify(item.value)}
                  value={typeof item.value === 'string' ? item.value : JSON.stringify(item.value)}
                  onSelect={() => {
                    onSelect(item.value);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      'mr-2 h-4 w-4',
                      value === item.value ? 'opacity-100' : 'opacity-0'
                    )}
                  />
                  {item.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </ScrollArea>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
