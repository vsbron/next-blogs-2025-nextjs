"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useClerk, useUser } from "@clerk/nextjs";
import { toast } from "sonner";

import { CardContent } from "@/components/ui/card";

import { Like, Post } from "@/utils/types";
import { togglePostLike } from "@/utils/actions/post";

import { Eye, ThumbsUp, User } from "lucide-react";

function PostSectionStats({ post }: { post: Post }) {
  // Destructure the post and set icons class
  const { id, author, views, likes } = post;
  const iconsStatsContainerClass = "flex items-center gap-x-1 xs:gap-x-1.5";
  const iconsClass = "w-4.5 h-4.5 sm:w-5 sm:h-5 stroke-primary/80";

  // Get the current user id and signIn function from clerk
  const { user } = useUser();
  const currentUserId = user?.id;
  const { openSignIn } = useClerk();

  // Create state value for liked post and likes count
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [likeCount, setLikeCount] = useState<number>(likes.length);

  // Use Effect function that updates the likes counter
  useEffect(() => {
    if (currentUserId) {
      setIsLiked(!!likes.find((like: Like) => like.userId === currentUserId));
    }
  }, [likes, currentUserId]);

  // Like post handler function
  const likePostHandler = async () => {
    // Guard clause
    if (!currentUserId) return openSignIn();

    // Change the liked post value
    const result = await togglePostLike(id, currentUserId);
    setIsLiked(result.liked);

    // Update the likes count and trigger toast
    setLikeCount((prev) => (result.liked ? prev + 1 : prev - 1));
    toast(`Post ${result.liked ? "added to" : "removed from"} Favorites`);
  };

  // Returned JSX
  return (
    <CardContent className="px-3 xs:px-4 text-sm xs:text-md">
      <div className="flex items-center justify-between text-foreground/50 font-semibold">
        <div className="flex items-center gap-x-1 mr-3">
          <User className={iconsClass} />
          <Link href={`/author/${author.username}`} className="before:h-0">
            {author.displayName}
          </Link>
        </div>
        <div className="flex items-center gap-x-3 xs:gap-x-4">
          <div className={iconsStatsContainerClass}>
            <Eye className={iconsClass} />
            {views}
          </div>
          <div className={iconsStatsContainerClass}>
            <ThumbsUp
              className={`${iconsClass} cursor-pointer transition-colors duration-200 ${
                isLiked ? "fill-primary" : ""
              }`}
              onClick={likePostHandler}
            />
            {likeCount}
          </div>
        </div>
      </div>
    </CardContent>
  );
}

export default PostSectionStats;
