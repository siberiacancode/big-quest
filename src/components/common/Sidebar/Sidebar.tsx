'use client';

import React from 'react';
import { ArrowLeftFromLineIcon, ArrowRightFromLineIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import FullLogoIcon from '@/assets/icons/fullLogo.svg';
import LogoIcon from '@/assets/icons/logo.svg';
import { Button, Collapsible, CollapsibleTrigger } from '@/components/ui';
import { cn } from '@/lib/utils';

import { SidebarLink } from './components/SidebarLink/SidebarLink';
import { linksInfo } from './constants/linksInfo';

export const Sidebar = () => {
  const [open, setIsOpen] = React.useState(true);
  const pathname = usePathname();

  return (
    <Collapsible
      className={cn('relative min-h-screen', open ? 'px-8' : 'px-4')}
      open={open}
      onOpenChange={setIsOpen}
    >
      <div className='z-11 sticky left-0 top-0 flex h-20 items-center justify-center bg-background'>
        <Link href='/'>
          {open && <Image src={FullLogoIcon as string} alt='лого' />}
          {!open && <Image src={LogoIcon as string} alt='лого' />}
        </Link>
        <CollapsibleTrigger asChild>
          <Button
            className={cn(
              'z-12 absolute bottom-0 translate-x-1/2 translate-y-1/2 rounded-lg',
              open ? 'right-4' : '-right-4'
            )}
            size='icon'
            variant='outline'
          >
            {open && <ArrowLeftFromLineIcon className='h-4 w-4' />}
            {!open && <ArrowRightFromLineIcon className='h-4 w-4' />}
          </Button>
        </CollapsibleTrigger>
      </div>

      <nav className=' mt-6 flex flex-col items-center gap-2'>
        {linksInfo.organizer.map((link) => (
          <SidebarLink key={link.id} link={link} pathname={pathname} open={open} />
        ))}
      </nav>
    </Collapsible>
  );
};
