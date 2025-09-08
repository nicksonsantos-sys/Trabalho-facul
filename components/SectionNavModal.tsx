
import React from 'react';
import { MenuSection } from '../types';

interface SectionNavModalProps {
  isOpen: boolean;
  onClose: () => void;
  sections: MenuSection[];
}

const SectionNavModal: React.FC<SectionNavModalProps> = ({ isOpen, onClose, sections }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-lg shadow-xl w-11/12 max-w-sm p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-serif text-2xl font-bold text-brand-red">Seções</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800" aria-label="Fechar">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav>
          <ul className="space-y-2">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  onClick={onClose}
                  className="block text-lg py-2 text-center text-gray-700 rounded-md hover:bg-brand-red hover:text-white transition-colors"
                  style={{ minHeight: '44px', lineHeight: '28px' }}
                >
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default SectionNavModal;
