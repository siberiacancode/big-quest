import { I18nText } from '@/components/common';
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input
} from '@/components/ui';
import { useI18n } from '@/utils/contexts';

import { useAddEmployeeForm } from './hooks/useAddEmployeeForm';

interface AddEmployeeFormProps {
  onAdded: () => void;
}

export const AddEmployeeForm = ({ onAdded }: AddEmployeeFormProps) => {
  const i18n = useI18n();
  const { state, form, functions } = useAddEmployeeForm({ onAdded });

  return (
    <Form {...form}>
      <form onSubmit={functions.onSubmit} className='flex w-full flex-col items-end'>
        <div className='flex w-full gap-5 smx:flex-col'>
          <div className='flex-1 space-y-3'>
            <FormField
              control={form.control}
              name='role'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <I18nText path='field.street.label' />
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder={i18n.formatMessage({
                        id: 'field.street.placeholder'
                      })}
                    />
                  </FormControl>
                  <FormMessage>
                    {form.formState?.errors?.role && (
                      <I18nText path={form.formState.errors.role.message as LocaleMessageId} />
                    )}
                  </FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <I18nText path='field.house.label' />
                  </FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage>
                    {form.formState?.errors?.name && (
                      <I18nText path={form.formState.errors.name.message as LocaleMessageId} />
                    )}
                  </FormMessage>
                </FormItem>
              )}
            />
          </div>
          <div className='flex-1 space-y-3'>
            <FormField
              control={form.control}
              name='surname'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <I18nText path='field.details.label' />
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder={i18n.formatMessage({
                        id: 'field.details.placeholder'
                      })}
                    />
                  </FormControl>
                  <FormMessage>
                    {form.formState?.errors?.surname && (
                      <I18nText path={form.formState.errors.surname.message as LocaleMessageId} />
                    )}
                  </FormMessage>
                </FormItem>
              )}
            />
          </div>
        </div>

        <Button type='submit' variant='secondary' loading={state.isLoading}>
          <I18nText path='button.add' />
        </Button>
      </form>
    </Form>
  );
};
