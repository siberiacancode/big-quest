'use client';

import { MutationCache, QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { toast } from 'sonner';

interface QueryProviderProps {
  children: React.ReactNode;
}

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false, retry: false } },
  queryCache: new QueryCache({
    onError: (cause) =>
      toast.error(cause.message, {
        cancel: { label: 'Close' }
      })
  }),
  mutationCache: new MutationCache({
    onError: (cause) =>
      toast.error(cause.message, {
        cancel: { label: 'Close' }
      })
  })
});

export const QueryProvider: React.FC<QueryProviderProps> = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);
