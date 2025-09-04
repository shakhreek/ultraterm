import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="testimonials" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">{t('testimonials.title')}</h2>
          <p className="text-xl text-foreground-muted">{t('testimonials.subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: t('testimonials.customer1.name'),
              role: t('testimonials.customer1.role'),
              text: t('testimonials.customer1.text'),
              rating: 5,
            },
            {
              name: t('testimonials.customer2.name'),
              role: t('testimonials.customer2.role'),
              text: t('testimonials.customer2.text'),
              rating: 5,
            },
            {
              name: t('testimonials.customer3.name'),
              role: t('testimonials.customer3.role'),
              text: t('testimonials.customer3.text'),
              rating: 5,
            },
          ].map((testimonial, index) => (
            <Card key={index} className="p-6 scroll-animate border-none shadow-lg bg-surface-elevated">
              <CardContent className="space-y-4">
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-foreground-muted italic leading-relaxed">"{testimonial.text}"</p>
                <div className="pt-4 border-t border-border">
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-foreground-muted">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};