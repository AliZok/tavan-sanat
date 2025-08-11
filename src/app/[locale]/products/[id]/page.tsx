'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import {
  getTranslations,
  getDirection,
  type Locale,
} from '../../../../lib/i18n';
import {
  getProductById,
  getRelatedProducts,
  Product,
} from '../../../../lib/productData';
import { useState, useEffect } from 'react';

export default function ProductPage() {
  const params = useParams();
  const locale = (params.locale as Locale) || 'en';
  const productId = parseInt(params.id as string);
  const translations = getTranslations(locale);
  const direction = getDirection(locale);

  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);

  useEffect(() => {
    const currentProduct = getProductById(productId);
    if (currentProduct) {
      setProduct(currentProduct);
      const related = getRelatedProducts(productId, currentProduct.category, 3);
      setRelatedProducts(related);
    }
  }, [productId]);

  if (!product) {
    return (
      <div
        className="flex flex-col min-h-screen items-center justify-center"
        dir={direction}
      >
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-600 mb-4">
            Product Not Found
          </h1>
          <Link
            href={`/${locale}/products`}
            className="text-[#669c27] hover:underline"
          >
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

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
                    Home
                  </Link>
                </li>
                <li>
                  <div className="flex items-center">
                    <span className="mx-2 text-gray-400">/</span>
                    <Link
                      href={`/${locale}/products`}
                      className="text-sm font-medium text-gray-700 hover:text-[#669c27]"
                    >
                      Products
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
                <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
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

                <div className="text-3xl font-bold text-[#669c27]">
                  {product.price}
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-[#353c4a]">
                    Description
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {product.longDescription}
                  </p>
                </div>

                {/* Specifications */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-[#353c4a]">
                    Specifications
                  </h3>
                  <ul className="space-y-2">
                    {product.specifications.map(
                      (spec: string, index: number) => (
                        <li key={index} className="flex items-start">
                          <span className="w-2 h-2 bg-[#669c27] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-600">{spec}</span>
                        </li>
                      )
                    )}
                  </ul>
                </div>

                {/* Features */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-[#353c4a]">
                    Key Features
                  </h3>
                  <ul className="space-y-2">
                    {product.features.map((feature: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <span className="w-2 h-2 bg-[#669c27] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <button className="px-8 py-3 bg-[#669c27] text-white rounded-lg hover:bg-[#5a8a22] transition-colors duration-300 font-semibold">
                    Request Quote
                  </button>
                  <button className="px-8 py-3 border-2 border-[#669c27] text-[#669c27] rounded-lg hover:bg-[#669c27] hover:text-white transition-colors duration-300 font-semibold">
                    Download Brochure
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <h2 className="text-3xl font-bold text-[#353c4a] text-center mb-12">
                Related Products
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedProducts.map(relatedProduct => (
                  <div
                    key={relatedProduct.id}
                    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="relative h-48">
                      <Image
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-[#353c4a] mb-3">
                        {relatedProduct.name}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {relatedProduct.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-bold text-[#669c27]">
                          {relatedProduct.price}
                        </span>
                        <Link
                          href={`/${locale}/products/${relatedProduct.id}`}
                          className="inline-flex items-center px-4 py-2 bg-[#669c27] text-white rounded-lg hover:bg-[#5a8a22] transition-colors duration-300"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
