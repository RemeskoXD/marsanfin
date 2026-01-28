import React from 'react';
import { COMPANY_INFO } from '../constants';
import { Facebook, Linkedin, Instagram, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-gray-400 pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1">
            <h4 className="text-white text-2xl font-bold mb-6 tracking-tight">MARSAN FIN</h4>
            <p className="text-sm leading-relaxed mb-6 text-gray-300">
              Váš spolehlivý partner pro finance a pojištění.
              Přinášíme stabilitu do Vašich financí díky exkluzivní spolupráci s HV Group.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-accent hover:text-white transition-all"><Facebook size={18} /></a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-accent hover:text-white transition-all"><Linkedin size={18} /></a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-accent hover:text-white transition-all"><Instagram size={18} /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h5 className="text-white font-semibold mb-6 text-lg">Mapa stránek</h5>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-accent transition-colors flex items-center gap-2">Domů</Link></li>
              <li><Link to="/o-nas" className="hover:text-accent transition-colors flex items-center gap-2">O nás</Link></li>
              <li><Link to="/sluzby" className="hover:text-accent transition-colors flex items-center gap-2">Služby</Link></li>
              <li><Link to="/partneri" className="hover:text-accent transition-colors flex items-center gap-2">Partneři</Link></li>
              <li><Link to="/kontakt" className="hover:text-accent transition-colors flex items-center gap-2">Kontakt</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h5 className="text-white font-semibold mb-6 text-lg">Dokumenty</h5>
            <ul className="space-y-3 text-sm">
              <li><Link to="/dokumenty" className="hover:text-accent transition-colors">Informace pro klienty</Link></li>
              <li><Link to="/dokumenty" className="hover:text-accent transition-colors">Reklamační řád</Link></li>
              <li><Link to="/dokumenty" className="hover:text-accent transition-colors">Ochrana osobních údajů</Link></li>
              <li><Link to="/dokumenty" className="hover:text-accent transition-colors">Seznam pojišťoven</Link></li>
            </ul>
          </div>

          {/* Contact Small */}
          <div>
             <h5 className="text-white font-semibold mb-6 text-lg">Kontakt</h5>
             <ul className="space-y-4 text-sm">
               <li className="flex items-start gap-3">
                 <Phone size={18} className="text-accent shrink-0 mt-0.5" />
                 <span>{COMPANY_INFO.phone}</span>
               </li>
               <li className="flex items-start gap-3">
                 <Mail size={18} className="text-accent shrink-0 mt-0.5" />
                 <span className="break-all">{COMPANY_INFO.email}</span>
               </li>
               <li className="flex items-start gap-3">
                 <MapPin size={18} className="text-accent shrink-0 mt-0.5" />
                 <span>{COMPANY_INFO.address}</span>
               </li>
             </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {currentYear} {COMPANY_INFO.name}. Všechna práva vyhrazena.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span>IČO: {COMPANY_INFO.ico}</span>
            <span>Created with precision</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;