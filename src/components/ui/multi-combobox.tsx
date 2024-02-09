'use client';

import React from 'react';
import { ReloadIcon } from '@radix-ui/react-icons';
import { Check } from 'lucide-react';

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

import type { ComboBoxItemType } from './combobox';
import { Input } from './input';
import { ScrollArea } from './scroll-area';

export type MultiComboboxProps = {
  values: string[];
  onSelect: (value: string[]) => void;
  items: ComboBoxItemType[];
  searchPlaceholder?: string;
  noResultsMsg?: string;
  selectItemMsg?: string;
  className?: string;
  onSearchChange?: (e: string) => void;
  loading?: boolean;
  trigger?: React.ReactNode;
};

export const MultiCombobox = ({
  values,
  onSelect,
  items,
  searchPlaceholder = 'Поиск...',
  noResultsMsg = 'Ничего не найдено',
  selectItemMsg = 'Выберите из списка...',
  className,
  onSearchChange,
  loading = false,
  trigger
}: MultiComboboxProps) => {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen} modal>
      <PopoverTrigger asChild>
        {trigger || (
          <Button
            variant='secondary'
            role='combobox'
            aria-expanded={open}
            className={cn('justify-between gap-1', className)}
          >
            {selectItemMsg}
          </Button>
        )}
      </PopoverTrigger>
      <PopoverContent className='w-[200px] p-0' align='start'>
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
          <ScrollArea className={cn('max-h-[220px] overflow-auto', !items.length && 'hidden')}>
            <CommandGroup>
              {items.map((item) => (
                <CommandItem
                  key={item.value}
                  onSelect={() => {
                    if (values.includes(item.value))
                      onSelect(values.filter((value) => value !== item.value));
                    else onSelect([...values, item.value]);
                  }}
                >
                  <Check
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
