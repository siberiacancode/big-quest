'use client';

import { useWizard } from './useWizard';
import type { WizardStepId } from './WizardContext';
import { DEFAULT_WIZARD_CONTEXT_PARAMS } from './WizardContext';

export const WizardStep = () => {
  const { map, activeStepId } = useWizard();
  const isValidStepId = (stepId: any): stepId is WizardStepId => Object.keys(map).includes(stepId);

  if (!isValidStepId(activeStepId)) {
    return map[DEFAULT_WIZARD_CONTEXT_PARAMS.activeStepId].component;
  }

  return map[activeStepId].component;
};
