import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Shield, 
  Clock, 
  Award, 
  Zap
} from 'lucide-react';

export const FeaturesSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="features" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">{t('features.title')}</h2>
          <p className="text-xl text-foreground-muted">{t('features.subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Shield,
              title: t('features.quality.title'),
              description: t('features.quality.description'),
              color: 'text-brand-red',
            },
            {
              icon: Clock,
              title: t('features.durability.title'),
              description: t('features.durability.description'),
              color: 'text-brand-orange',
            },
            {
              icon: Award,
              title: t('features.design.title'),
              description: t('features.design.description'),
              color: 'text-brand-yellow',
            },
            {
              icon: Zap,
              title: t('features.efficiency.title'),
              description: t('features.efficiency.description'),
              color: 'text-primary',
            },
          ].map((feature, index) => (
            <Card key={index} className="p-6 hover-scale scroll-animate border-none shadow-lg bg-surface-elevated">
              <CardHeader className="pb-4">
                <feature.icon className={`h-12 w-12 ${feature.color} mb-4`} />
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground-muted leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};