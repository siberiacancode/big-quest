'use client';

import { AddressCombobox } from '@/components/comboboxes';
import { I18nText } from '@/components/common';
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  PhoneNumberInput,
  RadioGroup,
  RadioGroupItem
} from '@/components/ui';

import { convertLocationsToComboboxItems } from './helpers/convertLocationsToComboboxItems';
import { useRegisterOrganizationForm } from './hooks/useRegisterOrganizationForm';

interface RegisterOrganizationFormProps {
  onRegistered: () => void;
}

export const RegisterOrganizationForm = ({ onRegistered }: RegisterOrganizationFormProps) => {
  const { state, form, functions } = useRegisterOrganizationForm({ onRegistered });

  return (
    <Form {...form}>
      <form onSubmit={functions.onSubmit} className='w-full space-y-5'>
        <FormField
          control={form.control}
          name='type'
          render={({ field }) => (
            <FormItem className='space-y-3'>
              <FormLabel>
                <I18nText path='radio.legalType.label' />
              </FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className='flex flex-col space-y-1'
                >
                  <FormItem className='flex items-center space-x-3 space-y-0'>
                    <FormControl>
                      <RadioGroupItem value='PARTNER' />
                    </FormControl>
                    <FormLabel>
                      <I18nText path='radio.legalType.partner.label' />
                    </FormLabel>
                  </FormItem>
                  <FormItem className='flex items-center space-x-3 space-y-0'>
                    <FormControl>
                      <RadioGroupItem value='SPONSOR' />
                    </FormControl>
                    <FormLabel>
                      <I18nText path='radio.legalType.sponsor.label' />
                    </FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='organization'
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                <I18nText path='field.organization.label' />
              </FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage>
                {form.formState?.errors?.organization && (
                  <I18nText path={form.formState.errors.organization.message as LocaleMessageId} />
                )}
              </FormMessage>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='location'
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                <I18nText path='field.location.label' />
              </FormLabel>
              {/* <AddressCombobox
                value={field.value}
                className='w-full'
                // @ts-ignore
                onSelect={(newValue) => form.setValue('location', newValue ?? '')}
                convertAddresses={convertLocationsToComboboxItems}
              /> */}
              <AddressCombobox
                // @ts-ignore
                value={field.value}
                className='w-full'
                onSelect={(newValue) => {
                  // @ts-ignore
                  form.setValue('location', newValue);
                }}
                // @ts-ignore
                convertAddresses={convertLocationsToComboboxItems}
              />
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
          name='contactName'
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                <I18nText path='field.contactName.label' />
              </FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage>
                {form.formState?.errors?.contactName && (
                  <I18nText path={form.formState.errors.contactName.message as LocaleMessageId} />
                )}
              </FormMessage>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='phone'
          render={({ field: { onChange, ...field } }) => (
            <FormItem>
              <FormLabel>
                <I18nText path='field.phone.label' />
              </FormLabel>
              <FormControl>
                <PhoneNumberInput onValueChange={({ value }) => onChange(value)} {...field} />
              </FormControl>
              <FormMessage>
                {form.formState?.errors?.phone && (
                  <I18nText path={form.formState.errors.phone.message as LocaleMessageId} />
                )}
              </FormMessage>
            </FormItem>
          )}
        />

        <Button
          type='submit'
          size='lg'
          className='w-full bg-taiga text-white hover:bg-taiga-foreground'
          loading={state.isLoading}
        >
          <I18nText path='button.registerOrganization' />
        </Button>
      </form>
    </Form>
  );
};
