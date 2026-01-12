"use client";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { Award, Clock, Heart, Sparkles, Users, BookOpen, Mountain, Flame, Star, ChevronDown } from "lucide-react";
import { useEnrollment } from "@/components/EnrollmentDialog";
import ReadyToBeginSection from "@/components/home/ReadyToBeginSection";
import heroImage from "@/assets/hero-yoga-bali.jpg";

// Teacher Images
import sachinJiImg from "@/assets/founder-image.png";
import chandaJiImg from "@/assets/teachers/chanda-ji-hd.jpg";
import rahulJiImg from "@/assets/teachers/rahul-ji-hd.jpg";
import rohitJiImg from "@/assets/teachers/rohit-ji-hd.jpg";
import abhishekJiImg from "@/assets/teachers/abhishek-ji-hd.jpg";
import ankitJiImg from "@/assets/teachers/ankit-ji-hd.jpg";

const founderAchievements = [
  { icon: Users, label: "2500+ Students Trained" },
  { icon: Award, label: "E-RYT 500 & Master in Yoga" },
  { icon: Clock, label: "8+ Years Teaching" },
  { icon: Heart, label: "Specialization in Asana & Pranayama" },
];

const teachingPillars = [
  {
    icon: Mountain,
    title: "Himalayan Lineage",
    desc: "Rooted in authentic Himalayan yogic traditions where yoga is understood as an integrated path."
  },
  {
    icon: BookOpen,
    title: "Living Philosophy",
    desc: "Philosophy taught as a tool for living, helping students observe suffering and dissolve it through awareness."
  },
  {
    icon: Flame,
    title: "Beyond Asana",
    desc: "Karma, Jnana, Bhakti, and Raja Yoga experienced through daily life, reflection, and practice."
  },
  {
    icon: Users,
    title: "Personal Attention",
    desc: "Only 8-10 students per batch ensures individual attention, personal correction, and emotional support."
  },
];

