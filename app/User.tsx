'use client';

import { useGetUserQuery } from '@/utils/api';

export const User = () => {
  const getUserQuery = useGetUserQuery();
  console.log('getUserQuery', getUserQuery);

  return <>{getUserQuery.data?.name}</>;
};
