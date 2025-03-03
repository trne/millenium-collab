import { RouterProvider } from 'react-router-dom';
import { router } from '@/navigation/router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();
function BlogApp() {
  return (
    <div className="flex-grow w-full bg-darkgreen">
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </div>
  );
}

export default BlogApp;