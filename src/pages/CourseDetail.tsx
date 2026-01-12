import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Check, Clock, Users, Award, MapPin, Utensils, Gift, ChevronDown, ChevronUp } from "lucide-react";
import heroImage from "@/assets/hero-yoga-bali.jpg";
import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

// What Sets Apart section images
import apartHammock from "@/assets/apart/hammock.jpg";
import apartSeatedTalk from "@/assets/apart/seated-talk.jpg";
import apartGroupPose from "@/assets/apart/group-pose.jpg";
import apartCeremony from "@/assets/apart/ceremony.jpg";
import apartGroupClass from "@/assets/apart/group-class.jpg";
import apartChildPose from "@/assets/apart/child-pose.jpg";
import apartWaterTemple from "@/assets/apart/water-temple.jpg";
import apartPoolVilla from "@/assets/apart/pool-villa.jpg";
import apartMountainPose from "@/assets/apart/mountain-pose.jpg";

const apartImages = [
  apartHammock,
  apartSeatedTalk,
  apartGroupPose,
  apartCeremony,
  apartGroupClass,
  apartChildPose,
  apartWaterTemple,
  apartPoolVilla,
  apartMountainPose,
];

const courseData = {
  "100-hour": {
    title: "100 HOUR YOGA",
    subtitle: "TEACHER TRAINING COURSE IN BALI",
    duration: "12 Days",
    location: "Nature's Escape Resort in Ubud Bali",
    level: "Beginner",
    originalPrice: "$1436",
    price: "$1149",
    certification: "Yoga Alliance Certification",
    meals: "Delicious and Nutritious Vegan & Vegetarian Dishes",
    bonus: "Get a bonus 1 month access of live class, an ancient yoga textbook, and a non-slip yoga mat to elevate your practice.",
    welcomeTitle: "Welcome to Yogagarhi",
    welcomeText: "Become a Yoga Alliance Registered Yoga Teacher through Yogagarhi's 100-Hour Yoga Teacher Training (TTC) in Bali Ubud and join a life-changing journey of yoga and self-realization. The 100-Hour Yoga Teacher Training (TTC) course is made for beginners practitioners and yoga enthusiasts who want to kickstart their yoga journey. This course covers all essential aspects of yoga, including asanas, pranayama, anatomy and teaching methodology.",
    welcomeText2: "Become a part of this transformative once in a lifetime experience in the mesmerizing beauty of Bali. This holistic program prepares you to become a professional yoga teacher having expertise, skills, and confidence. By the end of this course, you'll be ready to teach yoga anywhere in the world while spreading wellness, peace, and love.",
    features: [
      { title: "Multi-style Yoga Teaching", description: "Learn yoga in its authentic, time-tested way. Our teachers preserve the wisdom of yogic tradition." },
      { title: "Yoga Alliance Certified", description: "Receive globally recognized certification. Begin teaching yoga with confidence worldwide." },
      { title: "Peaceful Bali Surroundings", description: "Experience yoga in the lap of nature. Calm beaches and greenery deepen your practice." },
      { title: "Outdoor Excursions", description: "Explore temples, beaches, and nature walks. Balance learning with adventure and culture." },
      { title: "Small Batch Sizes", description: "Get personal attention and guidance. Every student's growth matters to us." },
      { title: "Supportive Community", description: "Be part of a warm and positive family. Grow together in a caring environment." },
      { title: "Balinese Massage", description: "Traditional Indonesian therapy to relieve muscle tension. Promotes deep relaxation and holistic healing." },
      { title: "Balinese Dance Performance", description: "Ancient, dynamic and highly expressive dance form that reflects Bali's rich cultural heritage." },
      { title: "Group Practice", description: "Grow together through shared learning and energy." },
      { title: "Ayurvedic Meals", description: "Enjoy sattvic and healthy meals supporting your practice." },
      { title: "Meditation Practice", description: "Deepen inner peace and mindfulness with guided sessions." },
      { title: "Experienced Instructors", description: "Learn from certified teachers with years of expertise." },
    ],
    curriculum: [
      {
        title: "Ashtanga Yoga Postures",
        items: [
          "Introduction to Ashtanga yoga followed by Sun salutation A & B",
          "Standing sequence postures & use of yoga props",
          "Primary series practiced thoroughly",
          "Mysore style practice examination"
        ]
      },
      {
        title: "Yoga Philosophy",
        items: [
          "Introduction to Yoga Philosophy and its evolution",
          "Introduction to yoga sutras of Patanjali",
          "Nadis (Ida, Pingala & Sushumna)",
          "Chakras - the energy channels",
          "Hatha yoga limbs (Shatkarma, Asana, Pranayama)",
          "Eight limbs of Ashtanga Yoga"
        ]
      },
      {
        title: "Pranayama Breathing Practices",
        items: [
          "Introduction to Pranayama and its benefits",
          "Introduction to Shatkarma (six cleansing practices)",
          "Clavicular, Thoracic & Diaphragmatic Breathing",
          "Yogic Breathing, Ujjayi, Bhastrika, Kapalbhati",
          "Nadi-Sodhana, Bhramari, Surya-Bhedi, Chandra-Bhedi"
        ]
      },
      {
        title: "Recitation of Sacred Sound",
        items: [
          "Om Asato Maa Sadgamaya (Mantra from Upanishad)",
          "Vande Gurunam Charnarvinde (Ashtanga opening mantra)",
          "Guru Brahma Guru Vishnu (Guru stotram)",
          "Om Tryambakam Yajamahe (Mantra on Lord Shiva)"
        ]
      },
      {
        title: "Anatomy and Physiology",
        items: [
          "Body Movement & Planes",
          "Joints and How to Protect them in Asanas",
          "Anatomy of Ankle, Knee, Spine & Shoulder",
          "Breathing mechanism in Yoga",
          "Introduction to Mudras & Bandhas"
        ]
      },
      {
        title: "Teaching Methodology",
        items: [
          "How to sequence a class",
          "Working with breathing and posture",
          "Adjustments and corrections",
          "Working with different level of students",
          "Building positive & conscious communication"
        ]
      },
      {
        title: "Meditation",
        items: [
          "Introduction to Meditation",
          "Different types of meditation techniques",
          "Om / Mantra Meditation",
          "Trataka and Silence Meditation"
        ]
      },
      {
        title: "Additional Classes",
        items: [
          "Kirtan Meditation",
          "Yin Yoga & Partner Yoga",
          "Acro Yoga",
          "Iyengar & Ayurvedic class"
        ]
      }
    ],
    dailySchedule: [
      { time: "6:00 AM", activity: "Wake Up & Morning Cleansing" },
      { time: "6:30 AM", activity: "Pranayama & Meditation" },
      { time: "7:30 AM", activity: "Asana Practice (Hatha/Ashtanga)" },
      { time: "9:00 AM", activity: "Breakfast" },
      { time: "10:00 AM", activity: "Yoga Philosophy / Anatomy" },
      { time: "12:00 PM", activity: "Lunch & Rest" },
      { time: "3:00 PM", activity: "Teaching Methodology / Alignment" },
      { time: "5:00 PM", activity: "Asana Practice (Vinyasa)" },
      { time: "7:00 PM", activity: "Dinner" },
      { time: "8:00 PM", activity: "Evening Meditation / Free Time" },
    ],
    whatSetsApart: [
      { title: "Begin Before You Begin - Pre YTTC", description: "The World's First Pre-YTTC school. Optional Complimentary Online Pre-YTTC Preparation to feel confident and prepared." },
      { title: "Not Just Transform Yoga - A Transform You", description: "Yoga is taught as a way of living, not as a skill to perform. Focus on how you think, react, handle stress, and relate to others." },
      { title: "Lifetime Re-Attendance & Assistant Teaching", description: "Graduates can return to future trainings for deeper practice and assist as teachers to build confidence." },
      { title: "Small Group Deep Work", description: "8-10 students per batch for personalized guidance, deeper alignment, and maximum benefit from every session." },
      { title: "35+ Functional Ready-to-Use Sequences", description: "Purpose-based yoga sequences for personal practice, teaching clarity, therapeutic understanding, and class structuring." },
      { title: "Rooted in Himalayan Lineage", description: "Teachings inspired by Himalayan yogic traditions covering Karma, Jnana, Bhakti, and Raja Yoga paths." },
    ],
    includes: [
      "12 nights accommodation",
      "3 vegetarian/vegan meals daily",
      "All course materials & manuals",
      "Yoga Alliance Certificate (RYT-100)",
      "Airport pickup & drop",
      "Outdoor excursions & activities",
      "1 Balinese massage",
      "Non-slip yoga mat",
      "1 month access to live online classes",
      "Ancient yoga textbook",
    ],
  },
  "200-hour": {
    title: "200 HOUR YOGA",
    subtitle: "TEACHER TRAINING COURSE IN BALI",
    duration: "24 Days",
    location: "Nature's Escape Resort in Ubud Bali",
    level: "Beginner to Intermediate",
    originalPrice: "$2199",
    price: "$1750",
    certification: "Yoga Alliance Certification",
    meals: "Delicious and Nutritious Vegan & Vegetarian Dishes",
    bonus: "Get a bonus 1 month access of live class, an ancient yoga textbook, and a non-slip yoga mat to elevate your practice.",
    welcomeTitle: "Welcome to Yogagarhi",
    welcomeText: "Our most popular 200-Hour Yoga Teacher Training (TTC) in Bali Ubud is designed for those seeking to become certified yoga teachers with comprehensive knowledge and practical skills. This internationally recognized Yoga Alliance certification prepares you to teach confidently anywhere in the world.",
    welcomeText2: "Immerse yourself in an intensive 24-day journey covering multi-style yoga including Hatha, Vinyasa, Ashtanga, and Iyengar. Our holistic curriculum ensures you graduate not just as a yoga teacher, but as a transformed individual ready to spread the wisdom of yoga globally.",
    features: [
      { title: "Multi-style Yoga Teaching", description: "Master Hatha, Vinyasa, Ashtanga & Iyengar styles. Our comprehensive approach covers all major yoga traditions." },
      { title: "Yoga Alliance RYT-200 Certified", description: "Receive the globally recognized 200-hour certification. Teach yoga professionally anywhere in the world." },
      { title: "Peaceful Bali Surroundings", description: "Experience yoga in the lap of nature. Calm beaches and greenery deepen your practice." },
      { title: "Outdoor Excursions", description: "Explore temples, beaches, and nature walks. Balance learning with adventure and culture." },
      { title: "Small Batch Sizes", description: "Get personal attention and guidance. Every student's growth matters to us." },
      { title: "Supportive Community", description: "Be part of a warm and positive family. Grow together in a caring environment." },
      { title: "Balinese Massage", description: "Traditional Indonesian therapy to relieve muscle tension. Promotes deep relaxation and holistic healing." },
      { title: "Balinese Dance Performance", description: "Ancient, dynamic and highly expressive dance form that reflects Bali's rich cultural heritage." },
      { title: "Group Practice", description: "Grow together through shared learning and energy." },
      { title: "Ayurvedic Meals", description: "Enjoy sattvic and healthy meals supporting your practice." },
      { title: "Meditation Practice", description: "Deepen inner peace and mindfulness with guided sessions." },
      { title: "Experienced Instructors", description: "Learn from certified teachers with years of expertise." },
    ],
    curriculum: [
      {
        title: "Ashtanga Yoga Postures",
        items: [
          "Complete Ashtanga yoga primary series by K. Pattabhi Jois",
          "Week 1: Introduction & Sun salutation A & B",
          "Week 2: Standing sequence postures & yoga props",
          "Week 3: Seated sequence & Finishing postures",
          "Week 4: Mysore style & Teaching practice"
        ]
      },
      {
        title: "Yoga Philosophy",
        items: [
          "Complete yoga sutras of Patanjali",
          "Eight limbs of Ashtanga Yoga",
          "Pancha-Vayus & Panchakoshas",
          "Sattva, Rajas & Tamas (Triguna)",
          "Introduction to Vedas",
          "Lives of yogis (Inspiring stories)"
        ]
      },
      {
        title: "Pranayama Breathing Practices",
        items: [
          "Complete pranayama techniques",
          "All six Shatkarma cleansing practices",
          "Advanced breathing: Sheetali, Sheetkari",
          "Kumbhaka (breath retention)",
          "Integration with asana practice"
        ]
      },
      {
        title: "Recitation of Sacred Sound",
        items: [
          "Complete mantra collection",
          "Om Tryambakam Yajamahe",
          "Hare Rama, Hare Krishna (Maha mantra)",
          "Yogena Cittasya (Sloka on Sage Patanjali)",
          "Daily mantra chanting practice"
        ]
      },
      {
        title: "Anatomy and Physiology",
        items: [
          "Complete body systems study",
          "Physiology of muscles & joints",
          "Respiratory & Nervous system",
          "Food & Digestive System",
          "Workshop on different Asanas"
        ]
      },
      {
        title: "Teaching Methodology",
        items: [
          "Complete class sequencing",
          "Demonstration & observation principles",
          "Mental & emotional preparation",
          "Step by step class structure planning",
          "Practicum & teaching evaluations"
        ]
      },
      {
        title: "Meditation & Bandhas",
        items: [
          "Osho Dynamic meditation",
          "Nada Brahma Meditation",
          "Antar Mouna & Ajapa Japa",
          "All four Bandhas mastery",
          "Integration with asana & pranayama"
        ]
      },
      {
        title: "Additional Classes",
        items: [
          "Sound Healing sessions",
          "Beach Yoga experience",
          "Yin Yoga & Acro Yoga",
          "Ayurveda fundamentals",
          "Kirtan & Bhajan sessions"
        ]
      }
    ],
    dailySchedule: [
      { time: "6:00 AM", activity: "Wake Up & Morning Cleansing" },
      { time: "6:30 AM", activity: "Pranayama & Meditation" },
      { time: "7:30 AM", activity: "Asana Practice (Hatha/Ashtanga)" },
      { time: "9:00 AM", activity: "Breakfast" },
      { time: "10:00 AM", activity: "Yoga Philosophy / Anatomy" },
      { time: "12:00 PM", activity: "Lunch & Rest" },
      { time: "3:00 PM", activity: "Teaching Methodology / Alignment" },
      { time: "5:00 PM", activity: "Asana Practice (Vinyasa)" },
      { time: "7:00 PM", activity: "Dinner" },
      { time: "8:00 PM", activity: "Evening Meditation / Kirtan" },
    ],
    whatSetsApart: [
      { title: "Begin Before You Begin - Pre YTTC", description: "The World's First Pre-YTTC school. Optional Complimentary Online Pre-YTTC Preparation to feel confident and prepared." },
      { title: "Not Just Transform Yoga - A Transform You", description: "Yoga is taught as a way of living, not as a skill to perform. Focus on how you think, react, handle stress, and relate to others." },
      { title: "Lifetime Re-Attendance & Assistant Teaching", description: "Graduates can return to future trainings for deeper practice and assist as teachers to build confidence." },
      { title: "Small Group Deep Work", description: "8-10 students per batch for personalized guidance, deeper alignment, and maximum benefit from every session." },
      { title: "35+ Functional Ready-to-Use Sequences", description: "Purpose-based yoga sequences for personal practice, teaching clarity, therapeutic understanding, and class structuring." },
      { title: "Rooted in Himalayan Lineage", description: "Teachings inspired by Himalayan yogic traditions covering Karma, Jnana, Bhakti, and Raja Yoga paths." },
    ],
    includes: [
      "24 nights accommodation",
      "3 vegetarian/vegan meals daily",
      "All course materials & manuals",
      "Yoga Alliance Certificate (RYT-200)",
      "Airport pickup & drop",
      "Outdoor excursions & activities",
      "2 Balinese massages",
      "Non-slip yoga mat",
      "1 month access to live online classes",
      "Ancient yoga textbook",
      "Pre-YTTC preparation course",
      "Lifetime re-attendance opportunity",
    ],
  },
  "300-hour": {
    title: "300 HOUR YOGA",
    subtitle: "TEACHER TRAINING COURSE IN BALI",
    duration: "28 Days",
    location: "Nature's Escape Resort in Ubud Bali",
    level: "Intermediate to Advanced",
    originalPrice: "$2999",
    price: "$2399",
    certification: "Yoga Alliance Certification",
    meals: "Delicious and Nutritious Vegan & Vegetarian Dishes",
    bonus: "Get a bonus 1 month access of live class, an ancient yoga textbook, and a non-slip yoga mat to elevate your practice.",
    welcomeTitle: "Welcome to Yogagarhi",
    welcomeText: "Elevate your teaching to the next level with our 300-Hour Advanced Yoga Teacher Training in Bali. This intensive program is designed for certified 200-hour yoga teachers who wish to deepen their practice, expand their knowledge, and develop advanced teaching skills.",
    welcomeText2: "This transformative 28-day journey takes you beyond the basics into therapeutic applications, advanced anatomy, specialty workshops, and the profound depths of yoga philosophy. Graduate as a 500-hour RYT and become an exceptional yoga teacher capable of transforming lives.",
    features: [
      { title: "Advanced Multi-style Teaching", description: "Master advanced techniques in Hatha, Vinyasa, Ashtanga & therapeutic yoga applications." },
      { title: "Yoga Alliance RYT-500 Certified", description: "Complete your 500-hour certification. Join the elite group of advanced yoga teachers worldwide." },
      { title: "Peaceful Bali Surroundings", description: "Experience yoga in the lap of nature. Calm beaches and greenery deepen your practice." },
      { title: "Outdoor Excursions", description: "Explore temples, beaches, and nature walks. Balance learning with adventure and culture." },
      { title: "Small Batch Sizes", description: "Get personal attention and guidance. Every student's growth matters to us." },
      { title: "Supportive Community", description: "Be part of a warm and positive family. Grow together in a caring environment." },
      { title: "Balinese Massage", description: "Traditional Indonesian therapy to relieve muscle tension. Promotes deep relaxation and holistic healing." },
      { title: "Mentorship Program", description: "One-on-one guidance with experienced teachers to refine your unique teaching voice." },
      { title: "Teaching Opportunities", description: "Lead actual classes during training for real-world teaching experience." },
      { title: "Ayurvedic Meals", description: "Enjoy sattvic and healthy meals supporting your advanced practice." },
      { title: "Advanced Meditation", description: "Explore deeper meditation techniques including Yoga Nidra and advanced pranayama." },
      { title: "Expert Instructors", description: "Learn from master teachers with decades of experience." },
    ],
    curriculum: [
      {
        title: "Advanced Asana & Adjustments",
        items: [
          "Advanced arm balances & inversions",
          "Therapeutic modifications & props usage",
          "Hands-on adjustment mastery",
          "Working with injuries & limitations",
          "Advanced sequencing principles"
        ]
      },
      {
        title: "Therapeutic Yoga Applications",
        items: [
          "Yoga for back pain & spinal health",
          "Yoga for stress & anxiety",
          "Prenatal & postnatal yoga",
          "Yoga for seniors",
          "Restorative yoga techniques"
        ]
      },
      {
        title: "Advanced Pranayama & Bandhas",
        items: [
          "Advanced kumbhaka techniques",
          "Kriyas for energy awakening",
          "Bandha integration in advanced asanas",
          "Pranayama for kundalini activation",
          "Breath therapy applications"
        ]
      },
      {
        title: "Yoga Nidra & Advanced Meditation",
        items: [
          "Complete Yoga Nidra training",
          "Leading guided meditations",
          "Chakra meditation techniques",
          "Sound & mantra meditation",
          "Silent retreat practices"
        ]
      },
      {
        title: "In-depth Philosophy Studies",
        items: [
          "Bhagavad Gita study",
          "Upanishads exploration",
          "Tantra philosophy",
          "Samkhya & Vedanta",
          "Applied philosophy in modern life"
        ]
      },
      {
        title: "Advanced Anatomy & Biomechanics",
        items: [
          "Subtle body anatomy (Nadis, Chakras)",
          "Myofascial release techniques",
          "Biomechanics of complex poses",
          "Injury prevention & recovery",
          "Yoga therapy principles"
        ]
      },
      {
        title: "Sequencing & Class Design",
        items: [
          "Creating themed classes",
          "Workshop & retreat planning",
          "Private session design",
          "Online class delivery",
          "Business of yoga"
        ]
      },
      {
        title: "Specialty Workshops",
        items: [
          "Aerial yoga introduction",
          "Sound healing certification",
          "Ayurveda & yoga integration",
          "Chakra balancing workshops",
          "Partner & Thai yoga massage"
        ]
      }
    ],
    dailySchedule: [
      { time: "5:30 AM", activity: "Wake Up & Morning Cleansing" },
      { time: "6:00 AM", activity: "Advanced Pranayama & Meditation" },
      { time: "7:30 AM", activity: "Advanced Asana Practice" },
      { time: "9:30 AM", activity: "Breakfast" },
      { time: "10:30 AM", activity: "Philosophy / Anatomy" },
      { time: "12:30 PM", activity: "Lunch & Rest" },
      { time: "3:00 PM", activity: "Teaching Practicum / Specialty Workshop" },
      { time: "5:30 PM", activity: "Therapeutic Yoga / Vinyasa" },
      { time: "7:30 PM", activity: "Dinner" },
      { time: "8:30 PM", activity: "Yoga Nidra / Evening Practice" },
    ],
    whatSetsApart: [
      { title: "Begin Before You Begin - Pre YTTC", description: "The World's First Pre-YTTC school. Optional Complimentary Online Pre-YTTC Preparation to feel confident and prepared." },
      { title: "Not Just Transform Yoga - A Transform You", description: "Yoga is taught as a way of living, not as a skill to perform. Focus on how you think, react, handle stress, and relate to others." },
      { title: "Lifetime Re-Attendance & Assistant Teaching", description: "Graduates can return to future trainings for deeper practice and assist as teachers to build confidence." },
      { title: "Small Group Deep Work", description: "8-10 students per batch for personalized guidance, deeper alignment, and maximum benefit from every session." },
      { title: "35+ Functional Ready-to-Use Sequences", description: "Purpose-based yoga sequences for personal practice, teaching clarity, therapeutic understanding, and class structuring." },
      { title: "Rooted in Himalayan Lineage", description: "Teachings inspired by Himalayan yogic traditions covering Karma, Jnana, Bhakti, and Raja Yoga paths." },
    ],
    includes: [
      "28 nights accommodation",
      "3 vegetarian/vegan meals daily",
      "All course materials & manuals",
      "Yoga Alliance Certificate (RYT-300/500)",
      "Airport pickup & drop",
      "Outdoor excursions & activities",
      "3 Balinese massages",
      "Non-slip yoga mat",
      "1 month access to live online classes",
      "Ancient yoga textbook",
      "Pre-YTTC preparation course",
      "Lifetime re-attendance opportunity",
      "Mentorship program access",
      "Teaching opportunity during training",
    ],
  },
};

