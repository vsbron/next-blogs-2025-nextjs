import { fetchUserWithID } from "@/utils/actions/users";
import { useQuery } from "@tanstack/react-query";

export function useGetUser(userId?: string) {
  const { data: user, isLoading } = useQuery({
    queryKey: ["user", userId],
    queryFn: () => fetchUserWithID(userId!),
    enabled: !!userId,
  });

  // Returned data
  return { user, isLoading };
}

export default useGetUser;
