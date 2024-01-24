import React from 'react';

import { DesktopHeader } from './components/Header/DesktopHeader';
import { MobileLayout } from './components/MobileLayout/MobileLayout';
import { OrgSidebar } from './components/Sidebar/OrgSidebar';

interface OrgLayoutProps {
  children: React.ReactNode;
}

const OrgLayout = ({ children }: OrgLayoutProps) => (
  <>
    <div className='lg:hidden'>
      <MobileLayout>{children}</MobileLayout>
    </div>
    <div className='flex min-h-screen lgx:hidden'>
      <div className='flex-1'>
        <OrgSidebar />
      </div>
      <div className='flex w-full flex-col'>
        <DesktopHeader />
        <section className='flex-1 bg-secondary p-8'>{children}</section>
      </div>
    </div>
  </>
);

export default OrgLayout;
