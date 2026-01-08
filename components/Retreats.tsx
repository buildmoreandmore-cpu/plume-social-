
import React from 'react';

const RETREAT_EXPERIENCES = [
  {
    title: 'Sophisticated Cigar Experience',
    features: [
      'Exclusive cigar tastings led by expert sommeliers',
      'Private cigar lounges with curated premium selections',
      'Pairing cigars with fine wines, cognacs and cocktails',
      'Expert workshops on the art of cigar smoking',
      'Tours of historic cigar factories'
    ]
  },
  {
    title: 'Wellness Day',
    features: [
      'Yoga, Meditation & Spa Treatments',
      'Business and Life Coaching seminars',
      'Investing for A Life of Freedom',
      'Estate Planning workshops',
      'Self Care for the Caregiver'
    ]
  },
  {
    title: 'Highlight Day: All About Cigars',
    features: [
      'Private guided Cigar Factory Tour',
      'Cigar Rolling Classes',
      'Bourbon/Whiskey/Champagne pairings',
      'Smoke & Paint experiences',
      'Meet-ups at luxury cigar lounges'
    ]
  }
];

const DOMESTIC_LOCATIONS = [
  'Tampa, FL', 'Miami, FL', 'Las Vegas, NV', 'New York, NY',
  'Santa Barbara, CA', 'Los Angeles, CA', 'Louisville, KY', 'Washington, DC'
];

const INTERNATIONAL_LOCATIONS = [
  { name: 'Partagas Factory', country: 'Cuba' },
  { name: 'La Flor Dominicana Factory', country: 'Dominican Republic' },
  { name: 'Chateau A. Fuente', country: 'Dominican Republic' },
  { name: 'My Father Cigar Factory', country: 'Nicaragua' },
  { name: 'Drew Estate', country: 'Nicaragua' },
  { name: 'London', country: 'England' },
  { name: 'Dubai', country: 'UAE' }
];

const PRICING = [
  {
    tier: 'Lavish Diamond',
    domestic: '$5,000',
    international: '$10,000',
    features: ['4-day curated experience', 'Private dinners & brunches', 'All activities included', 'Cigar tastings & pairings', 'Wellness day access']
  },
  {
    tier: 'Opulent Platinum',
    domestic: '$8,500',
    international: '$12,500',
    features: ['Everything in Diamond', 'Exclusive swag gifts', 'VIP seating at all events', 'VIP travel on excursions', 'Hair/makeup artist access']
  }
];

