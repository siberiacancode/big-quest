'use client';

import { MutationCache, QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { toast } from 'sonner';

interface ProvidersProps {
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

const Providers: React.FC<ProvidersProps> = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

export default Providers;
