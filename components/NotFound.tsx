import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-gray-50 px-4 text-center">
      <h1 className="text-9xl font-bold text-primary/10">404</h1>
      <div className="-mt-12 mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Stránka nenalezena</h2>
        <p className="text-gray-600 max-w-md mx-auto">
          Omlouváme se, ale stránka, kterou hledáte, neexistuje nebo byla přesunuta.
        </p>
      </div>
      <Link 
        to="/" 
        className="bg-primary hover:bg-primary-light text-white px-6 py-3 rounded-lg font-medium transition-all shadow-lg shadow-primary/20 flex items-center gap-2 group"
      >
        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
        Zpět na úvodní stránku
      </Link>
    </div>
  );
};

export default NotFound;