import { useParams, Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, ArrowLeft, Share2 } from "lucide-react";

// This would typically come from a CMS or database
const blogPosts = [
  {
    id: "1",
    slug: "red-flags-buying-property-nigeria",
    title: "5 Red Flags When Buying Property in Nigeria",
    excerpt: "Learn to identify warning signs that could save you from making costly mistakes in your property investment journey.",
    content: `Investing in Nigerian real estate can be incredibly rewarding, but it's crucial to know what to watch out for. Here are the top 5 red flags that should make you think twice before purchasing a property.

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

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Post Not Found</h2>
          <p className="text-muted-foreground mb-6">The blog post you're looking for doesn't exist.</p>
          <Link to="/blog">
            <Button>Back to Blog</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      // You could add a toast notification here
    }
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back to Blog */}
        <div className="mb-8">
          <Link to="/blog" className="inline-flex items-center text-primary hover:underline">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </div>

        {/* Article Header */}
        <div className="mb-8">
          <Badge variant="secondary" className="mb-4">
            {post.category}
          </Badge>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8">
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              {post.author}
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              {new Date(post.publishDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              {post.readTime}
            </div>
            <Button variant="outline" size="sm" onClick={handleShare}>
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
          </div>
        </div>

        {/* Featured Image */}
        <div className="mb-12 rounded-xl overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover"
          />
        </div>

        {/* Article Content */}
        <Card>
          <CardContent className="p-8 md:p-12">
            <div className="prose prose-lg max-w-none text-foreground">
              {post.content.split('\n\n').map((paragraph, index) => {
                if (paragraph.startsWith('## ')) {
                  return (
                    <h2 key={index} className="text-2xl font-bold text-foreground mt-8 mb-4">
                      {paragraph.replace('## ', '')}
                    </h2>
                  );
                } else if (paragraph.startsWith('### ')) {
                  return (
                    <h3 key={index} className="text-xl font-semibold text-foreground mt-6 mb-3">
                      {paragraph.replace('### ', '')}
                    </h3>
                  );
                } else if (paragraph.startsWith('- ')) {
                  const listItems = paragraph.split('\n').filter(item => item.startsWith('- '));
                  return (
                    <ul key={index} className="list-disc pl-6 mb-6 space-y-2">
                      {listItems.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-muted-foreground">
                          {item.replace('- ', '')}
                        </li>
                      ))}
                    </ul>
                  );
                } else if (paragraph.trim() !== '') {
                  return (
                    <p key={index} className="text-muted-foreground leading-relaxed mb-6">
                      {paragraph}
                    </p>
                  );
                }
                return null;
              })}
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="mt-12">
          <Card className="bg-gradient-primary text-primary-foreground">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your Real Estate Journey?</h3>
              <p className="mb-6 opacity-90">
                Contact our expert agents today for personalized assistance with your property needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button variant="secondary" size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                    Contact an Agent
                  </Button>
                </Link>
                <Link to="/listings">
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                    Browse Properties
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Related Posts */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-foreground mb-8">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.filter(p => p.id !== post.id).slice(0, 2).map((relatedPost) => (
              <Card key={relatedPost.id} className="overflow-hidden hover:shadow-luxury transition-shadow duration-300">
                <div className="relative">
                  <img
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-background/90 text-foreground">
                    {relatedPost.category}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h4 className="text-lg font-bold text-foreground mb-3 line-clamp-2">
                    {relatedPost.title}
                  </h4>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {relatedPost.excerpt}
                  </p>
                  <Link to={`/blog/${relatedPost.slug}`}>
                    <Button variant="outline" size="sm">
                      Read More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;