
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&q=80&w=2000" 
          className="w-full h-full object-cover"
          alt="Elegant woman in silhouette with soft light"
        />
        <div className="absolute inset-0 gradient-overlay" />
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h2 className="text-plume-gold font-sans tracking-[0.4em] text-sm mb-6 uppercase">Where Indulgence Meets Intention</h2>
        <h1 className="text-white font-serif text-5xl md:text-8xl mb-8 leading-tight italic">
          Rise. Gather. Thrive.
        </h1>
        <p className="text-plume-cream/90 text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto leading-relaxed">
          The private sanctuary for accomplished Black women to exhale, build legacy, and navigate life's finest pleasures together.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a href="#apply" className="bg-plume-gold text-plume-burgundy px-10 py-4 font-bold tracking-widest rounded-sm hover:scale-105 transition-transform text-sm">
            REQUEST AN INVITATION
          </a>
          <a href="#retreats" className="border border-white text-white px-10 py-4 font-bold tracking-widest rounded-sm hover:bg-white hover:text-plume-burgundy transition-all text-sm">
            VIEW RETREATS
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-12 bg-white/50"></div>
      </div>
    </section>
  );
};

export default Hero;
