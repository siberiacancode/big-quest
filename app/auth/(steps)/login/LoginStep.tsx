'use client';

import { ChevronLeftIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';

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
  NumberFormatInput,
  Typography
} from '@/components/ui';
import { useI18n } from '@/utils/contexts';

import { useLoginStep } from './hooks/useLoginStep';

export const LoginStep = () => {
  const i18n = useI18n();
  const router = useRouter();

  const { state, form, functions } = useLoginStep();

  return (
    <div className='flex min-h-screen md:items-center md:justify-center'>
      <div className='mx-auto max-w-lg px-4 py-[40px]'>
        <Button
          variant='outline'
          size='icon'
          className='absolute left-4 top-8 lg:hidden'
          onClick={() => router.back()}
        >
          <ChevronLeftIcon />
        </Button>
        <Typography variant='h4' className='mx-auto w-[70%] text-center font-semibold'>
          <I18nText path='auth.login.title' />
        </Typography>

        <Form {...form}>
          <form onSubmit={functions.onSubmit} className='mt-[72px]'>
            <fieldset disabled={state.isLoading}>
              <FormField
                control={form.control}
                name='userId'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      <I18nText path='field.userId.label' />
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder={i18n.formatMessage({ id: 'field.userId.placeholder' })}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage>
                      {form?.formState?.errors?.userId && (
                        <I18nText path={form.formState.errors.userId.message as LocaleMessageId} />
                      )}
                    </FormMessage>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='code'
                render={({ field }) => (
                  <FormItem className='mt-5'>
                    <FormLabel>
                      <I18nText path='field.code.label' />
                    </FormLabel>
                    <FormControl>
                      <NumberFormatInput
                        placeholder={i18n.formatMessage({ id: 'field.code.placeholder' })}
                        minLength={4}
                        maxLength={4}
                        type='tel'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage>
                      {form.formState?.errors?.code && (
                        <I18nText path={form.formState.errors.code.message as LocaleMessageId} />
                      )}
                    </FormMessage>
                  </FormItem>
                )}
              />

              <Button
                type='submit'
                size='lg'
                variant='primary'
                loading={state.isLoading}
                className='mt-[72px] w-full'
              >
                <I18nText path='button.login' />
              </Button>
            </fieldset>
          </form>
        </Form>

        <Button variant='link' onClick={functions.goToRegister} className='mx-auto mt-3 block'>
          <Typography tag='p' variant='body3' className='underline'>
            <I18nText path='button.goToRegister' />
          </Typography>
        </Button>
      </div>
    </div>
  );
};
