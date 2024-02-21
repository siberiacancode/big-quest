import { I18nText } from '@/components/common';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Typography
} from '@/components/ui';
import { Switch } from '@/components/ui/switch';
import { useI18n } from '@/utils/contexts';

import { AddActivityDropdownMenu } from './AddActivityDropdown/AddActivityDropdownMenu';
import { useAddActivityForm } from './hooks/useAddActivityForm';

interface AddActivityFormProps {
  onAdded: () => void;
}

export const AddActivityForm = ({ onAdded }: AddActivityFormProps) => {
  const i18n = useI18n();
  const { form, functions } = useAddActivityForm({ onAdded });

  return (
    <Form {...form}>
      <form onSubmit={functions.onSubmit} className='flex w-full flex-col items-end'>
        <div className='flex w-full flex-col '>
          <div className='flex w-full justify-between gap-24 smx:flex-col smx:gap-2'>
            <div className='flex-1 space-y-3'>
              <FormField
                control={form.control}
                name='name'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='text-base'>
                      <I18nText path='field.name.label' />
                    </FormLabel>
                    <FormControl>
                      <Input
                        className='max-w-72'
                        {...field}
                        placeholder={i18n.formatMessage({
                          id: 'field.name.placeholder'
                        })}
                      />
                    </FormControl>
                    <FormMessage>
                      {form.formState?.errors?.name && (
                        <I18nText path={form.formState.errors.name.message as LocaleMessageId} />
                      )}
                    </FormMessage>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='description'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='text-base'>
                      <I18nText path='field.description.label' />
                    </FormLabel>
                    <FormControl>
                      <Input
                        className='max-w-72 text-wrap'
                        {...field}
                        placeholder={i18n.formatMessage({
                          id: 'field.description.placeholder'
                        })}
                      />
                    </FormControl>
                    <FormMessage>
                      {form.formState?.errors?.description && (
                        <I18nText
                          path={form.formState.errors.description.message as LocaleMessageId}
                        />
                      )}
                    </FormMessage>
                  </FormItem>
                )}
              />{' '}
              <FormField
                control={form.control}
                name='ageRestriction'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='text-base'>
                      <I18nText path='field.ageRestriction.label' />
                    </FormLabel>
                    <FormControl>
                      <div className='flex items-center gap-2'>
                        <Input className='h-7 max-w-12 text-center' {...field} placeholder='0' />
                        <Typography variant='body2' className='text-muted-foreground'>
                          <I18nText path='field.ageRestriction.before' />
                        </Typography>
                        <Input className='h-7 max-w-12 text-center' {...field} placeholder='10' />
                      </div>
                    </FormControl>
                    <FormMessage>
                      {form.formState?.errors?.ageRestriction && (
                        <I18nText
                          path={form.formState.errors.ageRestriction.message as LocaleMessageId}
                        />
                      )}
                    </FormMessage>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='duration'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='text-base'>
                      <I18nText path='field.duration.label' />
                    </FormLabel>
                    <FormControl>
                      <div className='flex items-center gap-2'>
                        <Input
                          className='h-7 max-w-[75px] text-center'
                          {...field}
                          placeholder={i18n.formatMessage({
                            id: '120'
                          })}
                        />
                        <Typography variant='body2' className='text-muted-foreground'>
                          <I18nText path='field.duration.minutes' />
                        </Typography>
                      </div>
                    </FormControl>
                    <FormMessage>
                      {form.formState?.errors?.duration && (
                        <I18nText
                          path={form.formState.errors.duration.message as LocaleMessageId}
                        />
                      )}
                    </FormMessage>
                  </FormItem>
                )}
              />
            </div>
            <div className='flex-1 space-y-3'>
              <div className='flex flex-col gap-2'>
                <I18nText path='field.category.label' />
                <AddActivityDropdownMenu />
              </div>
              <div className='flex flex-col gap-2'>
                <I18nText path='field.status.label' />
                <AddActivityDropdownMenu />
              </div>
              <FormField
                control={form.control}
                name='price'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='text-base'>
                      <I18nText path='field.price.label' />
                    </FormLabel>
                    <FormControl>
                      <div className='flex max-w-28 items-center gap-2'>
                        <Input className='h-7 max-w-72 text-center' {...field} placeholder='0' />
                        <Typography variant='body2' className='text-muted-foreground'>
                          <I18nText path='field.price.currency' />
                        </Typography>
                      </div>
                    </FormControl>
                    <FormMessage>
                      {form.formState?.errors?.price && (
                        <I18nText path={form.formState.errors.price.message as LocaleMessageId} />
                      )}
                    </FormMessage>
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className='mb-8 mt-3 grid w-full grid-cols-2 gap-24 smx:grid-cols-1 smx:gap-2'>
            <Typography variant='sub1'>
              <I18nText path='field.allowRepeat.label' />
            </Typography>
            <div className='flex items-center space-x-2'>
              <Switch id='allow-repeat-mode' className='h-6' />
              <Typography variant='body1' tag='label' className='text-foreground'>
                <I18nText path='field.allowRepeat.option' />
              </Typography>
            </div>
          </div>
        </div>
      </form>
    </Form>
  );
};
