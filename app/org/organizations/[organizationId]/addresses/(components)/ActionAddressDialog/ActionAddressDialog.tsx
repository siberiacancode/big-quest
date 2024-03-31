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
  Typography
} from '@/components/ui';

import type { AddressData } from '../../(constants)/types';

import { ActionAddressForm } from './components/ActionAddressForm/ActionAddressForm';
import type { AddressActionType } from './contants/types';
import { useActionAddressDialog } from './hooks/useActionAddressDialog';

interface ActionAddressDialogProps extends React.ComponentProps<typeof Dialog> {
  trigger?: JSX.Element;
  actionType: AddressActionType;
  address?: AddressData;
}

export const ActionAddressDialog = ({
  trigger,
  actionType,
  address,
  ...props
}: ActionAddressDialogProps) => {
  const { functions } = useActionAddressDialog({ actionType });

  return (
    <Dialog {...props}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className='flex h-fit w-11/12 max-w-[713px] flex-col rounded-lg smx:max-h-[90%]'>
        <DialogClose>
          <XIcon className='h-6 w-6' />
        </DialogClose>
        <DialogHeader>
          <DialogTitle>
            <Typography variant='h4' tag='h4'>
              <I18nText path='dialog.addAddress.title' />
            </Typography>
          </DialogTitle>
        </DialogHeader>
        <div className='flex h-full flex-col items-end justify-between overflow-y-auto rounded-lg border p-5'>
          <ActionAddressForm
            onAction={functions.onAction}
            actionType={actionType}
            address={address}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};
