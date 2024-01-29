import { AlertCircleIcon, HeartHandshakeIcon, TrendingUpIcon } from 'lucide-react';

import { I18nText } from '@/components/common';
import {
  BreadcrumbItem,
  Breadcrumbs,
  InfoCard,
  InfoCardAction,
  InfoCardContent,
  InfoCardHeader,
  InfoCardItem,
  InfoCardItemDescription,
  InfoCardItemTitle,
  InfoCardTitle
} from '@/components/ui';
import { ROUTES } from '@/utils/constants';

import { data } from './components/DataTable/constants/data';
import { DataTable } from './components/DataTable/DataTable';

const OrganizationsPage = () => {
  return (
    <div className='bg-secondary px-4'>
      <Breadcrumbs>
        <BreadcrumbItem href={ROUTES.ORG.ROOT}>
          <I18nText path='navigation.link.main' />
        </BreadcrumbItem>
        <BreadcrumbItem href={ROUTES.ORG.ORGANIZATIONS}>
          <I18nText path='navigation.link.organizations' />
        </BreadcrumbItem>
      </Breadcrumbs>
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
};

export default OrganizationsPage;
