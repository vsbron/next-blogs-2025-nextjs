import { useQuery } from "@tanstack/react-query";
import { fetchUserPosts } from "@/utils/actions/posts";

function useUserPosts(userId?: string) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["user-posts", userId],
    queryFn: () => fetchUserPosts(userId),
  });

  // Returned data
  return { data, isLoading, error };
}

export default useUserPosts;
