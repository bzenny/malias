
export interface ServiceItem {
  name: string;
  price: string;
}

export interface ServiceCategory {
  title: string;
  items: ServiceItem[];
}

export interface FeatureCard {
  title: string;
  description: string;
  price: string;
  imageUrl: string;
}
