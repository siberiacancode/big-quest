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
            const responseError = error.cause as ResponseError;

            if (responseError?.response?.status === 401) {
              router.replace('/auth');
            }

            toast.error(responseError.response.statusText, {
              cancel: { label: 'Close' }
            });
          }
        }),
        mutationCache: new MutationCache({
          onError: (error) => {
            const responseError = error.cause as ResponseError;
            if (responseError?.response?.status === 401) {
              router.replace('/auth');
            }

            toast.error(responseError.response.statusText, {
              cancel: { label: 'Close' }
            });
          }
        })
      }),
    []
  );

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
