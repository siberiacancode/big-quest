'use client';

import * as fns from 'date-fns';
import { SendHorizonalIcon } from 'lucide-react';

import { I18nText } from '@/components/common';
import {
  Button,
  Card,
  CardTitle,
  Form,
  FormField,
  FormItem,
  FormMessage,
  Textarea,
  Timeline,
  TimelineContent,
  TimelineItem,
  TimelineTitle,
  Typography
} from '@/components/ui';
import { useI18n } from '@/utils/contexts';

import { useOrganizationProfileChangesPage } from './hooks/useOrganizationProfileChangesPage';
import OrganizationProfileChangesLoading from './loading';

const OrganizationProfileChangesPage = () => {
  const i18n = useI18n();
  const { form, functions, state } = useOrganizationProfileChangesPage();

  if (state.query.isLoading) return <OrganizationProfileChangesLoading />;

  return (
    <Card className='flex w-full flex-col p-4'>
      <Form {...form}>
        <form onSubmit={functions.onSubmit}>
          <fieldset disabled={state.isLoading} className='flex'>
            <FormField
              control={form.control}
              name='comment'
              render={({ field }) => (
                <FormItem className='flex-grow'>
                  <Textarea
                    {...field}
                    className='h-24 w-full border border-secondary px-3 py-4'
                    placeholder={i18n.formatMessage({ id: 'field.note.placeholder' })}
                  />
                  <FormMessage>
                    {form.formState?.errors?.comment && (
                      <I18nText path={form.formState.errors.comment.message as LocaleMessageId} />
                    )}
                  </FormMessage>
                </FormItem>
              )}
            />

            <Button
              type='submit'
              variant='secondary'
              className='ml-3 mr-1 h-8 w-8 self-end p-2'
              disabled={state.isLoading}
            >
              <SendHorizonalIcon />
            </Button>
          </fieldset>
        </form>
      </Form>
      <CardTitle className='mt-5'>
        <Typography variant='h5' tag='p'>
          <I18nText path='page.organization.profile.changes.title' />
        </Typography>
      </CardTitle>
      <Timeline>
        {state.query.data?.pages.map((page) =>
          page.rows.map((change) => (
            <TimelineItem key={change.id}>
              <TimelineTitle>
                {fns.format(change.createdAt, 'dd.MM.yy')} {fns.format(change.createdAt, 'HH:mm')}
              </TimelineTitle>
              <TimelineContent>{change.new.comment || change.action}</TimelineContent>
            </TimelineItem>
          ))
        )}
      </Timeline>
      {state.query.hasNextPage && (
        <Button
          className='w-full'
          onClick={() => state.query.fetchNextPage()}
          disabled={state.query.isFetchingNextPage}
          loading={state.query.isFetchingNextPage}
        >
          <I18nText path='button.loadMore' />
        </Button>
      )}
    </Card>
  );
};

export default OrganizationProfileChangesPage;
