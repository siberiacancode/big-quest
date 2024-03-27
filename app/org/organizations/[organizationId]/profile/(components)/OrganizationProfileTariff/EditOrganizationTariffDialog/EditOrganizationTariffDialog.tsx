'use client';

import { XIcon } from 'lucide-react';

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

import { EditOrganizationTariffForm } from './components/EditOrganizationTariffForm/EditOrganizationTariffForm';
import { useEditOrganizationTariffDialog } from './hooks/useEditOrganizationTariffDialog';

interface EditOrganizationTariffDialogProps {
  organization: OrganizationResponse;
  tariff: TariffResponse;
  trigger: JSX.Element;
}

export const EditOrganizationTariffDialog = ({
  organization,
  tariff,
  trigger
}: EditOrganizationTariffDialogProps) => {
  const { functions, state } = useEditOrganizationTariffDialog();

  return (
    <Dialog open={state.open} onOpenChange={functions.setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className='flex h-fit w-11/12 max-w-[713px] flex-col rounded-lg smx:max-h-[90%]'>
        <DialogClose>
          <XIcon className='h-6 w-6' />
        </DialogClose>
        <DialogHeader>
          <DialogTitle asChild>
            <Typography tag='h4' variant='h4' className='text-center'>
              <I18nText path='dialog.editOrganizationTariff.title' />
            </Typography>
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className='flex h-full flex-col items-end justify-between overflow-y-auto rounded-lg border px-[100px] pb-[47px] pt-[30px]'>
          <EditOrganizationTariffForm
            organization={organization}
            tariff={tariff}
            onEdited={functions.onEdited}
          />
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
