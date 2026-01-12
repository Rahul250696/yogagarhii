import { Metadata } from "next";
import About from "@/components/pages/About";

export const metadata: Metadata = {
    title: "About YogaGarhi - Our Story & Mission",
    description: "Learn about YogaGarhi's journey, our mission to spread authentic yoga wisdom, and the sacred ashram in Bali where we train yoga teachers from around the world.",
    keywords: "about YogaGarhi, yoga school Bali, yoga ashram story, yoga teacher training mission, Ubud yoga center",
    alternates: {
        canonical: "/about",
    },
};

export default function AboutPage() {
    return <About />;
}
