'use client';

import React from 'react';

import type { ActivitiesPageProviderProps } from './(contexts)/activitiesPage';
import { ActivitiesPageProvider } from './(contexts)/activitiesPage';

interface ProvidersProps {
  children: React.ReactNode;
  activitiesPage: Omit<ActivitiesPageProviderProps, 'children'>;
}

export const Providers: React.FC<ProvidersProps> = ({ children, activitiesPage }) => (
  <ActivitiesPageProvider defaultActivitiesPage={activitiesPage.defaultActivitiesPage}>
    {children}
  </ActivitiesPageProvider>
);
