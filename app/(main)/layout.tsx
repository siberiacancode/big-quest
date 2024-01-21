import React from 'react';

import { Header, MobileHeader, Sidebar } from '@/components/common';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className='flex min-h-screen flex-col lg:hidden'>
        <MobileHeader />
        <section className='flex-1 bg-secondary p-8'>{children}</section>
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
};

export default MainLayout;
