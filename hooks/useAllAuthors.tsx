import { useQuery } from "@tanstack/react-query";
import { fetchAllUsers } from "@/utils/actions/users";

function useAllAuthors(page: number) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["all-users", page],
    queryFn: () => fetchAllUsers(page),
  });

  // Returned data
  return { data, isLoading, error, page };
}

export default useAllAuthors;
