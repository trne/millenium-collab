import { Link } from 'react-router-dom';
import { Button } from '@/components/baseUi/button/button.component';
import type { NotFoundScreenProps } from './types';

export function NotFound({}: NotFoundScreenProps = {}) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold">404</h1>
        <p className="mt-2 text-lg text-muted-foreground">Page not found</p>
        <Button className="mt-4" asChild>
          <Link to="/">Go home</Link>
        </Button>
      </div>
    </div>
  );
}
