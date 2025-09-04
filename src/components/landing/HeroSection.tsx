import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import heroImage from '@/assets/hero-radiator.jpg';

export const HeroSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 animated-bg opacity-30" />
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-gradient">{t('hero.title')}</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground-muted mb-8 max-w-4xl mx-auto leading-relaxed">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              {t('hero.cta')} <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="glass" size="lg" className="text-lg px-8 py-4">
              {t('hero.learnMore')}
            </Button>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-brand-red/20 rounded-full animate-float" />
      <div className="absolute top-40 right-20 w-24 h-24 bg-brand-orange/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-brand-yellow/20 rounded-full animate-float" style={{ animationDelay: '4s' }} />
    </section>
  );
};