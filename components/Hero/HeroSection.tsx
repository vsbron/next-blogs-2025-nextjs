import HeroFeatured from "./HeroFeatured";
import HeroSecondary from "./HeroSecondary";
import HeroQuick from "./HeroQuick";

import CityImg from "@/assets/article-city.jpg";
import AIImg from "@/assets/article-ai.jpg";

// Dummy articles
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

function HeroSection() {
  // Returned JSX
  return (
    <>
      <HeroFeatured />
      <section>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_450px] gap-2 xs:gap-6 items-start">
          <div className="flex flex-col gap-8">
            <HeroSecondary article={dummyArticles[0]} image={CityImg} />
            <HeroSecondary article={dummyArticles[1]} image={AIImg} />
          </div>
          <div className="hidden lg:block">
            <HeroQuick articles={dummyArticles} />
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
