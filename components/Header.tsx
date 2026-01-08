
import React from 'react';

const Header: React.FC = () => {
  return (
    <nav className="fixed w-full z-50 bg-plume-ivory/90 backdrop-blur-sm border-b border-plume-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center">
            <img
              src="/assets/logo-horizontal.png"
              alt="Plume Social Club"
              className="h-12 w-auto"
            />
          </div>
          <div className="hidden md:flex items-center space-x-6 text-sm font-medium tracking-wide">
            <a href="#about" className="hover:text-plume-gold transition-colors">FOUNDATION</a>
            <a href="#retreats" className="hover:text-plume-gold transition-colors">RETREATS</a>
            <a href="#trips" className="hover:text-plume-gold transition-colors">EXPERIENCES</a>
            <a href="#apply" className="hover:text-plume-gold transition-colors">APPLY</a>
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
