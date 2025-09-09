import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Video from './Video';
import manufacturingData from '../../../manufacturing-process-uterm.json';

export const ManufacturingSection: React.FC = () => {
  const { t, language } = useLanguage();
  const data = manufacturingData[language as keyof typeof manufacturingData];

  return (
    <section id="manufacturing" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[hsl(0_85%_55%)] to-[hsl(25_95%_60%)] bg-clip-text text-transparent">
            {data.title}
          </h2>
          <p className="text-xl text-foreground-muted max-w-4xl mx-auto leading-relaxed">
            {data.intro}
          </p>
        </div>

        {/* Video Section */}
        <div className="mb-20 scroll-animate">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-foreground">
              {data.how_we_make}
            </h3>
          </div>
          <Video />
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20 scroll-animate">
          {data.features.map((feature: string, index: number) => (
            <div key={index} className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-[hsl(25_95%_60%)] to-[hsl(45_95%_65%)] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">{feature}</h4>
            </div>
          ))}
        </div>

        {/* Quality Principle Section */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 mb-16 shadow-xl scroll-animate">
          <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-center text-foreground">
            {data.quality_principle}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.quality_steps.map((step: string, index: number) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-[hsl(0_85%_55%)] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                  {index + 1}
                </div>
                <p className="text-foreground-muted leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Production Stages */}
        <div className="scroll-animate">
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-center text-foreground">
            {data.stages_title}
          </h3>
          <p className="text-lg text-foreground-muted text-center mb-12 max-w-3xl mx-auto">
            {data.stages_intro}
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.stages.map((stage: string, index: number) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-[hsl(0_85%_55%)] to-[hsl(25_95%_60%)] rounded-xl p-6 text-white text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold">{index + 1}</span>
                  </div>
                  <h4 className="font-semibold text-sm md:text-base">{stage}</h4>
                </div>
                {index < data.stages.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-[hsl(0_85%_55%)] to-[hsl(25_95%_60%)] transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Daily Capacity & Trust Section */}
          <div className="mt-20 grid md:grid-cols-2 gap-8 scroll-animate">
          <div className="bg-gradient-to-br from-[hsl(45_95%_65%_/_.1)] to-[hsl(25_95%_60%_/_.1)] dark:from-[hsl(45_95%_65%_/_.2)] dark:to-[hsl(25_95%_60%_/_.2)] rounded-xl p-8 shadow-lg">
            <h4 className="text-xl font-semibold mb-4 text-foreground">
              {language === 'uz' ? 'Ishlab chiqarish quvvatlari' : 
               language === 'en' ? 'Production Capacity' : 'Производственные мощности'}
            </h4>
            <p className="text-foreground-muted leading-relaxed">{data.daily_capacity}</p>
          </div>
          <div className="bg-gradient-to-br from-[hsl(0_85%_55%_/_.1)] to-[hsl(25_95%_60%_/_.1)] dark:from-[hsl(0_85%_55%_/_.2)] dark:to-[hsl(25_95%_60%_/_.2)] rounded-xl p-8 shadow-lg">
            <h4 className="text-xl font-semibold mb-4 text-foreground">
              {language === 'uz' ? 'Ishonchlilik va ishonch' : 
               language === 'en' ? 'Reliability and Trust' : 'Надежность и доверие'}
            </h4>
            <p className="text-foreground-muted leading-relaxed">{data.trust}</p>
          </div>
        </div>

        {/* Private Label Section */}
        <div className="mt-16 bg-gradient-to-r from-[hsl(0_85%_55%_/_.1)] to-[hsl(45_95%_65%_/_.1)] dark:from-[hsl(0_85%_55%_/_.2)] dark:to-[hsl(45_95%_65%_/_.2)] rounded-xl p-8 text-center scroll-animate">
          <h4 className="text-xl font-semibold mb-4 text-foreground">
            {language === 'uz' ? 'Xususiy brend' : 
             language === 'en' ? 'Private Label' : 'Частная марка'}
          </h4>
          <p className="text-foreground-muted max-w-4xl mx-auto leading-relaxed">{data.private_label}</p>
        </div>
      </div>
    </section>
  );
};

export default ManufacturingSection;
