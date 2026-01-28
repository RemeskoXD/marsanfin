import React from 'react';
import { ArrowRight, ShieldCheck, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-32 overflow-hidden bg-white">
      
      {/* Abstract Shapes Background */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-3/4 h-full bg-slate-50 skew-x-[-10deg] translate-x-1/4 rounded-bl-[100px]"></div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-accent-light/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-blue-100/40 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Text Content */}
          <div className="lg:w-1/2 space-y-8 animate-fade-in-up">
            <div className="flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full text-primary text-xs font-bold uppercase tracking-wide">
                <ShieldCheck size={14} className="text-primary" />
                <span>Partner HV Group</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-green-50 border border-green-100 px-3 py-1 rounded-full text-green-700 text-xs font-bold uppercase tracking-wide">
                <TrendingUp size={14} />
                <span>Registrace ČNB</span>
              </div>
            </div>
            
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-[1.15]">
              Budoucnost vašich <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">financí</span> začíná zde.
            </h1>
            
            <p className="text-lg text-gray-600 leading-relaxed max-w-lg border-l-4 border-accent pl-4">
              Komplexní finanční služby, pojištění a investice na míru. 
              Spojujeme profesionální expertízu s lidským přístupem.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link 
                to="/sluzby" 
                className="bg-primary hover:bg-primary-light text-white px-8 py-4 rounded-lg font-semibold text-center transition-all shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                Naše portfolio <ArrowRight size={20} />
              </Link>
              <Link 
                to="/kontakt" 
                className="bg-white border border-gray-200 text-gray-700 hover:text-primary hover:border-primary px-8 py-4 rounded-lg font-semibold text-center transition-all hover:bg-gray-50"
              >
                Nezávazná konzultace
              </Link>
            </div>

            <div className="pt-8 grid grid-cols-3 gap-6 border-t border-gray-100">
              <div>
                <p className="text-3xl font-bold text-gray-900">20+</p>
                <p className="text-sm text-gray-500 font-medium">Let praxe</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">100%</p>
                <p className="text-sm text-gray-500 font-medium">Nezávislost</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">∞</p>
                <p className="text-sm text-gray-500 font-medium">Péče</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="lg:w-1/2 w-full">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary to-accent opacity-20 rounded-2xl blur-lg"></div>
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                alt="Finanční konzultace Marsan Fin" 
                className="relative rounded-2xl shadow-2xl w-full object-cover h-[400px] lg:h-[600px] z-10"
              />
              
              {/* Floating Element */}
              <div className="absolute bottom-8 left-8 right-8 z-20 bg-white/95 backdrop-blur-md p-6 rounded-xl shadow-xl border border-white/20">
                <p className="font-semibold text-gray-900 mb-1">Individuální strategie</p>
                <p className="text-sm text-gray-500">Každý klient je pro nás unikátní. Nenabízíme šablony, ale řešení.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;