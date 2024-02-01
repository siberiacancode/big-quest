'use client';

import React from 'react';
import Image from 'next/image';

import treeBackground from '@/assets/images/treeBackground.png';
import { I18nText } from '@/components/common';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui';

import { useRegisterOrganizationDialog } from './hooks/useRegisterOrganizationDialog';
import { RegisterOrganizationForm } from './RegisterOrganizationForm';

interface RegisterOrganizationModalProps {
  trigger: JSX.Element;
}

export const RegisterOrganizationDialog = ({ trigger }: RegisterOrganizationModalProps) => {
  const { state, functions } = useRegisterOrganizationDialog();

  return (
    <Dialog open={state.open} onOpenChange={functions.setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className='max-h-screen min-h-screen min-w-full overflow-y-scroll'>
        <div className='flex items-center justify-center overflow-y-auto'>
          <Image className='absolute' src={treeBackground} alt='' />
          <div className='flex flex-col items-center'>
            <h1 className='scroll-m-20 text-center text-4xl font-extrabold tracking-tight lg:text-5xl'>
              <I18nText path='feature.registerOrganization.title' />
            </h1>
            <div className='round relative z-10 mt-7 border bg-background p-5 xsx:w-full lg:mt-16 lg:p-10 sm:w-[450px]'>
              <RegisterOrganizationForm onSuccessSubmit={functions.onSuccessSubmit} />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
