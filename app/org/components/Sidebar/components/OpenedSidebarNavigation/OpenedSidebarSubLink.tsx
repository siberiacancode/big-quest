import React from 'react';
import Link from 'next/link';

import { cn } from '@/lib/utils';

interface OpenedSidebarSubLinkProps {
  link: NavigationLinkInfo;
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
