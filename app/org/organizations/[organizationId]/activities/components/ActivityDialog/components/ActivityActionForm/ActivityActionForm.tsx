import { Controller } from 'react-hook-form';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';

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
  Typography
} from '@/components/ui';
import { useI18n } from '@/utils/contexts';

import type { ActivityActionType } from '../../constants/types';
import { ActivityImages } from '../ActivityImages/ActivityImages';

import { ACTIVITY_ACTION_STATUS_DROPDOWN_VALUES } from './constants/activityActionStatusDropdownValues';
import { useActivityActionForm } from './hooks/useActivityActionForm';

interface ActivityActionFormProps<ActionType extends ActivityActionType> {
  onAction: () => void;
  actionType: ActionType;
  activity: ActionType extends 'edit' ? ActivityResponse : undefined;
}

export const ActivityActionForm = <ActionType extends ActivityActionType>({
  onAction,
  actionType,
  activity
}: ActivityActionFormProps<ActionType>) => {
  const i18n = useI18n();
  const { state, form, functions } = useActivityActionForm({
    onAction,
    activity,
    actionType
  });

  return (
    <Form {...form}>
      <form
        onSubmit={functions.onSubmit}
        className='flex h-full flex-col items-end justify-between gap-4 overflow-y-auto px-5 smx:px-0'
      >
        <div className='flex h-max gap-4 px-5 smx:px-0'>
          <ActivityImages name={activity?.name ?? 'name'} />
        </div>
        <div className='flex w-full flex-col overflow-y-auto rounded-lg border  p-5'>
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
                        <DropdownMenuTrigger asChild>
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
                            {state.categoryValues &&
                              state.categoryValues.map((value: string, idx: number) => (
                                <DropdownMenuRadioItem
                                  key={idx}
                                  className='cursor-pointer bg-background text-start'
                                  value={value}
                                >
                                  {value}
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
                        <DropdownMenuTrigger asChild>
                          <div className='flex h-10 max-w-40 cursor-pointer items-center justify-between gap-2 rounded-md border border-secondary bg-input-foreground px-3 py-2'>
                            <Typography variant='body2'>
                              {i18n.formatMessage({
                                id: `organization.activities.status.${field.value.toLowerCase()}`
                              })}
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
                            {ACTIVITY_ACTION_STATUS_DROPDOWN_VALUES.map(
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
                        <I18nText path={form.formState.errors.status.message as LocaleMessageId} />
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
                        <Input className='h-9 max-w-72 text-center' {...field} placeholder='0' />
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
          <div className='mt-2 grid w-full grid-cols-2 gap-24 smx:grid-cols-1 smx:gap-3'>
            <Typography variant='sub1'>
              <I18nText path='field.replay.label' />
            </Typography>

            <FormField
              control={form.control}
              name='replay'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className='flex items-center space-x-2'>
                      <Switch
                        id='allow-repeat-mode'
                        className='h-6'
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                      <Typography variant='body1' tag='label' className='text-foreground'>
                        <I18nText path='field.replay.option' />
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
        <div className='flex w-full justify-center'>
          <Button type='submit' className='h-8 w-28' size='sm' variant='secondary'>
            <Typography variant='sub4'>
              <I18nText path='button.save' />
            </Typography>
          </Button>
        </div>
      </form>
    </Form>
  );
};
