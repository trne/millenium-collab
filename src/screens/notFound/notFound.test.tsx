import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { NotFound } from './notFound.screen';

describe('NotFound Screen', () => {
  const renderNotFound = () => {
    return render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );
  };

  it('renders 404 heading', () => {
    renderNotFound();
    
    const heading = screen.getByRole('heading', {
      name: /404/i,
    });
    
    expect(heading).toBeInTheDocument();
  });

  it('renders page not found message', () => {
    renderNotFound();
    
    const message = screen.getByText(/page not found/i);
    expect(message).toBeInTheDocument();
  });

  it('renders home link', () => {
    renderNotFound();
    
    const homeLink = screen.getByRole('link', { name: /go home/i });
    expect(homeLink).toHaveAttribute('href', '/');
  });

  it('applies correct styling classes', () => {
    renderNotFound();
    
    const container = screen.getByRole('heading', { name: /404/i }).parentElement;
    expect(container).toHaveClass('text-center');
  });
});