"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Google Reviews Data
const reviews = [
  {
    name: "Sarah Mitchell",
    location: "United States",
    avatar: "SM",
    rating: 5,
    date: "3 weeks ago",
    text: "This training completely changed my life. The teachers are incredibly knowledgeable and the Prakriti-based approach helped me understand my own body in ways I never had before. The location in Bali added such a spiritual dimension to the experience. I came as a student and left as a transformed human being.",
  },
  {
    name: "Emma Thompson",
    location: "United Kingdom",
    avatar: "ET",
    rating: 5,
    date: "1 month ago",
    text: "I've done multiple yoga teacher trainings, but YogaGarhi is on another level. The depth of philosophy, the attention to each student, and the authentic teaching methodology sets them apart. The multi-style approach gave me confidence to teach different types of students.",
  },
  {
    name: "Marco Rossi",
    location: "Italy",
    avatar: "MR",
    rating: 5,
    date: "2 months ago",
    text: "Bellissimo! The food, the accommodation, the teachings - everything was perfect. I especially loved how they integrated Ayurveda with yoga. The small batch size meant I got personal attention from the teachers. Highly recommend!",
  },
  {
    name: "Yuki Tanaka",
    location: "Japan",
    avatar: "YT",
    rating: 5,
    date: "1 month ago",
    text: "The peaceful environment and the structured daily routine helped me go deep into my practice. The teachers are not just instructors but true yogis who live what they teach. The excursions to temples and rice fields were magical.",
  },
  {
    name: "Anna Kowalski",
    location: "Poland",
    avatar: "AK",
    rating: 5,
    date: "3 weeks ago",
    text: "I was nervous about doing a 200-hour training but the supportive community made everything so easy. The curriculum covers everything from asana to philosophy to teaching methodology. Now I feel ready to share yoga with the world.",
  },
  {
    name: "Carlos Rodriguez",
    location: "Spain",
    avatar: "CR",
    rating: 5,
    date: "2 months ago",
    text: "An unforgettable experience. The morning pranayama sessions with sunrise views, the authentic sattvic meals, and the deep philosophical discussions transformed not just my practice but my entire outlook on life. Gracias YogaGarhi!",
  },
];

// Review Card Component
function ReviewCard({ review }: { review: typeof reviews[0] }) {
  const [expanded, setExpanded] = useState(false);
  const isLongText = review.text.length > 150;
  const displayText = expanded || !isLongText ? review.text : review.text.slice(0, 150) + "...";

  return (
    <div className="bg-card rounded-xl border border-border p-4 transition-all duration-300 hover:shadow-lg hover:border-primary/20">
      {/* Header Row */}
      <div className="flex items-center gap-3 mb-3">
        {/* Avatar */}
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center flex-shrink-0">
          <span className="text-xs font-bold text-primary-foreground">{review.avatar}</span>
        </div>

        {/* Name & Location */}
        <div className="flex-1 min-w-0">
          <h4 className="font-medium text-foreground text-sm leading-tight">{review.name}</h4>
          <p className="text-xs text-muted-foreground">{review.location}</p>
        </div>

        {/* Google Icon */}
        <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
        </svg>
      </div>

      {/* Rating & Date */}
      <div className="flex items-center gap-2 mb-2">
        <div className="flex gap-0.5">
          {Array.from({ length: review.rating }).map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          ))}
        </div>
        <span className="text-xs text-muted-foreground">{review.date}</span>
      </div>

      {/* Review Text */}
      <p className="text-sm text-muted-foreground leading-relaxed">
        {displayText}
      </p>
      {isLongText && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-xs text-primary hover:text-primary/80 font-medium mt-2 transition-colors"
        >
          {expanded ? "Read less" : "Read more"}
        </button>
      )}
    </div>
  );
}

export default function GoogleReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const viewportRef = useRef<HTMLDivElement | null>(null);

  const scrollToIndex = useCallback((index: number) => {
    const el = viewportRef.current;
    if (!el) return;

    const width = el.clientWidth;
    el.scrollTo({ left: index * width, behavior: "smooth" });
    setCurrentIndex(index);
  }, []);

  const nextSlide = useCallback(() => {
    scrollToIndex((currentIndex + 1) % reviews.length);
  }, [currentIndex, scrollToIndex]);

  const prevSlide = useCallback(() => {
    scrollToIndex((currentIndex - 1 + reviews.length) % reviews.length);
  }, [currentIndex, scrollToIndex]);

  useEffect(() => {
    // Ensure we start aligned to the first card on initial render
    scrollToIndex(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-background via-secondary/5 to-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          {/* Google Reviews Badge */}
          <div className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2 shadow-md mb-6">
            <svg className="w-6 h-6" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            <span className="text-xl font-bold text-foreground">5.0</span>
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-muted-foreground text-xs border-l border-border pl-2">100+ Reviews</span>
          </div>

          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
            What Our Students Say
          </h2>
          <p className="text-muted-foreground text-base max-w-xl mx-auto">
            Real experiences from our yoga teacher training graduates
          </p>
        </div>

        {/* Reviews Grid - Desktop */}
        <div className="hidden md:grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>

        {/* Reviews Carousel - Mobile */}
        <div className="md:hidden relative">
          <div
            ref={viewportRef}
            className="overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide"
            onScroll={(e) => {
              const el = e.currentTarget;
              const width = el.clientWidth || 1;
              const idx = Math.round(el.scrollLeft / width);
              if (idx !== currentIndex) setCurrentIndex(idx);
            }}
          >
            <div className="flex">
              {reviews.map((review, index) => (
                <div key={index} className="w-full flex-shrink-0 px-1 snap-start">
                  <ReviewCard review={review} />
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="flex items-center justify-center gap-3 mt-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full w-8 h-8"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            {/* Dots */}
            <div className="flex gap-1.5">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToIndex(index)}
                  aria-label={`Go to review ${index + 1}`}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex
                      ? "bg-primary w-5"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full w-8 h-8"
              aria-label="Next review"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* View All CTA */}
        <div className="text-center mt-8">
          <a
            href="https://maps.app.goo.gl/qE7ouyMxUyLsRhNk6"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-white border-2 border-gray-200 hover:border-blue-500 rounded-full px-6 py-3 shadow-md hover:shadow-lg transition-all duration-300"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            <span className="font-semibold text-gray-700 group-hover:text-blue-600 transition-colors">
              View all reviews on Google
            </span>
            <span className="text-blue-500 group-hover:translate-x-1 transition-transform text-lg">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
