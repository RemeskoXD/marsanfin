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
      {/* Top Bar Info - Slides up and fades out when scrolled */}
      <div 
        className={`bg-primary-dark text-white text-xs transition-all duration-500 overflow-hidden hidden lg:block border-b border-white/10 ${
          scrolled ? 'max-h-0 opacity-0 py-0' : 'max-h-10 opacity-100 py-2'
        }`}
      >
         <div className="container mx-auto px-4 flex justify-between items-center">
            <span className="opacity-80">Profesionální služby ve spolupráci s HV Group | {COMPANY_INFO.brandName}</span>
            <div className="flex gap-6">
              <a href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 hover:text-accent transition-colors"><Phone size={12} /> {COMPANY_INFO.phone}</a>
              <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center gap-2 hover:text-accent transition-colors"><Mail size={12} /> {COMPANY_INFO.email}</a>
            </div>
         </div>
      </div>

      <nav 
        className={`sticky top-0 w-full z-50 transition-all duration-500 border-b ${
          scrolled 
            ? 'bg-white/90 backdrop-blur-lg shadow-md py-3 border-gray-200' 
            : 'bg-white py-4 lg:py-6 border-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center group relative z-10">
              <img 
                src={COMPANY_INFO.logoUrl} 
                alt="Marsan Financial Logo" 
                className={`w-auto object-contain transition-all duration-500 group-hover:opacity-90 ${
                  scrolled ? 'h-14 md:h-16' : 'h-20 md:h-32'
                }`}
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive(link.path)
                      ? 'text-primary bg-blue-50 font-semibold'
                      : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className={`ml-4 pl-4 border-l border-gray-200 transition-all duration-500`}>
                <Link 
                  to="/kontakt" 
                  className={`bg-primary hover:bg-primary-light text-white rounded-md font-medium transition-all shadow-lg shadow-primary/20 hover:shadow-primary/30 text-sm flex items-center gap-2 group ${
                    scrolled ? 'px-4 py-2' : 'px-6 py-3'
                  }`}
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
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl min-h-screen animate-fade-in">
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-4 py-4 rounded-xl text-lg font-medium border-b border-gray-50 last:border-0 ${
                    isActive(link.path) 
                      ? 'text-primary bg-blue-50' 
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-6 mt-4">
                <Link 
                  to="/kontakt" 
                  className="w-full bg-primary text-white px-6 py-4 rounded-xl font-bold text-center block shadow-lg shadow-primary/20"
                >
                  Sjednat schůzku
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