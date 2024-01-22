import Link from 'next/link';

import { buttonVariants } from '@/components/ui';
import { cn } from '@/lib/utils';
import type { SidebarLinkInfo } from '@/utils/constants';

interface SidebarSingleLinkProps {
  link: SidebarLinkInfo;
  isActive: boolean;
  children: React.ReactNode;
}

export const SidebarSingleLink = ({ link, isActive, children }: SidebarSingleLinkProps) => (
  <Link
    href={link.href}
    className={cn(
      buttonVariants({ variant: isActive ? 'secondary' : 'ghost' }),
      'flex justify-start gap-3'
    )}
  >
    {children}
  </Link>
);
