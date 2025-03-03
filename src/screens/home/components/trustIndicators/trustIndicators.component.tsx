import { FC } from 'react';
import { Award, Clock, ThumbsUp } from 'lucide-react';
import type { TrustIndicatorsProps } from './types.ts';

export const TrustIndicators: FC<TrustIndicatorsProps> = () => {
  const indicators = [
    {
      icon: <Award className="h-12 w-12 text-primary mb-4" />,
      value: "99.7%",
      label: "Customer satisfaction rate"
    },
    {
      icon: <Clock className="h-12 w-12 text-primary mb-4" />,
      value: "42 min",
      label: "Average response time"
    },
    {
      icon: <ThumbsUp className="h-12 w-12 text-primary mb-4" />,
      value: "4.8/5",
      label: "Rating on Trustpilot"
    }
  ];

  return (
    <section className="py-16 bg-surface">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-text-primary">Trusted by drivers nationwide</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {indicators.map((indicator, index) => (
              <div key={index} className="flex flex-col items-center">
                {indicator.icon}
                <h3 className="text-2xl font-bold text-text-primary mb-2">{indicator.value}</h3>
                <p className="text-text-secondary">{indicator.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
