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

import { OrgBreadcrumbs } from '../components/OrgBreadcrumbs/OrgBreadcrumbs';

import { data } from './components/DataTable/constants/data';
import { DataTable } from './components/DataTable/DataTable';

const OrganizationsPage = () => (
  <div className='bg-secondary px-4'>
    <OrgBreadcrumbs />
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
            <InfoCardItemTitle>560</InfoCardItemTitle>
            <InfoCardItemDescription className='flex gap-1'>
              <TrendingUpIcon size={14} /> +24 <I18nText path='infoCard.description.perMonth' />
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
            <InfoCardItemTitle>56</InfoCardItemTitle>
            <InfoCardItemDescription className='flex gap-1'>
              <TrendingUpIcon size={14} /> +24 <I18nText path='infoCard.description.perMonth' />
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
            <InfoCardItemTitle>6</InfoCardItemTitle>
            <InfoCardItemDescription className='flex gap-1'>
              <I18nText path='infoCard.description.applications' />
            </InfoCardItemDescription>
          </InfoCardItem>
          <InfoCardItem>
            <InfoCardItemTitle>10</InfoCardItemTitle>
            <InfoCardItemDescription className='flex gap-1'>
              <I18nText path='infoCard.description.discussions' />
            </InfoCardItemDescription>
          </InfoCardItem>
          <InfoCardItem>
            <InfoCardItemTitle>13</InfoCardItemTitle>
            <InfoCardItemDescription className='flex gap-1'>
              <I18nText path='infoCard.description.tariffChange' />
            </InfoCardItemDescription>
          </InfoCardItem>
        </InfoCardContent>
      </InfoCard>
    </div>
    <DataTable data={data} />
  </div>
);

export default OrganizationsPage;
