import { useQuery } from "@tanstack/react-query";
import { fetchAllPosts } from "@/utils/actions/posts";

function useAllPosts(filters: Record<string, string>, page: number) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["all-posts", filters, page],
    queryFn: () => fetchAllPosts(filters, page),
  });

  // Returned data
  return { data, isLoading, error };
}

export default useAllPosts;
