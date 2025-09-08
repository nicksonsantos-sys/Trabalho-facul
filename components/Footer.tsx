
import React from 'react';
import { EggIcon, GlutenIcon, MilkIcon, SoyIcon, StarIcon } from './Icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white/80 py-8 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h3 className="font-serif text-xl font-bold mb-4 text-white">Legenda</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <span className="font-bold text-base w-6 text-center">VG</span>
            <span>Vegano</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-base w-6 text-center">GF</span>
            <span>Sem Glúten</span>
          </div>
          <div className="flex items-center gap-2">
            <StarIcon />
            <span>Assinatura</span>
          </div>
          <div className="flex items-center gap-2">
            <SoyIcon />
            <span>Contém Soja</span>
          </div>
          <div className="flex items-center gap-2">
            <GlutenIcon />
            <span>Contém Glúten</span>
          </div>
          <div className="flex items-center gap-2">
            <EggIcon />
            <span>Contém Ovo</span>
          </div>
          <div className="flex items-center gap-2">
            <MilkIcon />
            <span>Contém Leite</span>
          </div>
        </div>
        <div className="mt-8 border-t border-white/20 pt-4 text-center text-xs text-white/50">
          <p>&copy; {new Date().getFullYear()} Sushi Bar. Todos os direitos reservados.</p>
          <p className="mt-1">
            Se você tem alguma alergia alimentar, por favor, informe nossa equipe.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
