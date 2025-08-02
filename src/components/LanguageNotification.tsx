'use client';

import { useState, useEffect } from 'react';
import { Globe, Check } from 'lucide-react';
import { getTranslations, type Locale } from '../lib/i18n';

interface LanguageNotificationProps {
  currentLocale: Locale;
  showNotification: boolean;
  onClose: () => void;
}

export default function LanguageNotification({
  currentLocale,
  showNotification,
  onClose,
}: LanguageNotificationProps) {
  const translations = getTranslations(currentLocale);

  useEffect(() => {
    if (showNotification) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [showNotification, onClose]);

  if (!showNotification) return null;

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 animate-fade-in-up">
      <div className="bg-white shadow-lg border border-gray-200 px-4 py-3 flex items-center gap-3">
        <div className="flex items-center gap-2">
          <Globe className="h-4 w-4 text-[#669c27]" />
          <Check className="h-4 w-4 text-green-500" />
        </div>
        <span className="text-sm font-medium text-gray-700">
          Language switched to {translations.language[currentLocale]}
        </span>
        <button
          onClick={onClose}
          className="ml-2 text-gray-400 hover:text-gray-600 transition-colors"
        >
          ×
        </button>
      </div>
    </div>
  );
}
