'use client';

import React from 'react';

import { I18nText } from '@/components/common';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui';

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
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <I18nText path='feature.registerOrganization.title' />
          </DialogTitle>
        </DialogHeader>
        <RegisterOrganizationForm onSuccessSubmit={functions.onSuccessSubmit} />
      </DialogContent>
    </Dialog>
  );
};
