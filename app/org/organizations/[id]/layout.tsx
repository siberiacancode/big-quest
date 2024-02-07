'use client';

import { I18nText } from '@/components/common';
import { BreadcrumbItem, Breadcrumbs, Tabs, TabsContent } from '@/components/ui';
import { ROUTES } from '@/utils/constants';

import { HEADER_OPTIONS } from './constants/navigations';

const OrganizationPageLayout = () => {
  return (
    <div className='bg-secondary px-4'>
      <Breadcrumbs>
        <BreadcrumbItem href={ROUTES.ORG.ROOT}>
          <I18nText path='navigation.link.main' />
        </BreadcrumbItem>
        <BreadcrumbItem href={ROUTES.ORG.ORGANIZATIONS}>
          <I18nText path='navigation.link.organizations' />
        </BreadcrumbItem>
        <BreadcrumbItem>state.organization.name</BreadcrumbItem>
      </Breadcrumbs>
      <Tabs defaultValue={HEADER_OPTIONS.PROFILE}>
        <TabsContent value={HEADER_OPTIONS.PROFILE}>Profile Page</TabsContent>
        <>
          <TabsContent value={HEADER_OPTIONS.ADDRESSES}>Address page</TabsContent>
          <TabsContent value={HEADER_OPTIONS.EMPLOYEES}>Employees page</TabsContent>
          <TabsContent value={HEADER_OPTIONS.ACTIVITIES}>Activities page</TabsContent>
          <TabsContent value={HEADER_OPTIONS.SCHEDULE}>Schedule page</TabsContent>
        </>
      </Tabs>
    </div>
  );
};

export default OrganizationPageLayout;
