import { I18nText } from '@/components/common';
import { RegisterOrganizationDialog } from '@/components/dialogs';
import { Button } from '@/components/ui';

const LandingPage = () => (
  <RegisterOrganizationDialog
    trigger={
      <Button>
        <I18nText path='button.goToRegisterOrganization' />
      </Button>
    }
  />
);
export default LandingPage;
