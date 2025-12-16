import { PostPreview } from "@/utils/types";
import Image from "next/image";

function SearchPostPreview({ post }: { post: PostPreview }) {
  // Returned JSX
  return (
    <div className="text-white">
      <div className="relative h-25 sm:h-35 w-full mb-1">
        <Image
          fill
          src={post.imageUrl}
          alt={post.title}
          className="object-cover rounded-lg"
        />
      </div>
      <h2 className="text-md sm:text-xl">{post.title}</h2>
      <p className="text-sm sm:text-lg">{post.preview}</p>
    </div>
  );
}

export default SearchPostPreview;
