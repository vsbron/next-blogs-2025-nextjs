import { fetchFeaturedPosts } from "@/utils/actions/posts";
import { useQuery } from "@tanstack/react-query";

function useFeaturedPosts() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["featured-posts"],
    queryFn: fetchFeaturedPosts,
  });

  // Returned data
  return { data, isLoading, error };
}

export default useFeaturedPosts;
