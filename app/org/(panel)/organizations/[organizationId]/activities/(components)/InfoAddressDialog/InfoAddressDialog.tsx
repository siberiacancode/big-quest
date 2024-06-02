'use client';

import React from 'react';
import { XIcon } from 'lucide-react';

import type { ActivityListResponse } from '@/api-types';
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
import { ActivityInfo } from '../ActivityInfo/ActivityInfo';

interface InfoActivityDialogProps extends React.ComponentProps<typeof Dialog> {
  onEdit: () => void;
  activity: ActivityListResponse;
}

export const InfoAddressDialog = ({
  onEdit,
  onOpenChange,
  activity,
  ...props
}: InfoActivityDialogProps) => {
  const [isEdit, setIsEdit] = React.useState(false);
  const onInfoEditClick = () => setIsEdit(true);
  const onCloseClick = () => {
    if (isEdit) {
      return setIsEdit(false);
    }

    onOpenChange?.(false);
  };

  return (
    <Dialog {...props}>
      <DialogContent className='flex h-screen w-full flex-col sm:rounded-none md:h-fit md:max-h-[90%] md:w-11/12 md:max-w-[713px] md:rounded-lg'>
        <DialogClose onClick={onCloseClick}>
          <XIcon className='h-6 w-6' />
        </DialogClose>
        <DialogHeader>
          <DialogTitle>
            <Typography variant='h4' tag='h4'>
              <I18nText path='dialog.addActivity.title' />
            </Typography>
          </DialogTitle>
        </DialogHeader>
        {!isEdit && <ActivityInfo activity={activity} onEdit={onInfoEditClick} />}
        {isEdit && <ActionActivityForm onAction={onEdit} actionType='edit' activity={activity} />}
      </DialogContent>
    </Dialog>
  );
};
