import { ActivitiesCombobox, AddressCombobox, LeadsCombobox } from '@/components/comboboxes';
import { I18nText } from '@/components/common';
import {
  Button,
  ClockInput,
  DatePicker,
  DatePickerWithRange,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  NumberFormatInput,
  Switch,
  Typography
} from '@/components/ui';
import { cn } from '@/lib/utils';
import { convertLocalitiesToComboboxItems } from '@/utils/helpers/convertLocalitiesToComboboxItems';

import { useAddScheduleForm } from './hooks/useAddScheduleForm';

interface AddScheduleFormProps {
  onAdded: () => void;
}

export const AddScheduleForm = ({ onAdded }: AddScheduleFormProps) => {
  const { state, form, functions } = useAddScheduleForm({ onAdded });

  return (
    <Form {...form}>
      <form onSubmit={functions.onSubmit} className='flex w-full flex-col items-end gap-2'>
        <div className='flex w-full gap-5 smx:flex-col'>
          <div className='flex-1 space-y-3'>
            <FormField
              control={form.control}
              name='activityId'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <I18nText path='field.chooseActivity.label' />
                  </FormLabel>
                  <ActivitiesCombobox
                    value={field.value}
                    organizationId={state.organizationId}
                    onSelect={(newValue) => form.setValue('activityId', newValue ?? '')}
                    className='w-full'
                  />
                  <FormMessage>
                    {form.formState?.errors?.activityId && (
                      <I18nText
                        path={form.formState.errors.activityId.message as LocaleMessageId}
                      />
                    )}
                  </FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='addressId'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <I18nText path='field.location.label' />
                  </FormLabel>
                  <AddressCombobox
                    value={field.value}
                    className='w-full'
                    onSelect={(newValue) => form.setValue('addressId', newValue ?? '')}
                    convertAddresses={convertLocalitiesToComboboxItems}
                  />
                  <FormMessage>
                    {form.formState?.errors?.addressId && (
                      <I18nText path={form.formState.errors.addressId.message as LocaleMessageId} />
                    )}
                  </FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='leadingId'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <I18nText path='field.chooseLead.label' />
                  </FormLabel>
                  <LeadsCombobox
                    value={field.value}
                    className='w-full'
                    organizationId={state.organizationId}
                    onSelect={(newValue) => form.setValue('leadingId', newValue ?? '')}
                  />
                  <FormMessage>
                    {form.formState?.errors?.leadingId && (
                      <I18nText path={form.formState.errors.leadingId.message as LocaleMessageId} />
                    )}
                  </FormMessage>
                </FormItem>
              )}
            />
            {form.getValues('isRegularActivity') && (
              <>
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
                                className='mx-2 h-6 w-12 border-0 border-b p-1'
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
                      <I18nText path='dialog.addAddress.form.until' />
                      <div>
                        <FormField
                          control={form.control}
                          name={`workingHours.${day}.time.to`}
                          render={({ field }) => (
                            <>
                              <ClockInput
                                className='mx-2 h-6 w-12 border-0 border-b p-1'
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
              </>
            )}
          </div>
          <div className='mt-2 flex-1 space-y-8'>
            <FormField
              control={form.control}
              name='preEntry'
              render={({ field }) => (
                <FormItem className='flex flex-col space-y-3'>
                  <FormLabel>
                    <I18nText path='field.preEntry.label' />
                  </FormLabel>
                  <FormControl>
                    <div className='flex items-center gap-4 text-sm'>
                      <Switch checked={field.value} onCheckedChange={field.onChange} />
                      {form.getValues('preEntry') && <I18nText path='field.preEntry.true' />}
                      {!form.getValues('preEntry') && <I18nText path='field.preEntry.false' />}
                    </div>
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
              name='isRegularActivity'
              render={({ field }) => (
                <FormItem className='flex flex-col space-y-3'>
                  <FormLabel>
                    <I18nText path='field.activity.label' />
                  </FormLabel>
                  <FormControl>
                    <div className='flex items-center gap-4 text-sm'>
                      <Switch checked={field.value} onCheckedChange={field.onChange} />
                      {form.getValues('isRegularActivity') && (
                        <I18nText path='field.isRegularActivity.true' />
                      )}
                      {!form.getValues('isRegularActivity') && (
                        <I18nText path='field.isRegularActivity.false' />
                      )}
                    </div>
                  </FormControl>
                  <FormMessage>
                    {form.formState?.errors?.isRegularActivity && (
                      <I18nText
                        path={form.formState.errors.isRegularActivity.message as LocaleMessageId}
                      />
                    )}
                  </FormMessage>
                </FormItem>
              )}
            />
            {form.getValues('isRegularActivity') && (
              <FormField
                control={form.control}
                name='dateRange'
                render={({ field }) => (
                  <FormItem className='flex flex-col space-y-3'>
                    <FormLabel>
                      <I18nText path='field.startAndEndDate.label' />
                    </FormLabel>
                    <FormControl>
                      <DatePickerWithRange
                        // @ts-ignore
                        value={field.value}
                        onSelect={(newValue) => form.setValue('dateRange', newValue)}
                      />
                    </FormControl>
                    <FormMessage>
                      {form.formState?.errors?.dateRange && (
                        <I18nText
                          path={form.formState.errors.dateRange.message as LocaleMessageId}
                        />
                      )}
                    </FormMessage>
                  </FormItem>
                )}
              />
            )}
            {form.getValues('preEntry') === true && (
              <FormField
                control={form.control}
                name='numberOfSeats'
                render={({ field }) => (
                  <FormItem className='flex flex-col space-y-3'>
                    <FormLabel>
                      <I18nText path='field.numberOfSeats.label' />
                    </FormLabel>
                    <FormControl>
                      <NumberFormatInput {...field} />
                    </FormControl>
                    <FormMessage>
                      {form.formState?.errors?.numberOfSeats && (
                        <I18nText
                          path={form.formState.errors.numberOfSeats.message as LocaleMessageId}
                        />
                      )}
                    </FormMessage>
                  </FormItem>
                )}
              />
            )}
            {!form.getValues('isRegularActivity') && (
              <div className='flex flex-col gap-2'>
                <Typography tag='p' variant='sub3'>
                  <I18nText path='field.date.label' />
                </Typography>
                <div className='flex items-center'>
                  <FormField
                    control={form.control}
                    name='date'
                    render={({ field }) => (
                      <FormItem className='flex flex-col'>
                        <FormControl>
                          <DatePicker
                            onChange={field.onChange}
                            value={field.value}
                            className='w-40'
                          />
                        </FormControl>
                        <FormMessage>
                          {form.formState?.errors?.date && (
                            <I18nText
                              path={form.formState.errors.date.message as LocaleMessageId}
                            />
                          )}
                        </FormMessage>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name='time.from'
                    render={({ field }) => (
                      <>
                        <ClockInput
                          className='mx-2 h-6 w-12 border-0 border-b p-1'
                          disabled={false}
                          {...field}
                        />
                        <FormMessage className='text-xs'>
                          {form.formState.errors?.time?.from?.message && (
                            <I18nText
                              path={form.formState.errors?.time?.from?.message as LocaleMessageId}
                            />
                          )}
                        </FormMessage>
                      </>
                    )}
                  />
                  <I18nText path='dialog.addAddress.form.until' />
                  <FormField
                    control={form.control}
                    name='time.to'
                    render={({ field }) => (
                      <>
                        <ClockInput
                          className='mx-2 h-6 w-12 border-0 border-b p-1'
                          disabled={false}
                          {...field}
                        />
                        <FormMessage className='text-xs'>
                          {form.formState.errors?.time?.to && (
                            <I18nText
                              path={form.formState.errors?.time?.to?.message as LocaleMessageId}
                            />
                          )}
                        </FormMessage>
                      </>
                    )}
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        <Button type='submit' variant='secondary' loading={state.isLoading}>
          <I18nText path='button.save' />
        </Button>
      </form>
    </Form>
  );
};
