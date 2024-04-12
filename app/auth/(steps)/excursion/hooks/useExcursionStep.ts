import React from 'react';

import { useWizard } from '../../../(contexts)/wizard/useWizard';

export type ExcursionStepScreen = 'first' | 'second' | 'third' | 'fourth';

export const useExcursionStep = () => {
  const { setStepId } = useWizard();
  const [screen, setScreen] = React.useState<ExcursionStepScreen>('first');

  const goToRegister = () => setStepId('register');

  return { state: { screen }, functions: { setScreen, goToRegister } };
};
