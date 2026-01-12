import { Metadata } from "next";
import AboutAshram from "@/components/pages/AboutAshram";

export const metadata: Metadata = {
    title: "Our Ashram - YogaGarhi Rishikesh",
    description: "Explore YogaGarhi's sacred ashram in Rishikesh. A fortress of wisdom nestled by the Ganges, offering authentic yoga training in a traditional yet comfortable setting.",
    keywords: "yoga ashram Rishikesh, best yoga school Rishikesh, YogaGarhi ashram, yoga accommodation Rishikesh, spiritual retreat India",
    alternates: {
        canonical: "/about/ashram",
    },
};

export default function AboutAshramPage() {
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
                                "name": "About",
                                "item": "https://yogagarhi.com/about"
                            },
                            {
                                "@type": "ListItem",
                                "position": 3,
                                "name": "Our Ashram",
                                "item": "https://yogagarhi.com/about/ashram"
                            }
                        ]
                    })
                }}
            />
            <AboutAshram />
        </>
    );
}

