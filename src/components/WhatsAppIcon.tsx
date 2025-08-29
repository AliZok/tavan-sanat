'use client';

import { MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

interface WhatsAppIconProps {
  phoneNumber?: string;
  message?: string;
}

export default function WhatsAppIcon({
  phoneNumber = '+989120628762',
  message = 'سلام، می‌خواهم در مورد خدمات شما اطلاعات بیشتری کسب کنم.'
}: WhatsAppIconProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <button
        onClick={handleClick}
        className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center group"
        aria-label="ارتباط از طریق واتساپ"
      >
        <MessageCircle className="w-7 h-7" />
        
        {/* Pulse animation */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
        
        {/* Tooltip */}
        <div className="absolute bottom-full left-0 mb-2 px-3 py-2 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
           ارتباط با ما
          <div className="absolute top-full left-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
        </div>
      </button>
    </div>
  );
}
