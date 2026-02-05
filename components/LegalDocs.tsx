import React from 'react';
import { DOCUMENTS, COMPANY_INFO } from '../constants';
import { FileText, Download, ExternalLink, ShieldCheck } from 'lucide-react';

const LegalDocs: React.FC = () => {
  return (
    <section id="documents" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Dokumenty a certifikace</h2>
          <p className="text-gray-600 mb-8">
            Fungujeme plně v souladu s předpisy České národní banky. Transparentnost je pro nás klíčová.
          </p>
          
          <a 
            href={COMPANY_INFO.cnbRegistryUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white border border-gray-200 px-6 py-4 rounded-xl shadow-sm hover:shadow-md hover:border-primary/50 transition-all group text-left"
          >
            <div className="bg-green-100 p-2 rounded-full text-green-700">
              <ShieldCheck size={24} />
            </div>
            <div>
              <p className="font-bold text-gray-900 group-hover:text-primary transition-colors">Ověřit registraci u ČNB</p>
              <p className="text-xs text-gray-500">Kliknutím přejdete do oficiálního registru</p>
            </div>
            <ExternalLink size={16} className="text-gray-400 group-hover:text-primary ml-2" />
          </a>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-4 bg-gray-50 border-b border-gray-100">
            <h3 className="font-semibold text-gray-700">Ke stažení</h3>
          </div>
          {DOCUMENTS.map((doc, index) => (
            <a 
              key={index} 
              href={doc.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-between p-5 hover:bg-blue-50/50 transition-colors group cursor-pointer ${
                index !== DOCUMENTS.length - 1 ? 'border-b border-gray-100' : ''
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-2 rounded text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  {doc.type === 'LINK' ? <ExternalLink size={20} /> : <FileText size={20} />}
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 group-hover:text-primary transition-colors">{doc.title}</h4>
                  <span className="text-xs text-gray-500 uppercase">
                    {doc.type} • Aktualizováno {doc.date}
                  </span>
                </div>
              </div>
              <div className="text-gray-400 group-hover:text-accent transition-colors p-2" title={doc.type === 'LINK' ? 'Otevřít' : 'Stáhnout'}>
                {doc.type === 'LINK' ? <ExternalLink size={20} /> : <Download size={20} />}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LegalDocs;