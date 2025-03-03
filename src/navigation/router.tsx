import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import { HomeScreen } from '@/screens/home/home.screen';
import { BlogScreen } from '@/screens/blog/blog.screen';
import { Layout } from '@/components/shared/layout/layout.component';
import { NotFound } from '@/screens/notFound/notFound.screen';
import { About } from '@/screens/about/about.screen';
import { Suspense } from 'react';
import { Loader2 } from 'lucide-react';

const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-[400px]">
    <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
  </div>
);

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
      {
        path: 'blog/*',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <BlogScreen />
          </Suspense>
        ),
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
]);
