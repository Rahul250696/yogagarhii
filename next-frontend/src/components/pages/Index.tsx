import Hero from "@/components/home/Hero";
import WelcomeSection from "@/components/home/WelcomeSection";
import CoursesSection from "@/components/home/CoursesSection";
import FounderSection from "@/components/home/FounderSection";
import WhyOneStyleSection from "@/components/home/WhyOneStyleSection";
import GoogleReviewsSection from "@/components/home/GoogleReviewsSection";
import YTTCSupportSection from "@/components/home/YTTCSupportSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import FAQSection from "@/components/home/FAQSection";
import WebinarSection from "@/components/home/WebinarSection";
import HomeGallerySection from "@/components/home/HomeGallerySection";
import HomeVideoGallerySection from "@/components/home/HomeVideoGallerySection";
import StudentStoriesSection from "@/components/home/StudentStoriesSection";
import ReadyToBeginSection from "@/components/home/ReadyToBeginSection";

const Index = () => {
  return (
    <>
      <Hero />
      <WelcomeSection />
      <CoursesSection />
      <WhyChooseUs />
      <YTTCSupportSection />
      <GoogleReviewsSection />
      <StudentStoriesSection />
      <FounderSection />
      <WhyOneStyleSection />
      <HomeVideoGallerySection />
      <WebinarSection />
      <HomeGallerySection />
      <ReadyToBeginSection />
      <FAQSection />
    </>
  );
};

export default Index;
