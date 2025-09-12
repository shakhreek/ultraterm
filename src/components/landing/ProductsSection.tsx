import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import eliteImage from '@/assets/radiator-elite.jpg';
import proImage from '@/assets/radiator-pro.jpg';
import ecoImage from '@/assets/radiator-eco.png';

export const ProductsSection: React.FC = () => {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="products" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">{t('products.title')}</h2>
          <p className="text-xl text-foreground-muted">{t('products.subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: t('products.elite.name'),
              description: t('products.elite.description'),
              image: eliteImage,
              power: '2000W',
              warranty: '15 ' + t('products.elite.warranty'),
              price: '$599',
              badge: 'Premium',
            },
            {
              name: t('products.pro.name'),
              description: t('products.pro.description'),
              image: proImage,
              power: '2500W',
              warranty: '10 ' + t('products.elite.warranty'),
              price: '$799',
              badge: 'Professional',
            },
            {
              name: t('products.eco.name'),
              description: t('products.eco.description'),
              image: ecoImage,
              fit: 'contain',
              power: '1800W',
              warranty: '12 ' + t('products.elite.warranty'),
              price: '$449',
              badge: 'Eco-Friendly',
            },
          ].map((product, index) => (
            <Card key={index} className="overflow-hidden hover-scale scroll-animate border-none shadow-lg bg-surface-elevated">
              <div className={`relative ${product.badge === 'Eco-Friendly' ? 'bg-white' : ''}`}>
                <img 
                  src={product.image} 
                  alt={product.name}
                  className={`w-full h-64 ${product.fit === 'contain' ? 'object-contain p-4' : 'object-cover'}`}
                />
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                  {product.badge}
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{product.name}</CardTitle>
                <CardDescription className="text-foreground-muted">
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-foreground-muted">{t('products.elite.power')}:</span>
                  <span className="font-semibold">{product.power}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-foreground-muted">{t('products.elite.warranty')}:</span>
                  <span className="font-semibold">{product.warranty}</span>
                </div>
                <div className="flex justify-end items-center pt-4 border-t border-border">
                  <Button variant="premium" onClick={() => scrollToContact()}>
                    {t('products.viewDetails')}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};