import { I18nText } from '@/components/common';
import {
  Button,
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  NumberFormatInput,
  Typography
} from '@/components/ui';

import { useEditOrganizationTariffForm } from './hooks/useEditOrganizationTariffForm';

export interface EditOrganizationTariffFormProps {
  organization: OrganizationResponse;
  tariff: TariffResponse;
  onEdited: () => void;
}

export const EditOrganizationTariffForm = ({
  onEdited,
  tariff,
  organization
}: EditOrganizationTariffFormProps) => {
  const { form, functions, state } = useEditOrganizationTariffForm({
    onEdited,
    organization,
    tariff
  });

  return (
    <Form {...form}>
      <form onSubmit={functions.onSubmit} className='grid grid-cols-2'>
        <FormField
          control={form.control}
          name='freeActivity'
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                <I18nText path='field.freeActivity.label' />
              </FormLabel>
              <div className='flex items-center gap-3'>
                <Button
                  className='size-7 px-0 py-0'
                  variant='outline'
                  onClick={() => form.setValue('freeActivity', field.value - 1)}
                >
                  <Typography className='text-sm'>
                    <I18nText path='button.plus' />
                  </Typography>
                </Button>
                <NumberFormatInput {...field} className='w-12' />
                <Button
                  className='size-7 px-0 py-0'
                  variant='outline'
                  onClick={() => form.setValue('freeActivity', field.value + 1)}
                >
                  <Typography className='text-sm'>
                    <I18nText path='button.minus' />
                  </Typography>
                </Button>
              </div>
              <FormMessage>
                {form.formState?.errors?.freeActivity && (
                  <I18nText path={form.formState.errors.freeActivity.message as LocaleMessageId} />
                )}
              </FormMessage>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='paidActivity'
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                <I18nText path='field.paidActivity.label' />
              </FormLabel>
              <div className='flex items-center gap-3'>
                <Button
                  className='size-7 px-0 py-0'
                  variant='outline'
                  onClick={() => form.setValue('paidActivity', field.value - 1)}
                >
                  <Typography className='text-sm'>
                    <I18nText path='button.plus' />
                  </Typography>
                </Button>
                <NumberFormatInput {...field} className='w-12' min={0} max={1000} />
                <Button
                  className='size-7 px-0 py-0'
                  variant='outline'
                  onClick={() => form.setValue('paidActivity', field.value + 1)}
                >
                  <Typography className='text-sm'>
                    <I18nText path='button.minus' />
                  </Typography>
                </Button>
              </div>
              <FormMessage>
                {form.formState?.errors?.paidActivity && (
                  <I18nText path={form.formState.errors.paidActivity.message as LocaleMessageId} />
                )}
              </FormMessage>
            </FormItem>
          )}
        />

        <Button
          type='submit'
          variant='secondary'
          className='px-8 font-bold'
          loading={state.isLoading}
        >
          <I18nText path='button.updateTariff' />
        </Button>
      </form>
    </Form>
  );
};
