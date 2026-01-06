
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
    { name: { name: "Pedicure", price: "₱160" }.name, price: "₱160" },
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

export const BLOG_POSTS = [
  {
    id: 1,
    title: "The Science of Touch: Beyond Relaxation",
    category: "Therapy",
    excerpt: "Why professional massage is a vital component of mental and emotional health maintenance.",
    content: "In an increasingly digital world, the need for safe, therapeutic body contact is more critical than ever. Research shows that massage therapy significantly reduces cortisol levels—the body's primary stress hormone—while boosting serotonin and dopamine. At Malia's, we believe massage isn't just a luxury; it's a fundamental therapy for the human spirit.",
    imageUrl: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 2,
    title: "Stress Relief in Silay City",
    category: "Wellness",
    excerpt: "Finding your sanctuary amidst the hustle and bustle of our beautiful city.",
    content: "Silay City is known for its heritage and vibrant culture, but even here, life can be demanding. Creating a 'Self-Care Ritual' allows your nervous system to reset. Our Swedish Massage techniques are specifically curated to guide your body from 'fight or flight' into a state of 'rest and digest', allowing for profound physical healing.",
    imageUrl: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 3,
    title: "Pampering as a Priority",
    category: "Self-Care",
    excerpt: "How taking time for yourself improves your ability to care for others.",
    content: "You cannot pour from an empty cup. Pampering yourself with a premium body scrub or a targeted foot massage is a restorative act. By honoring your own physical needs, you improve your emotional resilience and mental clarity. Let Malia's be the place where you refill your cup.",
    imageUrl: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=1200"
  }
];

export const CONTACT_INFO = {
  phone: "9627068461",
  address: "Generoso Gamboa St., Corner Mabini St., Silay City, Negros Occidental",
  hours: "Daily 9:00 AM - 9:00 PM"
};
