import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Play, ArrowRight, Quote } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const videoTestimonials = [
  { id: "OGmWr_aC4WA", name: "Sarah M.", country: "USA", quote: "Life-changing experience" },
  { id: "2pLe6NHa5WU", name: "Priya K.", country: "India", quote: "Found my true calling" },
  { id: "30jjvcqHEwA", name: "Emma L.", country: "UK", quote: "Beyond expectations" },
  { id: "J2LT9xn4RBE", name: "Maria S.", country: "Spain", quote: "Transformed my practice" },
  { id: "OGmWr_aC4WA", name: "Anna T.", country: "Germany", quote: "Deeply spiritual journey" },
];

// Reusable Video Player Component
const VideoPlayer = ({ 
  video, 
  isPlaying, 
  onPlay,
  videoKey 
}: { 
  video: typeof videoTestimonials[0];
  isPlaying: boolean;
  onPlay: () => void;
  videoKey: string;
}) => (
  <div className="relative rounded-2xl overflow-hidden shadow-elevated bg-muted">
    <div className="aspect-video">
      {isPlaying ? (
        <iframe
          key={videoKey}
          src={`https://www.youtube.com/embed/${video.id}?rel=0&autoplay=1&enablejsapi=1`}
          title={`${video.name} testimonial`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      ) : (
        <div className="relative w-full h-full">
          <img 
            src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
            alt={video.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/20" />
          
          {/* Play Button */}
          <button
            onClick={onPlay}
            className="absolute inset-0 flex items-center justify-center group/play"
          >
            <div className="w-20 h-20 rounded-full bg-primary-foreground/95 flex items-center justify-center shadow-xl transform group-hover/play:scale-110 transition-transform duration-300">
              <Play className="w-8 h-8 text-primary ml-1" />
            </div>
          </button>

          {/* Video Info Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-foreground/80 to-transparent">
            <p className="font-heading text-xl font-bold text-primary-foreground">
              {video.name}
            </p>
            <p className="text-primary-foreground/70 text-sm">
              {video.country} • Click to play
            </p>
          </div>
        </div>
      )}
    </div>
  </div>
);

const StudentStoriesSection = () => {
  const [activeVideo, setActiveVideo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const isMobile = useIsMobile();

  const handleVideoChange = (index: number) => {
    setActiveVideo(index);
    setIsPlaying(false);
  };

  const currentVideo = videoTestimonials[activeVideo];

  return (
    <section className="py-20 bg-background overflow-hidden relative">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <circle cx="5" cy="5" r="0.5" fill="currentColor" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Header - Mobile */}
        <div className="lg:hidden mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-primary font-medium text-sm">Real Voices</span>
          </div>
          <h2 className="font-heading text-4xl font-bold text-foreground mb-4">
            Student Stories
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Every graduate carries a unique story of transformation. 
            Here are some voices from our global yoga family.
          </p>
        </div>

        {/* Featured Video - Mobile Only (conditionally rendered) */}
        {isMobile && (
          <div className="lg:hidden mb-10">
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
              
              {/* Quote Decoration */}
              <div className="absolute -top-4 -left-4 z-10">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg">
                  <Quote className="w-5 h-5 text-primary-foreground" />
                </div>
              </div>

              <VideoPlayer
                video={currentVideo}
                isPlaying={isPlaying}
                onPlay={() => setIsPlaying(true)}
                videoKey={`video-${activeVideo}-${isPlaying}`}
              />
            </div>
          </div>
        )}

        {/* Asymmetric Layout - Desktop */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column - Header & Thumbnails */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            {/* Header - Desktop */}
            <div className="hidden lg:block mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-primary font-medium text-sm">Real Voices</span>
              </div>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
                Student<br />Stories
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Every graduate carries a unique story of transformation. 
                Here are some voices from our global yoga family.
              </p>
            </div>

            {/* Vertical Thumbnail Stack */}
            <div className="space-y-3">
              {videoTestimonials.map((video, index) => (
                <button
                  key={index}
                  onClick={() => handleVideoChange(index)}
                  className={`w-full flex items-center gap-4 p-3 rounded-xl transition-all duration-300 text-left group ${
                    activeVideo === index 
                      ? 'bg-primary/10 border-l-4 border-primary' 
                      : 'hover:bg-secondary/50 border-l-4 border-transparent'
                  }`}
                >
                  {/* Thumbnail */}
                  <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                    <img 
                      src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                      alt={video.name}
                      className="w-full h-full object-cover"
                    />
                    {activeVideo !== index && (
                      <div className="absolute inset-0 bg-foreground/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Play className="w-4 h-4 text-primary-foreground" />
                      </div>
                    )}
                  </div>
                  
                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <p className={`font-medium transition-colors ${
                      activeVideo === index ? 'text-primary' : 'text-foreground'
                    }`}>
                      {video.name}
                    </p>
                    <p className="text-sm text-muted-foreground">{video.country}</p>
                    <p className="text-xs text-muted-foreground/70 italic mt-1 truncate">
                      "{video.quote}"
                    </p>
                  </div>

                  {/* Active Indicator */}
                  {activeVideo === index && (
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <Play className="w-3 h-3 text-primary-foreground ml-0.5" />
                    </div>
                  )}
                </button>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8">
              <Button variant="outline" className="group" asChild>
                <Link to="/gallery">
                  View All Stories
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Column - Featured Video (Desktop Only - conditionally rendered) */}
          {!isMobile && (
            <div className="hidden lg:block lg:col-span-7">
              <div className="relative">
                {/* Decorative Elements */}
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
                
                {/* Quote Decoration */}
                <div className="absolute -top-4 -left-4 z-10">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg">
                    <Quote className="w-5 h-5 text-primary-foreground" />
                  </div>
                </div>

                <VideoPlayer
                  video={currentVideo}
                  isPlaying={isPlaying}
                  onPlay={() => setIsPlaying(true)}
                  videoKey={`video-${activeVideo}-${isPlaying}`}
                />

                {/* Featured Quote Card */}
                <div className="mt-8 p-6 bg-secondary/40 rounded-2xl border border-border relative">
                  <Quote className="w-8 h-8 text-primary/20 absolute top-4 right-4" />
                  <p className="font-heading text-lg italic text-foreground/80 leading-relaxed mb-4">
                    "{currentVideo.quote}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                      <img 
                        src={`https://img.youtube.com/vi/${currentVideo.id}/mqdefault.jpg`}
                        alt={currentVideo.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-sm">{currentVideo.name}</p>
                      <p className="text-xs text-muted-foreground">{currentVideo.country}</p>
                    </div>
                  </div>
                </div>

                {/* Stats Row */}
                <div className="mt-6 grid grid-cols-3 gap-4">
                  {[
                    { number: "500+", label: "Graduates" },
                    { number: "45+", label: "Countries" },
                    { number: "5.0", label: "Rating" },
                  ].map((stat, index) => (
                    <div key={index} className="text-center p-4 bg-secondary/30 rounded-xl">
                      <p className="font-heading text-2xl font-bold text-primary">{stat.number}</p>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </div>
                  ))}
                </div>

                {/* Trust Badges */}
                <div className="mt-6 flex items-center justify-center gap-6 p-4 bg-background rounded-xl border border-border">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V8.26l7-3.89V12.99z"/>
                    </svg>
                    <span className="text-sm font-medium text-foreground">Yoga Alliance Certified</span>
                  </div>
                  <div className="w-px h-6 bg-border" />
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-amber-500" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    </svg>
                    <span className="text-sm font-medium text-foreground">5.0 Google Rating</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default StudentStoriesSection;
