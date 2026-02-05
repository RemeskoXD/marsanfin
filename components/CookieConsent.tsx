import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('marsan-cookie-consent');
    if (!consent) {
      // Small delay to not be annoying immediately
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('marsan-cookie-consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-50 p-4 md:p-6 animate-fade-in-up">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-600 md:max-w-3xl">
          <p className="font-semibold text-gray-900 mb-1">Používáme cookies 🍪</p>
          <p>
            Tento web používá soubory cookies k zajištění správného fungování a pro analytické účely. 
            Používáním webu vyjadřujete souhlas s jejich užíváním.
          </p>
        </div>
        <div className="flex gap-3 w-full md:w-auto">
          <button 
            onClick={handleAccept}
            className="flex-1 md:flex-none bg-primary hover:bg-primary-light text-white px-6 py-2.5 rounded-lg font-medium transition-colors text-sm whitespace-nowrap"
          >
            Souhlasím
          </button>
          <button 
            onClick={handleAccept} 
            className="p-2 text-gray-400 hover:text-gray-600 md:hidden"
          >
            <X size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;