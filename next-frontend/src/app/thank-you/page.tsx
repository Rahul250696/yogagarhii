import { Metadata } from "next";
import ThankYou from "@/components/pages/ThankYou";

export const metadata: Metadata = {
    title: "Thank You | Yogagarhi",
    description: "Thank you for your enrollment request.",
    robots: {
        index: false,
        follow: false,
    },
};

export default function Page() {
    return <ThankYou />;
}
