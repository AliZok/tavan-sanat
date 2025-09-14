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
import { useState, useEffect } from 'react';
import { getTranslations, getDirection, type Locale } from '../../lib/i18n';
import Header from '../../components/Header';
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
                  <h3 className="font-bold text-center text-3xl text-[#353c4a] mb-4 py-2">
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
                        <Image
                          src="/images/my-location.jpg"
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
