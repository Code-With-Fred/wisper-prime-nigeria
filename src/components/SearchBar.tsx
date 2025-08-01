import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchData, setSearchData] = useState({
    location: "",
    minPrice: "",
    maxPrice: "",
    propertyType: "",
    bedrooms: "",
    bathrooms: ""
  });
  
  const navigate = useNavigate();

  const handleSearch = () => {
    const params = new URLSearchParams();
    Object.entries(searchData).forEach(([key, value]) => {
      if (value) params.append(key, value);
    });
    navigate(`/listings?${params.toString()}`);
  };

  const locations = [
    "Lagos", "Abuja", "Enugu", "Kano", "Port Harcourt", 
    "Ibadan", "Benin City", "Calabar", "Jos", "Kaduna"
  ];

  const propertyTypes = [
    "Duplex", "Bungalow", "Flat", "Apartment", "Office", "Land", "Villa", "Townhouse"
  ];

  return (
    <div className="bg-background/95 backdrop-blur-md rounded-xl p-6 shadow-luxury border border-border">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        <div className="xl:col-span-1">
          <label className="block text-sm font-medium text-foreground mb-2">Location</label>
          <Select onValueChange={(value) => setSearchData({...searchData, location: value})}>
            <SelectTrigger>
              <SelectValue placeholder="Select location" />
            </SelectTrigger>
            <SelectContent>
              {locations.map((location) => (
                <SelectItem key={location} value={location.toLowerCase()}>
                  {location}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="xl:col-span-1">
          <label className="block text-sm font-medium text-foreground mb-2">Min Price (₦)</label>
          <Input
            type="number"
            placeholder="Min price"
            value={searchData.minPrice}
            onChange={(e) => setSearchData({...searchData, minPrice: e.target.value})}
          />
        </div>

        <div className="xl:col-span-1">
          <label className="block text-sm font-medium text-foreground mb-2">Max Price (₦)</label>
          <Input
            type="number"
            placeholder="Max price"
            value={searchData.maxPrice}
            onChange={(e) => setSearchData({...searchData, maxPrice: e.target.value})}
          />
        </div>

        <div className="xl:col-span-1">
          <label className="block text-sm font-medium text-foreground mb-2">Property Type</label>
          <Select onValueChange={(value) => setSearchData({...searchData, propertyType: value})}>
            <SelectTrigger>
              <SelectValue placeholder="Property type" />
            </SelectTrigger>
            <SelectContent>
              {propertyTypes.map((type) => (
                <SelectItem key={type} value={type.toLowerCase()}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="xl:col-span-1">
          <label className="block text-sm font-medium text-foreground mb-2">Bedrooms</label>
          <Select onValueChange={(value) => setSearchData({...searchData, bedrooms: value})}>
            <SelectTrigger>
              <SelectValue placeholder="Bedrooms" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1+</SelectItem>
              <SelectItem value="2">2+</SelectItem>
              <SelectItem value="3">3+</SelectItem>
              <SelectItem value="4">4+</SelectItem>
              <SelectItem value="5">5+</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="xl:col-span-1 flex items-end">
          <Button
            onClick={handleSearch}
            className="w-full bg-gradient-primary hover:opacity-90 transition-opacity"
            size="lg"
          >
            <Search className="w-4 h-4 mr-2" />
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;