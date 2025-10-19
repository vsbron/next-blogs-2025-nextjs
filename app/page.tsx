import FeaturedPost from "@/components/FeaturedPost";
import SecondaryPosts from "@/components/SecondaryPosts";
import SectionTitle from "@/components/SectionTitle";

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
      <section>
        <SectionTitle as="h2">Recent posts</SectionTitle>
        <p>
          Grid featuring some recent posts made with the link to see all posts
        </p>
      </section>
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
