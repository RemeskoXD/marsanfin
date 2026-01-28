import React from 'react';
import SectionHeading from './SectionHeading';
import { CheckCircle2, Award, Users, History, ArrowRight } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';

const About: React.FC = () => {
  const location = useLocation();
  const isPage = location.pathname === '/o-nas';

  const benefits = [
    "Individuální a lidský přístup ke každému klientovi",
    "Exkluzivní spolupráce se skupinou HV Group",
    "Komplexní portfolio všech významných pojišťoven",
    "Dlouhodobý servis a pomoc při likvidaci událostí"
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="O společnosti" 
          subtitle="Jsme Marsan Fin. Budujeme dlouhodobé vztahy založené na důvěře, profesionalitě a stabilitě." 
        />

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-16">
          <div className="lg:w-1/2 relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
               <img 
                 src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                 alt="Tým Marsan Fin" 
                 className="w-full object-cover h-[500px]"
               />
               <div className="absolute inset-0 bg-primary/10"></div>
            </div>
            
            {/* Stats Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-xl shadow-xl hidden lg:block max-w-xs border-l-8 border-primary">
              <p className="text-4xl font-bold text-primary mb-1">1000+</p>
              <p className="text-gray-600 font-medium">Spokojených klientů, kteří nám věří.</p>
            </div>
          </div>

          <div className="lg:w-1/2 order-1 lg:order-2">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Stabilní partner pro Váš život i podnikání</h3>
            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
              Společnost Marsan Fin s.r.o. působí na trhu jako nezávislý zprostředkovatel finančních produktů. 
              Naším cílem není jen jednorázový prodej, ale <strong className="text-primary">komplexní správa Vašeho finančního portfolia</strong> v čase.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Úzce spolupracujeme se společností <a href="https://hvgroup.cz" target="_blank" rel="noopener noreferrer" className="text-primary font-bold underline decoration-accent decoration-2 underline-offset-2 hover:text-primary-light">HV Group</a>, což nám umožňuje přinášet našim klientům 
              špičkové produkty a exkluzivní podmínky, které jsou běžně dostupné jen pro velké korporátní klienty.
            </p>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="bg-green-100 p-1 rounded-full text-accent shrink-0 mt-0.5">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="text-gray-800 font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {!isPage && (
              <Link to="/o-nas" className="text-primary font-bold hover:text-primary-light flex items-center gap-2">
                Více o naší vizi <ArrowRight size={20} />
              </Link>
            )}
          </div>
        </div>

        {isPage && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-primary">
                <History size={32} />
              </div>
              <h4 className="text-xl font-bold mb-3">Naše historie</h4>
              <p className="text-gray-600 text-sm">
                Dlouholeté zkušenosti v oboru nám dávají nadhled. Prošli jsme s klienty mnoha tržními cykly a víme, jak ochránit hodnotu.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-primary">
                <Users size={32} />
              </div>
              <h4 className="text-xl font-bold mb-3">Náš přístup</h4>
              <p className="text-gray-600 text-sm">
                Nejsme anonymní call centrum. Známe příběhy našich klientů a hledáme řešení přesně pro jejich situaci.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-primary">
                <Award size={32} />
              </div>
              <h4 className="text-xl font-bold mb-3">Odbornost</h4>
              <p className="text-gray-600 text-sm">
                Neustále se vzděláváme. Splňujeme veškeré certifikace ČNB a sledujeme trendy v moderním finančnictví.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default About;