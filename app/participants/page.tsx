import type { WizardStepId } from './(contexts)/wizard/WizardContext';
import { defaultWizardMap } from './(contexts)/wizard/WizardContext';
import { WizardProvider } from './(contexts)/wizard/WizardProvider';
import { WizardStep } from './(contexts)/wizard/WizardStep';

interface AuthPageProps {
  searchParams: { step?: WizardStepId };
}

const AuthPage = ({ searchParams }: AuthPageProps) => {
  const initialStepId = searchParams.step ?? 'excursion';

  return (
    <WizardProvider map={defaultWizardMap} initialStepId={initialStepId}>
      <WizardStep />
    </WizardProvider>
  );
};

export default AuthPage;
