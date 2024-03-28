'use client';

import * as fns from 'date-fns';

import { I18nText } from '@/components/common';
import {
  Button,
  Card,
  CardTitle,
  Timeline,
  TimelineContent,
  TimelineItem,
  TimelineTitle,
  Typography
} from '@/components/ui';
import { useGetChangesInfiniteQuery } from '@/utils/api';

import { AddOrganizationChangeForm } from './components/AddOrganizationChangeForm/AddOrganizationChangeForm';

const DEFAULT_CHANGES_LIMIT = '5';

export interface OrganizationProfileChangesProps {
  organization: OrganizationResponse;
}

export const OrganizationProfileChanges = ({ organization }: OrganizationProfileChangesProps) => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useGetChangesInfiniteQuery({
    config: {
      cache: 'no-cache',
      params: {
        limit: DEFAULT_CHANGES_LIMIT,
        criteria: organization.id
      }
    }
  });

  return (
    <Card className='flex w-full flex-col p-4'>
      <AddOrganizationChangeForm organization={organization} />
      <CardTitle className='mt-5'>
        <Typography variant='h5' tag='p'>
          <I18nText path='organization.profile.changes.title' />
        </Typography>
      </CardTitle>
      <Timeline>
        {data?.pages.map((page) =>
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
      {hasNextPage && (
        <Button
          className='w-full'
          onClick={() => fetchNextPage()}
          disabled={isFetchingNextPage}
          loading={isFetchingNextPage}
        >
          <I18nText path='button.loadMore' />
        </Button>
      )}
    </Card>
  );
};
