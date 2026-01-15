"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-yoga-bali.jpg";
import Image from "next/image";

export default function Contact() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Contact Form Enquiry: ${formData.name}`,
          _autoresponder: "Namaste! Thank you for reaching out to YogaGarhi. We have received your message and will get back to you within 24 hours. Have a beautiful day!"
        }),
      });

      if (response.ok) {
        router.push('/thank-you?type=enquiry');
      } else {
        throw new Error('Failed to send enquiry');
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-80 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt="Hero Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-primary/70" />
        </div>
        <div className="relative z-10 text-center text-primary-foreground">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-xl opacity-90">
            Begin your transformation journey with us
          </p>
        </div>
      </section>

      {/* Contact Details */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold text-center text-foreground mb-12">
            Contact Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <a
              href="https://wa.me/+917895350563"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-8 bg-card rounded-2xl shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-16 h-16 bg-[#25D366]/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#25D366] transition-colors">
                <svg className="w-8 h-8 text-[#25D366] group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <p className="font-semibold text-foreground">+91-7895350563</p>
              <p className="text-sm text-muted-foreground">WhatsApp</p>
            </a>

            <a
              href="tel:+917895350563"
              className="flex flex-col items-center p-8 bg-card rounded-2xl shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                <Phone className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <p className="font-semibold text-foreground">+91-7895350563</p>
              <p className="text-sm text-muted-foreground">Call Us</p>
            </a>

            <a
              href="mailto:yogagarhi@gmail.com"
              className="flex flex-col items-center p-8 bg-card rounded-2xl shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                <Mail className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <p className="font-semibold text-foreground">yogagarhi@gmail.com</p>
              <p className="text-sm text-muted-foreground">Email Us</p>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Form Info */}
            <div className="space-y-6">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                Quick Enquiry
              </h2>
              <p className="text-lg text-muted-foreground">
                Connect with us and begin your journey of transformation. Fill out the form and we'll guide you every step of the way.
              </p>
              <div className="bg-accent/20 rounded-lg p-6">
                <p className="text-foreground font-medium">
                  We Trust The Depth Of What We Offer. If, After The First Day, You Feel This Journey Is Not Meant For You, We Will Offer A 100% Full Refund With Complete Respect.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">
                  Ds madangan kaja, Desa petak, Petak kaja, Kec. Gianyar, Kabupaten Gianyar, Bali 80515, Indonesia
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="bg-card rounded-2xl p-8 shadow-card">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name *
                  </label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full min-h-[150px]"
                    placeholder="Tell us about your interest in yoga teacher training..."
                  />
                </div>
                <Button variant="cta" size="xl" type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Submit"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
