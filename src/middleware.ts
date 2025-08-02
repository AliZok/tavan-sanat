import { NextRequest, NextResponse } from 'next/server';

const locales = ['en', 'fa'];
const defaultLocale = 'fa';

// Routes that should not be redirected to include locale
const excludedRoutes = ['/test'];

// File extensions that should not be redirected to include locale
const staticFileExtensions = [
  '.png',
  '.jpg',
  '.jpeg',
  '.gif',
  '.svg',
  '.ico',
  '.css',
  '.js',
  '.woff',
  '.woff2',
  '.ttf',
  '.eot',
];

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Skip locale redirection for excluded routes
  if (excludedRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  // Skip locale redirection for static files
  const isStaticFile = staticFileExtensions.some(ext => pathname.endsWith(ext));
  if (isStaticFile) {
    return NextResponse.next();
  }

  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = locales.every(
    locale => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);
    return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
  }
}

export function getLocale(request: NextRequest): string {
  // Check for locale in cookie
  const localeCookie = request.cookies.get('NEXT_LOCALE');
  if (localeCookie && locales.includes(localeCookie.value)) {
    return localeCookie.value;
  }

  // Check for locale in Accept-Language header
  const acceptLanguage = request.headers.get('accept-language');
  if (acceptLanguage) {
    const preferredLocale = acceptLanguage
      .split(',')
      .map(lang => lang.split(';')[0].trim())
      .find(lang => locales.includes(lang.split('-')[0]));

    if (preferredLocale) {
      return preferredLocale.split('-')[0];
    }
  }

  return defaultLocale;
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next|api|favicon.ico).*)',
  ],
};
