"use client";
import { useState, createContext, useContext, ReactNode } from "react";
import { useRouter } from "next/navigation";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Check, Clock, ChevronDown, Calendar, Phone } from "lucide-react";

interface BookingContextType {
  showBookingDialog: boolean;
  setShowBookingDialog: (show: boolean) => void;
  openBooking: (source?: string) => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function useBooking() {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error("useBooking must be used within a BookingProvider");
  }
  return context;
}

export function BookingProvider({ children }: { children: ReactNode }) {
  const [showBookingDialog, setShowBookingDialog] = useState(false);
  const [bookingSource, setBookingSource] = useState("Direct/Unknown");
  const router = useRouter();

  const openBooking = (source: string = "Direct/Unknown") => {
    setBookingSource(source);
    setShowBookingDialog(true);
  };

  return (
    <BookingContext.Provider value={{ showBookingDialog, setShowBookingDialog, openBooking }}>
      {children}
      <BookingDialogContent source={bookingSource} router={router} />
    </BookingContext.Provider>
  );
}

const timezones = [
  { label: "Pacific Time (PT)", value: "America/Los_Angeles" },
  { label: "Mountain Time (MT)", value: "America/Denver" },
  { label: "Central Time (CT)", value: "America/Chicago" },
  { label: "Eastern Time (ET)", value: "America/New_York" },
  { label: "London (GMT)", value: "Europe/London" },
  { label: "Central European (CET)", value: "Europe/Paris" },
  { label: "India (IST)", value: "Asia/Kolkata" },
  { label: "Singapore (SGT)", value: "Asia/Singapore" },
  { label: "Bali (WITA)", value: "Asia/Makassar" },
  { label: "Sydney (AEST)", value: "Australia/Sydney" },
];

