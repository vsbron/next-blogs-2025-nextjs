import SectionTitle from "@/components/SectionTitle";
import FeaturedPost from "@/components/Index/FeaturedPost";
import RecentPosts from "@/components/Index/RecentPosts";
import SecondaryPosts from "@/components/Index/SecondaryPosts";

// Dummy article
const featuredArticle = {
  title: "Why Lions are Awesome? We have 101 Reasons that prove it!",
  preview:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, accusantium voluptatum! Ipsum, consectetur itaque totam illo fuga hic iure eum neque eaque ab? Minus atque alias dicta ex tempore, iure libero quos. Maxime obcaecati nesciunt similique aut praesentium harum perspiciatis.",
  date: "Oct 19, 2025",
  views: 53,
  likes: 12,
  href: "/",
};

function Home() {
  // Returned JSX
  return (
    <>
      <FeaturedPost {...featuredArticle} />
      <SecondaryPosts />
      <section>
        <SectionTitle as="h2">CTA section</SectionTitle>
        <p>CTA part for user to register or start posting</p>
      </section>
      <RecentPosts />
      <section>
        <SectionTitle as="h2">Stats columns</SectionTitle>
        <p>Three column grid that shows:</p>
        <ul>
          <li>Most liked posts</li>
          <li>Most viewed posts</li>
          <li>Authors with the most amount of posts</li>
        </ul>
      </section>
    </>
  );
}

export default Home;
