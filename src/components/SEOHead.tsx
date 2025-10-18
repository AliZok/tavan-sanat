'use client';

import Head from 'next/head';
import { type Locale } from '../lib/i18n';

interface SEOHeadProps {
  locale: Locale;
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
}

export default function SEOHead({ 
  locale, 
  title, 
  description, 
  keywords = [], 
  canonicalUrl 
}: SEOHeadProps) {
  const isPersian = locale === 'fa';
  
  const defaultTitle = isPersian 
    ? 'توان صنعت آینده ایرانیان | شرکت تخصصی آنالایزرهای محیطی و کیفیت هوا'
    : 'Tavan Sanat Ayande Iranian | Environmental Analyzer Specialists';
  
  const defaultDescription = isPersian
    ? 'شرکت توان صنعت آینده ایرانیان - پیشرو در طراحی، مشاوره، تأمین و نصب آنالایزرهای آنلاین گاز، آب، پساب و هوا. خدمات کالیبراسیون و نگهداری تجهیزات زیست محیطی.'
    : 'Tavan Sanat Ayande Iranian - Leading provider of environmental analyzers, air quality monitoring solutions, and calibration services for industrial applications.';

  const defaultKeywords = isPersian
    ? [
        'توان صنعت آینده ایرانیان',
        'آنالایزر گاز دودکش',
        'آنالایزر غبار محیط',
        'کیفیت هوا',
        'تجهیزات زیست محیطی',
        'کالیبراسیون آنالایزر',
        'نظارت محیطی',
        'تجهیزات سنجش آلودگی',
        'شرکت ایرانی',
        'تولیدکننده آنالایزر',
        'آنالایزر آنلاین',
        'سنجش آلودگی هوا',
        'تجهیزات محیط زیست',
        'کالیبراسیون تجهیزات',
        'مشاوره زیست محیطی'
      ]
    : [
        'Tavan Sanat Ayande Iranian',
        'environmental analyzers',
        'air quality monitoring',
        'gas analyzers',
        'dust analyzers',
        'calibration services',
        'environmental equipment',
        'Iranian company',
        'industrial monitoring',
        'online analyzers',
        'pollution monitoring',
        'environmental consulting'
      ];

  const finalTitle = title || defaultTitle;
  const finalDescription = description || defaultDescription;
  const finalKeywords = [...defaultKeywords, ...keywords];
  const finalCanonicalUrl = canonicalUrl || `https://tavan-sanaat.com/${locale}`;

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords.join(', ')} />
      <meta name="author" content={isPersian ? 'توان صنعت آینده ایرانیان' : 'Tavan Sanat Ayande Iranian'} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      
      {/* Language and Locale */}
      <meta httpEquiv="content-language" content={isPersian ? 'fa-IR' : 'en-US'} />
      <meta name="language" content={isPersian ? 'Persian' : 'English'} />
      <meta name="geo.region" content="IR" />
      <meta name="geo.country" content="Iran" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={finalCanonicalUrl} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:url" content={finalCanonicalUrl} />
      <meta property="og:site_name" content={isPersian ? 'توان صنعت آینده ایرانیان' : 'Tavan Sanat Ayande Iranian'} />
      <meta property="og:locale" content={isPersian ? 'fa_IR' : 'en_US'} />
      <meta property="og:image" content="https://tavan-sanaat.com/tavan-sanaat-logo-with-text.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={isPersian ? 'توان صنعت آینده ایرانیان' : 'Tavan Sanat Ayande Iranian'} />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content="https://tavan-sanaat.com/tavan-sanaat-logo-with-text.png" />
      <meta name="twitter:image:alt" content={isPersian ? 'توان صنعت آینده ایرانیان' : 'Tavan Sanat Ayande Iranian'} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#669c27" />
      <meta name="msapplication-TileColor" content="#669c27" />
      <meta name="apple-mobile-web-app-title" content={isPersian ? 'توان صنعت آینده ایرانیان' : 'Tavan Sanat Ayande Iranian'} />
      <meta name="application-name" content={isPersian ? 'توان صنعت آینده ایرانیان' : 'Tavan Sanat Ayande Iranian'} />
      
      {/* Business Information */}
      <meta name="contact" content="CRM@tavan-sanaat.com" />
      <meta name="phone" content="+98-21-66859042" />
      <meta name="address" content={isPersian ? 'تهران خیابان آزادی خیابان کارون شمالی کوچه سید عباسی پلاک 18 واحد 2' : 'Tehran, Azadi St., Karoon North St., Seyed Abbasi Alley, No. 18, Unit 2'} />
      
      {/* Additional Keywords for Persian */}
      {isPersian && (
        <>
          <meta name="keywords" content="توان صنعت آینده ایرانیان, آنالایزر گاز, آنالایزر غبار, کیفیت هوا, تجهیزات زیست محیطی, کالیبراسیون, نظارت محیطی, سنجش آلودگی, شرکت ایرانی, تولیدکننده آنالایزر, آنالایزر آنلاین, تجهیزات محیط زیست, مشاوره زیست محیطی, صنایع نفت و گاز, نیروگاه, پتروشیمی, فولاد, سیمان, آب و فاضلاب" />
        </>
      )}
    </Head>
  );
}
