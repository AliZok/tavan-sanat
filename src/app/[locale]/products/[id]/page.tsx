'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import {
  getTranslations,
  getDirection,
  type Locale,
} from '../../../../lib/i18n';
import { getProductById, Product } from '../../../../lib/productData';
import { useState, useEffect } from 'react';
import Header from '../../../../components/Header';

export default function ProductPage() {
  const params = useParams();
  const locale = (params.locale as Locale) || 'en';
  const productId = parseInt(params.id as string);
  const translations = getTranslations(locale);
  const direction = getDirection(locale);

  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const currentProduct = getProductById(productId);
    if (currentProduct) {
      console.log('Product loaded:', currentProduct);
      console.log('Product image path:', currentProduct.image);
      setProduct(currentProduct);
    } else {
      console.error('Product not found for ID:', productId);
    }
  }, [productId]);

  if (!product) {
    return (
      <div
        className="flex flex-col min-h-screen items-center justify-center"
        dir={direction}
      ></div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen" dir={direction}>
      <Header />

      {/* Main Content */}
      <main className="flex-1 pt-16">
        {/* Breadcrumb */}
        <div className="bg-gray-50 py-4">
          <div className="container mx-auto px-4 md:px-6">
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                  <Link
                    href={`/${locale}`}
                    className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-[#669c27]"
                  >
                    {translations.pages.products.breadcrumb.home}
                  </Link>
                </li>
                <li>
                  <div className="flex items-center">
                    <span className="mx-2 text-gray-400">/</span>
                    <Link
                      href={`/${locale}/products`}
                      className="text-sm font-medium text-gray-700 hover:text-[#669c27]"
                    >
                      {translations.pages.products.breadcrumb.products}
                    </Link>
                  </div>
                </li>
                <li aria-current="page">
                  <div className="flex items-center">
                    <span className="mx-2 text-gray-400">/</span>
                    <span className="text-sm font-medium text-gray-500">
                      {product.name}
                    </span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Product Details */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Product Image */}
              <div className="space-y-4">
                <div className="relative h-96 overflow-hidden shadow-lg bg-gray-100">
                  {/* Use regular img tag for better compatibility */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    onError={e => {
                      console.error(
                        'Primary image failed to load:',
                        product.image
                      );
                      const target = e.target as HTMLImageElement;

                      // Try fallback paths
                      const fallbackPaths = [
                        `/images/${product.id === 1 || product.id === 3 || product.id === 5 ? '1.png' : '2.webp'}`,
                        '/images/1.png',
                        '/images/2.webp',
                      ];

                      let currentIndex = 0;
                      const tryNextFallback = () => {
                        if (currentIndex < fallbackPaths.length) {
                          console.log(
                            'Trying fallback image:',
                            fallbackPaths[currentIndex]
                          );
                          target.src = fallbackPaths[currentIndex];
                          currentIndex++;
                        } else {
                          console.error('All fallback images failed');
                          target.style.display = 'none';
                        }
                      };

                      target.onerror = tryNextFallback;
                      tryNextFallback();
                    }}
                    onLoad={() => {
                      console.log('Image loaded successfully:', product.image);
                    }}
                  />
                  {/* Image overlay for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-6">
                <div>
                  <h1 className="text-4xl font-bold text-[#353c4a] mb-4">
                    {product.name}
                  </h1>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-[#353c4a]">
                    {translations.pages.products.description}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {product.longDescription}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
