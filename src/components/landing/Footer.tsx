import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-surface-elevated border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t('footer.company')}</h3>
            <ul className="space-y-2 text-foreground-muted">
              <li><a href="#" className="hover:text-foreground transition-colors">{t('footer.about')}</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">{t('footer.careers')}</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">{t('footer.news')}</a></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t('footer.products')}</h3>
            <ul className="space-y-2 text-foreground-muted">
              <li><a href="#" className="hover:text-foreground transition-colors">{t('footer.elite')}</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">{t('footer.pro')}</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">{t('footer.eco')}</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t('footer.support')}</h3>
            <ul className="space-y-2 text-foreground-muted">
              <li><a href="#" className="hover:text-foreground transition-colors">{t('footer.help')}</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">{t('footer.installation')}</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">{t('footer.warranty')}</a></li>
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
          <div className="flex items-center justify-center space-x-2 mb-4">
            <img 
              src="/lovable-uploads/logo.png" 
              alt="ULTRATERM Logo"
              className="h-20 w-auto"
            />
          </div>
          <p className="text-foreground-muted">{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};