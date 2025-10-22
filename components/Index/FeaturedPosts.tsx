import FeaturedMainPost from "./FeaturedMainPost";
import FeaturedPostsMini from "./FeaturedPostsMini";
import FeaturedSecondaryPost from "./FeaturedSecondaryPost";

import CityImg from "@/assets/article-city.jpg";
import AIImg from "@/assets/article-ai.jpg";

// 3 Dummy articles
const dummyArticles = [
  {
    title: "How to survive in a huge city",
    preview:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa doloribus consequuntur autem non temporibus sit magnam rerum omnis aperiam.",
    date: "Oct 18, 2025",
    views: 12,
    likes: 3,
    href: "/1",
  },
  {
    title: "AI solved another major problem",
    preview:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo error consequatur, quis nisi illum ullam fugiat voluptatum molestiae debitis.",
    date: "Oct 05, 2025",
    views: 39,
    likes: 10,
    href: "/2",
  },
  {
    title: "Eat HEALTHY!",
    preview:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa doloribus consequuntur autem non temporibus sit magnam rerum omnis aperiam.",
    date: "Sep 16, 2025",
    views: 42,
    likes: 5,
    href: "/3",
  },
  {
    title: "AI solved another major problem",
    preview:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo error consequatur, quis nisi illum ullam fugiat voluptatum molestiae debitis.",
    date: "Oct 05, 2025",
    views: 39,
    likes: 10,
    href: "/4",
  },
  {
    title: "How to survive in a huge city",
    preview:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa doloribus consequuntur autem non temporibus sit magnam rerum omnis aperiam.",
    date: "Oct 18, 2025",
    views: 12,
    likes: 3,
    href: "/5",
  },
];

function FeaturedPosts() {
  // Returned JSX
  return (
    <>
      <FeaturedMainPost />
      <section>
        <div className="grid grid-cols-[2fr_1fr] gap-6 items-start">
          <div>
            <div className="flex flex-col gap-6">
              <FeaturedSecondaryPost
                article={dummyArticles[0]}
                image={CityImg}
              />
              <FeaturedSecondaryPost article={dummyArticles[1]} image={AIImg} />
            </div>
          </div>
          <FeaturedPostsMini articles={dummyArticles} />
        </div>
      </section>
    </>
  );
}

export default FeaturedPosts;
