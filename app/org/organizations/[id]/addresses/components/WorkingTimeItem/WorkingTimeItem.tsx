import { I18nText } from '@/components/common';
import { ClockInput, FormField, FormMessage } from '@/components/ui';
import { cn } from '@/lib/utils';

interface WorkingTimeItemProps {
  day: number;
  form: any;
}

export const WorkingTimeItem = ({ day, form }: WorkingTimeItemProps) => (
  <div className='mt-3 flex'>
    <div
      className={cn(
        'max-h-6 w-6 rounded-md bg-gray-two p-1 px-1.5 text-center text-[10px] text-white',
        day === 6 && `bg-secondary text-current`
      )}
    >
      <I18nText path={`dayOfWeek.${day + 1}` as LocaleMessageId} />
    </div>
    <div>
      <FormField
        control={form.control}
        name={`workingHours.${day}.from`}
        render={({ field }) => (
          <>
            <ClockInput
              className='mx-2 h-6 w-11 border-0 border-b p-1'
              placeholder='09:00'
              {...field}
            />
            <FormMessage className='text-xs'>
              {form.formState.errors?.workingHours?.[day]?.from && (
                <I18nText
                  path={form.formState.errors.workingHours[day].from.message as LocaleMessageId}
                />
              )}
            </FormMessage>
          </>
        )}
      />
    </div>
    <I18nText path='addressModal.description.untill' />
    <div>
      <FormField
        control={form.control}
        name={`workingHours.${day}.to`}
        render={({ field }) => (
          <>
            <ClockInput
              className='mx-2 h-6 w-11 border-0 border-b p-1'
              placeholder='18:00'
              {...field}
            />
            <FormMessage className='text-xs'>
              {form.formState.errors?.workingHours?.[day]?.to && (
                <I18nText
                  path={form.formState.errors.workingHours[day].to.message as LocaleMessageId}
                />
              )}
            </FormMessage>
          </>
        )}
      />
    </div>
  </div>
);
