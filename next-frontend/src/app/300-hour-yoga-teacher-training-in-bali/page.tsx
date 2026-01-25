import { Metadata } from "next";
import Course300Hour from "@/components/pages/Course300Hour";
import { courseData } from "@/constants/courses";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(): Promise<Metadata> {
  const course = courseData["300-hour"];
  const title = `${course.title} ${course.subtitle} | YogaGarhi Bali`;
  const description = course.welcomeText.substring(0, 160) + "...";

  return {
    title: title,
    description: description,
    alternates: {
      canonical: "https://yogagarhi.com/300-hour-yoga-teacher-training-in-bali",
    },
    openGraph: {
      title: title,
      description: description,
      url: "https://yogagarhi.com/300-hour-yoga-teacher-training-in-bali",
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
  const course = courseData["300-hour"];
  const pageUrl = "https://yogagarhi.com/300-hour-yoga-teacher-training-in-bali";

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
      "duration": "P28D",
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
    },
    "educationalCredentialAwarded": "RYT-500 Yoga Alliance Certification",
    "coursePrerequisites": [
      {
        "@type": "Course",
        "name": "RYT-200 Certification"
      }
    ]
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
        "name": "300 Hour Yoga Teacher Training in Bali",
        "item": pageUrl
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
      <Course300Hour />
    </>
  );
}
