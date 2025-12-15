import { PostPreview } from "@/utils/types";
import Image from "next/image";

function SearchPostPreview({ post }: { post: PostPreview }) {
  // Returned JSX
  return (
    <div className="text-white">
      <div className="relative h-35 w-full mb-1">
        <Image
          fill
          src={post.imageUrl}
          alt={post.title}
          className="object-cover rounded-lg"
        />
      </div>
      <h2 className="text-xl">{post.title}</h2>
      <p className="text-lg">{post.preview}</p>
    </div>
  );
}

export default SearchPostPreview;
