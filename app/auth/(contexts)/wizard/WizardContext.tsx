'use client';

import React from 'react';

export type WizardStepId = 'excursion' | 'register';

export interface WizardStep {
  id: WizardStepId;
  nodes: WizardStepId[];
  component: React.ReactNode;
}

export type WizardMap = Record<WizardStepId, WizardStep>;

export interface WizardContextParams {
  map: WizardMap;
  activeStepId: WizardStepId;
  setStepId: (newStepId: WizardStepId) => void;
}

export const DEFAULT_WIZARD_CONTEXT_PARAMS: WizardContextParams = {
  map: {} as WizardMap,
  activeStepId: 'excursion',
  setStepId: () => {}
};

export const WizardContext = React.createContext<WizardContextParams>(
  DEFAULT_WIZARD_CONTEXT_PARAMS
);
