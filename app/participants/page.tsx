import type { WizardStepId } from './(contexts)/wizard/WizardContext';
import { WizardProvider } from './(contexts)/wizard/WizardProvider';
import { WizardStep } from './(contexts)/wizard/WizardStep';
import { authMap } from './map';

interface AuthPageProps {
  searchParams: { step?: WizardStepId };
}

const AuthPage = ({ searchParams }: AuthPageProps) => {
  const initialStepId = searchParams.step ?? 'excursion';

  return (
    <WizardProvider map={authMap} initialStepId={initialStepId}>
      <WizardStep />
    </WizardProvider>
  );
};

export default AuthPage;
