import React from 'react';
import { QrCodeIcon, ScanLineIcon, XIcon } from 'lucide-react';
import Image from 'next/image';

import { I18nText } from '@/components/common';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Typography
} from '@/components/ui';

interface QrCodeScannerProps extends React.ComponentProps<typeof Dialog> {
  onEdit: () => void;
  avatar?: string;
}

export const QrCodeScanner = ({ onEdit, avatar, ...props }: QrCodeScannerProps) => (
  <Dialog {...props}>
    <DialogContent className='flex h-fit w-full max-w-[375px] flex-col rounded-lg xxsx:h-full'>
      <DialogClose>
        <XIcon className='h-6 w-6' />
      </DialogClose>
      <DialogHeader>
        <DialogTitle className='flex justify-center'>
          <Typography variant='h4' tag='h4'>
            <I18nText path='dialog.scanQrCode.title' />
          </Typography>
        </DialogTitle>
      </DialogHeader>
      <Tabs
        defaultValue='code'
        className='relative flex h-[674px] w-full flex-col items-center pt-[136px]'
      >
        <TabsList className='absolute bottom-0 h-14'>
          <TabsTrigger value='code' className='flex gap-[10px] px-8 py-3'>
            <QrCodeIcon className='h-6 w-6' />
            <Typography>
              <I18nText path='partner.scanner.qrCode' />
            </Typography>
          </TabsTrigger>
          <TabsTrigger value='camera' className='flex gap-[10px] px-8 py-3'>
            <ScanLineIcon className='h-6 w-6' />
            <Typography>
              <I18nText path='partner.scanner.scanner' />
            </Typography>
          </TabsTrigger>
        </TabsList>
        <TabsContent value='code' className='flex flex-col items-center gap-2'>
          {avatar && (
            <Image src={avatar} alt='organization-avatar' className='size-18 rounded-full' />
          )}
          <div className='flex flex-col items-center gap-5'>
            <div className='flex h-[202px] w-[202px] items-center justify-center bg-muted-foreground'>
              scanner
            </div>
            <div className='flex gap-2'>
              <ScanLineIcon className='h-6 w-6 text-muted-foreground' />
              <Typography variant='body1'>
                <I18nText path='partner.scanner.pointCamera' />
              </Typography>
            </div>
          </div>
        </TabsContent>
        <TabsContent value='camera'>
          <I18nText path='partner.scanner.camera' />
        </TabsContent>
      </Tabs>
    </DialogContent>
  </Dialog>
);
