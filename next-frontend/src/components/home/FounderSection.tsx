"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Award, Heart, Users, Sparkles } from "lucide-react";
import founderImage from "@/assets/founder-image.png";

const achievements = [
  { icon: Users, label: "2500+ Students Trained" },
  { icon: Award, label: "E-RYT 500 & Master in Yoga" },
  { icon: Heart, label: "18+ Years Practice" },
  { icon: Award, label: "Yoga Therapy to Indian Army" },
];

export default function FounderSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Image Column */}
            <div className="relative order-1 lg:order-1">
              {/* Decorative Ring */}
              <div className="absolute inset-0 -m-4 border-2 border-primary/20 rounded-3xl rotate-3" />
              <div className="absolute inset-0 -m-4 border-2 border-accent/20 rounded-3xl -rotate-3" />

              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={founderImage}
                  alt="Founder of YogaGarhi"
                  className="w-full h-auto object-cover"
                  priority
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-card rounded-2xl p-4 shadow-elevated border border-border/50 animate-float-ultra-smooth">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Founder & Lead Teacher</p>
                    <p className="font-heading text-lg font-semibold text-foreground">YogaGarhi</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="order-2 lg:order-2">
              <span className="inline-flex items-center gap-2 text-primary/80 text-sm font-medium tracking-widest uppercase mb-4">
                <Heart className="w-4 h-4" fill="currentColor" />
                Meet Your Guide
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
                  Through years of teaching in teacher training schools, a deeper realization emerged.
                  While yoga was being taught with technical precision, <strong className="text-foreground">its living
                    essence was often missing</strong>. From this understanding, <strong className="text-foreground">YogaGarhi</strong> was
                  founded. <em className="text-foreground font-medium">Yoga as union</em> and <em className="text-foreground font-medium">garhi
                    as a fortress</em>, created to preserve the true spirit of yoga.
                </p>

                <p>
                  Here, <strong className="text-foreground">yoga is lived, not merely taught</strong>; rooted in nature, breath,
                  awareness, and inner truth, guiding sincere seekers toward balance and authentic transformation.
                </p>
              </div>

              {/* Achievement Badges */}
              <div className="flex flex-wrap gap-4 mb-8">
                {achievements.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-secondary/50 px-4 py-2 rounded-full"
                  >
                    <item.icon className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-foreground">{item.label}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Button size="lg" className="group" asChild>
                <Link href="/about" className="flex items-center gap-2">
                  Learn More About My Journey
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
