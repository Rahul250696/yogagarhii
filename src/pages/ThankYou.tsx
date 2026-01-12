import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  CheckCircle, Heart, Calendar, MessageCircle, 
  Instagram, Youtube, Sparkles, ArrowRight, Mail,
  Phone, Download, BookOpen
} from "lucide-react";
import heroImage from "@/assets/hero-yoga-bali.jpg";

export default function ThankYou() {
  const [showConfetti, setShowConfetti] = useState(true);
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    // Staggered animation
    const timers = [
      setTimeout(() => setAnimationStep(1), 300),
      setTimeout(() => setAnimationStep(2), 600),
      setTimeout(() => setAnimationStep(3), 900),
      setTimeout(() => setAnimationStep(4), 1200),
      setTimeout(() => setShowConfetti(false), 5000),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <Layout>
      {/* Confetti Animation */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-confetti"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-10%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            >
              <div 
                className="w-3 h-3 rounded-sm"
                style={{
                  backgroundColor: ['#8B7355', '#D4AF37', '#6B8E23', '#CD853F', '#DEB887'][Math.floor(Math.random() * 5)],
                  transform: `rotate(${Math.random() * 360}deg)`,
                }}
              />
            </div>
          ))}
        </div>
      )}

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/80" />
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 opacity-20">
          <Sparkles className="w-16 h-16 text-primary-foreground animate-pulse" />
        </div>
        <div className="absolute bottom-20 right-10 opacity-20">
          <Heart className="w-12 h-12 text-primary-foreground animate-pulse" style={{ animationDelay: '0.5s' }} />
        </div>
        <div className="absolute top-1/3 right-20 opacity-10">
          <div className="w-32 h-32 rounded-full border-2 border-primary-foreground animate-spin-slow" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          {/* Success Icon */}
          <div 
            className={`mb-8 transition-all duration-700 ${
              animationStep >= 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
            }`}
          >
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-primary/30 rounded-full blur-xl animate-pulse" />
              <div className="relative w-24 h-24 mx-auto bg-primary rounded-full flex items-center justify-center">
                <CheckCircle className="w-12 h-12 text-primary-foreground" />
              </div>
            </div>
          </div>

          {/* Heading */}
          <h1 
            className={`font-heading text-4xl md:text-6xl font-bold text-primary-foreground mb-6 transition-all duration-700 ${
              animationStep >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Namaste! 🙏
          </h1>

          {/* Subheading */}
          <p 
            className={`text-xl md:text-2xl text-primary-foreground/90 mb-4 transition-all duration-700 ${
              animationStep >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Your journey towards transformation has begun
          </p>

          {/* Message */}
          <p 
            className={`text-primary-foreground/70 max-w-xl mx-auto transition-all duration-700 ${
              animationStep >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            We have received your enrollment request. Our team will reach out to you within 24 hours with next steps.
          </p>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
            What Happens Next?
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Here&apos;s what you can expect in the coming days
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block" />

              {/* Steps */}
              {[
                {
                  icon: Mail,
                  title: "Confirmation Email",
                  description: "Check your inbox for a confirmation email with all the details of your enrollment.",
                  time: "Within minutes"
                },
                {
                  icon: Phone,
                  title: "Personal Call",
                  description: "Our enrollment coordinator will call you to answer any questions and discuss your goals.",
                  time: "Within 24 hours"
                },
                {
                  icon: Download,
                  title: "Pre-Training Materials",
                  description: "Receive your preparation guide, reading list, and everything you need before arrival.",
                  time: "Within 48 hours"
                },
                {
                  icon: Calendar,
                  title: "Travel Planning",
                  description: "We'll help you with visa guidance, travel tips, and airport pickup arrangements.",
                  time: "1 week before"
                },
              ].map((step, index) => (
                <div 
                  key={index} 
                  className="relative flex gap-6 mb-12 last:mb-0"
                >
                  {/* Icon */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center">
                      <step.icon className="w-7 h-7 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                      <h3 className="font-heading text-xl font-bold text-foreground">
                        {step.title}
                      </h3>
                      <span className="text-sm text-primary font-medium px-3 py-1 bg-primary/10 rounded-full w-fit">
                        {step.time}
                      </span>
                    </div>
                    <p className="text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* While You Wait */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
            While You Wait...
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Explore more about YogaGarhi and prepare for your journey
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Card 1 */}
            <div className="bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-shadow group">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Instagram className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                Follow Our Journey
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Daily inspiration, behind-the-scenes, and student transformations
              </p>
              <a 
                href="https://instagram.com/yogagarhi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
              >
                @yogagarhi <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Card 2 */}
            <div className="bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-shadow group">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Youtube className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                Watch Testimonials
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Hear from our graduates about their life-changing experiences
              </p>
              <a 
                href="https://youtube.com/@yogagarhi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
              >
                Watch Videos <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Card 3 */}
            <div className="bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-shadow group">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <BookOpen className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                Read Our Blog
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Articles on yoga philosophy, practice tips, and spiritual growth
              </p>
              <Link 
                to="/blog"
                className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
              >
                Explore Blog <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
            Questions? We&apos;re Here to Help
          </h2>
          <p className="text-muted-foreground mb-8">
            Feel free to reach out anytime
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="https://wa.me/1234567890">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Us
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="mailto:info@yogagarhi.com">
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </a>
            </Button>
          </div>

          <div className="mt-12">
            <Button variant="ghost" asChild>
              <Link to="/">
                ← Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
