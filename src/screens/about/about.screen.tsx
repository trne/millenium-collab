import type { AboutScreenProps } from './types';

export function About({}: AboutScreenProps = {}) {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold">About</h1>
      <p className="mt-4 text-muted-foreground">
        This is the about page of {import.meta.env.VITE_APP_NAME}.
      </p>
    </div>
  );
}