import type { WizardStepId } from './(contexts)';
import { RegisterInfoProvider, WizardProvider, WizardStep } from './(contexts)';
import { authMap } from './map';

interface AuthPageProps {
  searchParams: { step?: WizardStepId };
}

const AuthPage = ({ searchParams }: AuthPageProps) => {
  const initialStepId = searchParams.step ?? 'excursion';

  return (
    <RegisterInfoProvider>
      <WizardProvider map={authMap} initialStepId={initialStepId}>
        <WizardStep />
      </WizardProvider>
    </RegisterInfoProvider>
  );
};

export default AuthPage;
