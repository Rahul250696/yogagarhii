"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Quote, Star, MapPin, ArrowRight } from "lucide-react";
import { useEnrollment } from "@/components/EnrollmentDialog";
import ReadyToBeginSection from "@/components/home/ReadyToBeginSection";
import StudentStoriesSection from "@/components/home/StudentStoriesSection";
import heroImage from "@/assets/hero-yoga-bali.jpg";
import Image from "next/image";
import { googleReviews } from "@/constants/googleReviews";

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
                  "{googleReviews[0].text}"
                </p>
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <h4 className="font-semibold text-lg text-foreground">{googleReviews[0].name}</h4>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <MapPin className="w-4 h-4" />
                      {googleReviews[0].location}
                    </div>
                  </div>
                  <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                    Google Review
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
            {googleReviews.slice(1).map((review, index) => (
              <div
                key={review.name}
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
                    "{review.text}"
                  </p>
                  <div className="pt-4 border-t border-border/40">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h4 className="font-semibold text-foreground">{review.name}</h4>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <MapPin className="w-3 h-3" />
                          {review.location}
                        </div>
                      </div>
                      <div className="flex gap-0.5">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>
                    <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                      {review.date}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://www.google.com/maps/place/Yoga+Teacher+Training+in+Bali+-+Yogagarhi/@-8.4645426,115.3278308,18z/data=!4m6!3m5!1s0x2dd219e70aa3e43d:0x281930517f104591!8m2!3d-8.4649127!4d115.3258379!16s%2Fg%2F11xywjhmnz?entry=ttu&g_ep=EgoyMDI2MDExMS4wIKXMDSoASAFQAw%3D%3D"
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