const teachers = [
  {
    name: "Chanda Ji",
    role: "Co-Founder",
    image: chandaJiImg,
    shortDesc: "Born into the sacred lineage of yoga, Chanda Maheshwari's journey began long before she ever stepped onto a mat. Her father, a devoted Hatha Yogi, planted the seeds of yoga in her early years, not as a practice but as a way of life.",
    fullDesc: "Her path unfolded through the ancient streams of Yoga, from the rigor of Hatha Yoga, the devotion of Bhakti Yoga, to the inner awakening of Kriya Yoga. Guided first by her father and later by revered Gurus, she spent over four decades immersed in deep sadhana, study, and self-realization.\n\nWith more than 15 years of teaching experience, Chanda Maheshwari founded YogaGarhi, not as a modern school but as a living sanctuary of traditional wisdom. Through YogaGarhi, she shares the timeless essence of yoga, not as a posture but as a journey of transformation from the body to the soul.\n\nHer vision is to bring people back to the roots of Yoga, where every breath, every movement, and every silence becomes a doorway to inner stillness and well-being.",
    specialties: ["Hatha Yoga", "Bhakti Yoga", "Kriya Yoga"],
  },
  {
    name: "Rahul Ji",
    role: "Vinyasa & Teaching Methodology",
    image: rahulJiImg,
    shortDesc: "Born and trained in India, Rahul Ji carries over seven years of dedicated experience in the field of yoga practice and education. His journey began with a deep interest in understanding the relationship between body, breath, and consciousness.",
    fullDesc: "Having studied under respected teachers in Rishikesh and Mysore, Rahul Ji developed a strong foundation in Hatha and Vinyasa Yoga, as well as in Yoga Philosophy, Anatomy, and Teaching Methodology. His classes reflect a refined balance between traditional discipline and modern understanding, guiding students toward intelligent sequencing, mindful alignment, and the deeper purpose of practice.\n\nAs a Senior teacher at YogaGarhi, Rahul Ji specializes in Vinyasa Flow and Teaching Methodology, helping future teachers cultivate clarity, confidence, and authenticity in their teaching. His approach emphasizes that yoga teaching is not only a skill but also an expression of inner awareness, compassion, and continuous self-study.\n\nDedicated, humble, and rooted in the yogic way of life, Rahul Ji continues to inspire students from around the world to experience yoga as a journey of self-realization and conscious living.",
    specialties: ["Vinyasa Flow", "Teaching Methodology", "Alignment"],
  },
  {
    name: "Rohit Ji",
    role: "Hatha Yoga & Pranayama",
    image: rohitJiImg,
    shortDesc: "With over ten years of dedicated teaching experience, Rohit Ji embodies the essence of traditional yogic practice and disciplined living. His journey began in the sacred lands of Rishikesh, where the timeless wisdom of yoga first captured his heart.",
    fullDesc: "Over 10 years, Rohit Ji has taught students from across the world, known for his precise instruction, calm demeanor, and ability to bring subtle yogic principles into clear, practical experience. His teaching integrates physical discipline with spiritual insight, creating an atmosphere where students feel both challenged and supported in their personal journey.\n\nAs a senior teacher at YogaGarhi, Rohit Ji specializes in Hatha Yoga and Pranayama, guiding aspiring teachers to build a strong foundation in breath, alignment, and mindful teaching. He believes yoga is not limited to the mat – it is a continuous exploration of harmony between body, mind, and consciousness.",
    specialties: ["Hatha Yoga", "Pranayama", "Yogic Philosophy"],
  },
  {
    name: "Abhishek Ji",
    role: "Alignment & Safe Practice",
    image: abhishekJiImg,
    shortDesc: "With over 9 years of dedicated yoga practice and 6 years of teaching experience, Abhishek Ji brings a deep passion for traditional Hatha Yoga and a strong focus on alignment and safe practice.",
    fullDesc: "He holds a Bachelor's degree in Yoga and has completed a 500-hour Yoga Teacher Training Course, equipping him with a comprehensive understanding of both the philosophy and physical aspects of yoga.\n\nHis teaching is rooted in awareness, alignment, and injury prevention. He specializes in guiding students of all levels to move mindfully, helping them understand their own bodies and develop safe, sustainable practices. His classes are thoughtful and accessible, with a focus on correcting posture and bringing attention to the right techniques, so students can protect themselves and progress confidently in their yoga journey.",
    specialties: ["Alignment", "Injury Prevention", "Hatha Yoga"],
  },
  {
    name: "Ankit Ji",
    role: "Ashtanga Flow",
    image: ankitJiImg,
    shortDesc: "Ankit Ji was born in Devprayag, the origin of the mother Ganges and raised in the world capital of yoga – Rishikesh. Ever since his childhood, he started practicing yoga with gurus in Rishikesh.",
    fullDesc: "He specializes in the sacred art of Ashtanga Flow and his perfection in this style and its alignment can only be credited to his commitment to his mind and body. He has completed his bachelor's and master's degree in Yogic Science and regularly practices Yoga with the best gurus of Rishikesh.\n\nAnkit ji is also a 500 hour registered yoga teacher and has experience of teaching Yoga internationally. Practicing Yoga since his childhood and teaching Yoga for over 8 years has helped him earn a renowned reputation amongst his students all over the world. He is a well-respected and helpful Yoga teacher who leaves a positive and lasting impression on his student's minds.\n\nHe strongly believes yoga can be understood only if one is ready to accept the disciplinary rules and regulations one needs to practice and only when those are fulfilled one can experience the rising benefits of yoga in everyday life.",
    specialties: ["Ashtanga Flow", "Yogic Science", "Alignment"],
  },
];

