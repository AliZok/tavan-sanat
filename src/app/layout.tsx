import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'توان صنعت آینده ایرانیان | شرکت تخصصی آنالایزرهای محیطی و کیفیت هوا',
  description:
    'شرکت توان صنعت آینده ایرانیان - پیشرو در طراحی، مشاوره، تأمین و نصب آنالایزرهای آنلاین گاز، آب، پساب و هوا. خدمات کالیبراسیون و نگهداری تجهیزات زیست محیطی.',
  keywords: [
    'توان صنعت آینده ایرانیان',
    'آنالایزر گاز دودکش',
    'آنالایزر غبار محیط',
    'کیفیت هوا',
    'تجهیزات زیست محیطی',
    'کالیبراسیون آنالایزر',
    'نظارت محیطی',
    'تجهیزات سنجش آلودگی',
    'شرکت ایرانی',
    'تولیدکننده آنالایزر'
  ],
  authors: [{ name: 'توان صنعت آینده ایرانیان' }],
  creator: 'توان صنعت آینده ایرانیان',
  publisher: 'توان صنعت آینده ایرانیان',
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
    locale: 'fa_IR',
    url: 'https://tsai-co.com',
    siteName: 'توان صنعت آینده ایرانیان',
    title: 'توان صنعت آینده ایرانیان | شرکت تخصصی آنالایزرهای محیطی',
    description: 'شرکت توان صنعت آینده ایرانیان - پیشرو در طراحی، مشاوره، تأمین و نصب آنالایزرهای آنلاین گاز، آب، پساب و هوا',
    images: [
      {
        url: '/tavan-sanaat-logo-with-text.png',
        width: 1200,
        height: 630,
        alt: 'توان صنعت آینده ایرانیان',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'توان صنعت آینده ایرانیان | شرکت تخصصی آنالایزرهای محیطی',
    description: 'شرکت توان صنعت آینده ایرانیان - پیشرو در طراحی، مشاوره، تأمین و نصب آنالایزرهای آنلاین',
    images: ['/tavan-sanaat-logo-with-text.png'],
  },
  alternates: {
    canonical: 'https://tsai-co.com',
    languages: {
      'fa-IR': 'https://tsai-co.com/fa',
      'en-US': 'https://tsai-co.com/en',
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{
          fontFamily:
            'var(--font-geist-sans), "Vazirmatn", system-ui, sans-serif',
        }}
      >
        {children}
      </body>
    </html>
  );
}
