import React from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'product';
  noIndex?: boolean;
  structuredData?: object;
}

const BASE_URL = 'https://yogagarhi.com';
const DEFAULT_IMAGE = `${BASE_URL}/og-image.jpg`;
const SITE_NAME = 'YogaGarhi';

export default function SEO({
  title,
  description = 'Transform your life with authentic yoga teacher training in Bali. 100, 200 & 300 hour Yoga Alliance certified programs at YogaGarhi.',
  keywords = 'yoga teacher training, YTTC Bali, 200 hour yoga training, yoga certification, Ubud yoga, Yoga Alliance certified, yoga retreat Bali',
  canonicalUrl,
  ogImage = DEFAULT_IMAGE,
  ogType = 'website',
  noIndex = false,
  structuredData,
}: SEOProps) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} - Yoga Teacher Training in Bali, Ubud`;
  const canonical = canonicalUrl ? `${BASE_URL}${canonicalUrl}` : undefined;

  // Default Organization structured data
  const defaultStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'YogaGarhi',
    description: 'Authentic Yoga Teacher Training in Bali, Ubud. Yoga Alliance certified 100, 200 & 300 hour programs.',
    url: BASE_URL,
    logo: `${BASE_URL}/favicon.png`,
    image: ogImage,
    telephone: '+91-7895350563',
    email: 'yogagarhi@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Ds madangan kaja, Desa petak, Petak kaja',
      addressLocality: 'Gianyar',
      addressRegion: 'Bali',
      postalCode: '80515',
      addressCountry: 'ID',
    },
    sameAs: [
      'https://www.instagram.com/yogagarhi',
      'https://www.facebook.com/yogagarhi',
      'https://www.youtube.com/@YogaGarhi',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Yoga Teacher Training Courses',
      itemListElement: [
        {
          '@type': 'Course',
          name: '100 Hour Yoga Teacher Training',
          description: '12-day intensive yoga teacher training program for beginners',
          provider: { '@type': 'Organization', name: 'YogaGarhi' },
        },
        {
          '@type': 'Course',
          name: '200 Hour Yoga Teacher Training',
          description: '24-day comprehensive yoga teacher training certification',
          provider: { '@type': 'Organization', name: 'YogaGarhi' },
        },
        {
          '@type': 'Course',
          name: '300 Hour Yoga Teacher Training',
          description: '28-day advanced yoga teacher training for certified instructors',
          provider: { '@type': 'Organization', name: 'YogaGarhi' },
        },
      ],
    },
  };

  return (
    <>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="YogaGarhi" />

      {/* Robots */}
      {noIndex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}

      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical || BASE_URL} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical || BASE_URL} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@YogaGarhi" />

      {/* Additional SEO Tags */}
      <meta name="geo.region" content="ID-BA" />
      <meta name="geo.placename" content="Gianyar, Bali" />
      <meta name="geo.position" content="-8.4095;115.3125" />
      <meta name="ICBM" content="-8.4095, 115.3125" />

      {/* Language */}
      <meta httpEquiv="content-language" content="en" />
      <link rel="alternate" hrefLang="en" href={canonical || BASE_URL} />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData || defaultStructuredData),
        }}
      />
    </>
  );
}

// Specific structured data generators for different page types
export const generateCourseSchema = (course: {
  name: string;
  description: string;
  duration: string;
  price: string;
  image: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: course.name,
  description: course.description,
  provider: {
    '@type': 'Organization',
    name: 'YogaGarhi',
    url: 'https://yogagarhi.com',
  },
  hasCourseInstance: {
    '@type': 'CourseInstance',
    courseMode: 'onsite',
    duration: course.duration,
    location: {
      '@type': 'Place',
      name: 'YogaGarhi Ashram',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Gianyar',
        addressRegion: 'Bali',
        addressCountry: 'Indonesia',
      },
    },
  },
  offers: {
    '@type': 'Offer',
    price: course.price.replace('$', ''),
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
  },
  image: course.image,
});

export const generateFAQSchema = (faqs: { question: string; answer: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
});

export const generateBreadcrumbSchema = (items: { name: string; url: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: `https://yogagarhi.com${item.url}`,
  })),
});
