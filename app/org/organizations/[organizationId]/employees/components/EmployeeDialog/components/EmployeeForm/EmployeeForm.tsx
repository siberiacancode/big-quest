import { DownloadPhotoIcon } from '@/assets/icons/inputTypeFile/DownloadPhotoIcon';
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
  PhoneNumberInput,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Typography
} from '@/components/ui';
import { useI18n } from '@/utils/contexts';

import { useAddEmployeeForm } from './hooks/useAddEmployeeForm';

interface EmployeeFormProps {
  onAdded: () => void;
  actionType: 'add' | 'edit';
}

export const EmployeeForm = ({ onAdded, actionType }: EmployeeFormProps) => {
  const i18n = useI18n();
  const { state, form, functions } = useAddEmployeeForm({ onAdded });
  // в зависмости от actionType я хотел юзать или useAddEmployeeForm или useEditEmployeeForm, но так нельзя, похоже, поэтому надо что-то придумать

  return (
    <Form {...form}>
      <form onSubmit={functions.onSubmit} className='flex w-full flex-col items-end'>
        <div className='mb-7 flex w-full gap-5 smx:flex-col'>
          <div className='flex-1 space-y-3'>
            <FormField
              control={form.control}
              name='image'
              render={({ field }) => (
                <FormItem>
                  <div className='flex gap-2'>
                    <div>
                      <FormControl>
                        <div className='relative h-28 w-28  items-center rounded-xl border-2 border-dashed'>
                          <label htmlFor='inputTag' className='block h-28 cursor-pointer'>
                            <input
                              id='inputTag'
                              type='file'
                              className='invisible h-28 w-28 cursor-pointer'
                              {...field}
                            />
                          </label>
                          <DownloadPhotoIcon className='absolute right-[34px] top-[37px] -z-20 ' />
                        </div>
                      </FormControl>
                    </div>
                    <div>
                      <Typography variant='sub2'>
                        <I18nText path='app.imageDownload.pressToDownload.title' />
                      </Typography>
                      <Typography variant='body2'>
                        <I18nText path='app.imageDownload.pressToDownload.subtitle' />
                      </Typography>
                    </div>
                  </div>
                  <FormMessage>
                    {form.formState?.errors?.image && (
                      <I18nText path={form.formState.errors.image.message as LocaleMessageId} />
                    )}
                  </FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='role'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <I18nText path='field.role.label' />
                  </FormLabel>
                  <FormControl>
                    <Select
                      defaultValue='Leading'
                      {...field}
                      value={field.value}
                      onValueChange={(newValue) => form.setValue('role', newValue ?? '')}
                    >
                      <SelectTrigger className='h-8 w-48'>
                        <SelectValue placeholder='Роль' />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value='administrator'>
                          <I18nText path='organization.employee.role.administrator' />
                        </SelectItem>
                        <SelectItem value='leading'>
                          <I18nText path='organization.employee.role.leading' />
                        </SelectItem>
                        <SelectItem value='manager'>
                          <I18nText path='organization.employee.role.manager' />
                        </SelectItem>
                      </SelectContent>
                    </Select>
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
              name='surname'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <I18nText path='field.surname.label' />
                  </FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage>
                    {form.formState?.errors?.surname && (
                      <I18nText path={form.formState.errors.surname.message as LocaleMessageId} />
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
                    <I18nText path='field.name.label' />
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
                      {...field}
                      placeholder={i18n.formatMessage({ id: 'field.email.placeholder' })}
                    />
                  </FormControl>
                  <FormMessage>
                    {form.formState?.errors?.email && (
                      <I18nText path={form.formState.errors.email.message as LocaleMessageId} />
                    )}
                  </FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='phone'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <I18nText path='field.phone.label' />
                  </FormLabel>
                  <FormControl>
                    <PhoneNumberInput {...field} />
                  </FormControl>
                  <FormMessage>
                    {form.formState?.errors?.phone && (
                      <I18nText path={form.formState.errors.phone.message as LocaleMessageId} />
                    )}
                  </FormMessage>
                </FormItem>
              )}
            />
          </div>
        </div>
        <Button
          type='submit'
          variant='default'
          size='lg'
          loading={state.isLoading}
          className='w-full'
        >
          {actionType === 'add' && <I18nText path='button.add' />}
          {actionType === 'edit' && <I18nText path='button.save' />}
        </Button>
      </form>
    </Form>
  );
};
