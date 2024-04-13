import React from 'react';

import { useWizard } from '../../../(contexts)/wizard/useWizard';

export type ExcursionStepScreen = 0 | 1 | 2 | 3;

export const useExcursionStep = () => {
  const wizard = useWizard();
  const [screen, setScreen] = React.useState<ExcursionStepScreen>(0);

  const goToRegister = () => wizard.setStepId('register');
  const onNext = () => setScreen((prev) => (prev + 1) as ExcursionStepScreen);

  return { state: { screen }, functions: { onNext, goToRegister } };
};
