'use client';

import React from 'react';

import { Header } from '@/components/common';
import { cn } from '@/lib/utils';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [burgerOpen, setBurgerOpen] = React.useState(false);
  const [sidebarOpen, setSidebarOpen] = React.useState(true);

  return (
    <div className='flex min-h-screen flex-1 flex-col bg-secondary'>
      <Header
        burgerOpen={burgerOpen}
        setBurgerOpen={setBurgerOpen}
        setSidebarOpen={setSidebarOpen}
        sidebarOpen={sidebarOpen}
      />
      <section className={cn('mdx:mt16 mt-20 flex-1 p-8 lg:ml-64', !sidebarOpen && 'lg:ml-24')}>
        {children}
      </section>
    </div>
  );
};

export default MainLayout;
