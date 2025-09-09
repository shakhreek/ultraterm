import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import utermLogo from '@/assets/uterm.png';
import uterm1 from '@/assets/uterm1.png';
import uterm2 from '@/assets/uterm2.png';

export const UtermSection: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section id="uterm" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-animate">
          <div className="flex justify-center mb-4">
            <img src={utermLogo} alt="UTERM Logo" className="h-14 object-contain" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">{t('uterm.title')}</h2>
          <p className="text-xl text-foreground-muted mb-8 max-w-3xl mx-auto">{t('uterm.description')}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {[{img: uterm1, name: t('uterm.panel.name'), desc: t('uterm.panel.description'), spec: t('uterm.panel.spec')}, {img: uterm2, name: t('uterm.panel.name'), desc: t('uterm.panel.description'), spec: t('uterm.panel.spec')}].map((p, i) => (
            <div key={i} className="border-none shadow-lg bg-surface-elevated rounded-lg overflow-hidden text-center h-full flex flex-col">
              {/* limit image height so cards aren't too tall */}
              <img src={p.img} alt={p.name} className="w-full h-80 object-cover mb-4" />
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-semibold">{p.name}</h3>
                <p className="text-foreground-muted my-3">{p.desc}</p>
                <p className="text-foreground-muted mb-4 font-medium">{p.spec}</p>
                <div className="mt-auto">
                  <a href="https://www.uterm.ua" target="_blank" rel="noopener noreferrer">
                    <Button variant="hero">{t('uterm.cta')}</Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UtermSection;
