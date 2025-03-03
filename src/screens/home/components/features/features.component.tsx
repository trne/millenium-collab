import { FC } from 'react';
import { Button } from '@/components/baseUi/button/button.component';
import { Card, CardContent, CardTitle, CardDescription } from '@/components/baseUi/card/card.component';
import { Clock, Car, Shield, Phone, ChevronDown } from 'lucide-react';
import type { FeaturesProps } from './types.ts';

export const Features: FC<FeaturesProps> = () => {
  const features = [
    {
      icon: <Clock className="h-12 w-12 text-primary" />,
      title: "Fast response times",
      description: "We aim to be with you within 60 minutes, and we're usually faster."
    },
    {
      icon: <Car className="h-12 w-12 text-primary" />,
      title: "We come to you",
      description: "Roadside repairs at your home, work or by the roadside."
    },
    {
      icon: <Shield className="h-12 w-12 text-primary" />,
      title: "Cover for any car",
      description: "Personal cover means you're covered in any car."
    },
    {
      icon: <Phone className="h-12 w-12 text-primary" />,
      title: "24/7 support",
      description: "Our UK-based team is here for you day and night."
    }
  ];

  return (
    <section className="py-16 bg-surface">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-text-primary">Why choose Green Flag?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-background border-none shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-surface rounded-full">{feature.icon}</div>
                <CardTitle className="text-lg font-bold mb-2 text-text-primary">{feature.title}</CardTitle>
                <CardDescription className="text-text-secondary">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button
            variant="outline"
            className="transition-all duration-300"
          >
            Learn more about our services
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};
