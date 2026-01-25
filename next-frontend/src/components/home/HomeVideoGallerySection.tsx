"use client";
import { Play } from "lucide-react";

const videos = [
    {
        id: "ipnGYnma1mI",
        title: "Morning Yoga Flow",
        description: "Start your day with energy and mindfulness."
    },
    {
        id: "dIuGniJZpFs",
        title: "Sound Healing Session",
        description: "Experience the calming vibrations of sound bowl healing."
    },
    {
        id: "6JllDeF3WzY",
        title: "Voice from our Yogagarhi Family",
        description: "Hear from our graduates about their transformative journey."
    },
    {
        id: "0-uWiqJgw7Y",
        title: "Bali Ashram Life",
        description: "A glimpse into the daily life at our beautiful ashram."
    }
];

export default function HomeVideoGallerySection() {
    return (
        <section className="py-20 bg-background overflow-hidden relative">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-3">
                        Watch & Experience
                    </span>
                    <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                        Glimpses of Life at Yogagarhi
                    </h2>
                    <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                        Immerse yourself in the energy of Yogagarhi. From morning flows to sacred ceremonies, capture the essence of our training.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {videos.map((video) => (
                        <div
                            key={video.id}
                            className="group relative rounded-2xl overflow-hidden shadow-xl aspect-[9/16] bg-black border border-white/10"
                        >
                            <iframe
                                className="absolute inset-0 w-full h-full object-cover"
                                src={`https://www.youtube.com/embed/${video.id}?rel=0&controls=1&mute=0&loop=1&playlist=${video.id}`}
                                title={video.title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                loading="lazy"
                            ></iframe>

                            {/* Overlay for inactive state */}
                            <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none opacity-100 transition-opacity">
                                <div className="flex items-center gap-2 text-white/90 mb-1">
                                    <Play className="w-3 h-3 fill-current" />
                                    <span className="text-xs font-medium uppercase tracking-wider">Shorts</span>
                                </div>
                                <h3 className="text-white font-heading font-medium text-lg leading-tight mb-1">
                                    {video.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
