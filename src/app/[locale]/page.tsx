'use client';

import Image from 'next/image';
import { ArrowUp } from 'lucide-react';
import { useParams } from 'next/navigation';
import { getTranslations, getDirection, type Locale } from '../../lib/i18n';
import Header from '../../components/Header';
import StructuredData from '../../components/StructuredData';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Component() {
  const params = useParams();
  const locale = (params.locale as Locale) || 'en';
  const translations = getTranslations(locale);
  const direction = getDirection(locale);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  const settingsTest = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
    ],
  };
  return (
    <div className="flex flex-col min-h-screen" dir={direction}>
      <StructuredData locale={locale} />
      <Header />

      {/* Hero Section */}
      <main className="flex-1 pt-18">
        <section className="w-full items-center flex min-h-[calc(100vh-4rem)] py-6 md:py-12 lg:py-16 xl:py-22 bg-gradient-to-br from-[#669c27]/5 to-white relative overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: "url('/nav-back.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              opacity: 1,
              zIndex: 1,
            }}
          ></div>

          <div className="container px-4 md:px-6 flex items-start justify-center relative z-10 pt-[25vh]">
            <div className="text-left">
              <h1 className="text-lg font-extrabold tracking-tighter text-white leading-tight animate-fade-in-up mb-4">
                {locale === 'fa' ? 'خوش آمدید به' : 'WELCOME TO'}
              </h1>
              <h2 className="text-[47px] font-extrabold tracking-tighter text-white leading-tight animate-fade-in-up delay-200 mb-6">
                {locale === 'fa' ? 'توان صنعت آینده ایرانیان' : 'TAVAN SANATE AYANDE IRANIAN'}
              </h2>
            </div>
          </div>
        </section>

        {/* Company Profile Section */}
        <section className="w-full min-h-[100vh] bg-[#669c27] relative overflow-hidden flex items-center justify-center  ">
          {/* Background Image */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `url("/bg2.png")`,
              backgroundSize: 'auto 50%',
              backgroundPosition: 'top left',
              backgroundRepeat: 'no-repeat',
            }}
          ></div>

          <div className="container px-4 md:px-6 relative z-10 flex items-center justify-center h-full pt-[40px]">
            <div className="flex flex-col items-center justify-center space-y-8 text-center">
              {/* Main Heading */}
              <div className="text-right w-full">
                <h2 className="text-4xl font-extrabold tracking-tighter sm:text-4xl text-white">
                  {translations.company.title}
                </h2>
              </div>

              {/* Company Description */}
              <div className="max-w-4xl mx-auto text-center" dir={direction}>
                <p className="text-[12px] md:text-[16px] lg:text-[18px] text-white leading-relaxed text-justify">
                  {translations.company.description}
                </p>
                <p className="text-[12px] md:text-[16px] lg:text-[18px] text-white leading-relaxed text-justify">
                  {translations.company.description2}
                </p>
                {locale === 'fa' && (
                  <p className="text-[12px] md:text-[16px] lg:text-[18px] text-white leading-relaxed text-justify mt-4">
                    <strong>توان صنعت آینده ایرانیان</strong> با تکیه بر دانش فنی و تجربه‌های ارزشمند، 
                    آماده ارائه خدمات تخصصی در زمینه آنالایزرهای محیطی و تجهیزات سنجش کیفیت هوا 
                    به صنایع مختلف کشور می‌باشد.
                  </p>
                )}
              </div>

              {/* Scroll Indicator */}
              <div className={`mt-12 animate-bounce w-full flex justify-start`}>
                <div className="w-10 h-10 border-2 border-white flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-r from-gray-50 to-white text-[#353c4a]">
          <div className="max-w-[1200px] mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-6 text-center mb-12">
              <div className="space-y-3">
                <h2 className="text-3xl font-extrabold tracking-tighter sm:text-4xl text-[#353c4a]">
                  {translations.customers.title}
                </h2>
              </div>
            </div>
            <div className="slider-container">
              <Slider {...settingsTest}>
                <div className=" h-28 !flex items-center justify-center w-full bg-white shadow-md mx-2">
                  <Image
                    src="/customers-logo/customer2.jpg"
                    alt="Brand Partner 8"
                    width={192}
                    height={112}
                    className="mx-auto max-w-full max-h-full object-contain transition-all duration-300"
                  />
                </div>
                <div className="h-28 !flex items-center justify-center w-full bg-white shadow-md mx-2">
                  <Image
                    src="/customers-logo/customer3.jpg"
                    alt="Brand Partner 8"
                    width={192}
                    height={112}
                    className="mx-auto max-w-full max-h-full object-contain  transition-all duration-300"
                  />
                </div>
                <div className=" h-28 !flex items-center justify-center w-full bg-white shadow-md mx-2">
                  <Image
                    src="/customers-logo/customer5.jpg"
                    alt="Brand Partner 8"
                    width={192}
                    height={112}
                    className="mx-auto max-w-full max-h-full object-contain  transition-all duration-300"
                  />
                </div>
                <div className=" h-28 !flex items-center justify-center w-full bg-white shadow-md mx-2">
                  <Image
                    src="/customers-logo/customer6.jpg"
                    alt="Brand Partner 8"
                    width={192}
                    height={112}
                    className="mx-auto max-w-full max-h-full object-contain  transition-all duration-300"
                  />
                </div>
                <div className="h-28 !flex items-center justify-center w-full bg-white shadow-md mx-2">
                  <Image
                    src="/customers-logo/customer7.jpg"
                    alt="Brand Partner 8"
                    width={192}
                    height={112}
                    className="mx-auto max-w-full max-h-full object-contain  transition-all duration-300"
                  />
                </div>
                <div className="text-center h-28 !flex items-end justify-center w-full bg-white shadow-md mx-2">
                  <Image
                    src="/customers-logo/customer8.jpg"
                    alt="Brand Partner 8"
                    width={192}
                    height={112}
                    className="mx-auto max-w-full max-h-full object-contain  transition-all duration-300"
                  />
                </div>
              </Slider>
            </div>
          </div>
        </section>
        <section className="bg-[#1734350f] py-8">
          <div className="max-w-[700px] mx-auto">
            <div className="max-w-4xl mx-auto bg-white shadow-md p-8">
              <div className="mb-4 text-lg font-semibold text-[#353c4a]">
                {translations.services.title}
              </div>
              <div className="text-gray-700 leading-relaxed">
                {translations.services.description}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section for SEO */}
        {locale === 'fa' && (
          <section className="w-full py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-[#353c4a] mb-4">
                  سوالات متداول درباره توان صنعت آینده ایرانیان
                </h2>
                <p className="text-gray-600">
                  پاسخ سوالات رایج درباره خدمات و محصولات توان صنعت
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-[#353c4a] mb-3">
                      توان صنعت آینده ایرانیان چه خدماتی ارائه می‌دهد؟
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>توان صنعت آینده ایرانیان</strong> خدمات تخصصی طراحی، مشاوره، تأمین و نصب آنالایزرهای آنلاین گاز، آب، پساب و هوا را ارائه می‌دهد. همچنین خدمات کالیبراسیون و نگهداری تجهیزات زیست محیطی از جمله فعالیت‌های اصلی این شرکت است.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-[#353c4a] mb-3">
                      آدرس و شماره تماس توان صنعت کجاست؟
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>توان صنعت آینده ایرانیان</strong> در تهران، خیابان آزادی، خیابان کارون شمالی، کوچه سید عباسی، پلاک 18، واحد 2 واقع شده است. شماره تلفن: 021-66859042 و موبایل: 09120628762
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-[#353c4a] mb-3">
                      توان صنعت با چه صنایعی همکاری می‌کند؟
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>توان صنعت آینده ایرانیان</strong> با صنایع فلزی و فولاد، صنایع نفت، گاز و پتروشیمی، نیروگاه‌ها، کشت و صنعت، سازمان حفاظت محیط زیست، آب و فاضلاب، سیمان و مراکز بهداشتی و دانشگاهی همکاری دارد.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-[#353c4a] mb-3">
                      آنالایزرهای توان صنعت چه ویژگی‌هایی دارند؟
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      آنالایزرهای <strong>توان صنعت آینده ایرانیان</strong> شامل آنالایزرهای گاز دودکش، آنالایزرهای غبار محیط، آنالایزرهای گاز محیط و آنالایزرهای GC می‌باشند که با دقت بالا و قابلیت اطمینان مناسب طراحی شده‌اند.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-[#353c4a] mb-3">
                      آیا توان صنعت گواهینامه‌های معتبر دارد؟
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      بله، <strong>توان صنعت آینده ایرانیان</strong> دارای گواهینامه‌های ISO 9001:2008، ISO 14001:2004 و OHSAS 18001:2007 می‌باشد که نشان‌دهنده کیفیت و استانداردهای بالای خدمات این شرکت است.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-[#353c4a] mb-3">
                      چگونه با توان صنعت تماس بگیرم؟
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      برای تماس با <strong>توان صنعت آینده ایرانیان</strong> می‌توانید از طریق تلفن 021-66859042، موبایل 09120628762 یا ایمیل CRM@tsai-co.com با ما در ارتباط باشید. همچنین می‌توانید به آدرس تهران، خیابان آزادی، خیابان کارون شمالی مراجعه کنید.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      <footer className="bg-gray-50">
        <div className="py-24">
          <div className="max-w-[700px] mx-auto">
            <div className="footer-box bg-white text-[#353c4a] shadow-md">
              <div className="">
                <div className="w-full h-4 bg-[#669c27]"></div>
                <div className="p-4">
                  <h3 className="font-bold text-center text-3xl text-[#353c4a] mb-4 py-2">
                    {translations.contact.title}
                  </h3>
                  
                  {/* SEO-friendly company description in footer */}
                  {locale === 'fa' && (
                    <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold text-lg mb-2 text-[#353c4a]">
                        درباره توان صنعت آینده ایرانیان
                      </h4>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        <strong>توان صنعت آینده ایرانیان</strong> یکی از پیشروترین شرکت‌های ایرانی در زمینه 
                        طراحی، مشاوره، تأمین و نصب آنالایزرهای آنلاین گاز، آب، پساب و هوا می‌باشد. 
                        این شرکت با تکیه بر دانش فنی و تجربه‌های ارزشمند، خدمات تخصصی کالیبراسیون 
                        و نگهداری تجهیزات زیست محیطی را به صنایع مختلف ارائه می‌دهد.
                      </p>
                    </div>
                  )}
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="w-full lg:w-1/2">
                      <div className="flex gap-2 mb-3">
                        <div>{translations.contact.phone}</div>
                        <div 
                          className="cursor-pointer hover:text-[#669c27] transition-colors duration-200"
                          onClick={() => window.open(`tel:${translations.contact.phoneNumber}`, '_self')}
                        >
                          {translations.contact.phoneNumber}
                        </div>
                      </div>
                      <div className="flex gap-2 mb-3">
                        <div>{translations.contact.mobile}</div>
                        <div 
                          className="cursor-pointer hover:text-[#669c27] transition-colors duration-200"
                          onClick={() => window.open(`tel:${translations.contact.mobileNumber}`, '_self')}
                        >
                          {translations.contact.mobileNumber}
                        </div>
                      </div>
                      <div className="flex gap-2 mb-3">
                        <div>{translations.contact.email}</div>
                        <div 
                          className="cursor-pointer hover:text-[#669c27] transition-colors duration-200"
                          onClick={() => window.open(`mailto:${translations.contact.emailAddress}`, '_self')}
                        >
                          {translations.contact.emailAddress}
                        </div>
                      </div>
                      <div className="flex gap-2 mb-3 ">
                        <div>{translations.contact.address}</div>
                        <div className="flex items-center gap-2">
                          <span>{translations.contact.addressText}</span>
                        </div>
                      </div>
                    </div>
                    <div className="w-full lg:w-1/2">
                      <a
                        href="https://www.google.com/maps?q=35.6960,51.3675"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block cursor-pointer hover:opacity-90 transition-opacity duration-300"
                        title={locale === 'fa' ? 'کلیک کنید تا در نقشه باز شود' : 'Click to open in map'}
                      >
                        <div className="relative w-full h-[300px] bg-gray-200 overflow-hidden border border-gray-300">
                          <Image
                            src="/images/my-location.jpg"
                            alt={locale === 'fa' ? 'موقعیت مکانی' : 'Location'}
                            fill
                            className="object-cover"
                            priority
                          />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 border-[#82c534] border-3  text-white shadow-lg transition-all duration-300 hover:scale-110 z-50 flex items-center justify-center"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" color="#82c534" />
      </button>
    </div>
  );
}
