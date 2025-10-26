import { getUser } from "@/utils/actions";
import { useQuery } from "@tanstack/react-query";

function useUser(clerkId: string) {
  const { data: user, isPending } = useQuery({
    queryKey: ["user", clerkId],
    queryFn: () => getUser(clerkId),
    enabled: !!clerkId,
  });

  return { user, isPending };
}

export default useUser;
