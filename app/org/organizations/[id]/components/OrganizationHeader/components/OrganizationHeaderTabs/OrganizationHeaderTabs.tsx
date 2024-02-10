'use client';

import { usePathname } from 'next/navigation';

import { Tabs, TabsList } from '@/components/ui';

import {
  HEADER_OPTIONS,
  PARTNER_PROFILE_LINKS,
  SPONSOR_PROFILE_LINKS
} from '../../../../constants/navigations';

import { OrganizationHeaderTabsTrigger } from './components/OrganizationHeaderTabsTrigger/OrganizationHeaderTabsTrigger';

export const OrganizationHeaderTabs = ({ organization }) => {
  const pathname = usePathname();
  const lastSegment = pathname
    .split('/')
    .filter((path) => !!path)
    .pop();

  return (
    <div>
      <Tabs defaultValue={HEADER_OPTIONS[lastSegment?.toUpperCase() ?? 'PROFILE']}>
        <TabsList className='items-top text-organization-tabs flex w-full justify-end gap-1 bg-transparent'>
          {organization.type === 'PARTNER' &&
            PARTNER_PROFILE_LINKS.map((tab, index) => (
              <OrganizationHeaderTabsTrigger
                key={index}
                value={tab.value}
                icon={tab.icon}
                title={tab.title as LocaleMessageId}
                link={tab.link}
              />
            ))}
          {organization.type === 'SPONSOR' && (
            <OrganizationHeaderTabsTrigger
              value={SPONSOR_PROFILE_LINKS.value}
              icon={SPONSOR_PROFILE_LINKS.icon}
              title={SPONSOR_PROFILE_LINKS.title as LocaleMessageId}
              link={SPONSOR_PROFILE_LINKS.link}
            />
          )}
        </TabsList>
      </Tabs>
    </div>
  );
};
