import React from 'react';
import Header from './components/Header';
import MenuSection from './components/MenuSection';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import { MENU_DATA } from './constants';

const App: React.FC = () => {

  const scrollToMenu = () => {
    const menuElement = document.getElementById('menu-start');
    if (menuElement) {
      menuElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="font-sans text-brand-dark bg-brand-light min-h-screen">
      <Header sections={MENU_DATA} />

      {/* Hero Section */}
      <section 
        id="hero"
        className="h-[70vh] md:h-[60vh] bg-hero-sushi bg-cover bg-center flex flex-col justify-center items-center text-white relative">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center p-4">
            <h1 className="font-serif text-5xl md:text-7xl font-bold">SUSHI BAR</h1>
            <p className="text-xl md:text-2xl text-gray-200 mt-4">“Frescor em cada peça”</p>
            <button 
              onClick={scrollToMenu}
              className="mt-8 px-8 py-3 bg-brand-red text-white font-bold rounded-full text-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-brand-red/50"
              style={{ minHeight: '44px' }}
            >
              Ver Cardápio
            </button>
        </div>
      </section>

      <main id="menu-start" className="scroll-mt-16 pt-16 pb-16 px-4 md:px-8 max-w-4xl mx-auto">
        <div className="space-y-16">
          {MENU_DATA.map((section) => (
            <MenuSection key={section.id} section={section} />
          ))}
        </div>
      </main>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default App;