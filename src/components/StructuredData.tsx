'use client';

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
    "url": "https://tavan-sanaat.com",
    "logo": "https://tavan-sanaat.com/tavan-sanaat-logo-with-text.png",
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
      "https://tavan-sanaat.com"
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
    "url": "https://tavan-sanaat.com",
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
      "target": "https://tavan-sanaat.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://tavan-sanaat.com/#organization",
    "name": isPersian ? "توان صنعت آینده ایرانیان" : "Tavan Sanat Ayande Iranian",
    "alternateName": isPersian ? ["توان صنعت", "توان صنعت ایرانیان", "توان صنعت آینده"] : ["Tavan Sanat", "Tavan Sanat Iranian"],
    "image": "https://tavan-sanaat.com/tavan-sanaat-logo-with-text.png",
    "description": isPersian 
      ? "شرکت توان صنعت آینده ایرانیان - پیشرو در طراحی، مشاوره، تأمین و نصب آنالایزرهای آنلاین گاز، آب، پساب و هوا"
      : "Tavan Sanat Ayande Iranian - Leading provider of environmental analyzers and air quality monitoring solutions",
    "url": "https://tavan-sanaat.com",
    "telephone": "+98-21-66859042",
    "mobile": "+98-912-062-8762",
    "email": "CRM@tsai-co.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": isPersian ? "تهران خیابان آزادی خیابان کارون شمالی کوچه سید عباسی پلاک 18 واحد 2" : "Tehran, Azadi St., Karoon North St., Seyed Abbasi Alley, No. 18, Unit 2",
      "addressLocality": "Tehran",
      "addressRegion": "Tehran Province",
      "postalCode": "1234567890",
      "addressCountry": "IR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "35.6960",
      "longitude": "51.3675"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "08:00",
        "closes": "13:00"
      }
    ],
    "serviceArea": {
      "@type": "Country",
      "name": "Iran"
    },
    "areaServed": [
      {
        "@type": "Country",
        "name": "Iran"
      },
      {
        "@type": "City",
        "name": "Tehran"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": isPersian ? "خدمات و محصولات توان صنعت آینده ایرانیان" : "Tavan Sanat Ayande Iranian Services and Products",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": isPersian ? "آنالایزرهای گاز دودکش" : "Flue Gas Analyzers",
            "description": isPersian ? "طراحی و نصب آنالایزرهای گاز دودکش توسط توان صنعت آینده ایرانیان" : "Design and installation of flue gas analyzers by Tavan Sanat Ayande Iranian"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": isPersian ? "آنالایزرهای غبار محیط" : "Ambient Dust Analyzers",
            "description": isPersian ? "آنالایزرهای غبار محیط توسط توان صنعت" : "Ambient dust analyzers by Tavan Sanat"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": isPersian ? "کالیبراسیون تجهیزات" : "Equipment Calibration",
            "description": isPersian ? "خدمات کالیبراسیون تجهیزات زیست محیطی" : "Environmental equipment calibration services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": isPersian ? "مشاوره زیست محیطی" : "Environmental Consulting",
            "description": isPersian ? "مشاوره تخصصی زیست محیطی توسط توان صنعت آینده ایرانیان" : "Specialized environmental consulting by Tavan Sanat Ayande Iranian"
          }
        }
      ]
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+98-21-66859042",
        "contactType": "customer service",
        "availableLanguage": ["Persian", "English"],
        "areaServed": "IR"
      },
      {
        "@type": "ContactPoint",
        "telephone": "+98-912-062-8762",
        "contactType": "sales",
        "availableLanguage": ["Persian", "English"],
        "areaServed": "IR"
      }
    ],
    "sameAs": [
      "https://tavan-sanaat.com",
      "https://tavan-sanaat.com/fa",
      "https://tavan-sanaat.com/en"
    ],
    "foundingDate": "2020",
    "numberOfEmployees": "10-50",
    "knowsAbout": isPersian ? [
      "توان صنعت",
      "آنالایزرهای محیطی",
      "کیفیت هوا",
      "تجهیزات زیست محیطی",
      "کالیبراسیون",
      "نظارت محیطی"
    ] : [
      "Environmental analyzers",
      "Air quality monitoring",
      "Equipment calibration",
      "Environmental consulting"
    ]
  };

  const faqSchema = isPersian ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "توان صنعت آینده ایرانیان چه خدماتی ارائه می‌دهد؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "توان صنعت آینده ایرانیان خدمات تخصصی طراحی، مشاوره، تأمین و نصب آنالایزرهای آنلاین گاز، آب، پساب و هوا را ارائه می‌دهد. همچنین خدمات کالیبراسیون و نگهداری تجهیزات زیست محیطی از جمله فعالیت‌های اصلی این شرکت است."
        }
      },
      {
        "@type": "Question",
        "name": "آدرس و شماره تماس توان صنعت کجاست؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "توان صنعت آینده ایرانیان در تهران، خیابان آزادی، خیابان کارون شمالی، کوچه سید عباسی، پلاک 18، واحد 2 واقع شده است. شماره تلفن: 021-66859042 و موبایل: 09120628762"
        }
      },
      {
        "@type": "Question",
        "name": "توان صنعت با چه صنایعی همکاری می‌کند؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "توان صنعت آینده ایرانیان با صنایع فلزی و فولاد، صنایع نفت، گاز و پتروشیمی، نیروگاه‌ها، کشت و صنعت، سازمان حفاظت محیط زیست، آب و فاضلاب، سیمان و مراکز بهداشتی و دانشگاهی همکاری دارد."
        }
      },
      {
        "@type": "Question",
        "name": "آنالایزرهای توان صنعت چه ویژگی‌هایی دارند؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "آنالایزرهای توان صنعت آینده ایرانیان شامل آنالایزرهای گاز دودکش، آنالایزرهای غبار محیط، آنالایزرهای گاز محیط و آنالایزرهای GC می‌باشند که با دقت بالا و قابلیت اطمینان مناسب طراحی شده‌اند."
        }
      },
      {
        "@type": "Question",
        "name": "آیا توان صنعت گواهینامه‌های معتبر دارد؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "بله، توان صنعت آینده ایرانیان دارای گواهینامه‌های ISO 9001:2008، ISO 14001:2004 و OHSAS 18001:2007 می‌باشد که نشان‌دهنده کیفیت و استانداردهای بالای خدمات این شرکت است."
        }
      },
      {
        "@type": "Question",
        "name": "چگونه با توان صنعت تماس بگیرم؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "برای تماس با توان صنعت آینده ایرانیان می‌توانید از طریق تلفن 021-66859042، موبایل 09120628762 یا ایمیل CRM@tsai-co.com با ما در ارتباط باشید. همچنین می‌توانید به آدرس تهران، خیابان آزادی، خیابان کارون شمالی مراجعه کنید."
        }
      }
    ]
  } : null;

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
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema)
          }}
        />
      )}
    </>
  );
}
