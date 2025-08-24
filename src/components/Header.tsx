'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Phone } from 'lucide-react';
import { useParams } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { getTranslations, getDirection, type Locale } from '../lib/i18n';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 lg:px-6 h-16 flex items-center bg-[#ffffffe0] shadow-lg">
      <Link
        href={`/${locale}`}
        className="flex items-center justify-center"
        prefetch={false}
      >
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
                  {translations.products.viewAll}
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
                      className={`absolute top-1/2 transform -translate-y-1/2 w-0 h-0 ${
                        locale === 'en'
                          ? 'left-3 border-r-4 border-r-gray-400'
                          : 'left-3 border-r-4 border-r-gray-400'
                      }`}
                    ></div>
                  </div>
                  {/* Sub-items dropdown - positioned based on locale with smart positioning */}
                  <div
                    className={`absolute top-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 w-40 bg-white shadow-xl border border-gray-200 py-2 ${
                      locale === 'en' ? 'left-full ml-2' : 'left-full ml-2'
                    }`}
                  >
                    {/* Submenu arrow pointing based on locale */}
                    <div
                      className={`absolute top-4 w-0 h-0 ${
                        locale === 'en'
                          ? 'left-0 ml-[-8px] border-r-4 border-r-white'
                          : 'left-0 ml-[-8px] border-r-4 border-r-white'
                      }`}
                    ></div>
                    <div
                      className={`absolute top-4 w-0 h-0 ${
                        locale === 'en'
                          ? 'left-0 ml-[-9px] border-r-4 border-r-gray-200'
                          : 'left-0 ml-[-9px] border-r-4 border-r-gray-200'
                      }`}
                    ></div>
                    <Link
                      href={`/${locale}/products/2`}
                      className="block px-4 py-2 text-sm text-[#353c4a] hover:bg-[#669c27]/10 hover:text-[#669c27] transition-all duration-200"
                      onClick={() => setIsProductsOpen(false)}
                    >
                      {translations.products.flueDustAnalyzerSubItems.laser}
                    </Link>
                    <Link
                      href={`/${locale}/products/6`}
                      className="block px-4 py-2 text-sm text-[#353c4a] hover:bg-[#669c27]/10 hover:text-[#669c27] transition-all duration-200"
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
                <div className="relative group">
                  <div className="block px-4 py-2 text-sm text-[#353c4a] hover:bg-[#669c27]/10 hover:text-[#669c27] transition-all duration-200 border-l-2 border-transparent hover:border-[#669c27] cursor-pointer">
                    {translations.products.ambientDustAnalyzer}
                    {/* Submenu arrow - positioned based on locale */}
                    <div
                      className={`absolute top-1/2 transform -translate-y-1/2 w-0 h-0 ${
                        locale === 'en'
                          ? 'left-3 border-r-4 border-r-gray-400'
                          : 'left-3 border-r-4 border-r-gray-400'
                      }`}
                    ></div>
                  </div>
                  {/* Sub-items dropdown - positioned based on locale with smart positioning */}
                  <div
                    className={`absolute top-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 w-40 bg-white shadow-xl border border-gray-200 py-2 ${
                      locale === 'en' ? 'left-full ml-2' : 'left-full ml-2'
                    }`}
                  >
                    {/* Submenu arrow pointing based on locale */}
                    <div
                      className={`absolute top-4 w-0 h-0 ${
                        locale === 'en'
                          ? 'left-0 ml-[-8px] border-r-4 border-r-white'
                          : 'left-0 ml-[-8px] border-r-4 border-r-white'
                      }`}
                    ></div>
                    <div
                      className={`absolute top-4 w-0 h-0 ${
                        locale === 'en'
                          ? 'left-0 ml-[-9px] border-r-4 border-r-gray-200'
                          : 'left-0 ml-[-9px] border-r-4 border-r-gray-200'
                      }`}
                    ></div>
                    <Link
                      href={`/${locale}/products/8`}
                      className="block px-4 py-2 text-sm text-[#353c4a] hover:bg-[#669c27]/10 hover:text-[#669c27] transition-all duration-200"
                      onClick={() => setIsProductsOpen(false)}
                    >
                      {
                        translations.products.ambientDustAnalyzerSubItems
                          .faiSwam5a
                      }
                    </Link>
                    <Link
                      href={`/${locale}/products/9`}
                      className="block px-4 py-2 text-sm text-[#353c4a] hover:bg-[#669c27]/10 hover:text-[#669c27] transition-all duration-200"
                      onClick={() => setIsProductsOpen(false)}
                    >
                      {
                        translations.products.ambientDustAnalyzerSubItems
                          .metoneBAM1020
                      }
                    </Link>
                  </div>
                </div>
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
  );
}
