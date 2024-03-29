import { AddressCombobox } from '@/components/comboboxes';
import { I18nText } from '@/components/common';
import {
  Button,
  ClockInput,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Switch,
  Typography
} from '@/components/ui';
import { cn } from '@/lib/utils';
import { convertLocalitiesToComboboxItems } from '@/utils/helpers/convertLocalitiesToComboboxItems';

import { DatePickerWithRange } from '../../../DatePickerWithRange/DatePickerWithRange';

import { useAddScheduleForm } from './hooks/useAddScheduleForm';

interface AddScheduleFormProps {
  onAdded: () => void;
}

export const AddScheduleForm = ({ onAdded }: AddScheduleFormProps) => {
  const { state, form, functions } = useAddScheduleForm({ onAdded });

  return (
    <Form {...form}>
      <form onSubmit={functions.onSubmit} className='flex w-full flex-col items-end'>
        <div className='flex w-full gap-5 smx:flex-col'>
          <div className='flex-1 space-y-3'>
            <FormField
              control={form.control}
              name='activity'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <I18nText path='field.chooseActivity.label' />
                  </FormLabel>
                  <AddressCombobox
                    value={field.value}
                    className='w-full'
                    onSelect={(newValue) => form.setValue('activity', newValue ?? '')}
                    convertAddresses={convertLocalitiesToComboboxItems}
                  />
                  <FormMessage>
                    {form.formState?.errors?.locality && (
                      <I18nText path={form.formState.errors.locality.message as LocaleMessageId} />
                    )}
                  </FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='locality'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <I18nText path='field.location.label' />
                  </FormLabel>
                  <AddressCombobox
                    value={field.value}
                    className='w-full'
                    onSelect={(newValue) => form.setValue('locality', newValue ?? '')}
                    convertAddresses={convertLocalitiesToComboboxItems}
                  />
                  <FormMessage>
                    {form.formState?.errors?.locality && (
                      <I18nText path={form.formState.errors.locality.message as LocaleMessageId} />
                    )}
                  </FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='lead'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <I18nText path='field.chooseLead.label' />
                  </FormLabel>
                  <AddressCombobox
                    value={field.value}
                    className='w-full'
                    onSelect={(newValue) => form.setValue('lead', newValue ?? '')}
                    convertAddresses={convertLocalitiesToComboboxItems}
                  />
                  <FormMessage>
                    {form.formState?.errors?.locality && (
                      <I18nText path={form.formState.errors.locality.message as LocaleMessageId} />
                    )}
                  </FormMessage>
                </FormItem>
              )}
            />

            <Typography variant='sub1' tag='p'>
              <I18nText path='addressCard.description.workingTime' />
            </Typography>
            {Array.from({ length: 7 }, (_, index) => {
              const day = index as 0 | 1 | 2 | 3 | 4 | 5 | 6;
              const dayOff = form.watch(`workingHours.${day}.dayOff`);

              return (
                <div className='mt-3 flex' key={day}>
                  <Button
                    type='button'
                    onClick={() => form.setValue(`workingHours.${day}.dayOff`, !dayOff)}
                    variant={dayOff ? 'secondary' : 'default'}
                    className={cn('max-h-6 w-6 rounded-md p-1 px-1.5 text-center text-[10px]')}
                  >
                    <I18nText path={`dayOfWeek.${day + 1}` as LocaleMessageId} />
                  </Button>
                  <div>
                    <FormField
                      control={form.control}
                      name={`workingHours.${day}.time.from`}
                      render={({ field }) => (
                        <>
                          <ClockInput
                            className='mx-2 h-6 w-11 border-0 border-b p-1'
                            disabled={dayOff}
                            {...field}
                          />
                          <FormMessage className='text-xs'>
                            {form.formState.errors?.workingHours?.[day]?.time?.from && (
                              <I18nText
                                path={
                                  form.formState.errors?.workingHours[day]?.time?.from
                                    ?.message as LocaleMessageId
                                }
                              />
                            )}
                          </FormMessage>
                        </>
                      )}
                    />
                  </div>
                  <I18nText path='dialog.addAddress.form.untill' />
                  <div>
                    <FormField
                      control={form.control}
                      name={`workingHours.${day}.time.to`}
                      render={({ field }) => (
                        <>
                          <ClockInput
                            className='mx-2 h-6 w-11 border-0 border-b p-1'
                            disabled={dayOff}
                            {...field}
                          />
                          <FormMessage className='text-xs'>
                            {form.formState.errors?.workingHours?.[day]?.time?.to && (
                              <I18nText
                                path={
                                  form.formState.errors?.workingHours[day]?.time?.to
                                    ?.message as LocaleMessageId
                                }
                              />
                            )}
                          </FormMessage>
                        </>
                      )}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div className='mt-2 flex-1 space-y-8'>
            <FormField
              control={form.control}
              name='preEntry'
              render={({ field }) => (
                <FormItem className='flex flex-col space-y-4'>
                  <FormLabel>
                    <I18nText path='field.preEntry.label' />
                  </FormLabel>
                  <FormControl>
                    <Switch checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <FormMessage>
                    {form.formState?.errors?.preEntry && (
                      <I18nText path={form.formState.errors.preEntry.message as LocaleMessageId} />
                    )}
                  </FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='isRepeat'
              render={({ field }) => (
                <FormItem className='flex flex-col space-y-4'>
                  <FormLabel>
                    <I18nText path='field.activity.label' />
                  </FormLabel>
                  <FormControl>
                    <Switch checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <FormMessage>
                    {form.formState?.errors?.isRepeat && (
                      <I18nText path={form.formState.errors.isRepeat.message as LocaleMessageId} />
                    )}
                  </FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='date'
              render={({ field }) => (
                <FormItem className='flex flex-col space-y-4'>
                  <FormLabel>
                    <I18nText path='field.activity.label' />
                  </FormLabel>
                  <FormControl>
                    <DatePickerWithRange
                      onChange={field.onChange}
                      onDateRangeChange={() => console.log('@', field.value)}
                    />
                    {/* <Switch checked={field.value} onCheckedChange={field.onChange} /> */}
                  </FormControl>
                  <FormMessage>
                    {form.formState?.errors?.date && (
                      <I18nText path={form.formState.errors.date.message as LocaleMessageId} />
                    )}
                  </FormMessage>
                </FormItem>
              )}
            />
          </div>
        </div>

        <Button type='submit' variant='secondary' loading={state.isLoading}>
          <I18nText path='button.save' />
        </Button>
      </form>
    </Form>
  );
};
