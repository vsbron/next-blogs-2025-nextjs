import { useQuery } from "@tanstack/react-query";
import { fetchSearchPosts } from "@/utils/actions/posts";

function useSearchPosts(
  query: string,
  filters: Record<string, string>,
  page: number
) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["search-posts", query, filters, page],
    queryFn:
      query === ""
        ? async () => ({ posts: [], total: 0 })
        : () => fetchSearchPosts(query, filters, page),
  });

  // Returned data
  return { data, isLoading, error };
}

export default useSearchPosts;
