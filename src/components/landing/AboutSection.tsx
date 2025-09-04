import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { 
  Award, 
  Settings, 
  Users, 
  Globe
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">{t('about.title')}</h2>
          <p className="text-xl text-foreground-muted mb-8">{t('about.subtitle')}</p>
          <p className="text-lg text-foreground-muted max-w-4xl mx-auto leading-relaxed">
            {t('about.description')}
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 scroll-animate">
          {[
            { icon: Award, number: '15+', label: t('about.experience') },
            { icon: Settings, number: '50+', label: t('about.products') },
            { icon: Users, number: '10K+', label: t('about.customers') },
            { icon: Globe, number: '25+', label: t('about.countries') },
          ].map((stat, index) => (
            <Card key={index} className="text-center p-6 hover-scale border-none shadow-lg bg-surface-elevated">
              <stat.icon className="h-12 w-12 text-primary mx-auto mb-4" />
              <div className="text-3xl font-bold text-gradient mb-2">{stat.number}</div>
              <div className="text-foreground-muted font-medium">{stat.label}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};