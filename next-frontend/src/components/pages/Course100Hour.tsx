"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/layout/Layout";
import SEO, { generateCourseSchema } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useBooking } from "@/components/BookingDialog";
import { useEnrollment } from "@/components/EnrollmentDialog";
import {
  Award, Users, Leaf, MapPin, BookOpen, Heart,
  Check, X, ChevronDown, Play, Download, Phone,
  Calendar, Clock, Star, Instagram, MessageCircle, Sparkles,
  GraduationCap, Repeat, Mountain, Handshake, Zap, Layers,
  UserCheck, Brain, BookMarked, UsersRound, RefreshCw,
  Salad, Coffee, Apple, Soup, UtensilsCrossed, Wheat, Milk,
  Cherry, Sprout, CircleDot, Sun, MessageSquare, Mail,
  Wifi, Droplets, Wind
} from "lucide-react";
import RoomCard from "./RoomCard";
import heroImage from "@/assets/hero-yoga-bali.jpg";
import activityAyurveda from "@/assets/activity-ayurveda.jpg";
import activitySoundHealing from "@/assets/activity-sound-healing.jpg";
import activityWaterfall from "@/assets/activity-waterfall.jpg";
import webinarBackground from "@/assets/webinar-background.jpg";
import yogaAllianceBg from "@/assets/yoga-alliance-bg.jpg";
import yaRyt200 from "@/assets/ya-ryt-200.png";
import yaRys100 from "@/assets/ya-rys-100.png";
import yaRys200 from "@/assets/ya-rys-200.jpg";
import yaAllCertifications from "@/assets/ya-all-certifications.jpg";
import WhyFeatureItem from "@/components/home/WhyFeatureItem";
import StudentStoriesSection from "@/components/home/StudentStoriesSection";
import apartKecakDance from "@/assets/apart/kecak-dance.jpg";
import apartYogaAllianceGraduates from "@/assets/apart/yoga-alliance-graduates.jpg";
import apartCeremony from "@/assets/apart/ceremony.jpg";
import apartRiceFieldTrek from "@/assets/apart/rice-field-trek.jpg";

// Workshop Images
import workshopAyurveda from "@/assets/workshops/workshop-ayurveda.png";
import workshopArmBalance from "@/assets/workshops/workshop-arm-balance.jpg";
import workshopHandstand from "@/assets/workshops/workshop-handstand.jpg";
import workshopBalinese from "@/assets/workshops/workshop-balinese.png";
import workshopSoundHealing from "@/assets/workshops/workshop-sound-healing.jpg";
import workshopSoundHealingUpdate from "@/assets/workshops/workshop-sound-healing-update.png";
import apartChildPose from "@/assets/apart/child-pose.jpg";
import workshopBhakti from "@/assets/workshops/workshop-bhakti.jpg";

// Triple Sharing room images
import tripleBalcony from "@/assets/rooms/triple-balcony.jpg";
import tripleBathroom from "@/assets/rooms/triple-bathroom.jpg";
import tripleBedroom1 from "@/assets/rooms/triple-bedroom-1.jpg";
import tripleBedroom2 from "@/assets/rooms/triple-bedroom-2.jpg";
import tripleBedroom3 from "@/assets/rooms/triple-bedroom-3.jpg";

// Double Sharing room images
import doubleBedroom1 from "@/assets/rooms/double-bedroom-1.jpg";
import doubleBedroom2 from "@/assets/rooms/double-bedroom-2.jpg";
import doubleBedroom3 from "@/assets/rooms/double-bedroom-3.jpg";
import doubleBedroom4 from "@/assets/rooms/double-bedroom-4.jpg";
import doubleBalcony from "@/assets/rooms/double-balcony.jpg";

// Private Room images
import privateBedroom1 from "@/assets/rooms/private-bedroom-1.jpg";
import privateBedroom2 from "@/assets/rooms/private-bedroom-2.jpg";
import privateBedroom3 from "@/assets/rooms/private-bedroom-3.jpg";
import privateBathroom from "@/assets/rooms/private-bathroom.jpg";
import privateBalcony from "@/assets/rooms/private-balcony.jpg";

// Newly uploaded Private Room images
import privateNew1 from "@/assets/rooms/private-new-1.jpg";
import privateNew2 from "@/assets/rooms/private-new-2.png";
import privateNew3 from "@/assets/rooms/private-new-3.png";
import privateNew4 from "@/assets/rooms/private-new-4.png";
import privateNew5 from "@/assets/rooms/private-new-5.png";

// Custom scroll-aware header component


// Review Card Component with Read More functionality
function ReviewCard({ review }: { review: { name: string; location: string; avatar: string; rating: number; date: string; text: string } }) {
  const [expanded, setExpanded] = useState(false);
  const isLongText = review.text.length > 120;
  const displayText = expanded || !isLongText ? review.text : review.text.slice(0, 120) + "...";

  return (
    <div className="bg-card p-6 rounded-xl border border-border hover:shadow-card transition-shadow duration-300">
      {/* Header */}
      <div className="flex items-start gap-3 mb-4">
        {/* Avatar */}
        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
          <span className="text-sm font-semibold text-primary">{review.avatar}</span>
        </div>

        {/* Name & Location */}
        <div className="flex-1 min-w-0">
          <h4 className="font-medium text-foreground text-sm">{review.name}</h4>
          <p className="text-xs text-muted-foreground">{review.location}</p>
        </div>

        {/* Google Icon */}
        <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
        </svg>
      </div>

      {/* Rating & Date */}
      <div className="flex items-center gap-2 mb-3">
        <div className="flex gap-0.5">
          {Array.from({ length: review.rating }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
          ))}
        </div>
        <span className="text-xs text-muted-foreground">{review.date}</span>
      </div>

      {/* Review Text */}
      <p className="text-sm text-muted-foreground leading-relaxed">
        {displayText}
      </p>
      {isLongText && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-sm text-primary hover:text-primary/80 font-medium mt-2 transition-colors"
        >
          {expanded ? "Read less" : "Read more"}
        </button>
      )}
    </div>
  );
}

// Icon Highlights Section
const iconHighlights = [
  { icon: Award, title: "Yoga Alliance Certified", subtitle: "RYS 100" },
  { icon: Leaf, title: "Multi-Style Yoga", subtitle: "Authentic Teaching" },
  { icon: Heart, title: "Prakriti-Based", subtitle: "Personalized Learning" },
  { icon: Users, title: "Small Batch", subtitle: "8-10 Students" },
  { icon: BookOpen, title: "Traditional + Practical", subtitle: "Complete System" },
  { icon: MapPin, title: "Bali Immersion", subtitle: "12-Day Retreat" },
];

// What Sets Apart Data
const whatSetsApart = [
  {
    title: "Teaching Depth Beyond Certification",
    description: "We don't teach yoga to create instructors. We teach yoga to awaken teachers. There is a difference. Instructors repeat. Teachers respond. Our curriculum focuses on inner development alongside technical skill.",
  },
  {
    title: "Lineage & Sincerity",
    description: "Our approach is rooted in authentic Himalayan yogic traditions. Each technique taught has been practiced for generations. We honor this lineage not as nostalgia, but as living wisdom.",
  },
  {
    title: "The Shiv-Shakti Sadhana",
    description: "Beyond asana and pranayama, students are introduced to the subtle practices of Shiv-Shakti Sadhana — awakening the inner masculine and feminine energies that govern transformation.",
  },
  {
    title: "Beyond the Certification Mindset",
    description: "Many come for a certificate. We prepare you for a calling. The certificate is a formality. The transformation is the reality. Our graduates don't just teach yoga — they live it.",
  },
];

// Daily Schedule
const dailySchedule = [
  { time: "6:00 AM", activity: "Wake Up & Morning Cleansing" },
  { time: "6:30 AM", activity: "Pranayama & Meditation" },
  { time: "7:30 AM", activity: "Asana Practice (Hatha/Ashtanga)" },
  { time: "9:00 AM", activity: "Breakfast" },
  { time: "10:00 AM", activity: "Yoga Philosophy / Anatomy" },
  { time: "12:00 PM", activity: "Lunch & Rest" },
  { time: "3:00 PM", activity: "Teaching Methodology" },
  { time: "4:30 PM", activity: "Alignment & Adjustments" },
  { time: "6:00 PM", activity: "Evening Practice" },
  { time: "7:30 PM", activity: "Dinner" },
  { time: "9:00 PM", activity: "Self-Study / Lights Off" },
];

// Course Curriculum
const curriculum = [
  {
    category: "Asana & Alignment",
    items: [
      "Ashtanga Yoga Primary Series",
      "Hatha Yoga & Vinyasa Flow",
      "Iyengar Alignment Principles",
      "Standing, Seated, Backbends, Inversions",
      "Arm Balancing Workshop",
    ],
  },
  {
    category: "Pranayama & Breath",
    items: [
      "Complete Breathing Techniques",
      "Shatkarma Cleansing Practices",
      "Bandhas & Energy Locks",
      "Breath Integration with Asana",
      "Advanced Kumbhaka Practice",
    ],
  },
  {
    category: "Philosophy & Self-Study",
    items: [
      "Yoga Sutras of Patanjali",
      "Eight Limbs of Ashtanga Yoga",
      "Chakras & Nadis System",
      "Introduction to Vedas",
      "Lives of Great Yogis",
    ],
  },
  {
    category: "Teaching & Methodology",
    items: [
      "Class Sequencing Principles",
      "Verbal & Hands-on Adjustments",
      "Working with Different Bodies",
      "Voice & Communication",
      "Practicum & Evaluations",
    ],
  },
  {
    category: "Meditation & Inner Practices",
    items: [
      "Multiple Meditation Techniques",
      "Mantra Chanting & Sacred Sound",
      "Mudras & Gestures",
      "Trataka & Concentration",
      "Silence Practices",
    ],
  },
];

// Inclusions/Exclusions
const inclusions = [
  "Clean and comfortable room",
  "Attached bathroom with hot water",
  "Air conditioning / fan",
  "Free Wi-Fi access",
  "Three healthy vegetarian meals daily",
  "Herbal teas and drinking water",
  "Study material (manuals, notebooks, pens)",
  "Yoga mats and props",
  "Outdoor excursions / weekend trips",
  "Airport pickup (nearest airport)",
  "24/7 campus support team",
  "Certification upon completion",
  "Balinese massage",
  "Balinese dance show",
  "Rice field trek",
  "Pre-TTC preparation",
  "Arm balance workshop",
  "Ayurveda workshop",
  "Course repetition included",
  "Yogagarhi 35+ creative sequencing book",
];

const exclusions = [
  "Airfare and travel expenses",
  "Visa and travel insurance",
  "Airport drop",
  "Laundry service",
  "Personal shopping & extra activities",
];

// What You Will Receive
const whatYouWillReceive = [
  {
    title: "Multi Style Yoga Training",
    description: "Learn yoga in its authentic, time-tested way. Our teachers preserve the wisdom of yogic tradition.",
    icon: Leaf,
    image: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=400&h=500&fit=crop"
  },
  {
    title: "Yoga Alliance Certified",
    description: "Receive globally recognized certification. Begin teaching yoga with confidence worldwide.",
    icon: Award,
    image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=400&h=500&fit=crop"
  },
  {
    title: "Peaceful Bali Surroundings",
    description: "Experience yoga in the lap of nature. Calm beaches and greenery deepen your practice.",
    icon: Mountain,
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&h=500&fit=crop"
  },
  {
    title: "Outdoor Excursions",
    description: "Explore temples, beaches, and nature walks. Balance learning with adventure and culture.",
    icon: MapPin,
    image: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=400&h=500&fit=crop"
  },
  {
    title: "Small Batch Sizes",
    description: "Get personal attention and guidance. Every student's growth matters to us.",
    icon: Users,
    image: "https://images.unsplash.com/photo-1588286840104-8957b019727f?w=400&h=500&fit=crop"
  },
  {
    title: "Supportive Community",
    description: "Be part of a warm and positive family. Grow together in a caring environment.",
    icon: Heart,
    image: "https://images.unsplash.com/photo-1529693662653-9d480530a697?w=400&h=500&fit=crop"
  },
  {
    title: "Balinese Massage",
    description: "Traditional Indonesian therapy to relieve muscle tension. Promotes deep relaxation and holistic healing.",
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=400&h=500&fit=crop"
  },
  {
    title: "Balinese Dance Performance",
    description: "Ancient, dynamic and highly expressive dance form that reflects Bali's rich cultural heritage.",
    icon: Star,
    image: "https://images.unsplash.com/photo-1518611507436-f9221403cca2?w=400&h=500&fit=crop"
  },
  {
    title: "Ayurvedic Meals",
    description: "Enjoy sattvic and healthy meals supporting your practice.",
    icon: Heart,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=500&fit=crop"
  },
  {
    title: "Meditation Practice",
    description: "Deepen inner peace and mindfulness with guided sessions.",
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=500&fit=crop"
  },
  {
    title: "Experienced Instructors",
    description: "Learn from certified teachers with years of expertise.",
    icon: GraduationCap,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=500&fit=crop"
  },
  {
    title: "Yoga Lifestyle",
    description: "Adopt the yogic way of living for body, mind, and spirit.",
    icon: Leaf,
    image: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=400&h=500&fit=crop"
  },
];

// Workshops
const workshops = [
  {
    title: "Ayurveda Fundamentals",
    description: "Understand your unique constitution (Prakriti) and learn how to balance your doshas through diet, lifestyle, and yogic practices for optimal health.",
    image: workshopAyurveda
  },
  {
    title: "Arm Balance Mastery",
    description: "Build the strength, technique and confidence needed to master arm balances like Crow, Side Crow, and Flying Pigeon with proper alignment.",
    image: workshopArmBalance
  },
  {
    title: "Handstand Workshop",
    description: "Overcome fear and find your center through progressive drills, wall work, and partner exercises to achieve a confident freestanding handstand.",
    image: workshopHandstand
  },
  {
    title: "Yin Yoga Deep Stretch",
    description: "Access deeper connective tissue layers through long-held passive poses. Release tension, increase flexibility, and cultivate inner stillness.",
    image: apartChildPose
  },
  {
    title: "Sound Healing Session",
    description: "Experience the transformative power of Tibetan singing bowls, gongs, and mantras. Vibration therapy for deep relaxation and inner calm.",
    image: workshopSoundHealingUpdate
  },
  {
    title: "Bhakti Yoga & Kirtan",
    description: "Open your heart through devotional practice. Learn sacred chants, mantras, and kirtan to connect with the spiritual essence of yoga.",
    image: workshopBhakti
  },
];

// Excursions
const excursions = [
  {
    title: "Balinese Dance Performance",
    description: "Witness the ancient art of Balinese dance — a mesmerizing display of grace, storytelling, and spiritual devotion passed down through generations.",
    image: apartKecakDance,
    icon: Star
  },
  {
    title: "Rice Field Trek",
    description: "Walk through Ubud's iconic terraced rice paddies. Experience the harmony of nature, traditional farming, and the peaceful rhythm of rural Bali.",
    image: apartRiceFieldTrek,
    icon: Leaf
  },
  {
    title: "Sacred Waterfall Visit",
    description: "Journey to a sacred waterfall for a traditional cleansing ritual. Let the pure waters wash away what no longer serves you.",
    image: "https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?w=600&h=600&fit=crop",
    icon: Sparkles
  },
];


// Sattvic Food Menu
const foodMenu = [
  {
    meal: "Breakfast",
    time: "7:00 AM",
    icon: Coffee,
    items: ["Fresh tropical fruits", "Homemade granola with coconut yogurt", "Herbal teas & fresh juices", "Balinese rice porridge"],
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=600&h=400&fit=crop"
  },
  {
    meal: "Lunch",
    time: "12:30 PM",
    icon: Salad,
    items: ["Nourishing Buddha bowls", "Tempeh & tofu preparations", "Fresh garden salads", "Traditional Balinese vegetables"],
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400&fit=crop"
  },
  {
    meal: "Dinner",
    time: "6:30 PM",
    icon: Soup,
    items: ["Light sattvic soups", "Wholesome grain dishes", "Steamed vegetables", "Healing Ayurvedic preparations"],
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&h=400&fit=crop"
  },
];

// Food Philosophy Points
const foodPhilosophy = [
  { icon: Leaf, title: "Nutrition & Healthy Food", description: "Pure vegetarian & vegan cuisine" },
  { icon: Heart, title: "Sattvic Principles", description: "Food that promotes clarity & peace" },
  { icon: Apple, title: "Locally Sourced", description: "Fresh ingredients from Bali farms" },
  { icon: Sparkles, title: "Ayurvedic Balance", description: "Meals designed for your dosha" },
];


// Dietary Options
const dietaryOptions = [
  { icon: Leaf, name: "Vegan", description: "100% plant-based meals" },
  { icon: Milk, name: "Lactose Free", description: "Dairy-free alternatives" },
  { icon: Wheat, name: "Gluten Free", description: "No wheat or gluten" },
  { icon: Sprout, name: "Raw Food", description: "Living food options" },
  { icon: CircleDot, name: "Organic", description: "Certified organic produce" },
  { icon: Cherry, name: "Fruitarian", description: "Fruit-based meals" },
  { icon: Sun, name: "Yogic Diet", description: "Traditional sattvic food" },
  { icon: MessageSquare, name: "Custom Request", description: "Other diets on request" },
];

