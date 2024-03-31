'use client';

import React from 'react';
import { PlusCircledIcon } from '@radix-ui/react-icons';
import { XIcon } from 'lucide-react';

import { I18nText } from '@/components/common';
import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Typography
} from '@/components/ui';

import { ActionAddressForm } from '../ActionAddressForm/ActionAddressForm';

import { useAddAddressDialog } from './hooks/useAddAddressDialog';

export const AddAddressDialog = () => {
  const { state, functions } = useAddAddressDialog();

  return (
    <Dialog open={state.open} onOpenChange={functions.setOpen}>
      <DialogTrigger asChild>
        <Button variant='light' className='mx-2 p-5' size='sm'>
          <PlusCircledIcon className='mr-2 h-4 w-4' />
          <I18nText path='button.addAddress' />
        </Button>
      </DialogTrigger>
      <DialogContent className='flex h-fit w-11/12 max-w-[713px] flex-col rounded-lg smx:max-h-[90%]'>
        <DialogClose disabled={state.isLoading}>
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
          <ActionAddressForm onAction={functions.onAction} actionType='add' address={undefined} />
        </div>
      </DialogContent>
    </Dialog>
  );
};
