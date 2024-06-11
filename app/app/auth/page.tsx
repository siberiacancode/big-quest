'use client';

import { useUser } from '@/utils/contexts';

import { useUserCredentialsContext } from '../(contexts)';

import type { WizardStepId } from './(contexts)';
import { WizardProvider, WizardStep } from './(contexts)';
import { redirectToProfileAction } from './actions';
import { authMap } from './map';

interface AuthPageProps {
  searchParams: { step?: WizardStepId };
}

const AuthPage = ({ searchParams }: AuthPageProps) => {
  const userCredentialsContext = useUserCredentialsContext();
  const userContext = useUser();

  const defaultStepId = 'excursion';
  let initialStepId = searchParams.step ?? defaultStepId;
  if (initialStepId === 'register' && !userCredentialsContext.state) {
    initialStepId = defaultStepId;
  } else if (initialStepId === 'register' && userContext.user.id) {
    redirectToProfileAction();
  }

  return (
    <WizardProvider map={authMap} initialStepId={initialStepId}>
      <WizardStep />
    </WizardProvider>
  );
};

export default AuthPage;
