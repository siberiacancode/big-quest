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

import { ActivityActionForm } from './components/ActivityActionForm/ActivityActionForm';
import { ActivityInfo } from './components/ActivityInfo/ActivityInfo';
import type { ActivityActionType } from './constants/types';
import { useActivityDialog } from './hooks/useActivityDialog';

interface ActivityDialogProps {
  trigger: JSX.Element;
  actionType: ActivityActionType;
  activity?: ActivityResponse;
}

export const ActivityDialog = ({ trigger, actionType, activity }: ActivityDialogProps) => {
  const { state, functions } = useActivityDialog({ actionType, activity });

  return (
    <Dialog open={state.open} onOpenChange={functions.onOpenChange}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className='h-[95%] max-w-[713px] smx:h-screen smx:w-screen'>
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

        {state.actionType === 'info' && activity && (
          <ActivityInfo activity={state.activity} onEdit={functions.onEdit} />
        )}
        {state.actionType !== 'info' && (
          <ActivityActionForm
            actionType={state.actionType}
            activity={state.activity}
            externalActionType={actionType}
            onEdit={functions.onEdit}
            onAction={functions.onAction}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};
