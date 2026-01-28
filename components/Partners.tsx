import React from 'react';
import { ShieldCheck } from 'lucide-react';

const Partners: React.FC = () => {
  // Enhanced partner list with categories or status if needed later
  const partners = [
    "Allianz", "Generali Česká", "Kooperativa", "ČSOB Pojišťovna", 
    "UNIQA", "ČPP", "MetLife", "NN Životní pojišťovna",
    "Direct pojišťovna", "Pillow", "Slavia pojišťovna", "PVZP"
  ];

  return (
    <section id="partners" className="py-20 bg-white border-t border-gray-100 reveal-on-scroll">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Naši partneři</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Kvalita našich služeb stojí na silných partnerech. Spolupracujeme s těmi nejvýznamnějšími finančními institucemi na trhu, 
            abychom Vám mohli nabídnout to nejlepší řešení.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {partners.map((partner, idx) => (
            <div 
              key={idx} 
              className="group flex flex-col justify-center items-center h-28 bg-white border border-gray-200 rounded-xl hover:shadow-lg hover:border-primary/30 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-10 transition-opacity">
                <ShieldCheck size={40} />
              </div>
              <span className="text-lg font-bold text-gray-500 group-hover:text-primary transition-colors text-center px-4">
                {partner}
              </span>
            </div>
          ))}
        </div>
        
        <div className="mt-12 flex flex-col items-center justify-center space-y-4">
          <p className="text-center text-sm text-gray-500 bg-gray-50 px-6 py-3 rounded-full inline-block">
            * Kompletní seznam všech spolupracujících institucí je k dispozici v sekci <a href="/dokumenty" className="text-primary hover:underline">Dokumenty</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Partners;