import { useQuery } from "@tanstack/react-query";
import { fetchAllUsers } from "@/utils/actions/users";

function useAllAuthors(filters: Record<string, string>, page: number) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["all-users", filters, page],
    queryFn: () => fetchAllUsers(filters, page),
  });

  // Returned data
  return { data, isLoading, error, page };
}

export default useAllAuthors;
