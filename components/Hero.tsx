
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-16 lg:pt-20">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&q=80&w=2000"
          className="w-full h-full object-cover"
          alt="Elegant woman in silhouette with soft light"
        />
        <div className="absolute inset-0 gradient-overlay" />
      </div>

      <div className="relative z-10 text-center px-6 md:px-8 max-w-4xl mx-auto py-20">
        <h2 className="text-plume-gold font-sans tracking-[0.3em] md:tracking-[0.4em] text-xs md:text-sm mb-6 uppercase">Where Indulgence Meets Intention</h2>
        <h1 className="text-white font-serif text-4xl md:text-6xl lg:text-7xl mb-6 md:mb-8 leading-tight italic">
          Rise. Gather. Thrive.
        </h1>
        <p className="text-plume-cream/90 text-base md:text-lg lg:text-xl font-light mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed">
          The private sanctuary for accomplished Black women to exhale, build legacy, and navigate life's finest pleasures together.
        </p>
        <div className="flex items-center justify-center">
          <a href="#apply" className="bg-plume-gold text-plume-burgundy px-8 py-3.5 md:px-10 md:py-4 font-bold tracking-widest rounded-sm hover:scale-105 transition-transform text-xs md:text-sm">
            REQUEST AN INVITATION
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-px h-10 bg-white/50"></div>
      </div>
    </section>
  );
};

export default Hero;
