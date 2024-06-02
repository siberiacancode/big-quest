'use client';

import React from 'react';

import { ActivitiesPageContext } from './ActivitiesPageContext';

export const useActivitiesPage = () => React.useContext(ActivitiesPageContext);
