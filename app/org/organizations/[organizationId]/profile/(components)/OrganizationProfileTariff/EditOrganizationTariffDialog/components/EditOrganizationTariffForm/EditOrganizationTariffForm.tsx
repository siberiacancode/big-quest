'use client';

import { MinusIcon, PlusIcon } from 'lucide-react';

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
  tariff: TariffResponse;
  onEdited: () => void;
}

export const EditOrganizationTariffForm = ({
  onEdited,
  tariff
}: EditOrganizationTariffFormProps) => {
  const i18n = useI18n();
  const { form, functions, state } = useEditOrganizationTariffForm({
    onEdited,
    tariff
  });

  return (
    <Form {...form}>
      <form
        onSubmit={functions.onSubmit}
        className='grid grid-cols-2 gap-x-[100px] gap-y-[30px] lgx:gap-x-14 mdx:mx-auto mdx:w-[80%] mdx:grid-cols-1 xsx:w-[100%]'
      >
        <FormField
          control={form.control}
          name='freeActivity'
          render={({ field }) => (
            <FormItem className='flex flex-col justify-center'>
              <div className='flex flex-col gap-3 px-1'>
                <FormLabel className='text-base font-bold mdx:text-center'>
                  <I18nText path='field.freeActivity.label' />
                </FormLabel>
                <div className='flex items-center gap-3 mdx:justify-center'>
                  <Button
                    type='button'
                    className='size-7 px-0 py-0'
                    variant='outline'
                    onClick={() => form.setValue('freeActivity', `${+field.value - 1}`)}
                  >
                    <MinusIcon className='size-4' />
                  </Button>
                  <NumberFormatInput {...field} className='w-14 text-center text-lg font-medium' />
                  <Button
                    type='button'
                    className='size-7 px-0 py-0'
                    variant='outline'
                    onClick={() => form.setValue('freeActivity', `${+field.value + 1}`)}
                  >
                    <PlusIcon className='size-4' />
                  </Button>
                </div>
              </div>
              <FormMessage className='mdx:text-center'>
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
              <div className='flex flex-col gap-3 px-1'>
                <FormLabel className='text-base font-bold mdx:text-center'>
                  <I18nText path='field.paidActivity.label' />
                </FormLabel>
                <div className='flex items-center gap-3 mdx:justify-center'>
                  <Button
                    type='button'
                    className='size-7 px-0 py-0'
                    variant='outline'
                    onClick={() => form.setValue('paidActivity', `${+field.value - 1}`)}
                  >
                    <MinusIcon className='size-4' />
                  </Button>
                  <NumberFormatInput {...field} className='w-14 text-center text-lg font-medium' />
                  <Button
                    type='button'
                    className='size-7 px-0 py-0'
                    variant='outline'
                    onClick={() => form.setValue('paidActivity', `${+field.value + 1}`)}
                  >
                    <PlusIcon className='size-4' />
                  </Button>
                </div>
              </div>
              <FormMessage className='mdx:text-center'>
                {form.formState?.errors?.paidActivity && (
                  <I18nText path={form.formState.errors.paidActivity.message as LocaleMessageId} />
                )}
              </FormMessage>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='periodMonth'
          render={({ field }) => (
            <FormItem className='flex flex-col gap-3 px-1'>
              <FormLabel className='text-base font-bold mdx:text-center'>
                <I18nText path='field.periodMonth.label' />
              </FormLabel>
              <Select {...field} onValueChange={field.onChange} value={field.value}>
                <SelectTrigger className='mx-auto w-full max-w-[200px]'>
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
              <FormMessage className='mdx:text-center'>
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
            <FormItem className='flex flex-col gap-3 px-1'>
              <FormLabel className='text-base font-bold mdx:text-center'>
                <I18nText path='field.totalPrice.label' />
              </FormLabel>
              <div className='flex items-center gap-2 mdx:mx-auto mdx:max-w-[200px]'>
                <NumberFormatInput {...field} />
                <Typography variant='body1' tag='p' className='line-through'>
                  <I18nText path='common.rubles' values={{ amount: tariff.totalPrice }} />
                </Typography>
              </div>
              <FormMessage className='mdx:text-center'>
                {form.formState?.errors?.totalPrice && (
                  <I18nText path={form.formState.errors.totalPrice.message as LocaleMessageId} />
                )}
              </FormMessage>
            </FormItem>
          )}
        />

        <Button
          type='submit'
          variant='secondary'
          className='col-end-3 mt-[47px] px-1 text-base font-bold mdx:col-end-auto mdx:mx-auto mdx:mt-5 mdx:w-[200px]'
          loading={state.isLoading}
        >
          <I18nText path='button.updateTariff' />
        </Button>
      </form>
    </Form>
  );
};
