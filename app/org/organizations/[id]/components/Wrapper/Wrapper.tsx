'use client';

import { I18nText } from '@/components/common';
import { BreadcrumbItem, Breadcrumbs, Tabs, TabsContent } from '@/components/ui';
import { ROUTES } from '@/utils/constants';
import { HEADER_OPTIONS } from '@/utils/constants/profile/profileOptions';

import { Header } from '../Header/Header';
import { Profile } from '../Profile/Profile';

import { useWrapper } from './hooks/useWrapper';

export const Wrapper = () => {
  const { state } = useWrapper();
  const { organization } = state;
  return (
    <>
      {organization && (
        <>
          <Breadcrumbs>
            <BreadcrumbItem href={ROUTES.ORG.ROOT}>
              <I18nText path='navigation.link.main' />
            </BreadcrumbItem>
            <BreadcrumbItem href={ROUTES.ORG.ORGANIZATIONS}>
              <I18nText path='navigation.link.organizations' />
            </BreadcrumbItem>
            <BreadcrumbItem>{organization.name}</BreadcrumbItem>
          </Breadcrumbs>
          <Tabs defaultValue={HEADER_OPTIONS.PROFILE}>
            <Header data={organization} />
            <TabsContent value={HEADER_OPTIONS.PROFILE}>
              <Profile data={organization} />
            </TabsContent>
            {organization.type !== 'SPONSOR' && (
              <>
                <TabsContent value={HEADER_OPTIONS.ADDRESSES}> Address page</TabsContent>
                <TabsContent value={HEADER_OPTIONS.EMPLOYEES}> Employees page</TabsContent>
                <TabsContent value={HEADER_OPTIONS.ACTIVITIES}> Activities page</TabsContent>
                <TabsContent value={HEADER_OPTIONS.SCHEDULE}> Schedule page</TabsContent>
              </>
            )}
          </Tabs>
        </>
      )}
    </>
  );
};
