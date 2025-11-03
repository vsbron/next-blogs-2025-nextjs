import Image from "next/image";
import parse from "html-react-parser";

import ArticleLayout from "@/components/ArticleLayout";
import SectionTitle from "@/components/SectionTitle";
import { fetchPost } from "@/utils/actions/posts";

// Interface for the Post ID
interface SinglePostPageProps {
  params: Promise<{ id: string }>;
}
// The page
async function PostPage({ params }: SinglePostPageProps) {
  // Get the ID from the params
  const { id } = await params;

  // Fetch the post using the ID
  const { title, text, imageUrl } = await fetchPost(id);

  // Returned JSX
  return (
    <ArticleLayout>
      <SectionTitle>{title}</SectionTitle>
      <div className="h-96 relative mb-5">
        <Image
          src={imageUrl}
          fill
          className="object-cover"
          alt={title}
          sizes="66vw"
        />
      </div>
      {parse(text)}
    </ArticleLayout>
  );
}

export default PostPage;
