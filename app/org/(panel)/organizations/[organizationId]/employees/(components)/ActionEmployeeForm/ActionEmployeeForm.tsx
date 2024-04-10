import { I18nText } from '@/components/common';
import { DropzoneCard } from '@/components/dropzone';
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

import type { EmployeeData } from '../../(constants)/types';

import { useActionEmployeeForm } from './hooks/useActionEmployeeForm';
import type { EmployeeActionType } from './constants';

interface ActionEmployeeProps<ActionType extends EmployeeActionType> {
  onAction: () => void;
  actionType: ActionType;
  employee?: EmployeeData;
}

export const ActionEmployeeForm = <ActionType extends EmployeeActionType>({
  onAction,
  actionType,
  employee
}: ActionEmployeeProps<ActionType>) => {
  const i18n = useI18n();
  const { state, form, functions } = useActionEmployeeForm({ onAction, actionType, employee });

  return (
    <Form {...form}>
      <form onSubmit={functions.onSubmit} className='w-full'>
        <fieldset disabled={state.isLoading} className='flex w-full flex-col items-end'>
          <div className='mb-7 flex w-full gap-5 smx:flex-col'>
            <div className='flex-1 space-y-3'>
              {state.showPreview && employee?.image && (
                <div className='flex items-center gap-3'>
                  <DropzoneCard
                    value={employee.image}
                    onChange={functions.onDeletePreviewClick}
                    className='h-32 w-32'
                  />
                  <Typography variant='sub2'>{employee.image.split('/').at(-1)}</Typography>
                </div>
              )}
              {!state.showPreview && (
                <FormField
                  control={form.control}
                  name='file'
                  render={({ field }) => {
                    const fileFieldValue = form.getValues('file');

                    return (
                      <FormItem className='flex items-center gap-3'>
                        <FormControl>
                          <div>
                            <DropzoneCard {...field} className='h-32 w-32' />
                          </div>
                        </FormControl>
                        <div>
                          {fileFieldValue && (
                            <Typography variant='sub2'>{fileFieldValue.name}</Typography>
                          )}

                          {!fileFieldValue && (
                            <>
                              <Typography variant='sub2'>
                                <I18nText path='field.imageDownload.title' />
                              </Typography>
                              <Typography variant='body2'>
                                <I18nText path='field.imageDownload.description' />
                              </Typography>
                            </>
                          )}
                          <FormMessage>
                            {form.formState?.errors?.file && (
                              <I18nText
                                path={form.formState.errors.file.message as LocaleMessageId}
                              />
                            )}
                          </FormMessage>
                        </div>
                      </FormItem>
                    );
                  }}
                />
              )}
              <FormField
                control={form.control}
                name='role'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      <I18nText path='field.role.label' />
                    </FormLabel>
                    <FormControl>
                      <Select {...field} value={field.value} onValueChange={field.onChange}>
                        <SelectTrigger className='h-8 w-48'>
                          <SelectValue placeholder='Роль' />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value='Administrator'>
                            <I18nText path='organization.employee.role.administrator' />
                          </SelectItem>
                          <SelectItem value='Leading'>
                            <I18nText path='organization.employee.role.leading' />
                          </SelectItem>
                          <SelectItem value='Manager'>
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
        </fieldset>
      </form>
    </Form>
  );
};
