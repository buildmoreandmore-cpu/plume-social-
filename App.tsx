
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Retreats from './components/Retreats';
import SampleItinerary from './components/SampleItinerary';
import ApplicationForm from './components/ApplicationForm';
import AIGuide from './components/AIGuide';
import { MEMBERSHIP_TIERS, TRIPS, EDUCATIONAL_PILLARS } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans selection:bg-plume-gold selection:text-plume-burgundy">
      <Header />
      
      <main>
        <Hero />

        {/* The Brand Foundation */}
        <section id="about" className="py-24 px-4 bg-plume-cream">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h3 className="text-plume-gold font-sans tracking-[0.3em] text-sm mb-4 uppercase">The Foundation</h3>
                <h2 className="text-plume-burgundy font-serif text-4xl md:text-5xl italic mb-8">
                  Transformation + Indulgence + Sisterhood
                </h2>
                <div className="space-y-6 text-plume-charcoal/80 leading-relaxed text-lg">
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
              <div className="relative">
                <div className="aspect-[4/5] bg-plume-burgundy rounded-sm overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1571166311099-92161bc3d24a?auto=format&fit=crop&q=80&w=1000"
                    className="w-full h-full object-cover mix-blend-multiply opacity-80"
                    alt="Women laughing over drinks"
                  />
                </div>
                <div className="absolute -bottom-12 -left-8 bg-plume-cream p-6 rounded-sm shadow-xl hidden md:block border border-plume-gold/30">
                  <img src="/assets/logo-badge.png" alt="Plume Social Club" className="h-28 w-auto" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Joining the Circle */}
        <section id="membership" className="py-24 px-4 bg-plume-ivory">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <h3 className="text-plume-gold font-sans tracking-[0.3em] text-sm mb-4 uppercase">Access</h3>
            <h2 className="text-plume-burgundy font-serif text-4xl md:text-5xl italic mb-6">Entry into the Circle</h2>
            <p className="max-w-2xl mx-auto text-plume-charcoal/70">
              There are no membership or entry fees. Our sanctuary is gated only by alignment and invitation. 
              <strong> You must join the circle before you can book a Plume experience.</strong>
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            {MEMBERSHIP_TIERS.map((tier) => (
              <div key={tier.id} className="bg-white border border-plume-gold/20 rounded-sm overflow-hidden flex flex-col hover:shadow-2xl transition-all group">
                <div className={`${tier.color} p-10 text-white text-center`}>
                  <h4 className="font-sans tracking-[0.2em] text-sm mb-2 uppercase">{tier.name}</h4>
                  <p className="text-3xl font-serif italic mb-2">{tier.price}</p>
                  <p className="text-xs uppercase tracking-widest opacity-70">Application Based</p>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <p className="text-plume-charcoal font-medium mb-8 text-center italic">{tier.description}</p>
                  <ul className="space-y-4 mb-10 flex-1">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-sm text-plume-charcoal/70">
                        <span className="text-plume-gold mr-3">✦</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full py-4 bg-plume-burgundy text-white font-bold tracking-widest text-xs hover:bg-opacity-90 transition-all uppercase">
                    Request an Invitation
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Luxury Retreats */}
        <Retreats />

        {/* Sample Itinerary - Phoenix Example */}
        <SampleItinerary />

        {/* Trips Showcase */}
        <section id="trips" className="py-24 px-4 bg-plume-burgundy text-white overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-2xl">
              <h3 className="text-plume-gold font-sans tracking-[0.3em] text-sm mb-4 uppercase">Curated Experiences</h3>
              <h2 className="font-serif text-4xl md:text-5xl italic mb-6">Intentional Journeys</h2>
              <p className="text-plume-cream/70 text-lg">
                Exclusive to the Plume Circle. These journeys are the heart of our community. 
                <strong> Apply for entry to unlock the world.</strong>
              </p>
            </div>
            <div className="flex flex-col items-end">
              <p className="text-xs tracking-widest text-plume-gold mb-4 uppercase italic">Invitation Required to Book</p>
              <button className="hidden md:block px-8 py-3 border border-plume-gold text-plume-gold font-bold tracking-widest text-xs hover:bg-plume-gold hover:text-plume-burgundy transition-all">
                PREVIEW TRIPS
              </button>
            </div>
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {TRIPS.map((trip, i) => (
              <div key={i} className="group relative overflow-hidden rounded-sm aspect-[3/4]">
                <img 
                  src={trip.imageUrl} 
                  alt={trip.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-plume-burgundy via-transparent to-transparent opacity-80" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <span className="text-plume-teal text-xs font-sans tracking-[0.2em] mb-2 uppercase">{trip.type}</span>
                  <h4 className="text-2xl font-serif italic mb-2">{trip.title}</h4>
                  <p className="text-sm text-plume-cream/80 mb-4 line-clamp-2">{trip.description}</p>
                  <div className="flex justify-between items-center pt-4 border-t border-white/20">
                    <span className="text-sm font-bold tracking-wide">{trip.location}</span>
                    <span className="text-plume-gold font-serif italic text-xs uppercase tracking-widest">{trip.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education Pillars */}
        <section id="education" className="py-24 px-4 bg-plume-cream">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <h3 className="text-plume-gold font-sans tracking-[0.3em] text-sm mb-4 uppercase">Elevation</h3>
            <h2 className="text-plume-burgundy font-serif text-4xl md:text-5xl italic">Knowledge for the Journey</h2>
          </div>
          
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {EDUCATIONAL_PILLARS.map((pillar, i) => (
              <div key={i} className="bg-white p-8 rounded-sm border border-plume-teal/20 hover:border-plume-gold transition-colors">
                <div className="text-4xl mb-6">{pillar.icon}</div>
                <h4 className="text-xl font-serif italic text-plume-burgundy mb-6">{pillar.title}</h4>
                <ul className="space-y-3">
                  {pillar.topics.map((topic, j) => (
                    <li key={j} className="text-sm text-plume-charcoal/70 flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-plume-gold mr-3"></span>
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
        <section className="py-24 px-4 bg-plume-charcoal text-white relative overflow-hidden">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h3 className="text-plume-gold font-sans tracking-[0.3em] text-sm mb-4 uppercase">Partnerships</h3>
            <h2 className="font-serif text-4xl md:text-6xl italic mb-8">Take The Floor</h2>
            <p className="text-xl text-plume-cream/70 mb-12 leading-relaxed">
              We curate partners who add value, not noise. Showcase your expertise to a community of high-net-worth Black women leaders in an environment of focus and indulgence.
            </p>
            <button className="bg-plume-gold text-plume-burgundy px-12 py-4 font-bold tracking-widest rounded-sm hover:scale-105 transition-transform text-sm uppercase">
              Become a Sponsor
            </button>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-plume-burgundy rounded-full blur-[100px] opacity-20 -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-plume-gold rounded-full blur-[150px] opacity-10 -ml-48 -mb-48"></div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-plume-ivory py-20 px-4 border-t border-plume-gold/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <img
                src="/assets/logo-horizontal.png"
                alt="Plume Social Club"
                className="h-14 w-auto"
              />
            </div>
            <p className="text-plume-charcoal/60 max-w-sm mb-8">
              A private sanctuary for accomplished Black women to navigate their next chapter through shared indulgence and sisterhood. No fees, just intention.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-plume-teal hover:text-plume-gold transition-colors">Instagram</a>
              <a href="#" className="text-plume-teal hover:text-plume-gold transition-colors">LinkedIn</a>
              <a href="#" className="text-plume-teal hover:text-plume-gold transition-colors">Facebook</a>
            </div>
          </div>
          
          <div>
            <h5 className="font-sans tracking-widest text-xs font-bold mb-6 uppercase">Quick Links</h5>
            <ul className="space-y-4 text-sm text-plume-charcoal/60">
              <li><a href="#about" className="hover:text-plume-gold transition-colors">The Foundation</a></li>
              <li><a href="#membership" className="hover:text-plume-gold transition-colors">The Circle</a></li>
              <li><a href="#retreats" className="hover:text-plume-gold transition-colors">Luxury Retreats</a></li>
              <li><a href="#trips" className="hover:text-plume-gold transition-colors">Experiences</a></li>
              <li><a href="#education" className="hover:text-plume-gold transition-colors">Elevation</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-sans tracking-widest text-xs font-bold mb-6 uppercase">Contact</h5>
            <ul className="space-y-4 text-sm text-plume-charcoal/60">
              <li><a href="mailto:akua@plumesocialclub.net" className="hover:text-plume-gold transition-colors">akua@plumesocialclub.net</a></li>
              <li>Atlanta, GA • Tampa, FL • DC</li>
              <li>Privacy Policy</li>
              <li>Terms of Membership</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-plume-gold/10 text-center text-xs text-plume-charcoal/40 tracking-widest">
          © {new Date().getFullYear()} PLUME SOCIAL CLUB. ALL RIGHTS RESERVED. NO ENTRY FEE. INDULGENCE MEETS INTENTION.
        </div>
      </footer>

      {/* Sisterhood AI Guide */}
      <AIGuide />
    </div>
  );
};

export default App;
