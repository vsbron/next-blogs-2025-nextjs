import HeroSection from "@/components/Hero/HeroSection";
import CTASection from "@/components/Index/CTASection";
import IndexStats from "@/components/Index/IndexStats";
import RecentPosts from "@/components/Index/RecentPosts";
import SectionSeparator from "@/components/SectionSeparator";

function Home() {
  // Returned JSX
  return (
    <>
      <HeroSection />
      <CTASection />
      <RecentPosts />
      <SectionSeparator />
      <IndexStats />
    </>
  );
}

export default Home;
