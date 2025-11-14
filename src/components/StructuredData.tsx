
// import { type Locale } from '../lib/i18n';

// interface StructuredDataProps {
//   locale: Locale;
// }

// export default function StructuredData({ locale }: StructuredDataProps) {
//   const isPersian = locale === 'fa';

//   const mainSchema = {
//     "@context": "https://schema.org",
//     "@graph": [
//       {
//         "@type": "Organization",
//         "@id": "https://tavan-sanaat.com/#organization",
//         "name": isPersian ? "توان صنعت آینده ایرانیان" : "Tavan Sanat Ayande Iranian",
//         "alternateName": isPersian ? "Tavan Sanat Ayande Iranian" : "توان صنعت آینده ایرانیان",
//         "url": "https://tavan-sanaat.com",
//         "logo": "https://tavan-sanaat.com/tavan-sanaat-logo-with-text.png",
//         "description": isPersian 
//           ? "شرکت توان صنعت آینده ایرانیان - پیشرو در طراحی، مشاوره، تأمین و نصب آنالایزرهای آنلاین گاز، آب، پساب و هوا"
//           : "Tavan Sanat Ayande Iranian - Leading provider of environmental analyzers and air quality monitoring solutions",
//         "foundingDate": "2020",
//         "address": {
//           "@type": "PostalAddress",
//           "streetAddress": isPersian ? "تهران خیابان آزادی خیابان کارون شمالی کوچه سید عباسی پلاک 18 واحد 2" : "Tehran, Azadi St., Karoon North St., Seyed Abbasi Alley, No. 18, Unit 2",
//           "addressLocality": "Tehran",
//           "addressCountry": "IR",
//           "postalCode": "1234567890"
//         },
//         "contactPoint": {
//           "@type": "ContactPoint",
//           "telephone": "+98-21-66859042",
//           "contactType": "customer service",
//           "availableLanguage": ["Persian", "English"]
//         },
//         "sameAs": [
//           "https://tavan-sanaat.com"
//         ]
//       },
//       {
//         "@type": "WebSite",
//         "@id": "https://tavan-sanaat.com/#website",
//         "url": "https://tavan-sanaat.com",
//         "name": isPersian ? "توان صنعت آینده ایرانیان" : "Tavan Sanat Ayande Iranian",
//         "publisher": {
//           "@id": "https://tavan-sanaat.com/#organization"
//         }
//       }
//     ]
//   };

//   return (
//     <script
//       type="application/ld+json"
//       dangerouslySetInnerHTML={{ __html: JSON.stringify(mainSchema) }}
//     />
//   );
// }

import { type Locale } from '../lib/i18n';

interface StructuredDataProps {
  locale: Locale;
}

export default function StructuredData({ locale }: StructuredDataProps) {
  const isPersian = locale === 'fa';

  const mainSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://tavan-sanaat.com/#organization",
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
          "addressCountry": "IR",
          "postalCode": "1234567890"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+98-21-66859042",
          "contactType": "customer service",
          "availableLanguage": ["Persian", "English"],
          "areaServed": "IR"
        },
        "sameAs": [
          "https://tavan-sanaat.com"
          // اضافه کردن لینک شبکه‌های اجتماعی در آینده:
          // "https://linkedin.com/company/tavan-sanaat",
          // "https://instagram.com/tavan_sanaat"
        ]
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://tavan-sanaat.com/#local-business",
        "name": isPersian ? "توان صنعت آینده ایرانیان" : "Tavan Sanat Ayande Iranian",
        "alternateName": isPersian ? "Tavan Sanat Ayande Iranian" : "توان صنعت آینده ایرانیان",
        "description": isPersian
          ? "شرکت توان صنعت آینده ایرانیان - پیشرو در طراحی، مشاوره، تأمین و نصب آنالایزرهای آنلاین گاز، آب، پساب و هوا"
          : "Tavan Sanat Ayande Iranian - Leading provider of environmental analyzers and air quality monitoring solutions",
        "url": "https://tavan-sanaat.com",
        "telephone": "+98-21-66859042",
        "openingHours": [
          "Mo-Th 08:00-17:00",
          "Fr 08:00-13:00",
          "Sa 08:00-13:00"
        ],
        "address": {
          "@type": "PostalAddress",
          "streetAddress": isPersian ? "تهران خیابان آزادی خیابان کارون شمالی کوچه سید عباسی پلاک 18 واحد 2" : "Tehran, Azadi St., Karoon North St., Seyed Abbasi Alley, No. 18, Unit 2",
          "addressLocality": "Tehran",
          "addressCountry": "IR",
          "postalCode": "1234567890"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "35.6960",
          "longitude": "51.3675"
        },
        "areaServed": {
          "@type": "GeoCircle",
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": "35.6960",
            "longitude": "51.3675"
          },
          "geoRadius": "1000000"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": isPersian ? "خدمات شرکت توان صنعت" : "Tavan Sanat Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": isPersian ? "آنالایزرهای آنلاین گاز" : "Online Gas Analyzers",
                "description": isPersian ? "طراحی و نصب سیستم‌های آنالیز گاز" : "Design and installation of gas analysis systems"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": isPersian ? "آنالایزرهای آب و پساب" : "Water and Wastewater Analyzers",
                "description": isPersian ? "سیستم‌های مانیتورینگ کیفیت آب و پساب" : "Water and wastewater quality monitoring systems"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": isPersian ? "آنالایزرهای هوا" : "Air Quality Analyzers",
                "description": isPersian ? "سیستم‌های سنجش کیفیت هوا" : "Air quality measurement systems"
              }
            }
          ]
        },
        "parentOrganization": {
          "@id": "https://tavan-sanaat.com/#organization"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://tavan-sanaat.com/#website",
        "url": "https://tavan-sanaat.com",
        "name": isPersian ? "توان صنعت آینده ایرانیان" : "Tavan Sanat Ayande Iranian",
        "description": isPersian
          ? "شرکت توان صنعت آینده ایرانیان - پیشرو در طراحی، مشاوره، تأمین و نصب آنالایزرهای آنلاین"
          : "Tavan Sanat Ayande Iranian - Leading provider of environmental analyzers",
        "publisher": {
          "@id": "https://tavan-sanaat.com/#organization"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://tavan-sanaat.com/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": isPersian ? "صفحه اصلی" : "Home",
            "item": "https://tavan-sanaat.com"
          }
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(mainSchema) }}
    />
  );
}