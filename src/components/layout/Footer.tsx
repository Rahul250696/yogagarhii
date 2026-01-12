import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube, Phone, Mail, MapPin, Sparkles } from "lucide-react";
import logo from "@/assets/yogagarhi-logo-hd-preview.png";

const courses = [
  { name: "100 Hour YTTC", href: "/courses/100-hour" },
  { name: "200 Hour YTTC", href: "/courses/200-hour" },
  { name: "300 Hour YTTC", href: "/courses/300-hour" },
];

const explore = [
  { name: "About", href: "/about" },
  { name: "Gallery", href: "/gallery" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

// Animated Lotus SVG
const LotusIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 60" fill="currentColor">
    <path d="M50 5 C45 20, 30 25, 20 40 C35 35, 45 38, 50 55 C55 38, 65 35, 80 40 C70 25, 55 20, 50 5" opacity="0.6" />
    <path d="M50 15 C47 25, 38 28, 32 38 C40 35, 47 37, 50 48 C53 37, 60 35, 68 38 C62 28, 53 25, 50 15" opacity="0.8" />
    <path d="M50 25 C48 30, 44 32, 40 38 C45 36, 48 37, 50 42 C52 37, 55 36, 60 38 C56 32, 52 30, 50 25" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-primary to-primary/95 text-primary-foreground overflow-hidden">
      {/* Top Wave Decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-foreground/30 to-transparent" />
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary-foreground/20 rounded-full animate-pulse"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 pt-16 pb-8 relative z-10">
        {/* Top Section - Centered Brand */}
        <div className="text-center mb-16">
          <div className="inline-flex flex-col items-center">
            <div className="relative mb-4">
              <img 
                src={logo} 
                alt="YogaGarhi" 
                className="h-20 w-20 object-contain"
              />
              <div className="absolute -inset-4 border border-primary-foreground/10 rounded-full animate-spin-slow" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-wider mb-2">
              YOGAGARHI
            </h2>
            <div className="flex items-center gap-3 text-primary-foreground/60">
              <span className="w-8 h-px bg-primary-foreground/30" />
              <LotusIcon className="w-6 h-4" />
              <span className="w-8 h-px bg-primary-foreground/30" />
            </div>
            <p className="mt-4 text-primary-foreground/70 text-sm tracking-widest uppercase">
              Authentic Yoga in Bali
            </p>
          </div>
        </div>

        {/* Links in Horizontal Layout */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-12 text-sm">
          {courses.map((link, i) => (
            <Link 
              key={link.name}
              to={link.href} 
              className="text-primary-foreground/70 hover:text-primary-foreground transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary-foreground/50 group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
          <span className="text-primary-foreground/30">•</span>
          {explore.map((link) => (
            <Link 
              key={link.name}
              to={link.href} 
              className="text-primary-foreground/70 hover:text-primary-foreground transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary-foreground/50 group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </div>

        {/* Contact Row */}
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 mb-12 text-sm text-primary-foreground/70">
          <a 
            href="tel:+917895350563" 
            className="flex items-center gap-2 hover:text-primary-foreground transition-colors"
          >
            <div className="w-8 h-8 rounded-full border border-primary-foreground/20 flex items-center justify-center">
              <Phone className="h-3.5 w-3.5" />
            </div>
            <span>+91-7895350563</span>
          </a>
          <a 
            href="mailto:yogagarhi@gmail.com" 
            className="flex items-center gap-2 hover:text-primary-foreground transition-colors"
          >
            <div className="w-8 h-8 rounded-full border border-primary-foreground/20 flex items-center justify-center">
              <Mail className="h-3.5 w-3.5" />
            </div>
            <span>yogagarhi@gmail.com</span>
          </a>
          <a 
            href="https://maps.google.com/?q=Ds+madangan+kaja,+Desa+petak,+Petak+kaja,+Kec.+Gianyar,+Kabupaten+Gianyar,+Bali+80515,+Indonesia"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-primary-foreground transition-colors"
          >
            <div className="w-8 h-8 rounded-full border border-primary-foreground/20 flex items-center justify-center">
              <MapPin className="h-3.5 w-3.5" />
            </div>
            <span>Gianyar, Bali</span>
          </a>
        </div>

        {/* Social Links - Unique Design */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <span className="w-12 h-px bg-gradient-to-r from-transparent to-primary-foreground/20" />
          <a 
            href="https://instagram.com/yogagarhi" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group relative p-3"
            aria-label="Instagram"
          >
            <div className="absolute inset-0 border border-primary-foreground/20 rotate-45 group-hover:rotate-[135deg] group-hover:border-primary-foreground/40 transition-all duration-500" />
            <Instagram className="h-5 w-5 relative z-10" />
          </a>
          <a 
            href="https://facebook.com/yogagarhi" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group relative p-3"
            aria-label="Facebook"
          >
            <div className="absolute inset-0 border border-primary-foreground/20 rotate-45 group-hover:rotate-[135deg] group-hover:border-primary-foreground/40 transition-all duration-500" />
            <Facebook className="h-5 w-5 relative z-10" />
          </a>
          <a 
            href="https://youtube.com/@yogagarhi" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group relative p-3"
            aria-label="YouTube"
          >
            <div className="absolute inset-0 border border-primary-foreground/20 rotate-45 group-hover:rotate-[135deg] group-hover:border-primary-foreground/40 transition-all duration-500" />
            <Youtube className="h-5 w-5 relative z-10" />
          </a>
          <span className="w-12 h-px bg-gradient-to-l from-transparent to-primary-foreground/20" />
        </div>

        {/* Sanskrit Quote */}
        <div className="text-center mb-8">
          <p className="font-heading text-lg md:text-xl text-primary-foreground/40 italic tracking-wide">
            "योगश्चित्तवृत्तिनिरोधः"
          </p>
          <p className="text-xs text-primary-foreground/30 mt-1 tracking-widest">
            Yoga is the cessation of the fluctuations of the mind
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-primary-foreground/40">
            <p>© {new Date().getFullYear()} YogaGarhi. All rights reserved.</p>
            <div className="flex items-center gap-1">
              <Sparkles className="h-3 w-3" />
              <span>Transforming lives through yoga</span>
              <Sparkles className="h-3 w-3" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
