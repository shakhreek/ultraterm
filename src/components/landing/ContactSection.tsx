import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

export const ContactSection: React.FC = () => {
  const { t } = useLanguage();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;

    setSubmitting(true);
    try {
      const formBody = new URLSearchParams({
        Name: name || '',
        Phone: phone || '',
        Message: message || '',
        Date: new Date().toLocaleString(),
      }).toString();

      const res = await fetch('https://script.google.com/macros/s/AKfycby4AEPBzsutN49o0Pc1uYYOa0dbdsDoFGIzz6QshuaanaA8DbBaxIJozFi587J72mhB/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
        body: formBody,
      });

      const json = await res.json().catch(() => ({}));

      if (!res.ok) {
        console.error('Submission error from server:', json);
        throw new Error(t('contact.submitError'));
      }

      // Always show localized success message instead of server text
      toast({
        title: t('contact.submitted'),
        description: t('contact.successMessage'),
      });

      // clear form
      setName('');
      setPhone('');
      setMessage('');
    } catch (error: any) {
      console.error('Contact submit failed:', error);
      toast({
        title: t('contact.submitError'),
        description: t('contact.submitError'),
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">{t('contact.title')}</h2>
          <p className="text-xl text-foreground-muted">Radiatorlarimizni istalgan miqdoringizda yetkazib bera olamiz, Hoziroq biz bilan bog'laning va yanada ko'proq ma'lumot oling</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Contact Form */}
          <Card className="p-8 scroll-animate border-none shadow-lg bg-surface-elevated h-full">
            <form onSubmit={handleContactSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder={t('contact.name')}
                  className="h-12"
                  required
                  value={name}
                  onChange={(e) => setName((e.target as HTMLInputElement).value)}
                />
              </div>
              {/* Email input removed as requested */}
              <div>
                <Input
                  placeholder={t('contact.phone')}
                  className="h-12"
                  value={phone}
                  onChange={(e) => setPhone((e.target as HTMLInputElement).value)}
                />
              </div>
              <div>
                <Textarea
                  placeholder={t('contact.message')}
                  rows={5}
                  required
                  value={message}
                  onChange={(e) => setMessage((e.target as HTMLTextAreaElement).value)}
                />
              </div>
              <Button type="submit" variant="hero" size="lg" className="w-full" disabled={submitting}>
                {submitting ? t('contact.sending') : t('contact.send')} <Mail className="ml-2 h-5 w-5" />
              </Button>
            </form>
            {/* Map shown below the form (counts toward form height) */}
            <div className="mt-6">
              <iframe
                title="ULTRATERM location (Yandex)"
                width="100%"
                height="300"
                frameBorder="0"
                src="https://yandex.uz/map-widget/v1/-/CLUri4ke"
                allowFullScreen
                className="rounded-md"
              />
            </div>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8 scroll-animate h-full">
            <Card className="p-6 border-none shadow-lg bg-surface-elevated">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3">
                  <MapPin className="h-6 w-6 text-primary" />
                  {t('contact.address')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground-muted">
                  Toshkent sh., Olmazor tumani, Ibrohim ota mahallasi
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
                <div className="space-y-2">
                  <a href="tel:+998909997766" className="text-foreground-muted hover:text-foreground transition-colors block">
                    +998 90 999 77 66
                  </a>
                  <a href="tel:+998935056060" className="text-foreground-muted hover:text-foreground transition-colors block">
                    +998 93 505 60 60
                  </a>
                  <a href="tel:+998770617575" className="text-foreground-muted hover:text-foreground transition-colors block">
                    +998 77 061 75 75
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 border-none shadow-lg bg-surface-elevated">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3">
                  {/* Telegram SVG icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" className="h-6 w-6 text-primary" fill="currentColor">
                    <path d="M120 0C53.7 0 0 53.7 0 120s53.7 120 120 120 120-53.7 120-120S186.3 0 120 0zm54.6 80.8l-18.8 89c-1.5 7.2-5.4 9-11 5.6l-30.4-22-14.6 14.1c-1.6 1.6-2.9 2.9-5.9 2.9l2.1-30.1L162 83.9c3.6-2.8-.8-4.4-5.5-1.6L79.2 118.8 45.6 110.7c-7.8-2.2-7.9-7.8 1.6-11.5L174.6 62c6.6-2.5 12.4 1.9 10 18.8z" />
                  </svg>
                  Telegram
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a href="https://t.me/ultraterm_uz" target="_blank" rel="noopener noreferrer" className="text-foreground-muted hover:text-foreground transition-colors">
                  t.me/ultraterm_uz
                </a>
              </CardContent>
            </Card>

            <Card className="p-6 border-none shadow-lg bg-surface-elevated">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3">
                  {/* Instagram SVG icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line>
                  </svg>
                  Instagram
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a href="https://instagram.com/ultraterm.uz" target="_blank" rel="noopener noreferrer" className="text-foreground-muted hover:text-foreground transition-colors">
                  @ultraterm.uz
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
