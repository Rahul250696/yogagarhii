"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";

// Room Card Component with Individual State and Ref
export default function RoomCard({ room, onBookNow }: { room: any, onBookNow: () => void }) {
    const carouselRef = useRef<HTMLDivElement>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const scrollToIndex = (index: number) => {
        if (carouselRef.current) {
            const width = carouselRef.current.clientWidth;
            carouselRef.current.scrollTo({ left: width * index, behavior: "smooth" });
            setCurrentImageIndex(index);
        }
    };

    const handleNext = (e: React.MouseEvent) => {
        e.preventDefault();
        if (currentImageIndex < room.images.length - 1) {
            scrollToIndex(currentImageIndex + 1);
        } else {
            // Loop back to start
            scrollToIndex(0);
        }
    };

    const handlePrev = (e: React.MouseEvent) => {
        e.preventDefault();
        if (currentImageIndex > 0) {
            scrollToIndex(currentImageIndex - 1);
        } else {
            // Loop to end
            scrollToIndex(room.images.length - 1);
        }
    };

    // Sync state with manual scrolling
    const onScroll = () => {
        if (carouselRef.current) {
            const index = Math.round(carouselRef.current.scrollLeft / carouselRef.current.clientWidth);
            if (index !== currentImageIndex) {
                setCurrentImageIndex(index);
            }
        }
    };

    return (
        <div className={`group bg-card rounded-2xl overflow-hidden border transition-all duration-300 hover:shadow-elevated ${room.isPopular ? 'border-primary shadow-lg' : 'border-border shadow-card'}`}>
            {/* Image Carousel */}
            <div className="relative h-52 overflow-hidden group/carousel">
                <div
                    ref={carouselRef}
                    onScroll={onScroll}
                    className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide h-full cursor-grab active:cursor-grabbing"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {room.images.map((img: any, idx: number) => (
                        <div key={idx} className="flex-shrink-0 w-full h-full snap-start relative">
                            <Image
                                src={img}
                                alt={`${room.title} ${idx + 1}`}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    ))}
                </div>

                {/* Badge */}
                {room.badge && (
                    <div className="absolute top-3 left-3 z-10">
                        <span className={`px-3 py-1 text-xs font-semibold rounded-full ${room.isPopular
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-foreground/80 text-background'
                            }`}>
                            {room.badge}
                        </span>
                    </div>
                )}

                {/* Navigation Arrows */}
                <button
                    onClick={handlePrev}
                    className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center transition-all duration-300 active:scale-95 opacity-0 group-hover:opacity-100"
                    aria-label="Previous image"
                >
                    <svg className="w-5 h-5 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button
                    onClick={handleNext}
                    className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center transition-all duration-300 active:scale-95 opacity-0 group-hover:opacity-100"
                    aria-label="Next image"
                >
                    <svg className="w-5 h-5 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>

                {/* Dot Indicators */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1.5 bg-black/40 backdrop-blur-sm px-2.5 py-1.5 rounded-full">
                    {room.images.map((_: any, idx: number) => (
                        <button
                            key={idx}
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToIndex(idx);
                            }}
                            className={`w-1.5 h-1.5 rounded-full transition-all ${idx === currentImageIndex ? 'bg-white w-3' : 'bg-white/60 hover:bg-white'}`}
                            aria-label={`Go to image ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>

            {/* Content */}
            <div className="p-5">
                {/* Header */}
                <div className="flex items-center justify-between mb-3">
                    <h3 className="font-heading text-lg font-bold text-foreground">{room.title}</h3>
                    <div className="flex items-center gap-1 text-muted-foreground">
                        <Users className="w-4 h-4" />
                        <span className="text-xs">{room.beds} {room.beds === 1 ? 'bed' : 'beds'}</span>
                    </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {room.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-5">
                    {room.features.map((feature: string) => (
                        <span
                            key={feature}
                            className="px-2.5 py-1 bg-secondary text-secondary-foreground text-xs rounded-md"
                        >
                            {feature}
                        </span>
                    ))}
                </div>

                {/* Pricing */}
                <div className="flex items-end justify-between pt-4 border-t border-border mb-4">
                    <div>
                        <p className="text-muted-foreground line-through text-sm">{room.originalPrice}</p>
                        <p className="font-heading text-2xl font-bold text-foreground">{room.price}</p>
                    </div>
                    <span className="px-2.5 py-1 bg-primary/10 text-primary text-xs font-medium rounded-md">
                        Save 20%
                    </span>
                </div>

                {/* Book Now Button */}
                <Button
                    onClick={onBookNow}
                    className={`w-full ${room.isPopular ? 'bg-primary hover:bg-primary/90' : 'bg-foreground hover:bg-foreground/90'} text-background font-semibold py-2.5`}
                >
                    Book Now
                </Button>
            </div>
        </div>
    );
}
