import React from 'react';
import SectionHeading from './SectionHeading';
import { SERVICES } from '../constants';
import { ArrowRight, Check, Search, FileEdit, FileCheck, HeartHandshake } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Services: React.FC = () => {
  const location = useLocation();
  const isPage = location.pathname === '/sluzby';

  const processSteps = [
    {
      icon: Search,
      title: "1. Analýza",
      desc: "Nejdříve Vás vyslechneme. Zmapujeme Vaši aktuální situaci, potřeby a cíle."
    },
    {
      icon: FileEdit,
      title: "2. Návrh řešení",
      desc: "Připravíme nezávislé srovnání trhu a navrhneme strategii přesně na míru."
    },
    {
      icon: FileCheck,
      title: "3. Realizace",
      desc: "Vyřídíme veškerou administrativu. Vše Vám vysvětlíme a nastavíme smlouvy."
    },
    {
      icon: HeartHandshake,
      title: "4. Dlouhodobá péče",
      desc: "Podpisem to nekončí. Jsme tu pro servis, aktualizace i řešení pojistných událostí."
    }
  ];

  return (
    <div className="flex flex-col">
      <section className={`py-20 ${isPage ? 'bg-white' : 'bg-slate-50'} reveal-on-scroll`}>
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Portfolio služeb" 
            subtitle="Kompletní finanční servis pod jednou střechou. Zabezpečíme vás i váš majetek a zhodnotíme vaše úspory." 
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <div 
                key={service.id}
                className={`bg-white rounded-xl p-8 transition-all duration-300 group border relative overflow-hidden ${
                  isPage 
                    ? 'border-gray-100 hover:border-primary/20 shadow-lg hover:shadow-2xl' 
                    : 'border-transparent shadow-sm hover:shadow-xl'
                }`}
              >
                {/* Hover decorative circle */}
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/5 rounded-full group-hover:scale-150 transition-transform duration-500"></div>

                <div className="flex justify-between items-start mb-6 relative z-10">
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300 shadow-sm">
                    <service.icon className="text-primary group-hover:text-white transition-colors" size={28} />
                  </div>
                  {isPage && <Check className="text-accent opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0" size={20} />}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors relative z-10">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm mb-6 relative z-10">
                  {service.description}
                </p>
                
                {isPage && (
                  <div className="pt-4 border-t border-gray-50 relative z-10">
                     <Link to="/kontakt" className="text-primary font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all group-hover:translate-x-1">
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
                className="inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-800 px-8 py-3 rounded-full font-medium hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm hover:shadow-md"
              >
                Zobrazit detaily služeb <ArrowRight size={18} />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Process Section - Only visible on detailed page */}
      {isPage && (
        <section className="py-20 bg-primary text-white reveal-on-scroll">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Jak pracujeme?</h2>
              <div className="h-1 w-20 bg-accent mx-auto rounded-full mb-6"></div>
              <p className="text-blue-100 max-w-2xl mx-auto">
                Zakládáme si na transparentním procesu. Od první kávy až po dlouhodobý servis víte, na čem jste.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {/* Connector Line (Desktop) */}
              <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-blue-400/30"></div>

              {processSteps.map((step, idx) => (
                <div key={idx} className="relative flex flex-col items-center text-center group">
                  <div className="w-24 h-24 bg-primary-light rounded-full border-4 border-primary-dark flex items-center justify-center mb-6 relative z-10 group-hover:border-accent transition-colors duration-300 shadow-xl">
                    <step.icon size={32} className="text-white group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-sm text-blue-100 leading-relaxed px-4">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <Link 
                to="/kontakt" 
                className="bg-accent hover:bg-accent-hover text-white px-10 py-4 rounded-lg font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 inline-block"
              >
                Domluvit úvodní schůzku
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Services;