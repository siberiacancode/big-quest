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

export interface ComboBoxOption<Option> {
  id: string;
  value: Option;
  label: string;
}

export type ComboboxProps<Option> = {
  value?: ComboBoxOption<Option>;
  onSelect: (value?: ComboBoxOption<Option>) => void;
  items: ComboBoxOption<Option>[];
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

export const Combobox = <Option,>({
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
}: ComboboxProps<Option>) => {
  const [open, setOpen] = React.useState(false);

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
            {!!onSearchChange && (value?.label || selectItemMsg)}
            {!onSearchChange && value?.label}
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
                    onSelect(undefined);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      'mr-2 h-4 w-4',
                      value === undefined ? 'opacity-100' : 'opacity-0'
                    )}
                  />
                  {unselectMsg}
                </CommandItem>
              )}
              {items.map((item) => (
                <CommandItem
                  key={item.id}
                  value={item.id}
                  onSelect={(currentId) => {
                    onSelect(currentId === item.id.toLowerCase() ? item : undefined);
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
