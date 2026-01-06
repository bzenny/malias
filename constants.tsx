
import { ServiceCategory, FeatureCard } from './types';

export const PRIMARY_SERVICES: ServiceCategory = {
  title: "Primary Services",
  items: [
    { name: "Swedish Massage", price: "₱500" },
    { name: "Ventosa Massage", price: "₱450" },
    { name: "Dry Massage", price: "₱350" },
    { name: "Thai Massage", price: "₱360" },
    { name: "Foot Massage", price: "₱330" },
  ]
};

export const FEATURED_SERVICES: ServiceCategory = {
  title: "Featured Services",
  items: [
    { name: "Body Scrub", price: "₱350" },
    { name: "Premium Body Polish", price: "₱850" },
    { name: "Bleaching Scrub", price: "₱350" },
    { name: "Pedicure", price: "₱160" },
    { name: "Manicure", price: "₱150" },
  ]
};

export const FEATURES: FeatureCard[] = [
  {
    title: "Pamper Session",
    description: "Deep tissue massage focused on relieving chronic muscle tension.",
    price: "₱800",
    imageUrl: "https://images.unsplash.com/photo-1544161515-436cefb657f8?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "30 Min Express",
    description: "Quick rejuvenation for busy professionals. Focus on neck and shoulders.",
    price: "₱300",
    imageUrl: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Chair Massage",
    description: "Relaxing seated massage to release upper body stress.",
    price: "₱200",
    imageUrl: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=800"
  }
];

export const CONTACT_INFO = {
  phone: "9627068461",
  address: "Generoso Gamboa St., Corner Mabini St., Silay City, Negros Occidental",
  hours: "Daily 9:00 AM - 9:00 PM"
};
