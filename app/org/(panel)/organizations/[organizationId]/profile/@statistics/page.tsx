import { NotebookTextIcon, TrendingUpIcon, UsersRoundIcon } from 'lucide-react';

import { I18nText } from '@/components/common';
import {
  InfoCard,
  InfoCardAction,
  InfoCardContent,
  InfoCardHeader,
  InfoCardItem,
  InfoCardItemDescription,
  InfoCardItemTitle,
  InfoCardTitle,
  Typography
} from '@/components/ui';

const OrganizationProfileStatisticsPage = () => (
  <div className='flex gap-4'>
    <InfoCard>
      <InfoCardHeader className='p-5'>
        <InfoCardTitle>
          <Typography variant='sub1' tag='p'>
            <I18nText path='organization.profile.members' />
          </Typography>
        </InfoCardTitle>
        <InfoCardAction>
          <UsersRoundIcon size={20} strokeWidth={1.5} />
        </InfoCardAction>
      </InfoCardHeader>
      <InfoCardContent>
        <InfoCardItem>
          <InfoCardItemTitle>560</InfoCardItemTitle>
          <InfoCardItemDescription className='flex gap-1 text-foreground'>
            <TrendingUpIcon size={14} />
            <Typography variant='body4' tag='p' className='text-muted-foreground'>
              +24 <I18nText path='infoCard.description.perMonth' />
            </Typography>
          </InfoCardItemDescription>
        </InfoCardItem>
      </InfoCardContent>
    </InfoCard>
    <InfoCard>
      <InfoCardHeader className='p-5'>
        <InfoCardTitle>
          <Typography variant='sub1' tag='p'>
            <I18nText path='organization.profile.entries' />
          </Typography>
        </InfoCardTitle>
        <InfoCardAction>
          <NotebookTextIcon size={20} strokeWidth={1.5} />
        </InfoCardAction>
      </InfoCardHeader>
      <InfoCardContent>
        <InfoCardItem>
          <InfoCardItemTitle>560</InfoCardItemTitle>
        </InfoCardItem>
      </InfoCardContent>
    </InfoCard>
  </div>
);

export default OrganizationProfileStatisticsPage;
