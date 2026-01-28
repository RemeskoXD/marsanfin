import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import { COMPANY_INFO } from '../constants';
import { MapPin, Phone, Mail, Building, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setFormStatus('success');
    setTimeout(() => setFormStatus('idle'), 5000);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading title="Kontaktujte nás" subtitle="Jsme připraveni se Vám věnovat." />

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Contact Info */}
          <div className="lg:w-1/3 space-y-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-primary shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-semibold uppercase mb-1">Adresa sídla</p>
                  <p className="text-gray-800 text-lg leading-snug">{COMPANY_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-primary shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-semibold uppercase mb-1">Telefon</p>
                  <a href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`} className="text-gray-800 text-lg hover:text-accent transition-colors">
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-primary shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-semibold uppercase mb-1">Email</p>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="text-gray-800 text-lg hover:text-accent transition-colors">
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-primary shrink-0">
                  <Building size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-semibold uppercase mb-1">Fakturační údaje</p>
                  <p className="text-gray-800">IČO: {COMPANY_INFO.ico}</p>
                  <p className="text-gray-800">{COMPANY_INFO.name}</p>
                </div>
              </div>
            </div>
            
            <div className="pt-6 border-t border-gray-100">
               <p className="text-sm text-gray-500">
                 Provozovatel je zapsán v obchodním rejstříku. Podléháme dohledu České národní banky.
               </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:w-2/3 bg-gray-50 p-8 md:p-10 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Napište nám</h3>
            
            {formStatus === 'success' ? (
              <div className="bg-green-100 border border-green-200 text-green-700 px-4 py-8 rounded text-center">
                <p className="font-bold text-lg mb-2">Děkujeme za zprávu!</p>
                <p>Brzy se Vám ozveme zpět.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Jméno a příjmení</label>
                    <input 
                      type="text" 
                      id="name" 
                      required 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      placeholder="Jan Novák"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefon</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      required 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      placeholder="+420 777 000 000"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    required 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="jan.novak@email.cz"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Vaše zpráva</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    required 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="Mám zájem o..."
                  ></textarea>
                </div>

                <div className="flex items-center gap-2 mb-4">
                   <input type="checkbox" id="consent" required className="rounded text-primary focus:ring-primary"/>
                   <label htmlFor="consent" className="text-xs text-gray-500">
                     Souhlasím se zpracováním osobních údajů pro účely kontaktování.
                   </label>
                </div>

                <button 
                  type="submit" 
                  className="w-full md:w-auto bg-primary hover:bg-primary-light text-white px-8 py-3 rounded-lg font-bold transition-colors flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  Odeslat zprávu
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;