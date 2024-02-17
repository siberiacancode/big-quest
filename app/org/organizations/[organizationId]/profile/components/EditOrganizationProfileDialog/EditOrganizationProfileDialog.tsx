import { XIcon } from 'lucide-react';

import { I18nText } from '@/components/common';
import { Dialog, DialogClose, DialogContent, DialogTrigger, Typography } from '@/components/ui';

import { EditOrganizationForm } from './components/EditOrganizationForm/EditOrganizationForm';
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
      <DialogContent>
        <DialogClose>
          <XIcon className='h-4 w-4' />
        </DialogClose>
        <div className=''>
          <div className=''>
            <Typography variant='h2' tag='h2'>
              <I18nText path='dialog.registerOrganization.title' />
            </Typography>
            <div className=''>
              <EditOrganizationForm organization={organization} />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
