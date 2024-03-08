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
  Input,
  Typography
} from '@/components/ui';
import { cn } from '@/lib/utils';
import { useI18n } from '@/utils/contexts';

import { useAddAddressForm } from './hooks/useAddAddressForm';

interface AddAddressFormProps {
  onAdded: () => void;
}

export const AddAddressForm = ({ onAdded }: AddAddressFormProps) => {
  const i18n = useI18n();
  const { state, form, functions } = useAddAddressForm({ onAdded });

  return (
    <Form {...form}>
      <form onSubmit={functions.onSubmit} className='flex w-full flex-col items-end'>
        <div className='flex w-full gap-5 smx:flex-col'>
          <div className='flex-1 space-y-3'>
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
              name='street'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <I18nText path='field.street.label' />
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder={i18n.formatMessage({
                        id: 'field.street.placeholder'
                      })}
                    />
                  </FormControl>
                  <FormMessage>
                    {form.formState?.errors?.street && (
                      <I18nText path={form.formState.errors.street.message as LocaleMessageId} />
                    )}
                  </FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='house'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <I18nText path='field.house.label' />
                  </FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage>
                    {form.formState?.errors?.house && (
                      <I18nText path={form.formState.errors.house.message as LocaleMessageId} />
                    )}
                  </FormMessage>
                </FormItem>
              )}
            />
          </div>
          <div className='flex-1 space-y-3'>
            <FormField
              control={form.control}
              name='details'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <I18nText path='field.details.label' />
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder={i18n.formatMessage({
                        id: 'field.details.placeholder'
                      })}
                    />
                  </FormControl>
                  <FormMessage>
                    {form.formState?.errors?.details && (
                      <I18nText path={form.formState.errors.details.message as LocaleMessageId} />
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
        </div>

        <Button type='submit' variant='secondary' loading={state.isLoading}>
          <I18nText path='button.save' />
        </Button>
      </form>
    </Form>
  );
};
