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
import { getOrganization } from '@/utils/api';
import { ROUTES } from '@/utils/constants';

import { OrganizationsTable } from './components/OrganizationsTable/OrganizationsTable';

export interface OrganizationsPageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

const filterUndefinedParams = (searchParams: {
  [key: string]: string | string[] | undefined;
}): Record<string, string> => {
  const filteredParams: Record<string, string> = {};

  for (const key in searchParams) {
    if (Object.prototype.hasOwnProperty.call(searchParams, key)) {
      const value = searchParams[key];

      if (Array.isArray(value)) {
        filteredParams[key] = value.join(',');
      } else if (value) {
        filteredParams[key] = value;
      }
    }
  }

  return filteredParams;
};

const OrganizationsPage = async ({ searchParams }: OrganizationsPageProps) => {
  const filteredSearchParams = filterUndefinedParams(searchParams);

  console.log(filteredSearchParams);

  const response = await getOrganization({
    config: { params: filteredSearchParams }
  });

  return (
    <div className='bg-secondary px-4'>
      <Breadcrumbs>
        <BreadcrumbItem href={ROUTES.ORG.ROOT}>
          <I18nText path='navigation.link.main' />
        </BreadcrumbItem>
        <BreadcrumbItem>
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
      <OrganizationsTable organizations={response.rows} pagination={response.pagination} />
    </div>
  );
};

export default OrganizationsPage;
