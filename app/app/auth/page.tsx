import type { WizardStepId } from './(contexts)';
import { WizardProvider, WizardStep } from './(contexts)';
import { authMap } from './map';

interface AuthPageProps {
  searchParams: { step?: WizardStepId };
}

const AuthPage = ({ searchParams }: AuthPageProps) => {
  const step = searchParams.step ?? 'login';
  const initialStepId = step !== 'register' ? step : 'login';

  return (
    <WizardProvider map={authMap} initialStepId={initialStepId}>
      <WizardStep />
    </WizardProvider>
  );
};

export default AuthPage;
