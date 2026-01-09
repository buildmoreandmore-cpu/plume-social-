
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

const Retreats: React.FC = () => {
  const scrollToApply = () => {
    document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="retreats" className="scroll-mt-16">
      {/* Hero - Solid Background */}
      <div className="relative py-16 md:py-24 px-6 bg-plume-burgundy">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-plume-gold font-sans tracking-[0.3em] text-xs mb-3 uppercase animate-on-scroll">The Cigar Plume Collective Presents</p>
          <h2 className="text-white font-serif text-3xl md:text-4xl lg:text-5xl italic mb-4 animate-on-scroll">
            The Ultimate Luxury Retreat
          </h2>
          <p className="text-plume-cream/90 text-base md:text-lg mb-6 max-w-xl mx-auto animate-on-scroll">
            An exclusive experience for professional women who appreciate elegance, cigars, adventure, and relaxation.
          </p>
          <p className="text-plume-gold/80 text-xs mb-6 animate-on-scroll">
            You must join the Circle before booking an experience.
          </p>
          <button
            onClick={scrollToApply}
            className="bg-plume-gold text-plume-burgundy px-8 py-3 font-bold tracking-widest rounded-sm hover:scale-105 transition-transform text-xs uppercase animate-on-scroll"
          >
            Request an Invitation
          </button>
        </div>
      </div>

      {/* Is This You? */}
      <div className="py-16 md:py-20 px-6 bg-plume-cream">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-plume-gold font-sans tracking-[0.3em] text-xs mb-3 uppercase animate-on-scroll">Is This You?</h3>
          <h2 className="text-plume-burgundy font-serif text-2xl md:text-3xl italic mb-8 md:mb-10 animate-on-scroll">
            Designed for the Woman Who Has It All... Almost
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 text-left">
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
              <div key={i} className={`flex items-center bg-white p-3 md:p-4 rounded-sm border border-plume-teal/20 animate-on-scroll delay-${(i % 4) + 1}`}>
                <span className="text-plume-gold mr-2 text-sm">+</span>
                <span className="text-plume-charcoal text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4-Day Experience */}
      <div className="py-16 md:py-20 px-6 bg-plume-burgundy text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 md:mb-12">
            <h3 className="text-plume-gold font-sans tracking-[0.3em] text-xs mb-3 uppercase animate-on-scroll">The Experience</h3>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl italic animate-on-scroll">4-Day Retreat Agenda</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {RETREAT_EXPERIENCES.map((exp, i) => (
              <div key={i} className={`bg-white/10 backdrop-blur-sm p-5 md:p-6 rounded-sm border border-plume-gold/20 animate-on-scroll delay-${i + 1}`}>
                <h4 className="font-serif italic text-lg mb-4 text-plume-gold">{exp.title}</h4>
                <ul className="space-y-2">
                  {exp.features.map((feature, j) => (
                    <li key={j} className="flex items-start text-xs md:text-sm text-plume-cream/80">
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

      {/* CTA */}
      <div className="py-16 md:py-20 px-6 bg-plume-burgundy border-t border-plume-gold/20">
        <div className="max-w-2xl mx-auto text-center text-white">
          <h3 className="text-plume-gold font-sans tracking-[0.3em] text-xs mb-3 uppercase animate-on-scroll">Ready to Join?</h3>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl italic mb-4 animate-on-scroll">
            The Circle Awaits
          </h2>
          <p className="text-plume-cream/80 text-sm md:text-base mb-8 max-w-xl mx-auto animate-on-scroll">
            Join our sisterhood for exclusive access to luxury retreats and a community of like-minded professional women.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 animate-on-scroll">
            <button
              onClick={scrollToApply}
              className="bg-plume-gold text-plume-burgundy px-8 py-3 font-bold tracking-widest rounded-sm hover:scale-105 transition-transform text-xs uppercase"
            >
              Request an Invitation
            </button>
            <a href="mailto:akua@plumesocialclub.net" className="border border-white text-white px-8 py-3 font-bold tracking-widest rounded-sm hover:bg-white hover:text-plume-burgundy transition-all text-xs uppercase">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Retreats;
