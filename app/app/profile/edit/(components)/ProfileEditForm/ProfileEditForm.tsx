'use client';

import React from 'react';

import { I18nText } from '@/components/common';
import { DropzoneCard } from '@/components/dropzone';
import {
  Button,
  CopyToClipboardButton,
  DatePicker,
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
              {state.showPreview && user?.avatar && (
                <div className='flex flex-col items-center justify-center gap-3'>
                  <DropzoneCard
                    value={user?.avatar}
                    onChange={functions.onDeletePreviewClick}
                    className='h-32 w-32'
                    mobileVersion
                  />
                  <div onClick={functions.onDeletePreviewClick} role='presentation'>
                    <Typography variant='body3' tag='p' className='flex-1'>
                      <I18nText path='app.profile.edit.avatar.title' />
                    </Typography>
                  </div>
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
                  <FormItem className='flex flex-col'>
                    <FormLabel>
                      <I18nText path='field.birthdate.label' />
                    </FormLabel>
                    <FormControl>
                      <DatePicker {...field} classname='w-full' />
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
                    <div className='relative'>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder={i18n.formatMessage({ id: 'field.userId.placeholder' })}
                        />
                      </FormControl>
                      <CopyToClipboardButton value={form.getValues('userID')} />
                    </div>
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
