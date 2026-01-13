import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
    title: "Apply Now - Register for Yoga Teacher Training | YogaGarhi",
    description: "Register for our Yoga Teacher Training courses in Bali. Start your journey to becoming a certified yoga teacher.",
    alternates: {
        canonical: "/apply-now",
    },
};

export default function ApplyNowPage() {
    return (
        <div className="container mx-auto px-4 py-20">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
                    Apply Now
                </h1>
                <p className="text-lg text-muted-foreground mb-12">
                    Choose your yoga teacher training course and begin your transformation journey with YogaGarhi.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Link href="/100-hour-yoga-teacher-training-in-bali">
                        <Button className="w-full h-auto py-6 flex flex-col gap-2">
                            <span className="text-xl font-bold">100 Hour</span>
                            <span className="text-sm opacity-90">YTTC</span>
                        </Button>
                    </Link>
                    <Link href="/200-hour-yoga-teacher-training-in-bali">
                        <Button className="w-full h-auto py-6 flex flex-col gap-2">
                            <span className="text-xl font-bold">200 Hour</span>
                            <span className="text-sm opacity-90">YTTC</span>
                        </Button>
                    </Link>
                    <Link href="/300-hour-yoga-teacher-training-in-bali">
                        <Button className="w-full h-auto py-6 flex flex-col gap-2">
                            <span className="text-xl font-bold">300 Hour</span>
                            <span className="text-sm opacity-90">YTTC</span>
                        </Button>
                    </Link>

                </div>

                <div className="mt-12">
                    <p className="text-muted-foreground mb-4">
                        Need help choosing the right course?
                    </p>
                    <Link href="/contact-us">
                        <Button variant="outline">Contact Us</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
