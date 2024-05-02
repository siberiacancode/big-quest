import React from 'react';
import { Controller } from 'react-hook-form';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';

import type { ActivityResponse } from '@/api-types';
import { I18nText } from '@/components/common';
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Switch,
  Textarea,
  Typography
} from '@/components/ui';
import { useI18n } from '@/utils/contexts';

import type { ActivityActionType } from '../../(constants)/types';

import { ActivityActionFormSkeleton } from './components/ActivityActionFormSkeleton/ActivityActionFormSkeleton';
import { ActivityMedias } from './components/ActivityMedias/ActivityMedias';
import { ActivityMediasSkeleton } from './components/ActivityMediasSkeleton/ActivityMediasSkeleton';
import { ACTIVITY_STATUS_DROPDOWN_VALUES } from './constants/activityStatusDropdownValues';
import { useActivityActionForm } from './hooks/useActivityActionForm';

interface ActionActivityFormProps<ActionType extends ActivityActionType> {
  onAction: () => void;
  actionType: ActionType;
  activity?: ActivityResponse;
}

export const ActionActivityForm = <ActionType extends ActivityActionType>({
  onAction,
  activity,
  actionType
}: ActionActivityFormProps<ActionType>) => {
  const i18n = useI18n();
  const { state, form, functions } = useActivityActionForm({
    onAction,
    activity,
    actionType
  });

  return (
    <div className='flex h-full flex-col justify-between gap-4 overflow-y-auto smx:px-0'>
      <div className='flex h-[418px] gap-6 2smx:h-[600px]'>
        {state.isPending && <ActivityMediasSkeleton />}
        {!state.isPending && (
          <ActivityMedias
            activityMedias={state.activityMedias}
            onClick={functions.onMediaClick}
            onDeleteClick={functions.onMediaDeleteClick}
            onCoverClick={functions.onMediaCoverClick}
            onDropAccepted={functions.onMediaDropAccepted}
          />
        )}
      </div>
      <Form {...form}>
        <form onSubmit={functions.onSubmit} className='flex h-full flex-col justify-between gap-4'>
          <fieldset disabled={state.isLoading} className='flex w-full flex-col items-end'>
            {state.isPending && <ActivityActionFormSkeleton />}
            {!state.isPending && (
              <div className='flex w-full flex-col rounded-lg border p-5'>
                <div className='flex justify-between gap-24 smx:flex-col smx:gap-2'>
                  <div className='flex-1 space-y-3'>
                    <FormField
                      control={form.control}
                      name='name'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className='text-base'>
                            <I18nText path='field.title.label' />
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
                              <I18nText
                                path={form.formState.errors.name.message as LocaleMessageId}
                              />
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
                            <Textarea
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
                    />
                    <FormField
                      control={form.control}
                      name='ageLimit'
                      render={() => (
                        <FormItem>
                          <FormLabel className='text-base'>
                            <I18nText path='field.ageLimit.label' />
                          </FormLabel>
                          <FormControl>
                            <div className='flex items-center gap-2'>
                              <Controller
                                name='ageLimit.min'
                                control={form.control}
                                render={({ field }) => (
                                  <Input
                                    className='h-9 max-w-12 text-center'
                                    {...field}
                                    placeholder='0'
                                  />
                                )}
                              />
                              <Typography variant='body2' className='text-muted-foreground'>
                                <I18nText path='field.ageLimit.before' />
                              </Typography>
                              <Controller
                                name='ageLimit.max'
                                control={form.control}
                                render={({ field }) => (
                                  <Input
                                    className='h-9 max-w-12 text-center'
                                    {...field}
                                    placeholder='10'
                                  />
                                )}
                              />
                            </div>
                          </FormControl>
                          <FormMessage>
                            {form.formState?.errors?.ageLimit && (
                              <I18nText
                                path={form.formState.errors.ageLimit.message as LocaleMessageId}
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
                                className='h-9 max-w-[75px] text-center'
                                type='number'
                                {...field}
                                placeholder='120'
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
                    <FormField
                      control={form.control}
                      name='category'
                      render={({ field }) => (
                        <FormItem className='flex flex-col'>
                          <FormLabel className='text-base'>
                            <I18nText path='field.category.label' />
                          </FormLabel>
                          <FormControl>
                            <DropdownMenu
                              open={state.isCategoryOpen}
                              onOpenChange={functions.setIsCategoryOpen}
                            >
                              <DropdownMenuTrigger asChild disabled={state.isLoading}>
                                <div className='flex h-10 max-w-40 cursor-pointer items-center justify-between gap-2 rounded-md border border-secondary bg-input-foreground px-3 py-2'>
                                  <Typography variant='body2'>{field.value}</Typography>
                                  {state.isCategoryOpen && <ChevronUpIcon className='h-4 w-4' />}
                                  {!state.isCategoryOpen && <ChevronDownIcon className='h-4 w-4' />}
                                </div>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent className='w-40 bg-background'>
                                <DropdownMenuRadioGroup
                                  value={field.value}
                                  onValueChange={field.onChange}
                                >
                                  {state.categories &&
                                    state.categories.map((category) => (
                                      <DropdownMenuRadioItem
                                        key={category.name}
                                        className='cursor-pointer bg-background text-start'
                                        value={category.name}
                                      >
                                        {category.name}
                                      </DropdownMenuRadioItem>
                                    ))}
                                </DropdownMenuRadioGroup>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </FormControl>
                          <FormMessage>
                            {form.formState?.errors?.category && (
                              <I18nText
                                path={form.formState.errors.category.message as LocaleMessageId}
                              />
                            )}
                          </FormMessage>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name='status'
                      render={({ field }) => (
                        <FormItem className='flex flex-col'>
                          <FormLabel className='text-base'>
                            <I18nText path='field.status.label' />
                          </FormLabel>
                          <FormControl>
                            <DropdownMenu
                              open={state.isStatusOpen}
                              onOpenChange={functions.setIsStatusOpen}
                            >
                              <DropdownMenuTrigger asChild disabled={state.isLoading}>
                                <div className='flex h-10 max-w-40 cursor-pointer items-center justify-between gap-2 rounded-md border border-secondary bg-input-foreground px-3 py-2'>
                                  <Typography variant='body2'>
                                    <I18nText
                                      path={
                                        `organization.activities.status.${field.value.toLowerCase()}` as LocaleMessageId
                                      }
                                    />
                                  </Typography>
                                  {state.isStatusOpen && <ChevronUpIcon className='h-4 w-4' />}
                                  {!state.isStatusOpen && <ChevronDownIcon className='h-4 w-4' />}
                                </div>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent className='w-40 bg-background'>
                                <DropdownMenuRadioGroup
                                  value={field.value}
                                  onValueChange={field.onChange}
                                >
                                  {ACTIVITY_STATUS_DROPDOWN_VALUES.map(
                                    (value: string, idx: number) => (
                                      <DropdownMenuRadioItem
                                        key={idx}
                                        className='cursor-pointer bg-background text-start'
                                        value={value}
                                      >
                                        <I18nText
                                          path={
                                            `organization.activities.status.${value.toLowerCase()}` as LocaleMessageId
                                          }
                                        />
                                      </DropdownMenuRadioItem>
                                    )
                                  )}
                                </DropdownMenuRadioGroup>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </FormControl>
                          <FormMessage>
                            {form.formState?.errors?.status && (
                              <I18nText
                                path={form.formState.errors.status.message as LocaleMessageId}
                              />
                            )}
                          </FormMessage>
                        </FormItem>
                      )}
                    />
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
                              <Input
                                className='h-9 max-w-72 text-center'
                                {...field}
                                placeholder='0'
                              />
                              <Typography variant='body2' className='text-muted-foreground'>
                                <I18nText path='field.price.currency' />
                              </Typography>
                            </div>
                          </FormControl>
                          <FormMessage>
                            {form.formState?.errors?.price && (
                              <I18nText
                                path={form.formState.errors.price.message as LocaleMessageId}
                              />
                            )}
                          </FormMessage>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name='replay'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className='text-base'>
                            <I18nText path='field.replay.label' />
                          </FormLabel>
                          <FormControl>
                            <div className='flex items-center space-x-2 pt-1'>
                              <Switch
                                id='allow-repeat-mode'
                                className='h-6'
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                              <Typography variant='body1' tag='label' className='text-foreground'>
                                <I18nText path={`field.replay.option.${field.value}`} />
                              </Typography>
                            </div>
                          </FormControl>
                          <FormMessage>
                            {form.formState?.errors?.price && (
                              <I18nText
                                path={form.formState.errors.price.message as LocaleMessageId}
                              />
                            )}
                          </FormMessage>
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </div>
            )}
            <div className='flex w-full justify-center'>
              <Button
                type='submit'
                className='h-8 w-28'
                size='sm'
                loading={state.isLoading}
                variant='secondary'
              >
                <Typography variant='sub4'>
                  <I18nText path='button.save' />
                </Typography>
              </Button>
            </div>
          </fieldset>
        </form>
      </Form>
    </div>
  );
};
