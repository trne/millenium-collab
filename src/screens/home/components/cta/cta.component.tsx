import { FC } from 'react';
import { Button } from '@/components/baseUi/button/button.component';
import type { CtaProps } from './types.ts';

export const Cta: FC<CtaProps> = () => {
  return (
    <section className="bg-darkgreen text-white py-16 md:py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to get covered?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto text-white/90">
          Join thousands of drivers who trust us for reliable breakdown assistance.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="primary"
            size="lg"
            className="font-medium shadow-md transition-all duration-300"
          >
            Get a quote now
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white/20 hover:text-white transition-all duration-300"
          >
            View all cover options
          </Button>
        </div>
      </div>
    </section>
  );
};
