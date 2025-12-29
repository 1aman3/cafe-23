
import React from 'react';
import { CreditCard, Truck, Calendar, ShoppingBag, Accessibility, Star } from 'lucide-react';
import { Feature, MenuItem, OpeningHour } from './types';

export const RESTAURANT_NAME = "CAFE 23";
export const ADDRESS = "Amgola Rd, opp. Orient club, near bharamakumari, Muzaffarpur, Bihar, India";
export const RATING = 4.7;
export const VOTES = 427;
export const PHONE = "+91 85442 02323";
export const PRICE_RANGE = "INR 200 - INR 600";

export const FEATURES: Feature[] = [
  { id: 'cc', label: 'Credit cards accepted', icon: 'credit-card' },
  { id: 'del', label: 'Delivery', icon: 'truck' },
  { id: 'take', label: 'Takeaway', icon: 'shopping-bag' },
  { id: 'book', label: 'Booking', icon: 'calendar' },
  { id: 'wheel', label: 'Wheelchair accessible', icon: 'accessibility' }
];

export const OPENING_HOURS: OpeningHour[] = [
  { day: "Sunday", hours: "10:30AM - 10:30PM" },
  { day: "Monday", hours: "10:30AM - 10:30PM" },
  { day: "Tuesday", hours: "10:30AM - 10:30PM" },
  { day: "Wednesday", hours: "10:30AM - 10:30PM" },
  { day: "Thursday", hours: "10:30AM - 10:30PM" },
  { day: "Friday", hours: "10:30AM - 10:30PM" },
  { day: "Saturday", hours: "10:30AM - 10:30PM" }
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: "Classic Paneer Tikka",
    description: "Succulent paneer cubes marinated in spices and grilled to perfection.",
    price: "₹349",
    image: "https://picsum.photos/seed/paneer/600/400"
  },
  {
    id: '2',
    name: "Chole Bhature",
    description: "Authentic fluffy bhature served with spicy chickpea curry.",
    price: "₹189",
    image: "https://picsum.photos/seed/chole/600/400"
  },
  {
    id: '3',
    name: "Signature Cold Coffee",
    description: "Our world-class blend of coffee, milk, and secret creaminess.",
    price: "₹149",
    image: "https://picsum.photos/seed/coffee/600/400"
  }
];

export const GALLERY_IMAGES = [
  "https://picsum.photos/seed/food1/800/600",
  "https://picsum.photos/seed/food2/800/600",
  "https://picsum.photos/seed/interior1/800/600",
  "https://picsum.photos/seed/food3/800/600",
  "https://picsum.photos/seed/interior2/800/600",
  "https://picsum.photos/seed/food4/800/600",
];
