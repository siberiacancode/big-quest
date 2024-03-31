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

const DEFAULT_CHANGES_PAGE = '1';
const CHANGES_LIMIT = '5';

export interface OrganizationProfileChangesProps {
  params: { organizationId: string };
}

const OrganizationProfileChangesSlot = ({
  params: { organizationId }
}: OrganizationProfileChangesProps) => {
  const getChangesInfiniteQuery = useGetChangesInfiniteQuery({
    current: DEFAULT_CHANGES_PAGE,
    limit: CHANGES_LIMIT,
    criteria: organizationId
  });

  return (
    <Card className='flex w-full flex-col p-4'>
      <AddOrganizationChangeForm organizationId={organizationId} />
      <CardTitle className='mt-5'>
        <Typography variant='h5' tag='p'>
          <I18nText path='organization.profile.changes.title' />
        </Typography>
      </CardTitle>
      <Timeline>
        {getChangesInfiniteQuery.data?.pages.map((page) =>
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
      {getChangesInfiniteQuery.hasNextPage && (
        <Button
          className='w-full'
          onClick={() => getChangesInfiniteQuery.fetchNextPage()}
          disabled={getChangesInfiniteQuery.isFetchingNextPage}
          loading={getChangesInfiniteQuery.isFetchingNextPage}
        >
          <I18nText path='button.loadMore' />
        </Button>
      )}
    </Card>
  );
};

export default OrganizationProfileChangesSlot;
