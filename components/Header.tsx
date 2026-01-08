
import React from 'react';

const Header: React.FC = () => {
  return (
    <nav className="fixed w-full z-50 bg-plume-ivory/90 backdrop-blur-sm border-b border-plume-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center">
            <span className="font-serif text-3xl font-bold text-plume-burgundy italic">Plume</span>
            <span className="font-sans text-xs tracking-[0.2em] ml-2 text-plume-charcoal font-semibold">SOCIAL</span>
          </div>
          <div className="hidden md:flex items-center space-x-10 text-sm font-medium tracking-wide">
            <a href="#about" className="hover:text-plume-gold transition-colors">THE FOUNDATION</a>
            <a href="#membership" className="hover:text-plume-gold transition-colors">MEMBERSHIP</a>
            <a href="#trips" className="hover:text-plume-gold transition-colors">EXPERIENCES</a>
            <a href="#education" className="hover:text-plume-gold transition-colors">ELEVATION</a>
          </div>
          <div>
            <button className="bg-plume-burgundy text-plume-cream px-6 py-2 rounded-sm text-xs font-bold tracking-widest hover:bg-opacity-90 transition-all">
              JOIN THE CIRCLE
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
