import React from 'react';

import { I18nText } from '@/components/common';
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  Input,
  PasswordInput
} from '@/components/ui';
import { useI18n } from '@/utils/contexts/i18n';

import { useLoginForm } from './hooks/useLoginForm';

export const LoginForm = () => {
  const intl = useI18n();
  const { form, functions } = useLoginForm();

  return (
    <Form {...form}>
      <form onSubmit={functions.onSubmit} className='space-y-5'>
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                <I18nText path='field.email.label' />
              </FormLabel>
              <FormControl>
                <Input
                  placeholder={intl.formatMessage({ id: 'field.email.placeholder' })}
                  {...field}
                />
              </FormControl>
              <FormLabel>
                {form?.formState?.errors?.email && (
                  <I18nText path={form.formState.errors.email.message as LocaleMessageId} />
                )}
              </FormLabel>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                <I18nText path='field.password.label' />
              </FormLabel>
              <FormControl>
                <PasswordInput
                  placeholder={intl.formatMessage({ id: 'field.password.placeholder' })}
                  {...field}
                />
              </FormControl>
              <FormLabel>
                {form.formState?.errors?.password && (
                  <I18nText path={form.formState.errors.password.message as LocaleMessageId} />
                )}
              </FormLabel>
            </FormItem>
          )}
        />
        <Button type='submit'>
          <I18nText path='button.login' />
        </Button>
      </form>
    </Form>
  );
};
