import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import heroImage from '@/assets/hero-radiator.jpg';
import hero1 from '@/assets/hero1.png';
import hero2 from '@/assets/hero2.png';
import hero3 from '@/assets/hero3.png';
import hero4 from '@/assets/hero4.png';

export const HeroSection: React.FC = () => {
  const { t, language } = useLanguage();

  const scrollTo = (selector: string) => {
    const el = document.querySelector(selector);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-start md:items-center justify-center overflow-hidden pt-24 md:pt-0">
      <div className="absolute inset-0 animated-bg opacity-30" />
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-up grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left: content */}
          <div className="text-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-gradient">{t('hero.title')}</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground-muted mb-8 max-w-3xl leading-relaxed">
              {language === 'uz' ? (
                <>
                  <span className="block mb-3">
                    Ultratеrm kompaniyasi <span className="font-semibold text-gradient">3 yildan beri</span> o'z mijozlariga Ukrainaning Uterm hamda Turkiyaning Copa va Borsan kompaniyalarining sifatli va hamyonbop radiatorlarini yetkazib bеrishmoqda.
                  </span>
                  <span className="block">
                    Ultratеrm kompaniyasi orqali <span className="font-semibold text-gradient">30 dan ortiq o'lcham va rangdagi</span> radiatorlarni xarid qilishingiz mumkin. Radiatorlaringiz uyingiz yoki ofisingiz intеryeri uchun juda ham mos tushadi.
                  </span>
                </>
              ) : language === 'ru' ? (
                <>
                  <span className="block mb-3">
                    Компания Ultratеrm уже <span className="font-semibold text-gradient">3 года</span> поставляет своим клиентам качественные и недорогие радиаторы компаний Uterm (Украина), COPA и BOR-SAN (Турция).
                  </span>
                  <span className="block">
                    Через Ultratеrm вы можете приобрести радиаторы <span className="font-semibold text-gradient">более чем в 30 размерах и отделках</span>, которые идеально подходят для интерьера вашего дома или офиса.
                  </span>
                </>
              ) : (
                <>
                  <span className="block mb-3">
                    Ultratеrm has been delivering high-quality, affordable radiators from Uterm (Ukraine) and COPA & BOR-SAN (Turkey) to our customers for <span className="font-semibold text-gradient">3 years</span>.
                  </span>
                  <span className="block">
                    Through Ultratеrm you can purchase radiators in <span className="font-semibold text-gradient">over 30 sizes and finishes</span>, perfectly suited for your home or office interiors.
                  </span>
                </>
              )}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-start items-center">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4" onClick={() => scrollTo('#products')}>
                {t('hero.cta')} <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="glass" size="lg" className="text-lg px-8 py-4" onClick={() => scrollTo('#contact')}>
                {t('hero.learnMore')}
              </Button>
            </div>
          </div>

          {/* Right: seasons grid collage */}
          <div className="w-full">
            <div className="seasons">
              <figure className="card spring">
                <img src={hero1} alt="hero1" className="w-full h-full object-cover" />
              </figure>
              <figure className="card fall">
                <img src={hero2} alt="hero2" className="w-full h-full object-cover" />
              </figure>
              <figure className="card summer">
                <img src={hero3} alt="hero3" className="w-full h-full object-cover" />
              </figure>
              <figure className="card winter">
                <img src={hero4} alt="hero4" className="w-full h-full object-cover" />
              </figure>
            </div>
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
