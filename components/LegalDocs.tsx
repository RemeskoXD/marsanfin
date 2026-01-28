import React from 'react';
import { DOCUMENTS } from '../constants';
import { FileText, Download } from 'lucide-react';

const LegalDocs: React.FC = () => {
  return (
    <section id="documents" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Dokumenty a licence</h2>
          <p className="text-gray-600">
            Fungujeme plně v souladu s předpisy České národní banky. Transparentnost je pro nás klíčová.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          {DOCUMENTS.map((doc, index) => (
            <div 
              key={index} 
              className={`flex items-center justify-between p-5 hover:bg-gray-50 transition-colors ${
                index !== DOCUMENTS.length - 1 ? 'border-b border-gray-100' : ''
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-2 rounded text-primary">
                  <FileText size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">{doc.title}</h4>
                  <span className="text-xs text-gray-500 uppercase">{doc.type} • Aktualizováno {doc.date}</span>
                </div>
              </div>
              <button className="text-gray-400 hover:text-accent transition-colors" title="Stáhnout">
                <Download size={20} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LegalDocs;