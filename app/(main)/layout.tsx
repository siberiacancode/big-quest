import React from 'react';

import { Header, Sidebar } from '@/components/common';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='flex flex-1 flex-col'>
        <Header />
        <section className='flex-1'>{children}</section>
      </div>
    </div>
  );
};

export default MainLayout;
