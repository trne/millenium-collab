import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import * as Sentry from "@sentry/react";
import App from './App.tsx';
import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { browserTracingIntegration } from "@sentry/react";

Sentry.init({
  dsn: import.meta.env.STRIX_WRAPPER_SENTRY_DSN,
  integrations: [browserTracingIntegration()],
  tracesSampleRate: 1.0, // Adjust this in production
  environment: import.meta.env.MODE // This will use Vite's environment
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
      retry: 1,
    },
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>
)