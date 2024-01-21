import React from 'react';

import { Header, Sidebar } from '@/components/common';

import { MobileLayout } from './MobileLayout';

export const DesktopLayout = ({ children }: { children: React.ReactNode }) => (
  <>
    <div className='lg:hidden'>
      <MobileLayout>{children}</MobileLayout>
    </div>
    <div className='flex min-h-screen lgx:hidden'>
      <Sidebar />
      <div className='flex w-full flex-col'>
        <Header />
        <section className='flex-1 bg-secondary p-8'>{children}</section>
      </div>
    </div>
  </>
);
