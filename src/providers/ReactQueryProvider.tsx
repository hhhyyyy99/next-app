'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';

const queryConfig = {
  defaultOptions: {
    queries: {
      enabled: true,
      staleTime: 3_600_000,
      refetchInterval: false,
      refetchIntervalInBackground: false,
      refetchOnWindowFocus: true,
      refetchOnReconnect: true,
      refetchOnMount: true,
      retryOnMount: true,
    },
  },
}
export function ReactQueryProvider({ children }: React.PropsWithChildren) {
  const [client] = React.useState(new QueryClient());
  
  return (
    <QueryClientProvider client={client}>
      {children}
    </QueryClientProvider>
  );
}
