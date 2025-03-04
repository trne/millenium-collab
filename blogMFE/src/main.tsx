import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import BlogApp from './App.tsx';

import * as Sentry from "@sentry/react";
import { browserTracingIntegration } from "@sentry/react";

Sentry.init({
  dsn: import.meta.env.STRIX_BLOG_SENTRY_DSN,
  integrations: [browserTracingIntegration()],
  tracesSampleRate: 1.0, // Adjust this in production
  environment: import.meta.env.MODE // This will use Vite's environment
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BlogApp />
  </StrictMode>
);
