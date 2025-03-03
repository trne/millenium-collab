import { FC } from 'react';
import { Button } from '@/components/baseUi/button/button.component';
import { Input } from '@/components/baseUi/input/input.component';
import { Label } from '@/components/baseUi/label/label.component';
import type { QuickQuoteProps } from './types.ts';

export const QuickQuote: FC<QuickQuoteProps> = () => {
  return (
    <section className="bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-surface rounded-xl p-6 md:p-10 shadow-sm border border-gray-100">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-text-primary">Get a quick quote</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6">
            <div className="space-y-2">
              <Label htmlFor="registration" className="text-sm font-medium text-text-primary">Vehicle registration</Label>
              <Input id="registration" placeholder="Enter registration" className="bg-white border-gray-300 h-12 focus:ring-primary focus:border-primary" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="postcode" className="text-sm font-medium text-text-primary">Postcode</Label>
              <Input id="postcode" placeholder="Enter postcode" className="bg-white border-gray-300 h-12 focus:ring-primary focus:border-primary" />
            </div>
            <div className="flex items-end">
              <Button
                variant="primary"
                size="lg"
                className="w-full shadow-sm transition-all duration-300"
              >
                Get quote
              </Button>
            </div>
          </div>
          <p className="text-xs text-center text-text-secondary mt-4">
            By continuing, you agree to our terms and conditions and privacy policy.
          </p>
        </div>
      </div>
    </section>
  );
};
