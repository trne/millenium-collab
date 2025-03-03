import { FC } from 'react';
import { Button } from '@/components/baseUi/button/button.component';
import { ArrowRight, Star } from 'lucide-react';
import type { HeroProps } from './types.ts';

export const Hero: FC<HeroProps> = () => {
  return (
    <section className="relative bg-darkgreen text-white w-full">
      <div className="w-full py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="max-w-xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Breakdown cover that keeps you moving
              </h1>
              <p className="text-lg mb-8 text-white/90">
                From just £7.00 a month. Join today and get 3 months free.
              </p>
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    variant="primary"
                    rounded="none"
                    size="lg"
                    className="font-medium text-base shadow-md transition-all duration-300"
                  >
                    Get breakdown cover
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button
                    variant="secondary"
                    rounded="none"
                    size="lg"
                    className="bg-black/30 hover:bg-black/40 border-none transition-all duration-300"
                  >
                    Find out more
                  </Button>
                </div>
                <div className="flex items-center text-sm">
                  <Star className="h-5 w-5 text-secondary mr-2 shrink-0" fill="currentColor" />
                  <span>Rated 'Excellent' by our customers on Trustpilot</span>
                </div>
              </div>
            </div>
            <div className="hidden md:block relative">
              <div className="absolute inset-0 bg-black/10 rounded-lg"></div>
              <img
                src="https://images.unsplash.com/photo-1599012307530-1aed1810f2c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJvYWRzaWRlJTIwYXNzaXN0YW5jZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
                alt="Green Flag Roadside Assistance"
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Straight bottom edge instead of wave */}
      <div className="w-full h-16 bg-white"></div>
    </section>
  );
};
