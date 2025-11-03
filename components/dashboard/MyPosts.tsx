import Link from "next/link";

import ArticleLayout from "@/components/ArticleLayout";
import PostPreviewTile from "@/components/PostPreviewTile";
import PostsGridLayout from "@/components/PostsGridLayout";

import { fetchUserPosts } from "@/utils/actions/posts";

async function MyPosts() {
  // Fetch user's posts
  const posts = await fetchUserPosts();

  // Guard clause
  if (!posts || !posts.length)
    return (
      <ArticleLayout>
        <h2 className="text-2xl mb-4">No posts yet</h2>
        <p>
          Sorry! Looks like you do not have any posts yet - or something went
          wrong while fetching them.
        </p>
        <p>
          Ready to start writing? Create your{" "}
          <Link href="/dashboard/add-post">first post</Link> right now!
        </p>
      </ArticleLayout>
    );

  // Returned JSX
  return (
    <PostsGridLayout>
      {posts.map((post) => {
        return <PostPreviewTile key={post.id} post={post} />;
      })}
    </PostsGridLayout>
  );
}

export default MyPosts;
