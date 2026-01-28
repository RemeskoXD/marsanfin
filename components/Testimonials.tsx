import React from 'react';
import SectionHeading from './SectionHeading';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section id="references" className="py-20 bg-primary text-white relative overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading title="Co říkají naši klienti" subtitle="Reálné zkušenosti lidí, kterým jsme pomohli." light={true} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/10 hover:bg-white/15 transition-colors">
              <Quote className="text-accent mb-4 opacity-80" size={32} />
              <p className="text-gray-100 mb-6 italic leading-relaxed">"{t.text}"</p>
              <div>
                <p className="font-bold text-white">{t.author}</p>
                <p className="text-accent text-sm">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;