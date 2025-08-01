import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SearchBar from "@/components/SearchBar";
import PropertyCard from "@/components/PropertyCard";
import { Star, Quote, Phone, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { properties } from "@/data/properties";
import heroImage from "@/assets/hero-bg.jpg";

const Home = () => {
  const featuredProperties = properties.filter(p => p.featured).slice(0, 4);

  const testimonials = [
    {
      name: "Mrs. Chioma Okoro",
      image: "/src/assets/agent-1.jpg",
      text: "Wisper helped us find our dream home in Lekki. Their agents were professional, patient, and really understood our needs. The entire process was seamless!",
      rating: 5,
      location: "Lekki, Lagos"
    },
    {
      name: "Mr. David Adebola",
      image: "/src/assets/agent-2.jpg", 
      text: "As a first-time property investor, I was nervous about making the right choice. Wisper's expertise and market knowledge gave me confidence. Excellent service!",
      rating: 5,
      location: "Abuja"
    },
    {
      name: "Dr. Sarah Ogundimu",
      image: "/src/assets/agent-3.jpg",
      text: "The team at Wisper made selling my property effortless. They handled everything professionally and got me the best price possible. Highly recommended!",
      rating: 5,
      location: "Victoria Island, Lagos"
    }
  ];

  return (
    <div className="font-dm-sans">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Find Your Perfect
              <span className="block text-transparent bg-gradient-to-r from-secondary to-yellow-300 bg-clip-text">
                Nigerian Home
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Discover luxury properties across Nigeria with Wisper Real Estate. 
              Where comfort meets class in every home we showcase.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/listings">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity text-lg px-8 py-6">
                  Browse Properties
                </Button>
              </Link>
              <a href="tel:+2348012345678">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-white/10 border-white/30 text-white hover:bg-white/20">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Us Now
                </Button>
              </a>
            </div>
          </div>
          
          {/* Search Bar */}
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <SearchBar />
          </div>
        </div>

        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/2348012345678"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 animate-luxury-glow"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
      </section>

      {/* Featured Properties */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Properties
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our handpicked selection of premium properties across Nigeria's most prestigious locations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {featuredProperties.map((property, index) => (
              <div 
                key={property.id} 
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <PropertyCard property={property} />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/listings">
              <Button size="lg" variant="outline" className="hover:bg-primary hover:text-primary-foreground">
                View All Properties
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about their experience with Wisper.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="text-center hover:shadow-luxury transition-shadow duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8">
                  <Quote className="w-8 h-8 text-primary mx-auto mb-4" />
                  <p className="text-muted-foreground mb-6 italic">
                    "{testimonial.text}"
                  </p>
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <div className="flex items-center justify-center space-x-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="text-left">
                      <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Find Your Dream Home?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Our expert agents are ready to help you discover the perfect property. 
            Get in touch today and let's make your real estate dreams a reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8 py-6">
                Talk to a Wisper Agent
              </Button>
            </Link>
            <Link to="/listings">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6">
                Browse Properties
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;