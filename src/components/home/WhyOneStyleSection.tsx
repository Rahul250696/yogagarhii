import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Flame, Droplets, Wind, Sparkles, ArrowRight, Check } from "lucide-react";

// Dosha types with their characteristics
const doshaTypes = [
  {
    name: "Vata",
    element: "Air & Ether",
    icon: Wind,
    color: "from-sky-400/20 to-indigo-400/20",
    borderColor: "border-sky-400/30",
    iconColor: "text-sky-500",
    traits: ["Creative", "Energetic", "Quick-minded"],
    yogaStyle: "Grounding, slow-paced practices",
  },
  {
    name: "Pitta",
    element: "Fire & Water",
    icon: Flame,
    color: "from-orange-400/20 to-red-400/20",
    borderColor: "border-orange-400/30",
    iconColor: "text-orange-500",
    traits: ["Focused", "Driven", "Passionate"],
    yogaStyle: "Cooling, moderate-intensity flows",
  },
  {
    name: "Kapha",
    element: "Earth & Water",
    icon: Droplets,
    color: "from-emerald-400/20 to-teal-400/20",
    borderColor: "border-emerald-400/30",
    iconColor: "text-emerald-500",
    traits: ["Steady", "Nurturing", "Patient"],
    yogaStyle: "Invigorating, dynamic sequences",
  },
];

// Yogic Energy Quiz Questions
const quizQuestions = [
  {
    question: "How does your body typically feel in the morning?",
    options: [
      { text: "Light and energetic", dosha: "vata" },
      { text: "Warm and ready to go", dosha: "pitta" },
      { text: "Heavy and slow to start", dosha: "kapha" },
    ],
  },
  {
    question: "What describes your mental pattern during stress?",
    options: [
      { text: "Racing thoughts, anxiety", dosha: "vata" },
      { text: "Irritability, intensity", dosha: "pitta" },
      { text: "Withdrawal, lethargy", dosha: "kapha" },
    ],
  },
  {
    question: "How would you describe your natural energy rhythm?",
    options: [
      { text: "Variable, creative bursts", dosha: "vata" },
      { text: "Focused, consistent drive", dosha: "pitta" },
      { text: "Calm, steady, enduring", dosha: "kapha" },
    ],
  },
  {
    question: "What is your relationship with heat?",
    options: [
      { text: "Prefer warmth, dislike cold", dosha: "vata" },
      { text: "Run warm, seek cooling", dosha: "pitta" },
      { text: "Neutral, adaptable", dosha: "kapha" },
    ],
  },
  {
    question: "How do you typically process emotions?",
    options: [
      { text: "Quick to feel, quick to release", dosha: "vata" },
      { text: "Intense, lasting impressions", dosha: "pitta" },
      { text: "Deep, slow processing", dosha: "kapha" },
    ],
  },
  {
    question: "What describes your lifestyle tendency?",
    options: [
      { text: "Movement, change, variety", dosha: "vata" },
      { text: "Achievement, structure, goals", dosha: "pitta" },
      { text: "Routine, stability, comfort", dosha: "kapha" },
    ],
  },
];

// Lotus SVG for decoration
const LotusIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 60" className={className} fill="currentColor">
    <path d="M50 55 C45 45, 30 35, 20 40 C30 30, 45 25, 50 15 C55 25, 70 30, 80 40 C70 35, 55 45, 50 55Z" opacity="0.6"/>
    <path d="M50 55 C47 48, 38 42, 30 45 C38 38, 47 35, 50 28 C53 35, 62 38, 70 45 C62 42, 53 48, 50 55Z"/>
    <ellipse cx="50" cy="58" rx="8" ry="2" opacity="0.3"/>
  </svg>
);

// Mandala pattern for background
const MandalaPattern = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 200 200" className={className}>
    <defs>
      <pattern id="mandalaPattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
        <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.1"/>
        <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.15"/>
        <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.2"/>
        <circle cx="100" cy="100" r="20" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.25"/>
        {[...Array(12)].map((_, i) => (
          <line
            key={i}
            x1="100"
            y1="20"
            x2="100"
            y2="180"
            stroke="currentColor"
            strokeWidth="0.3"
            opacity="0.1"
            transform={`rotate(${i * 30} 100 100)`}
          />
        ))}
      </pattern>
    </defs>
    <rect width="200" height="200" fill="url(#mandalaPattern)"/>
  </svg>
);

