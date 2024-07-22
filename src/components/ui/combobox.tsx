'use client';

import React from 'react';
import { ReloadIcon } from '@radix-ui/react-icons';
import { Check, ChevronsUpDown, XIcon } from 'lucide-react';

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
  value: string;
  label: string;
}

export interface ComboboxProps {
  value?: string;
  onSelect: (value: string | undefined) => void;
  items: ComboBoxItemType[];
  searchPlaceholder?: string;
  noResultsMsg?: string;
  selectItemMsg?: string;
  className?: string;
  unselect?: boolean;
  unselectMsg?: string;
  onSearchChange?: (e: string) => void;
  loading?: boolean;
  intersectionRef?: (node?: Element | null) => void;
}

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
  onSearchChange,
  loading = false,
  intersectionRef
}: ComboboxProps) => {
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
            {!!onSearchChange && (value || selectItemMsg)}
            {!onSearchChange &&
              (value ? items.find((item) => item.value === value)?.label : selectItemMsg)}
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
              {items.map((item) => (
                <CommandItem
                  key={item.value}
                  value={item.label}
                  onSelect={(currentValue) => {
                    onSelect(currentValue === item.label.toLowerCase() ? item.value : '');
                    setOpen(false);
                  }}
                >
                  {unselect && value === item.value && (
                    <XIcon
                      onClick={(event) => {
                        event.stopPropagation();
                        onSelect('');
                        setOpen(false);
                      }}
                      className='mr-2 h-4 w-4 hover:cursor-pointer'
                    />
                  )}
                  {!unselect && value === item.value && <Check className='mr-2 h-4 w-4' />}
                  {item.label}
                </CommandItem>
              ))}
              {intersectionRef && <div ref={intersectionRef} />}
            </CommandGroup>
          </ScrollArea>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
