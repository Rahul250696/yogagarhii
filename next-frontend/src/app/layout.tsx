import type { Metadata } from "next";
import { Cormorant_Garamond, Lato } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import MainLayout from "@/components/MainLayout";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://yogagarhi.com'),
  title: {
    default: "YogaGarhi - Yoga Teacher Training Bali",
    template: "%s | YogaGarhi"
  },
  description: "Transform your life with authentic yoga teacher training in Bali. 100, 200 & 300 hour Yoga Alliance certified programs at YogaGarhi.",
  keywords: [
    "yoga teacher training Bali",
    "YTTC Ubud",
    "200 hour yoga certification",
    "yoga alliance certified",
    "yoga retreat Bali",
    "yoga school Indonesia",
    "RYT 200",
    "yoga ashram Bali",
    "meditation training",
    "pranayama course",
    "YogaGarhi",
    "100 hour YTTC",
    "300 hour YTTC",
    "yoga teacher training Gianyar"
  ],
  authors: [{ name: "YogaGarhi" }],
  creator: "YogaGarhi",
  publisher: "YogaGarhi",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yogagarhi.com',
    siteName: 'YogaGarhi',
    title: 'YogaGarhi - Yoga Teacher Training in Bali, Ubud',
    description: 'Transform your life with authentic yoga teacher training in Bali. 100, 200 & 300 hour Yoga Alliance certified programs at YogaGarhi.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'YogaGarhi - Yoga Teacher Training Bali',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YogaGarhi - Yoga Teacher Training in Bali, Ubud',
    description: 'Transform your life with authentic yoga teacher training in Bali. 100, 200 & 300 hour Yoga Alliance certified programs.',
    images: ['/og-image.jpg'],
    creator: '@YogaGarhi',
    site: '@YogaGarhi',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Replace with actual code
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#0f766e" />
      </head>
      <body className={`${cormorant.variable} ${lato.variable} font-body bg-background text-foreground antialiased`}>
        <Providers>
          <MainLayout>
            {children}
          </MainLayout>
        </Providers>
      </body>
    </html>
  );
}
