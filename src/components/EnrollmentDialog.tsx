import { createContext, useContext, ReactNode, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle, GraduationCap, ChevronDown } from "lucide-react";

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

const countryCodes = [
  { code: "+1", flag: "🇺🇸", country: "USA" },
  { code: "+44", flag: "🇬🇧", country: "UK" },
  { code: "+91", flag: "🇮🇳", country: "India" },
  { code: "+61", flag: "🇦🇺", country: "Australia" },
  { code: "+49", flag: "🇩🇪", country: "Germany" },
  { code: "+33", flag: "🇫🇷", country: "France" },
  { code: "+62", flag: "🇮🇩", country: "Indonesia" },
  { code: "+65", flag: "🇸🇬", country: "Singapore" },
  { code: "+81", flag: "🇯🇵", country: "Japan" },
  { code: "+86", flag: "🇨🇳", country: "China" },
  { code: "+971", flag: "🇦🇪", country: "UAE" },
  { code: "+966", flag: "🇸🇦", country: "Saudi Arabia" },
  { code: "+7", flag: "🇷🇺", country: "Russia" },
  { code: "+55", flag: "🇧🇷", country: "Brazil" },
  { code: "+52", flag: "🇲🇽", country: "Mexico" },
];

export function EnrollmentProvider({ children }: { children: ReactNode }) {
  const [showEnrollDialog, setShowEnrollDialog] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+1",
    phone: "",
    course: "200hr",
    message: "",
  });

  const navigateToEnrollment = () => {
    setShowEnrollDialog(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Enrollment submitted:", formData);

    setIsLoading(false);
    setIsSubmitted(true);

    toast({
      title: "Enrollment Request Submitted!",
      description: "We'll contact you within 24 hours with next steps.",
    });

    // Reset after 3 seconds and close
    setTimeout(() => {
      setShowEnrollDialog(false);
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        countryCode: "+1",
        phone: "",
        course: "200hr",
        message: "",
      });
    }, 3000);
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
        countryCode: "+1",
        phone: "",
        course: "200hr",
        message: "",
      });
    }
  };

  const isFormValid = formData.name.trim() && formData.email.trim() && formData.phone.trim();

  return (
    <EnrollmentContext.Provider value={{ showEnrollDialog, setShowEnrollDialog, navigateToEnrollment }}>
      {children}
      <Dialog open={showEnrollDialog} onOpenChange={handleOpenChange}>
        <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-center font-heading text-2xl text-primary flex items-center justify-center gap-2">
              {isSubmitted ? (
                "Thank You!"
              ) : (
                <>
                  <GraduationCap className="w-6 h-6" />
                  Begin Your Journey
                </>
              )}
            </DialogTitle>
          </DialogHeader>

          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center py-8 space-y-4">
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle className="w-12 h-12 text-green-600" />
              </div>
              <div className="text-center space-y-2">
                <p className="font-medium text-foreground text-lg">
                  Welcome to the YogaGarhi family, {formData.name}!
                </p>
                <p className="text-muted-foreground">
                  We've received your enrollment request and will contact you within 24 hours.
                </p>
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
                      <option key={country.code} value={country.code}>
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

              {/* Course Selection */}
              <div className="space-y-2">
                <Label htmlFor="enroll-course">Select Course</Label>
                <div className="relative">
                  <select
                    id="enroll-course"
                    value={formData.course}
                    onChange={(e) => handleChange("course", e.target.value)}
                    className="w-full px-4 py-2.5 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring appearance-none cursor-pointer"
                  >
                    {courses.map((course) => (
                      <option key={course.value} value={course.value}>
                        {course.label}
                      </option>
                    ))}
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
