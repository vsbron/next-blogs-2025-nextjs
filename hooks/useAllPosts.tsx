import { fetchAllPosts } from "@/utils/actions/posts";
import { useQuery } from "@tanstack/react-query";

function useAllPosts(page: number) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["all-posts", page],
    queryFn: () => fetchAllPosts(page),
  });

  // Returned data
  return { data, isLoading, error, page };
}

export default useAllPosts;
