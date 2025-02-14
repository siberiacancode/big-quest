import { LogOutIcon, QrCodeIcon } from 'lucide-react';
import Image from 'next/image';

import type { UserResponse } from '@/api-types';
import { I18nText, NotificationsDropdownMenu, ThemeSwitcher } from '@/components/common';
import { Button, CircularButton, Typography } from '@/components/ui';

interface DesktopProfileMenuProps {
  partner: UserResponse;
  onEditPartnerClick: () => void;
  onEditQRScannerClick: () => void;
}

export const DesktopProfileMenu = ({
  partner,
  onEditPartnerClick,
  onEditQRScannerClick
}: DesktopProfileMenuProps) => (
  <div className='flex h-fit items-center gap-4'>
    <Button
      variant='ghost'
      className='flex items-center justify-start gap-5 rounded-md border-none px-2 py-1 hover:cursor-pointer hover:bg-accent'
      onClick={onEditPartnerClick}
    >
      {partner.avatar && <Image src={partner.avatar} alt='partner_avatar' />}
      {!partner.avatar && <div className='h-8 w-8 rounded-full bg-primary' />}

      <div className='flex flex-col items-start'>
        <Typography variant='sub2' tag='p'>
          {`${partner.name} ${partner.surname}`}
        </Typography>
        <Typography variant='sub4' tag='p' className='text-muted-foreground'>
          <I18nText path={`partner.${partner.roles[0].toLowerCase()}` as LocaleMessageId} />
        </Typography>
      </div>
    </Button>
    <CircularButton onClick={onEditQRScannerClick}>
      <QrCodeIcon />
    </CircularButton>
    <NotificationsDropdownMenu />
    <ThemeSwitcher />
    <CircularButton>
      <LogOutIcon className='text-red-600' />
    </CircularButton>
  </div>
);
