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
import {
  Button,
  buttonVariants,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from '@/components/ui';
import { cn } from '@/lib/utils';
import { PAGE_PATHS } from '@/utils/constants';

export const Sidebar = () => {
  const [open, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <Collapsible
      className='relative min-h-screen border px-8 '
      open={open}
      onOpenChange={setIsOpen}
    >
      <nav className=' flex flex-col items-center'>
        {open && <Image src={FullLogoIcon as string} alt='лого' />}
        {!open && <Image src={LogoIcon as string} alt='лого' />}
        <CollapsibleTrigger asChild>
          <Button className='absolute right-4 top-20 border' size='icon' variant='ghost'>
            {open && <ArrowLeftFromLineIcon size={12} />}
            {!open && <ArrowRightFromLineIcon size={12} />}
          </Button>
        </CollapsibleTrigger>

        <Link
          href={PAGE_PATHS.LIDS}
          className={cn(
            'flex w-full justify-start gap-1',
            buttonVariants({ variant: pathname === PAGE_PATHS.LIDS ? 'secondary' : 'ghost' })
          )}
        >
          <UsersRoundIcon />
          <CollapsibleContent>Лиды</CollapsibleContent>
        </Link>

        <Link
          href={PAGE_PATHS.ORGANIZATIONS}
          className={cn(
            'w-full',
            buttonVariants({
              variant: pathname === PAGE_PATHS.ORGANIZATIONS ? 'secondary' : 'ghost'
            })
          )}
        >
          <Building2Icon />
          <CollapsibleContent>Организации</CollapsibleContent>
        </Link>
        <Link
          href={PAGE_PATHS.ACTIVITIES}
          className={cn(
            'w-full',
            buttonVariants({ variant: pathname === PAGE_PATHS.ACTIVITIES ? 'secondary' : 'ghost' })
          )}
        >
          <ActivityIcon />
          <CollapsibleContent>Активности</CollapsibleContent>
        </Link>
      </nav>
    </Collapsible>
  );
};
