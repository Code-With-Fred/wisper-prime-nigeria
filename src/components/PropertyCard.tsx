import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Bed, Bath, Square } from "lucide-react";
import { Link } from "react-router-dom";

interface Property {
  id: string;
  title: string;
  price: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  type: string;
  image: string;
  featured?: boolean;
}

interface PropertyCardProps {
  property: Property;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  return (
    <Card className="group overflow-hidden hover:shadow-luxury transition-all duration-300 hover:-translate-y-1">
      <div className="relative">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {property.featured && (
          <Badge className="absolute top-3 left-3 bg-gradient-gold text-foreground">
            Featured
          </Badge>
        )}
        <div className="absolute top-3 right-3">
          <Badge variant="secondary" className="bg-background/90 text-foreground">
            {property.type}
          </Badge>
        </div>
      </div>
      
      <CardContent className="p-4">
        <div className="space-y-3">
          <div>
            <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
              {property.title}
            </h3>
            <div className="flex items-center text-muted-foreground text-sm mt-1">
              <MapPin className="w-4 h-4 mr-1" />
              {property.location}
            </div>
          </div>
          
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Bed className="w-4 h-4 mr-1" />
              {property.bedrooms}
            </div>
            <div className="flex items-center">
              <Bath className="w-4 h-4 mr-1" />
              {property.bathrooms}
            </div>
            <div className="flex items-center">
              <Square className="w-4 h-4 mr-1" />
              {property.area}
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold text-primary">
              {property.price}
            </div>
            <Link to={`/property/${property.id}`}>
              <Button variant="outline" size="sm" className="hover:bg-primary hover:text-primary-foreground">
                View Details
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;