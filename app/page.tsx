import CTASection from "@/components/Index/CTASection";
import FeaturedPosts from "@/components/Index/FeaturedPosts";
import IndexStats from "@/components/Index/IndexStats";
import RecentPosts from "@/components/Index/RecentPosts";
import SectionSeparator from "@/components/SectionSeparator";

function Home() {
  // Returned JSX
  return (
    <>
      <FeaturedPosts />
      <CTASection />
      <RecentPosts />
      <SectionSeparator />
      <IndexStats />
    </>
  );
}

export default Home;
