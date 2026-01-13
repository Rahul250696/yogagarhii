"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEnrollment } from "@/components/EnrollmentDialog";
import logo from "@/assets/yogagarhi-logo-hd-preview.png";

// Chakra/Mandala spiritual symbols
const ChakraSymbol1 = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" className="text-primary" />
    <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.5" className="text-primary" />
    <circle cx="12" cy="12" r="2" fill="currentColor" className="text-primary" />
    <path d="M12 2v4M12 18v4M2 12h4M18 12h4" stroke="currentColor" strokeWidth="1.5" className="text-primary" />
    <path d="M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="currentColor" strokeWidth="1.5" className="text-primary" />
  </svg>
);

const ChakraSymbol2 = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" className="text-primary" />
    <polygon points="12,4 18,9 18,15 12,20 6,15 6,9" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-primary" />
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" className="text-primary" />
    <circle cx="12" cy="12" r="1" fill="currentColor" className="text-primary" />
  </svg>
);

const ChakraSymbol3 = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" className="text-primary" />
    <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.5" className="text-primary" />
    <path d="M12 6l3.5 3-3.5 3-3.5-3z" stroke="currentColor" strokeWidth="1.2" className="text-primary" />
    <path d="M12 12l3.5 3-3.5 3-3.5-3z" stroke="currentColor" strokeWidth="1.2" className="text-primary" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" className="text-primary" />
  </svg>
);

// About section icons
const AshramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
    <path d="M12 2L2 9h3v11h14V9h3L12 2z" stroke="currentColor" strokeWidth="1.5" className="text-primary" />
    <circle cx="12" cy="13" r="3" stroke="currentColor" strokeWidth="1.5" className="text-primary" />
    <path d="M12 10v-2M12 18v-2" stroke="currentColor" strokeWidth="1.5" className="text-primary" />
  </svg>
);

const TeachersIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
    <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="1.5" className="text-primary" />
    <path d="M5 21v-2a4 4 0 014-4h6a4 4 0 014 4v2" stroke="currentColor" strokeWidth="1.5" className="text-primary" />
    <path d="M12 11v2M10 13h4" stroke="currentColor" strokeWidth="1.2" className="text-primary" />
  </svg>
);

const TestimonialsIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" stroke="currentColor" strokeWidth="1.5" className="text-primary" />
    <path d="M8 10h.01M12 10h.01M16 10h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-primary" />
  </svg>
);

const courses = [
  { name: "100 Hour YTTC", href: "/100-hour-yoga-teacher-training-in-bali", icon: ChakraSymbol1 },
  { name: "200 Hour YTTC", href: "/200-hour-yoga-teacher-training-in-bali", icon: ChakraSymbol2 },
  { name: "300 Hour YTTC", href: "/300-hour-yoga-teacher-training-in-bali", icon: ChakraSymbol3 },
];

