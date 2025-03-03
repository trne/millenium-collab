import { lazy, Suspense, useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react';

const BlogMFE = lazy(() => {
  return new Promise((resolve) => {
    // Small delay to ensure remote is loaded
    setTimeout(() => {
      resolve(import('blogMFE/BlogApp'));
    }, 100);
  });
});

export const BlogScreen = () => {
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    window.onerror = (message) => {
      if (message.toString().includes('Failed to fetch dynamically imported module')) {
        setError(new Error('Blog module failed to load. Please ensure the blog service is running.'));
      }
    };

    return () => {
      window.onerror = null;
    };
  }, []);

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
        <p className="text-destructive mb-4">{error.message}</p>
        <p className="text-muted-foreground text-sm">
          Make sure the blog service is running on port 5001
        </p>
      </div>
    );
  }

  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-[400px]">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    }>
      <BlogMFE />
    </Suspense>
  );
};
