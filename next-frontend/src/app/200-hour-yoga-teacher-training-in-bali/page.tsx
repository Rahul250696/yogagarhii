import { Metadata } from "next";
import Course200Hour from "@/components/pages/Course200Hour";
import { courseData } from "@/constants/courses";

export async function generateMetadata(): Promise<Metadata> {
    const course = courseData["200-hour"];

    const title =
        "200 Hour Yoga Teacher Training in Bali | RYT 200 Yoga TTC – YogaGarhi";

    const description =
        "Join YogaGarhi’s 200 Hour Yoga Teacher Training in Bali. A residential RYT 200 Yoga Alliance certified course offering authentic yogic education, asana, pranayama, meditation, philosophy, and teaching methodology in Bali.";

    const url =
        "https://www.yogagarhi.com/200-hour-yoga-teacher-training-in-bali/";

    return {
        title,
        description,
        keywords: [
            "200 hour yoga teacher training in bali",
            "200 hour yoga TTC bali",
            "ryt 200 yoga teacher training bali",
            "yoga alliance 200 hour bali",
            "yoga teacher training bali"
        ],
        alternates: {
            canonical: url,
        },
        robots: {
            index: true,
            follow: true,
            maxSnippet: -1,
            maxImagePreview: "large",
            maxVideoPreview: -1,
        },
        openGraph: {
            title,
            description,
            url,
            type: "website",
            images: [
                {
                    url: "https://www.yogagarhi.com/og-image.jpg",
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
        },
    };
}

export default function Page() {
    const course = courseData["200-hour"];

    const courseSchema = {
        "@context": "https://schema.org",
        "@type": "Course",
        "name": "200 Hour Yoga Teacher Training in Bali",
        "description": course.welcomeText,
        "inLanguage": "en",
        "educationalCredentialAwarded":
            "RYT 200 Yoga Alliance Certification",
        "provider": {
            "@type": "Organization",
            "name": "YogaGarhi",
            "url": "https://www.yogagarhi.com"
        },
        "audience": {
            "@type": "Audience",
            "audienceType": "Beginner to intermediate yoga practitioners"
        },
        "coursePrerequisites":
            "Basic yoga practice recommended but not mandatory",
        "hasCourseInstance": {
            "@type": "CourseInstance",
            "courseMode": "onsite",
            "duration": "P24D",
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
            "url":
                "https://www.yogagarhi.com/200-hour-yoga-teacher-training-in-bali/"
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
                "item": "https://www.yogagarhi.com"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Yoga Teacher Training Courses",
                "item": "https://www.yogagarhi.com/courses"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": "200 Hour Yoga Teacher Training in Bali",
                "item":
                    "https://www.yogagarhi.com/200-hour-yoga-teacher-training-in-bali/"
            }
        ]
    };

    return (
        <>
            {/* Course Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(courseSchema),
                }}
            />

            {/* Breadcrumb Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(breadcrumbSchema),
                }}
            />

            <Course200Hour />
        </>
    );
}
