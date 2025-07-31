'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import { getTranslations, getDirection, type Locale } from '../lib/i18n';

interface LanguageSwitcherProps {
  currentLocale: Locale;
}

export default function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const translations = getTranslations(currentLocale);
  const direction = getDirection(currentLocale);

  const switchLanguage = (locale: Locale) => {
    try {
      // Get the path without the current locale
      const segments = pathname.split('/');
      const currentPath = segments.slice(2).join('/'); // Remove the locale segment
      const newPath = `/${locale}${currentPath ? `/${currentPath}` : ''}`;
      
      router.push(newPath);
      setIsOpen(false);
    } catch (error) {
      console.error('Error switching language:', error);
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#669c27] transition-all duration-300 hover:bg-gray-100 border border-gray-200 hover:border-[#669c27] focus:outline-none focus:ring-2 focus:ring-[#669c27] focus:ring-offset-2"
        aria-label="Switch language"
        aria-expanded={isOpen}
      >
        <Globe className="h-4 w-4" />
        <span className="hidden sm:inline">{translations.language[currentLocale]}</span>
        <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className={`absolute top-full mt-2 w-36 bg-white shadow-xl border border-gray-200 z-50 ${direction === 'rtl' ? 'left-0' : 'right-0'}`}>
          <div className="py-1">
            <button
              onClick={() => switchLanguage('en')}
              className={`w-full px-3 py-2 text-sm hover:bg-gray-50 transition-colors duration-200 flex items-center gap-2 ${
                currentLocale === 'en' ? 'text-[#669c27] font-medium bg-[#669c27]/5' : 'text-gray-700'
              }`}
            >
              <span className="text-base">🇺🇸</span>
              <span>{translations.language.en}</span>
            </button>
            <button
              onClick={() => switchLanguage('fa')}
              className={`w-full px-3 py-2 text-sm hover:bg-gray-50 transition-colors duration-200 flex items-center gap-2 ${
                currentLocale === 'fa' ? 'text-[#669c27] font-medium bg-[#669c27]/5' : 'text-gray-700'
              }`}
            >
              <span className="text-base">🇮🇷</span>
              <span>{translations.language.fa}</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
} 