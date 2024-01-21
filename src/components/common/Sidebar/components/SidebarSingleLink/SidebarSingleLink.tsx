import Link from 'next/link';

import { buttonVariants } from '@/components/ui';
import { cn } from '@/lib/utils';
import type { SidebarLinkInfo } from '@/utils/constants';

interface SidebarSingleLinkProps {
  link: SidebarLinkInfo;
  pathname: string;
  children: React.ReactNode;
}

export const SidebarSingleLink = ({ link, pathname, children }: SidebarSingleLinkProps) => (
  <Link
    href={link.href}
    className={cn(
      buttonVariants({ variant: pathname.startsWith(link.href) ? 'secondary' : 'ghost' }),
      'flex justify-start gap-3'
    )}
  >
    {children}
  </Link>
);
