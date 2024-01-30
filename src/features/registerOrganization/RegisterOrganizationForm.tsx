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
  Input,
  PhoneNumberInput,
  RadioGroup,
  RadioGroupItem
} from '@/components/ui';
import { useI18n } from '@/utils/contexts/i18n';

import { useRegisterOrganizationForm } from './hooks/useRegisterOrganizationForm';

export const RegisterOrganizationForm = () => {
  const intl = useI18n();
  const { state, form, functions } = useRegisterOrganizationForm();

  return (
    <Form {...form}>
      <form onSubmit={functions.onSubmit} className='space-y-5'>
        <FormField
          control={form.control}
          name='type'
          render={({ field }) => (
            <FormItem className='space-y-3'>
              <FormLabel>
                <I18nText path='radioGroup.legalType.label' />
              </FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className='flex flex-col space-y-1'
                >
                  <FormItem className='flex items-center space-x-3 space-y-0'>
                    <FormControl>
                      <RadioGroupItem value='partner' />
                    </FormControl>
                    <FormLabel>
                      <I18nText path='radioGroup.legalType.partner.label' />
                    </FormLabel>
                  </FormItem>
                  <FormItem className='flex items-center space-x-3 space-y-0'>
                    <FormControl>
                      <RadioGroupItem value='sponsor' />
                    </FormControl>
                    <FormLabel>
                      <I18nText path='radioGroup.legalType.sponsor.label' />
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
              <FormLabel>
                {form.formState?.errors?.organization && (
                  <I18nText path={form.formState.errors.organization.message as LocaleMessageId} />
                )}
              </FormLabel>
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
                onSearchChange={functions.onLocationSearchChange}
                value={field.value}
                className='w-full'
                items={state.locations}
                onSelect={(newValue) => form.setValue('location', newValue!)}
              />
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
              <FormLabel>
                {form.formState?.errors?.contactName && (
                  <I18nText path={form.formState.errors.contactName.message as LocaleMessageId} />
                )}
              </FormLabel>
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
              <FormLabel>
                {form.formState?.errors?.phone && (
                  <I18nText path={form.formState.errors.phone.message as LocaleMessageId} />
                )}
              </FormLabel>
            </FormItem>
          )}
        />

        <Button type='submit'>
          <I18nText path='button.registerOrganization' />
        </Button>
      </form>
    </Form>
  );
};
