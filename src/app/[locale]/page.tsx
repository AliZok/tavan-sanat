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
} from 'lucide-react';
import { useParams } from 'next/navigation';
import { useState } from 'react';
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
          href="/"
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
            href="#"
            className="text-sm font-semibold hover:text-[#669c27] transition-colors duration-300 text-[#353c4a]"
            prefetch={false}
          >
            {translations.header.nav.home}
          </Link>
          <Link
            href="#"
            className="text-sm font-semibold hover:text-[#669c27] transition-colors duration-300 text-[#353c4a]"
            prefetch={false}
          >
            {translations.header.nav.products}
          </Link>
          <Link
            href="#"
            className="text-sm font-semibold hover:text-[#669c27] transition-colors duration-300 text-[#353c4a]"
            prefetch={false}
          >
            {translations.header.nav.services}
          </Link>
          <Link
            href="#"
            className="text-sm font-semibold hover:text-[#669c27] transition-colors duration-300 text-[#353c4a]"
            prefetch={false}
          >
            {translations.header.nav.contact}
          </Link>
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
                <div className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center">
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

        {/* Brand Logos Section - Third Section */}
        <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-r from-gray-50 to-white">
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
                <div className=" h-28 !flex items-center justify-center w-full bg-white shadow-md rounded-lg mx-2">
                  <Image
                    src="/customers-logo/customer1.jpg"
                    alt="Brand Partner 8"
                    width={192}
                    height={112}
                    className="mx-auto max-w-full max-h-full object-contain transition-all duration-300"
                  />
                </div>
                <div className=" h-28 !flex items-center justify-center w-full bg-white shadow-md rounded-lg mx-2">
                  <Image
                    src="/customers-logo/customer2.jpg"
                    alt="Brand Partner 8"
                    width={192}
                    height={112}
                    className="mx-auto max-w-full max-h-full object-contain transition-all duration-300"
                  />
                </div>
                <div className="h-28 !flex items-center justify-center w-full bg-white shadow-md rounded-lg mx-2">
                  <Image
                    src="/customers-logo/customer3.jpg"
                    alt="Brand Partner 8"
                    width={192}
                    height={112}
                    className="mx-auto max-w-full max-h-full object-contain  transition-all duration-300"
                  />
                </div>
                <div className=" h-28 !flex items-center justify-center w-full bg-white shadow-md rounded-lg mx-2">
                  <Image
                    src="/customers-logo/customer5.jpg"
                    alt="Brand Partner 8"
                    width={192}
                    height={112}
                    className="mx-auto max-w-full max-h-full object-contain  transition-all duration-300"
                  />
                </div>
                <div className=" h-28 !flex items-center justify-center w-full bg-white shadow-md rounded-lg mx-2">
                  <Image
                    src="/customers-logo/customer6.jpg"
                    alt="Brand Partner 8"
                    width={192}
                    height={112}
                    className="mx-auto max-w-full max-h-full object-contain  transition-all duration-300"
                  />
                </div>
                <div className="h-28 !flex items-center justify-center w-full bg-white shadow-md rounded-lg mx-2">
                  <Image
                    src="/customers-logo/customer7.jpg"
                    alt="Brand Partner 8"
                    width={192}
                    height={112}
                    className="mx-auto max-w-full max-h-full object-contain  transition-all duration-300"
                  />
                </div>
                <div className="text-center h-28 !flex items-end justify-center w-full bg-white shadow-md rounded-lg mx-2">
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
      </main>

      <footer className="bg-gray-100">
        <div className="py-24">
          <div className="max-w-[700px] mx-auto">
            <div className="footer-box bg-white">
              <div className="">
                <div className="w-full h-4 bg-[#669c27]"></div>
                <div className="  p-4">
                  <h3 className="font-bold text-3xl text-[#353c4a] mb-4 py-2">
                    ارتباط با ما
                  </h3>
                  <div>
                    <div>
                      <div className="flex gap-2 mb-3">
                        <div>تلفن:</div>
                        <div>021-66859042</div>
                      </div>
                      <div className="flex gap-2 mb-3">
                        <div>ایمیل:</div>
                        <div>CRM@TSAI.COM</div>
                      </div>
                      <div className="flex gap-2 mb-3">
                        <div>آدرس:</div>
                        <div>
                          تهران خیابان آزادی خیابان کارون شمالی کوچه سید عباسی
                          پلاک 18 واحد 2
                        </div>
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
        className="fixed bottom-8 right-8 w-12 h-12 border-[#669c27] border-3  text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50 flex items-center justify-center"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" color="#669c27" />
      </button>
    </div>
  );
}
