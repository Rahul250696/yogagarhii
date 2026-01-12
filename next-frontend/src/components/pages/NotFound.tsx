"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const pathname = usePathname();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", pathname);
  }, [pathname]);

  return (
    <Layout>
      <div className="min-h-[70vh] flex items-center justify-center bg-background">
        <div className="text-center px-4">
          <h1 className="font-heading text-6xl md:text-8xl font-bold text-primary mb-4">404</h1>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Page Not Found
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist. Let's get you back on your yoga journey.
          </p>
          <Button variant="cta" size="lg" asChild>
            <Link href="/">Return Home</Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
