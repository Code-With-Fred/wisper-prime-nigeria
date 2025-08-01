import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  MapPin, Bed, Bath, Square, Phone, MessageCircle, 
  Mail, Calendar, ChevronLeft, ChevronRight, Check,
  Star
} from "lucide-react";
import { properties } from "@/data/properties";
import { agents } from "@/data/agents";
import { toast } from "sonner";

const PropertyDetails = () => {
  const { id } = useParams();
  const property = properties.find(p => p.id === id);
  const agent = property ? agents.find(a => a.id === property.agentId) : null;
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [tourForm, setTourForm] = useState({
    name: '', email: '', phone: '', date: '', message: ''
  });
  const [contactForm, setContactForm] = useState({
    name: '', email: '', message: ''
  });

  if (!property) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Property Not Found</h2>
          <p className="text-muted-foreground mb-6">The property you're looking for doesn't exist.</p>
          <Link to="/listings">
            <Button>Back to Listings</Button>
          </Link>
        </div>
      </div>
    );
  }

  const images = property.images.length > 0 ? property.images : [property.image];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleTourSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Tour request submitted successfully! We'll contact you soon.");
    setTourForm({ name: '', email: '', phone: '', date: '', message: '' });
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! The agent will contact you soon.");
    setContactForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link to="/listings" className="text-primary hover:underline">
            ← Back to Listings
          </Link>
        </div>

        {/* Image Gallery */}
        <div className="relative mb-8 h-96 md:h-[500px] rounded-xl overflow-hidden">
          <img
            src={images[currentImageIndex]}
            alt={property.title}
            className="w-full h-full object-cover"
          />
          {images.length > 1 && (
            <>
              <Button
                variant="secondary"
                size="icon"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
                onClick={prevImage}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="secondary"
                size="icon"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
                onClick={nextImage}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full ${
                      index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Property Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Basic Info */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                  {property.title}
                </h1>
                <Badge className="bg-gradient-gold text-foreground">
                  {property.type}
                </Badge>
              </div>
              
              <div className="flex items-center text-muted-foreground mb-4">
                <MapPin className="w-5 h-5 mr-2" />
                {property.fullAddress}
              </div>
              
              <div className="text-3xl font-bold text-primary mb-6">
                {property.price}
              </div>
              
              <div className="flex items-center space-x-6 text-muted-foreground">
                <div className="flex items-center">
                  <Bed className="w-5 h-5 mr-2" />
                  {property.bedrooms} Bedrooms
                </div>
                <div className="flex items-center">
                  <Bath className="w-5 h-5 mr-2" />
                  {property.bathrooms} Bathrooms
                </div>
                <div className="flex items-center">
                  <Square className="w-5 h-5 mr-2" />
                  {property.area}
                </div>
              </div>
            </div>

            {/* Description */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Description</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {property.description}
                </p>
              </CardContent>
            </Card>

            {/* Amenities */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Amenities</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {property.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center text-muted-foreground">
                      <Check className="w-4 h-4 mr-2 text-primary" />
                      {amenity}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Interactive Map */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Location</h3>
                <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <MapPin className="w-12 h-12 mx-auto mb-2" />
                    <p>Interactive Map</p>
                    <p className="text-sm">{property.fullAddress}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Schedule Tour */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Schedule a Tour</h3>
                <form onSubmit={handleTourSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      placeholder="Your Name"
                      value={tourForm.name}
                      onChange={(e) => setTourForm({...tourForm, name: e.target.value})}
                      required
                    />
                    <Input
                      type="email"
                      placeholder="Email Address"
                      value={tourForm.email}
                      onChange={(e) => setTourForm({...tourForm, email: e.target.value})}
                      required
                    />
                    <Input
                      type="tel"
                      placeholder="Phone Number"
                      value={tourForm.phone}
                      onChange={(e) => setTourForm({...tourForm, phone: e.target.value})}
                      required
                    />
                    <Input
                      type="date"
                      value={tourForm.date}
                      onChange={(e) => setTourForm({...tourForm, date: e.target.value})}
                      required
                    />
                  </div>
                  <Textarea
                    placeholder="Additional message (optional)"
                    value={tourForm.message}
                    onChange={(e) => setTourForm({...tourForm, message: e.target.value})}
                    rows={3}
                  />
                  <Button type="submit" className="bg-gradient-primary hover:opacity-90">
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule Tour
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Agent Info Sidebar */}
          <div className="space-y-6">
            {agent && (
              <Card className="sticky top-24">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Contact Agent</h3>
                  
                  <div className="flex items-center space-x-4 mb-6">
                    <img
                      src={agent.image}
                      alt={agent.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="text-lg font-semibold text-foreground">{agent.name}</h4>
                      <p className="text-sm text-muted-foreground">{agent.specialization}</p>
                      <div className="flex items-center mt-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-muted-foreground ml-1">{agent.rating}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <a href={`tel:${agent.phone}`}>
                      <Button variant="outline" className="w-full justify-start">
                        <Phone className="w-4 h-4 mr-2" />
                        {agent.phone}
                      </Button>
                    </a>
                    <a href={`https://wa.me/${agent.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="w-full justify-start text-green-600 border-green-600 hover:bg-green-50">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        WhatsApp
                      </Button>
                    </a>
                    <a href={`mailto:${agent.email}`}>
                      <Button variant="outline" className="w-full justify-start">
                        <Mail className="w-4 h-4 mr-2" />
                        Email Agent
                      </Button>
                    </a>
                  </div>

                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <Input
                      placeholder="Your Name"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                      required
                    />
                    <Input
                      type="email"
                      placeholder="Email Address"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                      required
                    />
                    <Textarea
                      placeholder="Your message..."
                      value={contactForm.message}
                      onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                      rows={4}
                      required
                    />
                    <Button type="submit" className="w-full bg-gradient-primary hover:opacity-90">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;