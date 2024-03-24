import {
  AlertCircleIcon,
  HeartHandshakeIcon,
  TrendingDownIcon,
  TrendingUpIcon
} from 'lucide-react';

import { I18nText } from '@/components/common';
import {
  InfoCard,
  InfoCardAction,
  InfoCardContent,
  InfoCardHeader,
  InfoCardItem,
  InfoCardItemDescription,
  InfoCardItemTitle,
  InfoCardTitle
} from '@/components/ui';
import { getActivitiesDashboard } from '@/utils/api';

export const ActivitiesDashboard = async () => {
  const dashboard = await getActivitiesDashboard();
  return (
    <div className='flex flex-wrap gap-2'>
      <InfoCard>
        <InfoCardHeader>
          <InfoCardTitle>
            <I18nText path='infoCard.description.total' />
          </InfoCardTitle>
          <InfoCardAction>
            <HeartHandshakeIcon size={20} strokeWidth={1.5} />
          </InfoCardAction>
        </InfoCardHeader>
        <InfoCardContent>
          <InfoCardItem>
            <InfoCardItemTitle>{dashboard.total.total}</InfoCardItemTitle>
            <InfoCardItemDescription className='flex gap-1'>
              <TrendingUpIcon size={14} /> +{dashboard.total.growthPerMonth}{' '}
              <I18nText path='infoCard.description.perMonth' />
            </InfoCardItemDescription>
          </InfoCardItem>
        </InfoCardContent>
      </InfoCard>
      <InfoCard>
        <InfoCardHeader>
          <InfoCardTitle>
            <I18nText path='infoCard.description.active' />
          </InfoCardTitle>
          <InfoCardAction>
            <HeartHandshakeIcon size={20} strokeWidth={1.5} />
          </InfoCardAction>
        </InfoCardHeader>
        <InfoCardContent>
          <InfoCardItem>
            <InfoCardItemTitle>{dashboard.active.total}</InfoCardItemTitle>
            <InfoCardItemDescription className='flex gap-1'>
              <TrendingDownIcon size={14} /> +{dashboard.active.growthPerMonth}{' '}
              <I18nText path='infoCard.description.closed' />
            </InfoCardItemDescription>
          </InfoCardItem>
        </InfoCardContent>
      </InfoCard>
      <InfoCard className='w-5/12'>
        <InfoCardHeader>
          <InfoCardTitle>
            <I18nText path='infoCard.title.needsAttention' />
          </InfoCardTitle>
          <InfoCardAction>
            <AlertCircleIcon size={20} strokeWidth={1.5} />
          </InfoCardAction>
        </InfoCardHeader>
        <InfoCardContent>
          <InfoCardItem>
            <InfoCardItemTitle>{dashboard.moderation}</InfoCardItemTitle>
            <InfoCardItemDescription className='flex gap-1'>
              <I18nText path='infoCard.description.moderation' />
            </InfoCardItemDescription>
          </InfoCardItem>
          <InfoCardItem>
            <InfoCardItemTitle>{dashboard.draft}</InfoCardItemTitle>
            <InfoCardItemDescription className='flex gap-1'>
              <I18nText path='infoCard.description.draft' />
            </InfoCardItemDescription>
          </InfoCardItem>
          <InfoCardItem>
            <InfoCardItemTitle>{dashboard.edit}</InfoCardItemTitle>
            <InfoCardItemDescription className='flex gap-1'>
              <I18nText path='infoCard.description.edit' />
            </InfoCardItemDescription>
          </InfoCardItem>
        </InfoCardContent>
      </InfoCard>
    </div>
  );
};
