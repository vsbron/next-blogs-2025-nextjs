import FeaturedCard from "@/components/FeaturedCard";
import SectionTitle from "@/components/SectionTitle";

function Home() {
  // Returned JSX
  return (
    <>
      <FeaturedCard />
      <section>
        <SectionTitle as="h2">Secondary posts</SectionTitle>
        <p>Secondary three popular posts</p>
      </section>
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
