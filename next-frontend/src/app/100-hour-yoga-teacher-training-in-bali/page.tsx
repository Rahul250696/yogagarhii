import { Metadata } from "next";
import Course100Hour from "@/components/pages/Course100Hour";
import { courseData } from "@/constants/courses";

/* =========================
   SEO METADATA
========================= */
export function generateMetadata(): Metadata {
    const course = courseData["100-hour"];

    const title =
        "100 Hour Yoga Teacher Training in Bali | Beginner Yoga TTC – YogaGarhi";

    const description =
        "Can we do 100 hour yoga teacher training in Bali? Yes. Join YogaGarhi’s beginner-friendly residential 100 Hour Yoga TTC designed for short stays, deep yogic practice, and authentic learning in Bali.";

    const url =
        "https://www.yogagarhi.com/100-hour-yoga-teacher-training-in-bali/";

    return {
        title,
        description,
        keywords: [
            "100 hour yoga teacher training in bali",
            "100 hour yoga TTC bali",
            "beginner yoga teacher training bali",
            "short yoga teacher training bali",
            "yoga certification bali"
        ],
        alternates: {
            canonical: url,
        },
        robots: {
            index: true,
            follow: true,
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

/* =========================
   PAGE
========================= */
export default function Page() {
    const course = courseData["100-hour"];
    const pageUrl =
        "https://www.yogagarhi.com/100-hour-yoga-teacher-training-in-bali/";

    /* =========================
       COURSE SCHEMA
    ========================= */
    const courseSchema = {
        "@context": "https://schema.org",
        "@type": "Course",
        "name": "100 Hour Yoga Teacher Training in Bali",
        "description": course.welcomeText,
        "inLanguage": "en",
        "educationalCredentialAwarded":
            "Certificate of Completion – 100 Hour Yoga Teacher Training",
        "provider": {
            "@type": "Organization",
            "name": "YogaGarhi",
            "url": "https://www.yogagarhi.com"
        },
        "audience": {
            "@type": "Audience",
            "audienceType": "Beginner yoga practitioners"
        },
        "coursePrerequisites": "No prior teaching experience required",
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
            "url": pageUrl
        }
    };

    /* =========================
       BREADCRUMB SCHEMA
    ========================= */
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
                "name": "Yoga Teacher Training in Bali",
                "item": "https://www.yogagarhi.com/courses"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": "100 Hour Yoga Teacher Training in Bali",
                "item": pageUrl
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

            {/* Page Content */}
            <Course100Hour />
        </>
    );
}
