import React from 'react';
import SectionHeading from './SectionHeading';
import { SERVICES } from '../constants';
import { ArrowRight, Check } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Services: React.FC = () => {
  const location = useLocation();
  const isPage = location.pathname === '/sluzby';

  return (
    <section className={`py-20 ${isPage ? 'bg-white' : 'bg-slate-50'}`}>
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Portfolio služeb" 
          subtitle="Kompletní finanční servis pod jednou střechou. Zabezpečíme vás i váš majetek a zhodnotíme vaše úspory." 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id}
              className={`bg-white rounded-xl p-8 transition-all duration-300 group border ${
                isPage 
                  ? 'border-gray-100 hover:border-primary/20 shadow-lg hover:shadow-2xl' 
                  : 'border-transparent shadow-sm hover:shadow-xl'
              }`}
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <service.icon className="text-primary group-hover:text-white transition-colors" size={28} />
                </div>
                {isPage && <Check className="text-accent opacity-0 group-hover:opacity-100 transition-opacity" size={20} />}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm mb-6">
                {service.description}
              </p>
              
              {isPage && (
                <div className="pt-4 border-t border-gray-50">
                   <Link to="/kontakt" className="text-primary font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                     Mám zájem <ArrowRight size={16} />
                   </Link>
                </div>
              )}
            </div>
          ))}
        </div>

        {!isPage && (
          <div className="mt-16 text-center">
            <Link 
              to="/sluzby" 
              className="inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-800 px-8 py-3 rounded-full font-medium hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm"
            >
              Zobrazit detaily služeb <ArrowRight size={18} />
            </Link>
          </div>
        )}
        
        {isPage && (
          <div className="mt-20 bg-primary rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Nevíte si rady s výběrem?</h3>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                Každá životní situace vyžaduje jiné řešení. Domluvte si nezávaznou schůzku a my Vám připravíme plán na míru.
              </p>
              <Link 
                to="/kontakt" 
                className="bg-accent hover:bg-accent-hover text-white px-8 py-3 rounded-lg font-bold transition-colors inline-block"
              >
                Kontaktovat specialistu
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;