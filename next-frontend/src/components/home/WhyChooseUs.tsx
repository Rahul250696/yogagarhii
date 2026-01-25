"use client";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";

const features = [
  {
    title: "Multi-Style & Ayurveda Training",
    desc: "Vinyasa, Hatha, Ashtanga, and Iyengar taught with a strong foundation in Ayurveda.",
    highlight: "Integrated"
  },
  {
    title: "Shiv-Shakti Method",
    desc: "Our signature approach that converts ancient yogic theory into practical, life-changing wisdom.",
    highlight: "Signature"
  },
  {
    title: "Pre-TTC Mentorship",
    desc: "World's first program to build your foundation before training begins.",
    highlight: "World's 1st"
  },
  {
    title: "Intimate Learning",
    desc: "Only 8-10 students per batch for deeply personalized attention.",
    highlight: "8-10 Max"
  },
  {
    title: "Philosophy-Driven",
    desc: "Highest yogic philosophy through rituals, meditation, and satsang.",
    highlight: "Authentic"
  },
  {
    title: "35+ Sequencing Book",
    desc: "Practical sequences you can teach from day one after graduation.",
    highlight: "Included"
  },
  {
    title: "Global Yoga Family",
    desc: "Join a worldwide community that supports your growth forever.",
    highlight: "Lifetime"
  },
  {
    title: "Free Course Repeat",
    desc: "Revisit any training whenever it runs, at absolutely no extra cost.",
    highlight: "Forever"
  },
];

// Lotus SVG for decorative purposes
const LotusDecor = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 60" fill="none" stroke="currentColor" strokeWidth="1">
    <path d="M50 55 C50 40, 30 30, 20 40 C10 50, 30 55, 50 55" />
    <path d="M50 55 C50 40, 70 30, 80 40 C90 50, 70 55, 50 55" />
    <path d="M50 55 C50 35, 35 20, 30 30 C25 40, 40 50, 50 55" />
    <path d="M50 55 C50 35, 65 20, 70 30 C75 40, 60 50, 50 55" />
    <path d="M50 55 C50 30, 50 15, 50 25 C50 35, 50 45, 50 55" />
  </svg>
);

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full border border-primary" />
        <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full border border-primary" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-primary" />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-medium tracking-widest text-primary/70 uppercase mb-3">
            The Yogagarhi Difference
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Students Choose Yogagarhi
          </h2>
          <LotusDecor className="w-16 h-10 mx-auto text-primary/40 mb-6" />
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground italic leading-relaxed">
            "Choosing a teacher training is not about trends, it’s about trust, depth, and being ready for your next step, as a practitioner or teacher."
          </p>
        </div>

        {/* Unique Bento-style layout */}
        <div className="max-w-6xl mx-auto">
          {/* Top row - 3 columns with featured card */}
          <div className="grid md:grid-cols-3 gap-4 mb-4">
            {/* Featured large card */}
            <div
              className={`md:col-span-2 group relative p-8 rounded-2xl bg-primary/5 border border-primary/10 hover:border-primary/30 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              style={{ transitionDelay: '100ms' }}
            >
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                {features[0].highlight}
              </div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {features[0].title}
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-md">
                {features[0].desc}
              </p>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Stacked cards */}
            <div className="flex flex-col gap-4">
              {features.slice(1, 3).map((item, index) => (
                <div
                  key={index}
                  className={`group relative p-5 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                  style={{ transitionDelay: `${(index + 2) * 100}ms` }}
                >
                  <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-muted text-muted-foreground text-[10px] font-semibold">
                    {item.highlight}
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-1.5 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Middle row - 4 equal columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            {features.slice(3, 7).map((item, index) => (
              <div
                key={index}
                className={`group relative p-5 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-500 text-center ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                style={{ transitionDelay: `${(index + 4) * 100}ms` }}
              >
                <div className="inline-block px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold mb-3">
                  {item.highlight}
                </div>
                <h3 className="font-heading text-base font-semibold text-foreground mb-1.5 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-muted-foreground line-clamp-2">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom row - Two cards side by side */}
          <div className="grid md:grid-cols-2 gap-4">
            {/* Free Course Repeat */}
            <div
              className={`group relative p-6 rounded-2xl bg-white border border-primary/10 hover:border-primary/30 hover:shadow-xl transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              style={{ transitionDelay: '800ms' }}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3 font-heading uppercase tracking-wider">
                    Forever
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    Free Course Repeat
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Revisit any training whenever it runs, at absolutely no extra cost. Keep your practice fresh forever.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-primary/5 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-500 transform group-hover:rotate-12 shadow-inner">
                    <svg className="w-7 h-7 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M4 12a8 8 0 1 0 16 0 8 8 0 0 0-16 0Z" />
                      <path d="M12 8v4l2 2" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Assistant Teacher Opportunity */}
            <div
              className={`group relative p-6 rounded-2xl bg-accent/5 border border-accent/20 hover:border-accent/40 hover:shadow-xl transition-all duration-500 overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              style={{ transitionDelay: '900ms' }}
            >
              {/* Decorative accent element */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/10 rounded-full blur-2xl group-hover:bg-accent/20 transition-all duration-700" />

              <div className="flex items-start justify-between gap-4 relative z-10">
                <div className="flex-1">
                  <div className="inline-block px-3 py-1 rounded-full bg-accent text-white text-xs font-semibold mb-3 font-heading uppercase tracking-wider">
                    Growth
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                    Assistant Teacher Opportunity (Optional)
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Get the chance to become an assistant teacher in future batches and grow your authentic teaching experience.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-500 transform group-hover:scale-110 shadow-lg group-hover:shadow-accent/40">
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom decoration */}
        <div className="flex items-center justify-center gap-3 mt-12">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/30" />
          <div className="w-2 h-2 rounded-full bg-primary/30" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/30" />
        </div>
      </div>
    </section>
  );
}
