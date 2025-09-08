import React from 'react';
import { MenuSection as MenuSectionType } from '../types';
import MenuItem from './MenuItem';

interface MenuSectionProps {
  section: MenuSectionType;
}

const MenuSection: React.FC<MenuSectionProps> = ({ section }) => {
  return (
    <section id={section.id} className="scroll-mt-20">
      <h2 className="font-serif text-4xl font-bold text-brand-dark mb-8 text-center">
        {section.title}
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {section.items.map((item, index) => (
          <MenuItem key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

export default MenuSection;