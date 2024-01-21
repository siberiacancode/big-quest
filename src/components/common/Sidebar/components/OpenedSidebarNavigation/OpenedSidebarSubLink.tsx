import React from 'react';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import type { SidebarLinkInfo } from '@/utils/constants';

interface SidebarSubLinkProps {
  link: SidebarLinkInfo;
  pathname: string;
}

export const OpenedSidebarSubLink = ({ link, pathname }: SidebarSubLinkProps) => (
  <Link
    key={link.id}
    href={link.href}
    className={cn(
      pathname === link.href && 'underline',
      'w-full justify-start rounded-none hover:underline'
    )}
  >
    {link.text}
  </Link>
);
