'use client';

import { useIntl } from 'react-intl';

import { DadataCombobox } from '@/components/comboboxes';
import { I18nText } from '@/components/common';
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input
} from '@/components/ui';

import { WorkingTimeItem } from '../WorkingTimeItem/WorkingTimeItem';

import { useAddAddressForm } from './hooks/useAddAddressForm';

interface AddAddressFormProps {
  onAdded: () => void;
}

export const AddAddressForm = ({ onAdded }: AddAddressFormProps) => {
  const intl = useIntl();
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
                  <DadataCombobox
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
                    <I18nText path='addressCard.description.street' />
                  </FormLabel>
                  <FormControl>
                    <Input {...field} />
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
                    <I18nText path='addressCard.description.house' />
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
                    <I18nText path='addressCard.description.details' />
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder={intl.formatMessage({
                        id: 'addressModal.description.placeholder'
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
            <h3 className='font-medium'>
              <I18nText path='addressCard.description.workingTime' />
            </h3>
            {Array.from({ length: 7 }, (_, index) => (
              <WorkingTimeItem key={index} day={index} form={form} />
            ))}
          </div>
        </div>

        <Button type='submit' variant='secondary' loading={state.isLoading}>
          <I18nText path='button.save' />
        </Button>
      </form>
    </Form>
  );
};
