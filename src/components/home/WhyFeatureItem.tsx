import { useState, type ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface WhyFeatureItemProps {
  icon: ReactNode;
  title: string;
  preview: string;
  expanded: string;
  imageUrl: string;
  imageAlt: string;
  isReversed?: boolean;
}

const WhyFeatureItem = ({ 
  icon, 
  title, 
  preview, 
  expanded, 
  imageUrl, 
  imageAlt,
  isReversed = false 
}: WhyFeatureItemProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={cn(
      "flex flex-col md:flex-row items-center gap-8 md:gap-12",
      isReversed && "md:flex-row-reverse"
    )}>
      {/* Circular Image with Chakra Ring */}
      <div className="flex-shrink-0 relative">
        {/* Animated Chakra Ring */}
        <svg 
          className="absolute -inset-4 w-[calc(100%+2rem)] h-[calc(100%+2rem)] animate-spin-slow text-primary/20"
          viewBox="0 0 100 100" 
          fill="none" 
          stroke="currentColor"
        >
          {/* Outer ring with dashes */}
          <circle cx="50" cy="50" r="48" strokeWidth="0.5" strokeDasharray="4 2" />
          {/* Middle ring */}
          <circle cx="50" cy="50" r="44" strokeWidth="0.3" />
          {/* Inner decorative ring */}
          <circle cx="50" cy="50" r="40" strokeWidth="0.5" strokeDasharray="2 4" />
          {/* Chakra petals */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
            <ellipse 
              key={angle}
              cx={50 + 44 * Math.cos(angle * Math.PI / 180)} 
              cy={50 + 44 * Math.sin(angle * Math.PI / 180)} 
              rx="3" 
              ry="6" 
              transform={`rotate(${angle} ${50 + 44 * Math.cos(angle * Math.PI / 180)} ${50 + 44 * Math.sin(angle * Math.PI / 180)})`}
              strokeWidth="0.4"
            />
          ))}
          {/* Small dots at cardinal points */}
          {[0, 90, 180, 270].map((angle) => (
            <circle 
              key={`dot-${angle}`}
              cx={50 + 48 * Math.cos(angle * Math.PI / 180)} 
              cy={50 + 48 * Math.sin(angle * Math.PI / 180)} 
              r="1.5" 
              fill="currentColor"
            />
          ))}
        </svg>
        
        {/* Image Container */}
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg relative z-10">
          <img 
            src={imageUrl}
            alt={imageAlt}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <div className={cn(
        "flex-1 text-center md:text-left",
        isReversed && "md:text-right"
      )}>
        {/* Title with icon */}
        <div className={cn(
          "flex items-center gap-3 mb-3 justify-center md:justify-start",
          isReversed && "md:justify-end md:flex-row-reverse"
        )}>
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
            {icon}
          </div>
          <h3 className="font-heading text-lg md:text-xl font-semibold text-foreground uppercase tracking-wide">
            {title}
          </h3>
        </div>

        {/* Preview text */}
        <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-3">
          {preview}
        </p>

        {/* Expanded Content */}
        <div
          className={cn(
            "overflow-hidden transition-all duration-300 ease-in-out",
            isExpanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line pt-2 border-t border-border/30">
            {expanded}
          </p>
        </div>

        {/* Read More/Less Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={cn(
            "mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors",
            isReversed && "md:flex-row-reverse"
          )}
        >
          {isExpanded ? 'Read Less' : 'Read More'}
          <ChevronDown 
            className={cn(
              "w-4 h-4 transition-transform duration-300",
              isExpanded && "rotate-180"
            )} 
          />
        </button>
      </div>
    </div>
  );
};

export default WhyFeatureItem;
