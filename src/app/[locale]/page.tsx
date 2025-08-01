'use client';

import Link from "next/link"
import Image from "next/image"
import { BarChart, Cloud, Cpu, Globe, ChevronRight, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import { useParams } from 'next/navigation';
import { useState } from 'react';
import { getTranslations, getDirection, type Locale } from '../../lib/i18n';
import LanguageSwitcher from '../../components/LanguageSwitcher';

export default function Component() {
  const params = useParams();
  const locale = (params.locale as Locale) || 'en';
  const translations = getTranslations(locale);
  const direction = getDirection(locale);

  return (
    <div className="flex flex-col min-h-screen" dir={direction}>
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center bg-gradient-to-r from-white to-[#669c27]/5 shadow-lg">
        <Link href="/" className="flex items-center justify-center" prefetch={false}>
          {/* <Cloud className="h-8 w-8 text-[#669c27] animate-pulse" /> */}
          <Image
            src="/my-logo.png"
            alt={translations.header.brand}
            width={32}
            height={32}
            className="h-8 w-8"
          />
          <span className="sr-only">{translations.header.brand}</span>
          <span className="ml-3 text-xl font-extrabold text-[#353c4a] tracking-tight">{translations.header.brand}</span>
        </Link>
        <nav className="ml-auto flex gap-6 sm:gap-8 items-center">
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
            {translations.header.nav.about}
          </Link>
          <Link
            href="#"
            className="text-sm font-semibold hover:text-[#669c27] transition-colors duration-300 text-[#353c4a]"
            prefetch={false}
          >
            {translations.header.nav.technology}
          </Link>
          <Link
            href="#"
            className="text-sm font-semibold hover:text-[#669c27] transition-colors duration-300 text-[#353c4a]"
            prefetch={false}
          >
            {translations.header.nav.contact}
          </Link>
          <LanguageSwitcher currentLocale={locale} />
          <button className="inline-flex h-10 items-center justify-center bg-[#669c27] px-6 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:bg-[--color-dark-green] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#669c27] focus:ring-offset-2">
            {translations.header.cta}
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex-1">
        <section className="w-full py-6 md:py-12 lg:py-16 xl:py-22 bg-gradient-to-br from-[#669c27]/5 to-white relative overflow-hidden">
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{ 
              backgroundImage: "url('/blue-industry3.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              opacity: 0.2,
              zIndex: 1
            }}
          ></div>
          
          <div className="container px-4 md:px-6 grid gap-8 lg:grid-cols-[1fr_550px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center relative z-10">
            <div className="flex flex-col justify-center space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl font-extrabold tracking-tighter sm:text-6xl xl:text-7xl/none text-[#353c4a] leading-tight animate-fade-in-up mb-4" dangerouslySetInnerHTML={{ __html: translations.hero.title }}>
                </h1>
                <p className="max-w-[700px] text-[#353c4a] md:text-xl/relaxed lg:text-lg/relaxed xl:text-xl/relaxed animate-fade-in-up delay-200">
                  {translations.hero.subtitle}
                </p>
              </div>
              <div className="flex flex-col gap-4 min-[400px]:flex-row animate-fade-in-up delay-400">
                <button className="inline-flex h-12 items-center justify-center bg-[#669c27] px-8 text-base font-semibold text-white shadow-xl transition-all duration-300 hover:bg-[--color-dark-green] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#669c27] focus:ring-offset-2">
                  {translations.hero.buttons.discover} <ChevronRight className="ml-2 h-5 w-5" />
                </button>
                <button className="inline-flex h-12 items-center justify-center bg-white px-8 text-base font-semibold shadow-lg transition-all duration-300 hover:bg-[--color-secondary-blue]/10 hover:text-[--color-dark-blue] focus:outline-none focus:ring-2 focus:ring-[--color-secondary-blue] focus:ring-offset-2 text-[--color-secondary-blue]">
                  {translations.hero.buttons.demo}
                </button>
              </div>
            </div>
            <div className="relative mx-auto aspect-[3/2] overflow-hidden sm:w-full lg:order-last lg:aspect-[4/3] shadow-2xl animate-fade-in-right">
              <Image
                src="/blue-industry.jpg"
                width="750"
                height="500"
                alt="Air Quality Monitoring - Industrial Environment"
                className="w-full h-full object-cover"
              />
              
                             {/* Animated Graphic Shape - Diamond */}
               <div className="absolute inset-0 flex items-center justify-center opacity-0" style={{ animationDelay: '0.6s', animation: 'fadeIn 0.1s ease-out forwards' }}>
                 <div className="relative w-96 h-96 animate-scale-in-with-opacity delay-600 diamond-container">
                   {/* Outer Diamond */}
                   <div className="absolute inset-0 transform rotate-45 border-8 border-[#669c27] bg-transparent animate-diamond-pulse"></div>
                   
                   {/* Inner Diamond */}
                   <div className="absolute inset-8 transform rotate-45 border-4 border-white bg-transparent"></div>
                   
                   {/* Animated Slogan */}
                   <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 diamond-text">
                     <div className="text-center">
                       <h3 className="text-3xl font-bold mb-2 animate-slide-in-top delay-800 animate-text-glow">
                         WELCOME TO
                       </h3>
                       <h2 className="text-4xl font-extrabold animate-slide-up delay-1000 animate-text-glow">
                         TAVAN SANAT
                       </h2>
                       <p className="text-lg font-semibold mt-2 animate-fade-in-slow delay-1200 animate-text-glow">
                         Engineering Excellence
                       </p>
                     </div>
                   </div>
                 </div>
               </div>
              
              
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-16 md:py-28 lg:py-36 bg-gradient-to-b from-gray-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <div className="space-y-3">
                <h2 className="text-4xl font-extrabold tracking-tighter sm:text-5xl text-[#353c4a]">
                  {translations.features.title}
                </h2>
                <p className="max-w-[900px] text-[#353c4a] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {translations.features.subtitle}
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl items-stretch gap-10 sm:grid-cols-2 md:gap-14 lg:grid-cols-3 mt-16">
              <div className="flex flex-col items-center justify-between p-8 text-center shadow-xl border border-[#669c27]/20 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white h-full">
                <div className="flex flex-col items-center">
                  <BarChart className="h-14 w-14 text-[#669c27] mb-5 animate-bounce-in" />
                  <h3 className="text-2xl font-bold text-[#353c4a]">{translations.features.items.data.title}</h3>
                </div>
                <p className="text-[#353c4a] text-base mt-4">
                  {translations.features.items.data.description}
                </p>
              </div>
              <div className="flex flex-col items-center justify-between p-8 text-center shadow-xl border border-[#669c27]/20 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white h-full">
                <div className="flex flex-col items-center">
                  <Cpu className="h-14 w-14 text-[#669c27] mb-5 animate-bounce-in delay-100" />
                  <h3 className="text-2xl font-bold text-[#353c4a]">{translations.features.items.analytics.title}</h3>
                </div>
                <p className="text-[#353c4a] text-base mt-4">
                  {translations.features.items.analytics.description}
                </p>
              </div>
              <div className="flex flex-col items-center justify-between p-8 text-center shadow-xl border border-[#669c27]/20 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white h-full">
                <div className="flex flex-col items-center">
                  <Globe className="h-14 w-14 text-[#669c27] mb-5 animate-bounce-in delay-200" />
                  <h3 className="text-2xl font-bold text-[#353c4a]">{translations.features.items.impact.title}</h3>
                </div>
                <p className="text-[#353c4a] text-base mt-4">
                  {translations.features.items.impact.description}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About/Mission Section */}
        <section className="w-full py-16 md:py-28 lg:py-36 bg-gradient-to-r from-white to-[#669c27]/10">
          <div className="container px-4 md:px-6 grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
            <Image
              src="/blue-industry23.jpg"
              width="750"
              height="500"
              alt="About Us - Advanced Technology"
              className="mx-auto aspect-[3/2] overflow-hidden object-cover object-center sm:w-full shadow-2xl animate-fade-in-left"
            />
            <div className="flex flex-col justify-center space-y-6">
              <div className="space-y-4">
                <h2 className="text-4xl font-extrabold tracking-tighter sm:text-5xl text-[#353c4a]">
                  {translations.mission.title}
                </h2>
                <p className="max-w-[700px] text-[#353c4a] md:text-xl/relaxed lg:text-lg/relaxed xl:text-xl/relaxed">
                  {translations.mission.description}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-28 lg:py-36 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <div className="space-y-3">
                <h2 className="text-4xl font-extrabold tracking-tighter sm:text-5xl text-[#353c4a]">
                  {translations.process.title}
                </h2>
                <p className="max-w-[900px] text-[#353c4a] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {translations.process.subtitle}
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl items-stretch gap-10 sm:grid-cols-2 md:gap-14 lg:grid-cols-3 mt-16">
              <div className="flex flex-col items-center justify-between text-center p-6 bg-white shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-xl h-full">
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center h-16 w-16 bg-[#669c27]/10 text-[#669c27] mb-6">
                    <Cloud className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-[#353c4a] mb-2">{translations.process.steps.deployment.title}</h3>
                </div>
                <p className="text-[#353c4a]">
                  {translations.process.steps.deployment.description}
                </p>
              </div>
              <div className="flex flex-col items-center justify-between text-center p-6 bg-white shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-xl h-full">
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center h-16 w-16 bg-[#669c27]/10 text-[#669c27] mb-6">
                    <BarChart className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-[#353c4a] mb-2">{translations.process.steps.analysis.title}</h3>
                </div>
                <p className="text-[#353c4a]">
                  {translations.process.steps.analysis.description}
                </p>
              </div>
              <div className="flex flex-col items-center justify-between text-center p-6 bg-white shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-xl h-full">
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center h-16 w-16 bg-[#669c27]/10 text-[#669c27] mb-6">
                    <Cpu className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-[#353c4a] mb-2">{translations.process.steps.insights.title}</h3>
                </div>
                <p className="text-[#353c4a]">
                  {translations.process.steps.insights.description}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="w-full py-16 md:py-28 lg:py-36 bg-gradient-to-br from-[#669c27] to-[--color-dark-green] text-white shadow-inner">
          <div className="container px-4 md:px-6 flex flex-col items-center justify-center space-y-6 text-center">
            <h2 className="text-4xl font-extrabold tracking-tighter sm:text-5xl lg:text-6xl leading-tight">
              {translations.cta.title}
            </h2>
            <p className="max-w-[800px] text-lg md:text-xl lg:text-2xl opacity-90">
              {translations.cta.subtitle}
            </p>
            <button className="inline-flex h-14 items-center justify-center px-10 text-base font-semibold text-white shadow-xl transition-all duration-300 hover:bg-[#669c27] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[--color-secondary-blue] focus:ring-offset-2">
              {translations.cta.button} <ChevronRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-4 sm:flex-row py-8 w-full shrink-0 items-center px-4 md:px-6 border-t bg-gray-100">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link href="#" className="flex items-center justify-center" prefetch={false}>
            <Cloud className="h-6 w-6 text-[#669c27]" />
            <span className="ml-2 text-lg font-bold text-[#353c4a]">{translations.header.brand}</span>
          </Link>
          <p className="text-sm text-[#353c4a] text-center sm:text-left">
            {translations.footer.copyright}
          </p>
        </div>
        <nav className="sm:ml-auto flex gap-6 sm:gap-8 items-center">
          <Link href="#" className="text-sm hover:underline underline-offset-4 text-[#353c4a]" prefetch={false}>
            {translations.footer.links.terms}
          </Link>
          <Link href="#" className="text-sm hover:underline underline-offset-4 text-[#353c4a]" prefetch={false}>
            {translations.footer.links.privacy}
          </Link>
          <div className="flex gap-4">
            <Link
              href="#"
              className="text-[#353c4a] hover:text-[--color-secondary-blue] transition-colors duration-300"
              aria-label="Facebook"
              prefetch={false}
            >
              <Facebook className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              className="text-[#353c4a] hover:text-[--color-secondary-blue] transition-colors duration-300"
              aria-label="Twitter"
              prefetch={false}
            >
              <Twitter className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              className="text-[#353c4a] hover:text-[--color-secondary-blue] transition-colors duration-300"
              aria-label="LinkedIn"
              prefetch={false}
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              className="text-[#353c4a] hover:text-[--color-secondary-blue] transition-colors duration-300"
              aria-label="Instagram"
              prefetch={false}
            >
              <Instagram className="h-5 w-5" />
            </Link>
          </div>
        </nav>
      </footer>
    </div>
  )
} 