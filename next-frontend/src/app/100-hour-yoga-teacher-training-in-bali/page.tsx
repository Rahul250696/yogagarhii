import { Metadata } from "next";
import Course100Hour from "@/components/pages/Course100Hour";
import { courseData } from "@/constants/courses";

export function generateMetadata(): Metadata {
    const course = courseData["100-hour"];

    const title =
        "100 Hour Yoga Teacher Training in Bali | Beginner Yoga TTC – YogaGarhi";

    const description =
        "Can we do 100 hour yoga teacher training in Bali? Yes. Join YogaGarhi’s beginner-friendly residential 100 Hour Yoga TTC designed for short stays, deep yogic practice, and authentic learning in Bali.";

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
            canonical:
                "https://www.yogagarhi.com/100-hour-yoga-teacher-training-in-bali/",
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
            url:
                "https://www.yogagarhi.com/100-hour-yoga-teacher-training-in-bali/",
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
    const course = courseData["100-hour"];

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
            "url":
                "https://www.yogagarhi.com/100-hour-yoga-teacher-training-in-bali/"
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
                "name": "100 Hour Yoga Teacher Training in Bali",
                "item":
                    "https://www.yogagarhi.com/100-hour-yoga-teacher-training-in-bali/"
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

            <Course100Hour />
        </>
    );
}
