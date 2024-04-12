'use client';

import { useWizard } from './useWizard';
import { defaultWizardContextParams, type WizardStepId } from './WizardContext';

export const WizardStep = () => {
  const { map, activeStepId } = useWizard();
  const isValidStepId = (stepId: any): stepId is WizardStepId => Object.keys(map).includes(stepId);

  if (!isValidStepId(activeStepId)) {
    return map[defaultWizardContextParams.activeStepId].component;
  }

  return map[activeStepId].component;
};
