import { useState, type ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface WhyFeatureCardProps {
  icon: ReactNode;
  title: string;
  preview: string;
  expanded: string;
}

const WhyFeatureCard = ({ icon, title, preview, expanded }: WhyFeatureCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-card rounded-xl border border-border/50 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="p-6">
        {/* Header */}
        <div className="flex gap-4 items-start">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            {icon}
          </div>
          <div className="flex-1">
            <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
              {title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {preview}
            </p>
          </div>
        </div>
        
        {/* Expanded Content */}
        <div
          className={cn(
            "overflow-hidden transition-all duration-300 ease-in-out",
            isExpanded ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0"
          )}
        >
          <div className="pt-4 border-t border-border/50 ml-14">
            <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line">
              {expanded}
            </p>
          </div>
        </div>
        
        {/* Read More/Less Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="ml-14 mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
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

export default WhyFeatureCard;
