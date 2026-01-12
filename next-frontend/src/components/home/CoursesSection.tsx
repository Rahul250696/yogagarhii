"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Award } from "lucide-react";
import { useContactDialog } from "@/components/ContactDialog";
import course100hr from "@/assets/course-100hr-new.jpg";
import course200hr from "@/assets/course-200hr-new.jpg";
import course300hr from "@/assets/course-300hr-v2.jpg";

const courses = [
  {
    hours: "100",
    title: "Hour YTTC",
    tagline: "Begin Your Journey",
    duration: "12 Days",
    level: "Beginner",
    price: "$1149",
    originalPrice: "$1399",
    savings: "$250",
    href: "/courses/100-hour",
    image: course100hr,
  },
  {
    hours: "200",
    title: "Hour YTTC",
    tagline: "Transform Yourself",
    duration: "24 Days",
    level: "Beginner to Intermediate",
    price: "$1750",
    originalPrice: "$2187",
    savings: "$437",
    href: "/courses/200-hour",
    image: course200hr,
    featured: true,
  },
  {
    hours: "300",
    title: "Hour YTTC",
    tagline: "Master Your Practice",
    duration: "28 Days",
    level: "Intermediate to Advanced",
    price: "$2399",
    originalPrice: "$2999",
    savings: "$600",
    href: "/courses/300-hour",
    image: course300hr,
  },
];

export default function CoursesSection() {
  const { setShowContactDialog } = useContactDialog();

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-primary/40" />
            <span className="text-primary text-sm font-medium tracking-[0.2em] uppercase">Our Programs</span>
            <div className="w-12 h-px bg-primary/40" />
          </div>

          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Yoga Teacher Training
          </h2>
          <p className="font-heading text-2xl md:text-3xl text-primary">
            Courses in Bali, Ubud
          </p>
        </div>

        {/* Cards Container */}
        <div className="relative">
          <div className="flex flex-col gap-6 md:grid md:grid-cols-3">
            {courses.map((course, index) => (
              <div
                key={course.hours}
                className="w-full group"
              >
                {/* Card */}
                <div className={`relative h-full rounded-3xl overflow-hidden ${course.featured
                  ? 'ring-2 ring-primary/30'
                  : 'border border-border/40'
                  }`}>
                  {/* Featured Label */}
                  {course.featured && (
                    <div className="absolute top-0 left-0 right-0 z-20 bg-primary text-primary-foreground text-center py-2 text-xs font-bold tracking-widest uppercase">
                      Most Popular Choice
                    </div>
                  )}

                  {/* Image Section */}
                  <div className={`relative h-56 md:h-64 overflow-hidden ${course.featured ? 'mt-8' : ''}`}>
                    <Image
                      src={course.image}
                      alt={`${course.hours} Hour Yoga Teacher Training`}
                      fill
                      className={`object-cover transition-transform duration-700 group-hover:scale-105 ${course.hours === "200" ? "object-top" : ""
                        }`}
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />

                    {/* Hours Badge */}
                    <div className="absolute bottom-4 left-6 right-6">
                      <p className="text-white/70 text-xs uppercase tracking-[0.15em] mb-1">{course.tagline}</p>
                      <h3 className="font-heading text-5xl font-bold text-white">
                        {course.hours}
                        <span className="text-lg font-normal ml-2 text-white/80">{course.title}</span>
                      </h3>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="bg-muted/30 p-6">
                    {/* Quick Info */}
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-5 pb-5 border-b border-border/40">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-primary" />
                        {course.duration}
                      </div>
                      <div className="w-px h-4 bg-border" />
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-primary" />
                        {course.level}
                      </div>
                    </div>

                    {/* Pricing */}
                    <div className="flex items-end justify-between mb-6">
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Starting from</p>
                        <div className="flex items-baseline gap-2">
                          <span className="font-heading text-3xl font-bold text-foreground">{course.price}</span>
                          <span className="text-sm text-muted-foreground line-through">{course.originalPrice}</span>
                        </div>
                      </div>
                      <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1.5 rounded-full">
                        Save {course.savings}
                      </span>
                    </div>

                    {/* CTA */}
                    <Button
                      size="lg"
                      className={`w-full group/btn ${course.featured
                        ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                        : 'bg-foreground/5 text-foreground hover:bg-foreground/10 border border-foreground/10'
                        }`}
                      asChild
                    >
                      <Link href={course.href} className="flex items-center justify-center gap-2">
                        Explore Course
                        <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <p className="text-muted-foreground mb-3">Need help choosing the right program?</p>
          <Button
            variant="link"
            className="text-primary p-0 h-auto font-medium group"
            onClick={() => setShowContactDialog(true)}
          >
            <span className="flex items-center gap-2">
              Get Personalized Guidance
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
}
