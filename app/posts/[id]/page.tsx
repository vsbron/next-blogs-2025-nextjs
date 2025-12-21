import { Metadata } from "next";
import { Suspense } from "react";

import ArticleLayout from "@/components/ArticleLayout";
import PostSection from "@/components/Post/PostSection";
import PostSidebar from "@/components/Sidebar/PostSidebar";
import SectionTitle from "@/components/SectionTitle";
import BreadCrumbsPostPage from "@/components/breadcrumbs/BreadCrumbsPostPage";
import PostComments from "@/components/Comments/PostComments";
import SkeletonArticle from "@/components/skeletons/SkeletonArticle";

import { fetchPost } from "@/utils/actions/posts";
import { SITE_DOMAIN } from "@/utils/constants";
import SectionSeparator from "@/components/SectionSeparator";

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
  // Get the ID from the params and fetch the post
  const { id } = await params;
  const post = await fetchPost(id);

  // Guard clause
  if (!post) throw new Error("Post not found");

  // Returned JSX
  return (
    <section>
      <BreadCrumbsPostPage category={post.category} />
      <SectionTitle>{post.title}</SectionTitle>
      <Suspense fallback={<SkeletonArticle />}>
        <ArticleLayout sidebar={<PostSidebar post={post} />}>
          <PostSection post={post} />
          <SectionSeparator />
          <PostComments postId={post.id} />
        </ArticleLayout>
      </Suspense>
    </section>
  );
}

export default PostPage;
