'use client';

import Image from 'next/image';

import background from '@/assets/images/background/organization.png';
import logo from '@/assets/images/logo/organization.png';
import { I18nText } from '@/components/common';
import { Typography } from '@/components/ui';

import { DesktopProfileMenu } from './components/DesktopProfileMenu/DesktopProfileMenu';
import { EditPartnerDialog } from './components/EditPartnerDialog/EditPartnerDialog';
import { MobileProfileDropdownMenu } from './components/MobileProfileDropdownMenu/MobileProfileDropdownMenu';
import { OrganizationHeaderTabs } from './components/OrganizationHeaderTabs/OrganizationHeaderTabs';
// import { QrCodeScanner } from './components/QrCodeScanner/QrCodeScannerDialog';
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
                src={organization.avatar || logo}
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
            <div className='2md:hidden relative'>
              <MobileProfileDropdownMenu
                partner={state.partner}
                onEditPartnerClick={functions.onEditPartnerClick}
                onEditQrScannerClick={functions.onEditQrScannerClick}
              />
            </div>
            <div className='2mdx:hidden'>
              <DesktopProfileMenu
                partner={state.partner}
                onEditPartnerClick={functions.onEditPartnerClick}
                onEditQrScannerClick={functions.onEditQrScannerClick}
              />
            </div>
            <EditPartnerDialog
              open={state.editEmployeeDialogOpen}
              onOpenChange={functions.onEditPartnerCloseClick}
              partner={state.partner}
              onEdit={functions.onEditPartner}
            />
            {/* <QrCodeScanner
              avatar={organization.avatar}
              open={state.editQrScannerDialogOpen}
              onOpenChange={functions.onEditQrScannerCloseClick}
              onEdit={functions.onEditQrScannerClick}
            /> */}
          </div>
          <OrganizationHeaderTabs organization={organization} />
        </div>
      </div>
    </div>
  );
};
