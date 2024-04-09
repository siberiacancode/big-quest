import type { WizardStepId } from './(contexts)/wizard/WizardContext';
import { defaultWizardMap } from './(contexts)/wizard/WizardContext';
import { WizardProvider } from './(contexts)/wizard/WizardProvider';
import { WizardStep } from './(contexts)/wizard/WizardStep';

interface AuthPageProps {
  params: SearchParams;
}

const AuthPage = ({ params }: AuthPageProps) => {
  const initialStepId = params.stepId ? (params.stepId as WizardStepId) : 'excursion';

  return (
    <WizardProvider map={defaultWizardMap} initialStepId={initialStepId}>
      <WizardStep />
    </WizardProvider>
  );
};

export default AuthPage;
