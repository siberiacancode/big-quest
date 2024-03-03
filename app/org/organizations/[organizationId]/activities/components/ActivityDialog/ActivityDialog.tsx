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

import { ActivityForm } from './components/ActivityForm/ActivityForm';
import { ActivityImages } from './components/ActivityImages/ActivityImages';
import { ActivityInfo } from './components/ActivityInfo/ActivityInfo';
import { useActionActivityDialog } from './useActionActivityDialog/useActionActivityDialog';

interface ActivityDialogProps {
  trigger: JSX.Element;
  actionType: ActivityActionType;
  activity?: ActivityResponse;
}

export const ActivityDialog = ({ trigger, actionType, activity }: ActivityDialogProps) => {
  const { state, functions } = useActionActivityDialog({ actionType });

  return (
    <Dialog open={state.open} onOpenChange={functions.setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className='flex h-fit w-11/12 max-w-[713px] flex-col rounded-lg smx:max-h-[90%]'>
        <DialogClose>
          <XIcon className='h-6 w-6' />
        </DialogClose>
        <DialogHeader>
          <DialogTitle>
            <Typography variant='h4' tag='h1'>
              <I18nText path='dialog.addActivity.title' />
            </Typography>
          </DialogTitle>
        </DialogHeader>
        <div className='flex h-max gap-4 px-5 smx:px-0'>
          <ActivityImages />
        </div>
        {actionType === 'info' && activity ? (
          <ActivityInfo activity={activity} />
        ) : (
          <ActivityForm actionType={actionType} activity={activity} onAction={functions.onAction} />
        )}
      </DialogContent>
    </Dialog>
  );
};
