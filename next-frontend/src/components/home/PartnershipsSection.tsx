"use client";
import React from "react";
import Image from "next/image";
import yogaAllianceLogo from "@/assets/yoga-alliance-official.png";

const partnerships = [
    {
        name: "Yoga Alliance (USA)",
        icon: <Image src={yogaAllianceLogo} alt="Yoga Alliance" className="w-full h-full object-contain filter brightness-95" />,
        bg: "bg-teal-500/5"
    },
    {
        name: "Ministry of AYUSH, India",
        icon: (
            <svg viewBox="0 0 100 100" className="w-8 h-8">
                <circle cx="50" cy="50" r="48" fill="#f4911f" opacity="0.1" />
                <circle cx="50" cy="50" r="35" fill="none" stroke="#f4911f" strokeWidth="2" />
                <path d="M50 20 L50 80 M20 50 L80 50" stroke="#f4911f" strokeWidth="2" />
                <circle cx="50" cy="50" r="10" fill="#f4911f" />
                <path d="M35 65 Q50 85 65 65" fill="none" stroke="#008a45" strokeWidth="3" />
            </svg>
        ),
        bg: "bg-orange-500/5"
    },
    {
        name: "Yoga Certification Board",
        icon: (
            <svg viewBox="0 0 100 100" className="w-8 h-8">
                <circle cx="50" cy="50" r="45" fill="#00529b" />
                <path d="M30 50 L45 65 L75 35" stroke="white" strokeWidth="8" fill="none" />
            </svg>
        ),
        bg: "bg-blue-500/5"
    },
    {
        name: "Indian Yoga Association",
        icon: (
            <svg viewBox="0 0 100 100" className="w-8 h-8">
                <rect x="10" y="20" width="80" height="60" rx="10" fill="#f4911f" opacity="0.2" />
                <text x="50" y="60" textAnchor="middle" fill="#f4911f" fontWeight="bold" fontSize="24">IYA</text>
            </svg>
        ),
        bg: "bg-amber-500/5"
    },
    {
        name: "BookYogaRetreats",
        icon: (
            <div className="flex items-center">
                <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#01BFA1]">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
            </div>
        ),
        bg: "bg-[#01BFA1]/5"
    },
    {
        name: "BookRetreats",
        icon: (
            <div className="flex items-center">
                <svg viewBox="0 0 127 127" className="w-8 h-8">
                    <path d="M63.5 0C28.4378 0 0 28.4378 0 63.5C0 98.5623 28.4378 127 63.5 127C98.5623 127 127 98.5623 127 63.5C127 28.4378 98.5989 0 63.5 0ZM63.5 117.082C33.9643 117.082 9.91844 93.0357 9.91844 63.5C9.91844 33.9643 33.9643 9.91845 63.5 9.91845C93.0357 9.91845 117.082 33.9643 117.082 63.5C117.082 93.0357 93.0723 117.082 63.5 117.082ZM87.3262 38.6856H39.6738C35.6478 38.6856 31.9513 40.8816 30.0481 44.4683C28.145 48.0184 28.3646 52.3006 30.5971 55.6677L54.4233 91.3888C56.4363 94.4265 59.8401 96.2565 63.5 96.2565C67.1599 96.2565 70.5637 94.4265 72.5767 91.3888L96.4029 55.6677C98.6355 52.3006 98.8551 48.0184 96.9519 44.4683C95.0487 40.8816 91.3522 38.6856 87.3262 38.6856ZM88.168 50.1412L64.3418 85.8622C63.9758 86.4112 63.0608 86.4112 62.6948 85.8622L38.8686 50.1412C38.6856 49.8484 38.649 49.4458 38.7954 49.1164C38.9784 48.787 39.3078 48.604 39.6738 48.604H87.2896C87.6556 48.604 87.985 48.787 88.168 49.1164C88.351 49.4458 88.351 49.8484 88.168 50.1412Z" fill="#00A6FF" />
                </svg>
            </div>
        ),
        bg: "bg-[#00A6FF]/5"
    },
    {
        name: "Google Reviews",
        icon: (
            <svg viewBox="0 0 24 24" className="w-7 h-7">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
        ),
        bg: "bg-blue-500/5"
    },
    {
        name: "Trustpilot",
        icon: (
            <svg viewBox="0 0 100 100" className="w-8 h-8">
                <path d="M50 0l11.4 34.9h36.7L68.6 56.4l11.4 34.9L50 69.8 19.9 91.3l11.4-34.9L1.8 34.9h36.7z" fill="#00b67a" />
            </svg>
        ),
        bg: "bg-emerald-500/5"
    },
    {
        name: "TripAdvisor",
        icon: (
            <svg viewBox="0 0 100 100" className="w-8 h-8">
                <circle cx="50" cy="50" r="45" fill="#34e0a1" />
                <circle cx="35" cy="45" r="12" fill="white" />
                <circle cx="65" cy="45" r="12" fill="white" />
                <circle cx="35" cy="45" r="4" fill="black" />
                <circle cx="65" cy="45" r="4" fill="black" />
                <path d="M50 50 L45 60 L55 60 Z" fill="#2c2c2c" />
            </svg>
        ),
        bg: "bg-green-500/5"
    },
];

export default function PartnershipsSection() {
    // Duplicate for seamless marquee
    const items = [...partnerships, ...partnerships, ...partnerships];

    return (
        <section className="py-12 bg-background border-t border-b border-border/50 overflow-hidden">
            <div className="container mx-auto px-4 mb-4">
                <div className="text-center">
                    <h2 className="font-heading text-lg md:text-xl font-bold text-muted-foreground uppercase tracking-widest">
                        Recognized & Trusted Worldwide
                    </h2>
                </div>
            </div>

            <div className="relative flex overflow-hidden group">
                <div className="animate-marquee-slow flex whitespace-nowrap gap-12 items-center py-4">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-4 group/item opacity-70 hover:opacity-100 transition-opacity duration-300"
                        >
                            <div className={`w-12 h-12 flex items-center justify-center transition-transform duration-500 group-hover/item:scale-110`}>
                                {item.icon}
                            </div>
                            <span className="text-sm md:text-base font-bold text-foreground/70 group-hover/item:text-primary transition-colors">
                                {item.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
