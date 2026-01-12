import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Leaf, Sun, Mountain, Flower2 } from "lucide-react";

const highlights = [
  { icon: Leaf, label: "Ancient Wisdom" },
  { icon: Sun, label: "Holistic Growth" },
  { icon: Mountain, label: "Sacred Space" },
  { icon: Flower2, label: "Inner Peace" },
];

export default function WelcomeSection() {
  const youtubeVideoId = "U1r2mQRmWXM";
  
  return (
    <section className="py-24 bg-gradient-to-b from-background via-secondary/20 to-background relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Lotus SVG Pattern - Top Right */}
        <svg
          className="absolute top-10 right-10 w-32 h-32 text-primary/5 animate-[spin_60s_linear_infinite]"
          viewBox="0 0 100 100"
          fill="currentColor"
        >
          <path d="M50 0C50 27.6 27.6 50 0 50C27.6 50 50 72.4 50 100C50 72.4 72.4 50 100 50C72.4 50 50 27.6 50 0Z" />
        </svg>
        
        {/* Circle Pattern - Bottom Left */}
        <div className="absolute bottom-20 left-10 w-64 h-64 rounded-full border border-primary/5" />
        <div className="absolute bottom-24 left-14 w-56 h-56 rounded-full border border-primary/5" />
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            Welcome to YogaGarhi
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Yoga Teacher Training
            <span className="block text-primary mt-2">in Bali</span>
          </h2>
          
          {/* Decorative Divider */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/40" />
            <svg className="w-8 h-8 text-primary/60" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C12 2 9.5 6 9.5 9.5C9.5 11 10.5 12 12 12C13.5 12 14.5 11 14.5 9.5C14.5 6 12 2 12 2ZM12 12C12 12 9 14.5 9 17C9 18.5 10.5 20 12 20C13.5 20 15 18.5 15 17C15 14.5 12 12 12 12ZM6 8C6 8 3 10.5 3 13C3 14.5 4.5 16 6 16C7.5 16 9 14.5 9 13C9 10.5 6 8 6 8ZM18 8C18 8 15 10.5 15 13C15 14.5 16.5 16 18 16C19.5 16 21 14.5 21 13C21 10.5 18 8 18 8Z" />
            </svg>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/40" />
          </div>
          
          {/* Highlight Pills */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 bg-background border border-primary/20 rounded-full shadow-sm hover:border-primary/40 transition-colors"
              >
                <item.icon className="w-4 h-4 text-primary" />
                <span className="text-sm text-foreground font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content - Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Left - Video */}
          <div className="relative order-2 lg:order-1">
            {/* Decorative Frame */}
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 rounded-2xl blur-xl opacity-50" />
            <div className="absolute -top-3 -left-3 w-20 h-20 border-t-2 border-l-2 border-primary/30 rounded-tl-2xl" />
            <div className="absolute -bottom-3 -right-3 w-20 h-20 border-b-2 border-r-2 border-primary/30 rounded-br-2xl" />
            
            <div className="relative pt-[56.25%] rounded-xl overflow-hidden shadow-2xl border border-primary/10">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${youtubeVideoId}`}
                title="Yoga Teacher Training In Bali | Awaken Your Teacher Within"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>

          {/* Right - Text Content */}
          <div className="space-y-6 order-1 lg:order-2">
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                Welcome to <strong className="text-foreground font-semibold">YogaGarhi</strong>, a sacred space where ancient wisdom meets modern living. Rooted in the timeless traditions of yoga and wellness, YogaGarhi is more than just a place to practice – it is a sanctuary for self-discovery, healing, and inner transformation.
              </p>
              
              <p>
                At YogaGarhi, we believe that yoga is not only about postures but a way of life. Our approach blends the depth of classical yogic practices with contemporary insights to create a holistic journey of the body, mind, and soul.
              </p>
              
              <p>
                With a focus on mindfulness, breathwork, meditation, and authentic teachings, we guide you to reconnect with your true self and find balance in today's fast-paced world.
              </p>
            </div>
            
            {/* Quote Block */}
            <div className="relative pl-6 py-4 border-l-4 border-primary/40 bg-primary/5 rounded-r-lg">
              <p className="text-foreground italic font-heading text-lg">
                "Every breath is a step towards freedom, every practice a journey towards wholeness."
              </p>
            </div>
            
            {/* CTA Button */}
            <div className="pt-4">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 group"
                asChild
              >
                <Link to="/about" className="flex items-center gap-2">
                  More About Us
                  <svg 
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
