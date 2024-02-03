'use client';

import React from 'react';
import { XIcon } from 'lucide-react';
import Image from 'next/image';

import treeBackground from '@/assets/images/treeBackground.png';
import { I18nText } from '@/components/common';
import { Dialog, DialogClose, DialogContent, DialogTrigger, Typography } from '@/components/ui';
import { RegisterOrganizationForm } from '@/features';

import { useRegisterOrganizationDialog } from './hooks/useRegisterOrganizationDialog';

interface RegisterOrganizationModalProps {
  trigger: JSX.Element;
}

export const RegisterOrganizationDialog = ({ trigger }: RegisterOrganizationModalProps) => {
  const { state, functions } = useRegisterOrganizationDialog();

  return (
    <Dialog open={state.open} onOpenChange={functions.setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className='max-h-screen min-h-screen min-w-full overflow-y-scroll rounded-none border-none sm:rounded-none'>
        <DialogClose>
          <XIcon className='h-6 w-6' />
        </DialogClose>
        <div className='flex items-center justify-center overflow-y-auto'>
          <Image className='absolute' src={treeBackground} alt='' />
          <div className='flex flex-col items-center'>
            <Typography tag='h1' variant='h1'>
              <I18nText path='feature.registerOrganization.title' />
            </Typography>
            <div className='round relative z-10 mt-16 border bg-background p-5 xsx:mt-7 xsx:w-full lg:mt-16 lg:p-10 sm:w-[450px]'>
              <RegisterOrganizationForm onSuccessSubmit={functions.onSuccessSubmit} />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
