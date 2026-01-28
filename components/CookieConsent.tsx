import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('marsan-cookie-consent');
    if (!consent) {
      // Small delay for better UX
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
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] z-50 p-4 md:p-6 animate-fade-in-up">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm text-gray-600 leading-relaxed">
            Používáme soubory cookies, abychom Vám zajistili co nejlepší uživatelský zážitek. 
            Pokračováním v prohlížení webu souhlasíte s jejich používáním. 
            <a href="/dokumenty" className="text-primary underline ml-1 hover:text-primary-light">Více informací</a>.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button 
            onClick={handleAccept}
            className="bg-primary hover:bg-primary-light text-white px-6 py-2.5 rounded-md font-medium text-sm transition-colors shadow-sm"
          >
            Souhlasím
          </button>
          <button 
            onClick={() => setIsVisible(false)}
            className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Zavřít"
          >
            <X size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;