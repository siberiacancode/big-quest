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

import { EditOrganizationProfileForm } from './components/EditOrganizationProfileForm/EditOrganizationProfileForm';
import { useEditOrganizationProfileDialog } from './hooks/useEditOrganizationProfileDialog';

interface EditOrganizationProfileDialogProps {
  organization: OrganizationResponse;
  trigger: JSX.Element;
}

export const EditOrganizationProfileDialog = ({
  organization,
  trigger
}: EditOrganizationProfileDialogProps) => {
  const { functions, state } = useEditOrganizationProfileDialog();

  return (
    <Dialog open={state.open} onOpenChange={functions.setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className='max-h-screen min-h-screen max-w-[600px] overflow-y-auto'>
        <DialogClose>
          <XIcon className='h-6 w-6' />
        </DialogClose>
        <DialogHeader>
          <DialogTitle>
            <Typography variant='h2'>
              <I18nText path='dialog.editOrganizationProfile.title' />
            </Typography>
          </DialogTitle>
        </DialogHeader>

        <div className=''>
          <EditOrganizationProfileForm organization={organization} />
        </div>
      </DialogContent>
    </Dialog>
  );
};
