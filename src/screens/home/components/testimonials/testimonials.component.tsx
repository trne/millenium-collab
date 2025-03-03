import { FC } from 'react';
import { Button } from '@/components/baseUi/button/button.component';
import { Card } from '@/components/baseUi/card/card.component';
import { Star } from 'lucide-react';
import type { TestimonialsProps } from './types.ts';

export const Testimonials: FC<TestimonialsProps> = () => {
  const testimonials = [
    {
      quote: "Green Flag got to me in just 35 minutes when I broke down on the motorway. The technician was friendly and fixed my car on the spot.",
      author: "Sarah T.",
      location: "London",
      rating: 5
    },
    {
      quote: "I've been with Green Flag for years. Their app makes it so easy to call for help, and their customer service team is always helpful.",
      author: "James M.",
      location: "Manchester",
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-text-primary">What our customers say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-surface border-none p-6 md:p-8 hover:shadow-md transition-all duration-300">
                <div className="flex mb-4">
                  {Array(5).fill(0).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < testimonial.rating ? 'text-secondary' : 'text-gray-300'}`}
                      fill={i < testimonial.rating ? 'currentColor' : '#E5E7EB'}
                    />
                  ))}
                </div>
                <p className="italic mb-4 text-text-primary">"{testimonial.quote}"</p>
                <div>
                  <p className="font-medium text-text-primary">- {testimonial.author}</p>
                  <p className="text-sm text-text-secondary">{testimonial.location}</p>
                </div>
              </Card>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button
              variant="outline"
              className="transition-all duration-300"
            >
              Read more reviews
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
