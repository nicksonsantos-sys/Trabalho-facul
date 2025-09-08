import React from 'react';
import { MenuItem as MenuItemType } from '../types';
import { EggIcon, GlutenIcon, MilkIcon, SoyIcon, StarIcon } from './Icons';

interface MenuItemProps {
  item: MenuItemType;
}

const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full">
       <div className="flex justify-between items-start gap-2">
        <h3 className="text-lg font-semibold text-brand-dark tracking-wide">{item.name}</h3>
        <div className="flex items-center gap-2 flex-shrink-0 pt-1 text-brand-red">
            {item.tags.isSignature && <StarIcon title="Assinatura" />}
        </div>
      </div>
      
      <p className="text-gray-500 text-base mt-1 flex-grow">{item.description}</p>

      <div className="flex items-center gap-4 mt-3 pt-3 border-t border-gray-100 text-sm text-gray-500">
        <div className="flex items-center gap-2">
            {item.tags.isVegan && <span className="font-semibold text-green-700 bg-green-100 px-2 py-0.5 rounded-full text-xs">VG</span>}
            {item.tags.isGlutenFree && <span className="font-semibold text-blue-700 bg-blue-100 px-2 py-0.5 rounded-full text-xs">GF</span>}
        </div>
        <div className="flex items-center gap-2 text-gray-400">
            {item.allergens?.hasSoy && <SoyIcon title="Contém Soja" />}
            {item.allergens?.hasGluten && <GlutenIcon title="Contém Glúten" />}
            {item.allergens?.hasEgg && <EggIcon title="Contém Ovo" />}
            {item.allergens?.hasMilk && <MilkIcon title="Contém Leite" />}
        </div>
      </div>
    </div>
  );
};

export default MenuItem;