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
import NotFound from './components/NotFound';

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
    <Services /> {/* Renders in "summary" mode */}
    <About />    {/* Renders in "summary" mode */}
    <Partners />
    <Testimonials />
    <Contact />
  </>
);

const AboutPage = () => (
  <>
    <div className="bg-gray-50 pt-32 pb-10 text-center">
       <h1 className="text-4xl font-bold text-gray-900">O nás</h1>
    </div>
    <About />
    <Testimonials />
  </>
);

const ServicesPage = () => (
  <>
    <div className="bg-gray-50 pt-32 pb-10 text-center">
       <h1 className="text-4xl font-bold text-gray-900">Naše služby</h1>
    </div>
    <Services />
    <Partners />
  </>
);

const PartnersPage = () => (
  <>
    <div className="bg-gray-50 pt-32 pb-10 text-center">
       <h1 className="text-4xl font-bold text-gray-900">Naši partneři</h1>
    </div>
    <Partners />
    <div className="py-20 text-center container mx-auto px-4">
      <p className="text-gray-600 max-w-2xl mx-auto mb-8">
        Spolupracujeme s celou řadou pojišťoven a bankovních domů, abychom pro vás vždy našli to nejlepší řešení na trhu.
        Díky silnému zázemí HV Group máme přístup k exkluzivním podmínkám.
      </p>
    </div>
  </>
);

const DocumentsPage = () => (
  <>
    <div className="bg-gray-50 pt-32 pb-10 text-center">
       <h1 className="text-4xl font-bold text-gray-900">Dokumenty</h1>
    </div>
    <LegalDocs />
  </>
);

const ContactPage = () => (
  <>
    <div className="bg-gray-50 pt-32 pb-10 text-center">
       <h1 className="text-4xl font-bold text-gray-900">Kontakt</h1>
    </div>
    <Contact />
    <div className="h-[400px] w-full bg-slate-200 relative grayscale hover:grayscale-0 transition-all duration-500">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.506896500599!2d14.45562777684074!3d50.07681697152327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b93708d748f67%3A0x70d8a7c647915525!2sKorunn%C3%AD%202569%2F108%2C%20101%2000%20Praha%2010-Vinohrady!5e0!3m2!1scs!2scz!4v1709638123456!5m2!1scs!2scz" 
        width="100%" 
        height="100%" 
        style={{ border: 0 }} 
        allowFullScreen 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="Mapa sídla Marsan Financial"
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
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <CookieConsent />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;