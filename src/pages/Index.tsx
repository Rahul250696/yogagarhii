import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
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
import StudentStoriesSection from "@/components/home/StudentStoriesSection";
import ReadyToBeginSection from "@/components/home/ReadyToBeginSection";

const Index = () => {
  return (
    <Layout>
      <SEO 
        canonicalUrl="/"
        keywords="yoga teacher training Bali, YTTC Ubud, 200 hour yoga certification, yoga alliance certified, yoga retreat Bali, yoga school Indonesia, RYT 200, yoga ashram Bali, meditation training, pranayama course, YogaGarhi"
      />
      <Hero />
      <YTTCSupportSection />
      <WelcomeSection />
      <CoursesSection />
      <FounderSection />
      <WhyOneStyleSection />
      <GoogleReviewsSection />
      <WhyChooseUs />
      <WebinarSection />
      <HomeGallerySection />
      <StudentStoriesSection />
      <ReadyToBeginSection />
      <FAQSection />
    </Layout>
  );
};

export default Index;
