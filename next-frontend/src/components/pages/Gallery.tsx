"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import ReadyToBeginSection from "@/components/home/ReadyToBeginSection";
import { useEnrollment } from "@/components/EnrollmentDialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";

// Import gallery images
import yogaRiver from "@/assets/gallery/yoga-river.jpg";
import anatomyClass from "@/assets/gallery/anatomy-class.jpg";
import outdoorSession from "@/assets/gallery/outdoor-session.jpg";
import acroYoga from "@/assets/gallery/acro-yoga.jpg";
import groupStudy from "@/assets/gallery/group-study.jpg";
import adjustment from "@/assets/gallery/adjustment.jpg";
import backbend from "@/assets/gallery/backbend.jpg";
import seatedTwist from "@/assets/gallery/seated-twist.jpg";
import communityMeal from "@/assets/gallery/community-meal.jpg";
import teachingPractice from "@/assets/gallery/teaching-practice.jpg";
import savasana from "@/assets/gallery/savasana.jpg";
import seatedMeditation from "@/assets/gallery/seated-meditation.jpg";
import partnerAssist from "@/assets/gallery/partner-assist.jpg";
import groupClass from "@/assets/gallery/group-class.jpg";

const galleryImages = [
  { src: yogaRiver, alt: "Yoga by the river" },
  { src: anatomyClass, alt: "Anatomy class" },
  { src: outdoorSession, alt: "Outdoor session" },
  { src: acroYoga, alt: "Acro yoga practice" },
  { src: groupStudy, alt: "Group study" },
  { src: adjustment, alt: "Hands-on adjustment" },
  { src: backbend, alt: "Backbend practice" },
  { src: seatedTwist, alt: "Seated twist" },
  { src: communityMeal, alt: "Community meal" },
  { src: teachingPractice, alt: "Teaching practice" },
  { src: savasana, alt: "Savasana relaxation" },
  { src: seatedMeditation, alt: "Seated meditation" },
  { src: partnerAssist, alt: "Partner assistance" },
  { src: groupClass, alt: "Group yoga class" },
];

// Large decorative Mandala SVG component
const MandalaBackground = () => (
  <svg
    className="w-full h-full opacity-20"
    viewBox="0 0 400 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Outer circle rings */}
    <circle cx="200" cy="200" r="190" stroke="currentColor" strokeWidth="1.5" className="text-primary" />
    <circle cx="200" cy="200" r="170" stroke="currentColor" strokeWidth="1" className="text-primary" />
    <circle cx="200" cy="200" r="150" stroke="currentColor" strokeWidth="1.5" className="text-primary" />
    <circle cx="200" cy="200" r="130" stroke="currentColor" strokeWidth="1" className="text-primary" />
    <circle cx="200" cy="200" r="110" stroke="currentColor" strokeWidth="1.5" className="text-primary" />
    <circle cx="200" cy="200" r="90" stroke="currentColor" strokeWidth="1" className="text-primary" />
    <circle cx="200" cy="200" r="70" stroke="currentColor" strokeWidth="1.5" className="text-primary" />
    <circle cx="200" cy="200" r="50" stroke="currentColor" strokeWidth="1" className="text-primary" />
    <circle cx="200" cy="200" r="30" stroke="currentColor" strokeWidth="1.5" className="text-primary" />

    {/* Lotus petals - outer layer */}
    {[...Array(12)].map((_, i) => (
      <ellipse
        key={`outer-petal-${i}`}
        cx="200"
        cy="40"
        rx="20"
        ry="50"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        className="text-primary"
        transform={`rotate(${i * 30} 200 200)`}
      />
    ))}

    {/* Lotus petals - middle layer */}
    {[...Array(12)].map((_, i) => (
      <ellipse
        key={`middle-petal-${i}`}
        cx="200"
        cy="70"
        rx="15"
        ry="40"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        className="text-primary"
        transform={`rotate(${i * 30 + 15} 200 200)`}
      />
    ))}

    {/* Lotus petals - inner layer */}
    {[...Array(8)].map((_, i) => (
      <ellipse
        key={`inner-petal-${i}`}
        cx="200"
        cy="120"
        rx="12"
        ry="30"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        className="text-primary"
        transform={`rotate(${i * 45} 200 200)`}
      />
    ))}

    {/* Diamond shapes */}
    {[...Array(8)].map((_, i) => (
      <path
        key={`diamond-${i}`}
        d="M200 60 L210 80 L200 100 L190 80 Z"
        stroke="currentColor"
        strokeWidth="0.5"
        fill="none"
        className="text-primary"
        transform={`rotate(${i * 45} 200 200)`}
      />
    ))}

    {/* Inner star pattern */}
    <path
      d="M200 150 L210 180 L240 180 L215 200 L225 230 L200 210 L175 230 L185 200 L160 180 L190 180 Z"
      stroke="currentColor"
      strokeWidth="1"
      fill="none"
      className="text-primary"
    />

    {/* Radiating lines */}
    {[...Array(24)].map((_, i) => (
      <line
        key={`line-${i}`}
        x1="200"
        y1="110"
        x2="200"
        y2="90"
        stroke="currentColor"
        strokeWidth="0.5"
        className="text-primary"
        transform={`rotate(${i * 15} 200 200)`}
      />
    ))}

    {/* Decorative dots on outer ring */}
    {[...Array(36)].map((_, i) => (
      <circle
        key={`dot-${i}`}
        cx="200"
        cy="20"
        r="3"
        fill="currentColor"
        className="text-primary"
        transform={`rotate(${i * 10} 200 200)`}
      />
    ))}

    {/* Sacred geometry triangles */}
    <path
      d="M200 80 L260 180 L140 180 Z"
      stroke="currentColor"
      strokeWidth="0.5"
      fill="none"
      className="text-primary"
    />
    <path
      d="M200 280 L260 180 L140 180 Z"
      stroke="currentColor"
      strokeWidth="0.5"
      fill="none"
      className="text-primary"
    />
  </svg>
);

