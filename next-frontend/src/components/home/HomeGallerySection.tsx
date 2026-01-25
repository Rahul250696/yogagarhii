"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Camera, Play } from "lucide-react";

// Import gallery images
import gallery1 from "@/assets/gallery/gallery-1.jpg";
import gallery2 from "@/assets/gallery/gallery-2-new.jpg";
import gallery3 from "@/assets/gallery/gallery-3-new.jpg";
import gallery4 from "@/assets/gallery/gallery-4-new.jpg";
import gallery5 from "@/assets/gallery/gallery-5-latest.jpg";
import gallery6 from "@/assets/gallery/gallery-6-new.jpg";
import gallery7 from "@/assets/gallery/gallery-7.jpg";
import gallery8 from "@/assets/gallery/gallery-8.jpg";

const galleryImages = [
  { src: gallery1, alt: "Waterfall excursion", label: "Nature Immersion" },
  { src: gallery2, alt: "Meditation session", label: "Inner Peace" },
  { src: gallery3, alt: "Yoga practice", label: "Daily Practice" },
  { src: gallery4, alt: "Asana training", label: "Growth Journey" },
  { src: gallery5, alt: "Community meal", label: "Sacred Sangha" },
  { src: gallery6, alt: "Warrior pose", label: "Finding Strength" },
  { src: gallery7, alt: "Group class", label: "Unity in Practice" },
  { src: gallery8, alt: "Anatomy workshop", label: "Wisdom Sharing" },
];

const HomeGallerySection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-16 md:py-24 bg-secondary/20 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-px bg-primary/40" />
            <Camera className="w-4 h-4 text-primary/60" />
            <span className="w-8 h-px bg-primary/40" />
          </div>
          <span className="text-primary/60 font-medium text-sm tracking-widest uppercase mb-3 block">
            Moments & Memories
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Life at Yogagarhi
          </h2>
        </div>

        {/* Gallery Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {/* Left - Big Featured Image */}
          <div className="relative group">
            <div className="aspect-[4/3] lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative">
              <Image
                src={galleryImages[activeIndex].src}
                alt={galleryImages[activeIndex].alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <span className="inline-block px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full mb-3">
                  {String(activeIndex + 1).padStart(2, '0')} / {String(galleryImages.length).padStart(2, '0')}
                </span>
                <h3 className="font-heading text-2xl md:text-3xl text-white font-semibold">
                  {galleryImages[activeIndex].label}
                </h3>
                <p className="text-white/70 mt-2 text-sm md:text-base">
                  {galleryImages[activeIndex].alt}
                </p>
              </div>
            </div>

            {/* Decorative frame */}
            <div className="absolute -inset-3 border border-primary/20 rounded-2xl -z-10" />
            <div className="absolute -inset-6 border border-primary/10 rounded-3xl -z-20 hidden md:block" />
          </div>

          {/* Right - Thumbnail Grid */}
          <div className="flex flex-col">
            <div className="grid grid-cols-4 lg:grid-cols-4 gap-2 md:gap-3">
              {galleryImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`
                    relative aspect-square rounded-lg md:rounded-xl overflow-hidden transition-all duration-300
                    ${activeIndex === index
                      ? 'ring-2 ring-primary ring-offset-2 ring-offset-secondary/20 scale-95'
                      : 'hover:scale-105 opacity-70 hover:opacity-100'
                    }
                  `}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                  {/* Active indicator */}
                  {activeIndex === index && (
                    <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                      <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-primary flex items-center justify-center">
                        <Play className="w-3 h-3 md:w-4 md:h-4 text-primary-foreground fill-current" />
                      </div>
                    </div>
                  )}
                  {/* Number badge */}
                  <div className="absolute top-1 left-1 md:top-2 md:left-2 w-5 h-5 md:w-6 md:h-6 rounded-full bg-background/90 flex items-center justify-center">
                    <span className="text-[10px] md:text-xs font-medium text-foreground">
                      {index + 1}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* Description below thumbnails */}
            <div className="mt-6 md:mt-8 p-6 bg-background rounded-xl border border-primary/10">
              <p className="font-heading text-xl md:text-2xl text-foreground mb-2">
                Where practice meets purpose.
              </p>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-5">
                Glimpses of transformation, community, and the yogic journey at our Bali ashram.
              </p>

              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full font-medium text-sm group hover:bg-primary/90 transition-all"
              >
                Explore Full Gallery
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeGallerySection;
