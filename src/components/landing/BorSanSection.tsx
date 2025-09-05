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

  // Get radiator data based on current language
  const radiatorData = borSanData.radiators;
  const description = radiatorData.description[language];
  const features = radiatorData.features;
  const techSpecs = radiatorData.technical_specifications;
  const packagingTests = radiatorData.packaging_and_tests;
  const contactInfo = radiatorData.contact[language];
  const types = radiatorData.types;

  return (
    <section id="bor-san" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary text-primary-foreground">
            BOR-SAN
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">{t('borSan.title')}</span>
          </h2>
          <p className="text-xl md:text-2xl text-foreground-muted mb-8 max-w-4xl mx-auto leading-relaxed">
            {description}
          </p>
          <button 
            onClick={() => navigate('/bor-san')}
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          >
            {t('products.viewDetails')} <Link className="ml-2 h-4 w-4" />
          </button>
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
                  {features.nanoceramic_coating[language]}
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
                  {features.even_heating[language]}
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
                  {features.automation_and_testing[language]}
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
                  {features.gost_compliance[language]}
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
                  {techSpecs.base_material_standard[language]}
                </p>
                <p className="text-foreground-muted mb-4">
                  {techSpecs.convector_design[language]}
                </p>
                <p className="text-foreground-muted">
                  {techSpecs.pressure_temperature[language]}
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
                  {techSpecs.standard_color[language]}
                </p>
                <p className="text-foreground-muted mb-4">
                  {techSpecs.easy_cleaning[language]}
                </p>
                <p className="text-foreground-muted">
                  {techSpecs.packaging_and_accessories[language]}
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-surface-elevated lg:col-span-2">
              <CardHeader>
                <CardTitle className="text-2xl">{t('borSan.specifications.dimensions')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground-muted mb-4">
                  {techSpecs.types_heights_lengths[language]}
                </p>
                <p className="text-foreground-muted">
                  {techSpecs.brackets[language]}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Radiator Types */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">{t('borSan.types.title')}</h3>
            <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
              {t('borSan.types.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {types.map((type: any, index: number) => (
              <Card key={index} className="overflow-hidden hover-scale border-none shadow-lg bg-surface-elevated">
                <div className="relative">
                  <img 
                    src={
                      type.type === "11 PK" ? type11 : 
                      type.type === "22 PKKP" ? type22 : type33
                    } 
                    alt={type.type}
                    className="w-full h-48 object-contain"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{type.type}</CardTitle>
                  <CardDescription>
                    {type.configuration.panel}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-foreground-muted">{t('borSan.types.sideConnection')}:</span>
                    <span className="font-medium">
                      {type.configuration.connection.side === "available" ? 
                        t('borSan.types.available') : 
                        t('borSan.types.onRequest')}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground-muted">{t('borSan.types.bottomConnection')}:</span>
                    <span className="font-medium">
                      {type.configuration.connection.bottom === "available" ? 
                        t('borSan.types.available') : 
                        t('borSan.types.onRequest')}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

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
                  {packagingTests.packaging[language]}
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
                  {packagingTests.accessories[language]}
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

        {/* Certification */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">{t('borSan.certification.title')}</h3>
            <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
              {radiatorData.certification[language]}
            </p>
          </div>

          <div className="flex justify-center">
            <Badge variant="secondary" className="py-3 px-6 text-lg">
              <Award className="h-5 w-5 mr-2" />
              {t('borSan.certification.gost')} - GOST 31311-2005
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};