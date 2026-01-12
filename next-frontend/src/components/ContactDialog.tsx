"use client";
import { createContext, useContext, ReactNode, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle, Phone, Mail, MessageCircle } from "lucide-react";

interface ContactDialogContextType {
  showContactDialog: boolean;
  setShowContactDialog: (show: boolean) => void;
}

const ContactDialogContext = createContext<ContactDialogContextType | undefined>(undefined);

export function useContactDialog() {
  const context = useContext(ContactDialogContext);
  if (!context) {
    throw new Error("useContactDialog must be used within a ContactDialogProvider");
  }
  return context;
}

export function ContactDialogProvider({ children }: { children: ReactNode }) {
  const [showContactDialog, setShowContactDialog] = useState(false);

  const handleOpenChange = (open: boolean) => {
    setShowContactDialog(open);
  };

  return (
    <ContactDialogContext.Provider value={{ showContactDialog, setShowContactDialog }}>
      {children}
      <Dialog open={showContactDialog} onOpenChange={handleOpenChange}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center font-heading text-2xl text-primary">
              Get Personalized Guidance
            </DialogTitle>
            <p className="text-center text-muted-foreground text-sm mt-2">
              Choose your preferred way to connect with us
            </p>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            {/* WhatsApp */}
            <a
              href="https://wa.me/+917895350563?text=Hi%2C%20I%20need%20help%20choosing%20the%20right%20YTTC%20program."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-[#25D366] hover:shadow-md transition-all duration-300 group"
              onClick={() => setShowContactDialog(false)}
            >
              <div className="w-14 h-14 bg-[#25D366]/10 rounded-full flex items-center justify-center group-hover:bg-[#25D366] transition-colors flex-shrink-0">
                <svg className="w-7 h-7 text-[#25D366] group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="font-semibold text-foreground">WhatsApp</p>
                <p className="text-sm text-muted-foreground">Chat with us instantly</p>
              </div>
              <span className="text-xs bg-[#25D366]/10 text-[#25D366] px-2 py-1 rounded-full font-medium">
                Fastest
              </span>
            </a>

            {/* Call */}
            <a
              href="tel:+917895350563"
              className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary hover:shadow-md transition-all duration-300 group"
              onClick={() => setShowContactDialog(false)}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary transition-colors flex-shrink-0">
                <Phone className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-foreground">Call Us</p>
                <p className="text-sm text-muted-foreground">+91-7895350563</p>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:yogagarhi@gmail.com?subject=Help%20Choosing%20YTTC%20Program"
              className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary hover:shadow-md transition-all duration-300 group"
              onClick={() => setShowContactDialog(false)}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary transition-colors flex-shrink-0">
                <Mail className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-foreground">Email Us</p>
                <p className="text-sm text-muted-foreground">yogagarhi@gmail.com</p>
              </div>
            </a>
          </div>

          {/* Trust Message */}
          <div className="bg-secondary/50 rounded-lg p-4 text-center">
            <p className="text-sm text-muted-foreground">
              🧘 Our team responds within <span className="font-medium text-foreground">2 hours</span> during business hours
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </ContactDialogContext.Provider>
  );
}
