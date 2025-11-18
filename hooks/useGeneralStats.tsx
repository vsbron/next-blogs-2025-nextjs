import { useQuery } from "@tanstack/react-query";
import {
  fetchMostLikedPosts,
  fetchMostViewedPosts,
  fetchUsersWithMostPosts,
} from "@/utils/actions/posts";

function useGeneralStats() {
  const {
    data: likedPosts,
    isLoading: isLoadingLiked,
    error: errorLiked,
  } = useQuery({
    queryKey: ["liked-posts"],
    queryFn: fetchMostLikedPosts,
  });

  const {
    data: viewedPosts,
    isLoading: isLoadingViewed,
    error: errorViewed,
  } = useQuery({
    queryKey: ["viewed-posts"],
    queryFn: fetchMostViewedPosts,
  });

  const {
    data: mostPosts,
    isLoading: isLoadingMostPosts,
    error: errorMostPosts,
  } = useQuery({
    queryKey: ["most-posts"],
    queryFn: fetchUsersWithMostPosts,
  });

  // Combine isLoading and errors
  const isLoading = isLoadingLiked || isLoadingViewed || isLoadingMostPosts;
  const error = errorLiked || errorViewed || errorMostPosts;

  // Returned data
  return { viewedPosts, likedPosts, mostPosts, isLoading, error };
}

export default useGeneralStats;
