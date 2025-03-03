import { Link } from 'react-router-dom';
import { BookOpen, Home, Info } from 'lucide-react';
import { Button } from '@/components/baseUi/button/button.component';
import { FC } from 'react';

export interface NavigationProps {
  // Add props if needed in the future
}
export const Navigation: FC<NavigationProps> = () => {
  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold flex items-center gap-2">
          <Home className="h-6 w-6" />
          {import.meta.env.VITE_APP_NAME}
        </Link>
        <div className="flex items-center gap-2 sm:gap-4">
          <Button variant="ghost" asChild>
            <Link to="/blog" className="flex items-center gap-1 sm:gap-2">
              <BookOpen className="h-4 w-4" />
              <span className="hidden sm:inline">Blog</span>
            </Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link to="/about" className="flex items-center gap-1 sm:gap-2">
              <Info className="h-4 w-4" />
              <span className="hidden sm:inline">About</span>
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};
