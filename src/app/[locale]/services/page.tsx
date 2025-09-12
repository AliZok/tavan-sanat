"use client";

import Header from '../../../components/Header';
import { useParams } from 'next/navigation';
import { getTranslations, getDirection, type Locale } from '../../../lib/i18n';

export default function ServicesPage() {
  const params = useParams();
  const locale = (params.locale as Locale) || 'en';
  const t = getTranslations(locale);
  const direction = getDirection(locale);

  const faServices = [
    'مشاوره تخصصی پیش از خرید جهت انتخاب بهینه تجهیزات',
    'طراحی، نصب و راه‌اندازی انواع آنالایزرها',
    'تأمین قطعات یدکی و مصرفی انواع آنالایزرها',
    'ارائه خدمات تعمیر، نگهداری و کالیبراسیون برای:',
    'آنالایزرهای ایستگاه‌های سنجش آلودگی هوا',
    'تجهیزات پایش آنلاین صنایع',
    'آنالایزرهای پایش کیفی آب و پساب',
  ];

  const enServices = [
    'Pre-purchase expert consultation for optimal equipment selection',
    'Design, installation, and commissioning of various analyzers',
    'Supply of spare and consumable parts for analyzers',
    'Service, maintenance, and calibration for:',
    'Air quality monitoring station analyzers',
    'Industrial online monitoring equipment',
    'Water and wastewater quality monitoring analyzers',
  ];

  const items = locale === 'fa' ? faServices : enServices;

  return (
    <div className="flex flex-col min-h-screen bg-gray-900" dir={direction}>
      <Header />
      <main className="flex-1 pt-18">
        <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-center bg-cover bg-no-repeat"
            style={{ backgroundImage: "url('/images/Oil-refinery-flare.jpg')" }}
          />

          {/* Content Box */}
          <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6">
            <div className="bg-black/70 backdrop-blur-sm border-t-4 border-green-600 p-8 md:p-12">
              {/* Description */}
              <p className="text-white text-lg leading-relaxed mb-8 text-justify">
                {locale === 'fa'
                  ? 'مدیران این شرکت با اتکا به بیش از ده سال تجربه و دانش تخصصی در زمینه تجهیزات سنجش آلودگی هوا و سامانه‌های پایش پیوسته (CEMS)، این مجموعه را بنیان نهاده‌اند تا با تلفیق دانش فنی و تجربه عملی، افق تازه‌ای در ارائه خدمات به مشتریان خود بگشایند.'
                  : 'With over a decade of experience in air pollution measurement equipment and Continuous Emissions Monitoring Systems (CEMS), our leadership team founded this company to combine technical expertise with hands-on experience and open new horizons in delivering services to our clients.'
                }
              </p>
              
              {/* Services List */}
              <div className="space-y-4">
                <h2 className="text-white text-xl font-semibold mb-4">
                  {t.services.title}
                </h2>
                <ul className="space-y-3">
                  {items.map((item, idx) => (
                    <li key={idx} className="flex items-start text-white">
                      <div className="flex-shrink-0 w-2 h-2 bg-green-600 transform rotate-45 mt-2 mr-3" />
                      <span className="text-lg leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Additional Description */}
              <p className="text-white text-lg leading-relaxed mt-8 text-justify">
                {t.services.description}
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
