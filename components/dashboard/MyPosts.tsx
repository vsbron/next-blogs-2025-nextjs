import Link from "next/link";

import ArticleLayout from "@/components/ArticleLayout";
import PostsListLayout from "@/components/PostsListLayout";
import PostPreviewLine from "@/components/PostPreviewLine";

import { fetchUserPosts } from "@/utils/actions/posts";

async function MyPosts() {
  // Fetch user's posts
  const posts = await fetchUserPosts();

  // Guard clause
  if (!posts || !posts.length)
    return (
      <ArticleLayout>
        <h3 className="mb-2">No posts yet</h3>
        <p>
          Sorry! Looks like you do not have any posts yet - or something went
          wrong while fetching them.
          <br />
          Ready to start writing? Create your{" "}
          <Link href="/dashboard/add-post">first post</Link> right now!
        </p>
      </ArticleLayout>
    );

  // Returned JSX
  return (
    <PostsListLayout>
      {posts.map((post) => {
        return <PostPreviewLine key={post.id} post={post} />;
      })}
    </PostsListLayout>
  );
}

export default MyPosts;
