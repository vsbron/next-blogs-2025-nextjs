import ArticleLayout from "@/components/ArticleLayout";
import SectionTitle from "@/components/SectionTitle";
import { fetchPost } from "@/utils/actions/posts";
import PostSection from "@/components/PostSection";

// Interface for the Post ID
interface SinglePostPageProps {
  params: Promise<{ id: string }>;
}
// The page
async function PostPage({ params }: SinglePostPageProps) {
  // Get the ID from the params
  const { id } = await params;

  // Fetch the post using the ID
  const post = await fetchPost(id);

  // Guard clause
  if (!post) throw new Error("Post not found");

  // Returned JSX
  return (
    <ArticleLayout>
      <SectionTitle>{post.title}</SectionTitle>
      <PostSection post={post}></PostSection>
    </ArticleLayout>
  );
}

export default PostPage;
