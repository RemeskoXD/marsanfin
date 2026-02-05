import React from 'react';

const Partners: React.FC = () => {
  const partners = [
    "Allianz", "Generali Česká", "Kooperativa", "ČSOB Pojišťovna", "UNIQA", "ČPP", "MetLife", "NN", "Komerční banka", "Česká spořitelna", "Moneta", "Raiffeisenbank"
  ];

  // Duplicate array to ensure seamless loop
  const seamlessPartners = [...partners, ...partners];

  return (
    <section id="partners" className="py-16 bg-white border-t border-gray-100 overflow-hidden">
      <div className="container mx-auto px-4 mb-10 text-center">
        <h3 className="text-2xl font-bold text-gray-800">Naši partneři</h3>
        <p className="text-gray-500 mt-2">Díky spolupráci s HV Group Vám přinášíme to nejlepší z trhu</p>
      </div>

      <div className="relative w-full">
        {/* Gradients to fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
        
        <div className="flex w-max animate-scroll">
          {seamlessPartners.map((partner, idx) => (
            <div 
              key={`${partner}-${idx}`} 
              className="mx-4 md:mx-8 flex items-center justify-center h-20 w-48 bg-gray-50 border border-gray-100 rounded-xl hover:bg-white hover:shadow-md hover:border-blue-100 transition-all cursor-default"
            >
              <span className="text-lg font-bold text-gray-400 font-sans tracking-tight">{partner}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="text-center mt-10 text-xs text-gray-400">
        * Kompletní seznam všech obchodních partnerů je k dispozici v sekci Dokumenty
      </div>
    </section>
  );
};

export default Partners;