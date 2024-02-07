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
  const { state, form, functions } = useLoginForm();
  const intl = useI18n();

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
                  placeholder={intl.formatMessage({ id: 'field.email.placeholder' })}
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
                  {...field}
                  placeholder={intl.formatMessage({ id: 'field.password.placeholder' })}
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
            <Checkbox />
            <span className='px-2 text-xs text-muted-foreground'>
              <I18nText path='org.auth.rememberMe' />
            </span>
          </div>
          <Button
            type='submit'
            size='lg'
            className='w-full bg-taiga text-white hover:bg-taiga-foreground'
            loading={state.isLoading}
          >
            <I18nText path='button.login' />
          </Button>
        </div>
      </form>
    </Form>
  );
};
