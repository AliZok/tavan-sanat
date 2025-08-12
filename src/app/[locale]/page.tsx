'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  BarChart,
  Cloud,
  Cpu,
  Globe,
  ChevronRight,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ChevronUp,
  ArrowUp,
  Phone,
  ChevronDown,
} from 'lucide-react';
import { useParams } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { getTranslations, getDirection, type Locale } from '../../lib/i18n';
import LanguageSwitcher from '../../components/LanguageSwitcher';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Component() {
  const params = useParams();
  const locale = (params.locale as Locale) || 'en';
  const translations = getTranslations(locale);
  const direction = getDirection(locale);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const productsDropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        productsDropdownRef.current &&
        !productsDropdownRef.current.contains(event.target as Node)
      ) {
        setIsProductsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 lg:px-6 h-16 flex items-center bg-[#ffffffe0] shadow-lg">
        <Link
          href={`/${locale}`}
          className="flex items-center justify-center"
          prefetch={false}
        >
          {/* <Cloud className="h-8 w-8 text-[#669c27] animate-pulse" /> */}
          <Image
            src="/my-logo.png"
            alt={translations.header.brand}
            width={32}
            height={32}
            className="h-8 w-8"
          />
          <span className="sr-only">{translations.header.brand}</span>
          <span className="ml-3 text-xl font-extrabold text-[#353c4a] tracking-tight">
            {translations.header.brand}
          </span>
        </Link>
        <nav className="ml-auto flex gap-6 sm:gap-8 items-center">
          <Link
            href={`/${locale}`}
            className="relative text-sm font-semibold hover:text-[#669c27] transition-colors duration-300 text-[#353c4a] group"
            prefetch={false}
          >
            {translations.header.nav.home}
            <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[#669c27] transition-all duration-300 ease-out group-hover:w-full"></span>
          </Link>
          <div className="relative" ref={productsDropdownRef}>
            <button
              onClick={() => setIsProductsOpen(!isProductsOpen)}
              className="relative text-sm font-semibold hover:text-[#669c27] transition-colors duration-300 text-[#353c4a] group flex items-center gap-1"
            >
              {translations.header.nav.products}
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${isProductsOpen ? 'rotate-180' : ''}`}
              />
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[#669c27] transition-all duration-300 ease-out group-hover:w-full"></span>
            </button>

            {/* Products Dropdown Menu */}
            {isProductsOpen && (
              <>
                {/* Dropdown Arrow */}
                <div className="absolute top-full left-6 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-white z-50"></div>
                <div className="absolute top-full left-6 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-gray-200 z-40"></div>

                <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-xl border border-gray-200 py-2 z-50 dropdown-enter md:w-64 w-48 backdrop-blur-sm bg-white/95">
                  <Link
                    href={`/${locale}/products`}
                    className="block px-4 py-2 text-sm font-semibold text-[#669c27] hover:bg-[#669c27]/10 transition-all duration-200 border-l-2 border-[#669c27]"
                    onClick={() => setIsProductsOpen(false)}
                  >
                    View All Products
                  </Link>
                  <div className="border-t border-gray-200 my-2"></div>
                  <Link
                    href={`/${locale}/products/1`}
                    className="block px-4 py-2 text-sm text-[#353c4a] hover:bg-[#669c27]/10 hover:text-[#669c27] transition-all duration-200 border-l-2 border-transparent hover:border-[#669c27]"
                    onClick={() => setIsProductsOpen(false)}
                  >
                    {translations.products.flueGasAnalyzer}
                  </Link>
                  <div className="relative group">
                    <div className="block px-4 py-2 text-sm text-[#353c4a] hover:bg-[#669c27]/10 hover:text-[#669c27] transition-all duration-200 border-l-2 border-transparent hover:border-[#669c27] cursor-pointer">
                      {translations.products.flueDustAnalyzer}
                      {/* Submenu arrow - positioned based on locale */}
                      <div
                        className={`absolute top-1/2 transform -translate-y-1/2 w-0 h-0 border-2 border-transparent ${
                          locale === 'en'
                            ? 'right-3 border-l-4 border-l-gray-400'
                            : 'left-3 border-r-4 border-r-gray-400'
                        }`}
                      ></div>
                    </div>
                    {/* Sub-items dropdown - positioned based on locale: left for English, right for Farsi */}
                    <div
                      className={`absolute top-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50
                      ${
                        locale === 'en'
                          ? 'lg:right-full lg:mr-2 md:right-full md:mr-2'
                          : 'lg:left-full lg:ml-2 md:left-full md:ml-2'
                      }
                      lg:top-0 lg:w-48
                      md:top-0 md:w-40
                      sm:left-0 sm:top-full sm:mt-1 sm:w-full
                      bg-white shadow-xl border border-gray-200 py-2`}
                    >
                      {/* Submenu arrow - positioned based on locale */}
                      <div
                        className={`absolute top-4 w-0 h-0 border-4 border-transparent ${
                          locale === 'en'
                            ? 'lg:right-0 lg:mr-[-8px] lg:border-l-4 lg:border-l-white md:right-0 md:mr-[-8px] md:border-l-4 md:border-l-white'
                            : 'lg:left-0 lg:ml-[-8px] lg:border-r-4 lg:border-r-white md:left-0 md:ml-[-8px] md:border-r-4 md:border-r-white'
                        }`}
                      ></div>
                      <div
                        className={`absolute top-4 w-0 h-0 border-4 border-transparent ${
                          locale === 'en'
                            ? 'lg:right-0 lg:mr-[-9px] lg:border-l-4 lg:border-l-gray-200 md:right-0 md:mr-[-9px] md:border-l-4 md:border-l-gray-200'
                            : 'lg:left-0 lg:ml-[-9px] lg:border-r-4 lg:border-r-gray-200 md:left-0 md:ml-[-9px] md:border-r-4 md:border-r-gray-200'
                        }`}
                      ></div>
                      <Link
                        href={`/${locale}/products/2`}
                        className="block px-4 py-2 text-sm text-[#353c4a] hover:bg-[#669c27]/10 hover:text-[#669c27] transition-all duration-200 border-l-2 border-transparent hover:border-[#669c27]"
                        onClick={() => setIsProductsOpen(false)}
                      >
                        {translations.products.flueDustAnalyzerSubItems.laser}
                      </Link>
                      <Link
                        href={`/${locale}/products/6`}
                        className="block px-4 py-2 text-sm text-[#353c4a] hover:bg-[#669c27]/10 hover:text-[#669c27] transition-all duration-200 border-l-2 border-transparent hover:border-[#669c27]"
                        onClick={() => setIsProductsOpen(false)}
                      >
                        {translations.products.flueDustAnalyzerSubItems.tiribo}
                      </Link>
                    </div>
                  </div>
                  <Link
                    href={`/${locale}/products/3`}
                    className="block px-4 py-2 text-sm text-[#353c4a] hover:bg-[#669c27]/10 hover:text-[#669c27] transition-all duration-200 border-l-2 border-transparent hover:border-[#669c27]"
                    onClick={() => setIsProductsOpen(false)}
                  >
                    {translations.products.ambientGasAnalyzer}
                  </Link>
                  <Link
                    href={`/${locale}/products/4`}
                    className="block px-4 py-2 text-sm text-[#353c4a] hover:bg-[#669c27]/10 hover:text-[#669c27] transition-all duration-200 border-l-2 border-transparent hover:border-[#669c27]"
                    onClick={() => setIsProductsOpen(false)}
                  >
                    {translations.products.ambientDustAnalyzer}
                  </Link>
                  <Link
                    href={`/${locale}/products/5`}
                    className="block px-4 py-2 text-sm text-[#353c4a] hover:bg-[#669c27]/10 hover:text-[#669c27] transition-all duration-200 border-l-2 border-transparent hover:border-[#669c27]"
                    onClick={() => setIsProductsOpen(false)}
                  >
                    {translations.products.gcAnalyzer}
                  </Link>
                </div>
              </>
            )}
          </div>
          <Link
            href="#"
            className="relative text-sm font-semibold hover:text-[#669c27] transition-colors duration-300 text-[#353c4a] group"
            prefetch={false}
          >
            {translations.header.nav.services}
            <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[#669c27] transition-all duration-300 ease-out group-hover:w-full"></span>
          </Link>
          <Link
            href="#"
            className="relative text-sm font-semibold hover:text-[#669c27] transition-colors duration-300 text-[#353c4a] group"
            prefetch={false}
          >
            {translations.header.nav.contact}
            <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[#669c27] transition-all duration-300 ease-out group-hover:w-full"></span>
          </Link>
          <button
            onClick={() => (window.location.href = 'tel:02166859042')}
            className="flex items-center justify-center w-9 h-9 bg-[#669c27] text-white hover:bg-[#5a8a22] transition-colors duration-300 shadow-md"
            aria-label="Call us"
          >
            <Phone className="w-5 h-5" />
          </button>
          <LanguageSwitcher currentLocale={locale} />
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex-1 pt-16">
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
                WELCOME TO
              </h1>
              <h2 className="text-[47px] font-extrabold tracking-tighter text-white leading-tight animate-fade-in-up delay-200 mb-6">
                TAVAN SANATE AYANDE IRANIAN
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
      </main>

      <footer className="bg-gray-50">
        <div className="py-24">
          <div className="max-w-[700px] mx-auto">
            <div className="footer-box bg-white text-[#353c4a] shadow-md">
              <div className="">
                <div className="w-full h-4 bg-[#669c27]"></div>
                <div className="p-4">
                  <h3 className="font-bold text-3xl text-[#353c4a] mb-4 py-2">
                    {translations.contact.title}
                  </h3>
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="w-full lg:w-1/2">
                      <div className="flex gap-2 mb-3">
                        <div>{translations.contact.phone}</div>
                        <div>{translations.contact.phoneNumber}</div>
                      </div>
                      <div className="flex gap-2 mb-3">
                        <div>{translations.contact.mobile}</div>
                        <div>{translations.contact.mobileNumber}</div>
                      </div>
                      <div className="flex gap-2 mb-3">
                        <div>{translations.contact.email}</div>
                        <div>{translations.contact.emailAddress}</div>
                      </div>
                      <div className="flex gap-2 mb-3 ">
                        <div>{translations.contact.address}</div>
                        <div className="flex items-center gap-2">
                          <span>{translations.contact.addressText}</span>
                        </div>
                      </div>
                    </div>
                    <div className="w-full lg:w-1/2">
                      <div className="relative w-full h-[300px] bg-gray-200 overflow-hidden border border-gray-300">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d207444.47121066667!2d51.3890!3d35.6892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e00491ff3dcd9%3A0xf0b3697c567024bc!2sTehran%2C%20Iran!5e0!3m2!1sen!2s!4v1234567890"
                          width="100%"
                          height="100%"
                          style={{ border: 0 }}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          className="w-full h-full"
                        ></iframe>
                        <a
                          href="https://maps.google.com/?q=Tehran,Iran"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10"
                          title="View on map"
                        >
                          <div className="w-6 h-6 bg-red-500 border-2 border-white shadow-lg flex items-center justify-center hover:bg-red-600 transition-colors duration-200">
                            <div className="w-2 h-2 bg-white"></div>
                          </div>
                        </a>
                      </div>
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
        className="fixed bottom-8 right-8 w-12 h-12 border-[#669c27] border-3  text-white shadow-lg transition-all duration-300 hover:scale-110 z-50 flex items-center justify-center"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" color="#669c27" />
      </button>
    </div>
  );
}
