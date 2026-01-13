import { Metadata } from "next";
import Course100Hour from "@/components/pages/Course100Hour";
import { courseData } from "@/constants/courses";

type Props = {
    params: Promise<{ slug: string }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(): Promise<Metadata> {
    const course = courseData["100-hour"];
    const title = `${course.title} ${course.subtitle} | YogaGarhi Bali`;
    const description = course.welcomeText.substring(0, 160) + "...";

    return {
        title: title,
        description: description,
        alternates: {
            canonical: "/courses/100-hour",
        },
        openGraph: {
            title: title,
            description: description,
            url: "/courses/100-hour",
            type: "website",
            images: [
                {
                    url: "/og-image.jpg",
                    width: 1200,
                    height: 630,
                    alt: title,
                }
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: title,
            description: description,
        },
    };
}

export default function Page() {
    const course = courseData["100-hour"];

    const courseSchema = {
        "@context": "https://schema.org",
        "@type": "Course",
        "name": `${course.title} ${course.subtitle}`,
        "description": course.welcomeText,
        "provider": {
            "@type": "Organization",
            "name": "YogaGarhi",
            "url": "https://yogagarhi.com"
        },
        "hasCourseInstance": {
            "@type": "CourseInstance",
            "courseMode": "onsite",
            "duration": "P12D",
            "location": {
                "@type": "Place",
                "name": "YogaGarhi Ashram",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Gianyar",
                    "addressRegion": "Bali",
                    "addressCountry": "Indonesia"
                }
            }
        },
        "offers": {
            "@type": "Offer",
            "price": course.price.replace("$", ""),
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "url": "https://yogagarhi.com/courses/100-hour"
        }
    };

    const breadcrumbSchema = {
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
                "name": "Courses",
                "item": "https://yogagarhi.com/courses/200-hour"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": "100 Hour Course",
                "item": "https://yogagarhi.com/courses/100-hour"
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <Course100Hour />
        </>
    );
}
