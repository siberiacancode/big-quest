import { I18nText } from '@/components/common';
import { RegisterOrganizationDialog } from '@/components/dialogs';
import { Button } from '@/components/ui';

export const LeaveRequestBlock = () => {
  return (
    <div>
      <div>
        <RegisterOrganizationDialog
          trigger={
            <Button>
              <I18nText path='button.goToRegisterOrganization' />
            </Button>
          }
        />
      </div>
    </div>
  );
};
