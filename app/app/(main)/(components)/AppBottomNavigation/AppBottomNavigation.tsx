'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { I18nText } from '@/components/common';
import { LogoIcon } from '@/components/icons';
import { Typography } from '@/components/ui';
import { cn } from '@/lib/utils';

import { PARTICIPANT_LINKS } from '../../(constants)/participantLinks';

export const AppBottomNavigation = () => {
  const pathname = usePathname();

  return (
    <div className='absolute bottom-0 left-0 right-0 z-10 h-20'>
      <nav className='relative flex h-full w-full items-center justify-around bg-white shadow-[rgba(51,51,51,0.12)_0px_-2px_32px_0px]'>
        <div className='absolute bottom-0 left-1/2 top-0 flex size-16 -translate-x-1/2 -translate-y-1/4 items-center justify-center rounded-full border-4 border-white bg-[linear-gradient(to_right_bottom,rgba(0,89,52,1),rgba(0,52,22,1))] shadow-[rgba(51,51,51,0.12)_0px_-2px_32px_0px]'>
          <LogoIcon className='w-4 fill-white' />
        </div>
        {PARTICIPANT_LINKS.map((link, index) => {
          const isActive = pathname.includes(link.href);

          return (
            <Link
              href={link.href}
              key={index}
              className={cn('flex flex-col items-center fill-placeholder', {
                'fill-taiga': isActive,
                'mr-8': index === 1,
                'ml-8': index === 2
              })}
            >
              {link.icon}
              <Typography
                variant='body4'
                className={cn('text-placeholder', {
                  'text-taiga': isActive
                })}
              >
                <I18nText path={link.text as LocaleMessageId} />
              </Typography>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};
