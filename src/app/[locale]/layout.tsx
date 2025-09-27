import type { Metadata } from 'next';
import '../globals.css';
import { getDirection, type Locale } from '../../lib/i18n';
import WhatsAppIcon from '../../components/WhatsAppIcon';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const direction = getDirection(locale as Locale);
  const isPersian = locale === 'fa';

  const title = isPersian 
    ? 'توان صنعت آینده ایرانیان | شرکت تخصصی آنالایزرهای محیطی و کیفیت هوا'
    : 'Tavan Sanat Ayande Iranian | Environmental Analyzer Specialists';
  
  const description = isPersian
    ? 'شرکت توان صنعت آینده ایرانیان - پیشرو در طراحی، مشاوره، تأمین و نصب آنالایزرهای آنلاین گاز، آب، پساب و هوا. خدمات کالیبراسیون و نگهداری تجهیزات زیست محیطی.'
    : 'Tavan Sanat Ayande Iranian - Leading provider of environmental analyzers, air quality monitoring solutions, and calibration services for industrial applications.';

  const keywords = isPersian
    ? [
        'توان صنعت',
        'توان صنعت آینده ایرانیان',
        'توان صنعت ایرانیان',
        'توان صنعت آینده',
        'آنالایزر گاز دودکش',
        'آنالایزر غبار محیط',
        'کیفیت هوا',
        'تجهیزات زیست محیطی',
        'کالیبراسیون آنالایزر',
        'نظارت محیطی',
        'تجهیزات سنجش آلودگی',
        'شرکت ایرانی',
        'تولیدکننده آنالایزر',
        'توان صنعت تهران',
        'توان صنعت ایران',
        'شرکت توان صنعت',
        'صنعت آینده ایرانیان'
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
        'industrial monitoring'
      ];

  return {
    title,
    description,
    keywords,
    authors: [{ name: isPersian ? 'توان صنعت آینده ایرانیان' : 'Tavan Sanat Ayande Iranian' }],
    creator: isPersian ? 'توان صنعت آینده ایرانیان' : 'Tavan Sanat Ayande Iranian',
    publisher: isPersian ? 'توان صنعت آینده ایرانیان' : 'Tavan Sanat Ayande Iranian',
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: 'website',
      locale: isPersian ? 'fa_IR' : 'en_US',
      url: `https://tavan-sanaat.com/${locale}`,
      siteName: isPersian ? 'توان صنعت آینده ایرانیان' : 'Tavan Sanat Ayande Iranian',
      title,
      description,
      images: [
        {
          url: '/tavan-sanaat-logo-with-text.png',
          width: 1200,
          height: 630,
          alt: isPersian ? 'توان صنعت آینده ایرانیان' : 'Tavan Sanat Ayande Iranian',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/tavan-sanaat-logo-with-text.png'],
    },
    alternates: {
      canonical: `https://tavan-sanaat.com/${locale}`,
      languages: {
        'fa-IR': 'https://tavan-sanaat.com/fa',
        'en-US': 'https://tavan-sanaat.com/en',
      },
    },
    icons: {
      icon: [
        { url: '/favicon.ico', sizes: 'any' },
        { url: '/my-logo.png', type: 'image/png' },
      ],
      shortcut: '/favicon.ico',
      apple: '/apple-touch-icon.png',
    },
    other: {
      dir: direction,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const direction = getDirection(locale as Locale);

  return (
    <div dir={direction} lang={locale}>
      {children}
      <WhatsAppIcon />
    </div>
  );
}
