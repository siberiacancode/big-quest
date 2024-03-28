'use client';

import { SendHorizonalIcon } from 'lucide-react';

import { I18nText } from '@/components/common';
import { Button, Form, FormField, FormItem, FormMessage, Textarea } from '@/components/ui';
import { useI18n } from '@/utils/contexts';

import { useAddOrganizationChangeForm } from './hooks/useAddOrganizationChangeForm';

export interface AddOrganizationChangeFormProps {
  organization: OrganizationResponse;
}

export const AddOrganizationChangeForm = ({ organization }: AddOrganizationChangeFormProps) => {
  const i18n = useI18n();
  const { form, functions, state } = useAddOrganizationChangeForm({ organization });

  return (
    <Form {...form}>
      <form onSubmit={functions.onSubmit} className='flex'>
        <FormField
          control={form.control}
          name='comment'
          render={({ field }) => (
            <FormItem className='flex-grow'>
              <Textarea
                {...field}
                className='h-24 w-full border border-secondary px-3 py-4'
                placeholder={i18n.formatMessage({ id: 'field.note.placeholder' })}
              />
              <FormMessage>
                {form.formState?.errors?.comment && (
                  <I18nText path={form.formState.errors.comment.message as LocaleMessageId} />
                )}
              </FormMessage>
            </FormItem>
          )}
        />

        <Button
          type='submit'
          variant='secondary'
          className='ml-3 mr-1 h-8 w-8 self-end p-2'
          disabled={state.isLoading}
        >
          <SendHorizonalIcon />
        </Button>
      </form>
    </Form>
  );
};
