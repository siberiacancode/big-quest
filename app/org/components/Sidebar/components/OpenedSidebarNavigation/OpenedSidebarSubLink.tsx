import React from 'react';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import type { SidebarLinkInfo } from '@/utils/constants';

interface OpenedSidebarSubLinkProps {
  link: SidebarLinkInfo;
  isActive: boolean;
  children: React.ReactNode;
}

export const OpenedSidebarSubLink = ({ link, isActive, children }: OpenedSidebarSubLinkProps) => (
  <Link
    href={link.href}
    className={cn(isActive && 'underline', 'w-full justify-start rounded-none hover:underline')}
  >
    {children}
  </Link>
);
