import React from 'react';
import Link from 'next/link';

import { TabsTrigger } from '@/components/ui/tabs';

interface OrganizationHeaderTabsProps {
  value: string;
  children: React.ReactNode;
  link: string;
}

export const OrganizationHeaderTabsTrigger = ({
  children,
  value,
  link,
  ...props
}: OrganizationHeaderTabsProps) => (
  <Link href={link}>
    <TabsTrigger
      value={value}
      className='border-1 flex min-w-[135px] justify-center gap-2 rounded-xl py-[10px] text-xs font-normal data-[state=active]:bg-tabsBackground data-[state=active]:text-tabsText data-[state=active]:drop-shadow-md 2lgx:min-w-3 lgx:min-w-[135px] 2mdx:min-w-3'
      {...props}
    >
      {children}
    </TabsTrigger>
  </Link>
);
