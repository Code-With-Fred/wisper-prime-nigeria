import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  MapPin, Phone, Mail, Clock, MessageCircle, 
  Instagram, Linkedin, Youtube, Send
} from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [contactForm, setContactForm] = useState({
    name: '', email: '', phone: '', subject: '', message: ''
  });
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! We'll get back to you within 24 hours.");
    setContactForm({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Successfully subscribed to our newsletter!");
    setNewsletterEmail('');
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to find your dream property or have questions about our services? 
            We're here to help you every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-medium text-foreground">Office Address</h4>
                      <p className="text-muted-foreground text-sm">
                        15 Admiralty Way, Lekki Phase 1<br />
                        Lagos State, Nigeria
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-medium text-foreground">Phone Numbers</h4>
                      <p className="text-muted-foreground text-sm">
                        <a href="tel:+2348012345678" className="hover:text-primary">
                          +234 801 234 5678
                        </a><br />
                        <a href="tel:+2348023456789" className="hover:text-primary">
                          +234 802 345 6789
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-medium text-foreground">Email Address</h4>
                      <p className="text-muted-foreground text-sm">
                        <a href="mailto:info@wisper.ng" className="hover:text-primary">
                          info@wisper.ng
                        </a><br />
                        <a href="mailto:sales@wisper.ng" className="hover:text-primary">
                          sales@wisper.ng
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-medium text-foreground">Business Hours</h4>
                      <p className="text-muted-foreground text-sm">
                        Monday - Friday: 8:00 AM - 6:00 PM<br />
                        Saturday: 9:00 AM - 4:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media & Quick Actions */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-6">Connect With Us</h3>
                
                <div className="space-y-4">
                  <a
                    href="https://wa.me/2348012345678"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button variant="outline" className="w-full justify-start text-green-600 border-green-600 hover:bg-green-50">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Chat on WhatsApp
                    </Button>
                  </a>
                  
                  <div className="flex space-x-3">
                    <a
                      href="https://instagram.com/wisperrealestate"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button variant="outline" size="sm" className="w-full">
                        <Instagram className="w-4 h-4" />
                      </Button>
                    </a>
                    <a
                      href="https://linkedin.com/company/wisperrealestate"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button variant="outline" size="sm" className="w-full">
                        <Linkedin className="w-4 h-4" />
                      </Button>
                    </a>
                    <a
                      href="https://youtube.com/@wisperrealestate"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button variant="outline" size="sm" className="w-full">
                        <Youtube className="w-4 h-4" />
                      </Button>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-6">Send us a Message</h3>
                
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <Input
                        placeholder="Your full name"
                        value={contactForm.name}
                        onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        placeholder="your.email@example.com"
                        value={contactForm.email}
                        onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        placeholder="+234 800 000 0000"
                        value={contactForm.phone}
                        onChange={(e) => setContactForm({...contactForm, phone: e.target.value})}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Subject *
                      </label>
                      <Select onValueChange={(value) => setContactForm({...contactForm, subject: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="property-inquiry">Property Inquiry</SelectItem>
                          <SelectItem value="property-valuation">Property Valuation</SelectItem>
                          <SelectItem value="investment-advice">Investment Advice</SelectItem>
                          <SelectItem value="property-management">Property Management</SelectItem>
                          <SelectItem value="general-inquiry">General Inquiry</SelectItem>
                          <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <Textarea
                      placeholder="Tell us about your requirements, questions, or how we can help you..."
                      value={contactForm.message}
                      onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                      rows={6}
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-gradient-primary hover:opacity-90 transition-opacity"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <Card className="mb-16">
          <CardContent className="p-0">
            <div className="h-96 bg-muted rounded-lg flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <MapPin className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Our Office Location</h3>
                <p>15 Admiralty Way, Lekki Phase 1, Lagos State</p>
                <p className="text-sm mt-2">Interactive Google Map would be embedded here</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Newsletter Signup */}
        <Card className="bg-gradient-primary text-primary-foreground">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Stay in the Loop</h3>
            <p className="mb-6 opacity-90 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest property listings, market insights, 
              and exclusive opportunities delivered directly to your inbox.
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  required
                  className="flex-1 bg-background text-foreground border-0 focus:ring-2 focus:ring-secondary"
                />
                <Button 
                  type="submit" 
                  variant="secondary" 
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                >
                  Subscribe
                </Button>
              </div>
            </form>
            
            <p className="text-xs opacity-75 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </CardContent>
        </Card>
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
    </div>
  );
};

export default Contact;