"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Quote, Star, MapPin, ArrowRight } from "lucide-react";
import { useEnrollment } from "@/components/EnrollmentDialog";
import ReadyToBeginSection from "@/components/home/ReadyToBeginSection";
import StudentStoriesSection from "@/components/home/StudentStoriesSection";
import heroImage from "@/assets/hero-yoga-bali.jpg";
import Image from "next/image";

const testimonials = [
  {
    name: "Sarah Mitchell",
    country: "United States",
    course: "200 Hour YTTC",
    text: "YogaGarhi transformed my understanding of yoga completely. The teachers are exceptional, and the ashram environment allowed me to fully immerse myself in the practice. I came seeking a certification but left with a complete life transformation.",
    rating: 5,
    featured: true,
  },
  {
    name: "Marcus Weber",
    country: "Germany",
    course: "300 Hour YTTC",
    text: "The authenticity here is unmatched. Every meditation session deepened my practice. The combination of traditional teaching and modern understanding made complex concepts accessible.",
    rating: 5,
    featured: false,
  },
  {
    name: "Yuki Tanaka",
    country: "Japan",
    course: "200 Hour YTTC",
    text: "I came seeking knowledge and found a family. The personalized attention exceeded expectations. Yogacharya Sachin's teaching style is both traditional and approachable.",
    rating: 5,
    featured: false,
  },
  {
    name: "Emma Rodriguez",
    country: "Spain",
    course: "100 Hour YTTC",
    text: "Even the 100-hour program was incredibly comprehensive. I learned more in those weeks than I had in years of casual practice. The morning rituals and evening aartis created a rhythm that I still follow.",
    rating: 5,
    featured: false,
  },
  {
    name: "Michael Chen",
    country: "Canada",
    course: "200 Hour YTTC",
    text: "The philosophy classes were my favorite. Acharya Deepak has a gift for making ancient texts relevant to modern life. I've returned twice now and plan to do the advanced program.",
    rating: 5,
    featured: false,
  },
  {
    name: "Anna Petrov",
    country: "Russia",
    course: "300 Hour YTTC",
    text: "After completing my 300-hour here, I feel confident to teach advanced practices. The anatomy training with Dr. Priya was exceptional - she truly bridges science and spirituality.",
    rating: 5,
    featured: false,
  },
  {
    name: "James Wilson",
    country: "Australia",
    course: "200 Hour YTTC",
    text: "The location is magical - waking up to the Ganges and the Himalayan foothills every morning was healing in itself. Combined with excellent teaching, this was the best investment I've made.",
    rating: 5,
    featured: false,
  },
  {
    name: "Priyanka Sharma",
    country: "India",
    course: "100 Hour YTTC",
    text: "As an Indian, I had practiced yoga casually all my life. Here I discovered the depth I was missing. The traditional approach to pranayama opened new dimensions in my practice.",
    rating: 5,
    featured: false,
  },
  {
    name: "Sophie Laurent",
    country: "France",
    course: "200 Hour YTTC",
    text: "The blend of physical practice and philosophical depth was exactly what I needed. The teachers created a safe space for deep inner work. I left feeling transformed inside and out.",
    rating: 5,
    featured: false,
  },
  {
    name: "Carlos Mendez",
    country: "Mexico",
    course: "300 Hour YTTC",
    text: "After years of teaching, I came here to deepen my practice. The advanced training exceeded all expectations. The sequencing knowledge alone was worth the entire journey.",
    rating: 5,
    featured: false,
  },
  {
    name: "Lisa van der Berg",
    country: "Netherlands",
    course: "200 Hour YTTC",
    text: "I was nervous coming alone, but the community embraced me from day one. The friendships I made and the knowledge gained have shaped my entire approach to life and teaching.",
    rating: 5,
    featured: false,
  },
  {
    name: "David Kim",
    country: "South Korea",
    course: "100 Hour YTTC",
    text: "The 100-hour program was the perfect introduction. I appreciated how they made complex yogic concepts accessible without losing the traditional essence. Already planning my return for the 200-hour.",
    rating: 5,
    featured: false,
  },
  {
    name: "Elena Rossi",
    country: "Italy",
    course: "200 Hour YTTC",
    text: "The attention to alignment and anatomy was exceptional. I feel so much more confident in my body awareness now. The teachers truly care about each student's progress and well-being.",
    rating: 5,
    featured: false,
  },
];

export default function AboutTestimonials() {
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
            <span className="text-sm font-medium tracking-[0.2em] uppercase opacity-80">Hear Their Stories</span>
            <div className="w-8 h-px bg-primary-foreground/40" />
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Student Testimonials
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            Real experiences from our global community of graduates
          </p>
        </div>
      </section>

      {/* Student Stories Section */}
      <StudentStoriesSection />

      {/* Stats Section */}
      <section className="py-12 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
            <div>
              <div className="font-heading text-4xl md:text-5xl font-bold text-primary mb-2">500+</div>
              <p className="text-muted-foreground text-sm">Graduates Worldwide</p>
            </div>
            <div>
              <div className="font-heading text-4xl md:text-5xl font-bold text-primary mb-2">50+</div>
              <p className="text-muted-foreground text-sm">Countries Represented</p>
            </div>
            <div>
              <div className="font-heading text-4xl md:text-5xl font-bold text-primary mb-2">5.0</div>
              <p className="text-muted-foreground text-sm">Google Rating</p>
            </div>
            <div>
              <div className="font-heading text-4xl md:text-5xl font-bold text-primary mb-2">100%</div>
              <p className="text-muted-foreground text-sm">Recommend Us</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-muted/30 rounded-3xl p-8 md:p-12 ring-2 ring-primary/20 relative">
              <Quote className="w-16 h-16 text-primary/10 absolute top-8 left-8" />
              <div className="relative z-10">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xl md:text-2xl text-foreground/90 italic leading-relaxed mb-8">
                  "{testimonials[0].text}"
                </p>
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <h4 className="font-semibold text-lg text-foreground">{testimonials[0].name}</h4>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <MapPin className="w-4 h-4" />
                      {testimonials[0].country}
                    </div>
                  </div>
                  <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                    {testimonials[0].course}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-primary/40" />
              <span className="text-primary text-sm font-medium tracking-[0.2em] uppercase">More Stories</span>
              <div className="w-8 h-px bg-primary/40" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              From Our Global Community
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.slice(1).map((testimonial, index) => (
              <div
                key={testimonial.name}
                className={`rounded-3xl overflow-hidden transition-all hover:shadow-xl ${index === 0 ? 'ring-2 ring-primary/20' : 'border border-border/40'
                  }`}
              >
                {index === 0 && (
                  <div className="bg-primary text-primary-foreground text-center py-2 text-xs font-bold tracking-widest uppercase">
                    Popular Story
                  </div>
                )}
                <div className="bg-muted/30 p-6">
                  <Quote className="w-8 h-8 text-primary/20 mb-4" />
                  <p className="text-foreground/80 leading-relaxed mb-6 italic min-h-[100px]">
                    "{testimonial.text}"
                  </p>
                  <div className="pt-4 border-t border-border/40">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <MapPin className="w-3 h-3" />
                          {testimonial.country}
                        </div>
                      </div>
                      <div className="flex gap-0.5">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>
                    <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                      {testimonial.course}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
            >
              View all 100+ reviews on Google
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Ready to Begin Section */}
      <ReadyToBeginSection />
    </>
  );
}