import { fetchRecentPosts } from "@/utils/actions/posts";
import ArticlePreviewTile from "../ArticlePreviewTile";
import PreviewTilesGrid from "../PreviewTilesGrid";

async function MyPosts() {
  // Fetch user's post
  const posts = await fetchRecentPosts();

  // Returned JSX
  return (
    <PreviewTilesGrid>
      {posts.map((post) => {
        return <ArticlePreviewTile key={post.id} post={post} />;
      })}
    </PreviewTilesGrid>
  );
}

export default MyPosts;
