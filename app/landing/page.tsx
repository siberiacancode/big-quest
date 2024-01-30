import { I18nText } from '@/components/common';
import { Button } from '@/components/ui';
import { RegisterOrganizationDialog } from '@/features';

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
