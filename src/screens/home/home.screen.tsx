import { useNavigate } from 'react-router-dom';
import { Hero } from './components/hero/hero.component.tsx';
import { QuickQuote } from './components/quickQuote/quickQuote.component.tsx';
import { Features } from './components/features/features.component.tsx';
import { CoverLevels } from './components/coverLevels/coverLevels.component.tsx';
import { TrustIndicators } from './components/trustIndicators/trustIndicators.component.tsx';
import { Cta } from './components/cta/cta.component.tsx';
import { Testimonials } from './components/testimonials/testimonials.component.tsx';
import { Faq } from './components/faq/faq.component.tsx';

export const HomeScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col w-full">
      <Hero />
      <QuickQuote />
      <Features />
      <CoverLevels />
      <TrustIndicators />
      <Cta />
      <Testimonials />
      <Faq />
    </div>
  );
};
