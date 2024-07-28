'use client';

import React from 'react';
import { XIcon } from 'lucide-react';
import Image from 'next/image';

import treeBackground from '@/assets/images/background/trees.png';
import { I18nText } from '@/components/common';
import { Dialog, DialogClose, DialogContent, DialogTrigger, Typography } from '@/components/ui';

import { RegisterOrganizationForm } from './components/RegisterOrganizationForm/RegisterOrganizationForm';
import { useRegisterOrganizationDialog } from './hooks/useRegisterOrganizationDialog';

interface RegisterOrganizationModalProps {
  trigger: JSX.Element;
}

export const RegisterOrganizationDialog = ({ trigger }: RegisterOrganizationModalProps) => {
  const { state, functions } = useRegisterOrganizationDialog();

  return (
    <Dialog open={state.open} onOpenChange={functions.setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className='h-screen w-full lg:h-auto lg:w-max lg:px-52'>
        <DialogClose>
          <XIcon className='h-6 w-6' />
        </DialogClose>
        <div className='flex items-center justify-center overflow-y-auto'>
          <Image className='absolute' src={treeBackground} alt='tree background' />
          <div className='flex flex-col items-center'>
            <Typography variant='h3' tag='h3'>
              <I18nText path='dialog.registerOrganization.title' />
            </Typography>
            <div className='round z-10 bg-background p-5 md:my-20 md:border'>
              <RegisterOrganizationForm onRegistered={functions.onRegistered} />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
