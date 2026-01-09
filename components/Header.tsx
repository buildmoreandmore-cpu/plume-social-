
import React from 'react';

const Header: React.FC = () => {
  return (
    <nav className="fixed w-full z-50 bg-plume-ivory/95 backdrop-blur-md border-b border-plume-gold/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between h-16 lg:h-20 items-center">
          <div className="flex items-center">
            <img
              src="/assets/logo-horizontal.png"
              alt="Plume Social Club"
              className="h-10 lg:h-12 w-auto"
            />
          </div>
          <div className="hidden lg:flex items-center space-x-8 text-xs font-semibold tracking-widest">
            <a href="#about" className="hover:text-plume-gold transition-colors">FOUNDATION</a>
            <a href="#retreats" className="hover:text-plume-gold transition-colors">RETREATS</a>
            <a href="#education" className="hover:text-plume-gold transition-colors">ELEVATION</a>
          </div>
          <div>
            <a href="#apply" className="bg-plume-burgundy text-plume-cream px-5 py-2.5 lg:px-6 lg:py-3 rounded-sm text-xs font-bold tracking-widest hover:bg-opacity-90 transition-all inline-block">
              REQUEST AN INVITATION
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
