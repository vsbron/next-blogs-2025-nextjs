import { useQuery } from "@tanstack/react-query";
import { fetchAuthorPosts } from "@/utils/actions/posts";

function useAuthorPosts(
  userId: string,
  filters: Record<string, string>,
  page: number
) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["author-posts", userId, page, filters],
    queryFn: () => fetchAuthorPosts(userId, filters, page),
  });

  // Returned data
  return { data, isLoading, error };
}

export default useAuthorPosts;
