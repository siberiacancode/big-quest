'use client';

import { useGetUserQuery } from '@/utils/api';

export const User = () => {
  const getUserQuery = useGetUserQuery();
  console.log('getUserQuery', getUserQuery);

  return <div>User {getUserQuery.data?.name}</div>;
};
