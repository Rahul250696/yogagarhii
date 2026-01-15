import { Metadata } from "next";
import Blog from "@/components/pages/Blog";

export const metadata: Metadata = {
    title: "Blog - YogaGarhi Insights & Wisdom",
    description: "Read our latest articles on yoga philosophy, teacher training tips, and stories from the ashram. Deepen your understanding of yoga with YogaGarhi.",
    keywords: "yoga blog, yoga articles, yoga philosophy, yoga teacher training tips, YogaGarhi blog",
    alternates: {
        canonical: "/blogs",
    },
};

export default function BlogPage() {
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
                                "name": "Blog",
                                "item": "https://yogagarhi.com/blogs"
                            }
                        ]
                    })
                }}
            />
            <Blog />
        </>
    );
}

