import { Metadata } from "next";
import AboutTestimonials from "@/components/pages/AboutTestimonials";

export const metadata: Metadata = {
    title: "Reviews & Testimonials - YogaGarhi Student Stories",
    description: "Read reviews and testimonials from our yoga teacher training graduates. Discover how YogaGarhi has transformed lives through authentic yoga education.",
    keywords: "yoga teacher training reviews, YogaGarhi testimonials, yoga school reviews Bali, student stories, yoga certification reviews",
    alternates: {
        canonical: "/testimonials",
    },
};

export default function AboutTestimonialsPage() {
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
                                "name": "Reviews & Testimonials",
                                "item": "https://yogagarhi.com/testimonials"
                            }
                        ]
                    })
                }}
            />
            <AboutTestimonials />
        </>
    );
}

