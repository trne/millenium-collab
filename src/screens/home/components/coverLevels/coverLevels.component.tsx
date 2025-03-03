import { FC } from 'react';
import { Button } from '@/components/baseUi/button/button.component';
import { Card, CardContent } from '@/components/baseUi/card/card.component';
import { Check } from 'lucide-react';
import type { CoverLevelsProps } from './types.ts';

export const CoverLevels: FC<CoverLevelsProps> = () => {
  const plans = [
    {
      title: "Rescue",
      price: "£7",
      features: [
        "24/7 UK breakdown cover",
        "Roadside repairs",
        "Local vehicle recovery",
        "Misfuelling cover"
      ],
      highlight: false
    },
    {
      title: "Rescue Plus",
      price: "£9",
      features: [
        "All Rescue benefits",
        "Nationwide recovery",
        "Alternative transport",
        "Overnight accommodation"
      ],
      highlight: true,
      badge: "Most popular"
    },
    {
      title: "Recovery",
      price: "£12",
      features: [
        "All Rescue Plus benefits",
        "Home breakdown cover",
        "European cover",
        "Parts and labor included"
      ],
      highlight: false
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-text-primary">Our cover levels</h2>
        <p className="text-center text-text-secondary mb-12 max-w-2xl mx-auto">
          Choose the right level of cover for your needs and budget. All our policies include 24/7 breakdown assistance.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`border relative ${
                plan.highlight 
                  ? 'border-primary ring-2 ring-primary/10 shadow-md' 
                  : 'border-gray-200 shadow-sm hover:shadow-md'
              } h-full flex flex-col transition-all duration-300`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full">
                  {plan.badge}
                </div>
              )}
              <CardContent className="p-6 md:p-8 flex-1 flex flex-col">
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-2 text-text-primary">{plan.title}</h3>
                  <div className="flex items-baseline">
                    <span className="text-3xl md:text-4xl font-bold text-primary">{plan.price}</span>
                    <span className="text-text-secondary ml-1">per month</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 shrink-0" />
                      <span className="text-text-secondary">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant={plan.highlight ? "primary" : "outline"}
                  className="w-full transition-all duration-300"
                >
                  Choose {plan.title}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-10 text-center text-sm text-text-secondary">
          <p>All prices include VAT. Terms and conditions apply.</p>
        </div>
      </div>
    </section>
  );
};