// Upcoming Dates
const upcomingDates = [
  { date: "1 Feb - 12 Feb 2026", spotsLeft: 8, earlyBirdSaving: "$150" },
  { date: "1 Mar - 12 Mar 2026", spotsLeft: 8, earlyBirdSaving: "$150" },
  { date: "1 Apr - 12 Apr 2026", spotsLeft: 8, earlyBirdSaving: "$150" },
  { date: "1 May - 12 May 2026", spotsLeft: 7, earlyBirdSaving: "$150" },
  { date: "1 Jun - 12 Jun 2026", spotsLeft: 8, earlyBirdSaving: "$150" },
  { date: "1 Jul - 12 Jul 2026", spotsLeft: 8, earlyBirdSaving: "$150" },
  { date: "1 Aug - 12 Aug 2026", spotsLeft: 8, earlyBirdSaving: "$150" },
  { date: "1 Sept - 12 Sept 2026", spotsLeft: 7, earlyBirdSaving: "$150" },
  { date: "1 Oct - 12 Oct 2026", spotsLeft: 8, earlyBirdSaving: "$150" },
  { date: "1 Nov - 12 Nov 2026", spotsLeft: 8, earlyBirdSaving: "$150" },
  { date: "1 Dec - 12 Dec 2026", spotsLeft: 6, earlyBirdSaving: "$150" },
];


// Yogic Energy Quiz Questions
const quizQuestions = [
  {
    question: "How does your body typically feel in the morning?",
    options: ["Light and energetic", "Steady and grounded", "Heavy and slow to start"],
  },
  {
    question: "What describes your mental pattern during stress?",
    options: ["Racing thoughts, anxiety", "Irritability, intensity", "Withdrawal, lethargy"],
  },
  {
    question: "How would you describe your natural energy rhythm?",
    options: ["Variable, creative bursts", "Focused, consistent drive", "Calm, steady, enduring"],
  },
  {
    question: "What is your relationship with heat?",
    options: ["Prefer warmth, dislike cold", "Run warm, seek cooling", "Neutral, adaptable"],
  },
  {
    question: "How do you typically process emotions?",
    options: ["Quick to feel, quick to release", "Intense, lasting impressions", "Deep, slow processing"],
  },
  {
    question: "What describes your lifestyle tendency?",
    options: ["Movement, change, variety", "Achievement, structure, goals", "Routine, stability, comfort"],
  },
];

