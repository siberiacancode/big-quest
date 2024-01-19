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
      <div className='sticky left-0 top-0 flex h-20 items-center justify-center '>
        <Link href='/'>
          {open && <Image src={FullLogoIcon as string} alt='лого' />}
          {!open && <Image src={LogoIcon as string} alt='лого' />}
        </Link>
        <CollapsibleTrigger asChild>
          <Button
            className={cn(
              'absolute bottom-0 h-7 w-7 translate-x-1/2 translate-y-1/2 rounded',
              open ? 'right-4' : '-right-4'
            )}
            size='icon'
            variant='outline'
          >
            {open && <ArrowLeftFromLineIcon size={12} />}
            {!open && <ArrowRightFromLineIcon size={12} />}
          </Button>
        </CollapsibleTrigger>
      </div>

      <nav className=' mt-7 flex flex-col items-center gap-2'>
        {linksInfo.organizer.map((link) => (
          <SidebarLink key={link.id} link={link} pathname={pathname} open={open} />
        ))}
      </nav>
    </Collapsible>
  );
};
