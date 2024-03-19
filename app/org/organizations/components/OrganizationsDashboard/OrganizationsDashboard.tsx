import { AlertCircleIcon, HeartHandshakeIcon, TrendingUpIcon } from 'lucide-react';

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
import { getOrganizationDashboard } from '@/utils/api';

export const OrganizationsDashboard = async () => {
  const dashboard = await getOrganizationDashboard();
  return (
    <div className='flex flex-wrap gap-2'>
      <InfoCard>
        <InfoCardHeader>
          <InfoCardTitle>
            <I18nText path='infoCard.title.partners' />
          </InfoCardTitle>
          <InfoCardAction>
            <HeartHandshakeIcon size={20} strokeWidth={1.5} />
          </InfoCardAction>
        </InfoCardHeader>
        <InfoCardContent>
          <InfoCardItem>
            <InfoCardItemTitle>{dashboard.partners.total}</InfoCardItemTitle>
            <InfoCardItemDescription className='flex gap-1'>
              <TrendingUpIcon size={14} /> +{dashboard.partners.growthPerMonth}{' '}
              <I18nText path='infoCard.description.perMonth' />
            </InfoCardItemDescription>
          </InfoCardItem>
        </InfoCardContent>
      </InfoCard>
      <InfoCard>
        <InfoCardHeader>
          <InfoCardTitle>
            <I18nText path='infoCard.title.sponsors' />
          </InfoCardTitle>
          <InfoCardAction>
            <HeartHandshakeIcon size={20} strokeWidth={1.5} />
          </InfoCardAction>
        </InfoCardHeader>
        <InfoCardContent>
          <InfoCardItem>
            <InfoCardItemTitle>{dashboard.sponsors.total}</InfoCardItemTitle>
            <InfoCardItemDescription className='flex gap-1'>
              <TrendingUpIcon size={14} /> +{dashboard.sponsors.growthPerMonth}{' '}
              <I18nText path='infoCard.description.perMonth' />
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
            <InfoCardItemTitle>{dashboard.applications}</InfoCardItemTitle>
            <InfoCardItemDescription className='flex gap-1'>
              <I18nText path='infoCard.description.applications' />
            </InfoCardItemDescription>
          </InfoCardItem>
          <InfoCardItem>
            <InfoCardItemTitle>{dashboard.negotiation}</InfoCardItemTitle>
            <InfoCardItemDescription className='flex gap-1'>
              <I18nText path='infoCard.description.negotiation' />
            </InfoCardItemDescription>
          </InfoCardItem>
          <InfoCardItem>
            <InfoCardItemTitle>{dashboard.tariffChange}</InfoCardItemTitle>
            <InfoCardItemDescription className='flex gap-1'>
              <I18nText path='infoCard.description.tariffChange' />
            </InfoCardItemDescription>
          </InfoCardItem>
        </InfoCardContent>
      </InfoCard>
    </div>
  );
};
