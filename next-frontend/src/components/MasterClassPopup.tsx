"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { X, Sparkles, User, Mail, ArrowRight, Loader2, CheckCircle2, Globe } from "lucide-react";
import { timezones } from "@/constants/formOptions";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import founderImage from "@/assets/founder-image.png";

const MasterClassPopup = () => {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        date: "",
        time: "",
        timezone: "UTC",
    });
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        const hasSeenPopup = sessionStorage.getItem("hasSeenMasterClassPopup");
        const hasSubmitted = sessionStorage.getItem("hasSubmittedMasterClass");

        if (hasSubmitted) return;

        // The bubble should ALWAYS be visible if the popup is not open, 
        // regardless of whether they closed it or not (until they submit)
        setIsMinimized(true);

        if (!hasSeenPopup) {
            const timer = setTimeout(() => {
                setIsOpen(true);
                sessionStorage.setItem("hasSeenMasterClassPopup", "true");
            }, 10000);

            return () => clearTimeout(timer);
        }
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.email) return;

        setIsLoading(true);
        try {
            const response = await fetch("/api/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...formData,
                    _subject: "New 1-to-1 Master Class Registration",
                    _autoresponder: `Namaste! Thank you for registering for the Free Yoga TTC Clarity Master Class with Sachinji.

Details Registered:
Date: ${formData.date}
Time: ${formData.time}
Timezone: ${formData.timezone}

Our team will reach out to you shortly to confirm your session. We look forward to connecting with you!`,
                }),
            });

            if (response.ok) {
                setIsSubmitted(true);
                sessionStorage.setItem("hasSubmittedMasterClass", "true");

                // Show success state then redirect to thank you page after 10 seconds
                setTimeout(() => {
                    setIsOpen(false);
                    router.push("/thank-you?type=masterclass");
                }, 10000);
            }
        } catch (error) {
            console.error("Error submitting email:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleClose = () => {
        setIsOpen(false);
        setIsMinimized(true);
        sessionStorage.setItem("isMasterClassMinimized", "true");
    };

    const handleRestore = () => {
        setIsMinimized(false);
        setIsOpen(true);
        sessionStorage.removeItem("isMasterClassMinimized");
    };

    if (isSubmitted && !isOpen) return null;

    return (
        <>
            {/* Minimized Bubble - Above WhatsApp button (bottom-left) */}
            {isMinimized && !isOpen && (
                <div className="fixed bottom-[94px] left-6 z-[100] animate-in slide-in-from-bottom-10 fade-in duration-700">
                    <button
                        onClick={handleRestore}
                        className="relative group flex flex-col items-center"
                        aria-label="Open Master Class Registration"
                    >
                        <div className="absolute bottom-full mb-2 bg-primary text-white px-2.5 py-1 rounded-full shadow-lg text-[9px] font-black whitespace-nowrap hidden md:block md:opacity-0 md:group-hover:opacity-100 transition-all duration-300">
                            Free 1-to-1 YTTC Clarity Masterclass ✨
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 rounded-full bg-primary/30 animate-ping duration-1000 scale-125" />
                            <div className="relative w-14 h-14 rounded-full border-4 border-white shadow-xl overflow-hidden bg-primary transition-all duration-300 group-hover:scale-110">
                                <Image src={founderImage} alt="Sachinji" fill className="object-cover" />
                            </div>
                            <div className="absolute -top-1 -right-1 w-5 h-5 bg-accent rounded-full border-2 border-white flex items-center justify-center">
                                <Sparkles className="w-2.5 h-2.5 text-white" />
                            </div>
                        </div>
                    </button>
                </div>
            )}

            <Dialog open={isOpen} onOpenChange={(open) => {
                if (!open) handleClose();
                else setIsOpen(true);
            }}>
                <DialogContent className="sm:max-w-[360px] w-[90%] p-0 overflow-visible border-none bg-transparent shadow-none [&>button]:hidden">


                    <div className="relative bg-white rounded-2xl p-4 sm:p-5 shadow-2xl border border-white/40 overflow-hidden">
                        {/* Grab Opportunity Ribbon */}
                        <div className="absolute top-0 right-0 w-28 h-28 overflow-hidden pointer-events-none z-10">
                            <div className="absolute top-7 -right-8 w-32 bg-accent text-white text-[8.5px] font-black py-1 text-center rotate-45 shadow-md uppercase">
                                Grab Opportunity
                            </div>
                        </div>

                        {/* Compact Header */}
                        <div className="flex items-start gap-3 mb-3">
                            <div className="w-12 h-12 rounded-full border border-primary/20 overflow-hidden bg-primary/10 shrink-0 relative">
                                <Image src={founderImage} alt="Sachinji" fill className="object-cover" />
                            </div>
                            <div className="flex-1 pt-0.5 pr-6">
                                <span className="text-primary text-[8px] font-black uppercase tracking-tighter">Free 1-to-1 Masterclass</span>
                                <DialogTitle className="font-heading text-lg font-black text-foreground leading-none mt-0.5">
                                    Authentic <span className="text-primary">YTTC Clarity</span> Path
                                </DialogTitle>
                            </div>
                        </div>

                        {/* Relative Close Button inside absolute container */}
                        <button
                            onClick={handleClose}
                            className="absolute top-2 right-2 p-1.5 rounded-full bg-gray-100/80 hover:bg-gray-200 transition-all z-[60]"
                        >
                            <X className="w-3.5 h-3.5 text-gray-500" />
                        </button>

                        <div className="text-center space-y-2">
                            <div className="bg-primary/5 py-1.5 rounded-lg text-primary font-bold text-[11px] border border-primary/5 italic">
                                "Stop guessing, Start Knowing."
                            </div>

                            {isSubmitted ? (
                                <div className="py-10 space-y-4 animate-in fade-in zoom-in duration-500">
                                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                                        <CheckCircle2 className="w-10 h-10 text-green-600" />
                                    </div>
                                    <div className="space-y-2">
                                        <DialogTitle className="font-black text-green-600 text-2xl">Namaste! You're Registered.</DialogTitle>
                                        <DialogDescription className="text-muted-foreground font-medium">
                                            Check your email for connection details. <br />We'll see you in the class!
                                        </DialogDescription>
                                    </div>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-2 mt-3 text-left">
                                    <div className="space-y-2">
                                        <div className="space-y-0.5">
                                            <label className="text-[8px] font-black text-muted-foreground uppercase ml-0.5">Email</label>
                                            <Input
                                                name="email"
                                                type="email"
                                                placeholder="your@email.com"
                                                className="h-8 bg-gray-50 border-gray-100 rounded-md text-[11px]"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>

                                        <div className="grid grid-cols-2 gap-2">
                                            <div className="space-y-0.5">
                                                <label className="text-[8px] font-black text-muted-foreground uppercase ml-0.5">Date</label>
                                                <Input
                                                    name="date"
                                                    type="date"
                                                    className="h-8 bg-gray-50 border-gray-100 rounded-md text-[10px]"
                                                    value={formData.date}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                            <div className="space-y-0.5">
                                                <label className="text-[8px] font-black text-muted-foreground uppercase ml-0.5">Time</label>
                                                <Input
                                                    name="time"
                                                    type="time"
                                                    className="h-8 bg-gray-50 border-gray-100 rounded-md text-[10px]"
                                                    value={formData.time}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-0.5">
                                            <label className="text-[8px] font-black text-muted-foreground uppercase ml-0.5">Timezone</label>
                                            <select
                                                name="timezone"
                                                className="w-full px-2 h-8 bg-gray-50 border border-gray-100 rounded-md text-[10px] outline-none"
                                                value={formData.timezone}
                                                onChange={handleChange}
                                                required
                                            >
                                                <option value="" disabled>Select Timezone</option>
                                                {timezones.map((tz) => (
                                                    <option key={tz.value} value={tz.value}>{tz.label}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    <Button
                                        type="submit"
                                        className="w-full h-9 rounded-md text-xs font-black mt-1"
                                        disabled={isLoading}
                                    >
                                        {isLoading ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : "Secure Free Spot"}
                                    </Button>

                                    <p className="text-[8px] text-center text-muted-foreground font-bold uppercase opacity-60">Limited Seats Only</p>
                                </form>
                            )}
                        </div>

                        {/* Decorative Corner Elements */}
                        <div className="absolute top-0 left-0 w-32 h-32 bg-primary/5 rounded-br-full -z-10" />
                        <div className="absolute bottom-0 right-0 w-40 h-40 bg-accent/5 rounded-tl-full -z-10" />
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default MasterClassPopup;
