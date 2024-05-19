'use client';

import React from 'react';

import userPlaceholder from '@/assets/images/avatar/participant.png';
import { I18nText } from '@/components/common';
import {
  Avatar,
  AvatarImage,
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
  user: UserData;
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
                name='file'
                render={() => {
                  const fileFieldValue = form.getValues('file');
                  return (
                    <FormItem className='flex items-center justify-center gap-2'>
                      <FormControl>
                        <div className='flex flex-col items-center justify-center gap-3'>
                          {!fileFieldValue && (
                            <Avatar className='size-[100px]'>
                              <AvatarImage src={user?.avatar || userPlaceholder.src} />
                            </Avatar>
                          )}
                          {fileFieldValue && (
                            <Avatar className='size-[100px]'>
                              <AvatarImage src={URL.createObjectURL(fileFieldValue)} />
                            </Avatar>
                          )}
                          <input
                            type='file'
                            onChange={functions.onFileChange}
                            className='hidden'
                            accept='image/*'
                            ref={state.fileInputRef}
                          />
                          <Button
                            variant='ghost'
                            onClick={() =>
                              state.fileInputRef.current && state.fileInputRef.current.click()
                            }
                            type='button'
                          >
                            <Typography variant='body3' tag='p' className='flex-1'>
                              <I18nText path='app.profile.edit.avatar.title' />
                            </Typography>
                          </Button>
                        </div>
                      </FormControl>
                      <div>
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
              <FormField
                control={form.control}
                name='name'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='text-gray-two'>
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
              <div className='space-y-5'>
                <FormField
                  control={form.control}
                  name='surname'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='text-gray-two'>
                        <I18nText path='field.surname.label' />
                      </FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage>
                        {form.formState?.errors?.surname && (
                          <I18nText
                            path={form.formState.errors.surname.message as LocaleMessageId}
                          />
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
                      <FormLabel className='text-gray-two'>
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
                  name='userId'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='text-gray-two'>
                        <I18nText path='field.userId.label' />
                      </FormLabel>
                      <div className='relative'>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder={i18n.formatMessage({ id: 'field.userId.placeholder' })}
                          />
                        </FormControl>
                        <CopyToClipboardButton
                          value={form.getValues('userId')}
                          className='absolute right-1 top-0'
                        />
                      </div>
                      <Typography variant='body4' tag='p' className='text-muted-foreground'>
                        <I18nText path='app.profile.edit.userID.description' />
                      </Typography>
                      <FormMessage>
                        {form.formState?.errors?.userId && (
                          <I18nText
                            path={form.formState.errors.userId.message as LocaleMessageId}
                          />
                        )}
                      </FormMessage>
                    </FormItem>
                  )}
                />
                <div className='space-y-3'>
                  <Typography variant='sub4' className='text-gray-two'>
                    <I18nText path='field.code.label' />
                  </Typography>
                  <Typography variant='sub3' className='text-gray-one'>
                    1822
                  </Typography>
                </div>
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
