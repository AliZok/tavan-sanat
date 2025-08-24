'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Phone, Menu, X } from 'lucide-react';
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
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

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileProductsOpen(false);
  };

  return (
    <>
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

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex ml-auto gap-6 sm:gap-8 items-center">
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

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden ml-auto p-2 text-[#353c4a] hover:text-[#669c27] transition-colors duration-300"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={closeMobileMenu}
        />

        {/* Mobile Menu Panel */}
        <div
          className={`absolute top-16 right-0 w-80 h-full bg-white shadow-2xl transition-all duration-500 ease-out ${
            isMobileMenuOpen
              ? 'translate-x-0 opacity-100'
              : 'translate-x-full opacity-0'
          }`}
        >
          <div className="p-6">
            {/* Mobile Navigation Links */}
            <nav className="space-y-4">
              <Link
                href={`/${locale}`}
                className={`block text-lg font-semibold text-[#353c4a] hover:text-[#669c27] transition-all duration-500 py-3 border-b border-gray-100 transform ${
                  isMobileMenuOpen
                    ? 'translate-x-0 opacity-100'
                    : 'translate-x-8 opacity-0'
                }`}
                style={{
                  transitionDelay: isMobileMenuOpen ? '100ms' : '400ms',
                }}
                onClick={closeMobileMenu}
              >
                {translations.header.nav.home}
              </Link>

              {/* Mobile Products Section */}
              <div
                className={`border-b border-gray-100 pb-3 transform transition-all duration-500 ${
                  isMobileMenuOpen
                    ? 'translate-x-0 opacity-100'
                    : 'translate-x-8 opacity-0'
                }`}
                style={{
                  transitionDelay: isMobileMenuOpen ? '200ms' : '300ms',
                }}
              >
                <button
                  onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                  className="flex items-center justify-between w-full text-lg font-semibold text-[#353c4a] hover:text-[#669c27] transition-colors duration-300 py-3"
                >
                  {translations.header.nav.products}
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-200 ${isMobileProductsOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                {isMobileProductsOpen && (
                  <div className="mt-3 space-y-2 pl-4 animate-in slide-in-from-top-2 duration-300">
                    <Link
                      href={`/${locale}/products`}
                      className="block text-base text-[#669c27] font-semibold py-2 border-l-2 border-[#669c27] pl-3"
                      onClick={closeMobileMenu}
                    >
                      {translations.products.viewAll}
                    </Link>
                    <Link
                      href={`/${locale}/products/1`}
                      className="block text-base text-[#353c4a] hover:text-[#669c27] transition-colors duration-300 py-2 pl-3"
                      onClick={closeMobileMenu}
                    >
                      {translations.products.flueGasAnalyzer}
                    </Link>
                    <div className="pl-3">
                      <div className="text-base text-[#353c4a] py-2 font-medium">
                        {translations.products.flueDustAnalyzer}
                      </div>
                      <div className="pl-4 space-y-1">
                        <Link
                          href={`/${locale}/products/2`}
                          className="block text-sm text-[#353c4a] hover:text-[#669c27] transition-colors duration-300 py-1"
                          onClick={closeMobileMenu}
                        >
                          {translations.products.flueDustAnalyzerSubItems.laser}
                        </Link>
                        <Link
                          href={`/${locale}/products/6`}
                          className="block text-sm text-[#353c4a] hover:text-[#669c27] transition-colors duration-300 py-1"
                          onClick={closeMobileMenu}
                        >
                          {
                            translations.products.flueDustAnalyzerSubItems
                              .tiribo
                          }
                        </Link>
                      </div>
                    </div>
                    <Link
                      href={`/${locale}/products/3`}
                      className="block text-base text-[#353c4a] hover:text-[#669c27] transition-colors duration-300 py-2 pl-3"
                      onClick={closeMobileMenu}
                    >
                      {translations.products.ambientGasAnalyzer}
                    </Link>
                    <div className="pl-3">
                      <div className="text-base text-[#353c4a] py-2 font-medium">
                        {translations.products.ambientDustAnalyzer}
                      </div>
                      <div className="pl-4 space-y-1">
                        <Link
                          href={`/${locale}/products/8`}
                          className="block text-sm text-[#353c4a] hover:text-[#669c27] transition-colors duration-300 py-1"
                          onClick={closeMobileMenu}
                        >
                          {
                            translations.products.ambientDustAnalyzerSubItems
                              .faiSwam5a
                          }
                        </Link>
                        <Link
                          href={`/${locale}/products/9`}
                          className="block text-sm text-[#353c4a] hover:text-[#669c27] transition-colors duration-300 py-1"
                          onClick={closeMobileMenu}
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
                      className="block text-base text-[#353c4a] hover:text-[#669c27] transition-colors duration-300 py-2 pl-3"
                      onClick={closeMobileMenu}
                    >
                      {translations.products.gcAnalyzer}
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="#"
                className={`block text-lg font-semibold text-[#353c4a] hover:text-[#669c27] transition-all duration-500 py-3 border-b border-gray-100 transform ${
                  isMobileMenuOpen
                    ? 'translate-x-0 opacity-100'
                    : 'translate-x-8 opacity-0'
                }`}
                style={{
                  transitionDelay: isMobileMenuOpen ? '300ms' : '200ms',
                }}
                onClick={closeMobileMenu}
              >
                {translations.header.nav.services}
              </Link>

              <Link
                href="#"
                className={`block text-lg font-semibold text-[#353c4a] hover:text-[#669c27] transition-all duration-500 py-3 border-b border-gray-100 transform ${
                  isMobileMenuOpen
                    ? 'translate-x-0 opacity-100'
                    : 'translate-x-8 opacity-0'
                }`}
                style={{
                  transitionDelay: isMobileMenuOpen ? '400ms' : '100ms',
                }}
                onClick={closeMobileMenu}
              >
                {translations.header.nav.contact}
              </Link>
            </nav>

            {/* Mobile Contact and Language Section */}
            <div
              className={`mt-8 space-y-4 transform transition-all duration-500 ${
                isMobileMenuOpen
                  ? 'translate-x-0 opacity-100'
                  : 'translate-x-8 opacity-0'
              }`}
              style={{
                transitionDelay: isMobileMenuOpen ? '300ms' : '0ms',
              }}
            >
              <button
                onClick={() => {
                  closeMobileMenu();
                  window.location.href = 'tel:02166859042';
                }}
                className="flex items-center justify-center w-full py-3 bg-[#669c27] text-white hover:bg-[#5a8a22] transition-colors duration-300 shadow-md rounded-lg"
                aria-label="Call us"
              >
                <Phone className="w-5 h-5 mr-2" />
                {translations.header.nav.contact}
              </button>

              <div className="flex justify-center">
                <LanguageSwitcher currentLocale={locale} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
