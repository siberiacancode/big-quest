import { I18nText } from '@/components/common';
import {
  Card,
  CardTitle,
  Timeline,
  TimelineContent,
  TimelineItem,
  TimelineTitle,
  Typography
} from '@/components/ui';
import { getChanges } from '@/utils/api';

import { AddOrganizationChangeForm } from './components/AddOrganizationChangeForm/AddOrganizationChangeForm';

const DEFAULT_CHANGES_LIMIT = '5';
const DEFAULT_CHANGES_PAGE = '1';

export interface OrganizationProfileChangesProps {
  organization: OrganizationResponse;
}

export const OrganizationProfileChanges = async ({
  organization
}: OrganizationProfileChangesProps) => {
  const changes = await getChanges({
    config: {
      cache: 'no-cache',
      params: {
        limit: DEFAULT_CHANGES_LIMIT,
        current: DEFAULT_CHANGES_PAGE,
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
        {changes.rows.map((change, index) => (
          <TimelineItem key={index}>
            <TimelineTitle>{change.createdAt.replace('T', ' ').replace('-', '.')}</TimelineTitle>
            <TimelineContent>{change.new.comment || change.action}</TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Card>
  );
};
