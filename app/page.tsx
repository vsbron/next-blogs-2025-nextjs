import CTASection from "@/components/Index/CTASection";
import FeaturedPost from "@/components/Index/FeaturedPost";
import IndexStats from "@/components/Index/IndexStats";
import RecentPosts from "@/components/Index/RecentPosts";
import SecondaryPosts from "@/components/Index/SecondaryPosts";

function Home() {
  // Returned JSX
  return (
    <>
      <FeaturedPost />
      <SecondaryPosts />
      <CTASection />
      <RecentPosts />
      <div className="border-b border-border/50 mt-7 mb-4" />
      <IndexStats />
    </>
  );
}

export default Home;
