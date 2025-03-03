import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import BlogApp from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BlogApp />
  </StrictMode>
);
