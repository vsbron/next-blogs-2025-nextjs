import { Metadata } from "next";
import { Suspense } from "react";

import ArticleLayout from "@/components/ArticleLayout";
import PostSection from "@/components/PostSection";
import PostSidebar from "@/components/Sidebar/PostSidebar";
import SectionTitle from "@/components/SectionTitle";
import SkeletonArticle from "@/components/skeletons/SkeletonArticle";

import { fetchPost } from "@/utils/actions/posts";
import { SITE_DOMAIN } from "@/utils/constants";

// Interface for the Post ID
interface SinglePostPageProps {
  params: Promise<{ id: string }>;
}

// Generate metadata function
export async function generateMetadata({
  params,
}: SinglePostPageProps): Promise<Metadata> {
  // Get the id from params and fetch the post
  const { id } = await params;
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
      <Suspense fallback={<SkeletonArticle />}>
        <ArticleLayout sidebar={<PostSidebar post={post} />}>
          <PostSection post={post} />
        </ArticleLayout>
      </Suspense>
    </section>
  );
}

export default PostPage;
