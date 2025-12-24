import { useQuery } from "@tanstack/react-query";
import { fetchUserComments } from "@/utils/actions/comments";

function useUserComments(userId?: string) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["user-comments", userId],
    queryFn: () => fetchUserComments(userId),
  });

  // Returned data
  return { data, isLoading, error };
}

export default useUserComments;
