import React from 'react';

import { getDefaultOpenSidebar } from '@/utils/helpers/getDefaultOpenSidebar';

import { DesktopHeader } from './(components)/Header/DesktopHeader';
import { MobileLayout } from './(components)/MobileLayout/MobileLayout';
import { OrgSidebar } from './(components)/OrgSidebar/OrgSidebar';

interface OrgLayoutProps {
  children: React.ReactNode;
}

const OrgLayout = ({ children }: OrgLayoutProps) => {
  const defaultOpenSidebar = getDefaultOpenSidebar();

  return (
    <>
      <div className='lg:hidden'>
        <MobileLayout>{children}</MobileLayout>
      </div>
      <div className='flex min-h-screen lgx:hidden'>
        <div className='flex-1'>
          <OrgSidebar defaultOpen={defaultOpenSidebar} />
        </div>
        <div className='flex w-full flex-col'>
          <DesktopHeader />
          <section className='flex-1 bg-secondary p-8'>{children}</section>
        </div>
      </div>
    </>
  );
};

export default OrgLayout;
