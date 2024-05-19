'use client';

import { XIcon } from 'lucide-react';

import type { TariffResponse } from '@/api-types';
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
  tariff: TariffResponse;
  trigger: JSX.Element;
}

export const EditOrganizationTariffDialog = ({
  tariff,
  trigger
}: EditOrganizationTariffDialogProps) => {
  const { state, functions } = useEditOrganizationTariffDialog();

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
        <ScrollArea className='h-full overflow-y-auto rounded-lg border px-[77px] pb-[47px] pt-[30px] lgx:px-12 mdx:justify-center mdx:px-10 xsx:mb-[30px] xsx:px-3'>
          <EditOrganizationTariffForm tariff={tariff} onEdited={functions.onEdited} />
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
