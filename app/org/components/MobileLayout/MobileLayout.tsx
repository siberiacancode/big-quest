import React from 'react';

import { MobileHeader } from '../Header/MobileHeader';

interface MobileLayoutProps {
  children: React.ReactNode;
}

export const MobileLayout = ({ children }: MobileLayoutProps) => (
  <div className='flex min-h-screen flex-col'>
    <MobileHeader />
    <section className='flex-1 bg-secondary p-8'>{children}</section>
  </div>
);
