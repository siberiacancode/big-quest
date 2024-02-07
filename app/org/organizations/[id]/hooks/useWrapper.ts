'use client';

import { useParams } from 'next/navigation';

import { useGetOrganizationByIdQuery } from '@/utils/api';

export const useWrapper = () => {
  const { id } = useParams();

  const getOrganizationByIdQuery = useGetOrganizationByIdQuery({ id });

  return {
    state: {
      organization: getOrganizationByIdQuery.data,
      isLoading: getOrganizationByIdQuery.isLoading
    }
  };
};
