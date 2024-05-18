import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';

import { I18nText } from '@/components/common';
import { Button, Calendar, Popover, PopoverContent, PopoverTrigger } from '@/components/ui';
import { cn } from '@/lib/utils';

export type DatePickerProps = {
  value?: Date;
  onChange: (value: Date | undefined) => void;
  className?: string;
};

export const DatePicker = ({ onChange, value, className }: DatePickerProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant='outline'
          className={cn(
            'w-[240px] pl-3 text-left font-normal',
            !value && 'text-muted-foreground',
            className
          )}
        >
          {value ? format(value, 'PPP') : <I18nText path='field.datePicker.label' />}
          <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-auto p-0' align='start'>
        <Calendar
          mode='single'
          selected={value}
          onSelect={onChange}
          disabled={(date) => date < new Date('1900-01-01')}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
};
