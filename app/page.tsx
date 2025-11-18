import HeroSection from "@/components/Index/HeroSection";
import CTASection from "@/components/CTASection";
import RecentPosts from "@/components/Index/RecentPosts";
import SectionSeparator from "@/components/SectionSeparator";
import GeneralStats from "@/components/GeneralStats";

function Home() {
  // Returned JSX
  return (
    <>
      <HeroSection />
      <CTASection index={true} />
      <RecentPosts />
      <SectionSeparator />
      <GeneralStats />
    </>
  );
}

export default Home;
