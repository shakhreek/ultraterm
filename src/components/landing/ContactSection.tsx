import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

export const ContactSection: React.FC = () => {
  const { t } = useLanguage();

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for your inquiry. We'll get back to you soon!",
    });
  };

  return (
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
  );
};