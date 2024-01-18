'use client';

import React from 'react';
import {
  ActivityIcon,
  ArrowLeftFromLineIcon,
  ArrowRightFromLineIcon,
  Building2Icon,
  UsersRoundIcon
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import FullLogoIcon from '@/assets/icons/fullLogo.svg';
import LogoIcon from '@/assets/icons/logo.svg';
import { Button, buttonVariants } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { cn } from '@/lib/utils';
import { PAGE_PATHS } from '@/utils/constants';

export const Sidebar = () => {
  const [open, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <Collapsible className='relative min-h-screen border px-8' open={open} onOpenChange={setIsOpen}>
      <nav className=' flex flex-col items-center'>
        {open && <Image src={FullLogoIcon as string} alt='лого' />}
        {!open && <Image src={LogoIcon as string} alt='лого' />}
        <CollapsibleTrigger asChild>
          <Button className='absolute right-4 top-20 border' size='icon' variant='ghost'>
            {open && <ArrowLeftFromLineIcon size={16} />}
            {!open && <ArrowRightFromLineIcon size={16} />}
          </Button>
        </CollapsibleTrigger>

        <Link
          href={PAGE_PATHS.LIDS}
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname === PAGE_PATHS.LIDS ? 'text-foreground' : 'text-foreground/60',
            buttonVariants({ variant: 'outline' }),
            open ? 'w-60' : 'w-48'
          )}
        >
          <UsersRoundIcon />
          <CollapsibleContent>Лиды</CollapsibleContent>
        </Link>

        <Link
          href={PAGE_PATHS.ORGANIZATIONS}
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname === PAGE_PATHS.ORGANIZATIONS ? 'text-foreground' : 'text-foreground/60',
            buttonVariants({ variant: 'outline' }),
            open ? 'w-60' : 'w-48'
          )}
        >
          <Building2Icon />
          <CollapsibleContent>Организации</CollapsibleContent>
        </Link>
        <Link
          href={PAGE_PATHS.ACTIVITIES}
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname === PAGE_PATHS.ACTIVITIES ? 'text-foreground' : 'text-foreground/60',
            buttonVariants({ variant: 'outline' }),
            open ? 'w-60' : 'w-48'
          )}
        >
          <ActivityIcon />
          <CollapsibleContent>Активности</CollapsibleContent>
        </Link>
      </nav>
    </Collapsible>
  );
};
