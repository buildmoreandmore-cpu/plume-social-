
import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Retreats from './components/Retreats';
import SampleItinerary from './components/SampleItinerary';
import ApplicationForm from './components/ApplicationForm';
import AIGuide from './components/AIGuide';
import { MEMBERSHIP_TIERS, EDUCATIONAL_PILLARS } from './constants';

const App: React.FC = () => {
  // Initialize scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll(
      '.animate-on-scroll, .animate-slide-left, .animate-slide-right, .animate-scale'
    );
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen font-sans selection:bg-plume-gold selection:text-plume-burgundy">
      <Header />
      
      <main>
        <Hero />

        {/* The Brand Foundation */}
        <section id="about" className="py-16 md:py-24 px-6 bg-plume-cream">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="animate-slide-left">
                <h3 className="text-plume-gold font-sans tracking-[0.3em] text-xs mb-3 uppercase">The Foundation</h3>
                <h2 className="text-plume-burgundy font-serif text-3xl md:text-4xl lg:text-5xl italic mb-6">
                  Transformation + Indulgence + Sisterhood
                </h2>
                <div className="space-y-5 text-plume-charcoal/80 leading-relaxed text-base md:text-lg">
                  <p>
                    Plume Social isn't just a club—it's a sanctuary. For the woman who has spent decades building, nurturing, and achieving, this is where you finally get to exhale.
                  </p>
                  <p>
                    <strong>The Circle is our gateway.</strong> We believe in intentional community. Admission is curated to ensure every sister is aligned in spirit and success. 
                  </p>
                  <p className="font-medium text-plume-charcoal">
                    Joining the Circle is complimentary. The only cost is your commitment to your growth and the journeys you choose to take with us.
                  </p>
                </div>
              </div>
              <div className="relative animate-slide-right">
                <div className="aspect-[4/5] bg-plume-burgundy rounded-sm overflow-hidden shadow-2xl">
                  <img
                    src="/assets/women-lounge.png"
                    className="w-full h-full object-cover"
                    alt="Women enjoying conversation in luxury lounge"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Joining the Circle */}
        <section id="membership" className="py-16 md:py-24 px-6 bg-plume-ivory">
          <div className="max-w-6xl mx-auto text-center mb-12">
            <h3 className="text-plume-gold font-sans tracking-[0.3em] text-xs mb-3 uppercase">Access</h3>
            <h2 className="text-plume-burgundy font-serif text-3xl md:text-4xl italic mb-4">Entry into the Circle</h2>
            <p className="max-w-xl mx-auto text-plume-charcoal/70 text-sm md:text-base">
              There are no membership or entry fees. Our sanctuary is gated only by alignment and invitation.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {MEMBERSHIP_TIERS.map((tier) => (
              <div key={tier.id} className="bg-white border border-plume-gold/20 rounded-sm overflow-hidden flex flex-col hover:shadow-xl transition-all group">
                <div className={`${tier.color} p-6 md:p-8 text-white text-center`}>
                  <h4 className="font-sans tracking-[0.2em] text-xs mb-2 uppercase">{tier.name}</h4>
                  <p className="text-2xl font-serif italic mb-1">{tier.price}</p>
                  <p className="text-[10px] uppercase tracking-widest opacity-70">Application Based</p>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-plume-charcoal font-medium mb-6 text-center italic text-sm">{tier.description}</p>
                  <ul className="space-y-3 mb-6 flex-1">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-sm text-plume-charcoal/70">
                        <span className="text-plume-gold mr-2 text-xs">✦</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a href="#apply" className="w-full py-3 bg-plume-burgundy text-white font-bold tracking-widest text-xs hover:bg-opacity-90 transition-all uppercase block text-center">
                    Request an Invitation
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Luxury Retreats */}
        <Retreats />

        {/* Sample Itinerary - Phoenix Example */}
        <SampleItinerary />

        {/* Education Pillars */}
        <section id="education" className="py-16 md:py-24 px-6 bg-plume-cream">
          <div className="max-w-6xl mx-auto text-center mb-10 md:mb-12">
            <h3 className="text-plume-gold font-sans tracking-[0.3em] text-xs mb-3 uppercase">Elevation</h3>
            <h2 className="text-plume-burgundy font-serif text-3xl md:text-4xl italic">Knowledge for the Journey</h2>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {EDUCATIONAL_PILLARS.map((pillar, i) => (
              <div key={i} className="bg-white p-5 md:p-6 rounded-sm border border-plume-teal/20 hover:border-plume-gold transition-colors">
                <div className="text-2xl md:text-3xl mb-4 text-plume-burgundy">{pillar.icon}</div>
                <h4 className="text-base md:text-lg font-serif italic text-plume-burgundy mb-4">{pillar.title}</h4>
                <ul className="space-y-2">
                  {pillar.topics.map((topic, j) => (
                    <li key={j} className="text-xs md:text-sm text-plume-charcoal/70 flex items-center">
                      <span className="w-1 h-1 rounded-full bg-plume-gold mr-2 flex-shrink-0"></span>
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Application Form */}
        <ApplicationForm />

        {/* Sponsorship / The Floor */}
        <section className="py-16 md:py-24 px-6 bg-plume-charcoal text-white relative overflow-hidden">
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <h3 className="text-plume-gold font-sans tracking-[0.3em] text-xs mb-3 uppercase">Partnerships</h3>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl italic mb-6">Take The Floor</h2>
            <p className="text-base md:text-lg text-plume-cream/70 mb-8 leading-relaxed">
              We curate partners who add value, not noise. Showcase your expertise to a community of high-net-worth Black women leaders.
            </p>
            <a href="mailto:akua@plumesocialclub.net" className="inline-block bg-plume-gold text-plume-burgundy px-8 py-3 font-bold tracking-widest rounded-sm hover:scale-105 transition-transform text-xs uppercase">
              Become a Sponsor
            </a>
          </div>
          <div className="absolute top-0 right-0 w-48 h-48 bg-plume-burgundy rounded-full blur-[80px] opacity-20 -mr-24 -mt-24"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-plume-gold rounded-full blur-[100px] opacity-10 -ml-32 -mb-32"></div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-plume-ivory py-12 md:py-16 px-6 border-t border-plume-gold/20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <img
                src="/assets/logo-horizontal.png"
                alt="Plume Social Club"
                className="h-10 md:h-12 w-auto"
              />
            </div>
            <p className="text-plume-charcoal/60 max-w-sm mb-6 text-sm">
              A private sanctuary for accomplished Black women to navigate their next chapter through shared indulgence and sisterhood.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-plume-teal hover:text-plume-gold transition-colors text-sm">Instagram</a>
              <a href="#" className="text-plume-teal hover:text-plume-gold transition-colors text-sm">LinkedIn</a>
              <a href="#" className="text-plume-teal hover:text-plume-gold transition-colors text-sm">Facebook</a>
            </div>
          </div>

          <div>
            <h5 className="font-sans tracking-widest text-xs font-bold mb-4 uppercase">Quick Links</h5>
            <ul className="space-y-2.5 text-sm text-plume-charcoal/60">
              <li><a href="#about" className="hover:text-plume-gold transition-colors">The Foundation</a></li>
              <li><a href="#membership" className="hover:text-plume-gold transition-colors">The Circle</a></li>
              <li><a href="#retreats" className="hover:text-plume-gold transition-colors">Retreats</a></li>
              <li><a href="#education" className="hover:text-plume-gold transition-colors">Elevation</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-sans tracking-widest text-xs font-bold mb-4 uppercase">Contact</h5>
            <ul className="space-y-2.5 text-sm text-plume-charcoal/60">
              <li><a href="mailto:akua@plumesocialclub.net" className="hover:text-plume-gold transition-colors">akua@plumesocialclub.net</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-plume-gold/10 text-center text-[10px] text-plume-charcoal/40 tracking-widest">
          © {new Date().getFullYear()} PLUME SOCIAL CLUB. ALL RIGHTS RESERVED.
        </div>
      </footer>

      {/* Sisterhood AI Guide */}
      <AIGuide />
    </div>
  );
};

export default App;
