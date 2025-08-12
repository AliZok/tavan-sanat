'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { getTranslations, getDirection, type Locale } from '../../../lib/i18n';
import { products } from '../../../lib/productData';

export default function ProductsPage() {
  const params = useParams();
  const locale = (params.locale as Locale) || 'en';
  const translations = getTranslations(locale);
  const direction = getDirection(locale);

  return (
    <div className="flex flex-col min-h-screen" dir={direction}>
      {/* Header */}
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
          <Link
            href={`/${locale}/products`}
            className="relative text-sm font-semibold text-[#669c27] transition-colors duration-300 group"
          >
            {translations.header.nav.products}
            <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[#669c27] transition-all duration-300 ease-out group-hover:w-full"></span>
          </Link>
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
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="w-full py-16 md:py-24 bg-gradient-to-br from-[#669c27]/5 to-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-extrabold text-[#353c4a] mb-6">
                Our Products
              </h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Discover our comprehensive range of advanced air quality
                monitoring and analysis solutions
              </p>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map(product => (
                <div
                  key={product.id}
                  className="bg-white shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-64">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#353c4a] mb-3">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <a
                        href="tel:09120628762"
                        className="inline-flex items-center px-4 py-2 bg-[#669c27] text-white hover:bg-[#5a8a22] transition-colors duration-300"
                      >
                        Call
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
