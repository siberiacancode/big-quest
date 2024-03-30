import * as React from 'react';
import type { DateRange } from 'react-day-picker';
import { CalendarIcon } from '@radix-ui/react-icons';
import { format } from 'date-fns';

import { I18nText } from '@/components/common';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';

interface DatePickerWithRangeProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onSelect'> {
  value?: DateRange | undefined;
  onSelect: (value: DateRange | undefined) => void;
}

export const DatePickerWithRange = ({ className, value, onSelect }: DatePickerWithRangeProps) => {
  const [date, setDate] = React.useState<DateRange | undefined>(value);

  React.useEffect(() => {
    setDate(value);
  }, [value]);

  const handleDateChange = React.useCallback(
    (newDate: DateRange | undefined) => {
      setDate(newDate);
      onSelect(newDate);
    },
    [onSelect]
  );

  return (
    <div className={cn('grid gap-2', className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id='date'
            variant='outline'
            className={cn(
              'w-[300px] justify-start text-left font-normal',
              !date && 'text-muted-foreground'
            )}
          >
            <CalendarIcon className='mr-2 h-4 w-4' />
            {date?.from &&
              (date.to ? (
                <>
                  {format(date.from, 'LLL dd, y')} - {format(date.to, 'LLL dd, y')}
                </>
              ) : (
                format(date.from, 'LLL dd, y')
              ))}
            {!date?.from && <I18nText path='datePicker.label' />}
          </Button>
        </PopoverTrigger>
        <PopoverContent className='w-auto p-0' align='start'>
          <Calendar
            initialFocus
            mode='range'
            defaultMonth={date?.from}
            selected={date}
            onSelect={handleDateChange}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};
