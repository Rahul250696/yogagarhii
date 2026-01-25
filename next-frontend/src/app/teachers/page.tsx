import { Metadata } from "next";
import AboutTeachers from "@/components/pages/AboutTeachers";

export const metadata: Metadata = {
    title: "Our Teachers - Experienced Yoga Masters",
    description: "Meet our experienced yoga teachers at YogaGarhi. Learn from Yogacharya Sachin and our expert faculty with decades of combined teaching experience.",
    keywords: "yoga teachers Bali, yoga masters, YogaGarhi instructors, Sachin Ji, yoga teacher training faculty",
    alternates: {
        canonical: "/teachers",
    },
};

export default function AboutTeachersPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            {
                                "@type": "ListItem",
                                "position": 1,
                                "name": "Home",
                                "item": "https://yogagarhi.com"
                            },
                            {
                                "@type": "ListItem",
                                "position": 2,
                                "name": "Our Teachers",
                                "item": "https://yogagarhi.com/teachers"
                            }
                        ]
                    })
                }}
            />
            <AboutTeachers />
        </>
    );
}

