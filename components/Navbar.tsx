import React, { useState, useEffect } from 'react';
import Button from './Button';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-brand-black/95 backdrop-blur-sm py-4 shadow-md' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="font-extrabold text-2xl leading-none text-white tracking-tighter">
          hamilton<br />
          <span className="text-brand-orange">vinícius</span>
        </div>
        
        <div className="hidden md:flex items-center gap-6">
          <a href="#process" className="text-sm font-semibold text-white hover:text-brand-orange transition-colors">Como funciona</a>
          <a href="#portfolio" className="text-sm font-semibold text-white hover:text-brand-orange transition-colors">Portfólio</a>
          <Button variant="white" className="!py-2 !px-4 text-sm">
            Falar no WhatsApp
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;