
import { MembershipTier, Trip, EducationalPillar } from './types';

export const MEMBERSHIP_TIERS: MembershipTier[] = [
  {
    id: 'circle-entry',
    name: 'THE PLUME CIRCLE',
    price: 'Complimentary Entry',
    description: 'An intentional application-based sanctuary.',
    features: [
      'Access to our private member directory',
      'Invitation to local monthly social gatherings',
      'Exclusive rights to book global Plume Trips',
      'Access to the Digital Wellness Library',
      'Priority registration for business workshops'
    ],
    color: 'bg-plume-burgundy'
  },
  {
    id: 'legacy-path',
    name: 'THE LEGACY PATH',
    price: 'Curated Selection',
    description: 'For women focused on high-level elevation.',
    features: [
      'Everything in The Plume Circle',
      'Eligibility for the Legacy Mastermind',
      'Access to one-on-one estate planning guidance',
      'VIP access to the "Take the Floor" series',
      'Mentor & Speaker placement opportunities'
    ],
    color: 'bg-plume-gold'
  }
];

export const TRIPS: Trip[] = [
  {
    title: 'Lowcountry Exhale',
    location: 'Savannah, GA',
    price: 'Member Exclusive',
    description: 'Southern hospitality, riverside sunsets, and deep-soul sisterhood.',
    imageUrl: 'https://images.unsplash.com/photo-1549400854-345ca69539f4?auto=format&fit=crop&q=80&w=800',
    type: 'Domestic'
  },
  {
    title: 'Harvest & Havana',
    location: 'Napa Valley, CA',
    price: 'Member Exclusive',
    description: 'Premium bourbon tastings amidst world-class vineyards.',
    imageUrl: 'https://images.unsplash.com/photo-1506377247377-2a5b3b0ca7df?auto=format&fit=crop&q=80&w=800',
    type: 'Domestic'
  },
  {
    title: 'The Ancestral Path',
    location: 'Accra, Ghana',
    price: 'Member Exclusive',
    description: 'A transformative journey back to heritage and high-luxury.',
    imageUrl: 'https://images.unsplash.com/photo-1591129841117-3adfd313e34f?auto=format&fit=crop&q=80&w=800',
    type: 'International'
  }
];

export const EDUCATIONAL_PILLARS: EducationalPillar[] = [
  {
    title: 'Physical Wellness',
    topics: ['Hormones & Havana: Menopause Guide', 'Fitness after 50', 'Sleep Optimization'],
    icon: 'I'
  },
  {
    title: 'Mental & Emotional',
    topics: ['Empty Nest Navigation', 'Caregiver Burnout Recovery', 'Finding Joy Post-Career'],
    icon: 'II'
  },
  {
    title: 'Financial Legacy',
    topics: ['Estate Planning 101', 'Retirement Strategy', 'Investing for Beginners'],
    icon: 'III'
  },
  {
    title: 'Business Elevation',
    topics: ['Becoming a Coach', 'Monetizing Expertise', 'Personal Branding'],
    icon: 'IV'
  }
];
