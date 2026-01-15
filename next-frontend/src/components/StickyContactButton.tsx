"use client";

import { MessageSquare } from "lucide-react";
import { useQuickEnquiry } from "./QuickEnquiryDialog";
import { cn } from "@/lib/utils";

export default function StickyContactButton() {
    const { setShowQuickEnquiry } = useQuickEnquiry();

    return (
        <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col items-end pointer-events-none">
            <button
                onClick={() => setShowQuickEnquiry(true)}
                className={cn(
                    "pointer-events-auto",
                    "bg-primary text-primary-foreground",
                    "px-2 py-4 md:px-3 md:py-6 rounded-l-2xl shadow-elevated group",
                    "transition-all duration-500 ease-in-out hover:pl-6",
                    "flex flex-col items-center gap-3 md:gap-4",
                    "border-y border-l border-white/20"
                )}
            >
                <MessageSquare className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-125 transition-transform duration-300" />
                <span
                    className="text-[10px] md:text-xs font-bold tracking-[0.1em] md:tracking-[0.2em] uppercase whitespace-nowrap"
                    style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
                >
                    Contact Us
                </span>
            </button>
        </div>
    );
}
