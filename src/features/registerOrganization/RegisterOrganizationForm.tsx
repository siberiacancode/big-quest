'use client';

import { I18nText } from '@/components/common';
import {
  Button,
  Combobox,
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
import { convertAddressesToComboboxItems } from '@/utils/helpers';

import { useRegisterOrganizationForm } from './hooks/useRegisterOrganizationForm';

interface RegisterOrganizationFormProps {
  onSuccessSubmit: () => void;
}

export const RegisterOrganizationForm = ({ onSuccessSubmit }: RegisterOrganizationFormProps) => {
  const { state, form, functions } = useRegisterOrganizationForm({ onSuccessSubmit });

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
              <Combobox
                value={field.value}
                className='w-full'
                items={convertAddressesToComboboxItems(state.locations)}
                onSelect={(newValue) => form.setValue('location', newValue!)}
                onSearchChange={functions.debouncedSetLocationSearch}
                loading={state.locationsLoading}
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
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                <I18nText path='field.phone.label' />
              </FormLabel>
              <FormControl>
                <PhoneNumberInput {...field} />
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
          loading={state.registerLoading}
        >
          <I18nText path='button.registerOrganization' />
        </Button>
      </form>
    </Form>
  );
};
