import { SendHorizonalIcon } from 'lucide-react';

import { I18nText } from '@/components/common';
import {
  Button,
  Card,
  CardTitle,
  Textarea,
  Timeline,
  TimelineContent,
  TimelineItem,
  TimelineTitle
} from '@/components/ui';
import { useI18n } from '@/utils/contexts';

export const OrganizationProfileJournal = () => {
  const intl = useI18n();

  return (
    <Card className='flex w-full flex-col p-4  '>
      <div className='flex items-end'>
        <Textarea
          className='h-24 w-full px-3 py-4'
          placeholder={intl.formatMessage({ id: 'field.note.placeholder' })}
        />
        <Button variant='secondary' className='ml-3 mr-1 h-8 w-8 p-2'>
          <SendHorizonalIcon />
        </Button>
      </div>
      <CardTitle className='mt-5 text-lg font-bold'>
        <I18nText path='organization.profile.journal.title' />
      </CardTitle>
      <Timeline>
        {Array(3)
          .fill({})
          .map((_, index) => (
            <TimelineItem key={index}>
              <TimelineTitle>12.12.23 14:14</TimelineTitle>
              <TimelineContent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore
              </TimelineContent>
            </TimelineItem>
          ))}
      </Timeline>
    </Card>
  );
};
