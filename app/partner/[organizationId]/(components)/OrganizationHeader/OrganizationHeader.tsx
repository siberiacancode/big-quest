'use client';

import Image from 'next/image';

import type { OrganizationResponse } from '@/api-types';
import avatar from '@/assets/images/avatar/organization.png';
import background from '@/assets/images/background/organization.png';
import { I18nText } from '@/components/common';
import { Typography } from '@/components/ui';

import { DesktopProfileMenu } from './components/DesktopProfileMenu/DesktopProfileMenu';
import { EditPartnerDialog } from './components/EditPartnerDialog/EditPartnerDialog';
import { MobileProfileDropdownMenu } from './components/MobileProfileDropdownMenu/MobileProfileDropdownMenu';
import { OrganizationHeaderTabs } from './components/OrganizationHeaderTabs/OrganizationHeaderTabs';
// import { QRCodeScanner } from './components/QRCodeScanner/QRCodeScannerDialog';
import { useOrganizationHeader } from './hooks/useOrganizationHeader';

interface OrganizationHeaderProps {
  organization: OrganizationResponse;
}

export const OrganizationHeader = ({ organization }: OrganizationHeaderProps) => {
  const { state, functions } = useOrganizationHeader();

  return (
    <div className='flex flex-wrap gap-2'>
      <div className='relative mt-2.5 flex h-64 w-full flex-col items-center'>
        <Image
          priority={false}
          className='h-[168px] w-full rounded-lg'
          src={organization.background || background}
          alt='org-background'
        />
        <div className='absolute bottom-0 mx-4 mt-auto flex h-36 w-[96%] flex-col gap-5 rounded-lg border-none bg-background/70 pb-4 pl-4 pr-4 pt-3 shadow-sm backdrop-blur-lg'>
          <div className='flex justify-between'>
            <div className='flex gap-5'>
              <Image
                priority={false}
                className='h-15 w-15 rounded border-none'
                width={60}
                height={60}
                src={organization.avatar || avatar}
                alt='org-background'
              />
              <div className='flex flex-col justify-center'>
                <Typography variant='h5' tag='h5'>
                  {organization.name}
                </Typography>
                <Typography variant='sub3' tag='p' className='text-muted-foreground'>
                  <I18nText
                    path={
                      `organization.stage.${organization.stage.toLowerCase()}` as LocaleMessageId
                    }
                  />
                </Typography>
              </div>
            </div>
            <div className='relative 2md:hidden'>
              <MobileProfileDropdownMenu
                partner={state.partner}
                onEditPartnerClick={functions.onEditPartnerClick}
                onEditQRScannerClick={functions.onEditQRScannerClick}
              />
            </div>
            <div className='2mdx:hidden'>
              <DesktopProfileMenu
                partner={state.partner}
                onEditPartnerClick={functions.onEditPartnerClick}
                onEditQRScannerClick={functions.onEditQRScannerClick}
              />
            </div>
            <EditPartnerDialog
              open={state.editEmployeeDialogOpen}
              onOpenChange={functions.onEditPartnerCloseClick}
              partner={state.partner}
              onEdit={functions.onEditPartner}
            />
            {/* <QRCodeScanner
              avatar={organization.avatar}
              open={state.editQRScannerDialogOpen}
              onOpenChange={functions.onEditQRScannerCloseClick}
              onEdit={functions.onEditQRScannerClick}
            /> */}
          </div>
          <OrganizationHeaderTabs organization={organization} />
        </div>
      </div>
    </div>
  );
};
