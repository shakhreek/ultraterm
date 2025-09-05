import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Link } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const CopaSection: React.FC = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();

  // COPA radiator data (simplified for landing page)
  const radiators = [
    {
      key: "standard_plane_surface",
      name: {
        uz: "Standart tekis sirtli radiatorlar",
        en: "Standard Plane Surface Radiators",
        ru: "Стандартные радиаторы с плоской поверхностью"
      },
      type: "Horizontal Decorative Panel Radiator",
      purpose: {
        uz: "Maktab, kasalxona va bog‘cha kabi joylarda xavfsiz foydalanish uchun mos",
        en: "Suitable for use in schools, hospitals and kindergartens due to safe front surface",
        ru: "Подходит для школ, больниц и детских садов благодаря безопасной передней поверхности"
      }
    },
    {
      key: "vertical_standard_plane_surface",
      name: {
        uz: "Vertikal standart tekis sirtli radiatorlar",
        en: "Vertical Standard Plane Surface Radiators",
        ru: "Вертикальные радиаторы с плоской поверхностью"
      },
      type: "Vertical Decorative Panel Radiator",
      purpose: {
        uz: "Kuchli issiqlik quvvatini talab qiladigan tor joylar uchun ideal",
        en: "Ideal for narrow areas requiring high thermal power",
        ru: "Идеально для узких мест, требующих высокой тепловой мощности"
      }
    },
    {
      key: "innova",
      name: {
        uz: "Innova",
        en: "Innova",
        ru: "Innova"
      },
      type: "Panel Radiator",
      purpose: {
        uz: "Samimiy va estetik ko‘rinish bilan yuqori isitish samaradorligi",
        en: "Elegant look with high heating efficiency",
        ru: "Элегантный внешний вид с высокой тепловой эффективностью"
      }
    },
    {
      key: "mysia",
      name: {
        uz: "Mysia",
        en: "Mysia",
        ru: "Mysia"
      },
      type: "Towel Radiator",
      purpose: {
        uz: "Batareyali ushlab quritilgan sochiqlar bilan banyonlar uchun ideal",
        en: "Ideal for bathrooms with decorative towel drying",
        ru: "Идеально для ванных комнат с декоративной сушкой полотенец"
      }
    }
  ];

  return (
    <section id="copa" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary text-primary-foreground">
            COPA
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">
              {language === 'uz' 
                ? "COPA Radiatorlari" 
                : language === 'ru' 
                ? "Радиаторы COPA" 
                : "COPA Radiators"}
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-foreground-muted mb-8 max-w-4xl mx-auto leading-relaxed">
            {language === 'uz' 
              ? "COPA radiatorlari - zamonaviy dizayn va yuqori samaradorlik uchun premium sifatli isitish yechimlari" 
              : language === 'ru' 
              ? "Радиаторы COPA - премиальные решения для отопления с современным дизайном и высокой эффективностью" 
              : "COPA radiators - premium heating solutions with modern design and high efficiency"}
          </p>
          <button 
            onClick={() => navigate('/copa')}
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          >
            {language === 'uz' 
              ? "Batafsil ma'lumot" 
              : language === 'ru' 
              ? "Подробнее" 
              : "View Details"} <Link className="ml-2 h-4 w-4" />
          </button>
        </div>

        {/* Radiator Types */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {radiators.map((radiator, index) => (
            <Card key={index} className="overflow-hidden hover-scale border-none shadow-lg bg-surface-elevated">
              <div className="relative">
                <img 
                  src={`/images/copa/${radiator.key}.png`} 
                  alt={radiator.name[language]}
                  className="w-full h-48 object-contain p-4"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{radiator.name[language]}</CardTitle>
                <CardDescription>
                  {radiator.type}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="pt-4 border-t border-border">
                  <p className="text-foreground-muted italic">
                    <strong>
                      {language === 'uz' ? "Maqsad:" : language === 'ru' ? "Назначение:" : "Purpose:"}
                    </strong> {radiator.purpose[language]}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};