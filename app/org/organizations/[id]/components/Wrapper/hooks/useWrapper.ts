'use client';

import { useParams } from 'next/navigation';

import { useGetOrganizationByIdQuery } from '@/utils/api';

export const useWrapper = () => {
  const { id } = useParams();

  const organization = useGetOrganizationByIdQuery({ id });

  return {
    state: { organization: organization.data, isLoading: organization.isLoading }
  };
};
