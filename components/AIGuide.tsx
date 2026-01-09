
import React, { useState } from 'react';

const AIGuide: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {isOpen ? (
        <div className="bg-plume-ivory w-72 rounded-lg shadow-2xl border border-plume-gold/30 overflow-hidden">
          {/* Header */}
          <div className="bg-plume-burgundy p-4 flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <img src="/assets/logo-icon.png" alt="Plume" className="w-8 h-8 object-contain" />
              <p className="text-white text-sm font-bold font-serif italic">Get in Touch</p>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white hover:text-plume-gold transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
          </div>

          {/* Contact Info */}
          <div className="p-5 space-y-4">
            <div>
              <p className="text-xs text-plume-charcoal/60 uppercase tracking-widest mb-1">Email</p>
              <a href="mailto:akua@plumesocialclub.net" className="text-plume-burgundy font-medium text-sm hover:text-plume-gold transition-colors">
                akua@plumesocialclub.net
              </a>
            </div>

            <div>
              <p className="text-xs text-plume-charcoal/60 uppercase tracking-widest mb-2">Follow Us</p>
              <div className="flex space-x-3">
                <a href="#" className="text-plume-teal hover:text-plume-gold transition-colors text-sm">Instagram</a>
                <a href="#" className="text-plume-teal hover:text-plume-gold transition-colors text-sm">LinkedIn</a>
                <a href="#" className="text-plume-teal hover:text-plume-gold transition-colors text-sm">Facebook</a>
              </div>
            </div>

            <a
              href="#apply"
              onClick={() => setIsOpen(false)}
              className="block w-full bg-plume-gold text-plume-burgundy text-center py-2.5 text-xs font-bold tracking-widest uppercase rounded-sm hover:bg-opacity-90 transition-all"
            >
              Request an Invitation
            </a>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-plume-burgundy w-14 h-14 rounded-full shadow-2xl flex items-center justify-center text-white hover:scale-110 transition-transform border-2 border-plume-gold/40 group overflow-hidden"
        >
          <img src="/assets/logo-icon.png" alt="Contact" className="w-10 h-10 object-contain group-hover:scale-110 transition-transform" />
        </button>
      )}
    </div>
  );
};

export default AIGuide;
