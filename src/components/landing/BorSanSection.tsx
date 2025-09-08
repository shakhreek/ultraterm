import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
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
  Package,
  Truck,
  Link
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Import BOR-SAN images
import borSanRadiator from '@/assets/bor-san/bor-san-radiator.png';
import partnerBorsan from '@/assets/partner-borsan.JPG';
import borSanLogo from '@/assets/bor-san.png';
import type11 from '@/assets/bor-san/type-11.png';
import type22 from '@/assets/bor-san/type-22.png';
import type33 from '@/assets/bor-san/type-33.png';
import kitImage from '@/assets/bor-san/kit.jpg';
import packImage from '@/assets/bor-san/pack.jpg';
import palletImage from '@/assets/bor-san/pallet.jpg';

export const BorSanSection: React.FC = () => {
  const { t, language } = useLanguage();
  const [borSanData, setBorSanData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBorSanData = async () => {
      try {
        const response = await fetch('/about_bor_san.json');
        const data = await response.json();
        setBorSanData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching BOR-SAN data:', error);
        setLoading(false);
      }
    };

    fetchBorSanData();
  }, []);

  if (loading) {
    return (
      <div className="py-20 flex items-center justify-center">
        <div className="text-2xl font-bold">Loading...</div>
      </div>
    );
  }

  if (!borSanData) {
    return (
      <div className="py-20 flex items-center justify-center">
        <div className="text-2xl font-bold">Error loading data</div>
      </div>
    );
  }

  // Get radiator data based on current language (safe access)
  const radiatorData = borSanData?.radiators ?? null;
  if (!radiatorData) {
    console.error('BOR-SAN data missing "radiators" key:', borSanData);
    return (
      <div className="py-20 flex items-center justify-center">
        <div className="text-2xl font-bold">Error loading BOR-SAN data</div>
      </div>
    );
  }

  const localize = (entry: any) => {
    if (!entry) return '';
    return entry[language] ?? entry['en'] ?? '';
  };

  const description = localize(radiatorData.description);
  const features = radiatorData.features ?? {};
  const techSpecs = radiatorData.technical_specifications ?? {};
  const packagingTests = radiatorData.packaging_and_tests ?? {};
  const contactInfo = localize(radiatorData.contact);
  const types = radiatorData.types ?? [];

  return (
    <section id="bor-san" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <img src={borSanLogo} alt="BOR-SAN Logo" className="h-14 object-contain" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">{t('borSan.title')}</span>
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <img src={partnerBorsan} alt="BOR-SAN Partner" className="w-full max-w-xs rounded-md shadow-md mx-auto" />
            </div>
            <div className="text-left">
              <p className="text-xl md:text-2xl text-foreground-muted mb-4 leading-relaxed">{description}</p>
              <div className="prose text-foreground-muted max-w-none">
                {/* Render company_info from translations as paragraphs preserving new lines */}
                {String(t('borSan.company_info')).split(/\n\n/).map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </div>
          </div>
          <a
            href="https://bor-san.ru"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          >
            {t('products.viewDetails')} <Link className="ml-2 h-4 w-4" />
          </a>
        </div>

        {/* Features Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">{t('borSan.features.title')}</h3>
            <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
              {t('borSan.features.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 hover-scale border-none shadow-lg bg-surface-elevated">
              <CardHeader className="pb-4">
                <Shield className="h-12 w-12 text-brand-red mb-4 mx-auto" />
                <CardTitle className="text-xl text-center">{t('borSan.features.corrosion.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground-muted leading-relaxed text-center">
                  {localize(features.nanoceramic_coating)}
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover-scale border-none shadow-lg bg-surface-elevated">
              <CardHeader className="pb-4">
                <Thermometer className="h-12 w-12 text-brand-orange mb-4 mx-auto" />
                <CardTitle className="text-xl text-center">{t('borSan.features.heating.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground-muted leading-relaxed text-center">
                  {localize(features.even_heating)}
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover-scale border-none shadow-lg bg-surface-elevated">
              <CardHeader className="pb-4">
                <Wrench className="h-12 w-12 text-brand-yellow mb-4 mx-auto" />
                <CardTitle className="text-xl text-center">{t('borSan.features.automation.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground-muted leading-relaxed text-center">
                  {localize(features.automation_and_testing)}
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover-scale border-none shadow-lg bg-surface-elevated">
              <CardHeader className="pb-4">
                <Award className="h-12 w-12 text-primary mb-4 mx-auto" />
                <CardTitle className="text-xl text-center">{t('borSan.features.compliance.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground-muted leading-relaxed text-center">
                  {localize(features.gost_compliance)}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">{t('borSan.specifications.title')}</h3>
            <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
              {t('borSan.specifications.subtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-none shadow-lg bg-surface-elevated">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <CheckCircle className="h-6 w-6 text-primary" />
                  {t('borSan.specifications.materials')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground-muted mb-4">
                  {localize(techSpecs.base_material_standard)}
                </p>
                <p className="text-foreground-muted mb-4">
                  {localize(techSpecs.convector_design)}
                </p>
                <p className="text-foreground-muted">
                  {localize(techSpecs.pressure_temperature)}
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-surface-elevated">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Leaf className="h-6 w-6 text-primary" />
                  {t('borSan.specifications.design')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground-muted mb-4">
                  {localize(techSpecs.standard_color)}
                </p>
                <p className="text-foreground-muted mb-4">
                  {localize(techSpecs.easy_cleaning)}
                </p>
                <p className="text-foreground-muted">
                  {localize(techSpecs.packaging_and_accessories)}
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-surface-elevated lg:col-span-2">
              <CardHeader>
                <CardTitle className="text-2xl">{t('borSan.specifications.dimensions')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground-muted mb-4">
                  {localize(techSpecs.types_heights_lengths)}
                </p>
                <p className="text-foreground-muted">
                  {localize(techSpecs.brackets)}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Radiator Types removed per request */}

        {/* Packaging & Testing */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">{t('borSan.packaging.title')}</h3>
            <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
              {t('borSan.packaging.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden border-none shadow-lg bg-surface-elevated">
              <div className="h-48 overflow-hidden">
                <img 
                  src={packImage} 
                  alt={t('borSan.packaging.packaging')}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Package className="h-5 w-5 text-primary" />
                  {t('borSan.packaging.packaging')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground-muted">
                  {localize(packagingTests.packaging)}
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-none shadow-lg bg-surface-elevated">
              <div className="h-48 overflow-hidden">
                <img 
                  src={kitImage} 
                  alt={t('borSan.packaging.accessories')}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wrench className="h-5 w-5 text-primary" />
                  {t('borSan.packaging.accessories')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground-muted">
                  {localize(packagingTests.accessories)}
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-none shadow-lg bg-surface-elevated">
              <div className="h-48 overflow-hidden">
                <img 
                  src={palletImage} 
                  alt={t('borSan.packaging.shipping')}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Truck className="h-5 w-5 text-primary" />
                  {t('borSan.packaging.shipping')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground-muted">
                  {t('borSan.packaging.shippingText')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Certification removed per request */}
      </div>
    </section>
  );
};