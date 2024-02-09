import React from 'react';
import Link from 'next/link';

import { I18nText } from '@/components/common';
import { TabsTrigger } from '@/components/ui/tabs';

interface OrganizationHeaderTabsProps {
  title: LocaleMessageId;
  value: string;
  icon?: React.ReactElement;
  link: string;
}

export const OrganizationHeaderTabs = ({
  title,
  icon,
  value,
  link,
  ...props
}: OrganizationHeaderTabsProps) => (
  <Link href={link}>
    <TabsTrigger
      value={value}
      className='border-1 flex min-w-32 justify-center gap-1 rounded-xl py-[10px] text-[10px] font-normal data-[state=active]:bg-foreground data-[state=active]:text-background 2lgx:min-w-3 lgx:min-w-32 mdx:min-w-3'
      {...props}
    >
      {icon && React.cloneElement(icon, { className: 'w-4 h-4' })}
      <p className='hidden lgx:block mdx:hidden 2lg:block'>
        <I18nText path={title} />
      </p>
    </TabsTrigger>
  </Link>
);
