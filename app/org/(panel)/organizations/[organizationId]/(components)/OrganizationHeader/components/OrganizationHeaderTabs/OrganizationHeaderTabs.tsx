'use client';

import { useSelectedLayoutSegment } from 'next/navigation';

import type { OrganizationResponse, OrganizationResponseType } from '@/api-types';
import { I18nText } from '@/components/common';
import { Tabs, TabsList } from '@/components/ui';

import type { ProfileTab } from '../../../../(constants)/navigation';
import {
  FRANCHISEE_PROFILE_TABS,
  ORGANIZATION_PROFILE_TAB_VALUES,
  ORGANIZER_PROFILE_TABS,
  PARTNER_PROFILE_TABS,
  SPONSOR_PROFILE_TABS
} from '../../../../(constants)/navigation';

import { OrganizationHeaderTabsTrigger } from './components/OrganizationHeaderTabsTrigger/OrganizationHeaderTabsTrigger';

const TABS: Record<OrganizationResponseType, ProfileTab[]> = {
  PARTNER: PARTNER_PROFILE_TABS,
  SPONSOR: SPONSOR_PROFILE_TABS,
  FRANCHISEE: FRANCHISEE_PROFILE_TABS,
  ORGANIZER: ORGANIZER_PROFILE_TABS
};

interface OrganizationHeaderTabsProps {
  organization: OrganizationResponse;
}

export const OrganizationHeaderTabs = ({ organization }: OrganizationHeaderTabsProps) => {
  const segment = useSelectedLayoutSegment();

  return (
    <Tabs defaultValue={ORGANIZATION_PROFILE_TAB_VALUES[segment?.toUpperCase() ?? 'PROFILE']}>
      <TabsList className='items-top text-organization-tabs flex w-full justify-end gap-1 bg-transparent'>
        {TABS[organization.type].map((tab, index) => {
          const Icon = tab.icon;

          return (
            <OrganizationHeaderTabsTrigger
              key={index}
              value={tab.value}
              link={tab.route(organization.id)}
            >
              <Icon className='size-4' />
              <p className='hidden lgx:block mdx:hidden 2lg:block'>
                <I18nText path={tab.title as LocaleMessageId} />
              </p>
            </OrganizationHeaderTabsTrigger>
          );
        })}
      </TabsList>
    </Tabs>
  );
};
