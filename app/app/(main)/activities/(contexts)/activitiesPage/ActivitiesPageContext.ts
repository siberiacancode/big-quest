'use client';

import React from 'react';

export interface ActivitiesPageContextParams {
  categories: CategoryResponse[];
  activities: ActivityResponse[];
  pagination: PaginationResponse;
  isLoading: boolean;
  onCategoryClick: (category: string) => void;
  onSearchChange: (value: string) => void;
  onSearchClear: () => void;
  loadActivitiesMore: () => void;
}

const DEFAULT_ACTIVITIES_PAGE_CONTEXT_PARAMS: ActivitiesPageContextParams = {
  activities: [],
  categories: [],
  pagination: {} as PaginationResponse,
  isLoading: false,
  onCategoryClick: () => {},
  onSearchChange: () => {},
  onSearchClear: () => {},
  loadActivitiesMore: () => {}
};

export const ActivitiesPageContext = React.createContext<ActivitiesPageContextParams>(
  DEFAULT_ACTIVITIES_PAGE_CONTEXT_PARAMS
);
