export interface Agent {
  id: string;
  name: string;
  email: string;
  phone: string;
  whatsapp: string;
  image: string;
  bio: string;
  specialization: string;
  experience: string;
  propertiesListed: number;
  rating: number;
}

export const agents: Agent[] = [
  {
    id: "1",
    name: "Adunni Okafor",
    email: "adunni.okafor@wisper.ng",
    phone: "+234 801 234 5678",
    whatsapp: "+2348012345678",
    image: "/src/assets/agent-1.jpg",
    bio: "Adunni is a seasoned real estate professional with over 8 years of experience in Lagos luxury property market. She specializes in high-end residential properties and has helped over 200 families find their dream homes.",
    specialization: "Luxury Residential Properties",
    experience: "8 years",
    propertiesListed: 45,
    rating: 4.9
  },
  {
    id: "2", 
    name: "Emeka Nwosu",
    email: "emeka.nwosu@wisper.ng",
    phone: "+234 802 345 6789",
    whatsapp: "+2348023456789",
    image: "/src/assets/agent-2.jpg",
    bio: "Emeka brings 6 years of expertise in both residential and commercial real estate across Abuja and surrounding areas. Known for his analytical approach and client-focused service.",
    specialization: "Commercial & Residential Properties",
    experience: "6 years", 
    propertiesListed: 38,
    rating: 4.8
  },
  {
    id: "3",
    name: "Funmi Adebayo", 
    email: "funmi.adebayo@wisper.ng",
    phone: "+234 803 456 7890",
    whatsapp: "+2348034567890",
    image: "/src/assets/agent-3.jpg",
    bio: "Funmi is a dynamic real estate agent with 5 years of experience specializing in investment properties and first-time home buyers. She's passionate about making property ownership accessible to everyone.",
    specialization: "Investment Properties & First-Time Buyers",
    experience: "5 years",
    propertiesListed: 32,
    rating: 4.9
  }
];