// Lotus SVG decoration
const LotusDecor = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 60" fill="none" stroke="currentColor" strokeWidth="1">
    <path d="M50 55 C50 40, 30 30, 20 40 C10 50, 30 55, 50 55" />
    <path d="M50 55 C50 40, 70 30, 80 40 C90 50, 70 55, 50 55" />
    <path d="M50 55 C50 35, 35 20, 30 30 C25 40, 40 50, 50 55" />
    <path d="M50 55 C50 35, 65 20, 70 30 C75 40, 60 50, 50 55" />
    <path d="M50 55 C50 30, 50 15, 50 25 C50 35, 50 45, 50 55" />
  </svg>
);

// Teacher Card Component with Read More
function TeacherCard({ teacher, index }: { teacher: typeof teachers[0]; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="group rounded-3xl overflow-hidden bg-card border border-border/40 transition-all hover:shadow-xl hover:border-primary/20"
    >
      {/* Image */}
      <div className="relative h-72 md:h-80 overflow-hidden">
        <Image
          src={teacher.image}
          alt={teacher.name}
          fill
          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
        <div className="absolute bottom-4 left-6 right-6 text-white">
          <p className="text-white/70 text-xs uppercase tracking-wider mb-1">{teacher.role}</p>
          <h3 className="font-heading text-xl font-bold">{teacher.name}</h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="text-muted-foreground text-sm leading-relaxed">
          <p>{teacher.shortDesc}</p>

          {isExpanded && (
            <div className="mt-4 space-y-3 text-foreground/80">
              {teacher.fullDesc.split('\n\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          )}
        </div>

        {/* Read More Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-1 mt-4 text-primary font-medium text-sm hover:underline transition-colors"
        >
          {isExpanded ? 'Read Less' : 'Read More'}
          <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
        </button>

        {/* Specialties */}
        <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border/40">
          {teacher.specialties.map((specialty) => (
            <span
              key={specialty}
              className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
            >
              {specialty}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function AboutTeachers() {
  const { setShowEnrollDialog } = useEnrollment();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [founderExpanded, setFounderExpanded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-72 md:h-96 flex items-center justify-center overflow-hidden">
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
        <div className="relative z-10 text-center text-primary-foreground px-4">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-primary-foreground/40" />
            <span className="text-sm font-medium tracking-[0.2em] uppercase opacity-80">Your Guides</span>
            <div className="w-8 h-px bg-primary-foreground/40" />
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Our Experienced Teachers
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            Teachers who don't just teach yoga, but live it every day
          </p>
        </div>
      </section>

      {/* Teaching Philosophy Banner */}
      <section className="py-6 bg-primary/5 border-y border-primary/10">
        <div className="container mx-auto px-4">
          <p className="text-center text-muted-foreground italic max-w-3xl mx-auto">
            "At Yogagarhi, teaching is personalized, precise, and practical —
            <span className="text-foreground font-medium"> you are a person on a journey, not a number.</span>"
          </p>
        </div>
      </section>

      {/* Founder Section - Sachin Ji */}
      <section className="py-24 bg-background relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

              {/* Image Column */}
              <div className="relative">
                {/* Decorative Ring */}
                <div className="absolute inset-0 -m-4 border-2 border-primary/20 rounded-3xl rotate-3" />
                <div className="absolute inset-0 -m-4 border-2 border-accent/20 rounded-3xl -rotate-3" />

                {/* Main Image Container */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src={sachinJiImg}
                    alt="Yogacharya Sachin - Founder of YogaGarhi"
                    className="w-full h-auto object-cover"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-6 -right-6 bg-card rounded-2xl p-4 shadow-elevated border border-border/50 animate-float-ultra-smooth">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Founder & Lead Teacher</p>
                      <p className="font-heading text-lg font-semibold text-foreground">YogaGarhi</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Column */}
              <div>
                <span className="inline-flex items-center gap-2 text-primary/80 text-sm font-medium tracking-widest uppercase mb-4">
                  <Heart className="w-4 h-4" fill="currentColor" />
                  Meet Your Guide
                </span>

                <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-2">
                  Sachin Ji
                </h2>
                <p className="text-primary font-medium text-lg mb-6">Founder & Lead Teacher, YogaGarhi</p>

                <div className="space-y-5 text-muted-foreground leading-relaxed mb-6">
                  <p>
                    Born and raised in the sacred land of Devprayag India, where Mother Ganga takes her first divine form,
                    Sachin Ji's journey into yoga was not a choice but a calling. Growing up amidst rivers, temples, and the
                    quiet discipline of a yogic lifestyle, yoga became woven into his breath, his thoughts, and his way of living.
                  </p>

                  {founderExpanded && (
                    <>
                      <p>
                        With over 8 years of dedicated teaching experience at renowned yoga institutions in Rishikesh,
                        Sachin Ji has guided more than 2,500 students through Yoga Teacher Training Courses and intensive
                        practice programs. Each student, for him, is not a number but a soul on a unique journey. His teaching
                        is shaped by deep traditional roots, supported by modern clarity holding 200-hour and 300-hour YTTC
                        certifications along with a Master's Degree in Yogic Sciences.
                      </p>

                      <p>
                        As the founder of YogaGarhi, Sachin Ji envisioned a space where yoga is taught with honesty, depth,
                        and respect for its ancient lineage—free from shortcuts and commercial noise. His specialization in
                        Asana and Pranayama reflects his belief that the body is a temple and the breath is the bridge to
                        inner stillness. His classes are known for their personal attention, precise alignment, soulful silence,
                        and transformative energy.
                      </p>

                      <p className="text-foreground/90 border-l-2 border-primary/50 pl-4 italic">
                        "Students often say that learning with Sachin Ji feels less like attending a class and more like
                        being gently guided back to oneself."
                      </p>
                    </>
                  )}
                </div>

                {/* Read More Button */}
                <button
                  onClick={() => setFounderExpanded(!founderExpanded)}
                  className="flex items-center gap-1 mb-8 text-primary font-medium hover:underline transition-colors"
                >
                  {founderExpanded ? 'Read Less' : 'Read More'}
                  <ChevronDown className={`w-4 h-4 transition-transform ${founderExpanded ? 'rotate-180' : ''}`} />
                </button>

                {/* Achievement Badges */}
                <div className="flex flex-wrap gap-3">
                  {founderAchievements.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 bg-secondary/50 px-4 py-2 rounded-full"
                    >
                      <item.icon className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium text-foreground">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Pillars */}
      <section ref={sectionRef} className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-medium tracking-widest text-primary/70 uppercase mb-3">
              Our Teaching Approach
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              How We Teach
            </h2>
            <LotusDecor className="w-16 h-10 mx-auto text-primary/40" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {teachingPillars.map((pillar, index) => (
              <div
                key={pillar.title}
                className={`group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-500 text-center ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <pillar.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teachers Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-medium tracking-widest text-primary/70 uppercase mb-3">
              Expert Faculty
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Teachers & Guides
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A team of dedicated practitioners, scholars, and healers who bring depth and diversity to your learning journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teachers.map((teacher, index) => (
              <TeacherCard key={teacher.name} teacher={teacher} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Our Teaching Unique */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Teaching That Transforms
              </h2>
              <p className="text-muted-foreground">
                What sets YogaGarhi teachers apart
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card rounded-2xl p-6 border border-border/50">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Star className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Beyond Technical Precision</h3>
                    <p className="text-muted-foreground text-sm">
                      We don't just teach poses. We share the essence, the breath, the awareness — the living spirit of yoga.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-6 border border-border/50">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Heart className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Emotional & Mental Support</h3>
                    <p className="text-muted-foreground text-sm">
                      Each student is held, seen, and supported through their unique transformational journey.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-6 border border-border/50">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Rooted in Tradition</h3>
                    <p className="text-muted-foreground text-sm">
                      Our teachers carry lineage knowledge — wisdom passed down through generations of practitioners.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-6 border border-border/50">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Small Batch, Personal Attention</h3>
                    <p className="text-muted-foreground text-sm">
                      With only 8-10 students per batch, every student receives individual guidance and correction.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Begin */}
      <ReadyToBeginSection />
    </>
  );
}
