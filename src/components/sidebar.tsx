'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { PAGE_PATHS } from '@/utils/constants';

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <nav className='flex items-center gap-6 text-sm'>
      <Button asChild>
        <Link
          href={PAGE_PATHS.LIDS}
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname === PAGE_PATHS.LIDS ? 'text-foreground' : 'text-foreground/60'
          )}
        >
          Лиды
        </Link>
      </Button>

      <Link
        href={PAGE_PATHS.ORGANIZATIONS}
        className={cn(
          'transition-colors hover:text-foreground/80',
          pathname === PAGE_PATHS.ORGANIZATIONS ? 'text-foreground' : 'text-foreground/60'
        )}
      >
        Организации
      </Link>
      <Link
        href={PAGE_PATHS.ACTIVITIES}
        className={cn(
          'transition-colors hover:text-foreground/80',
          pathname === PAGE_PATHS.ACTIVITIES ? 'text-foreground' : 'text-foreground/60'
        )}
      >
        Активности
      </Link>
    </nav>
  );
};
