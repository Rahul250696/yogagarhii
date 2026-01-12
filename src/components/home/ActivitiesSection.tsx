import waterfallImg from "@/assets/activity-waterfall.jpg";
import soundHealingImg from "@/assets/activity-sound-healing.jpg";
import ayurvedaImg from "@/assets/activity-ayurveda.jpg";

const activities = [
  {
    title: "Waterfall Visit",
    description: "The views of Bali's natural beauty that mesmerize you. The sound of falling water awakens something deep within you.",
    image: waterfallImg,
  },
  {
    title: "Sound Healing Workshop",
    description: "Vibrations for your healing and overall well-being. Tuning Forks, Singing Bowls, Gongs revitalize you from within.",
    image: soundHealingImg,
  },
  {
    title: "Ayurveda Workshop",
    description: "Thousands of years of knowledge for your holistic health. Cultivates within you the idea of living in harmony with nature.",
    image: ayurvedaImg,
  },
];

export default function ActivitiesSection() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Additional Activities
          </h2>
          <p className="text-muted-foreground text-lg">
            True wellness and holistic learning occur beyond the mat. These additional activities enrich your learning journey.
          </p>
        </div>

        {/* Activity Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {activities.map((activity, index) => (
            <div
              key={activity.title}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                  {activity.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {activity.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
