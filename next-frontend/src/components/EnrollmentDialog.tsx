"use client";
import { createContext, useContext, ReactNode, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle, GraduationCap, ChevronDown } from "lucide-react";
import { countryCodes } from "@/constants/formOptions";

interface EnrollmentContextType {
  showEnrollDialog: boolean;
  setShowEnrollDialog: (show: boolean) => void;
  navigateToEnrollment: () => void;
}

const EnrollmentContext = createContext<EnrollmentContextType | undefined>(undefined);

export function useEnrollment() {
  const context = useContext(EnrollmentContext);
  if (!context) {
    throw new Error("useEnrollment must be used within an EnrollmentProvider");
  }
  return context;
}

const courses = [
  { value: "100hr", label: "100-Hour YTTC" },
  { value: "200hr", label: "200-Hour YTTC" },
  { value: "300hr", label: "300-Hour YTTC" },
];


export function EnrollmentProvider({ children }: { children: ReactNode }) {
  const [showEnrollDialog, setShowEnrollDialog] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+91",
    phone: "",
    country: "",
    course: "200hr",
    courseDate: "",
    accommodation: "",
    gender: "",
    referralSource: "",
    message: "",
  });

  const navigateToEnrollment = () => {
    setShowEnrollDialog(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          _subject: `New Enrollment Request from ${formData.name}`,
          _autoresponder: "Namaste! Thank you for applying to YogaGarhi. We have received your enrollment request. Our admissions team will review your application and contact you within 24 hours with the next steps. We look forward to having you with us!"
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        router.push('/thank-you?type=enrollment');
      } else {
        throw new Error('Failed to send enrollment');
      }
    } catch (error) {
      console.error("Error submitting enrollment:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again later or contact us directly.",
        variant: "destructive"
      });
      setIsLoading(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleOpenChange = (open: boolean) => {
    setShowEnrollDialog(open);
    if (!open) {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        countryCode: "+91",
        phone: "",
        country: "",
        course: "200hr",
        courseDate: "",
        accommodation: "",
        gender: "",
        referralSource: "",
        message: "",
      });
    }
  };

  const isFormValid = formData.name.trim() && formData.email.trim() && formData.phone.trim() && formData.country && formData.course && formData.courseDate && formData.accommodation && formData.gender && formData.referralSource;

  return (
    <EnrollmentContext.Provider value={{ showEnrollDialog, setShowEnrollDialog, navigateToEnrollment }}>
      {children}
      <Dialog open={showEnrollDialog} onOpenChange={handleOpenChange}>
        <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-center font-heading text-2xl text-primary flex items-center justify-center gap-2">
              {isSubmitted ? (
                "Enrollment Successful!"
              ) : (
                <>
                  <GraduationCap className="w-6 h-6" />
                  Begin Your Journey
                </>
              )}
            </DialogTitle>
            {!isSubmitted && (
              <DialogDescription className="text-center text-muted-foreground">
                Please fill in the details below to start your enrollment process.
              </DialogDescription>
            )}
          </DialogHeader>

          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center py-8 space-y-4">
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle className="w-12 h-12 text-green-600" />
              </div>
              <div className="text-center space-y-2">
                <DialogTitle className="font-medium text-foreground text-lg">
                  Welcome to the YogaGarhi family, {formData.name}!
                </DialogTitle>
                <DialogDescription className="text-muted-foreground">
                  We've received your enrollment request and will contact you within 24 hours.
                </DialogDescription>
              </div>
              <div className="bg-secondary/50 rounded-lg p-4 text-sm text-muted-foreground w-full">
                <p>📧 Confirmation sent to: <span className="font-medium text-foreground">{formData.email}</span></p>
                <p className="mt-1">📱 We'll call you at: <span className="font-medium text-foreground">{formData.countryCode} {formData.phone}</span></p>
                <p className="mt-1">🎓 Course: <span className="font-medium text-foreground">{courses.find(c => c.value === formData.course)?.label}</span></p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div className="space-y-2">
                <Label htmlFor="enroll-name">Full Name <span className="text-destructive">*</span></Label>
                <Input
                  id="enroll-name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  required
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="enroll-email">Email Address <span className="text-destructive">*</span></Label>
                <Input
                  id="enroll-email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  required
                />
              </div>

              {/* Phone with Country Code */}
              <div className="space-y-2">
                <Label htmlFor="enroll-phone">Contact / WhatsApp <span className="text-destructive">*</span></Label>
                <div className="flex gap-2">
                  <select
                    value={formData.countryCode}
                    onChange={(e) => handleChange("countryCode", e.target.value)}
                    className="w-28 px-2 py-2 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm"
                  >
                    {countryCodes.map((country) => (
                      <option key={`${country.code}-${country.country}`} value={country.code}>
                        {country.flag} {country.code}
                      </option>
                    ))}
                  </select>
                  <Input
                    id="enroll-phone"
                    type="tel"
                    placeholder="Phone number"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    className="flex-1"
                    required
                  />
                </div>
              </div>

              {/* Country */}
              <div className="space-y-2">
                <Label htmlFor="enroll-country">Country <span className="text-destructive">*</span></Label>
                <Input
                  id="enroll-country"
                  placeholder="Enter your country"
                  value={formData.country}
                  onChange={(e) => handleChange("country", e.target.value)}
                  required
                />
              </div>

              {/* Course Selection */}
              <div className="space-y-2">
                <Label htmlFor="enroll-course">Course Name <span className="text-destructive">*</span></Label>
                <div className="relative">
                  <select
                    id="enroll-course"
                    value={formData.course}
                    onChange={(e) => handleChange("course", e.target.value)}
                    className="w-full px-4 py-2.5 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring appearance-none cursor-pointer"
                    required
                  >
                    <option value="">Choose Your Yoga Course</option>
                    {courses.map((course) => (
                      <option key={course.value} value={course.value}>
                        {course.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                </div>
              </div>

              {/* Course Date */}
              <div className="space-y-2">
                <Label htmlFor="enroll-course-date">Course Date <span className="text-destructive">*</span></Label>
                <div className="relative">
                  <select
                    id="enroll-course-date"
                    value={formData.courseDate}
                    onChange={(e) => handleChange("courseDate", e.target.value)}
                    className="w-full px-4 py-2.5 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring appearance-none cursor-pointer"
                    required
                  >
                    <option value="">Choose...</option>
                    <option value="February 2026">February 2026</option>
                    <option value="March 2026">March 2026</option>
                    <option value="April 2026">April 2026</option>
                    <option value="May 2026">May 2026</option>
                    <option value="June 2026">June 2026</option>
                    <option value="July 2026">July 2026</option>
                    <option value="August 2026">August 2026</option>
                    <option value="September 2026">September 2026</option>
                    <option value="October 2026">October 2026</option>
                    <option value="November 2026">November 2026</option>
                    <option value="December 2026">December 2026</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                </div>
              </div>

              {/* Accommodation */}
              <div className="space-y-2">
                <Label htmlFor="enroll-accommodation">Accommodation <span className="text-destructive">*</span></Label>
                <div className="relative">
                  <select
                    id="enroll-accommodation"
                    value={formData.accommodation}
                    onChange={(e) => handleChange("accommodation", e.target.value)}
                    className="w-full px-4 py-2.5 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring appearance-none cursor-pointer"
                    required
                  >
                    <option value="">Select Accommodation</option>
                    <option value="Triple Sharing">Triple Sharing</option>
                    <option value="Double Sharing">Double Sharing</option>
                    <option value="Private Room">Private Room</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                </div>
              </div>

              {/* Gender */}
              <div className="space-y-2">
                <Label htmlFor="enroll-gender">Gender <span className="text-destructive">*</span></Label>
                <div className="relative">
                  <select
                    id="enroll-gender"
                    value={formData.gender}
                    onChange={(e) => handleChange("gender", e.target.value)}
                    className="w-full px-4 py-2.5 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring appearance-none cursor-pointer"
                    required
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                    <option value="Prefer not to say">Prefer not to say</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                </div>
              </div>

              {/* Referral Source */}
              <div className="space-y-2">
                <Label htmlFor="enroll-referral">From where you get to know about us? <span className="text-destructive">*</span></Label>
                <div className="relative">
                  <select
                    id="enroll-referral"
                    value={formData.referralSource}
                    onChange={(e) => handleChange("referralSource", e.target.value)}
                    className="w-full px-4 py-2.5 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring appearance-none cursor-pointer"
                    required
                  >
                    <option value="">Select...</option>
                    <option value="Google Search">Google Search</option>
                    <option value="Instagram">Instagram</option>
                    <option value="Facebook">Facebook</option>
                    <option value="YouTube">YouTube</option>
                    <option value="Friend/Family Referral">Friend/Family Referral</option>
                    <option value="Travel Blog/Website">Travel Blog/Website</option>
                    <option value="TripAdvisor">TripAdvisor</option>
                    <option value="Yoga Alliance">Yoga Alliance</option>
                    <option value="Other">Other</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="enroll-message">Message (Optional)</Label>
                <Textarea
                  id="enroll-message"
                  placeholder="Any questions or specific requirements..."
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  rows={3}
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full"
                size="lg"
                disabled={isLoading || !isFormValid}
              >
                {isLoading ? (
                  "Submitting..."
                ) : (
                  <>
                    <GraduationCap className="w-4 h-4 mr-2" />
                    Submit Enrollment Request
                  </>
                )}
              </Button>

              {/* Trust Badge */}
              <p className="text-xs text-center text-muted-foreground">
                🔒 Your information is secure. We never share your data.
              </p>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </EnrollmentContext.Provider>
  );
}
