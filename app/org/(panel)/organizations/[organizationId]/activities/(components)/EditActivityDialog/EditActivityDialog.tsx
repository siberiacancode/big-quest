'use client';

import React from 'react';
import { XIcon } from 'lucide-react';

import type { ActivityResponse } from '@/api-types';
import { I18nText } from '@/components/common';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  Typography
} from '@/components/ui';

import { ActionActivityForm } from '../ActionActivityForm/ActionActivityForm';

interface EditActivityDialogProps extends React.ComponentProps<typeof Dialog> {
  onEdit: () => void;
  activity: ActivityResponse;
}

export const EditActivityDialog = ({ onEdit, activity, ...props }: EditActivityDialogProps) => (
  <Dialog {...props}>
    <DialogContent className='flex h-fit w-11/12 max-w-[713px] flex-col rounded-lg smx:max-h-[90%]'>
      <DialogClose>
        <XIcon className='h-6 w-6' />
      </DialogClose>
      <DialogHeader>
        <DialogTitle>
          <Typography variant='h4' tag='h4'>
            <I18nText path='dialog.addActivity.title' />
          </Typography>
        </DialogTitle>
      </DialogHeader>
      <ActionActivityForm onAction={onEdit} actionType='edit' activity={activity} />
    </DialogContent>
  </Dialog>
);
