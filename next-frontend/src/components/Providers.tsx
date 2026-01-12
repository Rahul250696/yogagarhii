"use client";

import React, { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { EnrollmentProvider } from "@/components/EnrollmentDialog";
import { BookingProvider } from "@/components/BookingDialog";
import { QuickEnquiryProvider } from "@/components/QuickEnquiryDialog";
import { ContactDialogProvider } from "@/components/ContactDialog";
import ScrollToTop from "@/components/ScrollToTop";

export function Providers({ children }: { children: React.ReactNode }) {
    const [queryClient] = useState(() => new QueryClient());

    return (
        <QueryClientProvider client={queryClient}>
            <TooltipProvider>
                <EnrollmentProvider>
                    <BookingProvider>
                        <QuickEnquiryProvider>
                            <ContactDialogProvider>
                                <ScrollToTop />
                                {children}
                                <Toaster />
                                <Sonner />
                            </ContactDialogProvider>
                        </QuickEnquiryProvider>
                    </BookingProvider>
                </EnrollmentProvider>
            </TooltipProvider>
        </QueryClientProvider>
    );
}
