import { Metadata } from "next";
import Gallery from "@/components/pages/Gallery";

export const metadata: Metadata = {
    title: "Gallery - Yoga Teacher Training Photos",
    description: "Explore our yoga teacher training gallery. See photos from our ashram in Bali, yoga classes, ceremonies, and the beautiful surroundings of Ubud.",
    keywords: "yoga training photos, YTTC gallery, yoga ashram pictures, Bali yoga images, Ubud retreat photos",
    alternates: {
        canonical: "/gallery",
    },
};

export default function GalleryPage() {
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
                                "name": "Gallery",
                                "item": "https://yogagarhi.com/gallery"
                            }
                        ]
                    })
                }}
            />
            <Gallery />
        </>
    );
}

