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
    <div className="h-[400px] w-full bg-slate-200 relative">
      {/* Placeholder for real Google Maps Embed - Client needs to provide API key or Embed code */}
      <div className="absolute inset-0 flex items-center justify-center text-gray-500 bg-gray-200">
         <div className="text-center p-4">
           <p className="font-bold text-lg mb-2">Mapa - Korunní 2569/108, Praha 10</p>
           <p className="text-sm">Zde bude interaktivní mapa po dodání API klíče</p>
         </div>
      </div>
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
      </div>
    </BrowserRouter>
  );
}

export default App;