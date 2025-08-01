'use client';

import { useRouter, usePathname } from 'next/navigation';
import { getTranslations, getDirection, type Locale } from '../lib/i18n';

interface LanguageSwitcherProps {
  currentLocale: Locale;
}

export default function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  const router = useRouter();
  const pathname = usePathname();
  const translations = getTranslations(currentLocale);

  const toggleLanguage = () => {
    try {
      // Toggle between 'en' and 'fa'
      const newLocale: Locale = currentLocale === 'en' ? 'fa' : 'en';
      
      // Get the path without the current locale
      const segments = pathname.split('/');
      const currentPath = segments.slice(2).join('/'); // Remove the locale segment
      const newPath = `/${newLocale}${currentPath ? `/${currentPath}` : ''}`;
      
      router.push(newPath);
    } catch (error) {
      console.error('Error switching language:', error);
    }
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#669c27] transition-all duration-300 hover:bg-gray-100 border border-gray-200 hover:border-[#669c27] focus:outline-none focus:ring-2 focus:ring-[#669c27] focus:ring-offset-2 rounded-md"
      aria-label="Toggle language"
    >
      <span className="text-xs">
        {currentLocale === 'en' ? 'EN' : 'FA'}
      </span>

    </button>
  );
} 