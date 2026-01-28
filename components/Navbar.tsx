import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { COMPANY_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Domů', path: '/' },
    { name: 'O nás', path: '/o-nas' },
    { name: 'Služby', path: '/sluzby' },
    { name: 'Partneři', path: '/partneri' },
    { name: 'Dokumenty', path: '/dokumenty' },
    { name: 'Kontakt', path: '/kontakt' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* Top Bar Info */}
      <div className="bg-primary-dark text-white text-xs py-2 hidden lg:block border-b border-white/10">
         <div className="container mx-auto px-4 flex justify-between items-center">
            <span className="opacity-80">Profesionální finanční služby ve spolupráci s HV Group</span>
            <div className="flex gap-6">
              <a href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 hover:text-accent transition-colors"><Phone size={12} /> {COMPANY_INFO.phone}</a>
              <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center gap-2 hover:text-accent transition-colors"><Mail size={12} /> {COMPANY_INFO.email}</a>
            </div>
         </div>
      </div>

      <nav 
        className={`sticky top-0 w-full z-50 transition-all duration-300 border-b ${
          scrolled ? 'bg-white shadow-md py-2 border-gray-100' : 'bg-white py-4 border-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <img 
                src={COMPANY_INFO.logoUrl} 
                alt="Marsan Fin Logo" 
                className="h-10 md:h-12 w-auto object-contain group-hover:opacity-90 transition-opacity" 
              />
              <div className="hidden md:block">
                <span className="block text-primary font-bold text-xl leading-none tracking-tight">MARSAN FIN</span>
                <span className="block text-gray-500 text-[10px] uppercase tracking-[0.2em] mt-0.5">Finance & Insurance</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    isActive(link.path)
                      ? 'text-primary bg-blue-50'
                      : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="ml-4 pl-4 border-l border-gray-200">
                <Link 
                  to="/kontakt" 
                  className="bg-primary hover:bg-primary-light text-white px-5 py-2.5 rounded-md font-medium transition-all shadow-lg shadow-primary/20 hover:shadow-primary/30 text-sm flex items-center gap-2 group"
                >
                  Sjednat schůzku
                  <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-gray-700 p-2 hover:bg-gray-100 rounded-md transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl min-h-screen">
            <div className="flex flex-col p-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-4 py-3 rounded-lg text-lg font-medium ${
                    isActive(link.path) 
                      ? 'bg-blue-50 text-primary' 
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-100 mt-4">
                <Link 
                  to="/kontakt" 
                  className="w-full bg-primary text-white px-4 py-3 rounded-lg font-medium text-center block"
                >
                  Kontaktovat nás
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;