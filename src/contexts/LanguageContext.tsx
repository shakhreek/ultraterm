import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'uz' | 'ru';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Comprehensive translations for all sections
const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.features': 'Features',
    'nav.products': 'Products',
    'nav.testimonials': 'Testimonials',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Premium Heating Radiators',
    'hero.subtitle': 'Experience ultimate warmth and comfort with ULTRATERM\'s cutting-edge heating solutions',
    'hero.cta': 'Explore Products',
    'hero.learnMore': 'Learn More',
    
    // About Section
    'about.title': 'About ULTRATERM',
    'about.subtitle': 'Leading the future of heating technology',
    'about.description': 'With over a decade of expertise in heating solutions, ULTRATERM has established itself as a premier manufacturer of high-quality radiators. We combine innovative technology with elegant design to deliver heating systems that exceed expectations.',
    'about.experience': 'Years of Excellence',
    'about.products': 'Product Models',
    'about.customers': 'Happy Customers',
    'about.countries': 'Countries Served',
    
    // Features Section
    'features.title': 'Why Choose ULTRATERM',
    'features.subtitle': 'Premium quality meets innovative technology',
    'features.quality.title': 'Superior Quality',
    'features.quality.description': 'Manufactured with premium materials and rigorous quality control for long-lasting performance',
    'features.durability.title': 'Exceptional Durability',
    'features.durability.description': 'Built to withstand extreme conditions with industry-leading warranties',
    'features.design.title': 'Modern Design',
    'features.design.description': 'Sleek, contemporary aesthetics that complement any interior space',
    'features.efficiency.title': 'Energy Efficiency',
    'features.efficiency.description': 'Advanced heat distribution technology for optimal energy consumption',
    
    // Products Section
    'products.title': 'Our Premium Collection',
    'products.subtitle': 'Discover the perfect heating solution for your space',
    'products.elite.name': 'ULTRATERM Elite',
    'products.elite.description': 'Premium aluminum radiator with advanced heat distribution technology',
    'products.elite.power': 'Power Output',
    'products.elite.warranty': 'Warranty',
    'products.pro.name': 'ULTRATERM Pro',
    'products.pro.description': 'Professional-grade steel radiator for commercial applications',
    'products.eco.name': 'ULTRATERM Eco',
    'products.eco.description': 'Energy-efficient model designed for sustainable heating',
    'products.viewDetails': 'View Details',
    
    // Why Choose Us
    'whyChoose.title': 'Why Choose ULTRATERM?',
    'whyChoose.subtitle': 'Compare our advantages over competitors',
    'whyChoose.quality': 'Quality Guarantee',
    'whyChoose.qualityDesc': '15-year comprehensive warranty on all products',
    'whyChoose.technology': 'Advanced Technology',
    'whyChoose.technologyDesc': 'Patented heat distribution system for maximum efficiency',
    'whyChoose.service': 'Premium Service',
    'whyChoose.serviceDesc': '24/7 customer support and professional installation',
    'whyChoose.price': 'Competitive Pricing',
    'whyChoose.priceDesc': 'Best value for premium quality heating solutions',
    
    // Testimonials
    'testimonials.title': 'What Our Customers Say',
    'testimonials.subtitle': 'Trusted by thousands of satisfied customers worldwide',
    'testimonials.customer1.name': 'Sarah Johnson',
    'testimonials.customer1.role': 'Homeowner',
    'testimonials.customer1.text': 'ULTRATERM radiators transformed our home heating. Excellent quality and beautiful design!',
    'testimonials.customer2.name': 'Michael Chen',
    'testimonials.customer2.role': 'Architect',
    'testimonials.customer2.text': 'Professional grade quality with stunning aesthetics. Perfect for modern architectural projects.',
    'testimonials.customer3.name': 'Elena Rodriguez',
    'testimonials.customer3.role': 'Business Owner',
    'testimonials.customer3.text': 'Outstanding customer service and reliable heating solutions for our office complex.',
    
    // Contact Section
    'contact.title': 'Get In Touch',
    'contact.subtitle': 'Ready to upgrade your heating system?',
    'contact.name': 'Full Name',
    'contact.email': 'Email Address',
    'contact.phone': 'Phone Number',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.address': 'Our Address',
    'contact.phone.label': 'Phone',
    'contact.email.label': 'Email',
    
    // Footer
    'footer.company': 'Company',
    'footer.products': 'Products',
    'footer.support': 'Support',
    'footer.legal': 'Legal',
    'footer.about': 'About Us',
    'footer.careers': 'Careers',
    'footer.news': 'News',
    'footer.elite': 'ULTRATERM Elite',
    'footer.pro': 'ULTRATERM Pro',
    'footer.eco': 'ULTRATERM Eco',
    'footer.help': 'Help Center',
    'footer.installation': 'Installation',
    'footer.warranty': 'Warranty',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.copyright': '© 2024 ULTRATERM. All rights reserved.',
  },
  uz: {
    // Navigation
    'nav.home': 'Bosh sahifa',
    'nav.about': 'Biz haqimizda',
    'nav.features': 'Xususiyatlar',
    'nav.products': 'Mahsulotlar',
    'nav.testimonials': 'Sharhlar',
    'nav.contact': 'Aloqa',
    
    // Hero Section
    'hero.title': 'Premium Isitish Radiatorlari',
    'hero.subtitle': 'ULTRATERM\'ning ilg\'or isitish yechimlari bilan eng yuqori issiqlik va qulaylikni his eting',
    'hero.cta': 'Mahsulotlarni Ko\'rish',
    'hero.learnMore': 'Batafsil',
    
    // About Section
    'about.title': 'ULTRATERM Haqida',
    'about.subtitle': 'Isitish texnologiyasi kelajagini yetaklaymiz',
    'about.description': 'O\'n yildan ortiq isitish yechimlari sohasidagi tajriba bilan ULTRATERM yuqori sifatli radiatorlarning yetakchi ishlab chiqaruvchisi sifatida o\'zini namoyon etdi. Biz innovatsion texnologiyani nafis dizayn bilan birlashtirib, kutilganidan oshib ketadigan isitish tizimlarini taqdim etamiz.',
    'about.experience': 'Yillik Tajriba',
    'about.products': 'Mahsulot Modellari',
    'about.customers': 'Mamnun Mijozlar',
    'about.countries': 'Xizmat Ko\'rsatilgan Mamlakatlar',
    
    // Features Section
    'features.title': 'Nima Uchun ULTRATERM',
    'features.subtitle': 'Premium sifat innovatsion texnologiya bilan uchrashadi',
    'features.quality.title': 'Yuqori Sifat',
    'features.quality.description': 'Uzoq muddat ishlashi uchun premium materiallar va qattiq sifat nazorati bilan ishlab chiqarilgan',
    'features.durability.title': 'Ajoyib Bardoshlilik',
    'features.durability.description': 'Sanoat yetakchi kafolatlar bilan ekstremal sharoitlarga bardosh berishga mo\'ljallangan',
    'features.design.title': 'Zamonaviy Dizayn',
    'features.design.description': 'Har qanday ichki makonga mos keladigan nozik, zamonaviy estetika',
    'features.efficiency.title': 'Energiya Samaradorligi',
    'features.efficiency.description': 'Optimal energiya sarfi uchun ilg\'or issiqlik taqsimlash texnologiyasi',
    
    // Products Section
    'products.title': 'Bizning Premium Kolleksiyamiz',
    'products.subtitle': 'Makoningiz uchun mukammal isitish yechimini kashf eting',
    'products.elite.name': 'ULTRATERM Elite',
    'products.elite.description': 'Ilg\'or issiqlik taqsimlash texnologiyasi bilan premium alyuminiy radiator',
    'products.elite.power': 'Quvvat Chiqishi',
    'products.elite.warranty': 'Kafolat',
    'products.pro.name': 'ULTRATERM Pro',
    'products.pro.description': 'Tijorat maqsadlari uchun professional darajadagi po\'lat radiator',
    'products.eco.name': 'ULTRATERM Eco',
    'products.eco.description': 'Barqaror isitish uchun mo\'ljallangan energiya tejamkor model',
    'products.viewDetails': 'Batafsil Ko\'rish',
    
    // Why Choose Us
    'whyChoose.title': 'Nima Uchun ULTRATERM\'ni Tanlaysiz?',
    'whyChoose.subtitle': 'Raqobatchilar ustidan bizning afzalliklarimizni solishtiring',
    'whyChoose.quality': 'Sifat Kafolatnamasi',
    'whyChoose.qualityDesc': 'Barcha mahsulotlarga 15 yillik keng qamrovli kafolat',
    'whyChoose.technology': 'Ilg\'or Texnologiya',
    'whyChoose.technologyDesc': 'Maksimal samaradorlik uchun patentlangan issiqlik taqsimlash tizimi',
    'whyChoose.service': 'Premium Xizmat',
    'whyChoose.serviceDesc': '24/7 mijozlarni qo\'llab-quvvatlash va professional o\'rnatish',
    'whyChoose.price': 'Raqobatbardosh Narxlar',
    'whyChoose.priceDesc': 'Premium sifatli isitish yechimlari uchun eng yaxshi qiymat',
    
    // Testimonials
    'testimonials.title': 'Mijozlarimiz Nima Deydi',
    'testimonials.subtitle': 'Butun dunyo bo\'ylab minglab mamnun mijozlar tomonidan ishonilgan',
    'testimonials.customer1.name': 'Sarah Johnson',
    'testimonials.customer1.role': 'Uy egasi',
    'testimonials.customer1.text': 'ULTRATERM radiatorlari bizning uyimiz isitishini o\'zgartirdi. Ajoyib sifat va chiroyli dizayn!',
    'testimonials.customer2.name': 'Michael Chen',
    'testimonials.customer2.role': 'Arxitektor',  
    'testimonials.customer2.text': 'Ajoyib estetika bilan professional darajadagi sifat. Zamonaviy arxitektura loyihalari uchun mukammal.',
    'testimonials.customer3.name': 'Elena Rodriguez',
    'testimonials.customer3.role': 'Biznes egasi',
    'testimonials.customer3.text': 'Bizning ofis majmuamiz uchun ajoyib mijozlarga xizmat va ishonchli isitish yechimlari.',
    
    // Contact Section
    'contact.title': 'Aloqaga Chiqing',
    'contact.subtitle': 'Isitish tizimingizni yangilashga tayyormisiz?',
    'contact.name': 'To\'liq Ism',
    'contact.email': 'Email Manzili',
    'contact.phone': 'Telefon Raqami',
    'contact.message': 'Xabar',
    'contact.send': 'Xabar Yuborish',
    'contact.address': 'Bizning Manzilimiz',
    'contact.phone.label': 'Telefon',
    'contact.email.label': 'Email',
    
    // Footer
    'footer.company': 'Kompaniya',
    'footer.products': 'Mahsulotlar',
    'footer.support': 'Qo\'llab-quvvatlash',
    'footer.legal': 'Huquqiy',
    'footer.about': 'Biz Haqimizda',
    'footer.careers': 'Karyera',
    'footer.news': 'Yangiliklar',
    'footer.elite': 'ULTRATERM Elite',
    'footer.pro': 'ULTRATERM Pro', 
    'footer.eco': 'ULTRATERM Eco',
    'footer.help': 'Yordam Markazi',
    'footer.installation': 'O\'rnatish',
    'footer.warranty': 'Kafolat',
    'footer.privacy': 'Maxfiylik Siyosati',
    'footer.terms': 'Xizmat Shartlari',
    'footer.copyright': '© 2024 ULTRATERM. Barcha huquqlar himoyalangan.',
  },
  ru: {
    // Navigation
    'nav.home': 'Главная',
    'nav.about': 'О нас', 
    'nav.features': 'Особенности',
    'nav.products': 'Продукция',
    'nav.testimonials': 'Отзывы',
    'nav.contact': 'Контакты',
    
    // Hero Section
    'hero.title': 'Премиальные Отопительные Радиаторы',
    'hero.subtitle': 'Испытайте максимальное тепло и комфорт с передовыми отопительными решениями ULTRATERM',
    'hero.cta': 'Посмотреть Продукцию',
    'hero.learnMore': 'Узнать Больше',
    
    // About Section
    'about.title': 'О ULTRATERM',
    'about.subtitle': 'Ведущий производитель будущего отопительных технологий',
    'about.description': 'Имея более десяти лет опыта в области отопительных решений, ULTRATERM зарекомендовал себя как ведущий производитель высококачественных радиаторов. Мы сочетаем инновационные технологии с элегантным дизайном для создания отопительных систем, превышающих ожидания.',
    'about.experience': 'Лет Совершенства',
    'about.products': 'Моделей Продукции',
    'about.customers': 'Довольных Клиентов',
    'about.countries': 'Стран Обслуживания',
    
    // Features Section
    'features.title': 'Почему ULTRATERM',
    'features.subtitle': 'Премиальное качество встречается с инновационными технологиями',
    'features.quality.title': 'Превосходное Качество',
    'features.quality.description': 'Изготовлено из премиальных материалов с строгим контролем качества для долговечной работы',
    'features.durability.title': 'Исключительная Долговечность',
    'features.durability.description': 'Построено для выдерживания экстремальных условий с ведущими в отрасли гарантиями',
    'features.design.title': 'Современный Дизайн',
    'features.design.description': 'Изящная, современная эстетика, дополняющая любое внутреннее пространство',
    'features.efficiency.title': 'Энергоэффективность',
    'features.efficiency.description': 'Передовая технология распределения тепла для оптимального потребления энергии',
    
    // Products Section
    'products.title': 'Наша Премиальная Коллекция',
    'products.subtitle': 'Откройте для себя идеальное отопительное решение для вашего пространства',
    'products.elite.name': 'ULTRATERM Elite',
    'products.elite.description': 'Премиальный алюминиевый радиатор с передовой технологией распределения тепла',
    'products.elite.power': 'Мощность',
    'products.elite.warranty': 'Гарантия',
    'products.pro.name': 'ULTRATERM Pro', 
    'products.pro.description': 'Профессиональный стальной радиатор для коммерческих применений',
    'products.eco.name': 'ULTRATERM Eco',
    'products.eco.description': 'Энергоэффективная модель, разработанная для устойчивого отопления',
    'products.viewDetails': 'Подробнее',
    
    // Why Choose Us
    'whyChoose.title': 'Почему Выбирают ULTRATERM?',
    'whyChoose.subtitle': 'Сравните наши преимущества перед конкурентами',
    'whyChoose.quality': 'Гарантия Качества',
    'whyChoose.qualityDesc': '15-летняя комплексная гарантия на все продукты',
    'whyChoose.technology': 'Передовые Технологии',
    'whyChoose.technologyDesc': 'Запатентованная система распределения тепла для максимальной эффективности',
    'whyChoose.service': 'Премиальный Сервис',
    'whyChoose.serviceDesc': 'Круглосуточная поддержка клиентов и профессиональная установка',
    'whyChoose.price': 'Конкурентные Цены',
    'whyChoose.priceDesc': 'Лучшее соотношение цены и качества для премиальных отопительных решений',
    
    // Testimonials
    'testimonials.title': 'Что Говорят Наши Клиенты',
    'testimonials.subtitle': 'Нам доверяют тысячи довольных клиентов по всему миру',
    'testimonials.customer1.name': 'Сара Джонсон',
    'testimonials.customer1.role': 'Домовладелец',
    'testimonials.customer1.text': 'Радиаторы ULTRATERM преобразили отопление нашего дома. Отличное качество и красивый дизайн!',
    'testimonials.customer2.name': 'Михаил Чен',
    'testimonials.customer2.role': 'Архитектор',
    'testimonials.customer2.text': 'Профессиональное качество с потрясающей эстетикой. Идеально для современных архитектурных проектов.',
    'testimonials.customer3.name': 'Елена Родригес',
    'testimonials.customer3.role': 'Владелец Бизнеса',
    'testimonials.customer3.text': 'Выдающееся обслуживание клиентов и надежные отопительные решения для нашего офисного комплекса.',
    
    // Contact Section
    'contact.title': 'Свяжитесь с Нами',
    'contact.subtitle': 'Готовы обновить вашу отопительную систему?',
    'contact.name': 'Полное Имя',
    'contact.email': 'Email Адрес',
    'contact.phone': 'Номер Телефона',
    'contact.message': 'Сообщение',
    'contact.send': 'Отправить Сообщение',
    'contact.address': 'Наш Адрес',
    'contact.phone.label': 'Телефон',
    'contact.email.label': 'Email',
    
    // Footer
    'footer.company': 'Компания',
    'footer.products': 'Продукция',
    'footer.support': 'Поддержка',
    'footer.legal': 'Правовая Информация',
    'footer.about': 'О Нас',
    'footer.careers': 'Карьера',
    'footer.news': 'Новости',
    'footer.elite': 'ULTRATERM Elite',
    'footer.pro': 'ULTRATERM Pro',
    'footer.eco': 'ULTRATERM Eco',
    'footer.help': 'Центр Помощи',
    'footer.installation': 'Установка',
    'footer.warranty': 'Гарантия',
    'footer.privacy': 'Политика Конфиденциальности',
    'footer.terms': 'Условия Обслуживания',
    'footer.copyright': '© 2024 ULTRATERM. Все права защищены.',
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  const value = {
    language,
    setLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};