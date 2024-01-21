import React from 'react';

import { MobileHeader } from '@/components/common';

export const MobileLayout = ({ children }: { children: React.ReactNode }) => (
  <div className='flex min-h-screen flex-col'>
    <MobileHeader />
    <section className='flex-1 bg-secondary p-8'>{children}</section>
  </div>
);
