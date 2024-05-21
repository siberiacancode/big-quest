'use client';

import { XIcon } from 'lucide-react';

import type { OrganizationResponse } from '@/api-types';
import { I18nText } from '@/components/common';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  ScrollArea,
  Typography
} from '@/components/ui';

import { EditOrganizationProfileForm } from './components/EditOrganizationProfileForm/EditOrganizationProfileForm';
import { useEditOrganizationProfileDialog } from './hooks/useEditOrganizationProfileDialog';

interface EditOrganizationProfileDialogProps {
  organization: OrganizationResponse;
  trigger: JSX.Element;
}

export const EditOrganizationProfileDialog = ({
  organization,
  trigger
}: EditOrganizationProfileDialogProps) => {
  const { functions, state } = useEditOrganizationProfileDialog();

  return (
    <Dialog open={state.open} onOpenChange={functions.setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className='h-screen w-screen lg:max-h-[700px] lg:max-w-[700px]'>
        <DialogClose>
          <XIcon className='h-6 w-6' />
        </DialogClose>
        <DialogHeader>
          <DialogTitle asChild>
            <Typography tag='h4' variant='h4'>
              <I18nText path='dialog.editOrganizationProfile.title' />
            </Typography>
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className='max-h-[90vh] p-6'>
          <EditOrganizationProfileForm organization={organization} onEdited={functions.onEdited} />
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
