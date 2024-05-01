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

import { ActionActivityForm } from '../ActionActivityForm/ActionActivityForm';

import { useAddActivityDialog } from './hooks/useAddActivityDialog';

export const AddActivityDialog = () => {
  const { state, functions } = useAddActivityDialog();

  return (
    <Dialog open={state.open} onOpenChange={functions.setOpen}>
      <DialogTrigger asChild>
        <Button variant='light' className='p-5' size='sm'>
          <PlusCircledIcon className='mr-2 h-4 w-4' />
          <I18nText path='button.addActivity' />
        </Button>
      </DialogTrigger>
      <DialogContent className='flex h-fit w-11/12 max-w-[700px] flex-col rounded-lg smx:max-h-[90%]'>
        <DialogClose disabled={state.isLoading}>
          <XIcon className='h-6 w-6' />
        </DialogClose>
        <DialogHeader>
          <DialogTitle>
            <Typography variant='h4' tag='h4'>
              <I18nText path='dialog.addActivity.title' />
            </Typography>
          </DialogTitle>
        </DialogHeader>
        <ActionActivityForm onAction={functions.onAction} actionType='add' />
      </DialogContent>
    </Dialog>
  );
};
