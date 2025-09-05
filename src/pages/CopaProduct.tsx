import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Navigation } from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  Zap, 
  Award, 
  Thermometer,
  CheckCircle,
  Leaf,
  Wrench,
  Package
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';

export const CopaProduct: React.FC = () => {
  const { t, language } = useLanguage();
  const [copaData, setCopaData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCopaData = async () => {
      try {
        const response = await fetch('/about-copa.json');
        const data = await response.json();
        setCopaData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching COPA data:', error);
        setLoading(false);
      }
    };

    fetchCopaData();
  }, []);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: t('contact.submitted'),
      description: t('contact.successMessage'),
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-2xl font-bold">Loading...</div>
      </div>
    );
  }

  if (!copaData) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-2xl font-bold">Error loading data</div>
      </div>
    );
  }

  const radiators = copaData.radiators;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-surface">
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-up">
            <Badge className="mb-4 bg-primary text-primary-foreground">
              COPA
            </Badge>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gradient">COPA Radiators</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground-muted mb-8 max-w-4xl mx-auto leading-relaxed">
              {language === 'uz' 
                ? "COPA radiatorlari - zamonaviy dizayn va yuqori samaradorlik uchun premium sifatli isitish yechimlari" 
                : language === 'ru' 
                ? "Радиаторы COPA - премиальные решения для отопления с современным дизайном и высокой эффективностью" 
                : "COPA radiators - premium heating solutions with modern design and high efficiency"}
            </p>
          </div>
        </div>
      </section>

      {/* Radiator Types Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {language === 'uz' 
                ? "Radiator turlari" 
                : language === 'ru' 
                ? "Типы радиаторов" 
                : "Radiator Types"}
            </h2>
            <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
              {language === 'uz' 
                ? "Turli xil foydalanish sharoitlari uchun mo'ljallangan bir nechta radiator turlari" 
                : language === 'ru' 
                ? "Несколько типов радиаторов, предназначенных для различных условий эксплуатации" 
                : "Multiple radiator types designed for different usage conditions"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {radiators.map((radiator: any, index: number) => (
              <Card key={index} className="overflow-hidden hover-scale border-none shadow-lg bg-surface-elevated">
                <div className="relative">
                  <img 
                    src={`/images/copa/${radiator.key}.png`} 
                    alt={radiator.name[language]}
                    className="w-full h-64 object-contain p-4"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{radiator.name[language]}</CardTitle>
                  <CardDescription>
                    {radiator.type}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {Object.entries(radiator.features).map(([key, feature]: [string, any]) => (
                      <div key={key} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-foreground-muted">{feature[language]}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-border">
                    <p className="text-foreground-muted italic">
                      <strong>{language === 'uz' ? "Maqsad:" : language === 'ru' ? "Назначение:" : "Purpose:"}</strong> {radiator.purpose[language]}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('contact.title')}
            </h2>
            <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
              {language === 'uz' 
                ? "COPA radiatorlari haqida ko'proq ma'lumot oling yoki buyurtma berish uchun bog'laning" 
                : language === 'ru' 
                ? "Свяжитесь с нами для получения дополнительной информации о радиаторах COPA или для размещения заказа" 
                : "Get in touch for more information about COPA radiators or to place an order"}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="p-8 border-none shadow-lg bg-surface-elevated">
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div>
                  <input
                    placeholder={t('contact.name')}
                    className="w-full h-12 px-4 rounded-md border border-input bg-background text-foreground"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder={t('contact.email')}
                    className="w-full h-12 px-4 rounded-md border border-input bg-background text-foreground"
                    required
                  />
                </div>
                <div>
                  <input
                    placeholder={t('contact.phone')}
                    className="w-full h-12 px-4 rounded-md border border-input bg-background text-foreground"
                  />
                </div>
                <div>
                  <textarea
                    placeholder={t('contact.message')}
                    rows={5}
                    className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground"
                    required
                  />
                </div>
                <button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 rounded-md font-medium transition-colors">
                  {t('contact.send')}
                </button>
              </form>
            </Card>

            <div className="space-y-8">
              <Card className="p-6 border-none shadow-lg bg-surface-elevated">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl">
                    {language === 'uz' 
                      ? "Aloqa ma'lumotlari" 
                      : language === 'ru' 
                      ? "Контактная информация" 
                      : "Contact Information"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground-muted mb-4">
                    {language === 'uz' 
                      ? "Turkiya, Istanbul. Telefon: +90-XXX-XXX-XX-XX. Saytda elektron pochta mavjud." 
                      : language === 'ru' 
                      ? "Турция, Стамбул. Телефон: +90-XXX-XXX-XX-XX. Электронная почта указана на сайте." 
                      : "Turkey, Istanbul. Phone: +90-XXX-XXX-XX-XX. Email available on the site."}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">
                      {language === 'uz' 
                        ? "Telefon" 
                        : language === 'ru' 
                        ? "Телефон" 
                        : "Phone"}
                    </Badge>
                    <Badge variant="outline">
                      {language === 'uz' 
                        ? "Elektron pochta" 
                        : language === 'ru' 
                        ? "Электронная почта" 
                        : "Email"}
                    </Badge>
                    <Badge variant="outline">
                      {language === 'uz' 
                        ? "Manzil" 
                        : language === 'ru' 
                        ? "Адрес" 
                        : "Location"}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CopaProduct;