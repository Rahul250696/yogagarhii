"use client";
import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Shield, Heart, Users, BookOpen, Sparkles, Mountain, ArrowRight, Leaf, Star, Flame } from "lucide-react";
import { useEnrollment } from "@/components/EnrollmentDialog";
import ReadyToBeginSection from "@/components/home/ReadyToBeginSection";
import heroImage from "@/assets/hero-yoga-bali.jpg";
import gallery1 from "@/assets/gallery/gallery-1.jpg";
import gallery2 from "@/assets/gallery/gallery-2.jpg";
import gallery3 from "@/assets/gallery/gallery-3.jpg";
import gallery4 from "@/assets/gallery/gallery-4.jpg";
import gallery5 from "@/assets/gallery/gallery-5.jpg";
import founderImage from "@/assets/founder-image.png";
import aboutYoga1 from "@/assets/about-yoga-1.jpg";
import aboutYoga2 from "@/assets/about-yoga-2.jpg";
import aboutYoga3 from "@/assets/about-yoga-3.jpg";

const whyChooseUs = [
  { title: "The Unique Shivshakti Method", desc: "Our Signature Approach converts yogic theory into practical wisdom.", highlight: "Signature" },
  { title: "Real Teaching Skills", desc: "Micro-teaching, with short sessions and fewer students, builds trust and shapes practitioners into future teachers.", highlight: "Practical" },
  { title: "Post-TTC Mentorship", desc: "Include Yoga business modules, teaching set up, authentic marketing, retreat, workshops, and alumni community to support your career.", highlight: "Lifetime" },
  { title: "Small Learning Groups", desc: "Only 10-15 students per batch for personalized attention. We make sure everyone learns.", highlight: "8-15 Max" },
  { title: "Philosophy-driven Approach", desc: "Brings highest philosophy into practice through rituals, meditation, satsang and many more.", highlight: "Authentic" },
  { title: "Technical Expertise", desc: "We teach you anatomy and biomechanics on the mat. You learn alignment, sequencing, adjustments in detail.", highlight: "Expert" },
];

