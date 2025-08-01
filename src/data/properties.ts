export interface Property {
  id: string;
  title: string;
  price: string;
  location: string;
  fullAddress: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  type: string;
  image: string;
  images: string[];
  featured?: boolean;
  description: string;
  amenities: string[];
  agentId: string;
}

export const properties: Property[] = [
  {
    id: "1",
    title: "5-Bedroom Duplex in Lekki Phase 1",
    price: "₦45,000,000",
    location: "Lekki Phase 1, Lagos",
    fullAddress: "15 Admiralty Way, Lekki Phase 1, Lagos State",
    bedrooms: 5,
    bathrooms: 4,
    area: "450sqm",
    type: "Duplex",
    image: "/src/assets/property-1.jpg",
    images: ["/src/assets/property-1.jpg"],
    featured: true,
    description: "Experience luxury living in this stunning 5-bedroom duplex located in the prestigious Lekki Phase 1. This property features modern architecture, spacious rooms, and premium finishes throughout. Perfect for families seeking comfort and elegance in one of Lagos' most sought-after neighborhoods.",
    amenities: [
      "24/7 Security",
      "Swimming Pool",
      "Parking Space",
      "Generator",
      "Air Conditioning",
      "Fitted Kitchen",
      "Balconies",
      "Gym Access",
      "Children's Playground",
      "Garden"
    ],
    agentId: "1"
  },
  {
    id: "2",
    title: "4-Bedroom Bungalow in Abuja",
    price: "₦28,500,000",
    location: "Gwarinpa, Abuja",
    fullAddress: "Plot 125, 6th Avenue, Gwarinpa Estate, Abuja",
    bedrooms: 4,
    bathrooms: 3,
    area: "380sqm",
    type: "Bungalow",
    image: "/src/assets/property-2.jpg",
    images: ["/src/assets/property-2.jpg"],
    featured: true,
    description: "A beautifully designed 4-bedroom bungalow in the heart of Gwarinpa, Abuja. This property offers single-level living with spacious rooms, modern amenities, and a beautiful garden. Ideal for families who prefer the convenience of a bungalow lifestyle.",
    amenities: [
      "Security",
      "Parking",
      "Generator",
      "Air Conditioning",
      "Modern Kitchen",
      "Large Garden",
      "Study Room",
      "Laundry Room",
      "Storage Space"
    ],
    agentId: "2"
  },
  {
    id: "3",
    title: "3-Bedroom Apartment in Victoria Island",
    price: "₦35,000,000",
    location: "Victoria Island, Lagos",
    fullAddress: "Towers, 34 Adeola Odeku Street, Victoria Island, Lagos",
    bedrooms: 3,
    bathrooms: 2,
    area: "180sqm",
    type: "Apartment",
    image: "/src/assets/property-3.jpg",
    images: ["/src/assets/property-3.jpg"],
    featured: true,
    description: "Luxury 3-bedroom apartment with stunning city views in Victoria Island. This high-rise apartment features premium finishes, modern appliances, and access to world-class amenities. Perfect for professionals and investors.",
    amenities: [
      "Concierge Service",
      "Swimming Pool",
      "Gym",
      "Parking",
      "Generator",
      "Elevators",
      "24/7 Security",
      "City View",
      "Modern Kitchen",
      "Balcony"
    ],
    agentId: "3"
  },
  {
    id: "4",
    title: "Commercial Office Space in Lagos",
    price: "₦120,000,000",
    location: "Ikoyi, Lagos",
    fullAddress: "12A Saka Tinubu Street, Ikoyi, Lagos State",
    bedrooms: 0,
    bathrooms: 4,
    area: "750sqm",
    type: "Office",
    image: "/src/assets/property-4.jpg",
    images: ["/src/assets/property-4.jpg"],
    featured: true,
    description: "Prime commercial office space in the heart of Ikoyi business district. This modern office building offers flexible floor plans, high-speed connectivity, and premium business amenities. Ideal for corporations and growing businesses.",
    amenities: [
      "High-Speed Internet",
      "Conference Rooms",
      "Parking Garage",
      "Generator",
      "Air Conditioning",
      "Security System",
      "Elevators",
      "Reception Area",
      "Kitchen Facilities",
      "Storage"
    ],
    agentId: "1"
  },
  {
    id: "5",
    title: "6-Bedroom Villa in Enugu",
    price: "₦52,000,000",
    location: "Independence Layout, Enugu",
    fullAddress: "Plot 45, Independence Layout, Enugu State",
    bedrooms: 6,
    bathrooms: 5,
    area: "620sqm",
    type: "Villa",
    image: "/src/assets/property-1.jpg",
    images: ["/src/assets/property-1.jpg"],
    description: "Magnificent 6-bedroom villa in the prestigious Independence Layout. This luxury property features spacious rooms, elegant design, and beautiful landscaping. Perfect for large families or as an investment property.",
    amenities: [
      "Swimming Pool",
      "Security",
      "Parking",
      "Generator",
      "Air Conditioning",
      "Garden",
      "Study Rooms",
      "Guest Quarters",
      "Modern Kitchen",
      "Terrace"
    ],
    agentId: "2"
  },
  {
    id: "6",
    title: "2-Bedroom Flat in Port Harcourt",
    price: "₦18,500,000",
    location: "GRA Phase 2, Port Harcourt",
    fullAddress: "15 Housing Estate Road, GRA Phase 2, Port Harcourt",
    bedrooms: 2,
    bathrooms: 2,
    area: "120sqm",
    type: "Flat",
    image: "/src/assets/property-2.jpg",
    images: ["/src/assets/property-2.jpg"],
    description: "Modern 2-bedroom flat in the Government Reserved Area of Port Harcourt. This property offers comfortable living with modern amenities and easy access to the city center.",
    amenities: [
      "Security",
      "Parking",
      "Generator",
      "Air Conditioning",
      "Modern Kitchen",
      "Balcony",
      "Storage",
      "Water Supply"
    ],
    agentId: "3"
  }
];