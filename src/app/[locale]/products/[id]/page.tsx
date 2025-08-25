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
                    <div className="text-sm font-medium text-gray-500">
                      {(() => {
                        if (locale === 'fa' && product.name_fa) {
                          return product.name_fa;
                        }
                        if (
                          product.name.startsWith('duragDfw') ||
                          product.name.startsWith('laser') ||
                          product.name.startsWith('tiribo')
                        ) {
                          return (
                            translations.products.flueDustAnalyzerSubItems[
                              product.name as keyof typeof translations.products.flueDustAnalyzerSubItems
                            ] || product.name
                          );
                        } else if (
                          product.name.startsWith('faiSwam5a') ||
                          product.name.startsWith('metoneBAM1020')
                        ) {
                          return (
                            translations.products.ambientDustAnalyzerSubItems[
                              product.name as keyof typeof translations.products.ambientDustAnalyzerSubItems
                            ] || product.name
                          );
                        } else if (
                          translations.products.productNames &&
                          translations.products.productNames[
                            product.name as keyof typeof translations.products.productNames
                          ]
                        ) {
                          return translations.products.productNames[
                            product.name as keyof typeof translations.products.productNames
                          ];
                        }
                        return product.name;
                      })()}
                    </div>
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
                        `/images/tribo-dust-analyzer.jpg`,
                        `/images/tribo-dust-analyzer.jpg`,
                        `/images/tribo-dust-analyzer.jpg`,
                        '/images/tribo-dust-analyzer.jpg',
                        '/images/tribo-dust-analyzer.jpg',
                      ];

                      let currentIndex = 0;
                      const tryNextFallback = () => {
                        if (currentIndex < fallbackPaths.length) {
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
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl font-bold text-[#353c4a] mb-3">
                    {(() => {
                      if (locale === 'fa' && product.name_fa) {
                        return product.name_fa;
                      }
                      if (
                        product.name.startsWith('duragDfw') ||
                        product.name.startsWith('laser') ||
                        product.name.startsWith('tiribo')
                      ) {
                        return (
                          translations.products.flueDustAnalyzerSubItems[
                            product.name as keyof typeof translations.products.flueDustAnalyzerSubItems
                          ] || product.name
                        );
                      } else if (
                        product.name.startsWith('faiSwam5a') ||
                        product.name.startsWith('metoneBAM1020')
                      ) {
                        return (
                          translations.products.ambientDustAnalyzerSubItems[
                            product.name as keyof typeof translations.products.ambientDustAnalyzerSubItems
                          ] || product.name
                        );
                      } else if (
                        translations.products.productNames &&
                        translations.products.productNames[
                          product.name as keyof typeof translations.products.productNames
                        ]
                      ) {
                        return translations.products.productNames[
                          product.name as keyof typeof translations.products.productNames
                        ];
                      }
                      return product.name;
                    })()}
                  </h1>

                  <p className="text-xl text-gray-600 leading-relaxed mb-4">
                    {locale === 'fa' && product.description_fa
                      ? product.description_fa
                      : product.description}
                  </p>
                  <div
                    className={`text-gray-600 text-xs ${direction === 'rtl' ? 'text-right' : 'text-left'}`}
                  >
                    {locale === 'fa' ? product?.madeIn : product?.madeIn_en}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-[#353c4a]">
                    {translations.pages.products.description}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {locale === 'fa' && product.longDescription_fa
                      ? product.longDescription_fa
                      : product.longDescription}
                  </p>

                  <p className="text-gray-600 leading-relaxed">
                    {translations.pages.products.contactPrompt}
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
