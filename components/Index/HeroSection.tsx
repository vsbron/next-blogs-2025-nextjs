"use client";
import HeroFeatured from "@/components/Index/HeroFeatured";
import HeroSecondary from "@/components/Index/HeroSecondary";
import HeroQuick from "@/components/Index/HeroQuick";
import SkeletonHeroSection from "@/components/skeletons/SkeletonHeroSection";

import useFeaturedPosts from "@/hooks/useFeaturedPosts";

function HeroSection() {
  // Get the featured posts
  const { data: posts, isLoading, error } = useFeaturedPosts();

  // Guard clauses
  if (isLoading) return <SkeletonHeroSection />;
  if (error || !posts) return <section>There was an error</section>;

  // Returned JSX
  return (
    <>
      <HeroFeatured post={posts[0]} />
      <section>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_450px] gap-2 xs:gap-6 items-start">
          <div className="flex flex-col gap-8">
            <HeroSecondary post={posts[1]} />
            <HeroSecondary post={posts[2]} />
          </div>
          <div className="hidden lg:block">
            <HeroQuick posts={posts.slice(3, posts.length)} />
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
