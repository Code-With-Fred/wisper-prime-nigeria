import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, MessageCircle, Mail, Star, Building2, 
  Calendar, Award
} from "lucide-react";
import { agents } from "@/data/agents";
import { properties } from "@/data/properties";
import { toast } from "sonner";
import PropertyCard from "@/components/PropertyCard";

const Agents = () => {
  const [selectedAgent, setSelectedAgent] = useState<string | null>(null);
  const [contactForm, setContactForm] = useState({
    name: '', email: '', phone: '', message: '', agentId: ''
  });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! The agent will contact you soon.");
    setContactForm({ name: '', email: '', phone: '', message: '', agentId: '' });
    setSelectedAgent(null);
  };

  const getAgentProperties = (agentId: string) => {
    return properties.filter(p => p.agentId === agentId);
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Meet Our Expert Agents
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our experienced real estate professionals are here to help you find your perfect property 
            or get the best value for your investment.
          </p>
        </div>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {agents.map((agent, index) => (
            <Card 
              key={agent.id} 
              className="overflow-hidden hover:shadow-luxury transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={agent.image}
                    alt={agent.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-gradient-gold text-foreground">
                      {agent.rating} <Star className="w-3 h-3 ml-1 fill-current" />
                    </Badge>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">{agent.name}</h3>
                  <p className="text-primary font-medium mb-2">{agent.specialization}</p>
                  
                  <div className="space-y-2 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {agent.experience} experience
                    </div>
                    <div className="flex items-center">
                      <Building2 className="w-4 h-4 mr-2" />
                      {agent.propertiesListed} properties listed
                    </div>
                    <div className="flex items-center">
                      <Award className="w-4 h-4 mr-2" />
                      Top Rated Agent
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-6 line-clamp-3">
                    {agent.bio}
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex space-x-2">
                      <a href={`tel:${agent.phone}`} className="flex-1">
                        <Button variant="outline" size="sm" className="w-full">
                          <Phone className="w-4 h-4 mr-1" />
                          Call
                        </Button>
                      </a>
                      <a 
                        href={`https://wa.me/${agent.whatsapp.replace(/[^0-9]/g, '')}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button variant="outline" size="sm" className="w-full text-green-600 border-green-600 hover:bg-green-50">
                          <MessageCircle className="w-4 h-4 mr-1" />
                          WhatsApp
                        </Button>
                      </a>
                    </div>
                    
                    <Button 
                      className="w-full bg-gradient-primary hover:opacity-90"
                      onClick={() => {
                        setSelectedAgent(agent.id);
                        setContactForm({...contactForm, agentId: agent.id});
                      }}
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Contact Agent
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Agent Properties Sections */}
        {agents.map((agent) => {
          const agentProperties = getAgentProperties(agent.id);
          if (agentProperties.length === 0) return null;
          
          return (
            <div key={`properties-${agent.id}`} className="mb-16">
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Properties by {agent.name}
              </h2>
              <p className="text-muted-foreground mb-8">
                Explore the latest listings from our top-performing agent
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {agentProperties.slice(0, 3).map((property, index) => (
                  <div 
                    key={property.id}
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <PropertyCard property={property} />
                  </div>
                ))}
              </div>
            </div>
          );
        })}

        {/* Contact Form Modal */}
        {selectedAgent && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <Card className="w-full max-w-md max-h-[90vh] overflow-y-auto">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-foreground">
                    Contact {agents.find(a => a.id === selectedAgent)?.name}
                  </h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedAgent(null)}
                  >
                    ×
                  </Button>
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
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    value={contactForm.phone}
                    onChange={(e) => setContactForm({...contactForm, phone: e.target.value})}
                  />
                  <Textarea
                    placeholder="Your message..."
                    value={contactForm.message}
                    onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                    rows={4}
                    required
                  />
                  <div className="flex space-x-3">
                    <Button
                      type="button"
                      variant="outline"
                      className="flex-1"
                      onClick={() => setSelectedAgent(null)}
                    >
                      Cancel
                    </Button>
                    <Button type="submit" className="flex-1 bg-gradient-primary hover:opacity-90">
                      Send Message
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default Agents;