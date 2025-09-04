import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  CheckCircle, 
  Thermometer, 
  Star, 
  TrendingUp
} from 'lucide-react';

export const WhyChooseSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="why-choose" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">{t('whyChoose.title')}</h2>
          <p className="text-xl text-foreground-muted">{t('whyChoose.subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: CheckCircle,
              title: t('whyChoose.quality'),
              description: t('whyChoose.qualityDesc'),
              color: 'text-green-500',
            },
            {
              icon: Thermometer,
              title: t('whyChoose.technology'),
              description: t('whyChoose.technologyDesc'),
              color: 'text-blue-500',
            },
            {
              icon: Star,
              title: t('whyChoose.service'),
              description: t('whyChoose.serviceDesc'),
              color: 'text-purple-500',
            },
            {
              icon: TrendingUp,
              title: t('whyChoose.price'),
              description: t('whyChoose.priceDesc'),
              color: 'text-orange-500',
            },
          ].map((item, index) => (
            <div key={index} className="text-center scroll-animate">
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-surface-elevated rounded-full shadow-lg">
                  <item.icon className={`h-8 w-8 ${item.color}`} />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-foreground-muted leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};