import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  const scrollToSelector = (e: React.MouseEvent, selector: string) => {
    e.preventDefault();
    const el = document.querySelector(selector);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-surface-elevated border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t('footer.company')}</h3>
            <ul className="space-y-2 text-foreground-muted">
              <li><a href="#about" onClick={(e) => scrollToSelector(e, '#about')} className="hover:text-foreground transition-colors">{t('footer.about')}</a></li>
              <li><a href="#about" onClick={(e) => scrollToSelector(e, '#about')} className="hover:text-foreground transition-colors">{t('footer.careers')}</a></li>
              <li><a href="#about" onClick={(e) => scrollToSelector(e, '#about')} className="hover:text-foreground transition-colors">{t('footer.news')}</a></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t('footer.products')}</h3>
            <ul className="space-y-2 text-foreground-muted">
              <li><a href="#products" onClick={(e) => scrollToSelector(e, '#products')} className="hover:text-foreground transition-colors">{t('footer.elite')}</a></li>
              <li><a href="#products" onClick={(e) => scrollToSelector(e, '#products')} className="hover:text-foreground transition-colors">{t('footer.pro')}</a></li>
              <li><a href="#products" onClick={(e) => scrollToSelector(e, '#products')} className="hover:text-foreground transition-colors">{t('footer.eco')}</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t('footer.support')}</h3>
            <ul className="space-y-2 text-foreground-muted">
              <li><a href="#contact" onClick={(e) => scrollToSelector(e, '#contact')} className="hover:text-foreground transition-colors">{t('footer.help')}</a></li>
              <li><a href="#contact" onClick={(e) => scrollToSelector(e, '#contact')} className="hover:text-foreground transition-colors">{t('footer.installation')}</a></li>
              <li><a href="#contact" onClick={(e) => scrollToSelector(e, '#contact')} className="hover:text-foreground transition-colors">{t('footer.warranty')}</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t('footer.legal')}</h3>
            <ul className="space-y-2 text-foreground-muted">
              <li><a href="#" className="hover:text-foreground transition-colors">{t('footer.privacy')}</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">{t('footer.terms')}</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <img 
              src="/lovable-uploads/logo.png" 
              alt="ULTRATERM Logo"
              className="h-20 w-auto"
            />
            <div className="flex items-center space-x-3">
              <a href="https://instagram.com/ultraterm.uz" target="_blank" rel="noopener noreferrer" className="text-foreground-muted hover:text-foreground transition-colors">
                {/* Instagram SVG */}
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line>
                </svg>
              </a>
              <a href="https://t.me/ultraterm_uz" target="_blank" rel="noopener noreferrer" className="text-foreground-muted hover:text-foreground transition-colors">
                {/* Telegram SVG */}
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 240 240" className="h-5 w-5" fill="currentColor">
                  <path d="M120 0C53.7 0 0 53.7 0 120s53.7 120 120 120 120-53.7 120-120S186.3 0 120 0zm54.6 80.8l-18.8 89c-1.5 7.2-5.4 9-11 5.6l-30.4-22-14.6 14.1c-1.6 1.6-2.9 2.9-5.9 2.9l2.1-30.1L162 83.9c3.6-2.8-.8-4.4-5.5-1.6L79.2 118.8 45.6 110.7c-7.8-2.2-7.9-7.8 1.6-11.5L174.6 62c6.6-2.5 12.4 1.9 10 18.8z"/>
                </svg>
              </a>
            </div>
          </div>
          <p className="text-foreground-muted">{t('footer.copyright').replace('2024', String(new Date().getFullYear()))}</p>
        </div>
      </div>
    </footer>
  );
};