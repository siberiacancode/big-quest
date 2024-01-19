import Link from 'next/link';

import { buttonVariants, CollapsibleContent } from '@/components/ui';
import { cn } from '@/lib/utils';

import type { SidebarLinkInfo } from '../../constants/linksInfo';

interface SidebarLinkProps {
  link: SidebarLinkInfo;
  pathname: string;
  open: boolean;
}

export const SidebarLink = ({ link, pathname }: SidebarLinkProps) => (
  <Link
    href={link.href}
    className={cn(
      buttonVariants({ variant: pathname === link.href ? 'secondary' : 'ghost' }),
      'flex w-full justify-start gap-1'
    )}
  >
    {link.icon}
    <CollapsibleContent>{link.text}</CollapsibleContent>
  </Link>
);
