'use client';

import { useSelectedLayoutSegment } from 'next/navigation';

import { Tabs, TabsList } from '@/components/ui';

import {
  ORGANIZATION_PROFILE_TAB_VALUES,
  PARTNER_PROFILE_TABS,
  SPONSOR_PROFILE_TABS
} from '../../../../constants/navigation';

import { OrganizationHeaderTabsTrigger } from './components/OrganizationHeaderTabsTrigger/OrganizationHeaderTabsTrigger';

const TABS = {
  PARTNER: PARTNER_PROFILE_TABS,
  SPONSOR: SPONSOR_PROFILE_TABS
};

export const OrganizationHeaderTabs = ({ organization }) => {
  const segment = useSelectedLayoutSegment();

  return (
    <div>
      <Tabs defaultValue={ORGANIZATION_PROFILE_TAB_VALUES[segment?.toUpperCase() ?? 'PROFILE']}>
        <TabsList className='items-top text-organization-tabs flex w-full justify-end gap-1 bg-transparent'>
          {TABS[organization.type].map((tab, index) => (
            <OrganizationHeaderTabsTrigger
              key={index}
              value={tab.value}
              icon={tab.icon}
              title={tab.title as LocaleMessageId}
              link={tab.link}
            />
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
};
