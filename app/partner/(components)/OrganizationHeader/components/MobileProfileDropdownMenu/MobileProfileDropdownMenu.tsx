'use client';

import React from 'react';
import { BellIcon, LogOutIcon, QrCodeIcon, SunIcon } from 'lucide-react';
import Image from 'next/image';

import { I18nText } from '@/components/common';
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  Typography
} from '@/components/ui';

import type { PartnerData } from '../../constants/types';

import { useMobileProfileDropdownMenu } from './hooks/useMobileProfileDropdownMenu';

interface MobileProfileDropdownMenuProps {
  partner: PartnerData;
  onEditPartnerClick: () => void;
  onEditQrScannerClick: () => void;
}

export const MobileProfileDropdownMenu = ({
  partner,
  onEditPartnerClick,
  onEditQrScannerClick
}: MobileProfileDropdownMenuProps) => {
  const { state, functions } = useMobileProfileDropdownMenu();

  return (
    <DropdownMenu open={state.isOpen} onOpenChange={functions.setIsOpen}>
      <DropdownMenuTrigger asChild>
        <div>
          {state.user.avatar && <Image src={state.user.avatar} alt='partner_avatar' />}
          {!state.user.avatar && (
            <div className=' h-8 w-8 rounded-full bg-primary hover:cursor-pointer' />
          )}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='absolute -right-4 top-2 flex w-52 flex-col rounded-lg bg-background/90 p-2 shadow-sm backdrop-blur-lg '>
        <Button
          variant='ghost'
          className='flex h-fit items-center justify-start gap-2 rounded-md border-none p-2 hover:cursor-pointer hover:bg-accent'
          onClick={onEditPartnerClick}
        >
          <div className='h-8 w-8 rounded-full bg-primary' />
          <div className='flex flex-col items-start'>
            <Typography variant='sub2' tag='p'>
              {`${partner.name} ${partner.surname}`}
            </Typography>
            <Typography className='text-muted-foreground' variant='sub4' tag='p'>
              <I18nText path={`partner.${partner.roles[0].toLowerCase()}` as LocaleMessageId} />
            </Typography>
          </div>
        </Button>
        <Button
          variant='ghost'
          className='flex items-center justify-start gap-5 rounded-md border-none px-2 py-1 hover:cursor-pointer hover:bg-accent'
          onClick={onEditQrScannerClick}
        >
          <QrCodeIcon />
          <Typography variant='body2'>
            <I18nText path='partner.menu.scanQrCode' />
          </Typography>
        </Button>
        <Button
          variant='ghost'
          className='flex items-center justify-start gap-5 rounded-md border-none px-2 py-1 hover:cursor-pointer hover:bg-accent'
        >
          <BellIcon />
          <Typography variant='body2'>
            <I18nText path='partner.menu.notification' />
          </Typography>
        </Button>
        <Button
          variant='ghost'
          className='flex items-center justify-start gap-5 rounded-md border-none px-2 py-1 hover:cursor-pointer hover:bg-accent'
          onClick={functions.toggleTheme}
        >
          <SunIcon />
          <Typography variant='body2'>
            <I18nText path={`theme.${state.theme}`} />
          </Typography>
        </Button>
        <Button
          variant='ghost'
          className='flex items-center justify-start gap-5 rounded-md border-none px-2 py-1 hover:cursor-pointer hover:bg-accent'
        >
          <LogOutIcon className='text-red-600' />
          <Typography variant='body2' className='hover:text-bold'>
            <I18nText path='partner.menu.exit' />
          </Typography>
        </Button>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
