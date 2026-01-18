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
import { Send, CheckCircle } from "lucide-react";

interface QuickEnquiryContextType {
  showQuickEnquiry: boolean;
  setShowQuickEnquiry: (show: boolean) => void;
}

const QuickEnquiryContext = createContext<QuickEnquiryContextType | undefined>(undefined);

export function useQuickEnquiry() {
  const context = useContext(QuickEnquiryContext);
  if (!context) {
    throw new Error("useQuickEnquiry must be used within a QuickEnquiryProvider");
  }
  return context;
}

export function QuickEnquiryProvider({ children }: { children: ReactNode }) {
  const [showQuickEnquiry, setShowQuickEnquiry] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsLoading(false);
    setIsSubmitted(true);

    toast({
      title: "Enquiry Submitted!",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset after 3 seconds and close
    setTimeout(() => {
      setShowQuickEnquiry(false);
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }, 3000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleOpenChange = (open: boolean) => {
    setShowQuickEnquiry(open);
    if (!open) {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }
  };

  return (
    <QuickEnquiryContext.Provider value={{ showQuickEnquiry, setShowQuickEnquiry }}>
      {children}
      <Dialog open={showQuickEnquiry} onOpenChange={handleOpenChange}>
        <DialogContent className="sm:max-w-md bg-[#FDFBF7] border-none shadow-2xl rounded-3xl">
          <DialogHeader className="pt-4">
            <DialogTitle className="text-center font-heading text-4xl text-[#2D7A70] tracking-tight">
              {isSubmitted ? "Thank You!" : "Quick Enquiry"}
            </DialogTitle>
          </DialogHeader>

          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <p className="text-center text-muted-foreground">
                We've received your enquiry and will get back to you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <Label htmlFor="name" className="text-[#1A4D45] font-semibold text-sm">Full Name *</Label>
                <Input
                  id="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  required
                  className="bg-white/80 border-teal-100 focus:border-[#87BCB4] focus:ring-[#87BCB4] rounded-xl h-12"
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="email" className="text-[#1A4D45] font-semibold text-sm">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  required
                  className="bg-white/80 border-teal-100 focus:border-[#87BCB4] focus:ring-[#87BCB4] rounded-xl h-12"
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="message" className="text-[#1A4D45] font-semibold text-sm">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Any questions or specific requirements..."
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  rows={4}
                  className="bg-white/80 border-teal-100 focus:border-[#87BCB4] focus:ring-[#87BCB4] rounded-xl resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#87BCB4] hover:bg-[#76ADA5] text-white rounded-xl h-14 text-lg font-bold transition-all duration-300 shadow-md hover:shadow-lg mt-2"
                disabled={isLoading || !formData.name || !formData.email}
              >
                {isLoading ? (
                  "Submitting..."
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Submit Enquiry
                  </>
                )}
              </Button>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </QuickEnquiryContext.Provider>
  );
}
