import ArticleLayout from "@/components/ArticleLayout";
import PostSection from "@/components/PostSection";
import PostSidebar from "@/components/PostSidebar";
import SectionTitle from "@/components/SectionTitle";

import { fetchPost } from "@/utils/actions/posts";
import { SITE_DOMAIN } from "@/utils/constants";
import { Metadata } from "next";

type Props = {
  params: Promise<{ id: string }>;
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;

  // Fetch the post using the ID
  const post = await fetchPost(id);

  // Guard clause
  if (!post) throw new Error("Post not found");

  // Returned Metadata
  return {
    title: post.title,
    description: post.preview,
    openGraph: {
      url: `${SITE_DOMAIN}/posts/${id}`,
      title: post.title,
      description: post.preview,
      images: [
        {
          url: post.imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.preview,
      images: [
        {
          url: post.imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

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
    <section>
      <SectionTitle>{post.title}</SectionTitle>
      <ArticleLayout sidebar={<PostSidebar post={post}></PostSidebar>}>
        <PostSection post={post}></PostSection>
      </ArticleLayout>
    </section>
  );
}

export default PostPage;
