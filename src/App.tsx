import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { EnrollmentProvider } from "@/components/EnrollmentDialog";
import { BookingProvider } from "@/components/BookingDialog";
import { QuickEnquiryProvider } from "@/components/QuickEnquiryDialog";
import { ContactDialogProvider } from "@/components/ContactDialog";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import AboutAshram from "./pages/AboutAshram";
import AboutTeachers from "./pages/AboutTeachers";
import AboutTestimonials from "./pages/AboutTestimonials";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Blog from "./pages/Blog";
import CourseDetail from "./pages/CourseDetail";
import Course200Hour from "./pages/Course200Hour";
import Course100Hour from "./pages/Course100Hour";
import Course300Hour from "./pages/Course300Hour";
import ThankYou from "./pages/ThankYou";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <EnrollmentProvider>
        <BookingProvider>
          <QuickEnquiryProvider>
            <ContactDialogProvider>
              <Toaster />
              <Sonner />
              <BrowserRouter>
                <ScrollToTop />
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/about/ashram" element={<AboutAshram />} />
                  <Route path="/about/teachers" element={<AboutTeachers />} />
                  <Route path="/about/testimonials" element={<AboutTestimonials />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/gallery" element={<Gallery />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/courses/200-hour" element={<Course200Hour />} />
                  <Route path="/courses/100-hour" element={<Course100Hour />} />
                  <Route path="/courses/300-hour" element={<Course300Hour />} />
                  <Route path="/courses/:slug" element={<CourseDetail />} />
                  <Route path="/thank-you" element={<ThankYou />} />
                  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </BrowserRouter>
            </ContactDialogProvider>
          </QuickEnquiryProvider>
        </BookingProvider>
      </EnrollmentProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
