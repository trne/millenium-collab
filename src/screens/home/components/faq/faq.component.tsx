import { FC } from 'react';
import { Button } from '@/components/baseUi/button/button.component';
import type { FaqProps } from './types.ts';

export const Faq: FC<FaqProps> = () => {
  const faqs = [
    {
      question: "How quickly can you get to me if I break down?",
      answer: "We aim to reach you within 60 minutes of your call, and our average response time is 42 minutes. In emergency situations on motorways, we prioritize your safety and try to reach you even faster."
    },
    {
      question: "What happens if you can't fix my car at the roadside?",
      answer: "If we can't fix your car at the roadside, we'll tow you to the nearest garage. If you have our Rescue Plus or Recovery cover, we can take you to any destination in the UK."
    },
    {
      question: "Is there a limit to how many times I can call for help?",
      answer: "No, you can call us as many times as you need. However, if you're experiencing recurring issues with your vehicle, we may recommend getting it fully checked by a mechanic."
    }
  ];

  return (
    <section className="py-16 bg-surface">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-text-primary">Frequently asked questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-background rounded-lg shadow-sm p-6 border border-gray-100">
                <h3 className="text-lg font-bold mb-2 text-text-primary">{faq.question}</h3>
                <p className="text-text-secondary">{faq.answer}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button
              variant="outline"
              className="transition-all duration-300"
            >
              View all FAQs
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
