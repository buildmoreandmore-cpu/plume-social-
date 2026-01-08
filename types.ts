
export interface NavItem {
  label: string;
  href: string;
}

export interface MembershipTier {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  color: string;
}

export interface Trip {
  title: string;
  location: string;
  price: string;
  description: string;
  imageUrl: string;
  type: 'Domestic' | 'International';
}

export interface EducationalPillar {
  title: string;
  topics: string[];
  icon: string;
}
