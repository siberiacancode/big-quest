import { Controller } from 'react-hook-form';

import { I18nText } from '@/components/common';
import { Input } from '@/components/ui';
import { cn } from '@/lib/utils';

interface WorkingTimeItemProps {
  control: any;
  day: number;
}

export const WorkingTimeItem = ({ day, control }: WorkingTimeItemProps) => (
  <div className='mt-3 flex'>
    <div
      className={cn(
        'w-6 rounded-md bg-gray-two p-1 px-1.5 text-center text-[10px] text-white',
        day === 6 && `bg-secondary text-current`
      )}
    >
      <I18nText path={`dayOfWeek.${day + 1}` as LocaleMessageId} />
    </div>
    <div>
      <Controller
        control={control}
        name={`workingHours.${day}.from`}
        render={({ field }) => (
          <>
            <Input className='mx-2 h-6 w-11 border-0 border-b p-1' placeholder='9:00' {...field} />
            {/* {fieldState?.error && (
              <span className='text-sm text-red-500'>{fieldState.error.message}</span>
            )} */}
          </>
        )}
      />
    </div>
    <I18nText path='addressModal.description.untill' />
    <div>
      <Controller
        control={control}
        name={`workingHours.${day}.to`}
        render={({ field }) => (
          <Input className='mx-2 h-6 w-11 border-0 border-b p-1' placeholder='18:00' {...field} />
        )}
      />
    </div>
  </div>
);