export default function CourseDetail() {
  const { slug } = useParams();
  const course = courseData[slug as keyof typeof courseData];
  const [showAllFeatures, setShowAllFeatures] = useState(false);

  if (!course) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-heading text-4xl font-bold text-foreground mb-4">Course Not Found</h1>
            <Button asChild>
              <Link to="/">Return Home</Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  const visibleFeatures = showAllFeatures ? course.features : course.features.slice(0, 6);

  return (
    <Layout>
      {/* Hero Section - Split Layout */}
      <section className="relative min-h-[600px] flex flex-col lg:flex-row">
        {/* Left Side - Image */}
        <div className="lg:w-[60%] relative min-h-[400px] lg:min-h-[600px]">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
        </div>
        
        {/* Right Side - Course Info Card */}
        <div className="lg:w-[40%] bg-primary p-8 lg:p-12 flex flex-col justify-center">
          <div className="text-primary-foreground">
            <h1 className="font-heading text-3xl lg:text-4xl font-bold mb-2">
              {course.title}
            </h1>
            <h2 className="font-heading text-2xl lg:text-3xl font-bold mb-8">
              {course.subtitle}
            </h2>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 mt-1 text-accent flex-shrink-0" />
                <span className="text-sm lg:text-base">{course.certification}</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 text-accent flex-shrink-0" />
                <span className="text-sm lg:text-base">{course.duration} {course.location}</span>
              </div>
              <div className="flex items-start gap-3">
                <Utensils className="w-5 h-5 mt-1 text-accent flex-shrink-0" />
                <span className="text-sm lg:text-base">{course.meals}</span>
              </div>
              <div className="flex items-start gap-3">
                <Gift className="w-5 h-5 mt-1 text-accent flex-shrink-0" />
                <span className="text-sm lg:text-base">{course.bonus}</span>
              </div>
            </div>

            {/* Price Section */}
            <div className="border-t border-primary-foreground/20 pt-6 mb-6">
              <p className="text-lg mb-2">Course Fee:</p>
              <div className="bg-card rounded-lg p-4 text-center">
                <span className="text-muted-foreground line-through text-xl mr-3">USD {course.originalPrice.replace('$', '')}</span>
                <span className="text-foreground font-bold text-3xl">USD {course.price.replace('$', '')}</span>
              </div>
            </div>

            <Button variant="cta" size="xl" className="w-full" asChild>
              <Link to="/contact">START YOUR JOURNEY</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="font-heading text-3xl lg:text-5xl font-bold text-foreground mb-8">
            {course.welcomeTitle}
          </h2>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            {course.welcomeText}
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {course.welcomeText2}
          </p>
        </div>
      </section>

      {/* What You Will Receive Section */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground text-center mb-12">
            What You Will Receive in Our {course.title} {course.subtitle}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {visibleFeatures.map((feature, index) => (
              <div 
                key={index} 
                className="bg-card rounded-xl p-6 shadow-card hover:shadow-elevated transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Check className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {course.features.length > 6 && (
            <div className="text-center mt-8">
              <Button 
                variant="outline" 
                onClick={() => setShowAllFeatures(!showAllFeatures)}
                className="gap-2"
              >
                {showAllFeatures ? (
                  <>View Less <ChevronUp className="w-4 h-4" /></>
                ) : (
                  <>View More <ChevronDown className="w-4 h-4" /></>
                )}
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* What Sets YogaGarhi Apart */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground text-center mb-4">
            What Sets YogaGarhi Apart
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Discover the unique elements that make our training program truly transformative
          </p>
          
          <div className="max-w-6xl mx-auto space-y-12 lg:space-y-16">
            {course.whatSetsApart.map((item, index) => {
              const isReversed = index % 2 === 1;
              const imageIndex = index % apartImages.length;
              
              return (
                <div 
                  key={index}
                  className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 items-center`}
                >
                  {/* Image with rotating chakra ring */}
                  <div className="lg:w-1/2 relative">
                    <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
                      {/* Rotating chakra ring */}
                      <svg 
                        className="absolute inset-0 w-full h-full animate-spin" 
                        style={{ animationDuration: '30s' }}
                        viewBox="0 0 200 200"
                      >
                        <circle 
                          cx="100" cy="100" r="96" 
                          fill="none" 
                          stroke="hsl(var(--primary))" 
                          strokeWidth="1"
                          strokeDasharray="8 4"
                          opacity="0.3"
                        />
                        <circle 
                          cx="100" cy="100" r="88" 
                          fill="none" 
                          stroke="hsl(var(--accent))" 
                          strokeWidth="1.5"
                          strokeDasharray="12 6"
                          opacity="0.4"
                        />
                      </svg>
                      
                      {/* Circular image */}
                      <div className="absolute inset-4 rounded-full overflow-hidden shadow-elevated">
                        <img 
                          src={apartImages[imageIndex]} 
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="lg:w-1/2 text-center lg:text-left">
                    <div className="inline-flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                        <span className="text-primary-foreground font-bold">{index + 1}</span>
                      </div>
                      <h3 className="font-heading text-2xl font-semibold text-foreground">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Course Syllabus */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-primary-foreground text-center mb-12">
            Course Syllabus for {course.title} Teacher Training
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {course.curriculum.map((section, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-primary-foreground/10 rounded-xl border-none overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-4 text-primary-foreground hover:no-underline hover:bg-primary-foreground/5">
                    <span className="font-heading text-lg font-semibold text-left">
                      {section.title}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <ul className="space-y-2">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3 text-primary-foreground/90">
                          <Check className="w-4 h-4 mt-1 text-accent flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Daily Schedule */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground text-center mb-4">
            Daily Schedule
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            A typical day at YogaGarhi is designed to balance intensive learning with rest and integration.
          </p>
          
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-[100px] md:left-[120px] top-0 bottom-0 w-0.5 bg-primary/20" />
              
              {course.dailySchedule.map((item, index) => (
                <div key={index} className="flex items-center gap-4 md:gap-6 mb-6 relative">
                  <div className="w-[80px] md:w-[100px] text-right">
                    <span className="font-semibold text-primary text-sm md:text-base">{item.time}</span>
                  </div>
                  <div className="w-4 h-4 bg-primary rounded-full z-10 flex-shrink-0" />
                  <div className="flex-1 bg-card p-4 rounded-lg shadow-soft">
                    <span className="text-foreground">{item.activity}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground text-center mb-12">
            What's Included
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {course.includes.map((item, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 bg-card p-4 rounded-lg shadow-soft"
              >
                <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-accent" />
                </div>
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent-gradient">
        <div className="container mx-auto px-4 text-center text-accent-foreground">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Life?
          </h2>
          <p className="text-xl mb-4">
            Limited to 8-10 students per batch for personalized attention
          </p>
          <div className="bg-card/20 backdrop-blur-sm rounded-xl p-6 max-w-md mx-auto mb-8">
            <span className="text-2xl line-through opacity-70 mr-3">USD {course.originalPrice.replace('$', '')}</span>
            <span className="font-heading text-4xl font-bold">USD {course.price.replace('$', '')}</span>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">Enroll Now</Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="https://wa.me/+917895350563" target="_blank" rel="noopener noreferrer">
                Ask Questions on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
