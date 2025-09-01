import React, { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Navigation } from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  Flame, 
  Shield, 
  Zap, 
  Award, 
  TrendingUp,
  Star,
  Clock,
  Users,
  Globe,
  CheckCircle,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Thermometer,
  Settings,
  Leaf
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';

// Import generated images
import heroImage from '@/assets/hero-radiator.jpg';
import eliteImage from '@/assets/radiator-elite.jpg';
import proImage from '@/assets/radiator-pro.jpg';
import ecoImage from '@/assets/radiator-eco.jpg';

export const Landing: React.FC = () => {
  const { t } = useLanguage();

  useEffect(() => {
    // Intersection Observer for animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for your inquiry. We'll get back to you soon!",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 animated-bg opacity-30" />
        <div 
          className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${heroImage})`, backgroundSize: '60%' }}
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

      {/* About Section */}
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

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">{t('features.title')}</h2>
            <p className="text-xl text-foreground-muted">{t('features.subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: t('features.quality.title'),
                description: t('features.quality.description'),
                color: 'text-brand-red',
              },
              {
                icon: Clock,
                title: t('features.durability.title'),
                description: t('features.durability.description'),
                color: 'text-brand-orange',
              },
              {
                icon: Award,
                title: t('features.design.title'),
                description: t('features.design.description'),
                color: 'text-brand-yellow',
              },
              {
                icon: Zap,
                title: t('features.efficiency.title'),
                description: t('features.efficiency.description'),
                color: 'text-primary',
              },
            ].map((feature, index) => (
              <Card key={index} className="p-6 hover-scale scroll-animate border-none shadow-lg bg-surface-elevated">
                <CardHeader className="pb-4">
                  <feature.icon className={`h-12 w-12 ${feature.color} mb-4`} />
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground-muted leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
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
                power: '1800W',
                warranty: '12 ' + t('products.elite.warranty'),
                price: '$449',
                badge: 'Eco-Friendly',
              },
            ].map((product, index) => (
              <Card key={index} className="overflow-hidden hover-scale scroll-animate border-none shadow-lg bg-surface-elevated">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover"
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
                  <div className="flex justify-between items-center pt-4 border-t border-border">
                    <span className="text-2xl font-bold text-gradient">{product.price}</span>
                    <Button variant="premium">
                      {t('products.viewDetails')}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
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

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">{t('testimonials.title')}</h2>
            <p className="text-xl text-foreground-muted">{t('testimonials.subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: t('testimonials.customer1.name'),
                role: t('testimonials.customer1.role'),
                text: t('testimonials.customer1.text'),
                rating: 5,
              },
              {
                name: t('testimonials.customer2.name'),
                role: t('testimonials.customer2.role'),
                text: t('testimonials.customer2.text'),
                rating: 5,
              },
              {
                name: t('testimonials.customer3.name'),
                role: t('testimonials.customer3.role'),
                text: t('testimonials.customer3.text'),
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="p-6 scroll-animate border-none shadow-lg bg-surface-elevated">
                <CardContent className="space-y-4">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-foreground-muted italic leading-relaxed">"{testimonial.text}"</p>
                  <div className="pt-4 border-t border-border">
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-foreground-muted">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">{t('contact.title')}</h2>
            <p className="text-xl text-foreground-muted">{t('contact.subtitle')}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8 scroll-animate border-none shadow-lg bg-surface-elevated">
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div>
                  <Input
                    placeholder={t('contact.name')}
                    className="h-12"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder={t('contact.email')}
                    className="h-12"
                    required
                  />
                </div>
                <div>
                  <Input
                    placeholder={t('contact.phone')}
                    className="h-12"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder={t('contact.message')}
                    rows={5}
                    required
                  />
                </div>
                <Button type="submit" variant="hero" size="lg" className="w-full">
                  {t('contact.send')} <Mail className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8 scroll-animate">
              <Card className="p-6 border-none shadow-lg bg-surface-elevated">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3">
                    <MapPin className="h-6 w-6 text-primary" />
                    {t('contact.address')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground-muted">
                    123 Industrial Avenue<br />
                    Business District, City 12345<br />
                    Uzbekistan
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 border-none shadow-lg bg-surface-elevated">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3">
                    <Phone className="h-6 w-6 text-primary" />
                    {t('contact.phone.label')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground-muted">+998 90 123 45 67</p>
                </CardContent>
              </Card>

              <Card className="p-6 border-none shadow-lg bg-surface-elevated">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3">
                    <Mail className="h-6 w-6 text-primary" />
                    {t('contact.email.label')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground-muted">info@ultraterm.com</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
                src="/lovable-uploads/02b7af8d-b517-4adb-866e-3ab6475e116f.png" 
                alt="ULTRATERM Logo"
                className="h-12 w-auto"
              />
            </div>
            <p className="text-foreground-muted">{t('footer.copyright')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};