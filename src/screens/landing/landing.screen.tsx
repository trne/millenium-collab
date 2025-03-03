import type { LandingScreenProps } from './types';

export function Landing({}: LandingScreenProps = {}) {
  return (
    <div className="max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
        Welcome to {import.meta.env.VITE_APP_NAME}
      </h1>
      <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
        This is a starter template with React, TypeScript, Tailwind CSS, and shadcn/ui.
      </p>
    </div>
  );
}