'use client';

import React from 'react';
import { MutationCache, QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

interface QueryProviderProps {
  children: React.ReactNode;
}

export const QueryProvider: React.FC<QueryProviderProps> = ({ children }) => {
  const router = useRouter();

  const queryClient = React.useMemo(
    () =>
      new QueryClient({
        defaultOptions: { queries: { refetchOnWindowFocus: false, retry: false } },
        queryCache: new QueryCache({
          onError: (error) => {
            const responseError = error as ResponseError;

            if (responseError.response.status === 401) {
              console.log('@', router);
              // router.replace('/sign');
            }
            toast.error(responseError.message, {
              cancel: { label: 'Close' }
            });
          }
        }),
        mutationCache: new MutationCache({
          onError: (cause) =>
            toast.error(cause.message, {
              cancel: { label: 'Close' }
            })
        })
      }),
    []
  );

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
