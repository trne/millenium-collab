import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { About } from './about.screen';

describe('About Screen', () => {
  it('renders about heading', () => {
    render(<About />);
    
    const heading = screen.getByRole('heading', {
      level: 1,
      name: /about/i,
    });
    
    expect(heading).toBeInTheDocument();
  });

  it('renders description with app name', () => {
    render(<About />);
    
    const description = screen.getByText(new RegExp(`This is the about page of ${import.meta.env.VITE_APP_NAME}`, 'i'));
    expect(description).toBeInTheDocument();
  });

  it('applies correct styling classes', () => {
    render(<About />);
    
    const container = screen.getByRole('heading', { level: 1 }).parentElement;
    expect(container).toHaveClass('max-w-2xl mx-auto');
  });
});