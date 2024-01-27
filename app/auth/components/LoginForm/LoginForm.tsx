import React from 'react';
import { useIntl } from 'react-intl';

import { I18nText } from '@/components/common';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import { useLoginForm } from './hooks/useLoginForm';

const LoginForm = () => {
  const { form, functions } = useLoginForm();
  const intl = useIntl();

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
                <Input
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
          <I18nText path='button.loginForm.submit' />
        </Button>
      </form>
    </Form>
  );
};

export default LoginForm;
