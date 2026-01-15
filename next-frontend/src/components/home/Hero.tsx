"use client";
import { Button } from "@/components/ui/button";
import { useQuickEnquiry } from "@/components/QuickEnquiryDialog";
import { useBooking } from "@/components/BookingDialog";

export default function Hero() {
  const { setShowQuickEnquiry } = useQuickEnquiry();
  const { openBooking } = useBooking();
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/hero-yoga-group.jpg)' }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
        <div className="max-w-4xl mx-auto space-y-8">
          <p className="text-lg md:text-xl font-medium tracking-wide opacity-90 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
            Welcome To
          </p>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            {"Yogagarh".split("").map((char, index) => (
              <span
                key={index}
                className="inline-block animate-fade-in opacity-0"
                style={{
                  animationDelay: `${0.4 + index * 0.08}s`,
                  animationFillMode: 'forwards'
                }}
              >
                {char}
              </span>
            ))}
            {/* Custom "i" with lotus dot */}
            <span
              className="inline-block animate-fade-in opacity-0 relative"
              style={{
                animationDelay: `${0.4 + 8 * 0.08}s`,
                animationFillMode: 'forwards'
              }}
            >
              <span className="relative">
                {/* The "i" stem without dot */}
                <span className="font-heading">ı</span>
                {/* Star symbol as the dot - closer and animated */}
                <span
                  className="absolute -top-[0.02em] left-1/2 -translate-x-1/2 text-[0.4em] animate-pulse"
                  style={{
                    animation: 'pulse 2s ease-in-out infinite, spin 8s linear infinite'
                  }}
                >
                  ✦
                </span>
              </span>
            </span>
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
            Ancient Himalayan wisdom. Authentic yoga, lived & taught.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 pt-4">
            <div className="text-center">
              <p className="font-heading text-3xl md:text-4xl font-bold">500+</p>
              <p className="text-xs md:text-sm opacity-80">Graduated Students</p>
            </div>
            <div className="w-px h-10 bg-primary-foreground/30 hidden sm:block" />
            <div className="text-center">
              <p className="font-heading text-3xl md:text-4xl font-bold">Multi-Style</p>
              <p className="text-xs md:text-sm opacity-80">Yoga Training</p>
            </div>
          </div>

          {/* Second Row - Yoga Alliance & World's First */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            <div className="text-center">
              <p className="font-heading text-3xl md:text-4xl font-bold">Yoga Alliance</p>
              <p className="text-xs md:text-sm opacity-80">Certified School</p>
            </div>
            <div className="w-px h-10 bg-primary-foreground/30 hidden sm:block" />
            <div className="text-center">
              <p className="font-heading text-3xl md:text-4xl font-bold">World's First</p>
              <p className="text-xs md:text-sm opacity-80">Pre-YTTC Support Academy</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <Button
              variant="hero"
              size="xl"
              onClick={() => setShowQuickEnquiry(true)}
            >
              Quick Enquiry
            </Button>
            <Button
              variant="heroOutline"
              size="xl"
              onClick={() => openBooking("Home Page Hero")}
            >
              Book an Appointment
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
