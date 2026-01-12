import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import webinarBackground from "@/assets/webinar-background.jpg";

const WebinarSection = () => {
  const [showWebinarDialog, setShowWebinarDialog] = useState(false);
  const [showWebinarThankYou, setShowWebinarThankYou] = useState(false);
  const [webinarForm, setWebinarForm] = useState({
    name: '',
    email: '',
    timezone: '',
    date: '',
    time: ''
  });

  const isWebinarFormComplete = webinarForm.name && webinarForm.email && webinarForm.timezone && webinarForm.date && webinarForm.time;

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img 
          src={webinarBackground}
          alt="Yoga meditation background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/70" />
      </div>
      
      <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
          Free Orientation Webinar
        </h2>
        <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
          Join our live webinar to learn more about the training, ask questions, 
          and connect with our teachers before making your decision.
        </p>
        <Dialog open={showWebinarDialog} onOpenChange={setShowWebinarDialog}>
          <DialogTrigger asChild>
            <Button size="lg" className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90">
              Register for Free Webinar
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="font-heading text-2xl text-center">
                Register for Free Webinar
              </DialogTitle>
            </DialogHeader>
            <form onSubmit={(e) => { 
              e.preventDefault(); 
              setShowWebinarDialog(false); 
              setShowWebinarThankYou(true);
            }} className="space-y-4 pt-4">
              <p className="text-center text-muted-foreground text-sm">
                Fill in your details to join our live orientation session
              </p>
              
              {/* Name */}
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
              
              {/* Email */}
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
              
              {/* Timezone */}
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
                  <option value="UTC-12:00">(UTC-12:00) Baker Island</option>
                  <option value="UTC-11:00">(UTC-11:00) American Samoa</option>
                  <option value="UTC-10:00">(UTC-10:00) Hawaii</option>
                  <option value="UTC-09:00">(UTC-09:00) Alaska</option>
                  <option value="UTC-08:00">(UTC-08:00) Pacific Time (US & Canada)</option>
                  <option value="UTC-07:00">(UTC-07:00) Mountain Time (US & Canada)</option>
                  <option value="UTC-06:00">(UTC-06:00) Central Time (US & Canada)</option>
                  <option value="UTC-05:00">(UTC-05:00) Eastern Time (US & Canada)</option>
                  <option value="UTC-04:00">(UTC-04:00) Atlantic Time (Canada)</option>
                  <option value="UTC-03:00">(UTC-03:00) Buenos Aires, São Paulo</option>
                  <option value="UTC-02:00">(UTC-02:00) Mid-Atlantic</option>
                  <option value="UTC-01:00">(UTC-01:00) Azores</option>
                  <option value="UTC+00:00">(UTC+00:00) London, Dublin, Lisbon</option>
                  <option value="UTC+01:00">(UTC+01:00) Berlin, Paris, Rome, Madrid</option>
                  <option value="UTC+02:00">(UTC+02:00) Cairo, Athens, Istanbul</option>
                  <option value="UTC+03:00">(UTC+03:00) Moscow, Nairobi, Kuwait</option>
                  <option value="UTC+03:30">(UTC+03:30) Tehran</option>
                  <option value="UTC+04:00">(UTC+04:00) Dubai, Abu Dhabi</option>
                  <option value="UTC+04:30">(UTC+04:30) Kabul</option>
                  <option value="UTC+05:00">(UTC+05:00) Karachi, Tashkent</option>
                  <option value="UTC+05:30">(UTC+05:30) Mumbai, New Delhi, Kolkata</option>
                  <option value="UTC+05:45">(UTC+05:45) Kathmandu</option>
                  <option value="UTC+06:00">(UTC+06:00) Dhaka, Almaty</option>
                  <option value="UTC+06:30">(UTC+06:30) Yangon</option>
                  <option value="UTC+07:00">(UTC+07:00) Bangkok, Jakarta, Hanoi</option>
                  <option value="UTC+08:00">(UTC+08:00) Singapore, Kuala Lumpur, Bali</option>
                  <option value="UTC+09:00">(UTC+09:00) Tokyo, Seoul</option>
                  <option value="UTC+09:30">(UTC+09:30) Adelaide</option>
                  <option value="UTC+10:00">(UTC+10:00) Sydney, Melbourne</option>
                  <option value="UTC+11:00">(UTC+11:00) Solomon Islands</option>
                  <option value="UTC+12:00">(UTC+12:00) Auckland, Fiji</option>
                  <option value="UTC+13:00">(UTC+13:00) Samoa, Tonga</option>
                </select>
              </div>
              
              {/* Preferred Date */}
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
              
              {/* Preferred Time */}
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
                disabled={!isWebinarFormComplete}
              >
                Register Now
              </Button>
              
              <p className="text-xs text-center text-muted-foreground">
                You'll receive a confirmation email with the webinar link
              </p>
            </form>
          </DialogContent>
        </Dialog>
        
        {/* Webinar Thank You Dialog */}
        <Dialog open={showWebinarThankYou} onOpenChange={(open) => {
          setShowWebinarThankYou(open);
          if (!open) {
            setWebinarForm({ name: '', email: '', timezone: '', date: '', time: '' });
          }
        }}>
          <DialogContent className="sm:max-w-md text-center">
            <div className="py-6 space-y-6">
              <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
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
              <Button 
                onClick={() => {
                  setShowWebinarThankYou(false);
                  setWebinarForm({ name: '', email: '', timezone: '', date: '', time: '' });
                }}
                className="w-full"
              >
                Close
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default WebinarSection;
