import { Metadata } from "next";
import Contact from "@/components/pages/Contact";

export const metadata: Metadata = {
    title: "Contact Us - Get in Touch",
    description: "Contact YogaGarhi for yoga teacher training inquiries. Reach us via WhatsApp, phone, or email. We respond within 24 hours.",
    keywords: "contact YogaGarhi, yoga training inquiry, YTTC questions, yoga school contact Bali",
    alternates: {
        canonical: "/contact",
    },
};

export default function ContactPage() {
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
                                "name": "Contact",
                                "item": "https://yogagarhi.com/contact"
                            }
                        ]
                    })
                }}
            />
            <Contact />
        </>
    );
}

