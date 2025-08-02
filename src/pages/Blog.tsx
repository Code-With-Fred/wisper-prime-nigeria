import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User } from "lucide-react";
import { Link } from "react-router-dom";

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  publishDate: string;
  readTime: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "red-flags-buying-property-nigeria",
    title: "5 Red Flags When Buying Property in Nigeria",
    excerpt: "Learn to identify warning signs that could save you from making costly mistakes in your property investment journey.",
    content: `Investing in Nigerian real estate normal thing ibly rewarding, but it's crucial to know what to watch out for. Here are the top 5 red flags that should make you think twice before purchasing a property.

## 1. Unclear Documentation

One of the biggest red flags is when a seller cannot provide clear, legitimate documentation for the property. Always insist on seeing:
- Certificate of Occupancy (C of O)
- Survey plan
- Deed of assignment
- Tax clearance certificates

Without proper documentation, you could face legal issues down the line, including potential loss of your investment.

## 2. Unusually Low Prices

If a deal seems too good to be true, it probably is. Properties priced significantly below market value often have hidden issues:
- Legal disputes
- Structural problems
- Location challenges
- Fraudulent ownership

Always research comparable properties in the area to understand fair market value.

## 3. Pressure to Make Quick Decisions

Legitimate property transactions take time. Be wary of sellers who:
- Rush you to make immediate decisions
- Claim "other buyers are waiting"
- Refuse to allow proper inspections
- Push for cash-only transactions

Take your time to conduct due diligence, including property inspections and title verification.

## 4. No Physical Address or Office

Reputable property sellers and agents should have:
- A physical office address
- Proper business registration
- Professional references
- A established track record

Avoid dealing with individuals who only communicate through phone calls or social media without any verifiable business presence.

## 5. Refusal to Allow Professional Inspection

Any seller who refuses to allow a professional property inspection is hiding something. Always insist on:
- Structural engineering assessment
- Electrical and plumbing inspection
- Environmental assessments
- Boundary verification

Remember, buying property is likely one of your largest investments. Taking the time to identify and avoid these red flags can save you significant money and stress in the long run.`,
    image: "/src/assets/property-1.jpg",
    author: "Adunni Okafor",
    publishDate: "2024-07-15",
    readTime: "5 min read",
    category: "Investment Tips"
  },
  {
    id: "2",
    slug: "enugu-land-investment-opportunity",
    title: "Why Land in Enugu Is the Next Big Investment",
    excerpt: "Discover why Enugu is emerging as Nigeria's next major real estate hotspot and how you can capitalize on this opportunity.",
    content: `Enugu State is rapidly emerging as one of Nigeria's most promising real estate markets. Here's why smart investors are turning their attention to the Coal City State.

## Strategic Location Advantage

Enugu's strategic position in the Southeast makes it a natural hub for business and commerce. The state serves as a gateway between the North and South, with excellent connectivity to major Nigerian cities.

## Government Infrastructure Investment

The Enugu State government has been investing heavily in infrastructure:
- New airport terminal facilities
- Improved road networks
- Industrial parks development
- Technology hubs and innovation centers

These investments are driving up property values and creating new opportunities for investors.

## Growing Tech Ecosystem

Enugu is positioning itself as a technology hub, attracting:
- Software development companies
- Fintech startups
- Educational institutions
- Young professionals

This demographic shift is creating demand for modern housing and commercial spaces.

## Affordable Entry Points

Compared to Lagos and Abuja, Enugu offers:
- Lower property acquisition costs
- Reasonable development expenses
- High potential for appreciation
- Less market saturation

## Key Areas to Watch

Prime investment locations include:
- Independence Layout
- GRA Enugu
- New Haven
- Trans-Ekulu
- Coal Camp

## Investment Strategies

Consider these approaches:
- Buy and hold for long-term appreciation
- Develop residential properties for the growing middle class
- Invest in commercial properties near business districts
- Consider mixed-use developments

The time to invest in Enugu is now, before the market becomes fully saturated like other major Nigerian cities.`,
    image: "/src/assets/property-2.jpg",
    author: "Emeka Nwosu",
    publishDate: "2024-07-10",
    readTime: "7 min read",
    category: "Market Analysis"
  },
  {
    id: "3",
    slug: "smart-homes-lagos-revolution",
    title: "The Rise of Smart Homes in Lagos",
    excerpt: "Explore how technology is transforming Lagos real estate and what smart home features are becoming standard in luxury properties.",
    content: `Lagos is experiencing a smart home revolution, with technology integration becoming a key differentiator in the luxury real estate market.

## What Are Smart Homes?

Smart homes use internet-connected devices to enable remote monitoring and management of systems and appliances. In Lagos, this technology is solving real challenges while adding convenience and security.

## Key Smart Home Features in Lagos

### Security Systems
- IP cameras with mobile monitoring
- Smart door locks and access control
- Alarm systems with remote alerts
- Perimeter security integration

### Energy Management
- Smart inverters and solar integration
- Automated lighting systems
- Energy monitoring and optimization
- Climate control automation

### Convenience Features
- Voice-controlled assistants
- Automated curtains and blinds
- Smart appliances and home theaters
- Remote home monitoring

## Why Smart Homes Are Popular in Lagos

### Power Management
Lagos' power challenges make smart energy management crucial:
- Automatic switching between grid and generator power
- Energy usage optimization
- Solar panel integration
- Battery management systems

### Security Concerns
Enhanced security features address urban safety:
- 24/7 remote monitoring
- Instant alert systems
- Access control for domestic staff
- Integration with security services

### Property Value
Smart features significantly increase property values:
- Higher rental yields
- Faster property sales
- Premium pricing justification
- Future-proofing investments

## Investment Considerations

### Initial Costs
- Smart home integration adds 10-15% to construction costs
- High-quality systems provide better ROI
- Gradual implementation is possible

### Maintenance Requirements
- Regular system updates needed
- Technical support requirements
- Staff training considerations

## Future Trends

The Lagos smart home market is evolving toward:
- AI-powered home management
- Enhanced environmental controls
- Integration with city infrastructure
- Improved energy independence

Smart homes represent the future of Lagos luxury real estate, offering solutions to urban challenges while providing unprecedented comfort and convenience.`,
    image: "/src/assets/property-3.jpg",
    author: "Funmi Adebayo",
    publishDate: "2024-07-05",
    readTime: "6 min read",
    category: "Technology"
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Real Estate Insights
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay informed with the latest trends, tips, and insights from Nigeria's 
            dynamic real estate market.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <Card className="overflow-hidden hover:shadow-luxury transition-shadow duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-gradient-gold text-foreground">
                  Featured
                </Badge>
              </div>
              <CardContent className="p-8 flex flex-col justify-center">
                <Badge variant="secondary" className="w-fit mb-4">
                  {blogPosts[0].category}
                </Badge>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {blogPosts[0].title}
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center text-sm text-muted-foreground mb-6">
                  <User className="w-4 h-4 mr-2" />
                  {blogPosts[0].author}
                  <Calendar className="w-4 h-4 ml-4 mr-2" />
                  {new Date(blogPosts[0].publishDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                  <Clock className="w-4 h-4 ml-4 mr-2" />
                  {blogPosts[0].readTime}
                </div>
                <Link to={`/blog/${blogPosts[0].slug}`}>
                  <Button className="bg-gradient-primary hover:opacity-90">
                    Read Full Article
                  </Button>
                </Link>
              </CardContent>
            </div>
          </Card>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.slice(1).map((post, index) => (
            <Card 
              key={post.id} 
              className="overflow-hidden hover:shadow-luxury transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-background/90 text-foreground">
                  {post.category}
                </Badge>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center text-sm text-muted-foreground mb-4">
                  <User className="w-4 h-4 mr-1" />
                  {post.author}
                  <Calendar className="w-4 h-4 ml-3 mr-1" />
                  {new Date(post.publishDate).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric'
                  })}
                  <Clock className="w-4 h-4 ml-3 mr-1" />
                  {post.readTime}
                </div>
                
                <Link to={`/blog/${post.slug}`}>
                  <Button variant="outline" className="w-full hover:bg-primary hover:text-primary-foreground">
                    Read More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16">
          <Card className="bg-gradient-primary text-primary-foreground">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
              <p className="mb-6 opacity-90">
                Get the latest real estate insights delivered directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg text-foreground bg-background border-0 focus:outline-none focus:ring-2 focus:ring-secondary"
                />
                <Button variant="secondary" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Blog;