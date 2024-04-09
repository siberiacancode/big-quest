'use client';

import React from 'react';

import { ExcursionStep } from '../../(steps)/excursion/ExcursionStep';

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

export const defaultWizardMap: WizardMap = {
  excursion: {
    id: 'excursion',
    nodes: ['register'],
    component: <ExcursionStep />
  },
  register: {
    id: 'register',
    nodes: [],
    component: null
  }
};

export const WizardContext = React.createContext<WizardContextParams>({
  map: defaultWizardMap,
  activeStepId: 'excursion',
  setStepId: () => {}
});
