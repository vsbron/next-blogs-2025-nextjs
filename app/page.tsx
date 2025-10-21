import CTASection from "@/components/Index/CTASection";
import FeaturedPost from "@/components/Index/FeaturedPost";
import IndexStats from "@/components/Index/IndexStats";
import RecentPosts from "@/components/Index/RecentPosts";
import SecondaryPosts from "@/components/Index/SecondaryPosts";
import SectionSeparator from "@/components/SectionSeparator";

function Home() {
  // Returned JSX
  return (
    <>
      <FeaturedPost />
      <SecondaryPosts />
      <SectionSeparator />
      <CTASection />
      <SectionSeparator />
      <RecentPosts />
      <SectionSeparator />
      <IndexStats />
    </>
  );
}

export default Home;
