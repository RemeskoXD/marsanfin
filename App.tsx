import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Partners from './components/Partners';
import Testimonials from './components/Testimonials';
import LegalDocs from './components/LegalDocs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';

// Helper component to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

// Page Components (Composed of sections)

const HomePage = () => (
  <>
    <Hero />
    <Services /> 
    <About />    
    <Partners />
    <Testimonials />
    <div className="reveal-on-scroll">
      <Contact />
    </div>
  </>
);

const AboutPage = () => (
  <>
    <div className="bg-gray-50 pt-32 pb-10 text-center border-b border-gray-200">
       <h1 className="text-4xl font-bold text-gray-900">O nás</h1>
       <p className="text-gray-500 mt-2">Příběh a hodnoty Marsan Fin</p>
    </div>
    <About />
    <Testimonials />
  </>
);

const ServicesPage = () => (
  <>
    <div className="bg-gray-50 pt-32 pb-10 text-center border-b border-gray-200">
       <h1 className="text-4xl font-bold text-gray-900">Naše služby</h1>
       <p className="text-gray-500 mt-2">Komplexní péče o Vaše finance</p>
    </div>
    <Services />
    <Partners />
  </>
);

const PartnersPage = () => (
  <>
    <div className="bg-gray-50 pt-32 pb-10 text-center border-b border-gray-200">
       <h1 className="text-4xl font-bold text-gray-900">Naši partneři</h1>
       <p className="text-gray-500 mt-2">Spolupráce založená na důvěře</p>
    </div>
    <Partners />
    <div className="py-20 text-center container mx-auto px-4 bg-white">
      <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-lg leading-relaxed">
        Díky silnému zázemí a spolupráci s <strong>HV Group</strong> máme přístup k exkluzivním podmínkám u bank a pojišťoven. 
        Vždy pro vás hledáme to nejvýhodnější řešení na trhu, nikoliv to, co se "nejlépe prodává".
      </p>
    </div>
  </>
);

const DocumentsPage = () => (
  <>
    <div className="bg-gray-50 pt-32 pb-10 text-center border-b border-gray-200">
       <h1 className="text-4xl font-bold text-gray-900">Dokumenty</h1>
       <p className="text-gray-500 mt-2">Legislativa a důležité informace</p>
    </div>
    <LegalDocs />
  </>
);

const ContactPage = () => (
  <>
    <div className="bg-gray-50 pt-32 pb-10 text-center border-b border-gray-200">
       <h1 className="text-4xl font-bold text-gray-900">Kontakt</h1>
       <p className="text-gray-500 mt-2">Jsme tu pro Vás</p>
    </div>
    <Contact />
    {/* Functional Google Maps Embed */}
    <div className="w-full h-[450px] bg-slate-100 border-t border-gray-200">
      <iframe 
        width="100%" 
        height="100%" 
        frameBorder="0" 
        scrolling="no" 
        marginHeight={0} 
        marginWidth={0} 
        src="https://maps.google.com/maps?q=Korunn%C3%AD+2569%2F108%2C+Praha+10&t=&z=15&ie=UTF8&iwloc=&output=embed"
        title="Mapa sídla Marsan Fin"
        className="filter grayscale hover:grayscale-0 transition-all duration-500"
      ></iframe>
    </div>
  </>
);

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white text-gray-800 font-sans selection:bg-accent/30 selection:text-primary-dark flex flex-col">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/o-nas" element={<AboutPage />} />
            <Route path="/sluzby" element={<ServicesPage />} />
            <Route path="/partneri" element={<PartnersPage />} />
            <Route path="/dokumenty" element={<DocumentsPage />} />
            <Route path="/kontakt" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <CookieConsent />
      </div>
    </BrowserRouter>
  );
}

export default App;