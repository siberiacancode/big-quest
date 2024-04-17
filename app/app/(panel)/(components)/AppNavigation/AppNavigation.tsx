'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { I18nText } from '@/components/common';
import { LogoIcon } from '@/components/icons';
import { Typography } from '@/components/ui';
import { cn } from '@/lib/utils';

import { APP_NAVIGATION_LINKS } from '../../(constants)/appNavigationLinks';

export const AppNavigation = () => {
  const pathname = usePathname();

  return (
    <nav className='relative flex h-full w-full items-center justify-around shadow-gray'>
      <div className='absolute bottom-0 left-1/2 top-0 flex size-[50px] -translate-x-1/2 -translate-y-1/4 items-center justify-center rounded-full border-4 border-white bg-[linear-gradient(to_right_bottom,rgba(0,89,52,1),rgba(0,52,22,1))] shadow-gray xxs:size-[68px]'>
        <LogoIcon className='w-[13px] fill-white xxs:w-[19px]' />
      </div>
      {APP_NAVIGATION_LINKS.map((link, index) => {
        const isActive = pathname.includes(link.href);

        return (
          <Link
            href={link.href}
            key={index}
            className={cn('flex flex-col items-center fill-placeholder', {
              'fill-taiga': isActive,
              'mr-[15px] xxs:mr-[40px]': index === 1,
              'ml-[15px] xxs:ml-[40px]': index === 2
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
  );
};
