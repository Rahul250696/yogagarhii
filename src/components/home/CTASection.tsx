import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 pattern-lotus opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-primary-foreground">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Begin Your Yoga Journey Today
          </h2>
          <p className="text-xl opacity-90 mb-8 leading-relaxed">
            Connect with us and begin your journey of transformation. Fill out the form and we'll guide you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">Get Started</Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="https://wa.me/+917895350563" target="_blank" rel="noopener noreferrer">
                Chat on WhatsApp
              </a>
            </Button>
          </div>
          <p className="mt-8 text-sm opacity-80">
            We trust the depth of what we offer. 100% refund if not satisfied after the first day.
          </p>
        </div>
      </div>
    </section>
  );
}
