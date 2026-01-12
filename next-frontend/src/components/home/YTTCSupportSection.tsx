"use client";
import { useState, Suspense } from "react";
import Image from "next/image";
import {
  GraduationCap, RefreshCw, Users, BookOpen, Heart,
  Sparkles, CheckCircle2, Star,
  ChevronRight, Play, X, Mail, Send, Check
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import SacredGeometryBackground from "@/components/3d/SacredGeometryBackground";

// Pre-YTTC Support Items
const preYTTCItems = [
  { icon: "📖", title: "Prepare Your Body", desc: "Start with gentle practices to prepare physically" },
  { icon: "🎯", title: "Get Familiar with Curriculum", desc: "Preview subjects and teaching methodology" },
  { icon: "🧘", title: "Understand Basic Concepts", desc: "Learn foundational yogic principles" },
  { icon: "💪", title: "Feel Confident & Clear", desc: "Arrive grounded, not overwhelmed" },
];

// Post-YTTC Support Items
const postYTTCItems = [
  {
    image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=400&h=400&fit=crop",
    icon: RefreshCw,
    title: "Bi-annual Upgrade Programs",
    description: "Programs to deepen your experience of the practices and upgrade your teaching skills"
  },
  {
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=400&fit=crop",
    icon: Users,
    title: "Extensive Alumni Support",
    description: "A dedicated alumni platform for queries, clarifications, and continuous learning"
  },
  {
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=400&fit=crop",
    icon: Heart,
    title: "Community Connection",
    description: "Integration into a vibrant and supportive global community of YogaGarhi alumni"
  },
  {
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=400&fit=crop",
    icon: BookOpen,
    title: "Teaching Resources",
    description: "Access to a repository of articles, videos, and teaching materials"
  }
];

const YTTCSupportSection = () => {
  const [activeTab, setActiveTab] = useState<'pre' | 'post'>('pre');
  const [showPreYTTCDialog, setShowPreYTTCDialog] = useState(false);
  const [showThankYouDialog, setShowThankYouDialog] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isValidEmail = email.trim().length > 0 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValidEmail) return;

    setIsSubmitting(true);

    try {
      await fetch("https://formsubmit.co/ajax/yogagarhi@gmail.com", {
        method: "POST",
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          email: email,
          _subject: "New Pre-YTTC Guide Request",
          source: "YTTC Support Section - Learn More Button",
          form_type: "pre_yttc_guide"
        })
      });

      setIsSubmitting(false);
      setShowPreYTTCDialog(false);
      setShowThankYouDialog(true);
      setEmail('');
    } catch (error) {
      console.error(error);
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-[10%] w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-[10%] w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

        {/* Floating Sacred Symbols */}
        <svg className="absolute top-32 right-[15%] w-16 h-16 text-primary/10 animate-float" viewBox="0 0 64 64" fill="none">
          <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="32" cy="32" r="12" stroke="currentColor" strokeWidth="1.5" />
          <path d="M32 4 L32 18 M32 46 L32 60 M4 32 L18 32 M46 32 L60 32" stroke="currentColor" strokeWidth="1.5" />
        </svg>
        <svg className="absolute bottom-40 left-[12%] w-12 h-12 text-primary/10 animate-float" style={{ animationDelay: '2s' }} viewBox="0 0 48 48" fill="none">
          <path d="M24 4 L24 44 M4 24 L44 24 M10 10 L38 38 M38 10 L10 38" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Complete Journey Support
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
            Pre & Post YTTC Support
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Your transformation doesn't start or end with the training — we support you every step of the way
          </p>
        </div>

        {/* Interactive Tab Navigation */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="relative bg-secondary/50 rounded-full p-2 flex">
            {/* Sliding Background */}
            <div
              className={`absolute top-2 bottom-2 w-1/2 bg-background rounded-full shadow-card transition-all duration-500 ease-out ${activeTab === 'post' ? 'left-[calc(50%-0.25rem)]' : 'left-2'
                }`}
            />

            {/* Pre YTTC Tab */}
            <button
              onClick={() => setActiveTab('pre')}
              className={`relative z-10 flex-1 flex items-center justify-center gap-3 py-4 px-6 rounded-full transition-all duration-300 ${activeTab === 'pre'
                ? 'text-foreground'
                : 'text-muted-foreground hover:text-foreground/80'
                }`}
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${activeTab === 'pre' ? 'bg-primary/20' : 'bg-transparent'
                }`}>
                <GraduationCap className={`w-5 h-5 transition-colors duration-300 ${activeTab === 'pre' ? 'text-primary' : ''}`} />
              </div>
              <div className="text-left">
                <p className="font-heading font-bold text-lg">Pre-YTTC</p>
                <p className="text-xs text-muted-foreground hidden sm:block">Begin Before You Begin</p>
              </div>
            </button>

            {/* Post YTTC Tab */}
            <button
              onClick={() => setActiveTab('post')}
              className={`relative z-10 flex-1 flex items-center justify-center gap-3 py-4 px-6 rounded-full transition-all duration-300 ${activeTab === 'post'
                ? 'text-foreground'
                : 'text-muted-foreground hover:text-foreground/80'
                }`}
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${activeTab === 'post' ? 'bg-primary/20' : 'bg-transparent'
                }`}>
                <RefreshCw className={`w-5 h-5 transition-colors duration-300 ${activeTab === 'post' ? 'text-primary' : ''}`} />
              </div>
              <div className="text-left">
                <p className="font-heading font-bold text-lg">Post-YTTC</p>
                <p className="text-xs text-muted-foreground hidden sm:block">Lifelong Support</p>
              </div>
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="relative min-h-[500px]">
          {/* Pre-YTTC Content */}
          <div className={`transition-all duration-500 ${activeTab === 'pre'
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-8 absolute inset-0 pointer-events-none'
            }`}>
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left: Visual Card with 3D Background */}
                <div className="relative">
                  {/* Main Card */}
                  <div className="relative bg-gradient-to-br from-amber-50/90 via-orange-50/80 to-yellow-50/70 dark:from-amber-950/40 dark:via-orange-950/30 dark:to-yellow-950/20 rounded-3xl p-8 border border-amber-200/50 dark:border-amber-800/30 overflow-hidden min-h-[500px]">
                    {/* 3D Animated Background */}
                    <Suspense fallback={
                      <div className="absolute inset-0 bg-gradient-to-br from-amber-100/50 to-orange-100/50 dark:from-amber-900/20 dark:to-orange-900/20" />
                    }>
                      <SacredGeometryBackground />
                    </Suspense>

                    {/* Glass overlay for content readability */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/70 dark:from-background/70 dark:via-background/50 dark:to-background/80 backdrop-blur-[2px]" />

                    {/* Content with z-index for readability */}
                    <div className="relative z-10">
                      {/* Badge */}
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm font-semibold mb-6 shadow-lg">
                        <Star className="w-4 h-4 fill-white" />
                        World's First Pre-YTTC School
                      </div>

                      <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                        Begin Before You Begin
                      </h3>

                      <p className="text-muted-foreground mb-8 leading-relaxed">
                        The <span className="inline-flex items-center gap-1 px-3 py-1 bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 rounded-full text-sm font-semibold border border-amber-200 dark:border-amber-700">Optional Complimentary Online</span> Pre-YTTC Preparation. If you feel like you don't know you are ready for course or not,
                        this pre-YTTC is for you to be prepared & feel confident.
                      </p>

                      {/* Feature List */}
                      <div className="space-y-4">
                        {preYTTCItems.map((item, index) => (
                          <div
                            key={index}
                            className="flex items-start gap-4 p-4 bg-white/90 dark:bg-background/90 rounded-xl border border-amber-200/50 dark:border-amber-800/30 hover:border-amber-400/50 dark:hover:border-amber-600/50 transition-all duration-300 group backdrop-blur-sm shadow-sm hover:shadow-md"
                          >
                            <div className="text-2xl">{item.icon}</div>
                            <div>
                              <h4 className="font-heading font-semibold text-foreground group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                                {item.title}
                              </h4>
                              <p className="text-sm text-muted-foreground">{item.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Floating Accent */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl" />
                </div>

                {/* Right: Message */}
                <div className="lg:pl-8">
                  <div className="inline-flex items-center gap-2 text-primary mb-4">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm font-medium uppercase tracking-wider">Complimentary & Optional</span>
                  </div>

                  <h3 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                    Don't Jump Into Transformation — Be Gently Prepared For It
                  </h3>

                  <div className="space-y-4 text-muted-foreground mb-8">
                    <p>
                      At Yogagarhi, we do something different. We offer a Pre-YTTC Online Optional Complimentary
                      Preparation Program before your main training begins.
                    </p>
                    <p>
                      So when training begins, <span className="text-foreground font-medium">you don't panic</span>.
                      You arrive <span className="text-foreground font-medium">grounded</span>.
                      You don't jump into transformation — you are <span className="text-primary font-medium">gently prepared for it</span>.
                    </p>
                  </div>

                  {/* CTA Button with Premium Styling */}
                  <Button
                    onClick={() => setShowPreYTTCDialog(true)}
                    className="group relative overflow-hidden rounded-full px-8 py-6 bg-gradient-to-r from-amber-500 via-amber-600 to-orange-500 hover:from-amber-600 hover:via-amber-700 hover:to-orange-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 border-0"
                  >
                    {/* Shimmer Effect */}
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

                    <span className="relative flex items-center gap-2">
                      <GraduationCap className="w-5 h-5" />
                      Learn More About Pre-YTTC
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Post-YTTC Content */}
          <div className={`transition-all duration-500 ${activeTab === 'post'
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-8 absolute inset-0 pointer-events-none'
            }`}>
            <div className="max-w-6xl mx-auto">
              {/* Top Message */}
              <div className="text-center mb-12">
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Your Journey Continues After Graduation
                </h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Because yoga is not a one-time achievement. It is a lifelong refinement.
                </p>
              </div>

              {/* Support Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {postYTTCItems.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div
                      key={index}
                      className="group text-center"
                    >
                      {/* Hexagonal Image Container */}
                      <div className="relative mx-auto mb-6 w-40 h-40">
                        {/* Animated Ring */}
                        <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/20 group-hover:border-primary/40 group-hover:rotate-180 transition-all duration-1000" />

                        {/* Image */}
                        <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-background shadow-card group-hover:shadow-elevated transition-all duration-300">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          {/* Overlay on Hover */}
                          <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <IconComponent className="w-8 h-8 text-white" />
                          </div>
                        </div>

                        {/* Icon Badge */}
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-md">
                          <IconComponent className="w-5 h-5 text-primary-foreground" />
                        </div>
                      </div>

                      {/* Title */}
                      <h4 className="font-heading text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {item.title}
                      </h4>

                      {/* Description */}
                      <p className="text-muted-foreground text-sm leading-relaxed px-2">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Highlight */}
              <div className="mt-16 text-center">
                <div className="inline-flex flex-wrap justify-center gap-4 text-sm">
                  {[
                    "Lifetime Course Repetition",
                    "Assistant Teaching Opportunities",
                    "Global Alumni Network"
                  ].map((item, index) => (
                    <span
                      key={index}
                      className="flex items-center gap-2 px-5 py-2.5 bg-secondary/50 rounded-full border border-border hover:border-primary/30 transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Visual at Bottom */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="relative flex items-center justify-between">
            {/* Line */}
            <div className="absolute inset-x-0 top-1/2 h-0.5 bg-gradient-to-r from-primary/50 via-primary to-primary/50 -translate-y-1/2" />

            {/* Pre YTTC Point */}
            <div
              className={`relative z-10 flex flex-col items-center cursor-pointer transition-transform duration-300 ${activeTab === 'pre' ? 'scale-110' : 'hover:scale-105'}`}
              onClick={() => setActiveTab('pre')}
            >
              <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${activeTab === 'pre'
                ? 'bg-primary text-primary-foreground shadow-lg ring-4 ring-primary/20'
                : 'bg-background border-2 border-primary/40 text-primary'
                }`}>
                <GraduationCap className="w-7 h-7" />
              </div>
              <p className="mt-3 font-heading font-bold text-sm text-foreground">Pre-YTTC</p>
              <p className="text-xs text-muted-foreground">Preparation</p>
            </div>

            {/* Training Point */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground shadow-elevated ring-4 ring-primary/10">
                <Play className="w-8 h-8 ml-1" />
              </div>
              <p className="mt-3 font-heading font-bold text-sm text-foreground">YTTC Training</p>
              <p className="text-xs text-muted-foreground">21-24 Days</p>
            </div>

            {/* Post YTTC Point */}
            <div
              className={`relative z-10 flex flex-col items-center cursor-pointer transition-transform duration-300 ${activeTab === 'post' ? 'scale-110' : 'hover:scale-105'}`}
              onClick={() => setActiveTab('post')}
            >
              <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${activeTab === 'post'
                ? 'bg-primary text-primary-foreground shadow-lg ring-4 ring-primary/20'
                : 'bg-background border-2 border-primary/40 text-primary'
                }`}>
                <RefreshCw className="w-7 h-7" />
              </div>
              <p className="mt-3 font-heading font-bold text-sm text-foreground">Post-YTTC</p>
              <p className="text-xs text-muted-foreground">Lifelong Support</p>
            </div>
          </div>

          {/* Hint Text */}
          <p className="text-center mt-6 text-sm text-muted-foreground">
            👆 Click on <span className="font-semibold text-primary cursor-pointer hover:underline" onClick={() => setActiveTab('pre')}>Pre-YTTC</span> or <span className="font-semibold text-primary cursor-pointer hover:underline" onClick={() => setActiveTab('post')}>Post-YTTC</span> buttons above to explore your journey
          </p>
        </div>
      </div>

      {/* Pre-YTTC Email Form Dialog */}
      <Dialog open={showPreYTTCDialog} onOpenChange={setShowPreYTTCDialog}>
        <DialogContent className="sm:max-w-md border-0 shadow-2xl">
          {/* Decorative Header Background */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-br from-amber-500 via-amber-600 to-orange-500 rounded-t-lg" />

          {/* Close Button */}
          <button
            onClick={() => setShowPreYTTCDialog(false)}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors z-10"
          >
            <X className="w-4 h-4 text-white" />
          </button>

          <div className="relative pt-8 pb-4">
            {/* Icon */}
            <div className="mx-auto w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center mb-6 -mt-16">
              <GraduationCap className="w-10 h-10 text-amber-600" />
            </div>

            <DialogHeader className="text-center space-y-2">
              <DialogTitle className="font-heading text-2xl font-bold text-foreground">
                Get Pre-YTTC Details
              </DialogTitle>
              <p className="text-muted-foreground text-sm">
                Enter your email to receive the complete Pre-YTTC preparation guide
              </p>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              {/* Email Input */}
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-12 py-6 rounded-xl border-2 border-border focus:border-amber-500 transition-colors"
                  required
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={!isValidEmail || isSubmitting}
                className={`w-full py-6 rounded-xl font-semibold text-base transition-all duration-300 ${isValidEmail
                  ? 'bg-gradient-to-r from-amber-500 via-amber-600 to-orange-500 hover:from-amber-600 hover:via-amber-700 hover:to-orange-600 text-white shadow-lg hover:shadow-xl'
                  : 'bg-muted text-muted-foreground cursor-not-allowed'
                  }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="w-5 h-5" />
                    Send Me Pre-YTTC Guide
                  </span>
                )}
              </Button>

              {/* Privacy Note */}
              <p className="text-center text-xs text-muted-foreground">
                🔒 We respect your privacy. No spam, ever.
              </p>
            </form>
          </div>
        </DialogContent>
      </Dialog>

      {/* Thank You Dialog */}
      <Dialog open={showThankYouDialog} onOpenChange={setShowThankYouDialog}>
        <DialogContent className="sm:max-w-md text-center border-0 shadow-2xl">
          <div className="py-8 space-y-6">
            {/* Success Animation */}
            <div className="relative mx-auto w-24 h-24">
              {/* Animated Rings */}
              <div className="absolute inset-0 rounded-full border-4 border-green-200 animate-ping" />
              <div className="absolute inset-2 rounded-full border-2 border-green-300 animate-pulse" />

              {/* Check Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg">
                  <Check className="w-10 h-10 text-white" strokeWidth={3} />
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <h3 className="font-heading text-2xl font-bold text-foreground">
                Thank You! 🙏
              </h3>
              <p className="text-muted-foreground">
                Your Pre-YTTC preparation guide is on its way to your inbox.
              </p>
            </div>

            {/* Info Box */}
            <div className="bg-secondary/50 rounded-xl p-4 text-sm text-muted-foreground space-y-2">
              <p className="flex items-center justify-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                Check your email within the next few minutes
              </p>
              <p className="text-xs">
                Don't forget to check your spam folder just in case!
              </p>
            </div>

            {/* Close Button */}
            <Button
              onClick={() => setShowThankYouDialog(false)}
              className="bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full px-8 hover:shadow-lg transition-all"
            >
              Continue Exploring
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default YTTCSupportSection;