const Retreats: React.FC = () => {
  const scrollToApply = () => {
    document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="retreats" className="scroll-mt-20">
      {/* Hero - Solid Background */}
      <div className="relative py-24 px-4 bg-plume-burgundy">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-plume-gold font-sans tracking-[0.4em] text-sm mb-4 uppercase animate-on-scroll">The Cigar Plume Collective Presents</p>
          <h2 className="text-white font-serif text-4xl md:text-6xl italic mb-6 animate-on-scroll">
            The Ultimate Luxury Retreat
          </h2>
          <p className="text-plume-cream/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto animate-on-scroll">
            An exclusive experience for professional women who appreciate elegance, cigars, adventure, and relaxation.
          </p>
          <p className="text-plume-gold/80 text-sm mb-8 animate-on-scroll">
            You must join the Circle before booking an experience.
          </p>
          <button
            onClick={scrollToApply}
            className="bg-plume-gold text-plume-burgundy px-10 py-4 font-bold tracking-widest rounded-sm hover:scale-105 transition-transform text-sm uppercase animate-on-scroll"
          >
            Join The Circle First
          </button>
        </div>
      </div>

      {/* Is This You? */}
      <div className="py-20 px-4 bg-plume-cream">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-plume-gold font-sans tracking-[0.3em] text-sm mb-4 uppercase animate-on-scroll">Is This You?</h3>
          <h2 className="text-plume-burgundy font-serif text-3xl md:text-4xl italic mb-12 animate-on-scroll">
            Designed for the Woman Who Has It All... Almost
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {[
              'Professional woman at the top of your game',
              'Desire a sister circle to travel in luxury',
              'Caregiver in need of a luxury vacation',
              'Love the relaxing atmosphere of cigar lounges',
              'Too busy to plan a luxury retreat yourself',
              'Seeking a no-judgment environment',
              'Need positive inspirational activities',
              'Ready for good girlfriend bonding time'
            ].map((item, i) => (
              <div key={i} className={`flex items-start bg-white p-4 rounded-sm border border-plume-teal/20 animate-on-scroll delay-${(i % 4) + 1}`}>
                <span className="text-plume-gold mr-3 text-lg">+</span>
                <span className="text-plume-charcoal">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4-Day Experience */}
      <div className="py-20 px-4 bg-plume-burgundy text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-plume-gold font-sans tracking-[0.3em] text-sm mb-4 uppercase animate-on-scroll">The Experience</h3>
            <h2 className="font-serif text-3xl md:text-5xl italic animate-on-scroll">4-Day Retreat Agenda</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {RETREAT_EXPERIENCES.map((exp, i) => (
              <div key={i} className={`bg-white/10 backdrop-blur-sm p-8 rounded-sm border border-plume-gold/20 animate-on-scroll delay-${i + 1}`}>
                <h4 className="font-serif italic text-xl mb-6 text-plume-gold">{exp.title}</h4>
                <ul className="space-y-3">
                  {exp.features.map((feature, j) => (
                    <li key={j} className="flex items-start text-sm text-plume-cream/80">
                      <span className="text-plume-teal mr-2">-</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Locations */}
      <div className="py-20 px-4 bg-plume-ivory">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-plume-gold font-sans tracking-[0.3em] text-sm mb-4 uppercase animate-on-scroll">Destinations</h3>
            <h2 className="text-plume-burgundy font-serif text-3xl md:text-5xl italic mb-4 animate-on-scroll">
              3 Domestic & 1 International Annually
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Domestic */}
            <div className="animate-slide-left">
              <h4 className="font-serif italic text-2xl text-plume-burgundy mb-6">
                Domestic Retreats
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {DOMESTIC_LOCATIONS.map((loc, i) => (
                  <div key={i} className="bg-white p-4 rounded-sm border border-plume-teal/20 text-center">
                    <span className="text-plume-charcoal font-medium">{loc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* International */}
            <div className="animate-slide-right">
              <h4 className="font-serif italic text-2xl text-plume-burgundy mb-6">
                International Retreats
              </h4>
              <div className="space-y-3">
                {INTERNATIONAL_LOCATIONS.map((loc, i) => (
                  <div key={i} className="bg-white p-4 rounded-sm border border-plume-teal/20 flex justify-between items-center">
                    <span className="text-plume-charcoal font-medium">{loc.name}</span>
                    <span className="text-plume-teal text-sm">{loc.country}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing */}
      <div className="py-20 px-4 bg-plume-cream">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-plume-gold font-sans tracking-[0.3em] text-sm mb-4 uppercase animate-on-scroll">Investment</h3>
            <h2 className="text-plume-burgundy font-serif text-3xl md:text-5xl italic mb-4 animate-on-scroll">
              Retreat Packages
            </h2>
            <p className="text-plume-charcoal/70 max-w-2xl mx-auto animate-on-scroll">
              Attendees are responsible for their own travel and hotel stay. Limited spots available per retreat. Must be a Circle member to book.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PRICING.map((pkg, i) => (
              <div key={i} className={`rounded-sm overflow-hidden animate-on-scroll delay-${i + 1} ${i === 1 ? 'border-2 border-plume-gold' : 'border border-plume-burgundy/20'}`}>
                <div className={`p-8 text-center ${i === 1 ? 'bg-plume-burgundy text-white' : 'bg-white'}`}>
                  <h4 className={`font-sans tracking-[0.2em] text-sm mb-4 uppercase ${i === 1 ? 'text-plume-gold' : 'text-plume-burgundy'}`}>
                    {pkg.tier}
                    {i === 1 && <span className="ml-2 text-xs bg-plume-gold text-plume-burgundy px-2 py-1 rounded-full">POPULAR</span>}
                  </h4>
                  <div className="mb-2">
                    <span className="text-sm opacity-70">Domestic:</span>
                    <span className="font-serif italic text-3xl ml-2">{pkg.domestic}</span>
                  </div>
                  <div>
                    <span className="text-sm opacity-70">International:</span>
                    <span className="font-serif italic text-3xl ml-2">{pkg.international}</span>
                  </div>
                </div>
                <div className="p-8 bg-white">
                  <ul className="space-y-3">
                    {pkg.features.map((feature, j) => (
                      <li key={j} className="flex items-start text-sm text-plume-charcoal/80">
                        <span className="text-plume-gold mr-3">+</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={scrollToApply}
                    className={`w-full mt-8 py-4 font-bold tracking-widest text-xs uppercase transition-all ${
                      i === 1
                        ? 'bg-plume-gold text-plume-burgundy hover:bg-opacity-90'
                        : 'bg-plume-burgundy text-white hover:bg-opacity-90'
                    }`}
                  >
                    Join Circle to Book
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-24 px-4 bg-plume-burgundy">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h3 className="text-plume-gold font-sans tracking-[0.3em] text-sm mb-4 uppercase animate-on-scroll">Ready to Join?</h3>
          <h2 className="font-serif text-3xl md:text-5xl italic mb-6 animate-on-scroll">
            The Circle Awaits
          </h2>
          <p className="text-plume-cream/80 text-lg mb-10 max-w-2xl mx-auto animate-on-scroll">
            Join our sisterhood for exclusive access to luxury retreats, curated experiences, and a community of like-minded professional women.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-on-scroll">
            <button
              onClick={scrollToApply}
              className="bg-plume-gold text-plume-burgundy px-10 py-4 font-bold tracking-widest rounded-sm hover:scale-105 transition-transform text-sm uppercase"
            >
              Apply to Join
            </button>
            <a href="mailto:akua@plumesocialclub.net" className="border border-white text-white px-10 py-4 font-bold tracking-widest rounded-sm hover:bg-white hover:text-plume-burgundy transition-all text-sm uppercase">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Retreats;
