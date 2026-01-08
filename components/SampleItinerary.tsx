
import React, { useState } from 'react';

const ITINERARY_DAYS = [
  {
    day: 'Thursday',
    title: 'Arrival & Welcome',
    events: [
      { time: 'Evening', activity: 'Arrive at the Plume Social House', description: 'Luxury 7-bedroom estate in Paradise Valley' },
      { time: '7:00 PM', activity: 'Welcome Dinner', description: 'Private chef-prepared dinner, introductions & sisterhood bonding' }
    ]
  },
  {
    day: 'Friday',
    title: 'Relax, Relate & Release',
    events: [
      { time: '9:00 AM', activity: 'Breakfast & Wellness Speaker', description: 'Nourishing breakfast with inspirational talk' },
      { time: '10:00 AM - 3:00 PM', activity: "Spa'rty", description: 'Mobile spa treatments: massages, facials, relaxation' },
      { time: '4:00 PM', activity: 'Catered Dinner', description: 'Private chef dinner at the estate' },
      { time: '6:00 PM - 9:00 PM', activity: 'Cigar & Bourbon Experience', description: 'Private cigar roller + premium bourbon tasting at Fumar Cigar' }
    ]
  },
  {
    day: 'Saturday',
    title: "Let's Go With the Flow",
    events: [
      { time: '10:00 AM', activity: 'Breakfast & Wellness Speaker #2', description: 'Morning inspiration session' },
      { time: '12:00 PM - 4:00 PM', activity: 'Old Town Scottsdale', description: 'Shopping, galleries, and lunch' },
      { time: '5:00 PM', activity: 'Upscale Dinner', description: 'Toca Madera, The Canal Club, or Dominick\'s Steakhouse' },
      { time: '9:00 PM', activity: 'Fox Cigar Bar', description: 'VIP booth experience at premier cigar lounge' }
    ]
  },
  {
    day: 'Sunday',
    title: 'Departure',
    events: [
      { time: '10:00 AM', activity: 'Checkout & Farewell', description: 'Hugs, photos, and departure to airport' }
    ]
  }
];

const HOUSE_AMENITIES = [
  '7 Bedrooms, 6.5 Baths',
  '3 Living Rooms & 3 Fireplaces',
  'Resort-Size Pool with Fountains',
  '12-Person Hot Tub',
  'Gourmet Kitchen',
  '10 min to Old Town Scottsdale'
];

const SampleItinerary: React.FC = () => {
  const [activeDay, setActiveDay] = useState(1);

  return (
    <section className="py-20 px-4 bg-plume-ivory">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-plume-gold/20 text-plume-burgundy px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
            Sample Retreat
          </span>
          <h3 className="text-plume-gold font-sans tracking-[0.3em] text-sm mb-4 uppercase">What to Expect</h3>
          <h2 className="text-plume-burgundy font-serif text-3xl md:text-5xl italic mb-4">
            Phoenix Paradise Valley Retreat
          </h2>
          <p className="text-plume-charcoal/70 max-w-2xl mx-auto">
            4 days of luxury, sisterhood, cigars, and transformation. Here's a glimpse into a real Plume Social Club experience.
          </p>
        </div>

        {/* Day Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {ITINERARY_DAYS.map((day, i) => (
            <button
              key={i}
              onClick={() => setActiveDay(i)}
              className={`px-6 py-3 rounded-sm font-sans text-sm tracking-wide transition-all ${
                activeDay === i
                  ? 'bg-plume-burgundy text-white'
                  : 'bg-white text-plume-charcoal border border-plume-teal/20 hover:border-plume-gold'
              }`}
            >
              <span className="font-bold">{day.day}</span>
              <span className="hidden md:inline text-xs ml-2 opacity-70">- {day.title}</span>
            </button>
          ))}
        </div>

        {/* Day Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Itinerary */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-sm border border-plume-gold/20 overflow-hidden">
              <div className="bg-plume-burgundy p-6">
                <h4 className="text-plume-gold font-sans tracking-widest text-xs uppercase mb-1">
                  {ITINERARY_DAYS[activeDay].day}
                </h4>
                <p className="text-white font-serif italic text-2xl">
                  {ITINERARY_DAYS[activeDay].title}
                </p>
              </div>
              <div className="p-6 space-y-6">
                {ITINERARY_DAYS[activeDay].events.map((event, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-32 flex-shrink-0">
                      <span className="text-plume-teal font-mono text-sm">{event.time}</span>
                    </div>
                    <div className="flex-1 border-l-2 border-plume-gold/30 pl-4">
                      <h5 className="font-bold text-plume-burgundy mb-1">{event.activity}</h5>
                      <p className="text-sm text-plume-charcoal/70">{event.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* House Amenities */}
          <div className="lg:col-span-1">
            <div className="bg-plume-cream rounded-sm border border-plume-gold/20 p-6 sticky top-24">
              <h4 className="font-serif italic text-xl text-plume-burgundy mb-4">The Plume Social House</h4>
              <p className="text-sm text-plume-charcoal/70 mb-4">
                Paradise Valley, Arizona
              </p>
              <ul className="space-y-3 mb-6">
                {HOUSE_AMENITIES.map((amenity, i) => (
                  <li key={i} className="flex items-center text-sm text-plume-charcoal">
                    <span className="text-plume-gold mr-2">✦</span>
                    {amenity}
                  </li>
                ))}
              </ul>
              <div className="border-t border-plume-gold/20 pt-4">
                <p className="text-xs text-plume-charcoal/60 mb-2 uppercase tracking-widest">Includes</p>
                <div className="flex flex-wrap gap-2">
                  {['Accommodations', 'Meals', 'Spa', 'Cigars', 'Transportation'].map((item, i) => (
                    <span key={i} className="bg-white px-3 py-1 text-xs rounded-full text-plume-burgundy border border-plume-teal/20">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-plume-charcoal/70 mb-4">Ready to experience luxury sisterhood?</p>
          <a href="#retreats" className="inline-block bg-plume-gold text-plume-burgundy px-10 py-4 font-bold tracking-widest rounded-sm hover:scale-105 transition-transform text-sm uppercase">
            View Upcoming Retreats
          </a>
        </div>
      </div>
    </section>
  );
};

export default SampleItinerary;
