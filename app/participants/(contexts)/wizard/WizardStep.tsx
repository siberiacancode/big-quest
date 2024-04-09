'use client';

import { useWizard } from './useWizard';

export const WizardStep = () => {
  const { activeStepId, map } = useWizard();

  if (!map[activeStepId]) return null;

  return map[activeStepId].component;
};