export default function WhyOneStyleSection() {
  const [showQuizDialog, setShowQuizDialog] = useState(false);
  const [quizStep, setQuizStep] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<string[]>([]);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [showQuizThankYou, setShowQuizThankYou] = useState(false);
  const [hoveredDosha, setHoveredDosha] = useState<string | null>(null);

  const resetQuiz = () => {
    setQuizStep(0);
    setQuizAnswers([]);
    setEmail("");
    setEmailError("");
  };

  const handleQuizAnswer = (dosha: string) => {
    setQuizAnswers([...quizAnswers, dosha]);
    setQuizStep(quizStep + 1);
  };

  const handleQuizSubmit = () => {
    if (!email) {
      setEmailError("Please enter your email address");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }
    setShowQuizDialog(false);
    setShowQuizThankYou(true);
  };

  // Calculate dominant dosha from answers
  const getDominantDosha = () => {
    const counts = { vata: 0, pitta: 0, kapha: 0 };
    quizAnswers.forEach(answer => {
      counts[answer as keyof typeof counts]++;
    });
    return Object.entries(counts).reduce((a, b) => a[1] > b[1] ? a : b)[0];
  };

  return (
    <section id="prakriti-section" className="relative py-24 overflow-hidden bg-gradient-to-b from-background via-secondary/30 to-background">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <MandalaPattern className="absolute top-0 left-0 w-[600px] h-[600px] text-primary/10 -translate-x-1/2 -translate-y-1/2 animate-[spin_120s_linear_infinite]" />
        <MandalaPattern className="absolute bottom-0 right-0 w-[500px] h-[500px] text-primary/10 translate-x-1/2 translate-y-1/2 animate-[spin_100s_linear_infinite_reverse]" />
        
        {/* Floating particles */}
        <div className="absolute top-20 left-[10%] w-2 h-2 rounded-full bg-amber-400/30 animate-[float_8s_ease-in-out_infinite]" />
        <div className="absolute top-40 right-[15%] w-3 h-3 rounded-full bg-sky-400/20 animate-[float_10s_ease-in-out_infinite_1s]" />
        <div className="absolute bottom-32 left-[20%] w-2 h-2 rounded-full bg-emerald-400/25 animate-[float_7s_ease-in-out_infinite_2s]" />
        <div className="absolute top-1/2 right-[8%] w-2 h-2 rounded-full bg-orange-400/20 animate-[float_9s_ease-in-out_infinite_0.5s]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Ancient Wisdom, Personalized Practice</span>
          </div>
          
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Discover Your <span className="text-primary">Prakriti</span>
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            In Ayurveda, your unique constitution—your <em className="text-foreground">Prakriti</em>—determines 
            which yoga practices will bring you into balance. One size never fits all.
          </p>
          
          {/* Decorative lotus */}
          <LotusIcon className="w-16 h-8 mx-auto mt-6 text-primary/40" />
        </div>

        {/* Three Dosha Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {doshaTypes.map((dosha, index) => {
            const Icon = dosha.icon;
            const isHovered = hoveredDosha === dosha.name;
            
            return (
              <div
                key={dosha.name}
                className={`
                  relative group cursor-pointer
                  rounded-2xl p-6 
                  bg-gradient-to-br ${dosha.color}
                  border-2 ${dosha.borderColor}
                  backdrop-blur-sm
                  transition-all duration-500 ease-out
                  ${isHovered ? 'scale-105 shadow-2xl -translate-y-2' : 'shadow-lg'}
                `}
                style={{ animationDelay: `${index * 150}ms` }}
                onMouseEnter={() => setHoveredDosha(dosha.name)}
                onMouseLeave={() => setHoveredDosha(null)}
              >
                {/* Animated background glow */}
                <div className={`
                  absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
                  bg-gradient-to-br ${dosha.color}
                  blur-xl transition-opacity duration-500 -z-10
                `} />
                
                {/* Icon with animation */}
                <div className={`
                  w-16 h-16 rounded-full 
                  bg-background/80 backdrop-blur-sm
                  flex items-center justify-center mb-4
                  shadow-md
                  transition-transform duration-500
                  ${isHovered ? 'scale-110 rotate-12' : ''}
                `}>
                  <Icon className={`w-8 h-8 ${dosha.iconColor} transition-all duration-300`} />
                </div>
                
                <h3 className="font-heading text-2xl font-bold text-foreground mb-1">
                  {dosha.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 italic">
                  {dosha.element}
                </p>
                
                {/* Traits */}
                <div className="space-y-2 mb-4">
                  {dosha.traits.map((trait, i) => (
                    <div 
                      key={i} 
                      className={`
                        flex items-center gap-2 text-sm text-foreground/80
                        transition-all duration-300 delay-${i * 50}
                        ${isHovered ? 'translate-x-1' : ''}
                      `}
                    >
                      <div className={`w-1.5 h-1.5 rounded-full ${dosha.iconColor.replace('text-', 'bg-')}`} />
                      {trait}
                    </div>
                  ))}
                </div>
                
                {/* Yoga recommendation */}
                <div className={`
                  pt-4 border-t border-foreground/10
                  transition-all duration-500
                  ${isHovered ? 'opacity-100' : 'opacity-70'}
                `}>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Ideal Practice</p>
                  <p className="text-sm font-medium text-foreground">{dosha.yogaStyle}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Philosophy Text */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50 shadow-lg">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              At Yogagarhi, we teach <strong className="text-foreground">multi-style yoga</strong> not to confuse, 
              but to liberate. By understanding Hatha, Vinyasa, Ashtanga, and Iyengar as complete systems, 
              you learn to adapt yoga to the individual—not force the individual into yoga.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our Prakriti-based approach considers your unique constitution. As a future teacher, 
              you'll discover which practices serve different natures, making your teaching truly 
              responsive to each student.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Dialog open={showQuizDialog} onOpenChange={(open) => {
            setShowQuizDialog(open);
            if (!open) resetQuiz();
          }}>
            <DialogTrigger asChild>
              <Button 
                size="lg" 
                className="
                  relative overflow-hidden
                  bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 
                  bg-[length:200%_100%]
                  hover:bg-[position:100%_0]
                  text-white font-semibold 
                  shadow-lg hover:shadow-xl
                  transition-all duration-500
                  group
                "
              >
                <Sparkles className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                Reveal Your Yogic Energy
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </DialogTrigger>
            
            <DialogContent className="sm:max-w-lg border-primary/20">
              <DialogHeader>
                <div className="flex justify-center mb-2">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <DialogTitle className="font-heading text-2xl text-center">
                  {quizStep < quizQuestions.length 
                    ? "Discover Your Yogic Energy" 
                    : "Your Insight Awaits"}
                </DialogTitle>
              </DialogHeader>
              
              <div className="pt-4">
                {quizStep < quizQuestions.length ? (
                  <div className="space-y-6">
                    {/* Progress bar */}
                    <div className="relative h-2 bg-secondary rounded-full overflow-hidden">
                      <div 
                        className="absolute inset-y-0 left-0 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full transition-all duration-500"
                        style={{ width: `${((quizStep + 1) / quizQuestions.length) * 100}%` }}
                      />
                    </div>
                    
                    <div className="text-center mb-2">
                      <span className="text-sm text-muted-foreground">
                        Question {quizStep + 1} of {quizQuestions.length}
                      </span>
                    </div>
                    
                    <p className="text-center font-medium text-lg text-foreground">
                      {quizQuestions[quizStep].question}
                    </p>
                    
                    <div className="space-y-3">
                      {quizQuestions[quizStep].options.map((option, i) => (
                        <button
                          key={i}
                          onClick={() => handleQuizAnswer(option.dosha)}
                          className="
                            w-full p-4 text-left rounded-xl 
                            border-2 border-border 
                            hover:border-primary hover:bg-primary/5 
                            transition-all duration-300
                            hover:translate-x-1 hover:shadow-md
                            group
                          "
                        >
                          <span className="flex items-center gap-3">
                            <span className="w-6 h-6 rounded-full border-2 border-muted-foreground/30 group-hover:border-primary group-hover:bg-primary/10 transition-colors flex items-center justify-center text-xs font-medium text-muted-foreground">
                              {String.fromCharCode(65 + i)}
                            </span>
                            {option.text}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6 text-center">
                    <div className="py-4">
                      <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 flex items-center justify-center mb-4">
                        <Check className="w-10 h-10 text-amber-600 dark:text-amber-400" />
                      </div>
                      <p className="text-muted-foreground">
                        Thank you for sharing. Enter your email to receive 
                        your personalized yogic energy insight.
                      </p>
                    </div>
                    
                    <div className="space-y-2">
                      <input
                        type="email"
                        placeholder="Your email address *"
                        className={`
                          w-full px-4 py-3 rounded-xl border-2 bg-background 
                          focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary
                          transition-all duration-300
                          ${emailError ? 'border-red-500' : 'border-border'}
                        `}
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
                      className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white" 
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
            <DialogContent className="sm:max-w-md text-center border-primary/20">
              <div className="py-6 space-y-6">
                {/* Animated success icon */}
                <div className="relative mx-auto w-24 h-24">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-green-400/20 to-emerald-400/20 animate-ping" />
                  <div className="relative w-full h-full rounded-full bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 flex items-center justify-center">
                    <Check className="w-12 h-12 text-green-600 dark:text-green-400" />
                  </div>
                </div>
                
                <div>
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
                    Namaste! 🙏
                  </h3>
                  <p className="text-muted-foreground">
                    Your personalized yogic energy insight is being prepared for{" "}
                    <span className="font-medium text-foreground">{email}</span>
                  </p>
                </div>
                
                <div className="bg-secondary/50 rounded-xl p-4 text-sm text-muted-foreground">
                  <p>Check your inbox (and spam folder) within 24 hours for your detailed Prakriti analysis.</p>
                </div>
                
                <Button 
                  onClick={() => {
                    setShowQuizThankYou(false);
                    resetQuiz();
                  }}
                  variant="outline"
                  className="w-full"
                >
                  Close
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      
      {/* Custom keyframe for float animation */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
      `}</style>
    </section>
  );
}
