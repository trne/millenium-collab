import { createBrowserRouter, createMemoryRouter } from 'react-router-dom';
import { BlogScreen } from '@/screens/blog/blog.screen';
import { BlogPostScreen } from '@/screens/blogPost/blogPost.screen';
import { Suspense } from 'react';
import { Loader2 } from 'lucide-react';

const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-[400px]">
    <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
  </div>
);

// Check if we're running as a standalone app or embedded in another app
//const isEmbedded = window.location.pathname.includes('/blog');

// Create routes array to be used with either router type
const routes = [
  {
    path: '/',
    element: (
      <Suspense fallback={<LoadingFallback />}>
        <BlogScreen />
      </Suspense>
    ),
  },
  {
    path: ':slug',
    element: (
      <Suspense fallback={<LoadingFallback />}>
        <BlogPostScreen />
      </Suspense>
    ),
  },
];

// Use memory router when embedded, browser router when standalone
export const router = createMemoryRouter(routes)
  
//  ? createMemoryRouter(routes)
//  : createBrowserRouter(routes, {
//      basename: '/blog', // Add basename for when it's standalone
//    });