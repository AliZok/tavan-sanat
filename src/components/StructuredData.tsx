import { useParams } from 'next/navigation';
import { type Locale } from '../lib/i18n';

interface StructuredDataProps {
  locale: Locale;
}

export default function StructuredData({ locale }: StructuredDataProps) {
  const isPersian = locale === 'fa';
  
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": isPersian ? "توان صنعت آینده ایرانیان" : "Tavan Sanat Ayande Iranian",
    "alternateName": isPersian ? "Tavan Sanat Ayande Iranian" : "توان صنعت آینده ایرانیان",
    "url": "https://tsai-co.com",
    "logo": "https://tsai-co.com/tavan-sanaat-logo-with-text.png",
    "description": isPersian 
      ? "شرکت توان صنعت آینده ایرانیان - پیشرو در طراحی، مشاوره، تأمین و نصب آنالایزرهای آنلاین گاز، آب، پساب و هوا"
      : "Tavan Sanat Ayande Iranian - Leading provider of environmental analyzers and air quality monitoring solutions",
    "foundingDate": "2020",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": isPersian ? "تهران خیابان آزادی خیابان کارون شمالی کوچه سید عباسی پلاک 18 واحد 2" : "Tehran, Azadi St., Karoon North St., Seyed Abbasi Alley, No. 18, Unit 2",
      "addressLocality": "Tehran",
      "addressCountry": "IR"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+98-21-66859042",
      "contactType": "customer service",
      "availableLanguage": ["Persian", "English"]
    },
    "sameAs": [
      "https://tsai-co.com"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "Iran"
    },
    "serviceType": [
      isPersian ? "آنالایزرهای محیطی" : "Environmental Analyzers",
      isPersian ? "نظارت کیفیت هوا" : "Air Quality Monitoring",
      isPersian ? "کالیبراسیون تجهیزات" : "Equipment Calibration",
      isPersian ? "مشاوره زیست محیطی" : "Environmental Consulting"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": isPersian ? "توان صنعت آینده ایرانیان" : "Tavan Sanat Ayande Iranian",
    "url": "https://tsai-co.com",
    "description": isPersian 
      ? "شرکت تخصصی آنالایزرهای محیطی و کیفیت هوا"
      : "Environmental Analyzer and Air Quality Monitoring Specialists",
    "inLanguage": isPersian ? "fa-IR" : "en-US",
    "publisher": {
      "@type": "Organization",
      "name": isPersian ? "توان صنعت آینده ایرانیان" : "Tavan Sanat Ayande Iranian"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://tsai-co.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://tsai-co.com/#organization",
    "name": isPersian ? "توان صنعت آینده ایرانیان" : "Tavan Sanat Ayande Iranian",
    "image": "https://tsai-co.com/tavan-sanaat-logo-with-text.png",
    "description": isPersian 
      ? "شرکت توان صنعت آینده ایرانیان - پیشرو در طراحی، مشاوره، تأمین و نصب آنالایزرهای آنلاین گاز، آب، پساب و هوا"
      : "Tavan Sanat Ayande Iranian - Leading provider of environmental analyzers and air quality monitoring solutions",
    "url": "https://tsai-co.com",
    "telephone": "+98-21-66859042",
    "email": "CRM@tsai-co.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": isPersian ? "تهران خیابان آزادی خیابان کارون شمالی کوچه سید عباسی پلاک 18 واحد 2" : "Tehran, Azadi St., Karoon North St., Seyed Abbasi Alley, No. 18, Unit 2",
      "addressLocality": "Tehran",
      "addressCountry": "IR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "35.6960",
      "longitude": "51.3675"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "08:00",
      "closes": "17:00"
    },
    "serviceArea": {
      "@type": "Country",
      "name": "Iran"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": isPersian ? "خدمات و محصولات" : "Services and Products",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": isPersian ? "آنالایزرهای گاز دودکش" : "Flue Gas Analyzers"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": isPersian ? "آنالایزرهای غبار محیط" : "Ambient Dust Analyzers"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": isPersian ? "کالیبراسیون تجهیزات" : "Equipment Calibration"
          }
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema)
        }}
      />
    </>
  );
}
