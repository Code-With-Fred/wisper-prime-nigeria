import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import PropertyCard from "@/components/PropertyCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Filter, SlidersHorizontal } from "lucide-react";
import { properties } from "@/data/properties";

const Listings = () => {
  const [searchParams] = useSearchParams();
  const [filteredProperties, setFilteredProperties] = useState(properties);
  const [filters, setFilters] = useState({
    location: searchParams.get('location') || '',
    minPrice: searchParams.get('minPrice') || '',
    maxPrice: searchParams.get('maxPrice') || '',
    propertyType: searchParams.get('propertyType') || '',
    bedrooms: searchParams.get('bedrooms') || '',
    bathrooms: searchParams.get('bathrooms') || '',
    sortBy: 'newest'
  });
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    let filtered = properties.filter(property => {
      const matchesLocation = !filters.location || 
        property.location.toLowerCase().includes(filters.location.toLowerCase());
      
      const matchesType = !filters.propertyType || 
        property.type.toLowerCase() === filters.propertyType.toLowerCase();
      
      const matchesBedrooms = !filters.bedrooms || 
        property.bedrooms >= parseInt(filters.bedrooms);
      
      const matchesBathrooms = !filters.bathrooms || 
        property.bathrooms >= parseInt(filters.bathrooms);
      
      // Price filtering (simplified - in real app would parse price properly)
      const priceNum = parseInt(property.price.replace(/[₦,]/g, ''));
      const matchesMinPrice = !filters.minPrice || priceNum >= parseInt(filters.minPrice);
      const matchesMaxPrice = !filters.maxPrice || priceNum <= parseInt(filters.maxPrice);
      
      return matchesLocation && matchesType && matchesBedrooms && 
             matchesBathrooms && matchesMinPrice && matchesMaxPrice;
    });

    // Sort properties
    switch (filters.sortBy) {
      case 'price-low':
        filtered.sort((a, b) => {
          const priceA = parseInt(a.price.replace(/[₦,]/g, ''));
          const priceB = parseInt(b.price.replace(/[₦,]/g, ''));
          return priceA - priceB;
        });
        break;
      case 'price-high':
        filtered.sort((a, b) => {
          const priceA = parseInt(a.price.replace(/[₦,]/g, ''));
          const priceB = parseInt(b.price.replace(/[₦,]/g, ''));
          return priceB - priceA;
        });
        break;
      default: // newest
        filtered.sort((a, b) => b.id.localeCompare(a.id));
    }

    setFilteredProperties(filtered);
  }, [filters]);

  const locations = ["Lagos", "Abuja", "Enugu", "Kano", "Port Harcourt"];
  const propertyTypes = ["Duplex", "Bungalow", "Flat", "Apartment", "Office", "Land", "Villa"];

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Property Listings
          </h1>
          <p className="text-lg text-muted-foreground">
            Discover {filteredProperties.length} amazing properties across Nigeria
          </p>
        </div>

        {/* Filters */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                <Filter className="w-5 h-5" />
                Filter Properties
              </h3>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowFilters(!showFilters)}
                className="md:hidden"
              >
                <SlidersHorizontal className="w-4 h-4" />
              </Button>
            </div>
            
            <div className={`grid grid-cols-1 md:grid-cols-6 gap-4 ${showFilters ? 'block' : 'hidden md:grid'}`}>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Location</label>
                <Select value={filters.location} onValueChange={(value) => setFilters({...filters, location: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Any location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">Any location</SelectItem>
                    {locations.map((location) => (
                      <SelectItem key={location} value={location.toLowerCase()}>
                        {location}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Property Type</label>
                <Select value={filters.propertyType} onValueChange={(value) => setFilters({...filters, propertyType: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Any type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">Any type</SelectItem>
                    {propertyTypes.map((type) => (
                      <SelectItem key={type} value={type.toLowerCase()}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Min Price (₦)</label>
                <Input
                  type="number"
                  placeholder="Min price"
                  value={filters.minPrice}
                  onChange={(e) => setFilters({...filters, minPrice: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Max Price (₦)</label>
                <Input
                  type="number"
                  placeholder="Max price"
                  value={filters.maxPrice}
                  onChange={(e) => setFilters({...filters, maxPrice: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Bedrooms</label>
                <Select value={filters.bedrooms} onValueChange={(value) => setFilters({...filters, bedrooms: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Any" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">Any</SelectItem>
                    <SelectItem value="1">1+</SelectItem>
                    <SelectItem value="2">2+</SelectItem>
                    <SelectItem value="3">3+</SelectItem>
                    <SelectItem value="4">4+</SelectItem>
                    <SelectItem value="5">5+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Sort By</label>
                <Select value={filters.sortBy} onValueChange={(value) => setFilters({...filters, sortBy: value})}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property, index) => (
            <div 
              key={property.id} 
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <PropertyCard property={property} />
            </div>
          ))}
        </div>

        {filteredProperties.length === 0 && (
          <div className="text-center py-16">
            <Search className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">No Properties Found</h3>
            <p className="text-muted-foreground mb-6">
              Try adjusting your filters to find more properties.
            </p>
            <Button 
              variant="outline" 
              onClick={() => setFilters({
                location: '', minPrice: '', maxPrice: '', propertyType: '', 
                bedrooms: '', bathrooms: '', sortBy: 'newest'
              })}
            >
              Clear All Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Listings;