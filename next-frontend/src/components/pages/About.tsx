"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Users, Quote, Star, Clock, Award, Heart, Sparkles } from "lucide-react";
import { useEnrollment } from "@/components/EnrollmentDialog";
import heroImage from "@/assets/hero-yoga-bali.jpg";
import founderImage from "@/assets/founder-image.png";
import gallery1 from "@/assets/gallery/gallery-1.jpg";
import gallery2 from "@/assets/gallery/gallery-2.jpg";
import gallery3 from "@/assets/gallery/gallery-3.jpg";
import { googleReviews } from "@/constants/googleReviews";

const sections = [
  {
    id: "ashram",
    title: "About",
    subtitle: "Ashram",
    tagline: "Our Sacred Space",
    image: gallery1,
    featured: false,
  },
  {
    id: "teachers",
    title: "Our",
    subtitle: "Teachers",
    tagline: "Learn from Masters",
    image: founderImage,
    featured: true,
  },
  {
    id: "testimonials",
    title: "Student",
    subtitle: "Stories",
    tagline: "Hear Their Journey",
    image: gallery3,
    featured: false,
  },
];

const ashramFeatures = [
  { icon: MapPin, title: "Sacred Location", desc: "Nestled in Rishikesh, by the Ganges" },
  { icon: Heart, title: "Authentic Living", desc: "Traditional ashram lifestyle" },
  { icon: Sparkles, title: "Peaceful Environment", desc: "Perfect for deep practice" },
];

const teachers = [
  {
    name: "Yogacharya Sachin",
    role: "Founder & Lead Teacher",
    image: founderImage,
    credentials: "E-RYT 500",
    experience: "18+ Years",
  },
  {
    name: "Dr. Priya Sharma",
    role: "Anatomy Expert",
    image: gallery1,
    credentials: "PhD Yoga Science",
    experience: "12+ Years",
  },
  {
    name: "Acharya Deepak",
    role: "Philosophy Teacher",
    image: gallery2,
    credentials: "Vedic Scholar",
    experience: "15+ Years",
  },
];


