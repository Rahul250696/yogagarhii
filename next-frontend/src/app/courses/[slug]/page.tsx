import { Metadata } from "next";
import CourseDetail from "@/components/pages/CourseDetail";
import { courseData } from "@/constants/courses";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const course = courseData[slug as keyof typeof courseData];

    if (!course) {
        return {
            title: "Course Not Found | YogaGarhi",
            description: "The requested yoga teacher training course could not be found.",
        };
    }

    const title = `${course.title} - ${course.subtitle}`;
    const description = course.welcomeText.substring(0, 160) + "...";

    return {
        title: title,
        description: description,
        alternates: {
            canonical: `/courses/${slug}`,
        },
        openGraph: {
            title: title,
            description: description,
            url: `/courses/${slug}`,
            type: "website",
            images: [
                {
                    url: "/opengraph-image",
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: title,
            description: description,
        },
    };
}

export default async function Page({ params }: Props) {
    const { slug } = await params;
    const course = courseData[slug as keyof typeof courseData];

    if (!course) {
        return <CourseDetail />;
    }

    const courseSchema = {
        "@context": "https://schema.org",
        "@type": "Course",
        "name": `${course.title} ${course.subtitle}`,
        "description": course.welcomeText,
        "provider": {
            "@type": "Organization",
            "name": "YogaGarhi",
            "sameAs": "https://yogagarhi.com"
        },
        "courseInstance": {
            "@type": "CourseInstance",
            "courseMode": "In-person",
            "duration": course.duration,
            "location": course.location
        },
        "offers": {
            "@type": "Offer",
            "price": course.price.replace("$", ""),
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "url": `https://yogagarhi.com/courses/${slug}`
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
                "item": "https://yogagarhi.com/courses/200-hour" // Defaulting to 200-hour as a category rep
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": course.title,
                "item": `https://yogagarhi.com/courses/${slug}`
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
            <CourseDetail />
        </>
    );
}