function BookingDialogContent({ source, router }: { source: string, router: any }) {
  const { showBookingDialog, setShowBookingDialog } = useBooking();

  // Calendar state
  const [selectedMonth, setSelectedMonth] = useState(0);
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedTimezone, setSelectedTimezone] = useState("Asia/Makassar");
  const [showTimezoneDropdown, setShowTimezoneDropdown] = useState(false);

  // Form state
  const [step, setStep] = useState<'calendar' | 'form'>('calendar');
  const [showThankYou, setShowThankYou] = useState(false);
  const [bookingForm, setBookingForm] = useState({
    name: '',
    email: '',
    countryCode: '+1',
    phone: '',
    message: ''
  });

  const isFormComplete = bookingForm.name.trim() && bookingForm.email.trim() && bookingForm.phone.trim();
  const canProceedToForm = selectedDay && selectedTime;

  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const currentYear = 2026;

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          _subject: `New Booking Request: ${bookingForm.name}`,
          form_type: "booking_request",
          booking_date: `${selectedDay} ${months[selectedMonth]} ${currentYear}`,
          booking_time: selectedTime || "",
          timezone: selectedTimezone,
          ...bookingForm,
          _autoresponder: "Namaste! Your call with YogaGarhi has been scheduled. We look forward to connecting with you on the selected date and time to discuss your yoga journey. See you soon!"
        }),
      });

      if (response.ok) {
        router.push('/thank-you?type=booking');
      } else {
        throw new Error('Failed to send booking');
      }
    } catch (error) {
      console.error("Booking submission error:", error);
      alert("Something went wrong. Please try again or contact us directly on WhatsApp.");
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setStep('calendar');
    setSelectedDay(null);
    setSelectedTime(null);
    setBookingForm({ name: '', email: '', countryCode: '+1', phone: '', message: '' });
  };

  const handleClose = (open: boolean) => {
    setShowBookingDialog(open);
    if (!open) {
      resetForm();
    }
  };

  const handleThankYouClose = (open: boolean) => {
    setShowThankYou(open);
    if (!open) {
      resetForm();
    }
  };

  // Get days in selected month
  const daysInMonth = new Date(currentYear, selectedMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, selectedMonth, 1).getDay();

  return (
    <>
      {/* Main Booking Dialog */}
      <Dialog open={showBookingDialog} onOpenChange={handleClose}>
        <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto p-0">
          <DialogHeader className="p-6 pb-0">
            <DialogTitle className="font-heading text-2xl flex items-center gap-2">
              <Calendar className="w-6 h-6 text-primary" />
              {step === 'calendar' ? 'Book a Call with YogaGarhi' : 'Complete Your Booking'}
            </DialogTitle>
            <DialogDescription className={`text-sm text-muted-foreground mt-2 ${step === 'calendar' ? 'sr-only' : ''}`}>
              {step === 'calendar'
                ? 'Select a date and time for your call with us.'
                : `Scheduled for ${selectedDay} ${months[selectedMonth]} ${currentYear} at ${selectedTime}`
              }
            </DialogDescription>
          </DialogHeader>

          {step === 'calendar' ? (
            <div className="grid md:grid-cols-2 gap-0">
              {/* Left: Calendar */}
              <div className="bg-foreground text-primary-foreground p-6">
                {/* Logo/Icon */}
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary-foreground/10 border-2 border-primary-foreground/30 flex items-center justify-center">
                  <span className="font-heading text-xl font-bold">YG</span>
                </div>

                <h3 className="font-heading text-lg font-bold text-center mb-4">
                  Select a Date
                </h3>

                {/* Month Navigation */}
                <div className="flex items-center justify-center gap-4 mb-4">
                  <button
                    onClick={() => setSelectedMonth(prev => prev > 0 ? prev - 1 : 11)}
                    className="p-1 hover:bg-primary-foreground/10 rounded transition-colors"
                  >
                    <ChevronDown className="w-5 h-5 rotate-90" />
                  </button>
                  <span className="font-heading font-bold text-base min-w-[120px] text-center">
                    {months[selectedMonth]} {currentYear}
                  </span>
                  <button
                    onClick={() => setSelectedMonth(prev => prev < 11 ? prev + 1 : 0)}
                    className="p-1 hover:bg-primary-foreground/10 rounded transition-colors"
                  >
                    <ChevronDown className="w-5 h-5 -rotate-90" />
                  </button>
                </div>

                {/* Calendar Grid */}
                <div className="grid grid-cols-7 gap-1 text-center text-sm">
                  {["S", "M", "T", "W", "T", "F", "S"].map((day, i) => (
                    <div key={i} className="py-1.5 text-xs font-medium text-primary-foreground/60">
                      {day}
                    </div>
                  ))}
                  {/* Empty cells for offset */}
                  {Array.from({ length: firstDayOfMonth }).map((_, i) => (
                    <div key={`empty-${i}`} className="py-1.5" />
                  ))}
                  {/* Days */}
                  {Array.from({ length: daysInMonth }).map((_, i) => {
                    const day = i + 1;
                    const isSelected = selectedDay === day;
                    const today = new Date();
                    const calendarDate = new Date(currentYear, selectedMonth, day);
                    const isUpcoming = calendarDate >= new Date(today.getFullYear(), today.getMonth(), today.getDate());

                    return (
                      <button
                        key={day}
                        onClick={() => isUpcoming && setSelectedDay(day)}
                        disabled={!isUpcoming}
                        className={`py-1.5 rounded-full text-sm transition-all ${isSelected
                          ? "bg-primary text-primary-foreground"
                          : isUpcoming
                            ? "text-primary-foreground hover:bg-primary-foreground/10"
                            : "text-primary-foreground/30 cursor-not-allowed"
                          }`}
                      >
                        {day}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Right: Time Slots */}
              <div className="p-6 bg-background">
                <div className="mb-4">
                  <h4 className="font-medium text-foreground mb-2 text-sm">Meeting duration</h4>
                  <div className="bg-secondary/50 rounded-lg p-2.5 text-center text-muted-foreground text-sm">
                    30 mins
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-foreground mb-1 text-sm">What time works best?</h4>
                  {selectedDay && (
                    <p className="text-xs text-muted-foreground mb-3">
                      {selectedDay} {months[selectedMonth]} {currentYear}
                    </p>
                  )}

                  {/* Timezone Dropdown */}
                  <div className="relative mb-3">
                    <button
                      onClick={() => setShowTimezoneDropdown(!showTimezoneDropdown)}
                      className="flex items-center gap-1.5 text-primary text-xs hover:underline"
                    >
                      <Clock className="w-3.5 h-3.5" />
                      {timezones.find(tz => tz.value === selectedTimezone)?.label || selectedTimezone}
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform ${showTimezoneDropdown ? 'rotate-180' : ''}`} />
                    </button>

                    {showTimezoneDropdown && (
                      <div className="absolute top-full left-0 mt-1 w-full max-w-[200px] bg-card border border-border rounded-lg shadow-lg z-50 max-h-48 overflow-y-auto">
                        {timezones.map((tz) => (
                          <button
                            key={tz.value}
                            onClick={() => {
                              setSelectedTimezone(tz.value);
                              setShowTimezoneDropdown(false);
                            }}
                            className={`w-full text-left px-3 py-2 text-xs hover:bg-secondary transition-colors ${selectedTimezone === tz.value ? 'bg-primary/10 text-primary font-medium' : 'text-foreground'
                              }`}
                          >
                            {tz.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Time Slots */}
                  <div className="grid grid-cols-2 gap-2 max-h-[180px] overflow-y-auto pr-1">
                    {["10:00 AM", "10:30 AM", "11:00 AM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM"].map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`py-2 px-3 rounded-lg border text-center transition-all text-sm ${selectedTime === time
                          ? "border-primary bg-primary/10 text-primary font-medium"
                          : "border-border hover:border-primary/50 text-foreground"
                          }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>

                  {/* Continue Button */}
                  <Button
                    className="w-full mt-4"
                    size="lg"
                    disabled={!canProceedToForm}
                    onClick={() => setStep('form')}
                  >
                    Continue
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <div className="p-6 pt-4 space-y-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Full Name <span className="text-destructive">*</span>
                </label>
                <input
                  type="text"
                  value={bookingForm.name}
                  onChange={(e) => setBookingForm(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email Address <span className="text-destructive">*</span>
                </label>
                <input
                  type="email"
                  value={bookingForm.email}
                  onChange={(e) => setBookingForm(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Contact / WhatsApp Number <span className="text-destructive">*</span>
                </label>
                <div className="flex gap-2">
                  <select
                    value={bookingForm.countryCode}
                    onChange={(e) => setBookingForm(prev => ({ ...prev, countryCode: e.target.value }))}
                    className="w-24 px-2 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
                  >
                    <option value="+1">🇺🇸 +1</option>
                    <option value="+44">🇬🇧 +44</option>
                    <option value="+91">🇮🇳 +91</option>
                    <option value="+61">🇦🇺 +61</option>
                    <option value="+49">🇩🇪 +49</option>
                    <option value="+33">🇫🇷 +33</option>
                    <option value="+62">🇮🇩 +62</option>
                    <option value="+65">🇸🇬 +65</option>
                    <option value="+81">🇯🇵 +81</option>
                    <option value="+86">🇨🇳 +86</option>
                  </select>
                  <input
                    type="tel"
                    value={bookingForm.phone}
                    onChange={(e) => setBookingForm(prev => ({ ...prev, phone: e.target.value }))}
                    placeholder="Phone number"
                    className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message (Optional)
                </label>
                <textarea
                  value={bookingForm.message}
                  onChange={(e) => setBookingForm(prev => ({ ...prev, message: e.target.value }))}
                  placeholder="Any questions or topics you'd like to discuss..."
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                />
              </div>

              {/* Buttons */}
              <div className="flex gap-3 pt-2">
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => setStep('calendar')}
                >
                  Back
                </Button>
                <Button
                  className="flex-1"
                  size="lg"
                  disabled={!isFormComplete || isSubmitting}
                  onClick={handleSubmit}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  {isSubmitting ? "Processing..." : "Confirm Booking"}

                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Thank You Dialog */}
      <Dialog open={showThankYou} onOpenChange={handleThankYouClose}>
        <DialogContent className="sm:max-w-md text-center">
          <div className="py-6 space-y-6">
            <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
              <Check className="w-10 h-10 text-green-600" />
            </div>
            <div>
              <DialogTitle className="font-heading text-2xl font-bold text-primary mb-2">
                Call Booked! 🎉
              </DialogTitle>
              <DialogDescription className="text-muted-foreground">
                Thank you, <span className="font-medium text-foreground">{bookingForm.name}</span>! Your call has been scheduled.
              </DialogDescription>
            </div>
            <div className="bg-secondary/50 rounded-lg p-4 text-sm text-muted-foreground space-y-2">
              <p>📅 <span className="font-medium text-foreground">{selectedDay} {months[selectedMonth]} {currentYear}</span> at <span className="font-medium text-foreground">{selectedTime}</span></p>
              <p>📧 Confirmation sent to: <span className="font-medium text-foreground">{bookingForm.email}</span></p>
              <p>📱 We'll contact you at: <span className="font-medium text-foreground">{bookingForm.countryCode} {bookingForm.phone}</span></p>
            </div>
            <Button
              onClick={() => handleThankYouClose(false)}
              className="w-full"
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}