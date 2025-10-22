import HeroSection from "@/components/Hero/HeroSection";
import CTASection from "@/components/CTASection";
import IndexStats from "@/components/PostStats";
import RecentPosts from "@/components/RecentPosts";
import SectionSeparator from "@/components/SectionSeparator";

function Home() {
  // Returned JSX
  return (
    <>
      <HeroSection />
      <CTASection index={true} />
      <RecentPosts />
      <SectionSeparator />
      <IndexStats />
    </>
  );
}

export default Home;