import HomeVideoGallerySection from "@/components/home/HomeVideoGallerySection";

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { setShowEnrollDialog } = useEnrollment();

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <div className="pt-20"> {/* Add padding top for fixed header if needed, but standard Layout handles mainly. Here just wrapping content */}
        {/* Mandala Gallery Section */}
        <section className="py-16 md:py-24 bg-background relative overflow-hidden min-h-screen">
          {/* Header */}
          <div className="container mx-auto px-4 text-center mb-12">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Our Gallery
            </h1>
            <p className="text-xl text-muted-foreground">
              Glimpses of life at YogaGarhi
            </p>
          </div>

          {/* Central Mandala with Rotating Images */}
          <div className="container mx-auto px-4">
            <div className="relative flex items-center justify-center">
              {/* The rotating mandala container */}
              <div className="relative w-[320px] h-[320px] sm:w-[500px] sm:h-[500px] md:w-[700px] md:h-[700px] lg:w-[900px] lg:h-[900px]">
                {/* Background mandala - rotating slowly */}
                <div className="absolute inset-0 animate-spin-slow">
                  <MandalaBackground />
                </div>

                {/* Images arranged in a circle - rotating around center */}
                <div className="absolute inset-0 animate-spin-slow" style={{ animationDirection: 'reverse' }}>
                  {galleryImages.map((image, index) => {
                    const angle = (index * (360 / galleryImages.length)) - 90; // Evenly spaced, start from top
                    const radius = 42; // percentage from center
                    const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
                    const y = 50 + radius * Math.sin((angle * Math.PI) / 180);

                    return (
                      <div
                        key={index}
                        className="absolute w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 -translate-x-1/2 -translate-y-1/2"
                        style={{
                          left: `${x}%`,
                          top: `${y}%`,
                        }}
                      >
                        {/* Counter-rotate to keep images upright */}
                        <div className="w-full h-full animate-spin-slow">
                          <div className="w-full h-full rounded-full overflow-hidden border-4 border-primary/30 shadow-lg hover:border-primary hover:scale-110 transition-all duration-300 group relative">
                            <Image
                              src={image.src}
                              alt={image.alt}
                              fill
                              className="object-cover"
                            />
                            {/* Hover overlay */}
                            <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-full z-10">
                              <span className="text-primary-foreground text-xs md:text-sm font-medium text-center px-2">
                                {image.alt}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Center static photo carousel */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="relative">
                    {/* Main circular image */}
                    <div className="w-44 h-44 sm:w-60 sm:h-60 md:w-80 md:h-80 lg:w-[420px] lg:h-[420px] rounded-full overflow-hidden border-4 border-primary/40 shadow-2xl relative">
                      <Image
                        src={galleryImages[currentIndex].src}
                        alt={galleryImages[currentIndex].alt}
                        fill
                        className="object-cover transition-opacity duration-500"
                      />
                    </div>

                    {/* Navigation buttons */}
                    <button
                      onClick={goToPrevious}
                      className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-background/90 border border-primary/30 shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                    </button>

                    <button
                      onClick={goToNext}
                      className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-background/90 border border-primary/30 shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                    </button>

                    {/* Image label */}
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                      <span className="text-sm md:text-base font-medium text-foreground/80 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full border border-primary/20">
                        {galleryImages[currentIndex].alt}
                      </span>
                    </div>

                    {/* Pagination dots */}
                    <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
                      {galleryImages.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentIndex(index)}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex
                            ? 'bg-primary w-4'
                            : 'bg-primary/30 hover:bg-primary/50'
                            }`}
                          aria-label={`Go to image ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Description below */}
            <div className="text-center mt-20 md:mt-24">
              <p className="font-heading text-xl md:text-2xl text-foreground/80 leading-relaxed mb-4">
                Where practice meets purpose.
              </p>
              <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto mb-8">
                Every moment at Yogagarhi is a step toward inner awakening. From sunrise practice to community meals, we cherish each experience on this transformative journey.
              </p>

              <Button
                onClick={() => setShowEnrollDialog(true)}
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-6 py-3 rounded-full transition-all group"
              >
                Enroll Now
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </section>

        {/* Video Gallery Section */}
        <HomeVideoGallerySection />

        {/* Ready to Begin Section */}
        <ReadyToBeginSection />
      </div>
    </>
  );
}
