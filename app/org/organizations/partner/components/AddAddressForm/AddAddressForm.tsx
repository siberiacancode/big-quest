'use client';

import { useIntl } from 'react-intl';

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

import { WorkingTimeBlock } from '../WorkingTimeBlock/WorkingTimeBlock';

import { useAddAddressForm } from './hooks/useAddAddressForm';

interface AddAddressFormProps {
  onAdded: () => void;
}

export const AddAddressForm = ({ onAdded }: AddAddressFormProps) => {
  const { state, form, functions } = useAddAddressForm({ onAdded });
  const intl = useIntl();
  return (
    <Form {...form}>
      <form onSubmit={functions.onSubmit} className='flex w-full flex-col items-end'>
        <div className='flex w-full gap-5 smx:flex-col'>
          <div className='flex-1 space-y-3'>
            {/* Тут Димин компонент нужен будет для адреса, видимо */}
            <FormField
              control={form.control}
              name='location'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <I18nText path='table.column.location' />
                  </FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage>
                    {form.formState?.errors?.location && (
                      <I18nText path={form.formState.errors.location.message as LocaleMessageId} />
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
            {/* Сделать обработку времени */}
            <WorkingTimeBlock />
          </div>
        </div>

        <Button type='submit' variant='secondary' loading={state.isLoading}>
          <I18nText path='button.save' />
        </Button>
      </form>
    </Form>
  );
};
