'use client';

import { I18nText } from '@/components/common';
import {
  Button,
  Checkbox,
  EmailInput,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  PasswordInput
} from '@/components/ui';

import { useLoginForm } from './hooks/useLoginForm';

export const LoginForm = () => {
  const { state, form, functions } = useLoginForm();

  return (
    <Form {...form}>
      <form onSubmit={functions.onSubmit} className='space-y-8'>
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                <I18nText path='field.email.label' />
              </FormLabel>
              <FormControl>
                <EmailInput {...field} />
              </FormControl>
              <FormMessage>
                {form?.formState?.errors?.email && (
                  <I18nText path={form.formState.errors.email.message as LocaleMessageId} />
                )}
              </FormMessage>
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
                <PasswordInput {...field} />
              </FormControl>
              <FormMessage>
                {form.formState?.errors?.password && (
                  <I18nText path={form.formState.errors.password.message as LocaleMessageId} />
                )}
              </FormMessage>
            </FormItem>
          )}
        />
        <div className='flex items-center'>
          <Checkbox />
          <span className='px-2 text-xs text-muted-foreground'>
            <I18nText path='org.auth.rememberMe' />
          </span>
        </div>
        <Button
          type='submit'
          size='lg'
          className='w-full bg-taiga hover:bg-taiga-foreground'
          loading={state.authLoading}
        >
          <I18nText path='button.login' />
        </Button>
      </form>
    </Form>
  );
};
