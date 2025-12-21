import { fetchPostComments } from "@/utils/actions/comments";

import { useQuery } from "@tanstack/react-query";

export function useGetComments(postId: number) {
  const { data: comments, isLoading } = useQuery({
    queryKey: ["comments", postId],
    queryFn: () => fetchPostComments(postId),
  });
  // Returned data
  return { comments, isLoading };
}

export default useGetComments;
