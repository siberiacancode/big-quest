import { Controller } from 'react-hook-form';

import { I18nText } from '@/components/common';
import { Input } from '@/components/ui';

interface WorkingTimeItemProps {
  control: any;
  day: string;
}

export const WorkingTimeItem = ({ day, control }: WorkingTimeItemProps) => (
  <div className='mt-3 flex'>
    <div className='w-6 rounded-md bg-gray-two p-1 px-1.5 text-center text-[10px] text-white '>
      <I18nText path={`dayOfWeek.${day}` as LocaleMessageId} />
    </div>
    <div>
      <Controller
        control={control}
        name={`workingHours.${day}.start`}
        render={({ field }) => (
          <>
            <Input className='mx-2 h-6 w-11 border-0 border-b p-1' placeholder='8:30' {...field} />
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
        name={`workingHours.${day}.end`}
        render={({ field }) => (
          <Input className='mx-2 h-6 w-11 border-0 border-b p-1' placeholder='17:30' {...field} />
        )}
      />
    </div>
  </div>
);
