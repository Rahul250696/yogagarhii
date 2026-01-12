import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Calendar, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-yoga-bali.jpg";

const blogPosts = [
  {
    title: "Benefits of Yoga Teacher Training in Bali",
    excerpt: "Discover why Bali has become the world's premier destination for yoga teacher training and how it can transform your practice.",
    date: "January 5, 2025",
    image: heroImage,
    slug: "benefits-yttc-bali",
  },
  {
    title: "What to Expect in Your 200 Hour YTTC",
    excerpt: "A comprehensive guide to preparing for your 200-hour yoga teacher training certification journey.",
    date: "December 28, 2024",
    image: heroImage,
    slug: "what-to-expect-200hr",
    imageAlt: "Yoga teacher training preparation"
  },
  {
    title: "The Himalayan Roots of Authentic Yoga",
    excerpt: "Exploring the ancient traditions and lineages that form the foundation of traditional yoga practice.",
    date: "December 20, 2024",
    image: heroImage,
    slug: "himalayan-roots-yoga",
    imageAlt: "Himalayan yoga traditions"
  },
];

export default function Blog() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-80 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt="Hero Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-primary/70" />
        </div>
        <div className="relative z-10 text-center text-primary-foreground">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Our Blog
          </h1>
          <p className="text-xl opacity-90">
            Insights, stories, and wisdom from YogaGarhi
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                  <h2 className="font-heading text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Button variant="link" className="p-0 h-auto text-primary" asChild>
                    <Link href={`/blog/${post.slug}`}>
                      Read More <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
