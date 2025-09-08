import React, { useState, useEffect } from 'react';
import SectionNavModal from './SectionNavModal';
import { MenuSection } from '../types';

interface HeaderProps {
  sections: MenuSection[];
}

const Header: React.FC<HeaderProps> = ({ sections }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const heroSection = document.getElementById('hero');
    // Use the hero section's height for a dynamic threshold, with a fallback
    const threshold = heroSection ? heroSection.offsetHeight - 80 : window.innerHeight * 0.6;

    const handleScroll = () => {
      if (window.scrollY > threshold) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Run on mount to check initial scroll position
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleToggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleCloseNav = () => {
    setIsNavOpen(false);
  }

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isSticky ? 'bg-brand-dark/95 backdrop-blur-sm shadow-lg opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
        }`}
      >
        <div className="max-w-4xl mx-auto px-4 md:px-8 h-16 flex justify-between items-center text-white">
          <a href="#" className="font-serif text-xl font-bold tracking-wider">
            SUSHI BAR
          </a>
          <button
            onClick={handleToggleNav}
            className="px-4 py-2 border border-white/50 rounded-md text-sm font-semibold hover:bg-brand-red hover:border-brand-red transition-colors focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 focus:ring-offset-brand-dark"
            style={{ minHeight: '44px' }}
          >
            Seções
          </button>
        </div>
      </header>
      <SectionNavModal isOpen={isNavOpen} onClose={handleCloseNav} sections={sections} />
    </>
  );
};

export default Header;