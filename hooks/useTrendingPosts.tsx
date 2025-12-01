import { fetchTrendingPosts } from "@/utils/actions/posts";
import { useQuery } from "@tanstack/react-query";

function useTrendingPosts(page: number) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["trending-posts", page],
    queryFn: () => fetchTrendingPosts(page),
  });

  // Returned data
  return { data, isLoading, error };
}

export default useTrendingPosts;
