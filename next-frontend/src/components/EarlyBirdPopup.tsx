"use client";
import { useState, useEffect } from "react";
import { X, Sparkles } from "lucide-react";
import { useQuickEnquiry } from "./QuickEnquiryDialog";

const EarlyBirdPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const { setShowQuickEnquiry } = useQuickEnquiry();

  // Check sessionStorage only in the browser after mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const dismissed = sessionStorage.getItem('earlyBirdDismissed') === 'true';
      setIsDismissed(dismissed);
    }
  }, []);

  useEffect(() => {
    // If already dismissed, don't show
    if (isDismissed) return;

    // Show popup after 2 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('earlyBirdDismissed', 'true');
    }
  };

  // Removed handleContactClick as we are using Link component now

  if (isDismissed) return null;

  return (
    <div
      className={`fixed left-0 top-1/2 -translate-y-1/2 z-40 transition-transform duration-500 ease-out ${isVisible ? 'translate-x-0' : '-translate-x-full'
        } scale-[0.8] sm:scale-100 origin-left`}
    >
      <div className="relative">
        {/* Close Button */}
        <button
          onClick={handleDismiss}
          className="absolute -right-3 -top-3 w-7 h-7 bg-orange-500 hover:bg-orange-600 rounded-full flex items-center justify-center shadow-lg transition-colors z-10"
          aria-label="Close popup"
        >
          <X className="w-4 h-4 text-white" />
        </button>

        {/* Popup Content */}
        <div className="relative overflow-hidden rounded-r-xl shadow-2xl">
          {/* Top Banner - "FOR" */}
          <div className="bg-primary text-primary-foreground text-center py-1.5 px-6 relative">
            <span className="text-xs font-bold tracking-widest uppercase">For</span>
            {/* Triangle decoration */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[8px] border-l-transparent border-r-transparent border-t-primary" />
          </div>

          {/* Main Content */}
          <div className="bg-gradient-to-b from-teal-500 to-teal-600 px-6 py-4 text-center relative">
            {/* Sparkle decorations */}
            <Sparkles className="absolute top-2 left-2 w-4 h-4 text-yellow-300 animate-pulse" />
            <Sparkles className="absolute top-2 right-2 w-4 h-4 text-yellow-300 animate-pulse" />

            <h3 className="text-white font-heading text-xl font-bold tracking-tight leading-tight">
              Early Bird:
            </h3>

            {/* Bird Banner */}
            <div className="relative -mx-6 my-2">
              <div className="bg-primary py-2 px-4 transform -rotate-2">
                <span className="text-primary-foreground font-heading text-lg font-bold">
                  March to July batches
                </span>
              </div>
            </div>

            <p className="text-white font-heading text-lg font-semibold">
              Get 150 USD off
            </p>

            {/* Decorative line */}
            <div className="flex items-center justify-center gap-2 mt-2">
              <span className="w-6 h-0.5 bg-white/40" />
              <span className="text-yellow-300 text-lg">✦</span>
              <span className="w-6 h-0.5 bg-white/40" />
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={() => {
              setShowQuickEnquiry(true);
              setIsVisible(false);
            }}
            className="w-full bg-amber-700 hover:bg-amber-800 text-white py-3 px-6 font-bold text-sm tracking-wide uppercase transition-colors flex items-center justify-center gap-2 group"
          >
            <span>Contact Us</span>
            <span className="text-lg group-hover:translate-x-1 transition-transform">»</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EarlyBirdPopup;
