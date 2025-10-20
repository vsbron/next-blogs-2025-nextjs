import ArticlePreviewTile from "../ArticlePreviewTile";
import PreviewTilesGrid from "../PreviewTilesGrid";

import AIImg from "@/assets/article-ai.jpg";
import CityImg from "@/assets/article-city.jpg";
import VegetablesImg from "@/assets/article-vegetables.jpg";
import UFOImg from "@/assets/article-ufo.jpg";

// 3 Dummy articles
const dummyArticles = [
  {
    title: "How to survive in a huge city",
    preview:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa doloribus consequuntur autem non temporibus sit magnam rerum omnis aperiam.",
    date: "Oct 18, 2025",
    views: 12,
    likes: 3,
    href: "/",
  },
  {
    title: "AI solved another major problem",
    preview:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo error consequatur, quis nisi illum ullam fugiat voluptatum molestiae debitis.",
    date: "Oct 05, 2025",
    views: 39,
    likes: 10,
    href: "/",
  },
  {
    title: "Eat HEALTHY!",
    preview:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa doloribus consequuntur autem non temporibus sit magnam rerum omnis aperiam.",
    date: "Sep 16, 2025",
    views: 42,
    likes: 5,
    href: "/",
  },
];

function RecentPosts() {
  // Returned JSX
  return (
    <section>
      <PreviewTilesGrid>
        <ArticlePreviewTile {...dummyArticles[0]} image={CityImg} />
        <ArticlePreviewTile {...dummyArticles[1]} image={AIImg} />
        <ArticlePreviewTile {...dummyArticles[2]} image={VegetablesImg} />
        <ArticlePreviewTile {...dummyArticles[1]} image={UFOImg} />
        <ArticlePreviewTile {...dummyArticles[2]} image={VegetablesImg} />
        <ArticlePreviewTile {...dummyArticles[0]} image={CityImg} />
      </PreviewTilesGrid>
    </section>
  );
}

export default RecentPosts;