const aboutItems = [
  { name: "About School", href: "/about-school", icon: AshramIcon },
  { name: "Our Teachers", href: "/teachers", icon: TeachersIcon },
  { name: "Testimonials", href: "/testimonials", icon: TestimonialsIcon },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "#", dropdown: aboutItems },
  { name: "Courses", href: "#", dropdown: courses },
  { name: "Gallery", href: "/gallery" },
  { name: "Blogs", href: "/blogs" },
  { name: "Contact", href: "/contact-us" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [showAnnouncement, setShowAnnouncement] = useState(false);
  const [announcementDismissed, setAnnouncementDismissed] = useState(false);
  const pathname = usePathname();
  const { setShowEnrollDialog } = useEnrollment();

  // Check if announcement was dismissed for this page in this session
  useEffect(() => {
    // Only access sessionStorage in the browser
    if (typeof window !== 'undefined') {
      const dismissedPaths = JSON.parse(sessionStorage.getItem('announcementDismissed') || '[]');
      if (dismissedPaths.includes(pathname)) {
        setAnnouncementDismissed(true);
      } else {
        setAnnouncementDismissed(false);
      }
    }
  }, [pathname]);

  const dismissAnnouncement = () => {
    // Only access sessionStorage in the browser
    if (typeof window !== 'undefined') {
      const dismissedPaths = JSON.parse(sessionStorage.getItem('announcementDismissed') || '[]');
      if (!dismissedPaths.includes(pathname)) {
        dismissedPaths.push(pathname);
        sessionStorage.setItem('announcementDismissed', JSON.stringify(dismissedPaths));
      }
    }
    setAnnouncementDismissed(true);
    setShowAnnouncement(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      setScrolled(window.scrollY > 20);

      // Show announcement when scrolling down (if not dismissed)
      if (isScrolled && !announcementDismissed) {
        setShowAnnouncement(true);
      } else if (!isScrolled) {
        setShowAnnouncement(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [announcementDismissed]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setOpenDropdown(null);
    setMobileOpenDropdown(null);
  }, [pathname]);

  const isActive = (href: string) => pathname === href;
  const isCoursesActive = pathname.includes("-hour-yoga-teacher-training-in-bali");
  const isAboutActive = pathname === "/about-school" || pathname === "/teachers" || pathname === "/testimonials";

  return (
    <>
      {/* Announcement Bar - Slides in from top on scroll */}
      <div
        className={`fixed top-0 left-0 right-0 bg-primary text-primary-foreground py-2.5 px-4 z-[60] transition-transform duration-500 ease-out ${showAnnouncement ? 'translate-y-0' : '-translate-y-full'
          }`}
      >
        <div className="container mx-auto flex items-center justify-center gap-2 text-xs sm:text-sm pr-8">
          <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 animate-pulse flex-shrink-0" />
          <p className="text-center leading-snug">
            <span className="font-semibold">100% Refund Guarantee:</span>
            <span className="hidden md:inline"> We Trust The Depth Of What We Offer. If, After The First Day, You Feel This Journey Is Not Meant For You, We Will Offer A Full Refund With Complete Respect.</span>
            <span className="md:hidden"> Full refund after Day 1 if this journey isn't for you.</span>
          </p>
          <button
            onClick={dismissAnnouncement}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-1.5 hover:bg-primary-foreground/20 rounded-full transition-colors"
            aria-label="Dismiss announcement"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      <header
        className={`sticky z-50 transition-all duration-500 ${showAnnouncement ? 'top-[42px]' : 'top-0'
          } ${scrolled
            ? 'bg-background/98 backdrop-blur-md shadow-md py-2'
            : 'bg-background py-4'
          }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative">
                <Image
                  src={logo}
                  alt="YogaGarhi"
                  className={`object-contain transition-all duration-300 ${scrolled ? 'h-10 w-10 sm:h-12 sm:w-12' : 'h-12 w-12 sm:h-16 sm:w-16'
                    }`}
                />
                <div className="absolute inset-0 rounded-full bg-primary/10 scale-0 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="flex flex-col">
                <span className={`font-heading font-bold text-primary tracking-wide transition-all duration-300 ${scrolled ? 'text-sm sm:text-lg' : 'text-base sm:text-xl'
                  }`}>
                  YOGAGARHI
                </span>
                <span className="text-[10px] text-muted-foreground tracking-[0.2em] uppercase hidden sm:block">
                  Transform Within
                </span>
              </div>
            </Link>

            {/* Desktop Navigation - Centered */}
            <nav className="hidden lg:flex items-center">
              <div className="flex items-center bg-secondary/30 rounded-full px-2 py-1.5">
                {navLinks.map((link, index) => {
                  const isDropdownActive = link.name === 'Courses' ? isCoursesActive :
                    link.name === 'About' ? isAboutActive : false;
                  return (
                    <div key={link.name} className="relative">
                      {link.dropdown ? (
                        <div
                          className="relative"
                          onMouseEnter={() => setOpenDropdown(link.name)}
                          onMouseLeave={() => setOpenDropdown(null)}
                        >
                          <button
                            className={`flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isDropdownActive
                              ? 'bg-primary text-primary-foreground'
                              : 'text-foreground/70 hover:text-primary hover:bg-secondary/50'
                              }`}
                          >
                            {link.name}
                            <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${openDropdown === link.name ? 'rotate-180' : ''
                              }`} />
                          </button>

                          {/* Dropdown */}
                          <div
                            className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-52 bg-card rounded-2xl shadow-xl border border-border/50 overflow-hidden transition-all duration-300 ${openDropdown === link.name
                              ? 'opacity-100 visible translate-y-0'
                              : 'opacity-0 invisible -translate-y-4'
                              }`}
                          >
                            <div className="p-2">
                              {link.dropdown.map((item) => (
                                <Link
                                  key={item.name}
                                  href={item.href}
                                  className={`block px-4 py-3 rounded-xl text-sm transition-all duration-200 ${pathname === item.href
                                    ? 'bg-primary/10 text-primary font-medium'
                                    : 'text-foreground/70 hover:bg-secondary hover:text-primary'
                                    }`}
                                >
                                  <span className="flex items-center gap-3">
                                    <item.icon />
                                    {item.name}
                                  </span>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      ) : (
                        <Link
                          href={link.href}
                          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isActive(link.href)
                            ? 'bg-primary text-primary-foreground'
                            : 'text-foreground/70 hover:text-primary hover:bg-secondary/50'
                            }`}
                        >
                          {link.name}
                        </Link>
                      )}
                    </div>
                  );
                })}
              </div>
            </nav>

            {/* Right Side - CTA */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Mobile CTA Button */}
              <Button
                variant="cta"
                size="sm"
                className="lg:hidden text-xs px-3 py-1.5"
                onClick={() => setShowEnrollDialog(true)}
              >
                Begin Journey
              </Button>

              {/* Desktop CTA Button */}
              <Button
                variant="cta"
                size="default"
                className="hidden lg:flex"
                onClick={() => setShowEnrollDialog(true)}
              >
                Begin Journey
              </Button>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 rounded-full hover:bg-secondary transition-colors"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
              >
                <div className="relative w-6 h-5 flex flex-col justify-between">
                  <span className={`w-full h-0.5 bg-foreground rounded-full transition-all duration-300 origin-left ${isOpen ? 'rotate-45 translate-x-0.5' : ''
                    }`} />
                  <span className={`w-full h-0.5 bg-foreground rounded-full transition-all duration-300 ${isOpen ? 'opacity-0 translate-x-4' : ''
                    }`} />
                  <span className={`w-full h-0.5 bg-foreground rounded-full transition-all duration-300 origin-left ${isOpen ? '-rotate-45 translate-x-0.5' : ''
                    }`} />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu - Slide Down */}
        <div
          className={`lg:hidden absolute top-full left-0 right-0 bg-background border-t border-border/50 shadow-lg transition-all duration-400 overflow-hidden ${isOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
            }`}
        >
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-1">
            {navLinks.map((link) => {
              const isMobileDropdownActive = link.name === 'Courses' ? isCoursesActive :
                link.name === 'About' ? isAboutActive : false;
              const isThisDropdownOpen = mobileOpenDropdown === link.name;

              return (
                <div key={link.name}>
                  {link.dropdown ? (
                    <>
                      <button
                        onClick={() => setMobileOpenDropdown(isThisDropdownOpen ? null : link.name)}
                        className={`w-full flex items-center justify-between py-3 px-4 rounded-xl text-base font-medium transition-all ${isMobileDropdownActive
                          ? 'bg-primary/10 text-primary'
                          : 'text-foreground/80 hover:bg-secondary'
                          }`}
                      >
                        {link.name}
                        <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isThisDropdownOpen ? 'rotate-180' : ''
                          }`} />
                      </button>
                      <div className={`overflow-hidden transition-all duration-300 ${isThisDropdownOpen ? 'max-h-48 mt-1' : 'max-h-0'
                        }`}>
                        <div className="pl-4 flex flex-col gap-1 pb-2">
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              onClick={() => setIsOpen(false)}
                              className={`flex items-center gap-3 py-2.5 px-4 rounded-lg text-sm transition-all ${pathname === item.href
                                ? 'bg-primary/10 text-primary font-medium'
                                : 'text-foreground/60 hover:text-primary hover:bg-secondary/50'
                                }`}
                            >
                              <item.icon />
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`block py-3 px-4 rounded-xl text-base font-medium transition-all ${isActive(link.href)
                        ? 'bg-primary/10 text-primary'
                        : 'text-foreground/80 hover:bg-secondary hover:text-primary'
                        }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              );
            })}

            <div className="pt-4 mt-2 border-t border-border/50">
              <Button
                variant="cta"
                size="lg"
                className="w-full"
                onClick={() => {
                  setShowEnrollDialog(true);
                  setIsOpen(false);
                }}
              >
                Begin Your Journey
              </Button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
