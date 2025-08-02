import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import '../globals.css';
import { getDirection, type Locale } from '../../lib/i18n';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const direction = getDirection(locale as Locale);

  return {
    title: 'AirSense Analytics - Air Quality Solutions',
    description:
      'Pioneering air quality solutions for a healthier tomorrow. Advanced environmental monitoring and analytics.',
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
    </div>
  );
}
