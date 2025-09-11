'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock, ArrowUp } from 'lucide-react';
import { useParams } from 'next/navigation';
import { getTranslations, getDirection, type Locale } from '../../../lib/i18n';
import Header from '../../../components/Header';

export default function ContactPage() {
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

  return (
    <div className="flex flex-col min-h-screen" dir={direction}>
      <Header />

      {/* Hero Section - Half Image, Half Text */}
      <main className="flex-1 pt-18">
        <section className="w-full flex flex-col lg:flex-row min-h-[100vh]">
          {/* Image Half */}
          <div className="w-full lg:w-1/2 h-[50vh] lg:h-auto relative overflow-hidden">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: "url('/images/Oil-refinery-flare.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            ></div>
            {/* Green diagonal line overlay */}
            <div className="absolute inset-0 z-10">
              <div className="absolute bottom-0 left-0 w-full h-2 bg-[#669c27] transform -skew-y-1"></div>
            </div>
          </div>

          {/* Text Half */}
          <div className="w-full lg:w-1/2 bg-white flex items-center justify-center p-8 md:p-12 min-h-[50vh] lg:min-h-full">
            <div className="max-w-lg text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tighter text-gray-900 leading-tight mb-6">
                {locale === 'fa' ? 'تماس با ما' : 'CONTACT US'}
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed mb-8">
                {locale === 'fa' 
                  ? 'با تیم متخصص ما در تماس باشید و از خدمات حرفه‌ای ما بهره‌مند شوید.'
                  : 'Get in touch with our expert team and benefit from our professional services'
                }
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:09120628762"
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#669c27] text-white font-semibold rounded-none hover:bg-[#5a8a22] transition-colors duration-300"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  {locale === 'fa' ? 'تماس مستقیم' : 'Call Now'}
                </a>
                <a
                  href={`mailto:${translations.contact.emailAddress}`}
                  className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-[#669c27] text-[#669c27] font-semibold rounded-none hover:bg-[#669c27] hover:text-white transition-colors duration-300"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  {locale === 'fa' ? 'ارسال ایمیل' : 'Send Email'}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="w-full py-16 md:py-24 bg-gray-50 text-gray-900">
          <div className="container px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Contact Details */}
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-bold mb-6 text-gray-900">
                      {locale === 'fa' ? 'اطلاعات تماس' : 'Contact Information'}
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-8">
                      {locale === 'fa' 
                        ? 'تیم ما آماده پاسخگویی به سوالات شما و ارائه خدمات حرفه‌ای در زمینه تجهیزات صنعتی و تحلیل گاز است.'
                        : 'Our team is ready to answer your questions and provide professional services in the field of industrial equipment and gas analysis.'
                      }
                    </p>
                  </div>

                  {/* Contact Cards */}
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4 p-6 bg-white border border-gray-200 hover:shadow-md transition-all duration-300 min-h-[120px] md:min-h-[140px]">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#669c27] rounded-none flex items-center justify-center">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {locale === 'fa' ? 'تلفن' : 'Phone'}
                        </h3>
                        <p className="text-gray-700">
                          {translations.contact.phoneNumber}
                        </p>
                        <p className="text-gray-700">
                          {translations.contact.mobileNumber}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 p-6 bg-white border border-gray-200 hover:shadow-md transition-all duration-300 min-h-[120px] md:min-h-[140px]">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#669c27] rounded-none flex items-center justify-center">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {locale === 'fa' ? 'ایمیل' : 'Email'}
                        </h3>
                        <p className="text-gray-700">
                          {translations.contact.emailAddress}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 p-6 bg-white border border-gray-200 hover:shadow-md transition-all duration-300 min-h-[120px] md:min-h-[140px]">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#669c27] rounded-none flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {locale === 'fa' ? 'آدرس' : 'Address'}
                        </h3>
                        <p className="text-gray-700">
                          {translations.contact.addressText}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 p-6 bg-white border border-gray-200 hover:shadow-md transition-all duration-300 min-h-[120px] md:min-h-[140px]">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#669c27] rounded-none flex items-center justify-center">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {locale === 'fa' ? 'ساعات کاری' : 'Working Hours'}
                        </h3>
                        <p className="text-gray-700">
                          {locale === 'fa' 
                            ? 'شنبه تا پنج‌شنبه: 8:00 - 17:00'
                            : 'Saturday to Thursday: 8:00 AM - 5:00 PM'
                          }
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Location Image Section */}
                <div className="relative">
                  <div className="relative w-full h-[500px] bg-gray-200 overflow-hidden border border-gray-300 rounded-none">
                    <Image
                      src="/images/loc-img.png"
                      alt={locale === 'fa' ? 'موقعیت مکانی' : 'Location'}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Call to Action Section */}
        <section className="w-full py-16 bg-[#669c27] text-white">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                {locale === 'fa' ? 'آماده همکاری با شما هستیم' : 'Ready to Work With You'}
              </h2>
              <p className="text-xl mb-8 text-green-100">
                {locale === 'fa' 
                  ? 'برای مشاوره رایگان و دریافت اطلاعات بیشتر با ما تماس بگیرید'
                  : 'Contact us for free consultation and more information'
                }
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:09120628762"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#669c27] font-semibold rounded-none hover:bg-gray-100 transition-colors duration-300"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  {locale === 'fa' ? 'تماس مستقیم' : 'Call Now'}
                </a>
                <a
                  href={`mailto:${translations.contact.emailAddress}`}
                  className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-none hover:bg-white hover:text-[#669c27] transition-colors duration-300"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  {locale === 'fa' ? 'ارسال ایمیل' : 'Send Email'}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 border-[#669c27] border-3 text-white shadow-lg transition-all duration-300 hover:scale-110 z-50 flex items-center justify-center bg-[#669c27] hover:bg-[#5a8a22]"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </div>
  );
}
