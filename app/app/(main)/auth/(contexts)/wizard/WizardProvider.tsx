'use client';

import React from 'react';

import type { WizardMap, WizardStepId } from './WizardContext';
import { WizardContext } from './WizardContext';

export interface WizardProviderProps {
  initialStepId: WizardStepId;
  map: WizardMap;
  children: React.ReactNode;
}

export const WizardProvider = ({ initialStepId, children, map }: WizardProviderProps) => {
  const [activeStepId, setActiveStepId] = React.useState(initialStepId);

  const value = React.useMemo(
    () => ({
      map,
      activeStepId,
      setStepId: (newStepId: WizardStepId) => setActiveStepId(newStepId)
    }),
    [activeStepId, map]
  );

  return <WizardContext.Provider value={value}>{children}</WizardContext.Provider>;
};
