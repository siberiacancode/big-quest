import React from 'react';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import type { SidebarLinkInfo } from '@/utils/constants';

interface SidebarSubLinkProps {
  link: SidebarLinkInfo;
  pathname: string;
  children: React.ReactNode;
}

export const OpenedSidebarSubLink = ({ link, pathname, children }: SidebarSubLinkProps) => (
  <Link
    href={link.href}
    className={cn(
      pathname === link.href && 'underline',
      'w-full justify-start rounded-none hover:underline'
    )}
  >
    {children}
  </Link>
);
