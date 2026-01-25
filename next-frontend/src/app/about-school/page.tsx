import { Metadata } from "next";
import AboutAshram from "@/components/pages/AboutAshram";

export const metadata: Metadata = {
  title: "About YogaGarhi - Our Story & Mission",
  description: "Learn about YogaGarhi's journey, our mission to spread authentic yoga wisdom, and the sacred ashram in Bali where we train yoga teachers from around the world.",
  keywords: "about YogaGarhi, yoga school Bali, yoga ashram story, yoga teacher training mission, Ubud yoga center",
  alternates: {
    canonical: "/about-school",
  },
};

export default function AboutPage() {
  return <AboutAshram />;
}
