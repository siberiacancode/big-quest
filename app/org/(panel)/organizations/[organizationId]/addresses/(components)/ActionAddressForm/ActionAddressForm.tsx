'use client';

import type { AddressResponseDto } from '@/api-types';
import { AddressCombobox } from '@/components/comboboxes';
import { I18nText } from '@/components/common';
import type { ComboBoxOption } from '@/components/ui';
import {
  Button,
  ClockInput,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  PhoneNumberInput,
  Typography
} from '@/components/ui';
import { cn } from '@/lib/utils';

import type { AddressData } from '../../(constants)/types';

import { useActionAddressForm } from './hooks/useActionAddressForm';
import type { AddressActionType } from './constants';
import { convertLocalitiesToComboboxItems } from './helpers';

interface ActionAddressProps<ActionType extends AddressActionType> {
  onAction: () => void;
  actionType: ActionType;
  address?: AddressData;
}

export const ActionAddressForm = <ActionType extends AddressActionType>({
  onAction,
  actionType,
  address
}: ActionAddressProps<ActionType>) => {
  const { state, form, functions } = useActionAddressForm({ onAction, actionType, address });

  return (
    <Form {...form}>
      <form onSubmit={functions.onSubmit} className='w-full'>
        <fieldset disabled={state.isLoading} className='flex w-full flex-col items-end'>
          <div className='flex w-full gap-5 smx:flex-col'>
            <div className='flex-1 space-y-3'>
              <FormField
                control={form.control}
                name='locality'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      <I18nText path='field.address.label' />
                    </FormLabel>
                    <AddressCombobox
                      value={field.value as ComboBoxOption<AddressResponseDto>}
                      className='w-full'
                      onSelect={(newValue) => {
                        if (newValue) form.setValue('locality', newValue);
                      }}
                      convertAddresses={convertLocalitiesToComboboxItems}
                    />
                    <FormMessage>
                      {form.formState?.errors?.locality && (
                        <I18nText
                          path={form.formState.errors.locality.message as LocaleMessageId}
                        />
                      )}
                    </FormMessage>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='phone'
                render={({ field: { onChange, ref, ...field } }) => (
                  <FormItem>
                    <FormLabel>
                      <I18nText path='field.phone.label' />
                    </FormLabel>
                    <FormControl>
                      <PhoneNumberInput
                        disabled={state.isLoading}
                        onValueChange={({ value }) => onChange(value)}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage>
                      {form.formState?.errors?.phone && (
                        <I18nText path={form.formState.errors.phone.message as LocaleMessageId} />
                      )}
                    </FormMessage>
                  </FormItem>
                )}
              />
            </div>
            <div className='flex-1 space-y-3'>
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
                    <I18nText path='dialog.addAddress.form.untill' />
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
            </div>
          </div>

          <Button type='submit' variant='secondary' loading={state.isLoading}>
            <I18nText path='button.save' />
          </Button>
        </fieldset>
      </form>
    </Form>
  );
};
