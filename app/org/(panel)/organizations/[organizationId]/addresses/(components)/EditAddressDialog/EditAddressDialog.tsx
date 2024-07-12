'use client';

import React from 'react';
import { XIcon } from 'lucide-react';

import { I18nText } from '@/components/common';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  Typography
} from '@/components/ui';

import type { AddressData } from '../../(constants)/types';
import { ActionAddressForm } from '../ActionAddressForm/ActionAddressForm';

interface EditAddressDialogProps extends React.ComponentProps<typeof Dialog> {
  onEdit: () => void;
  address: AddressData;
}

export const EditAddressDialog = ({ onEdit, address, ...props }: EditAddressDialogProps) => (
  <Dialog {...props}>
    <DialogContent className='flex h-fit w-11/12 max-w-[713px] flex-col rounded-lg smx:max-h-[90%]'>
      <DialogClose>
        <XIcon className='h-6 w-6' />
      </DialogClose>
      <DialogHeader>
        <DialogTitle>
          <Typography variant='h4' tag='h4'>
            <I18nText path='dialog.editAddress.title' />
          </Typography>
        </DialogTitle>
      </DialogHeader>
      <div className='flex h-full flex-col items-end justify-between overflow-y-auto rounded-lg border p-5'>
        <ActionAddressForm onAction={onEdit} actionType='edit' address={address} />
      </div>
    </DialogContent>
  </Dialog>
);
