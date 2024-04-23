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
  Typography
} from '@/components/ui';
import { useI18n } from '@/utils/contexts';

import type { UserData } from '../../(constants)/types';

import { useProfileEditForm } from './hooks/useProfileEditForm';

interface ProfileEditFormProps {
  user?: UserData;
}

export const ProfileEditForm = ({ user }: ProfileEditFormProps) => {
  const i18n = useI18n();
  const { state, form, functions } = useProfileEditForm({ user });

  return (
    <Form {...form}>
      <form onSubmit={functions.onSubmit} className='w-full'>
        <fieldset disabled={state.isLoading} className='flex w-full flex-col items-end'>
          <div className='mb-7 flex w-full gap-5 smx:flex-col'>
            <div className='flex-1 space-y-3'>
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
                name='birthdate'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      <I18nText path='field.birthdate.label' />
                    </FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage>
                      {form.formState?.errors?.birthdate && (
                        <I18nText
                          path={form.formState.errors.birthdate.message as LocaleMessageId}
                        />
                      )}
                    </FormMessage>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='userID'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      <I18nText path='field.userId.label' />
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder={i18n.formatMessage({ id: 'field.userId.placeholder' })}
                      />
                    </FormControl>
                    <Typography variant='body4' tag='p' className='text-muted-foreground'>
                      <I18nText path='app.profile.edit.userID.description' />
                    </Typography>
                    <FormMessage>
                      {form.formState?.errors?.userID && (
                        <I18nText path={form.formState.errors.userID.message as LocaleMessageId} />
                      )}
                    </FormMessage>
                  </FormItem>
                )}
              />
              <div>
                <I18nText path='field.code.label' />
                <Typography>1822</Typography>
              </div>
            </div>
          </div>
          <Button
            type='submit'
            size='lg'
            className='w-full bg-taiga text-white hover:bg-taiga-foreground'
            loading={state.isLoading}
          >
            <I18nText path='button.save' />
          </Button>
        </fieldset>
      </form>
    </Form>
  );
};
