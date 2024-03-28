'use client';

import { I18nText } from '@/components/common';
import {
  Button,
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  NumberFormatInput,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Typography
} from '@/components/ui';
import { useI18n } from '@/utils/contexts';

import { periodMonthOptions } from './constants/tariffOptions';
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
  const i18n = useI18n();
  const { form, functions, state } = useEditOrganizationTariffForm({
    onEdited,
    organization,
    tariff
  });

  return (
    <Form {...form}>
      <form onSubmit={functions.onSubmit}>
        <div className='grid grid-cols-2 gap-x-[100px] gap-y-[30px]'>
          <FormField
            control={form.control}
            name='freeActivity'
            render={({ field }) => (
              <FormItem className='flex flex-col gap-3 px-2'>
                <FormLabel className='font-bold'>
                  <I18nText path='field.freeActivity.label' />
                </FormLabel>
                <div className='flex items-center gap-3 self-center'>
                  <Button
                    className='size-7 px-0 py-0'
                    variant='outline'
                    onClick={() => form.setValue('freeActivity', `${+field.value - 1}`)}
                  >
                    <Typography className='text-sm'>
                      <I18nText path='button.plus' />
                    </Typography>
                  </Button>
                  <NumberFormatInput {...field} className='w-12' />
                  <Button
                    className='size-7 px-0 py-0'
                    variant='outline'
                    onClick={() => form.setValue('freeActivity', `${+field.value + 1}`)}
                  >
                    <Typography className='text-sm'>
                      <I18nText path='button.minus' />
                    </Typography>
                  </Button>
                </div>
                <FormMessage>
                  {form.formState?.errors?.freeActivity && (
                    <I18nText
                      path={form.formState.errors.freeActivity.message as LocaleMessageId}
                    />
                  )}
                </FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='paidActivity'
            render={({ field }) => (
              <FormItem className='flex flex-col gap-3 px-2'>
                <FormLabel className='font-bold'>
                  <I18nText path='field.paidActivity.label' />
                </FormLabel>
                <div className='flex items-center gap-3 self-center'>
                  <Button
                    className='size-7 px-0 py-0'
                    variant='outline'
                    onClick={() => form.setValue('paidActivity', `${+field.value - 1}`)}
                  >
                    <Typography className='text-sm'>
                      <I18nText path='button.plus' />
                    </Typography>
                  </Button>
                  <NumberFormatInput {...field} className='w-12' />
                  <Button
                    className='size-7 px-0 py-0'
                    variant='outline'
                    onClick={() => form.setValue('paidActivity', `${+field.value + 1}`)}
                  >
                    <Typography className='text-sm'>
                      <I18nText path='button.minus' />
                    </Typography>
                  </Button>
                </div>
                <FormMessage>
                  {form.formState?.errors?.paidActivity && (
                    <I18nText
                      path={form.formState.errors.paidActivity.message as LocaleMessageId}
                    />
                  )}
                </FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='periodMonth'
            render={({ field }) => (
              <FormItem className='flex flex-col gap-3 px-2'>
                <FormLabel className='font-bold'>
                  <I18nText path='field.periodMonth.label' />
                </FormLabel>
                <Select {...field} onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger className='w-full'>
                    <SelectValue
                      className='block w-full'
                      placeholder={i18n.formatMessage({ id: 'field.periodMonth.placeholder' })}
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {periodMonthOptions.map((periodMonthOption) => (
                        <SelectItem
                          value={periodMonthOption.monthsAmount.toString()}
                          className='block w-full'
                        >
                          <div className='flex items-center gap-4'>
                            <Typography variant='body2' className='flex-grow'>
                              <I18nText
                                path='organization.profile.tariff.periodMonth'
                                values={{ monthsAmount: periodMonthOption.monthsAmount }}
                              />
                            </Typography>
                            <Typography variant='body3' className=''>
                              <I18nText
                                path='organization.profile.tariff.discount'
                                values={{ discount: periodMonthOption.discount }}
                              />
                            </Typography>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <FormMessage>
                  {form.formState?.errors?.periodMonth && (
                    <I18nText path={form.formState.errors.periodMonth.message as LocaleMessageId} />
                  )}
                </FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='totalPrice'
            render={({ field }) => (
              <FormItem className='flex flex-col gap-3 px-2'>
                <FormLabel className='font-bold'>
                  <I18nText path='field.totalPrice.label' />
                </FormLabel>
                <div>
                  <NumberFormatInput {...field} />
                  <Typography variant='body1' tag='p' className='line-through'>
                    <I18nText path='common.rubles' values={{ amount: tariff.totalPrice }} />
                  </Typography>
                </div>
                <FormMessage>
                  {form.formState?.errors?.totalPrice && (
                    <I18nText path={form.formState.errors.totalPrice.message as LocaleMessageId} />
                  )}
                </FormMessage>
              </FormItem>
            )}
          />
        </div>

        <Button
          type='submit'
          variant='secondary'
          className='mt-[77px] font-bold'
          loading={state.isLoading}
        >
          <I18nText path='button.updateTariff' />
        </Button>
      </form>
    </Form>
  );
};
