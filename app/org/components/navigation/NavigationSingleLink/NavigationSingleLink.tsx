import Link from 'next/link';

import { buttonVariants } from '@/components/ui';
import { cn } from '@/lib/utils';

interface NavigationSingleLinkProps {
  link: NavigationLinkInfo;
  isActive: boolean;
  children: React.ReactNode;
}

export const NavigationSingleLink = ({ link, isActive, children }: NavigationSingleLinkProps) => (
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
