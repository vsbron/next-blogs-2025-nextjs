import { fetchUserPosts } from "@/utils/actions/posts";
import { useQuery } from "@tanstack/react-query";

function useUserPosts(userId?: string) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["user-posts", userId],
    queryFn: () => fetchUserPosts(userId),
  });

  // Returned data
  return { data, isLoading, error };
}

export default useUserPosts;
