import { fetchAllPosts } from "@/utils/actions/posts";
import { useQuery } from "@tanstack/react-query";

function useAllPosts() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["all-posts"],
    queryFn: fetchAllPosts,
  });

  // Returned data
  return { data, isLoading, error };
}

export default useAllPosts;
