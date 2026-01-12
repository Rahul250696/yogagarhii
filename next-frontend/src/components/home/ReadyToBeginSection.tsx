"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Phone, BookOpen, Sparkles, Video, Calendar, GraduationCap, Check } from "lucide-react";
import { useEnrollment } from "@/components/EnrollmentDialog";
import { useBooking } from "@/components/BookingDialog";
import readyToBeginBg from "@/assets/ready-to-begin-bg.jpg";

const ReadyToBeginSection = () => {
  const { setShowEnrollDialog } = useEnrollment();
  const { setShowBookingDialog } = useBooking();

  // Free Manual Dialog
  const [showManualDialog, setShowManualDialog] = useState(false);
  const [showManualThankYou, setShowManualThankYou] = useState(false);
  const [manualForm, setManualForm] = useState({ name: '', email: '' });
  const [isSubmittingManual, setIsSubmittingManual] = useState(false);

  // Webinar Dialog
  const [showWebinarDialog, setShowWebinarDialog] = useState(false);
  const [showWebinarThankYou, setShowWebinarThankYou] = useState(false);
  const [webinarForm, setWebinarForm] = useState({ name: '', email: '', timezone: '', date: '', time: '' });
  const [isSubmittingWebinar, setIsSubmittingWebinar] = useState(false);

  // Pre-YTTC Detail Dialog
  const [showPreYTTCDialog, setShowPreYTTCDialog] = useState(false);
  const [showPreYTTCThankYou, setShowPreYTTCThankYou] = useState(false);
  const [preYTTCForm, setPreYTTCForm] = useState({ name: '', email: '' });
  const [isSubmittingPreYTTC, setIsSubmittingPreYTTC] = useState(false);

  const isManualFormComplete = manualForm.name && manualForm.email;
  const isWebinarFormComplete = webinarForm.name && webinarForm.email && webinarForm.timezone && webinarForm.date && webinarForm.time;
  const isPreYTTCFormComplete = preYTTCForm.name && preYTTCForm.email;

  const handleManualSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingManual(true);
    try {
      await fetch("https://formsubmit.co/ajax/yogagarhi@gmail.com", {
        method: "POST",
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          ...manualForm,
          _subject: "New Free Manual Request",
          source: "ReadyToBegin Section - Free Manual Button",
          form_type: "manual_download"
        })
      });
      setShowManualDialog(false);
      setShowManualThankYou(true);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmittingManual(false);
    }
  };

  const handleWebinarSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingWebinar(true);
    try {
      await fetch("https://formsubmit.co/ajax/yogagarhi@gmail.com", {
        method: "POST",
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          ...webinarForm,
          _subject: "New Webinar Registration",
          source: "ReadyToBegin Section - Webinar Button",
          form_type: "webinar_registration"
        })
      });
      setShowWebinarDialog(false);
      setShowWebinarThankYou(true);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmittingWebinar(false);
    }
  };

  const handlePreYTTCSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingPreYTTC(true);
    try {
      await fetch("https://formsubmit.co/ajax/yogagarhi@gmail.com", {
        method: "POST",
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          ...preYTTCForm,
          _subject: "New Pre-YTTC Info Request",
          source: "ReadyToBegin Section - Get Pre-YTTC Detail Button",
          form_type: "pre_yttc_info"
        })
      });
      setShowPreYTTCDialog(false);
      setShowPreYTTCThankYou(true);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmittingPreYTTC(false);
    }
  };

  const scrollToQuiz = () => {
    const quizSection = document.getElementById('prakriti-section');
    if (quizSection) {
      quizSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src={readyToBeginBg}
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-foreground/85" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-primary/10 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <p className="text-center text-primary-foreground/70 uppercase tracking-widest text-sm mb-4">
          Your Journey Awaits
        </p>
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-center text-primary-foreground mb-6">
          Ready to Begin?
        </h2>
        <p className="text-center text-primary-foreground/80 max-w-2xl mx-auto mb-12">
          Take the first step towards becoming a certified yoga teacher
        </p>

        <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
            onClick={() => setShowEnrollDialog(true)}
          >
            Start Your Journey
          </Button>
          <Button
            size="lg"
            className="bg-primary-foreground/10 backdrop-blur-sm border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/20"
            onClick={() => setShowManualDialog(true)}
          >
            <BookOpen className="w-4 h-4 mr-2" />
            Get Free Manual
          </Button>
          <Button
            size="lg"
            className="bg-primary-foreground/10 backdrop-blur-sm border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/20"
            onClick={scrollToQuiz}
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Reveal Your Yogic Energy
          </Button>
          <Button
            size="lg"
            className="bg-primary-foreground/10 backdrop-blur-sm border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/20"
            onClick={() => setShowWebinarDialog(true)}
          >
            <Video className="w-4 h-4 mr-2" />
            Free Webinar
          </Button>
          <Button
            size="lg"
            className="bg-primary-foreground/10 backdrop-blur-sm border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/20"
            onClick={() => setShowBookingDialog(true)}
          >
            <Phone className="w-4 h-4 mr-2" />
            Book a Call
          </Button>
          <Button
            size="lg"
            className="bg-primary-foreground/10 backdrop-blur-sm border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/20"
            onClick={() => setShowPreYTTCDialog(true)}
          >
            <GraduationCap className="w-4 h-4 mr-2" />
            Get Pre-YTTC Detail
          </Button>
          <Button
            size="lg"
            className="bg-[#25D366] hover:bg-[#22c55e] text-white font-semibold border-0"
            asChild
          >
            <a href="https://wa.me/917895350563" target="_blank" rel="noopener noreferrer">
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
          </Button>
        </div>
      </div>

      {/* Free Manual Dialog */}
      <Dialog open={showManualDialog} onOpenChange={setShowManualDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-heading text-2xl text-center">
              Get Your Free Study Manual
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={handleManualSubmit} className="space-y-4 pt-4">
            <p className="text-center text-muted-foreground text-sm">
              Enter your details to receive our comprehensive YTTC study manual
            </p>

            <div>
              <label className="text-sm font-medium text-foreground mb-1 block">
                Full Name <span className="text-destructive">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                required
                value={manualForm.name}
                onChange={(e) => setManualForm(prev => ({ ...prev, name: e.target.value }))}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-1 block">
                Email Address <span className="text-destructive">*</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                required
                value={manualForm.email}
                onChange={(e) => setManualForm(prev => ({ ...prev, email: e.target.value }))}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <Button
              type="submit"
              className={`w-full transition-all ${isManualFormComplete ? 'bg-primary text-primary-foreground hover:bg-primary/90' : 'bg-muted text-muted-foreground cursor-not-allowed'}`}
              size="lg"
              disabled={!isManualFormComplete || isSubmittingManual}
            >
              <BookOpen className="w-4 h-4 mr-2" />
              {isSubmittingManual ? "Sending..." : "Download Free Manual"}
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      {/* Manual Thank You Dialog */}
      <Dialog open={showManualThankYou} onOpenChange={(open) => {
        setShowManualThankYou(open);
        if (!open) setManualForm({ name: '', email: '' });
      }}>
        <DialogContent className="sm:max-w-md text-center">
          <div className="py-6 space-y-6">
            <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
              <Check className="w-10 h-10 text-green-600" />
            </div>
            <div>
              <h3 className="font-heading text-2xl font-bold text-primary mb-2">
                Manual on Its Way! 📚
              </h3>
              <p className="text-muted-foreground">
                Thank you, <span className="font-medium text-foreground">{manualForm.name}</span>! Your free study manual will be sent to your email.
              </p>
            </div>
            <div className="bg-secondary/50 rounded-lg p-4 text-sm text-muted-foreground">
              📧 Sent to: <span className="font-medium text-foreground">{manualForm.email}</span>
            </div>
            <Button onClick={() => { setShowManualThankYou(false); setManualForm({ name: '', email: '' }); }} className="w-full">
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Webinar Registration Dialog */}
      <Dialog open={showWebinarDialog} onOpenChange={setShowWebinarDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-heading text-2xl text-center">
              Register for Free Webinar
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={handleWebinarSubmit} className="space-y-4 pt-4">
            <p className="text-center text-muted-foreground text-sm">
              Fill in your details to join our live orientation session
            </p>

            <div>
              <label className="text-sm font-medium text-foreground mb-1 block">
                Full Name <span className="text-destructive">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                required
                value={webinarForm.name}
                onChange={(e) => setWebinarForm(prev => ({ ...prev, name: e.target.value }))}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-1 block">
                Email Address <span className="text-destructive">*</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                required
                value={webinarForm.email}
                onChange={(e) => setWebinarForm(prev => ({ ...prev, email: e.target.value }))}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-1 block">
                Your Timezone <span className="text-destructive">*</span>
              </label>
              <select
                required
                value={webinarForm.timezone}
                onChange={(e) => setWebinarForm(prev => ({ ...prev, timezone: e.target.value }))}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Select your timezone</option>
                <option value="UTC-08:00">(UTC-08:00) Pacific Time</option>
                <option value="UTC-05:00">(UTC-05:00) Eastern Time</option>
                <option value="UTC+00:00">(UTC+00:00) London</option>
                <option value="UTC+01:00">(UTC+01:00) Berlin, Paris</option>
                <option value="UTC+05:30">(UTC+05:30) Mumbai</option>
                <option value="UTC+08:00">(UTC+08:00) Singapore, Bali</option>
                <option value="UTC+10:00">(UTC+10:00) Sydney</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-1 block">
                Preferred Date <span className="text-destructive">*</span>
              </label>
              <input
                type="date"
                required
                value={webinarForm.date}
                onChange={(e) => setWebinarForm(prev => ({ ...prev, date: e.target.value }))}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-1 block">
                Preferred Time <span className="text-destructive">*</span>
              </label>
              <select
                required
                value={webinarForm.time}
                onChange={(e) => setWebinarForm(prev => ({ ...prev, time: e.target.value }))}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Select preferred time</option>
                <option value="morning">Morning (8:00 AM - 12:00 PM)</option>
                <option value="afternoon">Afternoon (12:00 PM - 4:00 PM)</option>
                <option value="evening">Evening (4:00 PM - 8:00 PM)</option>
              </select>
            </div>

            <Button
              type="submit"
              className={`w-full transition-all ${isWebinarFormComplete ? 'bg-primary text-primary-foreground hover:bg-primary/90' : 'bg-muted text-muted-foreground cursor-not-allowed'}`}
              size="lg"
              disabled={!isWebinarFormComplete || isSubmittingWebinar}
            >
              {isSubmittingWebinar ? "Registering..." : "Register Now"}
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      {/* Webinar Thank You Dialog */}
      <Dialog open={showWebinarThankYou} onOpenChange={(open) => {
        setShowWebinarThankYou(open);
        if (!open) setWebinarForm({ name: '', email: '', timezone: '', date: '', time: '' });
      }}>
        <DialogContent className="sm:max-w-md text-center">
          <div className="py-6 space-y-6">
            <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
              <Check className="w-10 h-10 text-green-600" />
            </div>
            <div>
              <h3 className="font-heading text-2xl font-bold text-primary mb-2">
                You're Registered! 🎉
              </h3>
              <p className="text-muted-foreground">
                Thank you, <span className="font-medium text-foreground">{webinarForm.name}</span>! Your webinar registration is confirmed.
              </p>
            </div>
            <div className="bg-secondary/50 rounded-lg p-4 text-sm text-muted-foreground space-y-2">
              <p>📧 Confirmation sent to: <span className="font-medium text-foreground">{webinarForm.email}</span></p>
              <p>📅 We'll send you the webinar link before your selected date.</p>
            </div>
            <Button onClick={() => { setShowWebinarThankYou(false); setWebinarForm({ name: '', email: '', timezone: '', date: '', time: '' }); }} className="w-full">
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Pre-YTTC Detail Dialog */}
      <Dialog open={showPreYTTCDialog} onOpenChange={setShowPreYTTCDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-heading text-2xl text-center">
              Get Pre-YTTC Details
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={handlePreYTTCSubmit} className="space-y-4 pt-4">
            <p className="text-center text-muted-foreground text-sm">
              Learn about our world-first Pre-YTTC preparation program
            </p>

            <div>
              <label className="text-sm font-medium text-foreground mb-1 block">
                Full Name <span className="text-destructive">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                required
                value={preYTTCForm.name}
                onChange={(e) => setPreYTTCForm(prev => ({ ...prev, name: e.target.value }))}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-1 block">
                Email Address <span className="text-destructive">*</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                required
                value={preYTTCForm.email}
                onChange={(e) => setPreYTTCForm(prev => ({ ...prev, email: e.target.value }))}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <Button
              type="submit"
              className={`w-full transition-all ${isPreYTTCFormComplete ? 'bg-primary text-primary-foreground hover:bg-primary/90' : 'bg-muted text-muted-foreground cursor-not-allowed'}`}
              size="lg"
              disabled={!isPreYTTCFormComplete || isSubmittingPreYTTC}
            >
              <GraduationCap className="w-4 h-4 mr-2" />
              {isSubmittingPreYTTC ? "Sending..." : "Get Pre-YTTC Details"}
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      {/* Pre-YTTC Thank You Dialog */}
      <Dialog open={showPreYTTCThankYou} onOpenChange={(open) => {
        setShowPreYTTCThankYou(open);
        if (!open) setPreYTTCForm({ name: '', email: '' });
      }}>
        <DialogContent className="sm:max-w-md text-center">
          <div className="py-6 space-y-6">
            <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
              <Check className="w-10 h-10 text-green-600" />
            </div>
            <div>
              <h3 className="font-heading text-2xl font-bold text-primary mb-2">
                Details on Their Way! 🎓
              </h3>
              <p className="text-muted-foreground">
                Thank you, <span className="font-medium text-foreground">{preYTTCForm.name}</span>! Pre-YTTC program details will be sent to your email.
              </p>
            </div>
            <div className="bg-secondary/50 rounded-lg p-4 text-sm text-muted-foreground">
              📧 Sent to: <span className="font-medium text-foreground">{preYTTCForm.email}</span>
            </div>
            <Button onClick={() => { setShowPreYTTCThankYou(false); setPreYTTCForm({ name: '', email: '' }); }} className="w-full">
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ReadyToBeginSection;