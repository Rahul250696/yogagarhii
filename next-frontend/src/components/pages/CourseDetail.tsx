"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Check, Clock, Users, Award, MapPin, Utensils, Gift, ChevronDown, ChevronUp } from "lucide-react";
import heroImage from "@/assets/hero-yoga-bali.jpg";
import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

// What Sets Apart section images
import apartHammock from "@/assets/apart/hammock.jpg";
import apartSeatedTalk from "@/assets/apart/seated-talk.jpg";
import apartGroupPose from "@/assets/apart/group-pose.jpg";
import apartCeremony from "@/assets/apart/ceremony.jpg";
import apartGroupClass from "@/assets/apart/group-class.jpg";
import apartChildPose from "@/assets/apart/child-pose.jpg";
import apartWaterTemple from "@/assets/apart/water-temple.jpg";
import apartPoolVilla from "@/assets/apart/pool-villa.jpg";
import apartMountainPose from "@/assets/apart/mountain-pose.jpg";

const apartImages = [
  apartHammock,
  apartSeatedTalk,
  apartGroupPose,
  apartCeremony,
  apartGroupClass,
  apartChildPose,
  apartWaterTemple,
  apartPoolVilla,
  apartMountainPose,
];

import { courseData } from "@/constants/courses";

export default function CourseDetail() {
  const { slug } = useParams();
  const course = courseData[slug as keyof typeof courseData];
  const [showAllFeatures, setShowAllFeatures] = useState(false);

  if (!course) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-heading text-4xl font-bold text-foreground mb-4">Course Not Found</h1>
            <Button asChild>
              <Link href="/">Return Home</Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  const visibleFeatures = showAllFeatures ? course.features : course.features.slice(0, 6);

  return (
    <Layout>
      {/* Hero Section - Split Layout */}
      <section className="relative min-h-[600px] flex flex-col lg:flex-row">
        {/* Left Side - Image */}
        <div className="lg:w-[60%] relative min-h-[400px] lg:min-h-[600px]">
          <Image
            src={heroImage}
            alt={`${course.title} ${course.subtitle}`}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right Side - Course Info Card */}
        <div className="lg:w-[40%] bg-primary p-8 lg:p-12 flex flex-col justify-center">
          <div className="text-primary-foreground">
            <h1 className="font-heading text-3xl lg:text-4xl font-bold mb-2">
              {course.title}
            </h1>
            <h2 className="font-heading text-2xl lg:text-3xl font-bold mb-8">
              {course.subtitle}
            </h2>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 mt-1 text-accent flex-shrink-0" />
                <span className="text-sm lg:text-base">{course.certification}</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 text-accent flex-shrink-0" />
                <span className="text-sm lg:text-base">{course.duration} {course.location}</span>
              </div>
              <div className="flex items-start gap-3">
                <Utensils className="w-5 h-5 mt-1 text-accent flex-shrink-0" />
                <span className="text-sm lg:text-base">{course.meals}</span>
              </div>
              <div className="flex items-start gap-3">
                <Gift className="w-5 h-5 mt-1 text-accent flex-shrink-0" />
                <span className="text-sm lg:text-base">{course.bonus}</span>
              </div>
            </div>

            {/* Price Section */}
            <div className="border-t border-primary-foreground/20 pt-6 mb-6">
              <p className="text-lg mb-2">Course Fee:</p>
              <div className="bg-card rounded-lg p-4 text-center">
                <span className="text-muted-foreground line-through text-xl mr-3">USD {course.originalPrice.replace('$', '')}</span>
                <span className="text-foreground font-bold text-3xl">USD {course.price.replace('$', '')}</span>
              </div>
            </div>

            <Button variant="cta" size="xl" className="w-full" asChild>
              <Link href="/contact">START YOUR JOURNEY</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="font-heading text-3xl lg:text-5xl font-bold text-foreground mb-8">
            {course.welcomeTitle}
          </h2>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            {course.welcomeText}
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {course.welcomeText2}
          </p>
        </div>
      </section>

      {/* What You Will Receive Section */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground text-center mb-12">
            What You Will Receive in Our {course.title} {course.subtitle}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {visibleFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow-card hover:shadow-elevated transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Check className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {course.features.length > 6 && (
            <div className="text-center mt-8">
              <Button
                variant="outline"
                onClick={() => setShowAllFeatures(!showAllFeatures)}
                className="gap-2"
              >
                {showAllFeatures ? (
                  <>View Less <ChevronUp className="w-4 h-4" /></>
                ) : (
                  <>View More <ChevronDown className="w-4 h-4" /></>
                )}
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* What Sets YogaGarhi Apart */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground text-center mb-4">
            What Sets YogaGarhi Apart
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Discover the unique elements that make our training program truly transformative
          </p>

          <div className="max-w-6xl mx-auto space-y-12 lg:space-y-16">
            {course.whatSetsApart.map((item, index) => {
              const isReversed = index % 2 === 1;
              const imageIndex = index % apartImages.length;

              return (
                <div
                  key={index}
                  className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 items-center`}
                >
                  {/* Image with rotating chakra ring */}
                  <div className="lg:w-1/2 relative">
                    <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
                      {/* Rotating chakra ring */}
                      <svg
                        className="absolute inset-0 w-full h-full animate-spin"
                        style={{ animationDuration: '30s' }}
                        viewBox="0 0 200 200"
                      >
                        <circle
                          cx="100" cy="100" r="96"
                          fill="none"
                          stroke="hsl(var(--primary))"
                          strokeWidth="1"
                          strokeDasharray="8 4"
                          opacity="0.3"
                        />
                        <circle
                          cx="100" cy="100" r="88"
                          fill="none"
                          stroke="hsl(var(--accent))"
                          strokeWidth="1.5"
                          strokeDasharray="12 6"
                          opacity="0.4"
                        />
                      </svg>

                      {/* Circular image */}
                      <div className="absolute inset-4 rounded-full overflow-hidden shadow-elevated">
                        <Image
                          src={apartImages[imageIndex]}
                          alt={item.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:w-1/2 text-center lg:text-left">
                    <div className="inline-flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                        <span className="text-primary-foreground font-bold">{index + 1}</span>
                      </div>
                      <h3 className="font-heading text-2xl font-semibold text-foreground">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Course Syllabus */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-primary-foreground text-center mb-12">
            Course Syllabus for {course.title} Teacher Training
          </h2>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {course.curriculum.map((section, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-primary-foreground/10 rounded-xl border-none overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-4 text-primary-foreground hover:no-underline hover:bg-primary-foreground/5">
                    <span className="font-heading text-lg font-semibold text-left">
                      {section.title}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <ul className="space-y-2">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3 text-primary-foreground/90">
                          <Check className="w-4 h-4 mt-1 text-accent flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Daily Schedule */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground text-center mb-4">
            Daily Schedule
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            A typical day at YogaGarhi is designed to balance intensive learning with rest and integration.
          </p>

          <div className="max-w-2xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-[100px] md:left-[120px] top-0 bottom-0 w-0.5 bg-primary/20" />

              {course.dailySchedule.map((item, index) => (
                <div key={index} className="flex items-center gap-4 md:gap-6 mb-6 relative">
                  <div className="w-[80px] md:w-[100px] text-right">
                    <span className="font-semibold text-primary text-sm md:text-base">{item.time}</span>
                  </div>
                  <div className="w-4 h-4 bg-primary rounded-full z-10 flex-shrink-0" />
                  <div className="flex-1 bg-card p-4 rounded-lg shadow-soft">
                    <span className="text-foreground">{item.activity}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground text-center mb-12">
            What's Included
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {course.includes.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-card p-4 rounded-lg shadow-soft"
              >
                <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-accent" />
                </div>
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent-gradient">
        <div className="container mx-auto px-4 text-center text-accent-foreground">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Life?
          </h2>
          <p className="text-xl mb-4">
            Limited to 8-10 students per batch for personalized attention
          </p>
          <div className="bg-card/20 backdrop-blur-sm rounded-xl p-6 max-w-md mx-auto mb-8">
            <span className="text-2xl line-through opacity-70 mr-3">USD {course.originalPrice.replace('$', '')}</span>
            <span className="font-heading text-4xl font-bold">USD {course.price.replace('$', '')}</span>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl" asChild>
              <Link href="/contact">Enroll Now</Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="https://wa.me/+917895350563" target="_blank" rel="noopener noreferrer">
                Ask Questions on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