const experiences = [
  { icon: Leaf, title: "Simple, yet profound", desc: "Because truth doesn't need complexity to be felt." },
  { icon: Heart, title: "Scientific, yet spiritual", desc: "Where ancient wisdom meets modern understanding." },
  { icon: Flame, title: "Practical, yet sacred", desc: "Grounded in daily life, yet rooted in timeless depth." },
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

const lifetimeExperiences = [
  "Nature walks",
  "Evening meditation",
  "Morning silence",
  "Fire rituals",
  "Ayurveda sessions",
  "Reflection sessions",
  "Yoga community",
  "Certification"
];

function WhyChooseSection() {
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
            Why Choose Us
          </h2>
          <LotusDecor className="w-16 h-10 mx-auto text-primary/40" />
        </div>

        {/* Bento-style layout */}
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
                {whyChooseUs[0].highlight}
              </div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {whyChooseUs[0].title}
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-md">
                {whyChooseUs[0].desc}
              </p>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Stacked cards */}
            <div className="flex flex-col gap-4">
              {whyChooseUs.slice(1, 3).map((item, index) => (
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

          {/* Bottom row - 3 equal columns */}
          <div className="grid md:grid-cols-3 gap-4 mb-4">
            {whyChooseUs.slice(3, 6).map((item, index) => (
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

          {/* Full width row - Free Course Repeat & Assistant Teacher */}
          <div className="grid md:grid-cols-2 gap-4">
            {/* Free Course Repeat */}
            <div
              className={`group relative p-6 rounded-2xl bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 border border-primary/10 hover:border-primary/30 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              style={{ transitionDelay: '800ms' }}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3">
                    Forever
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    Free Course Repeat
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Revisit any training whenever it runs, at absolutely no extra cost.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
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
              className={`group relative p-6 rounded-2xl bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 border border-primary/10 hover:border-primary/30 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              style={{ transitionDelay: '900ms' }}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3">
                    Growth
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    Assistant Teacher Opportunity
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Get the chance to become an assistant teacher in future batches and grow your teaching experience.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Users className="w-7 h-7 text-primary" />
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

export default function AboutAshram() {
  const { setShowEnrollDialog } = useEnrollment();

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-72 md:h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt="Hero Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-primary/70" />
        </div>
        <div className="relative z-10 text-center text-primary-foreground px-4">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-primary-foreground/40" />
            <span className="text-sm font-medium tracking-[0.2em] uppercase opacity-80">About YogaGarhi</span>
            <div className="w-8 h-px bg-primary-foreground/40" />
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            A Fortress of Wisdom
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            Where the timeless wisdom of yoga is preserved and passed on with utmost care
          </p>
        </div>
      </section>

      {/* About YogaGarhi - The Name */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Images */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-48 rounded-2xl overflow-hidden relative">
                  <Image src={aboutYoga1} alt="YogaGarhi Practice" fill className="object-cover" />
                </div>
                <div className="h-32 rounded-2xl overflow-hidden relative">
                  <Image src={aboutYoga2} alt="YogaGarhi Environment" fill className="object-cover" />
                </div>
              </div>
              <div className="pt-8">
                <div className="h-64 rounded-2xl overflow-hidden relative">
                  <Image src={aboutYoga3} alt="YogaGarhi Ashram" fill className="object-cover" />
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <Shield className="w-6 h-6 text-primary" />
                <span className="text-primary text-sm font-medium tracking-[0.15em] uppercase">The Meaning</span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                What is <span className="text-primary">YogaGarhi</span>?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Yogagarhi is made up of two words: <strong className="text-foreground">yoga</strong> and <strong className="text-foreground">garhi</strong>. Yoga means union, and garhi means fortress. Yes, a fort, that's what we are.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We are a fortress that protects the true essence of yoga from outside influences, distortions, and dilution. It is a place where the timeless wisdom contained in the authentic principles of yoga is preserved and passed on with utmost care.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                A fort is situated at a much higher altitude than its surroundings. For us, the true foundation or essence of Yoga lies in the highest philosophy of <strong className="text-foreground">Advaita or non-duality</strong>. Yogagarhi isn't just a yoga school. It's a fortress of wisdom, awareness, and inner freedom.
              </p>
              <Button
                variant="cta"
                size="lg"
                onClick={() => setShowEnrollDialog(true)}
              >
                Begin Your Journey
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why YogaGarhi was Established */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Founder Image */}
              <div className="order-2 lg:order-1">
                <div className="relative">
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden relative">
                    <Image src={founderImage} alt="Yogacharya Sachin" fill className="object-cover" />
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-6 py-3 rounded-xl">
                    <p className="font-semibold">Yogacharya Sachin</p>
                    <p className="text-sm opacity-80">Founder</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="order-1 lg:order-2">
                <span className="inline-flex items-center gap-2 text-primary/80 text-sm font-medium tracking-widest uppercase mb-4">
                  <Heart className="w-4 h-4" fill="currentColor" />
                  Our Story
                </span>

                <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-2">
                  Yogacharya Sachin
                </h2>
                <p className="text-primary font-medium text-lg mb-6">Founder & Lead Teacher, YogaGarhi</p>

                <div className="space-y-5 text-muted-foreground leading-relaxed mb-8">
                  <p>
                    A fearless child, a curious teen, and a heart that kept seeking. This journey
                    gradually shaped a revolutionary man, <em className="text-foreground font-medium">not driven by rebellion,
                      but by awareness</em>. What began as exploration unfolded into a life devoted to
                    practice, discipline, teaching, and service.
                  </p>

                  <p className="text-foreground/90 border-l-2 border-primary/50 pl-4 italic">
                    "Yoga was not found in a single moment; it revealed itself slowly, through experience,
                    inquiry, inner silence, and lived understanding."
                  </p>

                  <p>
                    Even after teaching yoga for seven years at a reputed yoga teacher training school,
                    there was still <em className="text-foreground font-medium">a sense of incompleteness</em> within me.
                    I felt something was missing. We were teaching anatomy, demonstrating postures,
                    teaching alignment, and giving certificates, but <strong className="text-foreground">something deeper was absent</strong>.
                  </p>

                  <p>
                    After a long period of observation, I realized that we live in duality: I and the world,
                    day and night, pleasure and pain. The sages have said that <strong className="text-foreground">this duality
                      is the cause of all human suffering</strong>. Therefore, life is a journey from
                    <em className="text-foreground font-medium"> duality (dwaita)</em> to
                    <em className="text-foreground font-medium"> non-duality (Advaita)</em>.
                  </p>

                  <p>
                    From this understanding, <strong className="text-foreground">YogaGarhi</strong> was born.
                    A fortress where <em className="text-foreground font-medium">yoga is lived, not merely taught</em>;
                    rooted in awareness, inner silence, and the timeless wisdom of the ancient sages.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Purpose */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-primary/40" />
              <span className="text-primary text-sm font-medium tracking-[0.2em] uppercase">Our Purpose</span>
              <div className="w-8 h-px bg-primary/40" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              The Purpose of YogaGarhi
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The idea behind Yogagarghi was to create a space where yoga is not just taught, but <strong className="text-foreground">lived as a way of life</strong>. Over the years, we have understood one simple fact—people don't want just information, they desire <strong className="text-foreground">transformation</strong>.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-center text-muted-foreground leading-relaxed mb-12">
              That's why our focus is not on how to "do" yoga, but on <strong className="text-foreground">how to be a yogi</strong>. The path we take is simple but deep and scientific yet spiritual. For us, yoga is not something to be just performed physically. It is a way to live, to breathe, to reflect, to spread, and ultimately—to become.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {experiences.map((exp) => (
                <div
                  key={exp.title}
                  className="p-6 bg-muted/30 rounded-2xl border border-border/50 text-center hover:shadow-lg transition-all"
                >
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <exp.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">{exp.title}</h3>
                  <p className="text-muted-foreground text-sm">{exp.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose YogaGarhi - Bento Style */}
      <WhyChooseSection />

      {/* Lifetime Experiences */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-primary/40" />
              <span className="text-primary text-sm font-medium tracking-[0.2em] uppercase">Beyond Training</span>
              <div className="w-8 h-px bg-primary/40" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              A Lifetime Experience
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto mb-12">
            {lifetimeExperiences.map((exp) => (
              <span
                key={exp}
                className="px-6 py-3 bg-primary/10 text-primary rounded-full font-medium hover:bg-primary/20 transition-colors"
              >
                {exp}
              </span>
            ))}
          </div>

          {/* Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            <div className="aspect-square rounded-2xl overflow-hidden relative">
              <Image src={gallery1} alt="Experience 1" fill className="object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden relative">
              <Image src={gallery2} alt="Experience 2" fill className="object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden relative">
              <Image src={gallery4} alt="Experience 3" fill className="object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden relative">
              <Image src={gallery5} alt="Experience 4" fill className="object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" size="lg" asChild>
              <Link href="/gallery">
                View Full Gallery
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Ready to Begin Section */}
      <ReadyToBeginSection />
    </>
  );
}