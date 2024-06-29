'use client';

import { I18nText } from '@/components/common';
import {
  Button,
  Checkbox,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  PasswordInput
} from '@/components/ui';
import { useI18n } from '@/utils/contexts';

import { useLoginForm } from './hooks/useLoginForm';

export const LoginForm = () => {
  const i18n = useI18n();
  const { state, form, functions } = useLoginForm();

  return (
    <Form {...form}>
      <form onSubmit={functions.onSubmit} className='space-y-3'>
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
                  disabled={state.isLoading}
                  placeholder={i18n.formatMessage({ id: 'field.email.placeholder' })}
                  {...field}
                />
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
                <PasswordInput
                  disabled={state.isLoading}
                  placeholder={i18n.formatMessage({ id: 'field.password.placeholder' })}
                  {...field}
                />
              </FormControl>
              <FormMessage>
                {form.formState?.errors?.password && (
                  <I18nText path={form.formState.errors.password.message as LocaleMessageId} />
                )}
              </FormMessage>
            </FormItem>
          )}
        />
        <div className='flex flex-col space-y-6'>
          <div className='mt-3 flex items-center'>
            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Checkbox disabled={state.isLoading} {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <span className='px-2 text-xs text-muted-foreground'>
              <I18nText path='page.org.auth.rememberMe' />
            </span>
          </div>
          <Button type='submit' size='lg' variant='primary' loading={state.isLoading}>
            <I18nText path='button.login' />
          </Button>
        </div>
      </form>
    </Form>
  );
};
