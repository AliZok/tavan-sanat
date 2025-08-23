'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { getTranslations, getDirection, type Locale } from '../../../lib/i18n';
import { products } from '../../../lib/productData';
import Header from '../../../components/Header';

export default function ProductsPage() {
  const params = useParams();
  const locale = (params.locale as Locale) || 'en';
  const translations = getTranslations(locale);
  const direction = getDirection(locale);

  return (
    <div className="flex flex-col min-h-screen" dir={direction}>
      <Header />

      {/* Main Content */}
      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="w-full py-16 md:py-24 bg-gradient-to-br from-[#669c27]/5 to-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-extrabold text-[#353c4a] mb-6">
                {translations.pages.products.title}
              </h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {translations.pages.products.subtitle}
              </p>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map(product => (
                <Link
                  key={product.id}
                  href={`/${locale}/products/${product.id}`}
                  className="bg-white shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
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
                        onClick={e => e.stopPropagation()}
                      >
                        {translations.pages.products.callButton}
                      </a>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