export default function Course100Hour() {
  const { setShowBookingDialog: openBookingDialog } = useBooking();
  const { setShowEnrollDialog: openEnrollDialog } = useEnrollment();
  const [showCompactHeader, setShowCompactHeader] = useState(false);
  const [showQuizDialog, setShowQuizDialog] = useState(false);
  const [showQuizThankYou, setShowQuizThankYou] = useState(false);
  const [showManualDialog, setShowManualDialog] = useState(false);
  const [showManualThankYou, setShowManualThankYou] = useState(false);
  const [showSyllabusDialog, setShowSyllabusDialog] = useState(false);
  const [showSyllabusThankYou, setShowSyllabusThankYou] = useState(false);
  const [syllabusEmail, setSyllabusEmail] = useState("");
  const [syllabusEmailError, setSyllabusEmailError] = useState("");
  const [selectedSyllabusCourse, setSelectedSyllabusCourse] = useState("100");
  const [showWebinarThankYou, setShowWebinarThankYou] = useState(false);
  const [showPreYTTCDialog, setShowPreYTTCDialog] = useState(false);
  const [showPreYTTCThankYou, setShowPreYTTCThankYou] = useState(false);
  const [preYTTCForm, setPreYTTCForm] = useState({ name: '', email: '' });
  const [quizStep, setQuizStep] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<string[]>([]);
  const [email, setEmail] = useState("");
  const [manualForm, setManualForm] = useState({ name: '', email: '' });
  const [manualEmail, setManualEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [manualEmailError, setManualEmailError] = useState("");
  const [showWelcomeExpanded, setShowWelcomeExpanded] = useState(false);
  const [activeInclusionTab, setActiveInclusionTab] = useState<'inclusions' | 'exclusions'>('inclusions');
  const [showWebinarDialog, setShowWebinarDialog] = useState(false);
  const [webinarForm, setWebinarForm] = useState({
    name: '',
    email: '',
    timezone: '',
    date: '',
    time: ''
  });
  const [selectedMonth, setSelectedMonth] = useState(0);
  const [selectedDay, setSelectedDay] = useState<number | null>(13);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [showBookingDialog, setShowBookingDialog] = useState(false);
  const [showEnrollDialog, setShowEnrollDialog] = useState(false);
  const [showQuickEnquiryDialog, setShowQuickEnquiryDialog] = useState(false);
  const [quickEnquiryForm, setQuickEnquiryForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [bookingForm, setBookingForm] = useState({
    name: '',
    countryCode: '+91',
    contact: '',
    email: '',
    course: ''
  });
  const [enrollForm, setEnrollForm] = useState({
    name: '',
    email: '',
    countryCode: '+91',
    contact: '',
    courseName: '',
    courseDate: '',
    accommodation: '',
    gender: '',
    country: '',
    source: '',
    message: ''
  });

  const isEnrollFormComplete = enrollForm.name && enrollForm.email && enrollForm.contact &&
    enrollForm.courseName && enrollForm.courseDate && enrollForm.accommodation &&
    enrollForm.gender && enrollForm.country && enrollForm.source;

  const courseDates = [
    "December, 2025", "January, 2026", "February, 2026", "March, 2026", "April, 2026",
    "May, 2026", "June, 2026", "July, 2026", "August, 2026", "September, 2026",
    "October, 2026", "November, 2026", "December, 2026", "January, 2027", "February, 2027",
    "March, 2027", "April, 2027", "May, 2027", "June, 2027", "July, 2027",
    "August, 2027", "September, 2027", "October, 2027", "November, 2027", "December, 2027"
  ];
  const [selectedTimezone, setSelectedTimezone] = useState('UTC +05:30 New Delhi, Mumbai');
  const [showTimezoneDropdown, setShowTimezoneDropdown] = useState(false);
  const [isFoodSectionOpen, setIsFoodSectionOpen] = useState(false);
  const [isAccommodationOpen, setIsAccommodationOpen] = useState(true);
  const foodTriggerRef = useRef<HTMLDivElement>(null);

  // Handle food section toggle with scroll position preservation
  const handleFoodSectionToggle = (open: boolean) => {
    setIsFoodSectionOpen(open);

    // If opening, scroll to the trigger after a brief delay for content to render
    if (open) {
      setTimeout(() => {
        if (foodTriggerRef.current) {
          const yOffset = -100;
          const element = foodTriggerRef.current;
          const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100);
    }
  };

  // Scroll to top functionality
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const timezones = [
    { value: 'UTC -12:00 Baker Island', label: 'UTC -12:00 Baker Island' },
    { value: 'UTC -11:00 Pago Pago', label: 'UTC -11:00 Pago Pago' },
    { value: 'UTC -10:00 Honolulu', label: 'UTC -10:00 Honolulu' },
    { value: 'UTC -09:00 Anchorage', label: 'UTC -09:00 Anchorage' },
    { value: 'UTC -08:00 Los Angeles, Vancouver', label: 'UTC -08:00 Los Angeles, Vancouver' },
    { value: 'UTC -07:00 Denver, Phoenix', label: 'UTC -07:00 Denver, Phoenix' },
    { value: 'UTC -06:00 Chicago, Mexico City', label: 'UTC -06:00 Chicago, Mexico City' },
    { value: 'UTC -05:00 New York, Toronto', label: 'UTC -05:00 New York, Toronto' },
    { value: 'UTC -04:00 Santiago, Caracas', label: 'UTC -04:00 Santiago, Caracas' },
    { value: 'UTC -03:00 São Paulo, Buenos Aires', label: 'UTC -03:00 São Paulo, Buenos Aires' },
    { value: 'UTC -02:00 Mid-Atlantic', label: 'UTC -02:00 Mid-Atlantic' },
    { value: 'UTC -01:00 Azores, Cape Verde', label: 'UTC -01:00 Azores, Cape Verde' },
    { value: 'UTC +00:00 London, Dublin, Lisbon', label: 'UTC +00:00 London, Dublin, Lisbon' },
    { value: 'UTC +01:00 Paris, Berlin, Rome', label: 'UTC +01:00 Paris, Berlin, Rome' },
    { value: 'UTC +02:00 Cairo, Johannesburg', label: 'UTC +02:00 Cairo, Johannesburg' },
    { value: 'UTC +03:00 Moscow, Nairobi, Riyadh', label: 'UTC +03:00 Moscow, Nairobi, Riyadh' },
    { value: 'UTC +03:30 Tehran', label: 'UTC +03:30 Tehran' },
    { value: 'UTC +04:00 Dubai, Baku', label: 'UTC +04:00 Dubai, Baku' },
    { value: 'UTC +04:30 Kabul', label: 'UTC +04:30 Kabul' },
    { value: 'UTC +05:00 Karachi, Tashkent', label: 'UTC +05:00 Karachi, Tashkent' },
    { value: 'UTC +05:30 New Delhi, Mumbai', label: 'UTC +05:30 New Delhi, Mumbai' },
    { value: 'UTC +05:45 Kathmandu', label: 'UTC +05:45 Kathmandu' },
    { value: 'UTC +06:00 Dhaka, Almaty', label: 'UTC +06:00 Dhaka, Almaty' },
    { value: 'UTC +06:30 Yangon', label: 'UTC +06:30 Yangon' },
    { value: 'UTC +07:00 Bangkok, Jakarta, Hanoi', label: 'UTC +07:00 Bangkok, Jakarta, Hanoi' },
    { value: 'UTC +08:00 Singapore, Hong Kong, Beijing', label: 'UTC +08:00 Singapore, Hong Kong, Beijing' },
    { value: 'UTC +09:00 Tokyo, Seoul', label: 'UTC +09:00 Tokyo, Seoul' },
    { value: 'UTC +09:30 Adelaide, Darwin', label: 'UTC +09:30 Adelaide, Darwin' },
    { value: 'UTC +10:00 Sydney, Melbourne', label: 'UTC +10:00 Sydney, Melbourne' },
    { value: 'UTC +11:00 Solomon Islands', label: 'UTC +11:00 Solomon Islands' },
    { value: 'UTC +12:00 Auckland, Fiji', label: 'UTC +12:00 Auckland, Fiji' },
    { value: 'UTC +13:00 Tonga, Samoa', label: 'UTC +13:00 Tonga, Samoa' },
    { value: 'UTC +14:00 Line Islands', label: 'UTC +14:00 Line Islands' },
  ];

  const isBookingFormComplete = bookingForm.name && bookingForm.contact && bookingForm.email && bookingForm.course;

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const isWebinarFormComplete = webinarForm.name && webinarForm.email && webinarForm.timezone && webinarForm.date && webinarForm.time;

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      setShowCompactHeader(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleQuizAnswer = (answer: string) => {
    const newAnswers = [...quizAnswers, answer];
    setQuizAnswers(newAnswers);
    if (quizStep < quizQuestions.length - 1) {
      setQuizStep(quizStep + 1);
    } else {
      setQuizStep(quizQuestions.length); // Show email input
    }
  };

  const resetQuiz = () => {
    setQuizStep(0);
    setQuizAnswers([]);
    setEmail("");
    setEmailError("");
    setShowQuizThankYou(false);
  };

  /* Form Submission States */
  const [isMounted, setIsMounted] = useState(false);
  const [isSubmittingManual, setIsSubmittingManual] = useState(false);
  const [isSubmittingSyllabus, setIsSubmittingSyllabus] = useState(false);
  const [isSubmittingWebinar, setIsSubmittingWebinar] = useState(false);
  const [isSubmittingPreYTTC, setIsSubmittingPreYTTC] = useState(false);

  const submitToFormSubmit = async (fields: Record<string, any>) => {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(fields),
    });

    if (response.ok) {
      if (fields._next) {
        window.location.href = fields._next;
      }
    } else {
      throw new Error('Failed to send form');
    }
  };
  const [isSubmittingQuiz, setIsSubmittingQuiz] = useState(false);
  const [isSubmittingBooking, setIsSubmittingBooking] = useState(false);
  const [isSubmittingEnroll, setIsSubmittingEnroll] = useState(false);
  const [isSubmittingQuick, setIsSubmittingQuick] = useState(false);

  /* Form Handlers */
  const handleQuizSubmit = async () => {
    if (!email.trim()) {
      setEmailError("Please enter your email address");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setEmailError("Please enter a valid email address");
      return;
    }
    setEmailError("");
    setIsSubmittingQuiz(true);

    try {
      await submitToFormSubmit({
        email: email,
        quiz_answers: quizAnswers.join(", "),
        _subject: "New Quiz Result: Yogic Energy",
        _next: `${window.location.origin}/thank-you?type=enquiry`,
        _autoresponder: "Namaste! Thank you for participating in our Yogic Energy Quiz. We have received your results and will reach out to you shortly to discuss your journey!"
      });
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmittingQuiz(false);
    }
  };

  const handleManualSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingManual(true);
    try {
      await submitToFormSubmit({
        name: manualForm.name,
        email: manualForm.email,
        _subject: "New Free Manual Request",
        _next: `${window.location.origin}/thank-you?type=manual`,
        _autoresponder: "Namaste! Your free manual is being sent to your email. We hope it helps your practice!"
      });
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmittingManual(false);
    }
  };

  const handleSyllabusSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!syllabusEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(syllabusEmail)) {
      setSyllabusEmailError("Please enter a valid email address");
      return;
    }

    setIsSubmittingSyllabus(true);
    try {
      await submitToFormSubmit({
        email: syllabusEmail,
        course: selectedSyllabusCourse,
        _subject: `New Syllabus Request: ${selectedSyllabusCourse} Hour`,
        _template: "table",
        _captcha: "false",
        _next: `${window.location.origin}/thank-you?type=syllabus`,
        _autoresponder: "Namaste! Your requested syllabus guide is being sent to your email. We look forward to seeing you at our Yoga Teacher Training in Bali!"
      });
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmittingSyllabus(false);
    }
  };

  const handleWebinarSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingWebinar(true);
    try {
      await submitToFormSubmit({
        ...webinarForm,
        _subject: `New Webinar Registration: ${webinarForm.name}`,
        _template: "table",
        _captcha: "false",
        _next: `${window.location.origin}/thank-you?type=webinar`,
        _autoresponder: "Namaste! You have successfully registered for our Free Orientation Webinar. We will send you the join link and further details shortly. See you there!"
      });
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmittingWebinar(false);
    }
  };

  const handlePreYTTCSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingPreYTTC(true);
    try {
      await submitToFormSubmit({
        ...preYTTCForm,
        _subject: "New Pre-YTTC Info Request",
        _template: "table",
        _captcha: "false",
        _next: `${window.location.origin}/thank-you?type=enquiry`,
        _autoresponder: "Namaste! Thank you for your interest in our Pre-YTTC preparation. We have received your request and will send you all the information shortly. Get ready for transformation!"
      });
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmittingPreYTTC(false);
    }
  };

  const handleBookingSubmit = async () => {
    setIsSubmittingBooking(true);
    const bookingDate = selectedDay && selectedMonth !== null
      ? `${selectedDay} ${["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][selectedMonth]} 2026`
      : "";

    try {
      await submitToFormSubmit({
        ...bookingForm,
        appointment_date: bookingDate,
        appointment_time: selectedTime,
        timezone: selectedTimezone,
        _subject: `New Call Booking: ${bookingForm.name}`,
        _template: "table",
        _captcha: "false",
        _next: `${window.location.origin}/thank-you?type=booking`,
        _autoresponder: "Namaste! Your call with YogaGarhi has been scheduled. We look forward to connecting with you on the selected date and time to discuss your yoga journey. See you soon!"
      });
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmittingBooking(false);
    }
  };

  const handleEnrollSubmit = async () => {
    setIsSubmittingEnroll(true);
    try {
      await submitToFormSubmit({
        ...enrollForm,
        _subject: `New Enrollment: ${enrollForm.name}`,
        _template: "table",
        _captcha: "false",
        _next: `${window.location.origin}/thank-you?type=enrollment`,
        _autoresponder: "Namaste! Thank you for applying to YogaGarhi. We have received your enrollment request. Our admissions team will review your application and contact you within 24 hours with the next steps."
      });
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmittingEnroll(false);
    }
  };

  const handleQuickEnquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingQuick(true);
    try {
      await submitToFormSubmit({
        ...quickEnquiryForm,
        _subject: `New Quick Enquiry: ${quickEnquiryForm.name}`,
        _template: "table",
        _captcha: "false",
        _next: `${window.location.origin}/thank-you?type=enquiry`,
        _autoresponder: "Namaste! Thank you for contacting YogaGarhi. We have received your quick enquiry and our team will get back to you within 24 hours."
      });
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmittingQuick(false);
    }
  };

  return (
    <>

      <Layout>
        {/* ===== HERO SECTION ===== */}
        <section className="relative min-h-[90vh] flex items-center">
          <div className="absolute inset-0">
            <Image
              src={heroImage}
              alt="100 Hour Yoga Teacher Training in Bali"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-foreground/40" />
          </div>

          <div className="relative container mx-auto px-4 py-20 text-center text-primary-foreground">
            <p className="font-body uppercase tracking-[0.3em] text-sm mb-4 opacity-90">
              Yogagarhi
            </p>
            <p className="font-heading italic text-lg mb-8 opacity-80">
              Ancient Wisdom. Modern Teaching.
            </p>

            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              100 Hour Yoga Teacher Training
            </h1>
            <p className="font-heading text-2xl md:text-3xl mb-12 opacity-90">
              Bali, Indonesia
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="xl"
                className="bg-primary-foreground/20 backdrop-blur-sm border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/30 font-semibold"
                onClick={() => setShowQuickEnquiryDialog(true)}
              >
                Quick Enquiry
              </Button>
              <Button
                size="xl"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
                onClick={() => openBookingDialog(true)}
              >
                Book an Appointment
              </Button>
            </div>
          </div>
        </section>

        {/* ===== COURSE DETAILS BAR ===== */}
        <section className="py-8 bg-secondary/50 border-b border-border/50">
          <div className="container mx-auto px-4">
            {/* Main Course Info Row - Static Border Container */}
            <div className="relative rounded-xl border-2 border-primary/40 bg-background shadow-card p-6 md:p-8">
              <div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-6 items-center">
                  {/* Course Duration */}
                  <div className="text-center lg:text-left border-r border-border/30 pr-4 last:border-r-0">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Course</p>
                    <p className="font-heading font-semibold text-foreground">100 Hour YTTC</p>
                  </div>

                  {/* Course Length */}
                  <div className="text-center lg:text-left border-r border-border/30 pr-4 last:border-r-0">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Duration</p>
                    <p className="font-heading font-semibold text-foreground">12 Days</p>
                  </div>

                  {/* Yoga Style */}
                  <div className="text-center lg:text-left border-r border-border/30 pr-4 last:border-r-0">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Style</p>
                    <p className="font-heading font-semibold text-foreground">Multi-Style Yoga</p>
                  </div>

                  {/* Level */}
                  <div className="text-center lg:text-left border-r border-border/30 pr-4 last:border-r-0">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Level</p>
                    <p className="font-heading font-semibold text-foreground">Beginner Friendly</p>
                  </div>

                  {/* Certification */}
                  <div className="text-center lg:text-left border-r border-border/30 pr-4 last:border-r-0">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Certification</p>
                    <p className="font-heading font-semibold text-foreground">Yoga Alliance RYS 100</p>
                  </div>

                  {/* Price */}
                  <div className="text-center lg:text-left border-r border-border/30 pr-4 last:border-r-0">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Starting From</p>
                    <div className="flex items-baseline gap-2 justify-center lg:justify-start">
                      <span className="text-sm text-muted-foreground line-through">$1399</span>
                      <span className="font-heading text-2xl md:text-3xl font-bold text-primary animate-pulse">$1149</span>
                    </div>
                    <span className="inline-block mt-1 px-2 py-0.5 text-xs font-medium bg-green-100 text-green-700 rounded-full">Save $250</span>
                  </div>

                  {/* Book Now Button */}
                  <div className="col-span-2 md:col-span-1 flex justify-center lg:justify-end">
                    <Button
                      size="lg"
                      className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold w-full md:w-auto"
                      onClick={() => setShowEnrollDialog(true)}
                    >
                      Book Now
                    </Button>
                  </div>
                </div>

                {/* What's Included / Bonus Row */}
                <div className="mt-6 pt-6 border-t border-border/30">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Play className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">1 Month Live Access</p>
                        <p className="text-xs text-muted-foreground">Online Classes</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <BookOpen className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">Pre-YTTC Support</p>
                        <p className="text-xs text-muted-foreground">Preparation & Guidance</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Heart className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">Post-YTTC Mentorship</p>
                        <p className="text-xs text-muted-foreground">Ongoing Support</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Award className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">Complimentary Goodie Bag</p>
                        <p className="text-xs text-muted-foreground">Yoga Essentials</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== ICON HIGHLIGHTS ===== */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {iconHighlights.map((item, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-heading text-sm font-semibold text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">{item.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== WELCOME SECTION ===== */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Left Column - Welcome Text & Video on Mobile */}
              <div className="order-1 lg:order-2">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Welcome to Yogagarhi
                </h2>
                <p className="font-heading text-xl text-primary mb-6 italic">
                  100 Hour Yoga Teacher Training Course
                </p>

                {/* YouTube Video - Shows here on mobile, hidden on desktop */}
                <div className="relative w-full mb-8 lg:hidden">
                  <div className="aspect-video rounded-lg overflow-hidden shadow-card bg-muted">
                    <iframe
                      src="https://www.youtube.com/embed/U1r2mQRmWXM?rel=0"
                      title="YogaGarhi 100 Hour Yoga Teacher Training"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                </div>

                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  {/* First 2 paragraphs - always visible */}
                  <p>
                    Become a Yoga Alliance Registered Yoga Teacher (RYT 200) through Yogagarhi's
                    200-Hour Yoga Teacher Training in Bali Ubud and join a life-changing journey
                    of yoga and self-realization.
                  </p>
                  <p>
                    Our professional course is made for both beginners and intermediate practitioners.
                    This course covers all essential aspects of yoga, including asanas, pranayama,
                    anatomy, and teaching methodology.
                  </p>

                  {/* Expandable content */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${showWelcomeExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                  >
                    <p className="pt-6">
                      Become a part of this transformative once in a lifetime experience in the
                      mesmerizing beauty of Bali. This holistic program prepares you to become a
                      professional yoga teacher having expertise, skills, and confidence.
                    </p>
                  </div>

                  {/* Read More / Read Less Button */}
                  <button
                    onClick={() => setShowWelcomeExpanded(!showWelcomeExpanded)}
                    className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors mt-2 group"
                  >
                    {showWelcomeExpanded ? 'Read Less' : 'Read More'}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${showWelcomeExpanded ? 'rotate-180' : ''
                        }`}
                    />
                  </button>
                </div>
              </div>

              {/* Right Column - YouTube Video (desktop only) */}
              <div className="relative w-full order-2 lg:order-1 hidden lg:block">
                <div className="aspect-video rounded-lg overflow-hidden shadow-card bg-muted">
                  <iframe
                    src="https://www.youtube.com/embed/U1r2mQRmWXM?rel=0"
                    title="YogaGarhi 100 Hour Yoga Teacher Training"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== VIDEO TESTIMONIALS ===== */}
        <section className="py-20 bg-secondary/30 relative overflow-hidden">
          {/* Enhanced Yoga-themed Background Art with Animations */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Large Chakra Wheel - Center */}
            <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] text-primary/[0.04] animate-float-gentle" viewBox="0 0 100 100" fill="none" stroke="currentColor">
              <circle cx="50" cy="50" r="48" strokeWidth="0.2" />
              <circle cx="50" cy="50" r="40" strokeWidth="0.2" />
              <circle cx="50" cy="50" r="32" strokeWidth="0.2" />
              <circle cx="50" cy="50" r="24" strokeWidth="0.2" />
              <circle cx="50" cy="50" r="16" strokeWidth="0.2" />
              {/* 8-pointed star */}
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                <line key={i} x1="50" y1="50" x2={50 + 48 * Math.cos(angle * Math.PI / 180)} y2={50 + 48 * Math.sin(angle * Math.PI / 180)} strokeWidth="0.15" />
              ))}
            </svg>

            {/* Sri Yantra - Top Left */}
            <svg className="absolute -top-5 -left-5 w-56 h-56 text-primary/[0.05] animate-float" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
              <polygon points="50,5 95,90 5,90" />
              <polygon points="50,95 5,10 95,10" />
              <polygon points="50,20 78,75 22,75" />
              <polygon points="50,80 22,25 78,25" />
              <circle cx="50" cy="50" r="20" />
              <circle cx="50" cy="50" r="30" />
              <circle cx="50" cy="50" r="40" />
            </svg>

            {/* Lotus Flower - Bottom Right */}
            <svg className="absolute -bottom-10 -right-10 w-72 h-72 text-primary/[0.04] animate-float-slow" style={{ animationDelay: '2s' }} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.4">
              {/* Outer petals */}
              <ellipse cx="50" cy="50" rx="10" ry="35" />
              <ellipse cx="50" cy="50" rx="10" ry="35" transform="rotate(30 50 50)" />
              <ellipse cx="50" cy="50" rx="10" ry="35" transform="rotate(60 50 50)" />
              <ellipse cx="50" cy="50" rx="10" ry="35" transform="rotate(90 50 50)" />
              <ellipse cx="50" cy="50" rx="10" ry="35" transform="rotate(120 50 50)" />
              <ellipse cx="50" cy="50" rx="10" ry="35" transform="rotate(150 50 50)" />
              {/* Inner petals */}
              <ellipse cx="50" cy="50" rx="6" ry="20" />
              <ellipse cx="50" cy="50" rx="6" ry="20" transform="rotate(45 50 50)" />
              <ellipse cx="50" cy="50" rx="6" ry="20" transform="rotate(90 50 50)" />
              <ellipse cx="50" cy="50" rx="6" ry="20" transform="rotate(135 50 50)" />
              {/* Center */}
              <circle cx="50" cy="50" r="8" />
            </svg>

            {/* Om Symbol - Top Right */}
            <svg className="absolute top-16 right-20 w-36 h-36 text-primary/[0.06] animate-float-gentle" style={{ animationDelay: '1s' }} viewBox="0 0 100 100" fill="currentColor">
              <path d="M28,68 C18,68 12,58 12,48 C12,32 24,22 40,22 C56,22 62,34 62,44 C62,56 50,62 44,62 C38,62 32,56 32,48 C32,42 38,38 44,38" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M62,44 C62,32 74,26 80,32 C86,38 80,50 74,56 L68,72" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M74,18 C80,18 84,24 84,30" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              <circle cx="88" cy="14" r="4" />
            </svg>

            {/* Seed of Life - Left Center */}
            <svg className="absolute top-1/3 -left-10 w-48 h-48 text-primary/[0.04] animate-float" style={{ animationDelay: '3s' }} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.4">
              <circle cx="50" cy="50" r="18" />
              <circle cx="50" cy="32" r="18" />
              <circle cx="65.6" cy="41" r="18" />
              <circle cx="65.6" cy="59" r="18" />
              <circle cx="50" cy="68" r="18" />
              <circle cx="34.4" cy="59" r="18" />
              <circle cx="34.4" cy="41" r="18" />
            </svg>

            {/* Mandala - Bottom Left */}
            <svg className="absolute bottom-20 left-16 w-44 h-44 text-primary/[0.04] animate-float-slow" style={{ animationDelay: '4s' }} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.3">
              <circle cx="50" cy="50" r="45" />
              <circle cx="50" cy="50" r="36" />
              <circle cx="50" cy="50" r="27" />
              <circle cx="50" cy="50" r="18" />
              <circle cx="50" cy="50" r="9" />
              {/* Decorative petals */}
              {isMounted && [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => (
                <ellipse key={i} cx={50 + 36 * Math.cos(angle * Math.PI / 180)} cy={50 + 36 * Math.sin(angle * Math.PI / 180)} rx="4" ry="8" transform={`rotate(${angle} ${50 + 36 * Math.cos(angle * Math.PI / 180)} ${50 + 36 * Math.sin(angle * Math.PI / 180)})`} />
              ))}
            </svg>

            {/* Merudanda (Spine/Chakras) - Right Side */}
            <svg className="absolute top-1/4 right-8 w-20 h-80 text-primary/[0.05] animate-float-gentle" style={{ animationDelay: '2.5s' }} viewBox="0 0 40 160" fill="none" stroke="currentColor" strokeWidth="0.5">
              {/* Spine line */}
              <line x1="20" y1="10" x2="20" y2="150" strokeWidth="0.3" />
              {/* 7 Chakras */}
              <circle cx="20" cy="20" r="8" />
              <circle cx="20" cy="40" r="7" />
              <circle cx="20" cy="60" r="7" />
              <circle cx="20" cy="80" r="8" />
              <circle cx="20" cy="100" r="7" />
              <circle cx="20" cy="120" r="7" />
              <circle cx="20" cy="140" r="9" />
            </svg>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
              Student Testimonials
            </h2>
            {/* Decorative Lotus Icon */}
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/60" />
              <svg className="w-10 h-6 text-primary" viewBox="0 0 40 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <ellipse cx="20" cy="12" rx="4" ry="10" />
                <ellipse cx="20" cy="12" rx="4" ry="10" transform="rotate(60 20 12)" />
                <ellipse cx="20" cy="12" rx="4" ry="10" transform="rotate(-60 20 12)" />
                <circle cx="20" cy="12" r="2" fill="currentColor" />
              </svg>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/60" />
            </div>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Hear from our graduates about their transformative journey
            </p>

            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative aspect-video rounded-lg overflow-hidden bg-muted shadow-card">
                <iframe
                  src="https://www.youtube.com/embed/OGmWr_aC4WA?rel=0"
                  title="Student testimonial"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>

            <div className="text-center">
              <Dialog open={showManualDialog} onOpenChange={setShowManualDialog}>
                <DialogTrigger asChild>
                  <Button size="lg" className="bg-primary text-primary-foreground">
                    Get Free 200-Hour Study Manual
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle className="font-heading text-2xl text-center">
                      Download Your Free Manual
                    </DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4 pt-4">
                    <p className="text-center text-muted-foreground">
                      Enter your email to receive the complete 200-hour YTTC study manual.
                    </p>
                    <input
                      type="email"
                      placeholder="Your email address"
                      className={`w-full px-4 py-3 rounded-lg border ${manualEmailError ? 'border-red-500' : 'border-border'} bg-background focus:outline-none focus:ring-2 focus:ring-primary`}
                      value={manualEmail}
                      onChange={(e) => {
                        setManualEmail(e.target.value);
                        setManualEmailError("");
                      }}
                    />
                    {manualEmailError && (
                      <p className="text-sm text-red-500">{manualEmailError}</p>
                    )}
                    <Button
                      className="w-full"
                      size="lg"
                      onClick={() => {
                        if (!manualEmail) {
                          setManualEmailError("Please enter your email address");
                          return;
                        }
                        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(manualEmail)) {
                          setManualEmailError("Please enter a valid email address");
                          return;
                        }
                        setManualEmailError("");
                        setShowManualDialog(false);
                        setShowManualThankYou(true);
                      }}
                    >
                      Send Me The Manual
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>

              {/* Manual Thank You Dialog */}
              <Dialog open={showManualThankYou} onOpenChange={(open) => {
                setShowManualThankYou(open);
                if (!open) {
                  setManualEmail("");
                  setManualEmailError("");
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
                        Thank You! 🙏
                      </h3>
                      <p className="text-muted-foreground">
                        Your free 200-hour study manual is on its way to <span className="font-medium text-foreground">{manualEmail}</span>
                      </p>
                    </div>
                    <div className="bg-secondary/50 rounded-lg p-4 text-sm text-muted-foreground">
                      <p>Please check your inbox (and spam folder) within the next 24 hours.</p>
                    </div>
                    <Button
                      onClick={() => {
                        setShowManualThankYou(false);
                        setManualEmail("");
                        setManualEmailError("");
                      }}
                      className="w-full"
                    >
                      Close
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </section>

        {/* ===== WHAT SETS YOGAGARHI APART ===== */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* Section Header */}
            <div className="text-center mb-16">
              <p className="font-body uppercase tracking-[0.2em] text-sm text-primary mb-4">
                What Makes Us Different
              </p>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                What Sets YogaGarhi Apart
              </h2>
              {/* Decorative Om Symbol */}
              <div className="flex items-center justify-center gap-2 mt-4">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/60" />
                <svg className="w-8 h-8 text-primary" viewBox="0 0 40 40" fill="currentColor">
                  <path d="M12,28 C6,28 3,22 3,17 C3,9 9,4 18,4 C27,4 30,11 30,17 C30,24 23,28 19,28 C15,28 12,24 12,19 C12,15 16,13 19,13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M30,17 C30,11 36,8 39,12 C42,16 38,22 34,26 L31,32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="37" cy="6" r="2" />
                </svg>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/60" />
              </div>
            </div>

            {/* Zigzag Feature Layout */}
            <div className="space-y-16">
              {/* Feature 1: Pre-YTTC */}
              <WhyFeatureItem
                icon={<GraduationCap className="w-4 h-4 text-primary" />}
                title="Begin Before You Begin – Pre YTTC"
                preview="The World's First Pre-YTTC school. The Optional Complimentary Online Pre-YTTC Preparation. If you feel like you don't know you are ready for course or not, this pre-YTTC is for you to be prepared & feel confident."
                expanded={`At Yogagarhi, we do something different. We offer a Pre-YTTC Online Optional Complimentary Preparation Program. This gives you time to:

• Prepare your body
• Get friendly with curriculum & subjects
• Understand basic concepts
• Feel confident & clear

So when training begins, you don't panic. You arrive grounded. You don't jump into transformation — you are gently prepared for it.`}
                imageUrl={heroImage}
                imageAlt="Pre-YTTC Preparation"
                isReversed={false}
              />

              {/* Feature 2: Transform You */}
              <WhyFeatureItem
                icon={<Heart className="w-4 h-4 text-primary" />}
                title="Not Just Transform Yoga – Transform You"
                preview="Very few address the human being behind the practice. At Yogagarhi, yoga is taught as a way of living, not as a skill to perform."
                expanded={`The focus is not only on how you practice, but on how you think, relate, act, and respond to life itself. Here, philosophy is not memorized. It is applied, reflected upon, and lived — so transformation becomes visible in daily life, not just on the mat. We work with:

• How you think
• How you react
• How you handle stress
• How you relate to others

This is where real change happens.`}
                imageUrl={activityAyurveda}
                imageAlt="Yoga Transformation"
                isReversed={true}
              />

              {/* Feature 3: Lifetime Re-Attendance */}
              <WhyFeatureItem
                icon={<Repeat className="w-4 h-4 text-primary" />}
                title="Lifetime Re-Attendance & Assistant Teaching"
                preview="At Yogagarhi, graduation is not the end of learning. Graduates are welcome to return to future trainings for deeper practice and to assist as teachers."
                expanded={`Over years of teaching, our founder observed a clear pattern: students often wanted to repeat their 200-hour training to revise, deepen, and truly integrate what they had learned.

Instead of ignoring this need, Yogagarhi embraced it. Once you complete your YTTC with us, you are welcome to repeat the same course again in the future — without paying the course fee again (food & stay exclusive).

• Observe teaching methodology in real time
• Support classes as an Assistant Teacher
• Build confidence and refine skills

Because yoga is not a one-time achievement. It is a lifelong refinement.`}
                imageUrl={activitySoundHealing}
                imageAlt="Lifetime Learning"
                isReversed={false}
              />

              {/* Feature 4: Small Groups */}
              <WhyFeatureItem
                icon={<Users className="w-4 h-4 text-primary" />}
                title="Small Group Deep Work. Personal Transformation."
                preview="At Yogagarhi, we intentionally keep small groups (8–10 students) allowing personalized guidance, deeper alignment, and understanding different bodies."
                expanded={`This allows:

• Individual attention
• Personal correction
• Emotional and mental support
• Teaching adapted to your unique body and mind
• Learn deeper alignment for your own practice
• Understand how to read and work with different bodies

At Yogagarhi, teaching is personalized, precise, and practical — you are a person on a journey, not a number.`}
                imageUrl={activityWaterfall}
                imageAlt="Small Group Training"
                isReversed={true}
              />

              {/* Feature 5: 35+ Sequences */}
              <WhyFeatureItem
                icon={<BookOpen className="w-4 h-4 text-primary" />}
                title="35+ Functional, Ready-to-Use Sequences"
                preview="Yogagarhi provides over 35 functional, purpose-based yoga sequences for personal practice, teaching clarity, therapeutic understanding, and intelligent class structuring."
                expanded={`At Yogagarhi, students receive over 35 carefully designed yoga sequences:

• Personal Practice – structured flows to deepen your daily practice
• Teaching Clarity – sequences to confidently structure your own classes
• Therapeutic Understanding – flows designed to address common body imbalances
• Intelligent Class Structuring – practical tools to create effective classes

Key Benefits:
• Ready-to-use sequences for immediate application
• Flexible and adaptable to different student levels
• Designed to refine over time as your understanding deepens

These sequences are not random flows — they are practical, purposeful, and built to give maximum benefit.`}
                imageUrl={heroImage}
                imageAlt="Yoga Sequences"
                isReversed={false}
              />

              {/* Feature 6: Himalayan Lineage */}
              <WhyFeatureItem
                icon={<Mountain className="w-4 h-4 text-primary" />}
                title="Rooted in Himalayan Lineage"
                preview="Modern yoga often focuses only on physical and meditative practices. At Yogagarhi, our teachings are inspired by Himalayan yogic traditions, where yoga is understood as an integrated path."
                expanded={`We teach the four classical paths:

• Karma Yoga – conscious action
• Jnana Yoga – self-inquiry and wisdom
• Bhakti Yoga – devotion and humility
• Raja Yoga – discipline of body and mind

These paths are not taught as theory. They are experienced through daily life, reflection, and practice.`}
                imageUrl={activityAyurveda}
                imageAlt="Himalayan Tradition"
                isReversed={true}
              />

              {/* Feature 7: Living Philosophy */}
              <WhyFeatureItem
                icon={<Sparkles className="w-4 h-4 text-primary" />}
                title="The Heart of Yogagarhi: Living Philosophy"
                preview="At Yogagarhi we teach philosophy as a tool for living. Our approach focuses on applied yogic philosophy — helping students observe suffering, understand its roots, and dissolve it through awareness."
                expanded={`This is one of Yogagarhi's core strengths: students don't just transform how they practice, they transform how they live.

Philosophy is not memorized for an exam — it is applied, reflected upon, and integrated into daily decisions, relationships, and self-understanding.`}
                imageUrl={activitySoundHealing}
                imageAlt="Living Philosophy"
                isReversed={false}
              />

              {/* Feature 8: Continuing Community */}
              <WhyFeatureItem
                icon={<Handshake className="w-4 h-4 text-primary" />}
                title="A Community That Continues After Certification"
                preview="Yoga does not end with a certificate. Yogagarhi is building a living yoga community where students remain connected after completing their training."
                expanded={`Growth is supported through:

• Connection with fellow graduates
• Ongoing guidance from teachers
• Sharing experiences and asking questions
• Support as your journey continues

This is not a transactional relationship — it is a lifelong connection.`}
                imageUrl={activityWaterfall}
                imageAlt="Yoga Community"
                isReversed={true}
              />
            </div>
          </div>
        </section>

        {/* ===== WHY ONE STYLE DOESN'T FIT ALL ===== */}
        <section className="relative overflow-hidden">
          {/* Background Image - Sticky only on mobile within this section */}
          <div className="absolute inset-0 -z-10">
            <div className="md:relative md:h-full sticky top-0 h-screen">
              <Image
                src={heroImage}
                alt="Yoga practice in nature"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/60" />
            </div>
          </div>

          {/* Content - Scrollable on mobile */}
          <div className="relative z-10 min-h-screen md:min-h-0 flex items-center py-20">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-white mb-6">
                Why One Style Does Not Fit All
              </h2>
              <p className="font-heading text-xl text-center text-primary-foreground/90 mb-8 italic">
                Why We Teach Authentic Multi-Style & Prakriti-Based Yoga
              </p>

              <div className="space-y-6 text-white/90 leading-relaxed text-center max-w-3xl mx-auto mb-12">
                <p>
                  Every human being is unique. Your body, your energy, your mind — they are unlike
                  anyone else's. So why should your yoga practice be the same as everyone else's?
                </p>
                <p>
                  At Yogagarhi, we teach multi-style yoga not to confuse, but to liberate.
                  By understanding Hatha, Vinyasa, Ashtanga, and Iyengar as complete systems,
                  you learn to adapt yoga to the individual — not force the individual into yoga.
                </p>
                <p>
                  Our Prakriti-based approach considers your unique constitution. We help you
                  discover which practices serve your nature, so your teaching can be truly
                  responsive to each student who comes to you.
                </p>
              </div>

              <div className="text-center">
                <Dialog open={showQuizDialog} onOpenChange={(open) => {
                  setShowQuizDialog(open);
                  if (!open) resetQuiz();
                }}>
                  <DialogTrigger asChild>
                    <Button size="lg" className="bg-amber-500 text-white hover:bg-amber-600 font-semibold shadow-lg">
                      Reveal Your Yogic Energy
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-lg">
                    <DialogHeader>
                      <DialogTitle className="font-heading text-2xl text-center">
                        {quizStep < quizQuestions.length
                          ? "Discover Your Yogic Energy"
                          : "Your Insight Awaits"}
                      </DialogTitle>
                    </DialogHeader>

                    <div className="pt-4">
                      {quizStep < quizQuestions.length ? (
                        <div className="space-y-6">
                          <div className="text-center mb-2">
                            <span className="text-sm text-muted-foreground">
                              Question {quizStep + 1} of {quizQuestions.length}
                            </span>
                          </div>
                          <p className="text-center font-medium text-lg">
                            {quizQuestions[quizStep].question}
                          </p>
                          <div className="space-y-3">
                            {quizQuestions[quizStep].options.map((option, i) => (
                              <button
                                key={i}
                                onClick={() => handleQuizAnswer(option)}
                                className="w-full p-4 text-left rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-colors"
                              >
                                {option}
                              </button>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-4 text-center">
                          <p className="text-muted-foreground">
                            Thank you for sharing. Enter your email and we will send you
                            your personalized yogic energy insight shortly.
                          </p>
                          <div className="space-y-2">
                            <input
                              type="email"
                              placeholder="Your email address *"
                              className={`w-full px-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary ${emailError ? 'border-red-500' : 'border-border'}`}
                              value={email}
                              onChange={(e) => {
                                setEmail(e.target.value);
                                if (emailError) setEmailError("");
                              }}
                            />
                            {emailError && (
                              <p className="text-sm text-red-500">{emailError}</p>
                            )}
                          </div>
                          <Button
                            className="w-full"
                            size="lg"
                            onClick={handleQuizSubmit}
                          >
                            Submit & Receive My Insight
                          </Button>
                        </div>
                      )}
                    </div>
                  </DialogContent>
                </Dialog>

                {/* Quiz Thank You Dialog */}
                <Dialog open={showQuizThankYou} onOpenChange={(open) => {
                  setShowQuizThankYou(open);
                  if (!open) resetQuiz();
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
                          Thank You! 🙏
                        </h3>
                        <p className="text-muted-foreground">
                          Your personalized yogic energy insight is on its way to <span className="font-medium text-foreground">{email}</span>
                        </p>
                      </div>
                      <div className="bg-secondary/50 rounded-lg p-4 text-sm text-muted-foreground">
                        <p>Please check your inbox (and spam folder) within the next 24 hours.</p>
                      </div>
                      <Button
                        onClick={() => {
                          setShowQuizThankYou(false);
                          resetQuiz();
                        }}
                        className="w-full"
                      >
                        Close
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        </section>
        {/* ===== DAILY SCHEDULE ===== */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-primary mb-4">
              Daily Schedule
            </h2>
            {/* Decorative Sun Icon */}
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/60" />
              <svg className="w-10 h-10 text-primary" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="20" cy="20" r="9" />
                {/* Sun rays */}
                {isMounted && [0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                  <line key={i} x1={20 + 11 * Math.cos(angle * Math.PI / 180)} y1={20 + 11 * Math.sin(angle * Math.PI / 180)} x2={20 + 16 * Math.cos(angle * Math.PI / 180)} y2={20 + 16 * Math.sin(angle * Math.PI / 180)} />
                ))}
              </svg>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/60" />
            </div>
            <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
              A typical day at YogaGarhi is designed to balance intensive learning with rest and integration.
            </p>

            <div className="max-w-3xl mx-auto">
              <div className="relative space-y-4">
                {/* Vertical connecting line */}
                <div className="absolute left-[calc(6rem+1.5rem+0.5rem-1px)] md:left-[calc(7rem+1.5rem+0.5rem-1px)] top-2 bottom-2 w-0.5 bg-primary/30" />

                {dailySchedule.map((item, index) => (
                  <div
                    key={index}
                    className="relative flex items-center gap-6"
                  >
                    {/* Time */}
                    <div className="w-24 md:w-28 flex-shrink-0 text-right">
                      <span className="font-heading text-lg md:text-xl font-semibold text-primary">{item.time}</span>
                    </div>

                    {/* Timeline dot with pulse animation */}
                    <div className="flex-shrink-0 z-10">
                      <div
                        className="w-4 h-4 rounded-full bg-primary animate-pulse-dot"
                        style={{ animationDelay: `${index * 0.5}s` }}
                      />
                    </div>

                    {/* Activity card */}
                    <div className="flex-1 bg-card border border-border rounded-lg px-6 py-4 shadow-sm">
                      <span className="text-foreground font-medium">{item.activity}</span>
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-12 text-center text-sm text-muted-foreground">
                Sunday is a full day off for rest, self-study, or optional excursions.
              </p>
            </div>
          </div>
        </section>

        {/* ===== WHAT YOU'LL RECEIVE ===== */}
        <section className="py-20 bg-background overflow-hidden">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-primary mb-4">
              What You Will Receive in This Training
            </h2>
            {/* Decorative Mandala Icon */}
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/60" />
              <svg className="w-10 h-10 text-primary" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1">
                <circle cx="20" cy="20" r="16" />
                <circle cx="20" cy="20" r="6" strokeDasharray="2 2" />
                {/* Orbital dots */}
                {isMounted && [0, 60, 120, 180, 240, 300].map((angle, i) => (
                  <circle key={i} cx={20 + 10 * Math.cos(angle * Math.PI / 180)} cy={20 + 10 * Math.sin(angle * Math.PI / 180)} r="3" fill="currentColor" />
                ))}
              </svg>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/60" />
            </div>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              A comprehensive curriculum covering all aspects of yoga
            </p>

            {/* Horizontal Scrollable Flip Cards */}
            <div className="relative">
              {/* Gradient fade edges */}
              <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

              <div className="overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4">
                <div className="flex gap-6" style={{ width: 'max-content' }}>
                  {whatYouWillReceive.map((item, index) => (
                    <div
                      key={index}
                      className="flip-card w-64 h-72 flex-shrink-0 cursor-pointer"
                      onClick={(e) => {
                        const card = e.currentTarget;
                        card.classList.toggle('flipped');
                      }}
                    >
                      <div className="flip-card-inner relative w-full h-full transition-transform duration-500 transform-style-preserve-3d">
                        {/* Front - Image */}
                        <div className="flip-card-front absolute w-full h-full backface-hidden rounded-xl overflow-hidden border border-border shadow-card">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                          <div className="absolute bottom-0 left-0 right-0 p-5">
                            <h3 className="font-heading text-lg font-semibold text-white text-center">
                              {item.title}
                            </h3>
                            <p className="text-xs text-white/70 mt-1 text-center md:hidden">Tap to see more</p>
                            <p className="text-xs text-white/70 mt-1 text-center hidden md:block">Hover to see more</p>
                          </div>
                        </div>

                        {/* Back - Content */}
                        <div className="flip-card-back absolute w-full h-full backface-hidden rounded-xl overflow-hidden border border-border shadow-card rotate-y-180 bg-card">
                          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center">
                            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                              <item.icon className="w-7 h-7 text-primary" />
                            </div>
                            <h3 className="font-heading text-lg font-semibold text-foreground mb-3">
                              {item.title}
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== INCLUSIONS / EXCLUSIONS ===== */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            {/* Tab Buttons */}
            <div className="flex justify-center gap-4 mb-12">
              <button
                onClick={() => setActiveInclusionTab('inclusions')}
                className={`px-8 py-3 rounded-lg font-heading text-lg font-semibold transition-all duration-300 ${activeInclusionTab === 'inclusions'
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'bg-card text-foreground border border-border hover:bg-secondary'
                  }`}
              >
                What's Included
              </button>
              <button
                onClick={() => setActiveInclusionTab('exclusions')}
                className={`px-8 py-3 rounded-lg font-heading text-lg font-semibold transition-all duration-300 ${activeInclusionTab === 'exclusions'
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'bg-card text-foreground border border-border hover:bg-secondary'
                  }`}
              >
                What's Not Included
              </button>
            </div>

            {/* Content */}
            <div className="max-w-5xl mx-auto">
              {activeInclusionTab === 'inclusions' ? (
                <div className="animate-fade-in">
                  <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-primary mb-10">
                    What's Included
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {inclusions.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-4 p-5 bg-card rounded-lg shadow-sm"
                      >
                        <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                          <Check className="w-5 h-5 text-accent" />
                        </div>
                        <span className="text-foreground font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="animate-fade-in">
                  <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-primary mb-10">
                    What's Not Included
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {exclusions.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-4 p-5 bg-card rounded-lg shadow-sm"
                      >
                        <div className="w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0">
                          <X className="w-5 h-5 text-destructive" />
                        </div>
                        <span className="text-foreground font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ===== COURSE SYLLABUS ===== */}
        <section className="py-20 bg-background overflow-hidden">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
              Course Syllabus
            </h2>
            {/* Decorative Book/Scroll Icon */}
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/60" />
              <svg className="w-10 h-8 text-primary" viewBox="0 0 48 32" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M24 6 C24 6 18 4 8 4 C4 4 2 6 2 8 L2 26 C2 28 4 30 8 30 C18 30 24 28 24 28" />
                <path d="M24 6 C24 6 30 4 40 4 C44 4 46 6 46 8 L46 26 C46 28 44 30 40 30 C30 30 24 28 24 28" />
                <line x1="24" y1="6" x2="24" y2="28" />
              </svg>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/60" />
            </div>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Comprehensive curriculum covering all aspects of yoga teacher training
            </p>

            {/* Horizontal Scrollable Cards */}
            <div className="relative">
              <div
                className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide scroll-smooth snap-x snap-mandatory"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {[
                  {
                    title: "Ashtanga Yoga Postures",
                    content: "Complete Ashtanga yoga primary series sequence. Week-by-week progression through Sun Salutation A & B, Standing sequence, Seated sequence, and Mysore style practice.",
                    image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=400&h=400&fit=crop"
                  },
                  {
                    title: "Hatha & Vinyasa Flow",
                    content: "Pawanmuktasana series, Surya Namaskar variations, Standing and seated postures, Backbends, Forward folds, Inversions, and complete sequencing methodology.",
                    image: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=400&h=400&fit=crop"
                  },
                  {
                    title: "Yoga Philosophy",
                    content: "Introduction to yoga sutras of Patanjali, Eight limbs of Ashtanga Yoga, Nadis, Chakras, Pancha-Vayus, Panchakoshas, Triguna, and inspiring stories of great yogis.",
                    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=400&fit=crop"
                  },
                  {
                    title: "Pranayama & Breathing",
                    content: "Complete breathing techniques including Ujjayi, Bhastrika, Kapalbhati, Nadi-Sodhana, Bhramari, Surya-Bhedi, Chandra-Bhedi, Sheetali, and Sheetkari.",
                    image: "https://images.unsplash.com/photo-1474418397713-7ede21d49118?w=400&h=400&fit=crop"
                  },
                  {
                    title: "Anatomy & Physiology",
                    content: "Body movement planes, joint protection, anatomy of ankle, knee, spine, shoulder, breathing mechanism, physiology of muscles, and nervous system.",
                    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop"
                  },
                  {
                    title: "Teaching Methodology",
                    content: "Class sequencing, adjustments, working with different levels, voice usage, mental preparation, demonstration principles, and step-by-step class planning.",
                    image: "https://images.unsplash.com/photo-1588286840104-8957b019727f?w=400&h=400&fit=crop"
                  },
                  {
                    title: "Meditation & Mantra",
                    content: "Multiple meditation techniques, mantra chanting, Trataka, Osho Dynamic meditation, Nada Brahma, Antar Mouna, and silence practices for inner stillness.",
                    image: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=400&h=400&fit=crop"
                  },
                  {
                    title: "Iyengar Yoga",
                    content: "Precision-focused yoga emphasizing correct body alignment using props like blocks, straps, and blankets to help practitioners achieve optimal posture and prevent injuries.",
                    image: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=400&h=400&fit=crop"
                  },
                  {
                    title: "Alignment Principles",
                    content: "Foundation of safe practice through understanding joint stacking, muscle engagement patterns, and body mechanics to protect and strengthen the physical body.",
                    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=400&fit=crop"
                  },
                  {
                    title: "Bandhas (Energy Locks)",
                    content: "Master the three primary bandhas - Mula, Uddiyana, and Jalandhara. These internal locks regulate prana flow, strengthen the core, and deepen meditation practice.",
                    image: "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?w=400&h=400&fit=crop"
                  },
                  {
                    title: "Mudras (Yogic Gestures)",
                    content: "Sacred hand and body gestures that channel energy, enhance concentration, and connect with specific states of consciousness. Essential for pranayama and meditation.",
                    image: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=400&h=400&fit=crop"
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 snap-start first:ml-4 last:mr-4"
                  >
                    {/* Card with circular image attached */}
                    <div className="flex flex-col items-center h-full">
                      {/* Circular Image */}
                      <div className="relative z-10 mb-[-70px]">
                        <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-background shadow-lg">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>

                      {/* Square Card - fixed height for consistency */}
                      <div className="w-72 h-60 bg-card rounded-xl border border-border p-6 pt-20 shadow-sm hover:shadow-md transition-shadow flex flex-col">
                        <h3 className="font-heading text-lg font-semibold text-foreground text-center mb-3">
                          {item.title}
                        </h3>
                        <p className="text-sm text-muted-foreground text-center leading-relaxed flex-1">
                          {item.content}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Scroll indicator */}
              <div className="flex justify-center gap-2 mt-6">
                <span className="text-sm text-muted-foreground">← Scroll to explore →</span>
              </div>
            </div>

            <div className="text-center mt-12">
              <Dialog open={showSyllabusDialog} onOpenChange={setShowSyllabusDialog}>
                <DialogTrigger asChild>
                  <Button size="lg" variant="outline" className="gap-2">
                    <Download className="w-4 h-4" />
                    Download Detailed Syllabus
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle className="font-heading text-2xl text-center">
                      Download Syllabus
                    </DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleSyllabusSubmit} className="space-y-4 pt-4">
                    <p className="text-center text-muted-foreground text-sm">
                      Select your course and enter email to receive the detailed syllabus.
                    </p>
                    <select
                      value={selectedSyllabusCourse}
                      onChange={(e) => setSelectedSyllabusCourse(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="100">100 Hour YTTC</option>
                      <option value="200">200 Hour YTTC</option>
                      <option value="300">300 Hour YTTC</option>
                    </select>
                    <input
                      type="email"
                      placeholder="Your email address"
                      value={syllabusEmail}
                      onChange={(e) => {
                        setSyllabusEmail(e.target.value);
                        setSyllabusEmailError("");
                      }}
                      className={`w-full px-4 py-3 rounded-lg border ${syllabusEmailError ? 'border-red-500' : 'border-border'} bg-background focus:outline-none focus:ring-2 focus:ring-primary`}
                    />
                    {syllabusEmailError && (
                      <p className="text-sm text-red-500">{syllabusEmailError}</p>
                    )}
                    <Button
                      type="submit"
                      className="w-full"
                      size="lg"
                      disabled={isSubmittingSyllabus}
                    >
                      {isSubmittingSyllabus ? "Sending..." : "Send Syllabus"}
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>

              {/* Syllabus Thank You Dialog */}
              <Dialog open={showSyllabusThankYou} onOpenChange={(open) => {
                setShowSyllabusThankYou(open);
                if (!open) {
                  setSyllabusEmail("");
                  setSyllabusEmailError("");
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
                        Thank You! 🙏
                      </h3>
                      <p className="text-muted-foreground">
                        Your {selectedSyllabusCourse}-hour YTTC syllabus is on its way to <span className="font-medium text-foreground">{syllabusEmail}</span>
                      </p>
                    </div>
                    <div className="bg-secondary/50 rounded-lg p-4 text-sm text-muted-foreground">
                      <p>Please check your inbox (and spam folder) within the next 24 hours.</p>
                    </div>
                    <Button
                      onClick={() => {
                        setShowSyllabusThankYou(false);
                        setSyllabusEmail("");
                        setSyllabusEmailError("");
                      }}
                      className="w-full"
                    >
                      Close
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </section>

        {/* ===== FREE WEBINAR ===== */}
        <section className="relative py-20 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 -z-10">
            <Image
              src={webinarBackground}
              alt="Yoga meditation background"
              fill
              className="object-cover"
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
                <form onSubmit={handleWebinarSubmit} className="space-y-4 pt-4">
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
                    disabled={!isWebinarFormComplete || isSubmittingWebinar}
                  >
                    {isSubmittingWebinar ? "Registering..." : "Register Now"}
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

            {/* Pre-YTTC Detail Dialog */}
            <Dialog open={showPreYTTCDialog} onOpenChange={setShowPreYTTCDialog}>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="font-heading text-2xl text-center">
                    Get Pre-YTTC Details
                  </DialogTitle>
                </DialogHeader>
                <form onSubmit={handlePreYTTCSubmit} className="space-y-4 pt-4">
                  <p className="text-center text-muted-foreground text-sm">
                    Learn about our world-first Pre-YTTC preparation program
                  </p>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">
                      Full Name <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      required
                      value={preYTTCForm.name}
                      onChange={(e) => setPreYTTCForm(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">
                      Email Address <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      required
                      value={preYTTCForm.email}
                      onChange={(e) => setPreYTTCForm(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <Button
                    type="submit"
                    className={`w-full transition-all ${preYTTCForm.name && preYTTCForm.email ? 'bg-primary text-primary-foreground hover:bg-primary/90' : 'bg-muted text-muted-foreground cursor-not-allowed'}`}
                    size="lg"
                    disabled={!preYTTCForm.name || !preYTTCForm.email || isSubmittingPreYTTC}
                  >
                    <GraduationCap className="w-4 h-4 mr-2" />
                    {isSubmittingPreYTTC ? "Sending..." : "Get Pre-YTTC Details"}
                  </Button>
                </form>
              </DialogContent>
            </Dialog>

            {/* Pre-YTTC Thank You Dialog */}
            <Dialog open={showPreYTTCThankYou} onOpenChange={(open) => {
              setShowPreYTTCThankYou(open);
              if (!open) setPreYTTCForm({ name: '', email: '' });
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
                      Details on the Way! 🎓
                    </h3>
                    <p className="text-muted-foreground">
                      Thank you, <span className="font-medium text-foreground">{preYTTCForm.name}</span>! Your Pre-YTTC program details will be sent to your email.
                    </p>
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-4 text-sm text-muted-foreground">
                    📧 Sent to: <span className="font-medium text-foreground">{preYTTCForm.email}</span>
                  </div>
                  <Button
                    onClick={() => {
                      setShowPreYTTCThankYou(false);
                      setPreYTTCForm({ name: '', email: '' });
                    }}
                    className="w-full"
                  >
                    Close
                  </Button>
                </div>
              </DialogContent>
            </Dialog>

            {/* Manual Download Dialog */}
            <Dialog open={showManualDialog} onOpenChange={setShowManualDialog}>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="font-heading text-2xl text-center">
                    Get Free Study Manual
                  </DialogTitle>
                </DialogHeader>
                <form onSubmit={handleManualSubmit} className="space-y-4 pt-4">
                  <p className="text-center text-muted-foreground text-sm">
                    Enter your details to receive our comprehensive yoga training manual
                  </p>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">
                      Full Name <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      required
                      value={manualForm.name}
                      onChange={(e) => setManualForm(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">
                      Email Address <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      required
                      value={manualForm.email}
                      onChange={(e) => setManualForm(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full"
                    size="lg"
                    disabled={!manualForm.name || !manualForm.email || isSubmittingManual}
                  >
                    <BookOpen className="w-4 h-4 mr-2" />
                    {isSubmittingManual ? "Sending..." : "Get Free Manual"}
                  </Button>
                </form>
              </DialogContent>
            </Dialog>

            {/* Manual Thank You Dialog */}
            <Dialog open={showManualThankYou} onOpenChange={setShowManualThankYou}>
              <DialogContent className="sm:max-w-md text-center">
                <div className="py-6 space-y-6">
                  <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-primary mb-2">
                      Manual on the Way! 📚
                    </h3>
                    <p className="text-muted-foreground">
                      Thank you! The study manual has been sent to <span className="font-medium text-foreground">{manualForm.email}</span>
                    </p>
                  </div>
                  <Button
                    onClick={() => setShowManualThankYou(false)}
                    className="w-full"
                  >
                    Close
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </section>

        {/* ===== WHY CHOOSE YOGAGARHI (USPs) ===== */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
              Why Choose Yogagarhi
            </h2>
            {/* Decorative Chakra Icon */}
            <div className="flex items-center justify-center gap-2 mb-8">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/60" />
              <svg className="w-10 h-10 text-primary" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="20" cy="20" r="16" />
                <circle cx="20" cy="20" r="8" />
                {/* Petals */}
                {isMounted && [0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                  <ellipse key={i} cx={20 + 12 * Math.cos(angle * Math.PI / 180)} cy={20 + 12 * Math.sin(angle * Math.PI / 180)} rx="2" ry="4" transform={`rotate(${angle} ${20 + 12 * Math.cos(angle * Math.PI / 180)} ${20 + 12 * Math.sin(angle * Math.PI / 180)})`} />
                ))}
              </svg>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/60" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                { title: "Unique Shiv-Shakti Method", desc: "Our signature approach converts yogic theory into practical wisdom.", icon: Zap },
                { title: "Traditional Multi-Style", desc: "Vinyasa, Hatha, Ashtanga, and Iyengar as complete systems.", icon: Layers },
                { title: "Pre-TTC Mentorship", desc: "Build a strong foundation before training begins.", icon: UserCheck },
                { title: "Small Learning Groups", desc: "Only 8-10 students for personalized attention.", icon: Users },
                { title: "Philosophy-Driven", desc: "Highest philosophy through rituals, meditation, and satsang.", icon: Brain },
                { title: "35+ Sequencing Book", desc: "Practical sequences for immediate teaching application.", icon: BookMarked },
                { title: "Yoga Community", desc: "Join a large yoga family that supports growth.", icon: UsersRound },
                { title: "Course Repetition", desc: "Revisit training whenever it runs, at no extra cost.", icon: RefreshCw },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group p-6 bg-card rounded-lg border border-border text-center hover:shadow-lg hover:border-primary/30 transition-all duration-300"
                >
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <item.icon
                      className="w-7 h-7 text-primary animate-float group-hover:scale-110 transition-transform duration-300"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== YOGA ALLIANCE CERTIFICATION ===== */}
        <section
          className="py-24 relative bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${apartYogaAllianceGraduates.src})` }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              {/* Subtitle */}
              <p className="text-white/90 text-lg mb-2 font-medium">
                "YOGAGARHI – 100 Hour YTTC"
              </p>

              {/* Main Title */}
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-amber-500 mb-6">
                Yoga Alliance USA CERTIFIED
              </h2>

              {/* Description */}
              <p className="text-white/90 text-base md:text-lg max-w-3xl mx-auto mb-10 leading-relaxed">
                Our school, YogaGarhi, is registered with Yoga Alliance USA. Upon completing this course,
                you will receive an internationally recognized certification, allowing you to become a
                <span className="text-white font-medium"> Registered Yoga Teacher (RYT)</span>.
                This certification opens doors for you to teach yoga anywhere in the world.
              </p>

              {/* Certification Badges - Real Images */}
              <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
                <Image src={yaRys100} alt="RYS 100" height={96} className="h-20 md:h-24 w-auto object-contain hover:scale-110 transition-transform duration-300" />
                <Image src={yaRys200} alt="RYS 200" height={96} className="h-20 md:h-24 w-auto object-contain hover:scale-110 transition-transform duration-300" />
                <Image src={yaRyt200} alt="RYT 200" height={96} className="h-20 md:h-24 w-auto object-contain hover:scale-110 transition-transform duration-300" />
              </div>

              {/* Full Certification Banner */}
              <div className="mt-10">
                <Image src={yaAllCertifications} alt="All Yoga Alliance Certifications" width={672} height={400} className="max-w-full md:max-w-2xl mx-auto rounded-lg shadow-lg" />
              </div>
            </div>
          </div>
        </section>

        {/* ===== SPECIAL WORKSHOPS ===== */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
              Special Workshops Included
            </h2>
            {/* Decorative Hands/Mudra Icon */}
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/60" />
              <svg className="w-12 h-8 text-primary" viewBox="0 0 48 32" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 28 L12 16 C12 12 16 10 20 14 L20 8 C20 4 24 4 24 8 L24 14 C24 10 28 10 28 14 L28 20 C28 18 32 18 32 22 L32 28" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="24" cy="20" r="6" fill="none" />
              </svg>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/60" />
            </div>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Enhance your training with these exclusive bonus workshops — all included free
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {workshops.map((workshop, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl bg-card shadow-card hover:shadow-elevated transition-all duration-500"
                >
                  {/* Image Container with Overlay */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={workshop.image}
                      alt={workshop.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />

                    {/* Workshop Number Badge */}
                    <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center">
                      <span className="font-heading font-bold text-primary-foreground text-sm">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

                    {/* Title on Image */}
                    <h3 className="absolute bottom-4 left-4 right-4 font-heading text-xl font-bold text-white leading-tight">
                      {workshop.title}
                    </h3>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {workshop.description}
                    </p>

                    {/* Decorative Line */}
                    <div className="mt-4 h-0.5 w-12 bg-primary/50 group-hover:w-full transition-all duration-500" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== EXCURSIONS ===== */}
        <section className="py-24 bg-background relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/50 rounded-full translate-x-1/3 translate-y-1/3" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <p className="text-primary uppercase tracking-[0.2em] text-sm mb-3">Beyond The Mat</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Sacred Excursions
              </h2>
              {/* Decorative Mountain/Nature Icon */}
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/60" />
                <svg className="w-12 h-8 text-primary" viewBox="0 0 48 32" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 28 L16 8 L24 18 L32 10 L44 28 Z" strokeLinejoin="round" />
                  <circle cx="38" cy="8" r="4" />
                </svg>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/60" />
              </div>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Immerse yourself in Bali's spiritual heritage through transformative experiences
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
              {excursions.map((excursion, index) => {
                const IconComponent = excursion.icon;
                return (
                  <div
                    key={index}
                    className="group relative"
                  >
                    {/* Hexagonal Image Container */}
                    <div className="relative mb-6">
                      <div className="aspect-square max-w-[280px] mx-auto overflow-hidden rounded-[2.5rem] shadow-card group-hover:shadow-elevated transition-shadow duration-500">
                        <Image
                          src={excursion.image}
                          alt={excursion.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>

                      {/* Floating Icon Badge */}
                      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-primary shadow-lg flex items-center justify-center transform group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300">
                        <IconComponent className="w-6 h-6 text-primary-foreground" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="text-center pt-4">
                      <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                        {excursion.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed px-2">
                        {excursion.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ===== POST-PROGRAM SUPPORT ===== */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
                Post-Program Support
              </h2>
              {/* Decorative Flourish */}
              <div className="flex items-center justify-center gap-2">
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/60" />
                <svg className="w-12 h-6 text-primary" viewBox="0 0 48 24" fill="none">
                  <path d="M24 12C24 12 20 4 12 4C4 4 0 12 0 12C0 12 4 20 12 20C20 20 24 12 24 12Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
                  <path d="M24 12C24 12 28 4 36 4C44 4 48 12 48 12C48 12 44 20 36 20C28 20 24 12 24 12Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
                  <circle cx="12" cy="12" r="2" fill="currentColor" />
                  <circle cx="36" cy="12" r="2" fill="currentColor" />
                </svg>
                <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/60" />
              </div>
            </div>

            {/* Support Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                {
                  image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=400&h=400&fit=crop",
                  title: "Bi-annual Upgrade Programs",
                  description: "Programs to deepen your experience of the practices and upgrade your teaching skills"
                },
                {
                  image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=400&fit=crop",
                  title: "Extensive Alumni Support",
                  description: "A dedicated alumni platform for queries, clarifications, and continuous learning"
                },
                {
                  image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=400&fit=crop",
                  title: "Community Connection",
                  description: "Integration into a vibrant and supportive global community of YogaGarhi alumni"
                },
                {
                  image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=400&fit=crop",
                  title: "Teaching Resources",
                  description: "Access to a repository of articles, videos, and teaching materials"
                }
              ].map((item, index) => (
                <div key={index} className="text-center group">
                  {/* Circular Image */}
                  <div className="relative mx-auto mb-6 w-48 h-48 rounded-full overflow-hidden border-4 border-secondary group-hover:border-primary/30 transition-all duration-300 shadow-card group-hover:shadow-elevated">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-lg font-bold text-foreground mb-3">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed px-2">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== ACCOMMODATION ===== */}
        {/* Hero Banner with Background */}
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 -z-10">
            <Image
              src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1920&h=1080&fit=crop"
              alt="Bali yoga retreat accommodation"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-foreground/60" />
          </div>

          {/* Content */}
          <div className="container mx-auto px-4 text-center relative z-10">
            {/* Main Title */}
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-[0.15em] uppercase mb-8">
              Accommodation
            </h2>

            {/* Subtitle */}
            <p className="font-heading text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-16 leading-relaxed">
              A serene yoga retreat in the heart of Bali's sacred Ubud region
            </p>

            {/* Location Features */}
            <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Feature 1 - Waterfalls */}
              <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl px-5 py-4">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <Droplets className="w-6 h-6 text-white" />
                </div>
                <p className="font-heading text-base md:text-lg text-white text-left">
                  10 beautiful waterfalls within 10 km
                </p>
              </div>

              {/* Feature 2 - Private Forest */}
              <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl px-5 py-4">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <Mountain className="w-6 h-6 text-white" />
                </div>
                <p className="font-heading text-base md:text-lg text-white text-left">
                  Private forest with an in-house waterfall
                </p>
              </div>

              {/* Feature 3 - Rice-field Trekking */}
              <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl px-5 py-4">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <p className="font-heading text-base md:text-lg text-white text-left">
                  Peaceful rice-field trekking on-site
                </p>
              </div>

              {/* Feature 4 - Distance to Ubud */}
              <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl px-5 py-4">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <p className="font-heading text-base md:text-lg text-white text-left">
                  Only 15 km from central Ubud
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Room Types Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <p className="text-primary uppercase tracking-[0.2em] text-sm mb-3">Choose Your Stay</p>
              <h3 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Room Options
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Rest and recharge in our peaceful living spaces, designed to support your yogic journey
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: "Triple Sharing",
                  beds: 3,
                  description: "Share your space with two like-minded yogis. A great way to build lasting friendships.",
                  originalPrice: "$1,399",
                  price: "$1,149",
                  images: [tripleBalcony, tripleBathroom, tripleBedroom1, tripleBedroom2, tripleBedroom3],
                  features: ["Hot Water", "AC/Fan", "Wi-Fi", "Daily Clean"],
                  badge: null,
                  isPopular: false,
                },
                {
                  title: "Double Sharing",
                  beds: 2,
                  description: "Share with one roommate. Perfect balance of community and personal space.",
                  originalPrice: "$1,649",
                  price: "$1,349",
                  images: [doubleBedroom1, doubleBedroom2, doubleBedroom3, doubleBedroom4, doubleBalcony],
                  features: ["Hot Water", "AC/Fan", "Wi-Fi", "Daily Clean"],
                  badge: "Most Popular",
                  isPopular: true,
                },
                {
                  title: "Private Room",
                  beds: 1,
                  description: "Your own sanctuary for complete privacy and deep personal reflection.",
                  originalPrice: "$1,999",
                  price: "$1,649",
                  images: [
                    privateNew2,
                    privateNew3,
                    privateNew4,
                    privateNew1,
                    privateBedroom1,
                    privateBedroom2,
                    privateBedroom3,
                    privateBathroom,
                    privateBalcony,
                  ],
                  features: ["Hot Water", "AC/Fan", "Wi-Fi", "Daily Clean"],
                  badge: "Premium",
                  isPopular: false,
                },
              ].map((room, roomIndex) => (
                <RoomCard
                  key={roomIndex}
                  room={room}
                  onBookNow={() => setShowEnrollDialog(true)}
                />
              ))}
            </div>

            {/* Common Amenities */}
            <div className="mt-16 max-w-4xl mx-auto">
              <h3 className="font-heading text-xl font-bold text-center text-foreground mb-8">
                All Rooms Include
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { icon: Wifi, label: "Free Wi-Fi" },
                  { icon: Droplets, label: "Hot Water" },
                  { icon: Wind, label: "AC / Fan" },
                  { icon: Sparkles, label: "Daily Cleaning" },
                ].map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={index} className="flex items-center gap-3 p-4 bg-secondary/30 rounded-lg">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                      <span className="font-medium text-foreground text-sm">{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ===== SATTVIC FOOD ===== */}
        <section className="py-20 bg-secondary/20 relative overflow-hidden">
          {/* Decorative Background */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-primary/5 -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-accent/5 translate-y-1/2 -translate-x-1/2" />

          <div className="container mx-auto px-4 relative z-10">
            {/* Section Header - Always Visible */}
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                <UtensilsCrossed className="w-4 h-4" />
                Nourishment for Body & Soul
              </span>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
                Sattvic Food Experience
              </h2>
              {/* Decorative Leaf/Plant Icon */}
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/60" />
                <svg className="w-10 h-10 text-primary" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M20 36 C20 36 20 20 20 12 C20 4 28 2 36 6 C36 14 30 20 20 20" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M20 20 C10 20 4 14 4 6 C12 2 20 4 20 12" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/60" />
              </div>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Three daily meals prepared with love, following ancient yogic principles
                to support your practice and elevate your consciousness.
              </p>
            </div>

            {/* Food Philosophy Grid - Always Visible */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
              {foodPhilosophy.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={index}
                    className="group text-center p-6 bg-background rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-card"
                  >
                    <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-heading font-bold text-foreground mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                );
              })}
            </div>

            {/* Collapsible Section - Daily Meals & More */}
            <Collapsible open={isFoodSectionOpen} onOpenChange={handleFoodSectionToggle}>
              {/* Collapse Trigger */}
              <CollapsibleTrigger asChild>
                <div ref={foodTriggerRef} className="text-center mb-10 cursor-pointer group scroll-mt-24">
                  <div className="inline-flex items-center gap-3 px-6 py-3 bg-background rounded-full border border-border hover:border-primary/40 transition-all duration-300 shadow-sm hover:shadow-card">
                    <h3 className="font-heading text-xl font-bold text-foreground">
                      A Day of Mindful Eating
                    </h3>
                    <ChevronDown className={`w-6 h-6 text-primary transition-transform duration-300 ${isFoodSectionOpen ? 'rotate-180' : ''}`} />
                  </div>
                  <p className="text-primary/70 text-sm mt-3 group-hover:text-primary transition-colors">
                    {isFoodSectionOpen ? 'Click to collapse' : 'Click to expand'}
                  </p>
                </div>
              </CollapsibleTrigger>

              <CollapsibleContent className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                <div className="pb-8">
                  {/* Daily Meals */}
                  <div className="max-w-6xl mx-auto">

                    <div className="grid md:grid-cols-3 gap-8">
                      {foodMenu.map((meal, index) => {
                        const MealIcon = meal.icon;
                        return (
                          <div
                            key={index}
                            className="group relative bg-background rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-elevated"
                          >
                            {/* Meal Image */}
                            <div className="relative h-48 overflow-hidden">
                              <Image
                                src={meal.image}
                                alt={meal.meal}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/20 to-transparent" />

                              {/* Meal Badge */}
                              <div className="absolute top-4 left-4 px-3 py-1.5 bg-background/90 backdrop-blur-sm rounded-full flex items-center gap-2">
                                <MealIcon className="w-4 h-4 text-primary" />
                                <span className="text-sm font-medium text-foreground">{meal.time}</span>
                              </div>

                              {/* Meal Title Overlay */}
                              <div className="absolute bottom-4 left-4">
                                <h4 className="font-heading text-2xl font-bold text-background">{meal.meal}</h4>
                              </div>
                            </div>

                            {/* Meal Items */}
                            <div className="p-6">
                              <ul className="space-y-3">
                                {meal.items.map((item, itemIndex) => (
                                  <li key={itemIndex} className="flex items-start gap-3 text-muted-foreground">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Hover Accent Line */}
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Dietary Options Grid */}
                  <div className="mt-20">
                    <h3 className="font-heading text-2xl font-bold text-center text-foreground mb-4">
                      We Cater To All Diets
                    </h3>
                    <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto">
                      Let us know your dietary requirements and we'll take care of everything
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
                      {dietaryOptions.map((diet, index) => {
                        const DietIcon = diet.icon;
                        return (
                          <div
                            key={index}
                            className="group text-center p-5 bg-background rounded-xl border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-card cursor-default"
                          >
                            <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                              <DietIcon className="w-5 h-5 text-primary" />
                            </div>
                            <h4 className="font-heading font-bold text-foreground text-sm mb-1">{diet.name}</h4>
                            <p className="text-xs text-muted-foreground">{diet.description}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Additional Food Info */}
                  <div className="mt-16 text-center">
                    <div className="inline-flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-2 px-4 py-2 bg-background rounded-full border border-border">
                        <Check className="w-4 h-4 text-primary" />
                        Fresh coconut water daily
                      </span>
                      <span className="flex items-center gap-2 px-4 py-2 bg-background rounded-full border border-border">
                        <Check className="w-4 h-4 text-primary" />
                        Seasonal tropical fruits
                      </span>
                      <span className="flex items-center gap-2 px-4 py-2 bg-background rounded-full border border-border">
                        <Check className="w-4 h-4 text-primary" />
                        Special requests welcome
                      </span>
                    </div>
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </section>

        {/* ===== UPCOMING DATES ===== */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-2">
              100 Hour Yoga Teacher Training
            </h2>
            <p className="text-center text-primary font-heading text-lg tracking-[0.3em] uppercase mb-2">
              Upcoming Dates
            </p>
            {/* Decorative Calendar Icon */}
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/60" />
              <svg className="w-10 h-10 text-primary" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="6" y="10" width="28" height="24" rx="3" />
                <line x1="6" y1="18" x2="34" y2="18" />
                <line x1="14" y1="6" x2="14" y2="12" />
                <line x1="26" y1="6" x2="26" y2="12" />
                <circle cx="14" cy="26" r="2" fill="currentColor" />
                <circle cx="20" cy="26" r="2" fill="currentColor" />
                <circle cx="26" cy="26" r="2" fill="currentColor" />
              </svg>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/60" />
            </div>
            <div className="w-16 h-0.5 bg-primary mx-auto mb-12" />

            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Dates List */}
                <div className="lg:col-span-2 space-y-0 divide-y divide-border border border-border rounded-xl overflow-hidden bg-card">
                  {upcomingDates.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-5 gap-4 hover:bg-secondary/30 transition-colors duration-200"
                    >
                      {/* Date */}
                      <div className="flex items-center gap-3 min-w-[200px]">
                        <Calendar className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="font-medium text-foreground">{item.date}</span>
                      </div>

                      {/* Spots Left */}
                      <span className={`text-sm px-3 py-1.5 rounded-md whitespace-nowrap ${item.spotsLeft <= 3
                        ? "bg-red-100 text-red-700"
                        : "bg-secondary text-secondary-foreground"
                        }`}>
                        Only {item.spotsLeft} spots left
                      </span>

                      {/* Early Bird */}
                      <div className="text-center">
                        <p className="font-heading font-bold text-foreground text-sm">Early Bird Price</p>
                        <p className="text-primary text-sm font-medium">save {item.earlyBirdSaving}</p>
                      </div>

                      {/* Book Button */}
                      <Button
                        variant="outline"
                        size="sm"
                        className="whitespace-nowrap"
                        onClick={() => setShowEnrollDialog(true)}
                      >
                        Book Now
                      </Button>
                    </div>
                  ))}
                </div>

                {/* Pricing Card */}
                <div className="lg:col-span-1">
                  <div className="bg-card border border-border rounded-xl overflow-hidden sticky top-24">
                    {/* Header */}
                    <div className="bg-primary text-primary-foreground p-4 text-center">
                      <h3 className="font-heading font-bold text-lg tracking-wide">100 HOUR YOGA TTC FEES</h3>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-5">
                      <p className="text-center text-foreground font-medium border-b border-border pb-4">
                        Course Duration: 21 Nights / 22 Days
                      </p>

                      {/* Triple Sharing */}
                      <div className="text-center p-4 bg-secondary/30 rounded-lg">
                        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Triple Sharing</p>
                        <p className="font-heading text-2xl font-bold text-foreground">
                          $1,149
                        </p>
                        <p className="text-muted-foreground line-through text-sm">
                          $1,399
                        </p>
                      </div>

                      {/* Double Sharing */}
                      <div className="text-center p-4 bg-secondary/30 rounded-lg">
                        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Double Sharing</p>
                        <p className="font-heading text-2xl font-bold text-foreground">
                          $1,349
                        </p>
                        <p className="text-muted-foreground line-through text-sm">
                          $1,649
                        </p>
                      </div>

                      {/* Private Room */}
                      <div className="text-center p-4 bg-secondary/30 rounded-lg">
                        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Private Room</p>
                        <p className="font-heading text-2xl font-bold text-foreground">
                          $1,649
                        </p>
                        <p className="text-muted-foreground line-through text-sm">
                          $1,999
                        </p>
                      </div>

                      {/* CTA */}
                      <Button
                        className="w-full"
                        size="lg"
                        onClick={() => setShowEnrollDialog(true)}
                      >
                        Enroll Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== GOOGLE REVIEWS ===== */}
        <section className="py-20 bg-secondary/30 relative overflow-hidden">
          {/* Yoga-themed Background Art */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Sri Yantra Pattern - Top Left */}
            <svg className="absolute top-10 left-10 w-48 h-48 text-primary/[0.04] animate-float" viewBox="0 0 100 100" fill="currentColor">
              <polygon points="50,5 95,95 5,95" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <polygon points="50,95 5,5 95,5" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <polygon points="50,20 80,80 20,80" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <polygon points="50,80 20,20 80,20" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </svg>

            {/* Lotus Pattern - Bottom Right */}
            <svg className="absolute bottom-10 right-10 w-64 h-64 text-primary/[0.03] animate-float-slow" style={{ animationDelay: '2s' }} viewBox="0 0 100 100" fill="currentColor">
              {/* Lotus petals */}
              <ellipse cx="50" cy="50" rx="8" ry="25" fill="none" stroke="currentColor" strokeWidth="0.4" />
              <ellipse cx="50" cy="50" rx="8" ry="25" fill="none" stroke="currentColor" strokeWidth="0.4" transform="rotate(30 50 50)" />
              <ellipse cx="50" cy="50" rx="8" ry="25" fill="none" stroke="currentColor" strokeWidth="0.4" transform="rotate(60 50 50)" />
              <ellipse cx="50" cy="50" rx="8" ry="25" fill="none" stroke="currentColor" strokeWidth="0.4" transform="rotate(90 50 50)" />
              <ellipse cx="50" cy="50" rx="8" ry="25" fill="none" stroke="currentColor" strokeWidth="0.4" transform="rotate(120 50 50)" />
              <ellipse cx="50" cy="50" rx="8" ry="25" fill="none" stroke="currentColor" strokeWidth="0.4" transform="rotate(150 50 50)" />
              <circle cx="50" cy="50" r="8" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </svg>

            {/* Om Symbol - Top Right */}
            <svg className="absolute top-20 right-24 w-32 h-32 text-primary/[0.05] animate-float-gentle" style={{ animationDelay: '1s' }} viewBox="0 0 100 100" fill="currentColor">
              <path d="M30,70 C20,70 15,60 15,50 C15,35 25,25 40,25 C55,25 60,35 60,45 C60,55 50,60 45,60 C40,60 35,55 35,50 C35,45 40,42 45,42" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M60,45 C60,35 70,30 75,35 C80,40 75,50 70,55 L65,70" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M70,20 C75,20 78,25 78,30" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <circle cx="80" cy="18" r="3" fill="currentColor" />
            </svg>

            {/* Mandala Circle - Bottom Left */}
            <svg className="absolute bottom-20 left-20 w-40 h-40 text-primary/[0.03] animate-float" style={{ animationDelay: '3s' }} viewBox="0 0 100 100" fill="currentColor">
              <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.3" />
              <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="0.3" />
              <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="0.3" />
              <circle cx="50" cy="50" r="30" strokeDasharray="2 4" />
              {/* Outer dots */}
              {isMounted && [0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                <circle key={i} cx={50 + 40 * Math.cos(angle * Math.PI / 180)} cy={50 + 40 * Math.sin(angle * Math.PI / 180)} r="2" fill="currentColor" opacity="0.5" />
              ))}
            </svg>

            {/* Chakra Symbol - Center Faded */}
            <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] text-primary/[0.02] animate-float-gentle" style={{ animationDelay: '4s' }} viewBox="0 0 100 100" fill="currentColor">
              <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.2" />
              <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.2" />
              <circle cx="50" cy="50" r="32" fill="none" stroke="currentColor" />
              <circle cx="50" cy="50" r="15" />
              {/* Radial lines */}
              {isMounted && [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => (
                <line key={i} x1="50" y1="50" x2={50 + 48 * Math.cos(angle * Math.PI / 180)} y2={50 + 48 * Math.sin(angle * Math.PI / 180)} stroke="currentColor" strokeWidth="0.15" />
              ))}
            </svg>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            {/* Header with Google Branding */}
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <svg className="w-8 h-8" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                <span className="font-heading text-xl font-semibold text-foreground">Google Reviews</span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                What Our Students Say
              </h2>

              {/* Overall Rating */}
              <div className="flex items-center justify-center gap-4 mb-2">
                <span className="font-heading text-5xl font-bold text-foreground">5.0</span>
                <div className="text-left">
                  <div className="flex gap-0.5 mb-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">Based on 127 reviews</p>
                </div>
              </div>
            </div>

            {/* Reviews Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                {
                  name: "Priya Sharma",
                  location: "Mumbai, India",
                  avatar: "PS",
                  rating: 5,
                  date: "2 weeks ago",
                  text: "The 200-hour YTTC at YogaGarhi was truly life-changing. The teachers bring such authenticity to traditional yoga practices. The Shiv-Shakti method is unique and helped me understand yoga at a deeper level. Highly recommend for anyone serious about yoga."
                },
                {
                  name: "Emma Thompson",
                  location: "London, UK",
                  avatar: "ET",
                  rating: 5,
                  date: "1 month ago",
                  text: "I researched many schools before choosing YogaGarhi, and I am so glad I did. The small group size meant personalized attention from teachers. The location in Bali is stunning. I left feeling confident to teach and with friends for life."
                },
                {
                  name: "Michael Chen",
                  location: "Sydney, Australia",
                  avatar: "MC",
                  rating: 5,
                  date: "3 weeks ago",
                  text: "The Pre-YTTC preparation was incredibly helpful. By the time the actual training started, I felt ready and confident. The daily schedule is intensive but balanced. The sattvic food was delicious and kept my energy high throughout."
                },
                {
                  name: "Sarah Williams",
                  location: "California, USA",
                  avatar: "SW",
                  rating: 5,
                  date: "1 month ago",
                  text: "YogaGarhi exceeded all my expectations. The philosophy classes with deep discussions on yoga sutras were my favorite. The teachers live and breathe yoga. This is not a commercial training - it is a genuine spiritual experience."
                },
                {
                  name: "Anika Mueller",
                  location: "Berlin, Germany",
                  avatar: "AM",
                  rating: 5,
                  date: "2 months ago",
                  text: "What sets YogaGarhi apart is their multi-style approach. Learning Hatha, Vinyasa, Ashtanga, and Iyengar gave me a complete foundation. The 35+ sequencing book I received is something I use daily in my teaching practice now."
                },
                {
                  name: "James O'Brien",
                  location: "Dublin, Ireland",
                  avatar: "JO",
                  rating: 5,
                  date: "6 weeks ago",
                  text: "The accommodation was comfortable and the food was amazing. But more importantly, the teaching methodology is exceptional. Every teacher brought something unique. The pranayama and meditation sessions at sunrise were magical."
                },
              ].map((review, index) => (
                <ReviewCard key={index} review={review} />
              ))}
            </div>

            {/* View All Reviews Link */}
            <div className="text-center mt-10">
              <a
                href="https://maps.app.goo.gl/qE7ouyMxUyLsRhNk6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
              >
                View all reviews on Google
                <ChevronDown className="w-4 h-4 -rotate-90" />
              </a>
            </div>
          </div>
        </section>


        {/* ===== BOOK A CALL ===== */}
        <section id="book-call" className="py-20 bg-secondary/20 relative overflow-hidden">
          {/* Decorative Background */}
          <div className="absolute top-0 left-0 w-[300px] h-[300px] rounded-full bg-primary/5 -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-primary/5 translate-x-1/2 translate-y-1/2" />

          <div className="container mx-auto px-4 relative z-10">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              Do you have any questions?
            </h2>

            <div className="max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8 bg-card rounded-2xl overflow-hidden shadow-elevated border border-border">
                {/* Left: Calendar Section */}
                <div className="bg-foreground text-primary-foreground p-8">
                  {/* Logo/Icon */}
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary-foreground/10 border-2 border-primary-foreground/30 flex items-center justify-center">
                    <span className="font-heading text-2xl font-bold">YG</span>
                  </div>

                  <h3 className="font-heading text-xl font-bold text-center mb-6">
                    Meet with YogaGarhi
                  </h3>

                  {/* Month Navigation */}
                  <div className="flex items-center justify-center gap-4 mb-6">
                    <button
                      onClick={() => setSelectedMonth(prev => prev > 0 ? prev - 1 : 11)}
                      className="p-1 hover:bg-primary-foreground/10 rounded transition-colors"
                    >
                      <ChevronDown className="w-5 h-5 rotate-90" />
                    </button>
                    <span className="font-heading font-bold text-lg min-w-[140px] text-center">
                      {["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][selectedMonth]} 2026
                    </span>
                    <button
                      onClick={() => setSelectedMonth(prev => prev < 11 ? prev + 1 : 0)}
                      className="p-1 hover:bg-primary-foreground/10 rounded transition-colors"
                    >
                      <ChevronDown className="w-5 h-5 -rotate-90" />
                    </button>
                  </div>

                  {/* Calendar Grid */}
                  <div className="grid grid-cols-7 gap-1 text-center text-sm">
                    {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map(day => (
                      <div key={day} className="py-2 text-xs font-medium text-primary-foreground/60">
                        {day}
                      </div>
                    ))}
                    {/* Empty cells for offset */}
                    {Array.from({ length: 3 }).map((_, i) => (
                      <div key={`empty-${i}`} className="py-2" />
                    ))}
                    {/* Days */}
                    {Array.from({ length: 31 }).map((_, i) => {
                      const day = i + 1;
                      const isSelected = selectedDay === day;
                      // All upcoming dates (today and future) are available
                      const today = new Date();
                      const currentYear = 2026;
                      const calendarDate = new Date(currentYear, selectedMonth, day);
                      const isUpcoming = calendarDate >= new Date(today.getFullYear(), today.getMonth(), today.getDate());
                      // Check if the day exists in this month
                      const daysInMonth = new Date(currentYear, selectedMonth + 1, 0).getDate();
                      const isValidDay = day <= daysInMonth;
                      const isAvailable = isValidDay && isUpcoming;

                      if (!isValidDay) return null;

                      return (
                        <button
                          key={day}
                          onClick={() => isAvailable && setSelectedDay(day)}
                          disabled={!isAvailable}
                          className={`py-2 rounded-full text-sm transition-all ${isSelected
                            ? "bg-primary text-primary-foreground"
                            : isAvailable
                              ? "text-primary-foreground hover:bg-primary-foreground/10"
                              : "text-primary-foreground/30 cursor-not-allowed"
                            }`}
                        >
                          {day}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Right: Time Slots Section */}
                <div className="p-8">
                  {/* Meeting Duration */}
                  <div className="mb-8">
                    <h4 className="font-medium text-foreground mb-3">Meeting duration</h4>
                    <div className="bg-secondary/50 rounded-lg p-3 text-center text-muted-foreground">
                      30 mins
                    </div>
                  </div>

                  {/* Time Selection */}
                  <div>
                    <h4 className="font-medium text-foreground mb-1">What time works best?</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Showing times for <span className="font-medium text-foreground">{selectedDay} {["January", "February", "March"][selectedMonth]} 2026</span>
                    </p>

                    {/* Timezone Dropdown */}
                    <div className="relative mb-4">
                      <button
                        onClick={() => setShowTimezoneDropdown(!showTimezoneDropdown)}
                        className="flex items-center gap-2 text-primary text-sm hover:underline"
                      >
                        <Clock className="w-4 h-4" />
                        {selectedTimezone}
                        <ChevronDown className={`w-4 h-4 transition-transform ${showTimezoneDropdown ? 'rotate-180' : ''}`} />
                      </button>

                      {showTimezoneDropdown && (
                        <div className="absolute top-full left-0 mt-2 w-full max-w-xs bg-card border border-border rounded-lg shadow-lg z-50 max-h-64 overflow-y-auto">
                          {timezones.map((tz) => (
                            <button
                              key={tz.value}
                              onClick={() => {
                                setSelectedTimezone(tz.value);
                                setShowTimezoneDropdown(false);
                              }}
                              className={`w-full text-left px-4 py-2.5 text-sm hover:bg-secondary transition-colors ${selectedTimezone === tz.value ? 'bg-primary/10 text-primary font-medium' : 'text-foreground'
                                }`}
                            >
                              {tz.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Time Slots */}
                    <div className="space-y-3 max-h-[280px] overflow-y-auto pr-2">
                      {["10:00 AM", "10:30 AM", "11:00 AM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM"].map((time) => (
                        <button
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={`w-full py-3 px-4 rounded-lg border text-center transition-all ${selectedTime === time
                            ? "border-primary bg-primary/10 text-primary font-medium"
                            : "border-border hover:border-primary/50 text-foreground"
                            }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>

                    {/* Confirm Button */}
                    <Button
                      className="w-full mt-6"
                      size="lg"
                      disabled={!selectedDay || !selectedTime}
                      onClick={() => setShowBookingDialog(true)}
                    >
                      Confirm Booking
                    </Button>

                    {/* Booking Confirmation Dialog */}
                    <Dialog open={showBookingDialog} onOpenChange={setShowBookingDialog}>
                      <DialogContent className="sm:max-w-md">
                        <DialogHeader>
                          <DialogTitle className="font-heading text-xl">Complete Your Booking</DialogTitle>
                          <p className="text-sm text-muted-foreground mt-2">
                            {selectedDay && selectedTime && (
                              <>Scheduled for {selectedDay} {["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][selectedMonth]} 2026 at {selectedTime}</>
                            )}
                          </p>
                        </DialogHeader>

                        <div className="space-y-4 mt-4">
                          {/* Name */}
                          <div>
                            <label className="block text-sm font-medium text-foreground mb-2">
                              Full Name <span className="text-destructive">*</span>
                            </label>
                            <input
                              type="text"
                              value={bookingForm.name}
                              onChange={(e) => setBookingForm(prev => ({ ...prev, name: e.target.value }))}
                              placeholder="Enter your full name"
                              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                            />
                          </div>

                          {/* Contact/WhatsApp */}
                          <div>
                            <label className="block text-sm font-medium text-foreground mb-2">
                              Contact / WhatsApp Number <span className="text-destructive">*</span>
                            </label>
                            <div className="flex gap-2">
                              <select
                                value={bookingForm.countryCode}
                                onChange={(e) => setBookingForm(prev => ({ ...prev, countryCode: e.target.value }))}
                                className="w-28 px-2 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
                              >
                                <option value="+1">🇺🇸 +1</option>
                                <option value="+44">🇬🇧 +44</option>
                                <option value="+91">🇮🇳 +91</option>
                                <option value="+61">🇦🇺 +61</option>
                                <option value="+49">🇩🇪 +49</option>
                                <option value="+33">🇫🇷 +33</option>
                                <option value="+39">🇮🇹 +39</option>
                                <option value="+34">🇪🇸 +34</option>
                                <option value="+31">🇳🇱 +31</option>
                                <option value="+46">🇸🇪 +46</option>
                                <option value="+47">🇳🇴 +47</option>
                                <option value="+45">🇩🇰 +45</option>
                                <option value="+358">🇫🇮 +358</option>
                                <option value="+41">🇨🇭 +41</option>
                                <option value="+43">🇦🇹 +43</option>
                                <option value="+32">🇧🇪 +32</option>
                                <option value="+351">🇵🇹 +351</option>
                                <option value="+48">🇵🇱 +48</option>
                                <option value="+7">🇷🇺 +7</option>
                                <option value="+380">🇺🇦 +380</option>
                                <option value="+81">🇯🇵 +81</option>
                                <option value="+82">🇰🇷 +82</option>
                                <option value="+86">🇨🇳 +86</option>
                                <option value="+852">🇭🇰 +852</option>
                                <option value="+65">🇸🇬 +65</option>
                                <option value="+60">🇲🇾 +60</option>
                                <option value="+62">🇮🇩 +62</option>
                                <option value="+66">🇹🇭 +66</option>
                                <option value="+84">🇻🇳 +84</option>
                                <option value="+63">🇵🇭 +63</option>
                                <option value="+92">🇵🇰 +92</option>
                                <option value="+880">🇧🇩 +880</option>
                                <option value="+94">🇱🇰 +94</option>
                                <option value="+977">🇳🇵 +977</option>
                                <option value="+971">🇦🇪 +971</option>
                                <option value="+966">🇸🇦 +966</option>
                                <option value="+972">🇮🇱 +972</option>
                                <option value="+90">🇹🇷 +90</option>
                                <option value="+20">🇪🇬 +20</option>
                                <option value="+27">🇿🇦 +27</option>
                                <option value="+234">🇳🇬 +234</option>
                                <option value="+254">🇰🇪 +254</option>
                                <option value="+55">🇧🇷 +55</option>
                                <option value="+52">🇲🇽 +52</option>
                                <option value="+54">🇦🇷 +54</option>
                                <option value="+57">🇨🇴 +57</option>
                                <option value="+56">🇨🇱 +56</option>
                                <option value="+51">🇵🇪 +51</option>
                                <option value="+64">🇳🇿 +64</option>
                                <option value="+353">🇮🇪 +353</option>
                                <option value="+30">🇬🇷 +30</option>
                                <option value="+36">🇭🇺 +36</option>
                                <option value="+420">🇨🇿 +420</option>
                                <option value="+40">🇷🇴 +40</option>
                                <option value="+375">🇧🇾 +375</option>
                                <option value="+370">🇱🇹 +370</option>
                                <option value="+371">🇱🇻 +371</option>
                                <option value="+372">🇪🇪 +372</option>
                              </select>
                              <input
                                type="tel"
                                value={bookingForm.contact}
                                onChange={(e) => setBookingForm(prev => ({ ...prev, contact: e.target.value }))}
                                placeholder="Phone number"
                                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                              />
                            </div>
                          </div>

                          {/* Email */}
                          <div>
                            <label className="block text-sm font-medium text-foreground mb-2">
                              Email Address <span className="text-destructive">*</span>
                            </label>
                            <input
                              type="email"
                              value={bookingForm.email}
                              onChange={(e) => setBookingForm(prev => ({ ...prev, email: e.target.value }))}
                              placeholder="you@example.com"
                              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                            />
                          </div>

                          {/* Course Selection */}
                          <div>
                            <label className="block text-sm font-medium text-foreground mb-2">
                              Which course are you joining? <span className="text-destructive">*</span>
                            </label>
                            <div className="space-y-2">
                              {[
                                { value: '100', label: '100 Hour YTTC' },
                                { value: '200', label: '200 Hour YTTC' },
                                { value: '300', label: '300 Hour YTTC' }
                              ].map((option) => (
                                <label
                                  key={option.value}
                                  className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all ${bookingForm.course === option.value
                                    ? 'border-primary bg-primary/10'
                                    : 'border-border hover:border-primary/50'
                                    }`}
                                >
                                  <input
                                    type="radio"
                                    name="course"
                                    value={option.value}
                                    checked={bookingForm.course === option.value}
                                    onChange={(e) => setBookingForm(prev => ({ ...prev, course: e.target.value }))}
                                    className="w-4 h-4 text-primary"
                                  />
                                  <span className="text-foreground">{option.label}</span>
                                </label>
                              ))}
                            </div>
                          </div>
                        </div>

                        <Button
                          className="w-full mt-6"
                          size="lg"
                          disabled={!isBookingFormComplete || isSubmittingBooking}
                          onClick={handleBookingSubmit}
                        >
                          {isSubmittingBooking ? "Booking..." : "Submit Booking"}
                        </Button>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </div>

              {/* Alternative Contact */}
              <div className="mt-8 text-center">
                <p className="text-muted-foreground mb-4">Or reach us directly</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="outline" asChild>
                    <a href="https://wa.me/917895350563" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp Us
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="mailto:yogagarhi@gmail.com">
                      <Mail className="w-4 h-4 mr-2" />
                      Email Us
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== CODE OF CONDUCT & REFUND ===== */}
        <section className="py-12 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-6 max-w-5xl mx-auto">
              {/* Code of Conduct */}
              <div className="flex-1 bg-card rounded-xl p-6 border border-border shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <BookMarked className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground">
                    Code of Conduct
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Punctual attendance",
                    "No alcohol/smoking",
                    "Vegetarian only",
                    "Silence in class",
                    "Modest clothing",
                    "Respect all",
                    "No phones in class",
                    "Full attendance required"
                  ].map((item, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-secondary/50 rounded-full text-xs text-muted-foreground"
                    >
                      <Check className="w-3 h-3 text-primary" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Refund Policy */}
              <div className="flex-1 bg-card rounded-xl p-6 border border-border shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <RefreshCw className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground">
                    Refund & Cancellation
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Reschedule within 12 months",
                    "Transfer seat allowed",
                    "Full refund if we cancel",
                    "Trial day policy",
                    "No refund after Day 1"
                  ].map((item, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-secondary/50 rounded-full text-xs text-muted-foreground"
                    >
                      <Check className="w-3 h-3 text-primary" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== STUDENT STORIES ===== */}
        <StudentStoriesSection />


        {/* ===== LOCATION & MAP ===== */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
              Location
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              Ds Madangan Kaja, Desa Petak, Petak Kaja, Kec. Gianyar, Kabupaten Gianyar, Bali 80515, Indonesia
            </p>

            <div className="max-w-4xl mx-auto">
              <div className="aspect-video rounded-lg overflow-hidden bg-muted shadow-elevated">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.5!2d115.3!3d-8.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd217a4e2d26eaf%3A0x5b5a8f3b5f9b9c0a!2sYoga%20Teacher%20Training%20in%20Bali%20-%20Yogagarhi!5e0!3m2!1sen!2sin!4v1704067200000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Yogagarhi Location - Gianyar, Bali"
                />
              </div>

              {/* Location Details */}
              <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="outline" asChild>
                  <a
                    href="https://maps.app.goo.gl/u6pCMseX1a6ADLCA8"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MapPin className="w-4 h-4 mr-2" />
                    Open in Google Maps
                  </a>
                </Button>
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Open 24 hours</span> • Gianyar, Bali
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== FINAL CONVERSION HUB ===== */}
        <section className="py-20 relative overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <Image
              src={heroImage}
              alt=""
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-foreground/85" />
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-primary/10 blur-3xl" />

          <div className="container mx-auto px-4 relative z-10">
            <p className="text-center text-primary-foreground/70 uppercase tracking-widest text-sm mb-4">
              Your Journey Awaits
            </p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-center text-primary-foreground mb-6">
              Ready to Begin?
            </h2>
            <p className="text-center text-primary-foreground/80 max-w-2xl mx-auto mb-12">
              Take the first step towards becoming a certified yoga teacher
            </p>

            <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
                onClick={() => setShowEnrollDialog(true)}
              >
                Start Your Journey
              </Button>
              <Button
                size="lg"
                className="bg-primary-foreground/10 backdrop-blur-sm border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/20"
                onClick={() => setShowManualDialog(true)}
              >
                <BookOpen className="w-4 h-4 mr-2" />
                Get Free Manual
              </Button>
              <Button
                size="lg"
                className="bg-primary-foreground/10 backdrop-blur-sm border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/20"
                onClick={() => setShowQuizDialog(true)}
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Reveal Your Yogic Energy
              </Button>
              <Button
                size="lg"
                className="bg-primary-foreground/10 backdrop-blur-sm border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/20"
                onClick={() => setShowWebinarDialog(true)}
              >
                <Play className="w-4 h-4 mr-2" />
                Free Webinar
              </Button>
              <Button
                size="lg"
                className="bg-primary-foreground/10 backdrop-blur-sm border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/20"
                onClick={() => openBookingDialog(true)}
              >
                <Phone className="w-4 h-4 mr-2" />
                Book a Call
              </Button>
              <Button
                size="lg"
                className="bg-primary-foreground/10 backdrop-blur-sm border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/20"
                onClick={() => setShowPreYTTCDialog(true)}
              >
                <GraduationCap className="w-4 h-4 mr-2" />
                Get Pre-YTTC Detail
              </Button>
              <Button
                size="lg"
                className="bg-[#25D366] hover:bg-[#22c55e] text-white font-semibold border-0"
                asChild
              >
                <a href="https://wa.me/917895350563" target="_blank" rel="noopener noreferrer">
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* ===== INSTAGRAM FOLLOW ===== */}
        <section className="py-20 bg-background overflow-hidden">
          <div className="container mx-auto px-4">
            {/* Header */}
            <div className="text-center mb-12">
              <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">
                Behind the Scenes
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Follow Our Journey
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Daily moments of transformation, wisdom, and community from Bali
              </p>
            </div>

            {/* Instagram Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4 max-w-6xl mx-auto mb-12">
              {[
                { img: activityAyurveda, likes: "234", type: "image" },
                { img: activitySoundHealing, likes: "189", type: "image" },
                { img: heroImage, likes: "412", type: "reel" },
                { img: activityWaterfall, likes: "156", type: "image" },
                { img: webinarBackground, likes: "298", type: "reel" },
              ].map((post, index) => (
                <a
                  key={index}
                  href="https://www.instagram.com/yogagarhi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative aspect-square rounded-xl overflow-hidden bg-muted"
                >
                  <Image
                    src={post.img}
                    alt={`Instagram post ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex items-center gap-3 text-primary-foreground">
                      <div className="flex items-center gap-1">
                        <Heart className="w-5 h-5 fill-primary-foreground" />
                        <span className="font-medium">{post.likes}</span>
                      </div>
                    </div>
                  </div>
                  {/* Reel indicator */}
                  {post.type === "reel" && (
                    <div className="absolute top-2 right-2">
                      <Play className="w-5 h-5 text-primary-foreground drop-shadow-lg" />
                    </div>
                  )}
                </a>
              ))}
            </div>

            {/* Follow CTA */}
            <div className="text-center">
              <a
                href="https://www.instagram.com/yogagarhi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] p-[2px] rounded-full group"
              >
                <div className="flex items-center gap-3 bg-background rounded-full px-6 py-3 group-hover:bg-transparent transition-colors duration-300">
                  <Instagram className="w-6 h-6 text-foreground group-hover:text-primary-foreground transition-colors" />
                  <span className="font-heading font-semibold text-foreground group-hover:text-primary-foreground transition-colors">
                    @yogagarhi
                  </span>
                  <span className="text-muted-foreground group-hover:text-primary-foreground/80 transition-colors text-sm">
                    Follow us
                  </span>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* ===== ENROLLMENT FORM DIALOG ===== */}
        <Dialog open={showEnrollDialog} onOpenChange={setShowEnrollDialog}>
          <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="font-heading text-2xl">Enroll Now</DialogTitle>
              <p className="text-sm text-muted-foreground">
                Fill in your details to begin your yoga journey
              </p>
            </DialogHeader>

            <div className="space-y-4 mt-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Name <span className="text-destructive">*</span>
                </label>
                <input
                  type="text"
                  value={enrollForm.name}
                  onChange={(e) => setEnrollForm(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email <span className="text-destructive">*</span>
                </label>
                <input
                  type="email"
                  value={enrollForm.email}
                  onChange={(e) => setEnrollForm(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>

              {/* Contact/WhatsApp */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Contact No./WhatsApp No. <span className="text-destructive">*</span>
                </label>
                <div className="flex gap-2">
                  <select
                    value={enrollForm.countryCode}
                    onChange={(e) => setEnrollForm(prev => ({ ...prev, countryCode: e.target.value }))}
                    className="w-28 px-2 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
                  >
                    <option value="+1">🇺🇸 +1</option>
                    <option value="+44">🇬🇧 +44</option>
                    <option value="+91">🇮🇳 +91</option>
                    <option value="+61">🇦🇺 +61</option>
                    <option value="+49">🇩🇪 +49</option>
                    <option value="+33">🇫🇷 +33</option>
                    <option value="+39">🇮🇹 +39</option>
                    <option value="+34">🇪🇸 +34</option>
                    <option value="+31">🇳🇱 +31</option>
                    <option value="+46">🇸🇪 +46</option>
                    <option value="+47">🇳🇴 +47</option>
                    <option value="+45">🇩🇰 +45</option>
                    <option value="+358">🇫🇮 +358</option>
                    <option value="+41">🇨🇭 +41</option>
                    <option value="+43">🇦🇹 +43</option>
                    <option value="+32">🇧🇪 +32</option>
                    <option value="+351">🇵🇹 +351</option>
                    <option value="+48">🇵🇱 +48</option>
                    <option value="+7">🇷🇺 +7</option>
                    <option value="+380">🇺🇦 +380</option>
                    <option value="+81">🇯🇵 +81</option>
                    <option value="+82">🇰🇷 +82</option>
                    <option value="+86">🇨🇳 +86</option>
                    <option value="+852">🇭🇰 +852</option>
                    <option value="+65">🇸🇬 +65</option>
                    <option value="+60">🇲🇾 +60</option>
                    <option value="+62">🇮🇩 +62</option>
                    <option value="+66">🇹🇭 +66</option>
                    <option value="+84">🇻🇳 +84</option>
                    <option value="+63">🇵🇭 +63</option>
                    <option value="+92">🇵🇰 +92</option>
                    <option value="+880">🇧🇩 +880</option>
                    <option value="+94">🇱🇰 +94</option>
                    <option value="+977">🇳🇵 +977</option>
                    <option value="+971">🇦🇪 +971</option>
                    <option value="+966">🇸🇦 +966</option>
                    <option value="+972">🇮🇱 +972</option>
                    <option value="+90">🇹🇷 +90</option>
                    <option value="+20">🇪🇬 +20</option>
                    <option value="+27">🇿🇦 +27</option>
                    <option value="+234">🇳🇬 +234</option>
                    <option value="+254">🇰🇪 +254</option>
                    <option value="+55">🇧🇷 +55</option>
                    <option value="+52">🇲🇽 +52</option>
                    <option value="+54">🇦🇷 +54</option>
                    <option value="+57">🇨🇴 +57</option>
                    <option value="+56">🇨🇱 +56</option>
                    <option value="+51">🇵🇪 +51</option>
                    <option value="+64">🇳🇿 +64</option>
                    <option value="+353">🇮🇪 +353</option>
                    <option value="+30">🇬🇷 +30</option>
                    <option value="+36">🇭🇺 +36</option>
                    <option value="+420">🇨🇿 +420</option>
                    <option value="+40">🇷🇴 +40</option>
                    <option value="+375">🇧🇾 +375</option>
                    <option value="+370">🇱🇹 +370</option>
                    <option value="+371">🇱🇻 +371</option>
                    <option value="+372">🇪🇪 +372</option>
                  </select>
                  <input
                    type="tel"
                    value={enrollForm.contact}
                    onChange={(e) => setEnrollForm(prev => ({ ...prev, contact: e.target.value }))}
                    placeholder="Phone number"
                    className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
              </div>

              {/* Course Name */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Course Name <span className="text-destructive">*</span>
                </label>
                <select
                  value={enrollForm.courseName}
                  onChange={(e) => setEnrollForm(prev => ({ ...prev, courseName: e.target.value }))}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                >
                  <option value="">Choose Your Yoga Course</option>
                  <option value="100 Hour Yoga Teacher Training Course in Bali">100 Hour Yoga Teacher Training Course in Bali</option>
                  <option value="200 Hour Yoga Teacher Training Course in Bali">200 Hour Yoga Teacher Training Course in Bali</option>
                  <option value="300 Hour Yoga Teacher Training Course in Bali">300 Hour Yoga Teacher Training Course in Bali</option>
                </select>
              </div>

              {/* Course Date */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Course Date <span className="text-destructive">*</span>
                </label>
                <select
                  value={enrollForm.courseDate}
                  onChange={(e) => setEnrollForm(prev => ({ ...prev, courseDate: e.target.value }))}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                >
                  <option value="">Choose...</option>
                  {courseDates.map((date) => (
                    <option key={date} value={date}>{date}</option>
                  ))}
                </select>
              </div>

              {/* Accommodation */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Accommodation <span className="text-destructive">*</span>
                </label>
                <select
                  value={enrollForm.accommodation}
                  onChange={(e) => setEnrollForm(prev => ({ ...prev, accommodation: e.target.value }))}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                >
                  <option value="">Select Accommodation</option>
                  <option value="Private Room">Private Room</option>
                  <option value="Shared Room">Shared Room</option>
                  <option value="Deluxe Room">Deluxe Room</option>
                </select>
              </div>

              {/* Gender */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Gender <span className="text-destructive">*</span>
                </label>
                <select
                  value={enrollForm.gender}
                  onChange={(e) => setEnrollForm(prev => ({ ...prev, gender: e.target.value }))}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Others">Others</option>
                </select>
              </div>

              {/* Country */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Country <span className="text-destructive">*</span>
                </label>
                <input
                  type="text"
                  value={enrollForm.country}
                  onChange={(e) => setEnrollForm(prev => ({ ...prev, country: e.target.value }))}
                  placeholder="Enter your country"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>

              {/* Source */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  From where you get to know about us? <span className="text-destructive">*</span>
                </label>
                <select
                  value={enrollForm.source}
                  onChange={(e) => setEnrollForm(prev => ({ ...prev, source: e.target.value }))}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                >
                  <option value="">Choose</option>
                  <option value="Google Search">Google Search</option>
                  <option value="Social Media">Social Media</option>
                  <option value="Recommendation">Recommendation</option>
                  <option value="Any other source">Any other source</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  value={enrollForm.message}
                  onChange={(e) => setEnrollForm(prev => ({ ...prev, message: e.target.value }))}
                  placeholder="Any additional message or questions..."
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                />
              </div>
            </div>

            <Button
              className="w-full mt-6"
              size="lg"
              disabled={!isEnrollFormComplete || isSubmittingEnroll}
              onClick={handleEnrollSubmit}
            >
              {isSubmittingEnroll ? "Submitting..." : "Submit Enrollment"}
            </Button>
          </DialogContent>
        </Dialog>

        {/* ===== QUICK ENQUIRY DIALOG ===== */}
        <Dialog open={showQuickEnquiryDialog} onOpenChange={setShowQuickEnquiryDialog}>
          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <DialogTitle className="font-heading text-2xl">Quick Enquiry</DialogTitle>
              <p className="text-sm text-muted-foreground">
                Connect with us and begin your journey of transformation
              </p>
            </DialogHeader>

            <form onSubmit={handleQuickEnquirySubmit} className="space-y-4 mt-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Name <span className="text-destructive">*</span>
                </label>
                <Input
                  type="text"
                  required
                  value={quickEnquiryForm.name}
                  onChange={(e) => setQuickEnquiryForm(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email <span className="text-destructive">*</span>
                </label>
                <Input
                  type="email"
                  required
                  value={quickEnquiryForm.email}
                  onChange={(e) => setQuickEnquiryForm(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="your@email.com"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message <span className="text-destructive">*</span>
                </label>
                <Textarea
                  required
                  value={quickEnquiryForm.message}
                  onChange={(e) => setQuickEnquiryForm(prev => ({ ...prev, message: e.target.value }))}
                  placeholder="Tell us about your interest in yoga teacher training..."
                  className="min-h-[120px]"
                />
              </div>

              {/* Trust Badge */}
              <div className="bg-accent/20 rounded-lg p-4">
                <p className="text-sm text-foreground">
                  We Trust The Depth Of What We Offer. If, After The First Day, You Feel This Journey Is Not Meant For You, We Will Offer A 100% Full Refund With Complete Respect.
                </p>
              </div>

              <Button type="submit" className="w-full" size="lg">
                Submit Enquiry
              </Button>
            </form>
          </DialogContent>
        </Dialog>

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-primary text-primary-foreground rounded-full shadow-elevated hover:bg-primary/90 transition-all duration-300 flex items-center justify-center animate-fade-in hover:scale-110"
            aria-label="Scroll to top"
          >
            <ChevronDown className="w-6 h-6 rotate-180" />
          </button>
        )}
      </Layout >
    </>
  );
}