export default function About() {
  const { setShowEnrollDialog } = useEnrollment();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-72 md:h-80 flex items-center justify-center overflow-hidden">
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
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            About YogaGarhi
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            Ancient Himalayan wisdom. Authentic yoga, lived & taught.
          </p>
        </div>
      </section>

      {/* 3 Section Cards - Course Style Pattern */}
      <section className="py-24 bg-background relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-primary/40" />
              <span className="text-primary text-sm font-medium tracking-[0.2em] uppercase">Discover</span>
              <div className="w-12 h-px bg-primary/40" />
            </div>

            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Know Us Better
            </h2>
            <p className="font-heading text-2xl md:text-3xl text-primary">
              Explore Our Story
            </p>
          </div>

          {/* Cards Container */}
          <div className="relative">
            <div className="flex flex-col gap-6 md:grid md:grid-cols-3">
              {sections.map((section) => (
                <div
                  key={section.id}
                  className="w-full group cursor-pointer"
                  onClick={() => scrollToSection(section.id)}
                >
                  {/* Card */}
                  <div className={`relative h-full rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-xl ${section.featured
                    ? 'ring-2 ring-primary/30'
                    : 'border border-border/40'
                    }`}>
                    {/* Featured Label */}
                    {section.featured && (
                      <div className="absolute top-0 left-0 right-0 z-20 bg-primary text-primary-foreground text-center py-2 text-xs font-bold tracking-widest uppercase">
                        Meet Our Masters
                      </div>
                    )}

                    {/* Image Section */}
                    <div className={`relative h-56 md:h-64 overflow-hidden ${section.featured ? 'mt-8' : ''}`}>
                      <Image
                        src={section.image}
                        alt={section.subtitle}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />

                      {/* Title Badge */}
                      <div className="absolute bottom-4 left-6 right-6">
                        <p className="text-white/70 text-xs uppercase tracking-[0.15em] mb-1">{section.tagline}</p>
                        <h3 className="font-heading text-4xl md:text-5xl font-bold text-white">
                          {section.title}
                          <span className="text-lg font-normal ml-2 text-white/80">{section.subtitle}</span>
                        </h3>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="bg-muted/30 p-6">
                      {/* Description */}
                      <p className="text-muted-foreground text-sm mb-5 pb-5 border-b border-border/40">
                        {section.id === 'ashram' && "Discover our sacred space in Rishikesh, where ancient traditions meet modern comfort."}
                        {section.id === 'teachers' && "Learn from dedicated practitioners with decades of experience in authentic yoga."}
                        {section.id === 'testimonials' && "Hear transformative stories from our global community of graduates."}
                      </p>

                      {/* CTA */}
                      <Button
                        size="lg"
                        className={`w-full group/btn ${section.featured
                          ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                          : 'bg-foreground/5 text-foreground hover:bg-foreground/10 border border-foreground/10'
                          }`}
                      >
                        <span className="flex items-center justify-center gap-2">
                          Explore {section.subtitle}
                          <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                        </span>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Ashram Section */}
      <section id="ashram" className="py-20 bg-secondary/20 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-primary/40" />
              <span className="text-primary text-sm font-medium tracking-[0.2em] uppercase">Our Sacred Space</span>
              <div className="w-8 h-px bg-primary/40" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              About the Ashram
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Images */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-48 rounded-2xl overflow-hidden relative">
                  <Image src={gallery1} alt="Ashram" fill className="object-cover" />
                </div>
                <div className="h-32 rounded-2xl overflow-hidden relative">
                  <Image src={gallery2} alt="Practice" fill className="object-cover" />
                </div>
              </div>
              <div className="pt-8">
                <div className="h-64 rounded-2xl overflow-hidden relative">
                  <Image src={gallery3} alt="Environment" fill className="object-cover" />
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Welcome to <span className="text-primary font-semibold">YogaGarhi</span>, a sanctuary for self-discovery nestled in the spiritual heart of Rishikesh. Here, yoga is not just practiced but lived.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our ashram blends the depth of classical yogic traditions with the comforts needed for focused learning, creating the perfect environment for transformation. Every session is designed to inspire peace, strength, and harmony.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {ashramFeatures.map((feature) => (
                  <div key={feature.title} className="p-4 bg-background rounded-xl border border-border/50">
                    <feature.icon className="w-6 h-6 text-primary mb-2" />
                    <h4 className="font-semibold text-foreground text-sm">{feature.title}</h4>
                    <p className="text-xs text-muted-foreground">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teachers Section */}
      <section id="teachers" className="py-20 bg-background scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-primary/40" />
              <span className="text-primary text-sm font-medium tracking-[0.2em] uppercase">Learn from the Best</span>
              <div className="w-8 h-px bg-primary/40" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Our Teachers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {teachers.map((teacher, index) => (
              <div
                key={teacher.name}
                className={`group rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-xl ${index === 0 ? 'ring-2 ring-primary/30' : 'border border-border/40'
                  }`}
              >
                {index === 0 && (
                  <div className="bg-primary text-primary-foreground text-center py-2 text-xs font-bold tracking-widest uppercase">
                    Founder
                  </div>
                )}
                <div className={`relative h-56 md:h-64 overflow-hidden ${index === 0 ? '' : ''}`}>
                  <Image
                    src={teacher.image}
                    alt={teacher.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />
                  <div className="absolute bottom-4 left-6 right-6 text-white">
                    <p className="text-white/70 text-xs uppercase tracking-wider mb-1">{teacher.role}</p>
                    <h3 className="font-heading text-2xl font-bold">{teacher.name}</h3>
                  </div>
                </div>
                <div className="bg-muted/30 p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-primary" />
                      {teacher.credentials}
                    </div>
                    <div className="w-px h-4 bg-border" />
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary" />
                      {teacher.experience}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild className="rounded-full">
              <Link href="/teachers" className="flex items-center gap-2">
                View All Teachers
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-secondary/20 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-primary/40" />
              <span className="text-primary text-sm font-medium tracking-[0.2em] uppercase">Student Stories</span>
              <div className="w-8 h-px bg-primary/40" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Testimonials
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {googleReviews.slice(0, 3).map((review, index) => (
              <div
                key={review.name}
                className={`group rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-xl ${index === 1 ? 'ring-2 ring-primary/30' : 'border border-border/40'
                  }`}
              >
                {index === 1 && (
                  <div className="bg-primary text-primary-foreground text-center py-2 text-xs font-bold tracking-widest uppercase">
                    Featured Story
                  </div>
                )}
                <div className="bg-muted/30 p-6">
                  <Quote className="w-8 h-8 text-primary/20 mb-4" />
                  <p className="text-foreground/80 leading-relaxed mb-6 italic min-h-[80px]">
                    "{review.text}"
                  </p>
                  <div className="pt-4 border-t border-border/40">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-foreground">{review.name}</h4>
                        <p className="text-sm text-muted-foreground">{review.location}</p>
                      </div>
                      <div className="flex gap-0.5">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 mb-8">
            <Button variant="outline" size="lg" asChild className="rounded-full">
              <Link href="/testimonials" className="flex items-center gap-2">
                Read More Stories
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="text-center mt-10">
            <a
              href="https://www.google.com/maps/place/Yoga+Teacher+Training+in+Bali+-+Yogagarhi/@-8.4645426,115.3278308,18z/data=!4m6!3m5!1s0x2dd219e70aa3e43d:0x281930517f104591!8m2!3d-8.4649127!4d115.3258379!16s%2Fg%2F11xywjhmnz?entry=ttu&g_ep=EgoyMDI2MDExMS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
            >
              View all reviews on Google
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary">
        <div className="container mx-auto px-4 text-center text-primary-foreground">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Join our yoga teacher training program and transform not just your practice, but your entire life.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link href="/contact">Start Your Journey</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
