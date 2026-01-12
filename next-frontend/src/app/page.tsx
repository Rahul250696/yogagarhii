import { Metadata } from "next";
import Index from "@/components/pages/Index";

export const metadata: Metadata = {
  title: "YogaGarhi - Yoga Teacher Training in Bali, Ubud",
  description: "Transform your life with authentic yoga teacher training in Bali. 100, 200 & 300 hour Yoga Alliance certified programs at YogaGarhi.",
  keywords: "yoga teacher training Bali, YTTC Ubud, 200 hour yoga certification, yoga alliance certified, yoga retreat Bali, yoga school Indonesia, RYT 200, yoga ashram Bali, meditation training, pranayama course, YogaGarhi",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "YogaGarhi - Yoga Teacher Training in Bali, Ubud",
    description: "Transform your life with authentic yoga teacher training in Bali. 100, 200 & 300 hour Yoga Alliance certified programs.",
    url: "/",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "YogaGarhi - Yoga Teacher Training Bali",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "YogaGarhi - Yoga Teacher Training in Bali, Ubud",
    description: "Transform your life with authentic yoga teacher training in Bali. Yoga Alliance certified programs.",
    images: ["/opengraph-image"],
  },
};

export default function Page() {
  console.log("Root Page Rendering");
  return <Index />;
}
