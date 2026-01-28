import React from 'react';
import SectionHeading from './SectionHeading';

const Partners: React.FC = () => {
  // Placeholder logic for partners since we don't have the specific list yet.
  // Using names for now, styled as placeholder logos.
  const partners = [
    "Allianz", "Generali Česká", "Kooperativa", "ČSOB Pojišťovna", "UNIQA", "ČPP", "MetLife", "NN"
  ];

  return (
    <section id="partners" className="py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold text-gray-800">Naši partneři</h3>
          <p className="text-gray-500 mt-2">Spolupracujeme s těmi nejsilnějšími hráči na trhu</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 items-center opacity-70">
          {partners.map((partner, idx) => (
            <div key={idx} className="flex justify-center items-center h-20 bg-gray-50 rounded-lg hover:bg-white hover:shadow-md transition-all cursor-default border border-transparent hover:border-gray-100">
              <span className="text-lg font-bold text-gray-400 hover:text-primary transition-colors">{partner}</span>
            </div>
          ))}
        </div>
        <div className="text-center mt-8 text-sm text-gray-400">
          * Kompletní seznam partnerů je k dispozici v sekci Dokumenty
        </div>
      </div>
    </section>
  );
};

export default Partners;