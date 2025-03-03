import type { FooterProps } from './types';

export function Footer({}: FooterProps = {}) {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} {import.meta.env.VITE_APP_NAME}. All rights reserved.
      </div>
    </footer>
  );
}